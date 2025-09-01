import { d as actualizarFasesTodosConjuntos } from '../../../chunks/conjunto_api_DdlW2uM9.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;

async function POST({ request }) {
  try {
    console.log('Iniciando actualización de fases para todos los conjuntos...');
    
    const results = await actualizarFasesTodosConjuntos();

    return new Response(JSON.stringify({
      success: true,
      message: `Actualización completada: ${results.actualizados}/${results.total} conjuntos actualizados`,
      data: results
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error en /api/conjuntos/update-fases:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'Error al actualizar fases: ' + error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
