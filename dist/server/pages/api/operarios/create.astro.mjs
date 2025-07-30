import { a as addOperario } from '../../../chunks/operario_api_CtNZFblv.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;

async function POST({ request }) {
  try {
    const body = await request.json();
    
    console.log('Datos recibidos:', body); // Para debug

    const { nombre, rol, usuario, email } = body;

    // Validaciones básicas
    if (!nombre || !rol || !email) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Los campos nombre, rol y email son obligatorios'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    // Preparar datos para inserción
    const operarioData = {
      nombre: nombre,
      rol: rol,
      usuario: usuario || null,
      email: email
    };
    
    console.log('Datos a insertar:', operarioData); // Para debug

    const result = await addOperario(operarioData);

    if (!result.success) {
      console.error('Error en addOperario:', result.error); // Para debug
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
    console.error('Error en /api/operarios/create:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al crear el operario' }), {
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
