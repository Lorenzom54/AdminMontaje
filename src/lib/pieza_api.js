import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://jjxvgpxweolzeqmtlkmx.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqeHZncHh3ZW9semVxbXRsa214Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzNTAyNjcsImV4cCI6MjA2ODkyNjI2N30.UJFru02b79iTKiA-u4k3uxrnJ-pxyzUctjcT5x2KMZE"
const supabase = createClient(supabaseUrl, supabaseKey)

// Mapeo de fases
export const FASES = {
  0: 'Corte',
  1: 'Biselado', 
  2: 'Montaje',
  3: 'Soldadura'
};

export const FASES_REVERSE = {
  'Corte': 0,
  'Biselado': 1,
  'Montaje': 2,
  'Soldadura': 3
};

// Obtener todas las piezas
export async function fetchPiezas() {
  let { data: piezas, error } = await supabase
    .from('piezas')
    .select(`
      *,
      conjuntos:conjunto_id(codigo, obras:obra_id(nombre)),
      chapas:chapa_id(codigo)
    `)
    .order('created_at', { ascending: false })
    
  if (error) {
    console.error('Error al obtener piezas:', error.message);
    return [];
  }
  return piezas;
}

// Obtener piezas paginadas con estadísticas completas
export async function fetchPiezasPaginated(page = 1, pageSize = 10) {
  const from = (page - 1) * pageSize;
  const to = page * pageSize - 1;

  // Obtener piezas paginadas
  let { data: piezas, error } = await supabase
    .from('piezas')
    .select(`
      *,
      conjuntos:conjunto_id(codigo, obras:obra_id(nombre)),
      chapas:chapa_id(codigo)
    `)
    .range(from, to)
    .order('created_at', { ascending: false })
    
  if (error) {
    console.error('Error al obtener piezas paginadas:', error.message);
    return { data: [], count: 0, phaseCounts: {} };
  }

  // Obtener conteo total
  const { count } = await supabase
    .from('piezas')
    .select('*', { count: 'exact', head: true });

  // Obtener conteos por fase para todas las piezas
  const phaseCounts = await getPhaseCounts();
    
  return { 
    data: piezas, 
    count: count || 0,
    phaseCounts
  };
}

// Función auxiliar para obtener conteos por fase
async function getPhaseCounts(filters = {}) {
  let query = supabase.from('piezas').select('fase');

  // Aplicar filtros si existen
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
    query = query.eq('fase', filters.fase);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error al obtener conteos por fase:', error.message);
    return {};
  }

  // Contar piezas por fase
  const counts = data.reduce((acc, pieza) => {
    const fase = pieza.fase;
    acc[fase] = (acc[fase] || 0) + 1;
    return acc;
  }, {});

  return {
    corte: counts[0] || 0,
    biselado: counts[1] || 0,
    montaje: counts[2] || 0,
    soldadura: counts[3] || 0
  };
}

// Obtener una pieza por ID
export async function fetchPiezaById(id) {
  let { data: pieza, error } = await supabase
    .from('piezas')
    .select(`
      *,
      conjuntos:conjunto_id(codigo, obras:obra_id(nombre)),
      chapas:chapa_id(codigo)
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
  const { data, error } = await supabase
    .from('piezas')
    .update(updates)
    .eq('id', id)
    .select()

  if (error) {
    console.error('Error al actualizar pieza:', error.message);
    return { success: false, error: error.message };
  }

  return { success: true, data: data[0] };
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
export async function searchPiezas(filters = {}) {
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
    query = query.eq('fase', filters.fase);
  }

  if (filters.obra_id) {
    query = query.eq('conjuntos.obra_id', filters.obra_id);
  }

  const { data, error } = await query.order('created_at', { ascending: false });

  if (error) {
    console.error('Error al buscar piezas:', error.message);
    return [];
  }

  return data;
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

// Exportar función auxiliar para obtener conteos por fase
export async function getPhaseCounts(filters = {}) {
  let query = supabase.from('piezas').select('fase');

  // Aplicar filtros si existen
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
    query = query.eq('fase', filters.fase);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error al obtener conteos por fase:', error.message);
    return {};
  }

  // Contar piezas por fase
  const counts = data.reduce((acc, pieza) => {
    const fase = pieza.fase;
    acc[fase] = (acc[fase] || 0) + 1;
    return acc;
  }, {});

  return {
    corte: counts[0] || 0,
    biselado: counts[1] || 0,
    montaje: counts[2] || 0,
    soldadura: counts[3] || 0
  };
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