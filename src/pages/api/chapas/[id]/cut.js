import { markPiezasCortadasByChapaId } from '../../../../lib/pieza_api.js';

export const prerender = false;

export async function POST({ params }) {
  try {
    const { id } = params;
    const result = await markPiezasCortadasByChapaId(id);

    const status = result.success ? 200 : 400;
    return new Response(JSON.stringify(result), {
      status,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error en POST /api/chapas/[id]/cut:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al marcar piezas' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
