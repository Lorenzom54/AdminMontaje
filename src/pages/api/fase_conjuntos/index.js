import { fetchFaseConjuntos } from '../../../../lib/fase_conjuntos_api.js';

export const prerender = false;

export async function GET() {
  try {
    const fases = await fetchFaseConjuntos();
    
    return new Response(JSON.stringify(fases), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error en GET /api/fase_conjuntos:', error);
    
    return new Response(JSON.stringify({ 
      error: 'Error interno del servidor' 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
