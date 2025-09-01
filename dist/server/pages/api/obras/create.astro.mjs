import { addObra } from '../../../chunks/obra_api_D3QhXp__.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;

async function POST({ request }) {
  try {
    const body = await request.json();
    
    console.log('=== DATOS RECIBIDOS EN API ===');
    console.log('Body completo:', body);
    console.log('fases_piezas:', body.fases_piezas, 'tipo:', typeof body.fases_piezas);
    console.log('fases_conjuntos:', body.fases_conjuntos, 'tipo:', typeof body.fases_conjuntos);

    const { 
      nombre, 
      estado, 
      fecha_inicio, 
      fecha_fin, 
      ubicacion, 
      responsable, 
      descripcion,
      fases_piezas,
      fases_conjuntos
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

    const result = await addObra({
      nombre,
      estado,
      fecha_inicio,
      fecha_fin,
      ubicacion,
      responsable,
      descripcion,
      fases_piezas,
      fases_conjuntos
    });

    if (!result.success) {
      return new Response(JSON.stringify(result), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(result), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error en /api/obras/create:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al crear la obra' }), {
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
