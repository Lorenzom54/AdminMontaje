import { s as searchPiezas, c as searchPiezasCount } from '../../../chunks/pieza_api_DW6qEyk6.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;

async function GET({ url }) {
  try {
    const searchParams = new URL(url).searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = parseInt(searchParams.get('pageSize') || '20');
    
    const filters = {
      tipo_material: searchParams.get('tipo_material'),
      codigo: searchParams.get('codigo'),
      colada: searchParams.get('colada'),
      fase: searchParams.get('fase')
    };

    // Remover filtros vacíos
    Object.keys(filters).forEach(key => {
      if (!filters[key] && filters[key] !== 0) {
        delete filters[key];
      }
    });

    const piezas = await searchPiezas(filters, page, pageSize);
    const totalCount = await searchPiezasCount(filters);

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
    console.error('Error en /api/piezas/search:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al buscar piezas' }), {
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
