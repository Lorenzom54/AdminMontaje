import { a as addFasePieza } from '../../../chunks/fase_piezas_api_BMSUIlot.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;

async function POST({ request }) {
  try {
    const formData = await request.formData();
    const fase = formData.get('fase');

    if (!fase || fase.trim() === '') {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'El nombre de la fase es requerido' 
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    const result = await addFasePieza({ fase: fase.trim() });

    if (result.success) {
      return new Response(JSON.stringify(result), {
        status: 201,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } else {
      return new Response(JSON.stringify(result), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  } catch (error) {
    console.error('Error en POST /api/fase_piezas/create:', error);
    
    return new Response(JSON.stringify({ 
      success: false, 
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
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
