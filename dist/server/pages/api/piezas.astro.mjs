import { c as fetchPiezas, d as fetchPiezasCount } from '../../chunks/pieza_api_u1cQ-FVJ.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;

async function GET({ url }) {
  try {
    const searchParams = new URL(url).searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = parseInt(searchParams.get('pageSize') || '20');
    
    const piezas = await fetchPiezas(page, pageSize);
    const totalCount = await fetchPiezasCount();
    
    return new Response(JSON.stringify({ 
      success: true, 
      data: piezas,
      pagination: {
        page,
        pageSize,
        totalCount,
        totalPages: Math.ceil(totalCount / pageSize)
      }
    }), {
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
