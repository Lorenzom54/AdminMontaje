import { fetchConjuntos } from '../../../lib/conjunto_api';

export const prerender = true;

export async function GET() {
  try {
    const conjuntos = await fetchConjuntos();
    
    return new Response(JSON.stringify({ success: true, data: conjuntos }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error en /api/conjuntos:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al obtener conjuntos' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}