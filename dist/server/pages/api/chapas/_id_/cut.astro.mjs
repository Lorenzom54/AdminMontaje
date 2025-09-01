import { m as markPiezasCortadasByChapaId } from '../../../../chunks/pieza_api_DW6qEyk6.mjs';
export { renderers } from '../../../../renderers.mjs';

const prerender = false;

async function POST({ params }) {
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
