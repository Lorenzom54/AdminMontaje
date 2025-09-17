import { addChapa } from '../../../lib/chapa_api';

export const prerender = false;

export async function POST({ request }) {
  try {
    const body = await request.json();
    
    console.log('Datos recibidos:', body); // Para debug

    const { codigo, colada, espesor, dimensiones, tipo_acero } = body;

    // Validaciones básicas
    if (!codigo || !tipo_acero) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Los campos código y tipo de acero son obligatorios'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    // Preparar datos para inserción
    const chapaData = {
      codigo: codigo, // Mantener como string si es necesario
      tipo_acero: tipo_acero,
      colada: colada || null,
      espesor: espesor || null,
      dimensiones: dimensiones || null
    };
    
    console.log('Datos a insertar:', chapaData); // Para debug

    const result = await addChapa(chapaData);

    if (!result.success) {
      console.error('Error en addChapa:', result.error); // Para debug
      return new Response(JSON.stringify(result), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(result), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error en /api/chapas/create:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al crear la chapa' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}