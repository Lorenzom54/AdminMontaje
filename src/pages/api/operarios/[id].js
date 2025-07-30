import { fetchOperarioById, updateOperario, deleteOperario } from '../../../lib/operario_api';

export const prerender = false;

// GET - Obtener operario por ID
export async function GET({ params }) {
  try {
    const { id } = params;
    const operario = await fetchOperarioById(id);

    if (!operario) {
      return new Response(JSON.stringify({ success: false, error: 'Operario no encontrado' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true, data: operario }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error en GET /api/operarios/[id]:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al obtener el operario' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// PUT - Actualizar operario
export async function PUT({ params, request }) {
  try {
    const { id } = params;
    const updates = await request.json();

    const result = await updateOperario(id, updates);

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
    console.error('Error en PUT /api/operarios/[id]:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al actualizar el operario' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// DELETE - Eliminar operario
export async function DELETE({ params }) {
  try {
    const { id } = params;
    const result = await deleteOperario(id);

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
    console.error('Error en DELETE /api/operarios/[id]:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al eliminar el operario' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}