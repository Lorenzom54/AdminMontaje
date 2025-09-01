import { addPieza } from '../../../lib/pieza_api.js';
import { fetchConjuntoByCodigo, addConjunto } from '../../../lib/conjunto_api.js';
import { fetchFaseConjuntosForSelect } from '../../../lib/fase_conjuntos_api.js';

export const prerender = false;

export async function POST({ request }) {
  try {
    const body = await request.json();
    const { csvData, selectedObraId } = body;

    if (!csvData || !Array.isArray(csvData) || !selectedObraId) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Datos CSV inválidos o obra no seleccionada' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Obtener las fases de conjuntos para encontrar el estado "Incompleto"
    const fasesConjuntos = await fetchFaseConjuntosForSelect();
    const estadoIncompleto = fasesConjuntos.find(fase => 
      fase.fase.toLowerCase().includes('incompleto') || 
      fase.fase.toLowerCase().includes('pendiente') ||
      fase.fase.toLowerCase().includes('inicial')
    );
    
    // Usar 0 como estado por defecto para conjuntos (Incompleto)
    const estadoPorDefecto = 0;
    
    console.log('Estado por defecto para conjuntos:', estadoPorDefecto);
    console.log('Fases disponibles:', fasesConjuntos.map(f => `${f.id}: ${f.fase}`));

    const results = {
      conjuntosCreados: 0,
      piezasCreadas: 0,
      errores: []
    };
    
    const conjuntosCache = new Map(); // Cache para evitar consultas repetidas
    const BATCH_SIZE = 50; // Procesar en lotes de 50 piezas
    
    // Procesar en lotes
    for (let batchStart = 0; batchStart < csvData.length; batchStart += BATCH_SIZE) {
      const batchEnd = Math.min(batchStart + BATCH_SIZE, csvData.length);
      const batch = csvData.slice(batchStart, batchEnd);
      
      console.log(`Procesando lote ${Math.floor(batchStart / BATCH_SIZE) + 1}/${Math.ceil(csvData.length / BATCH_SIZE)} (${batchStart + 1}-${batchEnd} de ${csvData.length})`);
      
      // Procesar cada fila del lote
      for (let index = batchStart; index < batchEnd; index++) {
        const row = csvData[index];
        
        try {
          const conjuntoCodigo = row.Conjunto?.trim();
          const piezaCodigo = row.Parte?.trim();
          const tipoMaterial = row.Perfil?.trim() || 'chapas y perfiles';
          const colada = row.Apodo?.trim() || null;
          
          if (!conjuntoCodigo || !piezaCodigo) {
            results.errores.push(`Fila ${index + 1}: Conjunto y Parte son obligatorios`);
            continue;
          }
          
          let conjuntoId;
          
          // Verificar si ya tenemos el conjunto en cache
          if (conjuntosCache.has(conjuntoCodigo)) {
            conjuntoId = conjuntosCache.get(conjuntoCodigo);
          } else {
            // Buscar conjunto existente
            let conjunto = await fetchConjuntoByCodigo(conjuntoCodigo);
            
            if (!conjunto) {
              // Crear nuevo conjunto
              const conjuntoResult = await addConjunto({
                codigo: conjuntoCodigo,
                obra_id: parseInt(selectedObraId),
                estado_actual: estadoPorDefecto, // Estado por defecto dinámico
                is_completed: false,
                descripcion: `Conjunto ${conjuntoCodigo}`
              });
              
              if (!conjuntoResult.success) {
                results.errores.push(`Fila ${index + 1}: Error al crear conjunto ${conjuntoCodigo}: ${conjuntoResult.error}`);
                continue;
              }
              
              conjunto = conjuntoResult.data;
              results.conjuntosCreados++;
            }
            
            conjuntoId = conjunto.id;
            conjuntosCache.set(conjuntoCodigo, conjuntoId);
          }

          // Crear la pieza
          const piezaData = {
            codigo: piezaCodigo,
            tipo_material: tipoMaterial,
            colada: colada,
            fase: 0, // Por defecto en el primer estado (0)
            conjunto_id: conjuntoId,
            chapa_id: null
          };
          
          const piezaResult = await addPieza(piezaData);
          
          if (!piezaResult.success) {
            results.errores.push(`Fila ${index + 1}: Error al crear pieza ${piezaCodigo}: ${piezaResult.error}`);
            continue;
          }
          
          results.piezasCreadas++;
          
        } catch (error) {
          results.errores.push(`Fila ${index + 1}: ${error.message}`);
        }
      }
      
      // Pequeña pausa entre lotes para evitar sobrecarga
      if (batchEnd < csvData.length) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }

    // Preparar mensaje de respuesta
    let message = `Importación completada: ${results.piezasCreadas} piezas creadas`;
    if (results.conjuntosCreados > 0) {
      message += `, ${results.conjuntosCreados} conjuntos creados`;
    }
    if (results.errores.length > 0) {
      message += `. ${results.errores.length} errores encontrados`;
    }

    return new Response(JSON.stringify({
      success: true,
      message: message,
      data: {
        piezasCreadas: results.piezasCreadas,
        conjuntosCreados: results.conjuntosCreados,
        errores: results.errores
      }
    }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error en /api/piezas/import-csv:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'Error al importar CSV: ' + error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}