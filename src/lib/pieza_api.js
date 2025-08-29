import { supabase } from './supabaseClient.js';

// Mapeo de fases (mantener para compatibilidad)
export const FASES = {
  1: 'Para cortar',
  2: 'Cortado',
  3: 'Biselado', 
  4: 'Montaje',
  5: 'Soldadura'
};

export const FASES_REVERSE = {
  'Para cortar': 1,
  'Cortado': 2,
  'Biselado': 3,
  'Montaje': 4,
  'Soldadura': 5
};

// Obtener todas las piezas
export async function fetchPiezas(page = 1, pageSize = 20) {
  const offset = (page - 1) * pageSize;
  
  console.log('Fetching piezas with offset:', offset, 'pageSize:', pageSize);
  
  let { data: piezas, error } = await supabase
    .from('piezas')
    .select(`
      *,
      conjuntos:conjunto_id(codigo, obras:obra_id(nombre))
    `)
    .order('created_at', { ascending: false })
    .range(offset, offset + pageSize - 1)
    
  if (error) {
    console.error('Error al obtener piezas:', error.message);
    return [];
  }
  
  console.log('Piezas obtenidas:', piezas?.length || 0);
  return piezas || [];
}

// Obtener el total de piezas para paginación
export async function fetchPiezasCount() {
  let { count, error } = await supabase
    .from('piezas')
    .select('*', { count: 'exact', head: true })
    
  if (error) {
    console.error('Error al obtener conteo de piezas:', error.message);
    return 0;
  }
  return count;
}

// Obtener una pieza por ID
export async function fetchPiezaById(id) {
  let { data: pieza, error } = await supabase
    .from('piezas')
    .select(`
      *,
      conjuntos:conjunto_id(codigo, obras:obra_id(nombre))
    `)
    .eq('id', id)
    .single()
    
  if (error) {
    console.error('Error al obtener pieza:', error.message);
    return null;
  }
  return pieza;
}

// Crear nueva pieza
export async function addPieza(piezaData) {
  console.log('Intentando insertar pieza:', piezaData); // Para debug
  
  const { data, error } = await supabase
    .from('piezas')
    .insert([piezaData])
    .select()

  if (error) {
    console.error('Error completo de Supabase:', error);
    return { success: false, error: error.message, details: error };
  }

  return { success: true, data: data[0] };
}

// Actualizar pieza existente
export async function updatePieza(id, updates) {
  console.log('Intentando actualizar pieza:', { id, updates }); // Debug
  
  try {
    // Limpiar campos undefined o null problemáticos
    const cleanUpdates = { ...updates };
    
    // Asegurar que fase sea un número válido o null
    if (cleanUpdates.fase !== undefined) {
      if (cleanUpdates.fase === '' || cleanUpdates.fase === null) {
        cleanUpdates.fase = null;
      } else {
        cleanUpdates.fase = parseInt(cleanUpdates.fase);
        if (isNaN(cleanUpdates.fase)) {
          cleanUpdates.fase = null;
        }
      }
    }
    
    // Asegurar que conjunto_id sea un número válido o null
    if (cleanUpdates.conjunto_id !== undefined) {
      if (cleanUpdates.conjunto_id === '' || cleanUpdates.conjunto_id === null) {
        cleanUpdates.conjunto_id = null;
      } else {
        cleanUpdates.conjunto_id = parseInt(cleanUpdates.conjunto_id);
        if (isNaN(cleanUpdates.conjunto_id)) {
          cleanUpdates.conjunto_id = null;
        }
      }
    }
    
    // Asegurar que chapa_id sea un número válido o null
    if (cleanUpdates.chapa_id !== undefined) {
      if (cleanUpdates.chapa_id === '' || cleanUpdates.chapa_id === null) {
        cleanUpdates.chapa_id = null;
      } else {
        cleanUpdates.chapa_id = parseInt(cleanUpdates.chapa_id);
        if (isNaN(cleanUpdates.chapa_id)) {
          cleanUpdates.chapa_id = null;
        }
      }
    }
    
    console.log('Datos limpios para actualizar:', cleanUpdates); // Debug
    
    // Intentar actualización sin select primero para evitar el trigger problemático
    const { error: updateError } = await supabase
      .from('piezas')
      .update(cleanUpdates)
      .eq('id', id);

    if (updateError) {
      console.error('Error al actualizar pieza:', updateError.message);
      console.error('Detalles del error:', updateError); // Debug completo
      return { success: false, error: updateError.message };
    }

    // Si la actualización fue exitosa, obtener los datos actualizados
    const { data, error: selectError } = await supabase
      .from('piezas')
      .select('*')
      .eq('id', id)
      .single();

    if (selectError) {
      console.error('Error al obtener pieza actualizada:', selectError.message);
      // Aunque no podamos obtener los datos, la actualización fue exitosa
      return { success: true, data: null };
    }

    console.log('Pieza actualizada exitosamente:', data); // Debug
    return { success: true, data: data };
  } catch (err) {
    console.error('Error inesperado al actualizar pieza:', err);
    return { success: false, error: err.message };
  }
}

// Eliminar pieza
export async function deletePieza(id) {
  try {
    const { data, error } = await supabase
      .from('piezas')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error al eliminar pieza:', error.message);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    console.error('Error inesperado al eliminar pieza:', err.message);
    return { success: false, error: err.message };
  }
}

// Buscar piezas por filtros
export async function searchPiezas(filters = {}, page = 1, pageSize = 20) {
  const offset = (page - 1) * pageSize;
  
  let query = supabase.from('piezas').select(`
    *,
    conjuntos:conjunto_id(codigo, obras:obra_id(nombre)),
    chapas:chapa_id(codigo)
  `);

  if (filters.tipo_material) {
    query = query.ilike('tipo_material', `%${filters.tipo_material}%`);
  }

  if (filters.codigo) {
    query = query.ilike('codigo', `%${filters.codigo}%`);
  }

  if (filters.colada) {
    query = query.ilike('colada', `%${filters.colada}%`);
  }

  if (filters.fase !== undefined && filters.fase !== '') {
    query = query.eq('fase', parseInt(filters.fase));
  }

  if (filters.chapa_id && filters.chapa_id !== '') {
    query = query.eq('chapa_id', parseInt(filters.chapa_id));
  }
  
  if (filters.obra_id && filters.obra_id !== '') {
    // Filtrar por obra_id a través de la relación con conjuntos
    query = query.not('conjunto_id', 'is', null);
    // Necesitamos hacer un join más específico para filtrar por obra
    query = query.eq('conjuntos.obra_id', parseInt(filters.obra_id));
  }

  const { data, error } = await query
    .order('created_at', { ascending: false })
    .range(offset, offset + pageSize - 1);

  if (error) {
    console.error('Error al buscar piezas:', error.message);
    return [];
  }

  return data;
}

// Obtener el total de piezas filtradas para paginación
export async function searchPiezasCount(filters = {}) {
  let query = supabase.from('piezas').select('*', { count: 'exact', head: true });

  if (filters.tipo_material) {
    query = query.ilike('tipo_material', `%${filters.tipo_material}%`);
  }

  if (filters.codigo) {
    query = query.ilike('codigo', `%${filters.codigo}%`);
  }

  if (filters.colada) {
    query = query.ilike('colada', `%${filters.colada}%`);
  }

  if (filters.fase !== undefined && filters.fase !== '') {
    query = query.eq('fase', parseInt(filters.fase));
  }

  if (filters.chapa_id && filters.chapa_id !== '') {
    query = query.eq('chapa_id', parseInt(filters.chapa_id));
  }
  
  if (filters.obra_id && filters.obra_id !== '') {
    // Para el conteo, necesitamos hacer una consulta más específica
    const { data: piezasWithObra } = await supabase
      .from('piezas')
      .select('id, conjuntos!inner(obra_id)')
      .eq('conjuntos.obra_id', parseInt(filters.obra_id));
    
    if (piezasWithObra) {
      // Aplicar otros filtros sobre estos resultados
      let filteredIds = piezasWithObra.map(p => p.id);
      
      if (filters.tipo_material || filters.codigo || filters.colada || (filters.fase !== undefined && filters.fase !== '') || filters.chapa_id) {
        let countQuery = supabase.from('piezas').select('*', { count: 'exact', head: true });
        countQuery = countQuery.in('id', filteredIds);
        
        if (filters.tipo_material) {
          countQuery = countQuery.ilike('tipo_material', `%${filters.tipo_material}%`);
        }
        if (filters.codigo) {
          countQuery = countQuery.ilike('codigo', `%${filters.codigo}%`);
        }
        if (filters.colada) {
          countQuery = countQuery.ilike('colada', `%${filters.colada}%`);
        }
        if (filters.fase !== undefined && filters.fase !== '') {
          countQuery = countQuery.eq('fase', parseInt(filters.fase));
        }
        if (filters.chapa_id && filters.chapa_id !== '') {
          countQuery = countQuery.eq('chapa_id', parseInt(filters.chapa_id));
        }
        
        const { count } = await countQuery;
        return count || 0;
      }
      
      return filteredIds.length;
    }
    return 0;
  }

  const { count, error } = await query;

  if (error) {
    console.error('Error al obtener conteo de piezas filtradas:', error.message);
    return 0;
  }

  return count;
}

// Obtener conjuntos para el formulario
export async function fetchConjuntosForSelect() {
  let { data: conjuntos, error } = await supabase
    .from('conjuntos')
    .select('id, codigo')
    .order('codigo', { ascending: true })
    
  if (error) {
    console.error('Error al obtener conjuntos:', error.message);
    return [];
  }
  return conjuntos;
}

// Obtener chapas para el formulario
export async function fetchChapasForSelect() {
  let { data: chapas, error } = await supabase
    .from('chapas')
    .select('id, codigo')
    .order('codigo', { ascending: true })
    
  if (error) {
    console.error('Error al obtener chapas:', error.message);
    return [];
  }
  return chapas;
}

// Obtener fases de piezas para el formulario
export async function fetchFasePiezasForSelect() {
  let { data: fases, error } = await supabase
    .from('fases_piezas')
    .select('id, fase')
    .order('created_at', { ascending: true })
    
  if (error) {
    console.error('Error al obtener fases de piezas:', error.message);
    return [];
  }
  return fases;
}

// Obtener fase de pieza por ID
export async function fetchFasePiezaById(id) {
  let { data: fase, error } = await supabase
    .from('fases_piezas')
    .select('*')
    .eq('id', id)
    .single()
    
  if (error) {
    console.error('Error al obtener fase de pieza:', error.message);
    return null;
  }
  return fase;
}

// Obtener fase de pieza por nombre
export async function getFasePiezaByName(nombre) {
  let { data: fase, error } = await supabase
    .from('fases_piezas')
    .select('*')
    .eq('fase', nombre)
    .single()
    
  if (error) {
    console.error('Error al obtener fase de pieza por nombre:', error.message);
    return null;
  }
  return fase;
}

// Importar piezas desde CSV
export async function importPiezasFromCSV(csvData) {
  try {
    const { data, error } = await supabase
      .from('piezas')
      .insert(csvData)
      .select()

    if (error) {
      console.error('Error al importar piezas:', error);
      return { success: false, error: error.message, details: error };
    }

    return { success: true, data, count: data.length };
  } catch (err) {
    console.error('Error inesperado al importar piezas:', err);
    return { success: false, error: err.message };
  }
}

// Actualizar piezas con chapa_id
export async function updatePiecesWithChapaId(pieceCode, count, chapaId) {
  try {
    // Buscar piezas que coincidan con el código y no tengan chapa asignada
    // Priorizar piezas que pertenezcan a un conjunto
    const { data: availablePieces, error: searchError } = await supabase
      .from('piezas')
      .select('id, codigo, conjunto_id')
      .eq('codigo', pieceCode)
      .is('chapa_id', null)
      .order('conjunto_id', { ascending: false, nullsLast: true }) // Priorizar piezas con conjunto
      .limit(count);

    if (searchError) {
      console.error('Error al buscar piezas:', searchError);
      return { success: false, error: searchError.message, updated: 0 };
    }

    if (!availablePieces || availablePieces.length === 0) {
      return { 
        success: true, 
        updated: 0, 
        message: `No se encontraron piezas disponibles con código ${pieceCode}` 
      };
    }

    const piecesToUpdate = availablePieces.slice(0, count);
    const pieceIds = piecesToUpdate.map(p => p.id);

    // Actualizar las piezas seleccionadas
    const { data: updatedPieces, error: updateError } = await supabase
      .from('piezas')
      .update({ chapa_id: chapaId })
      .in('id', pieceIds)
      .select();

    if (updateError) {
      console.error('Error al actualizar piezas:', updateError);
      return { success: false, error: updateError.message, updated: 0 };
    }

    const updatedCount = updatedPieces ? updatedPieces.length : 0;
    let message = `${updatedCount} piezas actualizadas con código ${pieceCode}`;
    
    if (updatedCount < count) {
      message += ` (se solicitaron ${count}, solo se encontraron ${availablePieces.length} disponibles)`;
    }

    return { 
      success: true, 
      updated: updatedCount, 
      message: message,
      requested: count,
      available: availablePieces.length
    };

  } catch (err) {
    console.error('Error inesperado al actualizar piezas:', err);
    return { success: false, error: err.message, updated: 0 };
  }
}

// Marcar como cortadas (avanzar fase) todas las piezas de una chapa
export async function markPiezasCortadasByChapaId(chapaId) {
  try {
    // Usar los valores numéricos directamente
    const faseParaCortar = 1; // "Para cortar"
    const faseCortado = 2;    // "Cortado"

    const { data, error } = await supabase
      .from('piezas')
      .update({ fase: faseCortado })
      .eq('chapa_id', parseInt(chapaId))
      .eq('fase', faseParaCortar)
      .select('id');

    if (error) {
      console.error('Error al marcar piezas como cortadas:', error);
      return { success: false, error: error.message, updated: 0 };
    }

    return { success: true, updated: (data?.length || 0) };
  } catch (err) {
    console.error('Error inesperado al marcar piezas como cortadas:', err);
    return { success: false, error: err.message, updated: 0 };
  }
}