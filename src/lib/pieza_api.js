import { supabase } from './supabaseClient.js';

// Mapeo estático de fases de piezas (fallback)
export const FASES = {
  0: 'Para cortar',
  1: 'Cortado',
  2: 'Chaflanado',
  3: 'Repasado'
};

// Caché en memoria para el mapa de fases
let fasesCache = null;
let fasesCacheUpdatedAt = 0;
const FASES_CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutos

// Obtener mapa dinámico de fases (índice -> nombre) desde la BD con caché
export async function getFasesMap() {
  const now = Date.now();
  if (fasesCache && (now - fasesCacheUpdatedAt) < FASES_CACHE_TTL_MS) {
    return fasesCache;
  }

  try {
    const { data, error } = await supabase
      .from('fases_piezas')
      .select('id, fase, created_at')
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Error al obtener fases dinámicas de piezas:', error.message);
      fasesCache = FASES;
      fasesCacheUpdatedAt = now;
      return fasesCache;
    }

    // Construir el mapa por índice ordinal (0..n-1) según el orden de creación
    const map = {};
    (data || []).forEach((row, index) => {
      map[index] = row.fase;
    });

    fasesCache = Object.keys(map).length > 0 ? map : FASES;
    fasesCacheUpdatedAt = now;
    return fasesCache;
  } catch (err) {
    console.error('Error inesperado al construir mapa de fases:', err);
    fasesCache = FASES;
    fasesCacheUpdatedAt = now;
    return fasesCache;
  }
}

// Helper: obtener etiqueta de fase por índice
export async function getFaseLabel(faseIndex) {
  const map = await getFasesMap();
  return map?.[faseIndex] ?? `Fase ${faseIndex}`;
}

// Función para obtener el nombre de la fase desde la base de datos
export async function getFaseName(faseId) {
  const { data, error } = await supabase
    .from('fases_piezas')
    .select('fase')
    .eq('id', faseId)
    .single();

  if (error) {
    console.error('Error al obtener nombre de fase:', error.message);
    return 'Sin fase';
  }
  return data?.fase || 'Sin fase';
}

// Obtener todas las piezas
export async function fetchPiezas(page = 1, pageSize = 20) {
  const offset = (page - 1) * pageSize;
  
  console.log('Fetching piezas with offset:', offset, 'pageSize:', pageSize);
  
  let { data: piezas, error } = await supabase
    .from('piezas')
    .select(`
      *,
      conjuntos:conjunto_id(codigo, obras:obra_id(nombre)),
      chapas:chapa_id(codigo)
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
    
    // Intentar actualización sin triggers problemáticos
    // Primero intentar con una actualización simple sin select
    const { error: updateError } = await supabase
      .from('piezas')
      .update(cleanUpdates)
      .eq('id', id);

    if (updateError) {
      console.error('Error al actualizar pieza:', updateError.message);
      console.error('Detalles del error:', updateError);
      
      // Si el error persiste, intentar actualizar solo campos específicos uno por uno
      console.log('Intentando actualización campo por campo...');
      
      const fieldsToUpdate = Object.keys(cleanUpdates);
      let successCount = 0;
      
      for (const field of fieldsToUpdate) {
        try {
          const { error: fieldError } = await supabase
    .from('piezas')
            .update({ [field]: cleanUpdates[field] })
            .eq('id', id);
            
          if (!fieldError) {
            successCount++;
          } else {
            console.error(`Error actualizando campo ${field}:`, fieldError.message);
          }
        } catch (err) {
          console.error(`Error inesperado actualizando campo ${field}:`, err);
        }
      }
      
      if (successCount === 0) {
        return { success: false, error: 'No se pudo actualizar ningún campo' };
      }
      
      console.log(`Se actualizaron ${successCount} de ${fieldsToUpdate.length} campos`);
      return { success: true, data: null };
    }

    // Si la actualización fue exitosa, intentar obtener los datos
    try {
      const { data, error: selectError } = await supabase
        .from('piezas')
        .select('*')
        .eq('id', id)
        .single();

      if (selectError) {
        console.error('Error al obtener pieza actualizada:', selectError.message);
        // La actualización fue exitosa aunque no podamos obtener los datos
        return { success: true, data: null };
      }

      console.log('Pieza actualizada exitosamente:', data);
      return { success: true, data: data };
    } catch (selectErr) {
      console.error('Error inesperado al obtener datos:', selectErr);
      return { success: true, data: null };
    }
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

  if (filters.search) {
    // Buscar en código o colada usando OR
    query = query.or(`codigo.ilike.%${filters.search}%,colada.ilike.%${filters.search}%`);
  } else {
    // Si no hay búsqueda general, aplicar filtros específicos
    if (filters.codigo) {
      query = query.ilike('codigo', `%${filters.codigo}%`);
    }
    if (filters.colada) {
      query = query.ilike('colada', `%${filters.colada}%`);
    }
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
      
      if (filters.tipo_material || filters.search || (filters.fase !== undefined && filters.fase !== '') || filters.chapa_id) {
        let countQuery = supabase.from('piezas').select('*', { count: 'exact', head: true });
        countQuery = countQuery.in('id', filteredIds);
        
        if (filters.tipo_material) {
          countQuery = countQuery.ilike('tipo_material', `%${filters.tipo_material}%`);
        }
        if (filters.search) {
          countQuery = countQuery.or(`codigo.ilike.%${filters.search}%,colada.ilike.%${filters.search}%`);
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
    // Obtener todas las piezas disponibles para poder ordenarlas correctamente
    const { data: allAvailablePieces, error: searchError } = await supabase
      .from('piezas')
      .select(`
        id, 
        codigo, 
        conjunto_id,
        created_at,
        conjuntos:conjunto_id(codigo)
      `)
      .eq('codigo', pieceCode)
      .is('chapa_id', null);

    if (searchError) {
      console.error('Error al buscar piezas:', searchError);
      return { success: false, error: searchError.message, updated: 0 };
    }

    if (!allAvailablePieces || allAvailablePieces.length === 0) {
      return { 
        success: true, 
        updated: 0, 
        message: `No se encontraron piezas disponibles con código ${pieceCode}` 
      };
    }

    // Ordenar las piezas manualmente para un mejor control
    const sortedPieces = allAvailablePieces.sort((a, b) => {
      // Primero por código de conjunto (si existe)
      const conjuntoA = a.conjuntos?.codigo || '';
      const conjuntoB = b.conjuntos?.codigo || '';
      
      if (conjuntoA && conjuntoB) {
        // Ordenamiento natural para códigos alfanuméricos
        return conjuntoA.localeCompare(conjuntoB, undefined, { 
          numeric: true, 
          sensitivity: 'base' 
        });
      }
      
      // Si uno tiene conjunto y otro no, priorizar el que tiene conjunto
      if (conjuntoA && !conjuntoB) return -1;
      if (!conjuntoA && conjuntoB) return 1;
      
      // Si ambos tienen o no tienen conjunto, ordenar por fecha de creación
      return new Date(a.created_at) - new Date(b.created_at);
    });

    // Tomar solo las primeras N piezas
    const piecesToUpdate = sortedPieces.slice(0, count);
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

// Función para extraer el sufijo de la colada (después de DS)
function extractSuffixFromColada(colada) {
  if (!colada) return '';
  
  // Buscar el patrón DS seguido de caracteres
  const match = colada.match(/DS(.+)$/);
  return match ? match[1] : '';
}

// Función para actualizar el nombre de una pieza con el sufijo
function updatePieceName(originalName, suffix) {
  if (!suffix) return originalName;
  
  // Remover cualquier sufijo existente (después del último guión)
  const baseName = originalName.split('-')[0];
  
  // Agregar el nuevo sufijo
  return `${baseName}-${suffix}`;
}

// Marcar como cortadas (avanzar fase) todas las piezas de una chapa
export async function markPiezasCortadasByChapaId(chapaId) {
  try {
    console.log('🔍 Iniciando markPiezasCortadasByChapaId para chapa ID:', chapaId);
    
    // Primero obtener la información de la chapa para extraer el sufijo de la colada
    const { data: chapaData, error: chapaError } = await supabase
      .from('chapas')
      .select('colada')
      .eq('id', parseInt(chapaId))
      .single();

    if (chapaError) {
      console.error('Error al obtener información de la chapa:', chapaError);
      return { success: false, error: chapaError.message, updated: 0 };
    }

    console.log('📋 Datos de la chapa obtenidos:', chapaData);

    // Extraer el sufijo de la colada
    const suffix = extractSuffixFromColada(chapaData.colada);
    console.log('🔤 Sufijo extraído de la colada:', suffix);
    
    // Usar los valores numéricos directamente - primer estado (0) al segundo estado (1)
    const faseParaCortar = 0; // Primer estado
    const faseCortado = 1;    // Segundo estado

    // Obtener las piezas que van a cambiar de estado
    const { data: piezasToUpdate, error: selectError } = await supabase
      .from('piezas')
      .select('id, codigo')
      .eq('chapa_id', parseInt(chapaId))
      .eq('fase', faseParaCortar);

    if (selectError) {
      console.error('Error al obtener piezas:', selectError);
      return { success: false, error: selectError.message, updated: 0 };
    }

    console.log('🔧 Piezas a actualizar:', piezasToUpdate);

    // Actualizar cada pieza con el nuevo código y fase
    let updatedCount = 0;
    for (const pieza of piezasToUpdate) {
      const newCode = updatePieceName(pieza.codigo, suffix);
      console.log(`🔄 Actualizando pieza ${pieza.id}: "${pieza.codigo}" -> "${newCode}"`);
      
      const { error: updateError } = await supabase
        .from('piezas')
        .update({ 
          fase: faseCortado,
          codigo: newCode
        })
        .eq('id', pieza.id);

      if (updateError) {
        console.error(`Error al actualizar pieza ${pieza.id}:`, updateError);
        continue;
      }
      
      updatedCount++;
    }

    console.log(`✅ Proceso completado. ${updatedCount} piezas actualizadas.`);
    return { success: true, updated: updatedCount };
  } catch (err) {
    console.error('Error inesperado al marcar piezas como cortadas:', err);
    return { success: false, error: err.message, updated: 0 };
  }
}