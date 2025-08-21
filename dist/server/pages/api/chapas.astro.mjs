import { f as fetchChapas } from '../../chunks/chapa_api_D_TPbLdp.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;

async function GET() {
  try {
    const chapas = await fetchChapas();
    
    return new Response(JSON.stringify({ success: true, data: chapas }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error en /api/chapas:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al obtener chapas' }), {
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
