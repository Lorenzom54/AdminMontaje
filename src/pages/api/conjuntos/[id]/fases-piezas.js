import { getFasesPiezasByConjunto } from '../../../../lib/conjunto_api.js';

export const prerender = false;

// GET - Obtener fases de piezas de un conjunto
export async function GET({ params }) {
  try {
    const { id } = params;
    const fases = await getFasesPiezasByConjunto(id);

    return new Response(JSON.stringify({ 
      success: true, 
      data: fases 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error en GET /api/conjuntos/[id]/fases-piezas:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'Error al obtener las fases del conjunto' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
