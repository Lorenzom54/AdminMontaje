import { fetchChapaById, updateChapa, deleteChapa } from '../../../lib/chapa_api';

export const prerender = true;

export async function getStaticPaths() {
  // Return empty array since these are API endpoints that should be generated on-demand
  return [];
}

// GET - Obtener chapa por ID
export async function GET({ params }) {
  try {
    const { id } = params;
    const chapa = await fetchChapaById(id);

    if (!chapa) {
      return new Response(JSON.stringify({ success: false, error: 'Chapa no encontrada' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true, data: chapa }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error en GET /api/chapas/[id]:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al obtener la chapa' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// PUT - Actualizar chapa
export async function PUT({ params, request }) {
  try {
    const { id } = params;
    const updates = await request.json();

    const result = await updateChapa(id, updates);

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
    console.error('Error en PUT /api/chapas/[id]:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al actualizar la chapa' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// DELETE - Eliminar chapa
export async function DELETE({ params }) {
  try {
    const { id } = params;
    const result = await deleteChapa(id);

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
    console.error('Error en DELETE /api/chapas/[id]:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al eliminar la chapa' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}