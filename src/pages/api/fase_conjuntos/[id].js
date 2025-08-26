import { updateFaseConjunto, deleteFaseConjunto } from '../../../../lib/fase_conjuntos_api.js';

export const prerender = false;

export async function PUT({ params, request }) {
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

    const result = await updateFaseConjunto(parseInt(id), { fase: fase.trim() });

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
    console.error('Error en PUT /api/fase_conjuntos/[id]:', error);
    
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

export async function DELETE({ params }) {
  try {
    const { id } = params;
    const result = await deleteFaseConjunto(parseInt(id));

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
    console.error('Error en DELETE /api/fase_conjuntos/[id]:', error);
    
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
