import { supabase } from './supabaseClient.js'

// Obtener todas las chapas
export async function fetchChapas() {
  let { data: chapas, error } = await supabase
    .from('chapas')
    .select('*')
    .order('created_at', { ascending: false })
    
  if (error) {
    console.error('Error al obtener chapas:', error.message);
    return [];
  }
  return chapas;
}

// Obtener una chapa por ID
export async function fetchChapaById(id) {
  let { data: chapa, error } = await supabase
    .from('chapas')
    .select('*')
    .eq('id', id)
    .single()
    
  if (error) {
    console.error('Error al obtener chapa:', error.message);
    return null;
  }
  return chapa;
}

// Crear nueva chapa
export async function addChapa(chapaData) {
  console.log('Intentando insertar chapa:', chapaData); // Para debug
  
  const { data, error } = await supabase
    .from('chapas')
    .insert([chapaData])
    .select()

  if (error) {
    console.error('Error completo de Supabase:', error);
    return { success: false, error: error.message, details: error };
  }

  return { success: true, data: data[0] };
}

// Actualizar chapa existente
export async function updateChapa(id, updates) {
  const { data, error } = await supabase
    .from('chapas')
    .update(updates)
    .eq('id', id)
    .select()

  if (error) {
    console.error('Error al actualizar chapa:', error.message);
    return { success: false, error: error.message };
  }

  return { success: true, data: data[0] };
}

// Eliminar chapa
export async function deleteChapa(id) {
  const { data, error } = await supabase
    .from('chapas')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error al eliminar chapa:', error.message);
    return { success: false, error: error.message };
  }

  return { success: true, data };
}

// Buscar chapas por filtros
export async function searchChapas(filters = {}) {
  let query = supabase.from('chapas').select('*');

  if (filters.tipo_acero) {
    query = query.ilike('tipo_acero', `%${filters.tipo_acero}%`);
  }

  if (filters.codigo) {
    query = query.ilike('codigo', `%${filters.codigo}%`);
  }

  if (filters.colada) {
    query = query.ilike('colada', `%${filters.colada}%`);
  }

  if (filters.espesor) {
    query = query.ilike('espesor', `%${filters.espesor}%`);
  }

  const { data, error } = await query.order('created_at', { ascending: false });

  if (error) {
    console.error('Error al buscar chapas:', error.message);
    return [];
  }

  return data;
}