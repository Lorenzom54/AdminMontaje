import { d as fetchConjuntoById, u as updateConjunto, e as deleteConjunto } from '../../../chunks/conjunto_api_D-1bf52-.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;

// GET - Obtener conjunto por ID
async function GET({ params }) {
  try {
    const { id } = params;
    const conjunto = await fetchConjuntoById(id);

    if (!conjunto) {
      return new Response(JSON.stringify({ success: false, error: 'Conjunto no encontrado' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true, data: conjunto }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error en GET /api/conjuntos/[id]:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al obtener el conjunto' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// PUT - Actualizar conjunto
async function PUT({ params, request }) {
  try {
    const { id } = params;
    const updates = await request.json();

    // Convertir obra_id a número si está presente
    if (updates.obra_id) {
      updates.obra_id = parseInt(updates.obra_id);
    }

    // Convertir fase_id a número si está presente
    if (updates.fase_id !== undefined) {
      updates.fase_id = parseInt(updates.fase_id);
    }

    const result = await updateConjunto(id, updates);

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
    console.error('Error en PUT /api/conjuntos/[id]:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al actualizar el conjunto' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// DELETE - Eliminar conjunto
async function DELETE({ params }) {
  try {
    const { id } = params;
    const result = await deleteConjunto(id);

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
    console.error('Error en DELETE /api/conjuntos/[id]:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al eliminar el conjunto' }), {
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
