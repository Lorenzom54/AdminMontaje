import { f as fetchOperarios } from '../../chunks/operario_api_CtNZFblv.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = true;

async function GET() {
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
