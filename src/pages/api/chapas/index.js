import { fetchChapas } from '../../../lib/chapa_api';

export const prerender = true;

export async function GET() {
  try {
    const chapas = await fetchChapas();
    
    return new Response(JSON.stringify({ success: true, data: chapas }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error en /api/chapas:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al obtener chapas' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}