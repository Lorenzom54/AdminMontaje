import { b as fetchConjuntos } from '../../chunks/conjunto_api_D-1bf52-.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;

async function GET() {
  try {
    const conjuntos = await fetchConjuntos();
    
    return new Response(JSON.stringify({ success: true, data: conjuntos }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error en /api/conjuntos:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al obtener conjuntos' }), {
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
