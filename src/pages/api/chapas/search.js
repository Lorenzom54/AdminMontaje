import { searchChapas } from '../../../lib/chapa_api';

export const prerender = true;

export async function GET({ url }) {
  try {
    const searchParams = new URL(url).searchParams;
    
    const filters = {
      tipo_acero: searchParams.get('tipo_acero'),
      codigo: searchParams.get('codigo'),
      colada: searchParams.get('colada'),
      espesor: searchParams.get('espesor')
    };

    // Remover filtros vacíos
    Object.keys(filters).forEach(key => {
      if (!filters[key]) {
        delete filters[key];
      }
    });

    const chapas = await searchChapas(filters);

    return new Response(JSON.stringify({ success: true, data: chapas }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error en /api/chapas/search:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al buscar chapas' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}