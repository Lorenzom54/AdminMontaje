import { s as searchPiezas } from '../../../chunks/pieza_api_BZdt-77e.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = true;

async function GET({ url }) {
  try {
    const searchParams = new URL(url).searchParams;
    
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

    const piezas = await searchPiezas(filters);

    return new Response(JSON.stringify({ success: true, data: piezas }), {
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
