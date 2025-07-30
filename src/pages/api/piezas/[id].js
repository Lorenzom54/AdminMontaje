import { fetchPiezaById, updatePieza, deletePieza } from '../../../lib/pieza_api';

export const prerender = true;

// GET - Obtener pieza por ID
export async function GET({ params }) {
  try {
    const { id } = params;
    const pieza = await fetchPiezaById(id);

    if (!pieza) {
      return new Response(JSON.stringify({ success: false, error: 'Pieza no encontrada' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true, data: pieza }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error en GET /api/piezas/[id]:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al obtener la pieza' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// PUT - Actualizar pieza
export async function PUT({ params, request }) {
  try {
    const { id } = params;
    const updates = await request.json();

    // Convertir fase a número si está presente
    if (updates.fase !== undefined) {
      updates.fase = parseInt(updates.fase);
    }

    // Convertir IDs a números si están presentes
    if (updates.conjunto_id) {
      updates.conjunto_id = parseInt(updates.conjunto_id);
    }
    if (updates.chapa_id) {
      updates.chapa_id = parseInt(updates.chapa_id);
    }

    const result = await updatePieza(id, updates);

    if (!result.success) {
      return new Response(JSON.stringify(result), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error en PUT /api/piezas/[id]:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al actualizar la pieza' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// DELETE - Eliminar pieza
export async function DELETE({ params }) {
  try {
    const { id } = params;
    const result = await deletePieza(id);

    if (!result.success) {
      return new Response(JSON.stringify(result), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error en DELETE /api/piezas/[id]:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al eliminar la pieza' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}