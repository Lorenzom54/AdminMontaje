import { addPieza } from '../../../lib/pieza_api.js';
import { fetchConjuntoByCodigo, addConjunto } from '../../../lib/conjunto_api.js';

export const prerender = false;

// Función para generar estados dinámicamente basándose en el número de fases
function generarEstadosPorFases(numFases) {
  console.log(` GENERANDO ESTADOS: numFases = ${numFases}, tipo = ${typeof numFases}`);
  
  const estadosBase = ["Incompleto", "Para montar", "Completado"];
  
  if (numFases <= 0) {
    console.log(`⚠️ numFases <= 0, retornando estados base:`, estadosBase);
    return estadosBase;
  }
  
  const estados = ["Incompleto", "Para montar"];
  
  // Agregar fases de montaje y soldadura según el número
  for (let i = 1; i <= numFases; i++) {
    estados.push(`Montaje ${i}`);
    estados.push(`Soldadura ${i}`);
  }
  
  estados.push("Completado");
  
  console.log(`✅ Estados generados para ${numFases} fases:`, estados);
  return estados;
}


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

    // Analizar el CSV para determinar los diferentes números de fases
    const fasesUnicas = new Set();
    csvData.forEach((row, index) => {
      const numFases = parseInt(row.FASES) || 0;
      fasesUnicas.add(numFases);
      if (index < 10) { // Solo mostrar las primeras 10 filas para no saturar
        console.log(` Fila ${index + 1}: CONJUNTO=${row.CONJUNTO}, FASES=${row.FASES}, numFases=${numFases}`);
      }
    });

    console.log(' Números de fases únicos encontrados en el CSV:', Array.from(fasesUnicas));
    
    // Generar estados para cada número de fases (sin crear en BD)
    const fasesPorNumero = new Map();
    for (const numFases of fasesUnicas) {
      console.log(`\n🔄 Generando estados para ${numFases} fases...`);
      const estados = generarEstadosPorFases(numFases);
      fasesPorNumero.set(numFases, { estados });
      console.log(`📋 Estados para ${numFases} fases:`, estados);
    }
    
    // Usar 0 como estado por defecto para conjuntos (Incompleto)
    const estadoPorDefecto = 0;
    
    console.log('Estado por defecto para conjuntos:', estadoPorDefecto);

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
          // Usar los nombres correctos de las columnas del CSV (en mayúsculas)
          const conjuntoCodigo = row.CONJUNTO?.trim();
          const piezaCodigo = row.PARTE?.trim();
          const tipoMaterial = row.PERFIL?.trim() || 'chapas y perfiles';
          const colada = row['APODO PIEZA']?.trim() || null;
          const numFases = parseInt(row.FASES) || 0; // Cambiar de 'fases' a 'FASES'
          
          // Agregar log para ver qué número de fases se está leyendo
          console.log(`Fila ${index + 1}: Conjunto ${conjuntoCodigo}, Fases del CSV: ${row.FASES}, numFases parseado: ${numFases}`);

          if (!conjuntoCodigo || !piezaCodigo) {
            results.errores.push(`Fila ${index + 1}: Conjunto y Parte son obligatorios`);
            continue;
          }
          
          let conjuntoId;
          
          // Verificar si ya tenemos el conjunto en cache
          const cacheKey = `${conjuntoCodigo}_${numFases}`;
          if (conjuntosCache.has(cacheKey)) {
            conjuntoId = conjuntosCache.get(cacheKey);
          } else {
            // Buscar conjunto existente
            let conjunto = await fetchConjuntoByCodigo(conjuntoCodigo);
            
            if (!conjunto) {
              // Obtener los estados correspondientes para este conjunto
              const fasesInfo = fasesPorNumero.get(numFases);
              
              // Crear nuevo conjunto con los estados específicos
              const conjuntoResult = await addConjunto({
                codigo: conjuntoCodigo,
                obra_id: parseInt(selectedObraId),
                estado_actual: estadoPorDefecto,
                is_completed: false,
                descripcion: `Conjunto ${conjuntoCodigo}`,
                estados: fasesInfo ? fasesInfo.estados : ["Incompleto", "Para montar", "Completado"]
              });
              
              if (!conjuntoResult.success) {
                results.errores.push(`Fila ${index + 1}: Error al crear conjunto ${conjuntoCodigo}: ${conjuntoResult.error}`);
                continue;
              }
              
              conjunto = conjuntoResult.data;
              results.conjuntosCreados++;
              
              // Log de los estados que se asignaron a este conjunto
              if (fasesInfo) {
                console.log(`✅ Conjunto ${conjuntoCodigo} creado con ${numFases} fases:`, fasesInfo.estados);
              }
            } else {
              // El conjunto ya existe, verificar si necesita actualizar sus estados
              const fasesInfo = fasesPorNumero.get(numFases);
              if (fasesInfo && fasesInfo.estados) {
                // Verificar si los estados actuales son diferentes a los que deberían tener
                const estadosActuales = conjunto.estados || [];
                const estadosEsperados = fasesInfo.estados;
                
                // Comparar si los estados son diferentes
                const sonDiferentes = JSON.stringify(estadosActuales) !== JSON.stringify(estadosEsperados);
                
                if (sonDiferentes) {
                  console.log(`Actualizando estados del conjunto existente ${conjuntoCodigo}:`);
                  console.log(`Estados actuales:`, estadosActuales);
                  console.log(`Estados nuevos:`, estadosEsperados);
                  
                  // Actualizar el conjunto con los nuevos estados
                  const { updateConjunto } = await import('../../../lib/conjunto_api.js');
                  const updateResult = await updateConjunto(conjunto.id, {
                    estados: estadosEsperados
                  });
                  
                  if (updateResult.success) {
                    console.log(`✅ Conjunto ${conjuntoCodigo} actualizado con nuevos estados`);
                    conjunto = updateResult.data;
                  } else {
                    console.error(`❌ Error al actualizar conjunto ${conjuntoCodigo}:`, updateResult.error);
                  }
                } else {
                  console.log(`Conjunto ${conjuntoCodigo} ya tiene los estados correctos`);
                }
              }
            }
            
            conjuntoId = conjunto.id;
            conjuntosCache.set(cacheKey, conjuntoId);
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