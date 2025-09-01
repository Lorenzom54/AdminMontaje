import { f as fetchFaseConjuntos } from '../../chunks/fase_conjuntos_api_CA1fKWH4.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;

async function GET() {
  try {
    const fases = await fetchFaseConjuntos();
    
    return new Response(JSON.stringify(fases), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error en GET /api/fase_conjuntos:', error);
    
    return new Response(JSON.stringify({ 
      error: 'Error interno del servidor' 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
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
