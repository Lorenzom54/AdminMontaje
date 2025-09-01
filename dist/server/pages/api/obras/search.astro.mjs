import { searchObras } from '../../../chunks/obra_api_D3QhXp__.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;

async function GET({ url }) {
  try {
    const searchParams = new URL(url).searchParams;
    
    const filters = {
      estado: searchParams.get('estado'),
      cliente: searchParams.get('cliente'),
      responsable: searchParams.get('responsable'),
      fecha_inicio: searchParams.get('fecha_inicio'),
      fecha_fin: searchParams.get('fecha_fin')
    };

    // Remover filtros vacíos
    Object.keys(filters).forEach(key => {
      if (!filters[key]) {
        delete filters[key];
      }
    });

    const obras = await searchObras(filters);

    return new Response(JSON.stringify({ success: true, data: obras }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error en /api/obras/search:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al buscar obras' }), {
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
