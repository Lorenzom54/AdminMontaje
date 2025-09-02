import { a as addChapa } from '../../../chunks/chapa_api_D_TPbLdp.mjs';
import { u as updatePiecesWithChapaId } from '../../../chunks/pieza_api_CWN9-kdm.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;

async function POST({ request }) {
  try {
    const body = await request.json();
    const { chapa, piezas } = body;

    if (!chapa || !chapa.codigo || !piezas || !Array.isArray(piezas)) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Datos de chapa o piezas inválidos' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    console.log('Datos recibidos:', { chapa, piezas });

    // Paso 1: Crear la chapa
    const chapaResult = await addChapa(chapa);
    
    if (!chapaResult.success) {
      return new Response(JSON.stringify({
        success: false,
        error: `Error al crear la chapa: ${chapaResult.error}`
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const nuevaChapa = chapaResult.data;
    console.log('Chapa creada:', nuevaChapa);

    // Paso 2: Actualizar piezas con la nueva chapa
    const results = {
      chapaCreada: true,
      chapaId: nuevaChapa.id,
      chapaCodigo: nuevaChapa.codigo,
      piezasActualizadas: 0,
      totalSolicitadas: 0,
      detallesPiezas: [],
      errores: []
    };

    for (const pieza of piezas) {
      try {
        const updateResult = await updatePiecesWithChapaId(
          pieza.codigo, 
          pieza.cantidad, 
          nuevaChapa.id
        );
        
        results.totalSolicitadas += pieza.cantidad;
        
        if (updateResult.success) {
          results.piezasActualizadas += updateResult.updated;
          results.detallesPiezas.push({
            codigo: pieza.codigo,
            solicitadas: pieza.cantidad,
            actualizadas: updateResult.updated,
            disponibles: updateResult.available || 0,
            mensaje: updateResult.message
          });
        } else {
          results.errores.push(`Error con pieza ${pieza.codigo}: ${updateResult.error}`);
        }
        
      } catch (error) {
        results.errores.push(`Error procesando pieza ${pieza.codigo}: ${error.message}`);
      }
    }

    // Preparar mensaje de respuesta
    let message = `Chapa #${nuevaChapa.codigo} creada exitosamente. `;
    message += `${results.piezasActualizadas} de ${results.totalSolicitadas} piezas asociadas a la chapa.`;
    
    if (results.errores.length > 0) {
      message += ` Se encontraron ${results.errores.length} errores.`;
    }

    // Agregar detalles de piezas no encontradas
    const piezasNoEncontradas = results.detallesPiezas.filter(p => p.actualizadas === 0);
    if (piezasNoEncontradas.length > 0) {
      message += ` Piezas no encontradas: ${piezasNoEncontradas.map(p => p.codigo).join(', ')}.`;
    }

    return new Response(JSON.stringify({
      success: true,
      message: message,
      data: results
    }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error en /api/chapas/import-csv:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'Error al importar CSV: ' + error.message 
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
