import { b as fetchPiezas } from '../../chunks/pieza_api_BZdt-77e.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = true;

async function GET() {
  try {
    const piezas = await fetchPiezas();
    
    return new Response(JSON.stringify({ success: true, data: piezas }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error en /api/piezas:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al obtener piezas' }), {
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
