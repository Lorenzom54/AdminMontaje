import { b as addConjunto } from '../../../chunks/conjunto_api_DlSSexBU.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;

async function POST({ request }) {
  try {
    const body = await request.json();
    
    console.log('Datos recibidos:', body); // Para debug

    const { codigo, descripcion, obra_id, is_completed } = body;

    // Validaciones básicas
    if (!codigo || !obra_id) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Los campos código y obra son obligatorios'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    // Preparar datos para inserción
    const conjuntoData = {
      codigo: codigo,
      descripcion: descripcion || null,
      obra_id: parseInt(obra_id),
      is_completed: is_completed || false
    };
    
    console.log('Datos a insertar:', conjuntoData); // Para debug

    const result = await addConjunto(conjuntoData);

    if (!result.success) {
      console.error('Error en addConjunto:', result.error); // Para debug
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
    console.error('Error en /api/conjuntos/create:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al crear el conjunto' }), {
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
