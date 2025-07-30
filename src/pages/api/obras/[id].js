import { fetchObraById, updateObra, deleteObra } from '../../../lib/obra_api';

export const prerender = true;

export async function getStaticPaths() {
  // Return empty array since these are API endpoints that should be generated on-demand
  return [];
}

// GET - Obtener obra por ID
export async function GET({ params }) {
  try {
    const { id } = params;
    const obra = await fetchObraById(id);

    if (!obra) {
      return new Response(JSON.stringify({ success: false, error: 'Obra no encontrada' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true, data: obra }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error en GET /api/obras/[id]:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al obtener la obra' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// PUT - Actualizar obra
export async function PUT({ params, request }) {
  try {
    const { id } = params;
    const updates = await request.json();

    const result = await updateObra(id, updates);

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
    console.error('Error en PUT /api/obras/[id]:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al actualizar la obra' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// DELETE - Eliminar obra
export async function DELETE({ params }) {
  try {
    const { id } = params;
    const result = await deleteObra(id);

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
    console.error('Error en DELETE /api/obras/[id]:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al eliminar la obra' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}