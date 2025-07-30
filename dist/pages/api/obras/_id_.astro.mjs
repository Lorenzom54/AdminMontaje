import { f as fetchObraById, u as updateObra, d as deleteObra } from '../../../chunks/obra_api_DPwG3jSY.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = true;

// GET - Obtener obra por ID
async function GET({ params }) {
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
async function PUT({ params, request }) {
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
async function DELETE({ params }) {
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  PUT,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
