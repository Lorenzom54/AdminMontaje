import { s as supabase } from './supabaseClient_CMJLZPZx.mjs';

// Obtener todos los conjuntos
async function fetchConjuntos() {
  console.log('Fetching conjuntos...');
  
  let { data: conjuntos, error } = await supabase
    .from('conjuntos')
    .select(`
      *,
      obras:obra_id(nombre)
    `)
    .order('created_at', { ascending: false });
    
  if (error) {
    console.error('Error al obtener conjuntos:', error.message);
    return [];
  }
  
  console.log('Conjuntos obtenidos:', conjuntos?.length || 0);
  return conjuntos || [];
}

// Obtener un conjunto por ID
async function fetchConjuntoById(id) {
  let { data: conjunto, error } = await supabase
    .from('conjuntos')
    .select(`
      *,
      obras:obra_id(nombre)
    `)
    .eq('id', id)
    .single();
    
  if (error) {
    console.error('Error al obtener conjunto:', error.message);
    return null;
  }
  return conjunto;
}

// Crear nuevo conjunto
async function addConjunto(conjuntoData) {
  console.log('Intentando insertar conjunto:', conjuntoData); // Para debug
  
  const { data, error } = await supabase
    .from('conjuntos')
    .insert([conjuntoData])
    .select();

  if (error) {
    console.error('Error completo de Supabase:', error);
    return { success: false, error: error.message, details: error };
  }

  return { success: true, data: data[0] };
}

// Actualizar conjunto existente
async function updateConjunto(id, updates) {
  const { data, error } = await supabase
    .from('conjuntos')
    .update(updates)
    .eq('id', id)
    .select();

  if (error) {
    console.error('Error al actualizar conjunto:', error.message);
    return { success: false, error: error.message };
  }

  return { success: true, data: data[0] };
}

// Eliminar conjunto
async function deleteConjunto(id) {
  try {
    const { data, error } = await supabase
      .from('conjuntos')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error al eliminar conjunto:', error.message);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    console.error('Error inesperado al eliminar conjunto:', err.message);
    return { success: false, error: err.message };
  }
}

// Buscar conjuntos por filtros
async function searchConjuntos(filters = {}) {
  let query = supabase.from('conjuntos').select(`
    *,
    obras:obra_id(nombre)
  `);

  if (filters.codigo) {
    query = query.ilike('codigo', `%${filters.codigo}%`);
  }

  if (filters.descripcion) {
    query = query.ilike('descripcion', `%${filters.descripcion}%`);
  }

  if (filters.obra_id) {
    query = query.eq('obra_id', filters.obra_id);
  }

  if (filters.fase_id !== undefined && filters.fase_id !== '') {
    query = query.eq('fase_id', parseInt(filters.fase_id));
  }

  if (filters.is_completed !== undefined) {
    query = query.eq('is_completed', filters.is_completed);
  }

  const { data, error } = await query.order('created_at', { ascending: false });

  if (error) {
    console.error('Error al buscar conjuntos:', error.message);
    return [];
  }

  return data;
}

// Obtener conjunto por código
async function fetchConjuntoByCodigo(codigo) {
  let { data: conjunto, error } = await supabase
    .from('conjuntos')
    .select('*')
    .eq('codigo', codigo)
    .single();
    
  if (error) {
    if (error.code === 'PGRST116') {
      // No se encontró el conjunto
      return null;
    }
    console.error('Error al obtener conjunto por código:', error.message);
    return null;
  }
  return conjunto;
}

// Obtener obras para el formulario
async function fetchObrasForSelect() {
  let { data: obras, error } = await supabase
    .from('obras')
    .select('id, nombre')
    .order('nombre', { ascending: true });
    
  if (error) {
    console.error('Error al obtener obras:', error.message);
    return [];
  }
  return obras;
}

// Obtener fases de conjuntos para el formulario
async function fetchFaseConjuntosForSelect() {
  let { data: fases, error } = await supabase
    .from('fases_conjuntos')
    .select('id, fase')
    .order('created_at', { ascending: true });
    
  if (error) {
    console.error('Error al obtener fases de conjuntos:', error.message);
    return [];
  }
  return fases;
}

export { fetchFaseConjuntosForSelect as a, fetchConjuntos as b, addConjunto as c, fetchConjuntoById as d, deleteConjunto as e, fetchObrasForSelect as f, fetchConjuntoByCodigo as g, searchConjuntos as s, updateConjunto as u };
