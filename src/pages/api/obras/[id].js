import { fetchObraByIdWithFases, updateObraWithFases, deleteObra } from '../../../lib/obra_api.js';

export const prerender = false;

export async function GET({ params }) {
  try {
    const { id } = params;
    const obra = await fetchObraByIdWithFases(id);
    
    if (!obra) {
      return new Response(JSON.stringify({ success: false, error: 'Obra no encontrada' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(obra), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error en GET /api/obras/[id]:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al obtener la obra' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function PUT({ params, request }) {
  try {
    const { id } = params;
    const body = await request.json();

    const { 
      nombre, 
      estado, 
      fecha_inicio, 
      fecha_fin, 
      ubicacion, 
      responsable, 
      descripcion,
      fases_piezas = [],
      fases_conjuntos = []
    } = body;

    // Validaciones básicas
    if (!nombre || !estado || !fecha_inicio) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Los campos nombre, estado, fecha de inicio son obligatorios' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const updates = {
      nombre,
      estado,
      fecha_inicio,
      fecha_fin,
      ubicacion,
      responsable,
      descripcion
    };

    const result = await updateObraWithFases(id, updates, fases_piezas, fases_conjuntos);

    if (!result.success) {
      return new Response(JSON.stringify(result), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error en PUT /api/obras/[id]:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al actualizar la obra' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function POST({ params, request }) {
  try {
    const { id } = params;
    const body = await request.json();
    
    // Si el body contiene action: 'delete', entonces eliminar
    if (body.action === 'delete') {
      const result = await deleteObra(id);

      if (!result.success) {
        return new Response(JSON.stringify(result), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      return new Response(JSON.stringify({ success: true, message: 'Obra eliminada correctamente' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    // Si no es delete, devolver error
    return new Response(JSON.stringify({ success: false, error: 'Acción no válida' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error en POST /api/obras/[id]:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al procesar la solicitud' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}