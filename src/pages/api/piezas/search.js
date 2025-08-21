import { searchPiezas, getPhaseCounts } from '../../../lib/pieza_api';

export const prerender = false;

export async function GET({ url }) {
  try {
    const searchParams = new URL(url).searchParams;
    
    // Parámetros de paginación
    const page = parseInt(searchParams.get('page')) || 1;
    const pageSize = parseInt(searchParams.get('pageSize')) || 10;
    
    // Filtros de búsqueda
    const filters = {
      tipo_material: searchParams.get('tipo_material'),
      codigo: searchParams.get('codigo'),
      colada: searchParams.get('colada'),
      fase: searchParams.get('fase'),
      search: searchParams.get('search'),
      obra: searchParams.get('obra')
    };

    // Remover filtros vacíos
    Object.keys(filters).forEach(key => {
      if (!filters[key] && filters[key] !== 0) {
        delete filters[key];
      }
    });

    // Aplicar filtros adicionales
    if (filters.search) {
      // Buscar en código y colada
      delete filters.search;
      const searchTerm = searchParams.get('search');
      filters.codigo = searchTerm;
      filters.colada = searchTerm;
    }

    const piezas = await searchPiezas(filters);
    
    // Obtener conteos por fase para las piezas filtradas
    const phaseCounts = await getPhaseCounts(filters);
    
    // Aplicar paginación a los resultados filtrados
    const from = (page - 1) * pageSize;
    const to = page * pageSize;
    const paginatedPiezas = piezas.slice(from, to);

    return new Response(JSON.stringify({ 
      success: true, 
      data: paginatedPiezas,
      count: piezas.length,
      phaseCounts: phaseCounts,
      page: page,
      pageSize: pageSize,
      totalPages: Math.ceil(piezas.length / pageSize)
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error en /api/piezas/search:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al buscar piezas' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}