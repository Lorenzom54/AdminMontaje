import { fetchPiezas } from '../../../lib/pieza_api';

export const prerender = false;

export async function GET() {
  try {
    const piezas = await fetchPiezas();
    
    return new Response(JSON.stringify({ success: true, data: piezas }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error en /api/piezas:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al obtener piezas' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}