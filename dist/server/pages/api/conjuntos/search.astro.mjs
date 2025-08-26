import { s as searchConjuntos } from '../../../chunks/conjunto_api_samZRKcT.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;

async function GET({ url }) {
  try {
    const searchParams = new URL(url).searchParams;
    
    const filters = {
      codigo: searchParams.get('codigo'),
      descripcion: searchParams.get('descripcion'),
      obra_id: searchParams.get('obra_id'),
      is_completed: searchParams.get('is_completed')
    };

    // Remover filtros vacíos
    Object.keys(filters).forEach(key => {
      if (!filters[key] && filters[key] !== false) {
        delete filters[key];
      }
    });

    // Convertir is_completed a boolean si está presente
    if (filters.is_completed !== undefined) {
      filters.is_completed = filters.is_completed === 'true';
    }

    const conjuntos = await searchConjuntos(filters);

    return new Response(JSON.stringify({ success: true, data: conjuntos }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error en /api/conjuntos/search:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al buscar conjuntos' }), {
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
