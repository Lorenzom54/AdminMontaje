import { fetchFasePiezas } from '../../../lib/fase_piezas_api.js';
import { fetchFaseConjuntos } from '../../../lib/fase_conjuntos_api.js';

export async function GET() {
  try {
    console.log('=== OBTENIENDO FASES ===');
    
    // Obtener fases de piezas y conjuntos
    const fasesPiezas = await fetchFasePiezas();
    const fasesConjuntos = await fetchFaseConjuntos();
    
    console.log('Fases de piezas obtenidas:', fasesPiezas);
    console.log('Fases de conjuntos obtenidas:', fasesConjuntos);
    
    // Extraer solo los nombres de las fases
    const nombresFasesPiezas = fasesPiezas.map(fase => fase.fase);
    const nombresFasesConjuntos = fasesConjuntos.map(fase => fase.fase);
    
    console.log('Nombres de fases de piezas:', nombresFasesPiezas);
    console.log('Nombres de fases de conjuntos:', nombresFasesConjuntos);
    
    return new Response(JSON.stringify({
      success: true,
      fases_piezas: nombresFasesPiezas,
      fases_conjuntos: nombresFasesConjuntos
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error al obtener fases:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
