import { fetchOperarios } from '../../../lib/operario_api';

export const prerender = true;

export async function GET() {
  try {
    const operarios = await fetchOperarios();
    
    return new Response(JSON.stringify({ success: true, data: operarios }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error en /api/operarios:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al obtener operarios' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}