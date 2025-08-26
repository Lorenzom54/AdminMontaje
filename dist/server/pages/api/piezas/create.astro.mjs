import { g as addPieza } from '../../../chunks/pieza_api_CcrAAw9v.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;

async function POST({ request }) {
  try {
    const body = await request.json();
    
    console.log('Datos recibidos:', body); // Para debug

    const { codigo, tipo_material, colada, fase_id, conjunto_id, chapa_id } = body;

    // Validaciones básicas
    if (!codigo || tipo_material === undefined) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Los campos código y tipo de material son obligatorios'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    // Preparar datos para inserción
    const piezaData = {
      codigo: codigo,
      tipo_material: tipo_material,
      colada: colada || null,
      fase_id: fase_id ? parseInt(fase_id) : null, // Usar fase_id en lugar de fase
      conjunto_id: conjunto_id ? parseInt(conjunto_id) : null,
      chapa_id: chapa_id ? parseInt(chapa_id) : null
    };
    
    console.log('Datos a insertar:', piezaData); // Para debug

    const result = await addPieza(piezaData);

    if (!result.success) {
      console.error('Error en addPieza:', result.error); // Para debug
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
    console.error('Error en /api/piezas/create:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al crear la pieza' }), {
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
