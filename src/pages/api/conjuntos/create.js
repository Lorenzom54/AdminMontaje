import { addConjunto } from '../../../lib/conjunto_api';

export const prerender = false;

export async function POST({ request }) {
  try {
    const body = await request.json();
    
    console.log('Datos recibidos:', body); // Para debug

    const { codigo, descripcion, obra_id, fase_id, is_completed } = body;

    // Validaciones básicas
    if (!codigo || !obra_id) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Los campos código y obra son obligatorios'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    // Preparar datos para inserción
    const conjuntoData = {
      codigo: codigo,
      descripcion: descripcion || null,
      obra_id: parseInt(obra_id),
      fase_id: fase_id ? parseInt(fase_id) : null, // Añadir fase_id
      is_completed: is_completed || false
    };
    
    console.log('Datos a insertar:', conjuntoData); // Para debug

    const result = await addConjunto(conjuntoData);

    if (!result.success) {
      console.error('Error en addConjunto:', result.error); // Para debug
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
    console.error('Error en /api/conjuntos/create:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al crear el conjunto' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}