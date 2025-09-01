import { u as updateFasePieza, d as deleteFasePieza } from '../../../chunks/fase_piezas_api_BMSUIlot.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;

async function PUT({ params, request }) {
  try {
    const { id } = params;
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

    const result = await updateFasePieza(parseInt(id), { fase: fase.trim() });

    if (result.success) {
      return new Response(JSON.stringify(result), {
        status: 200,
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
    console.error('Error en PUT /api/fase_piezas/[id]:', error);
    
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

async function DELETE({ params }) {
  try {
    const { id } = params;
    const result = await deleteFasePieza(parseInt(id));

    if (result.success) {
      return new Response(JSON.stringify(result), {
        status: 200,
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
    console.error('Error en DELETE /api/fase_piezas/[id]:', error);
    
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
  DELETE,
  PUT,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
