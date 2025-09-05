import { supabase } from './supabaseClient.js';

// Obtener todos los operarios
export async function fetchOperarios() {
  let { data: operarios, error } = await supabase
    .from('operarios')
    .select('*')
    .order('created_at', { ascending: false })
    
  if (error) {
    console.error('Error al obtener operarios:', error.message);
    return [];
  }
  return operarios;
}

// Obtener un operario por ID
export async function fetchOperarioById(id) {
  let { data: operario, error } = await supabase
    .from('operarios')
    .select('*')
    .eq('id', id)
    .single()
    
  if (error) {
    console.error('Error al obtener operario:', error.message);
    return null;
  }
  return operario;
}

// Crear nuevo operario
export async function addOperario(operarioData) {
  console.log('Intentando insertar operario:', operarioData); // Para debug
  
  const { data, error } = await supabase
    .from('operarios')
    .insert([operarioData])
    .select()

  if (error) {
    console.error('Error completo de Supabase:', error);
    return { success: false, error: error.message, details: error };
  }

  return { success: true, data: data[0] };
}

// Actualizar operario existente
export async function updateOperario(id, updates) {
  const { data, error } = await supabase
    .from('operarios')
    .update(updates)
    .eq('id', id)
    .select()

  if (error) {
    console.error('Error al actualizar operario:', error.message);
    return { success: false, error: error.message };
  }

  return { success: true, data: data[0] };
}

// Eliminar operario
export async function deleteOperario(id) {
  try {
    const { data, error } = await supabase
      .from('operarios')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error al eliminar operario:', error.message);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    console.error('Error inesperado al eliminar operario:', err.message);
    return { success: false, error: err.message };
  }
}

// Buscar operarios por filtros
export async function searchOperarios(filters = {}) {
  let query = supabase.from('operarios').select('*');

  if (filters.rol) {
    query = query.ilike('rol', `%${filters.rol}%`);
  }

  if (filters.nombre) {
    query = query.ilike('nombre', `%${filters.nombre}%`);
  }

  if (filters.email) {
    query = query.ilike('email', `%${filters.email}%`);
  }

  if (filters.usuario) {
    query = query.ilike('usuario', `%${filters.usuario}%`);
  }

  const { data, error } = await query.order('created_at', { ascending: false });

  if (error) {
    console.error('Error al buscar operarios:', error.message);
    return [];
  }

  return data;
}