import { importPiezasFromCSV, FASES_REVERSE } from '../../../lib/pieza_api';

export const prerender = true;

export async function POST({ request }) {
  try {
    const body = await request.json();
    const { csvData } = body;

    if (!csvData || !Array.isArray(csvData)) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Datos CSV inválidos' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Procesar y validar datos CSV
    const processedData = csvData.map((row, index) => {
      try {
        // Convertir fase de texto a número
        let fase = 0; // Default a Corte
        if (row.fase !== undefined && row.fase !== null && row.fase !== '') {
          if (typeof row.fase === 'string') {
            fase = FASES_REVERSE[row.fase] !== undefined ? FASES_REVERSE[row.fase] : parseInt(row.fase);
          } else {
            fase = parseInt(row.fase);
          }
        }

        return {
          codigo: row.codigo,
          tipo_material: row.tipo_material || 'chapas y perfiles',
          colada: row.colada || null,
          fase: fase,
          conjunto_id: row.conjunto_id ? parseInt(row.conjunto_id) : null,
          chapa_id: row.chapa_id ? parseInt(row.chapa_id) : null
        };
      } catch (error) {
        throw new Error(`Error en fila ${index + 1}: ${error.message}`);
      }
    });

    const result = await importPiezasFromCSV(processedData);

    if (!result.success) {
      return new Response(JSON.stringify(result), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({
      success: true,
      message: `Se importaron ${result.count} piezas correctamente`,
      data: result.data
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