import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jjxvgpxweolzeqmtlkmx.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqeHZncHh3ZW9semVxbXRsa214Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzNTAyNjcsImV4cCI6MjA2ODkyNjI2N30.UJFru02b79iTKiA-u4k3uxrnJ-pxyzUctjcT5x2KMZE";
const supabase = createClient(supabaseUrl, supabaseKey);

// Obtener todos los operarios
async function fetchOperarios() {
  let { data: operarios, error } = await supabase
    .from('operarios')
    .select('*')
    .order('created_at', { ascending: false });
    
  if (error) {
    console.error('Error al obtener operarios:', error.message);
    return [];
  }
  return operarios;
}

// Obtener un operario por ID
async function fetchOperarioById(id) {
  let { data: operario, error } = await supabase
    .from('operarios')
    .select('*')
    .eq('id', id)
    .single();
    
  if (error) {
    console.error('Error al obtener operario:', error.message);
    return null;
  }
  return operario;
}

// Crear nuevo operario
async function addOperario(operarioData) {
  console.log('Intentando insertar operario:', operarioData); // Para debug
  
  const { data, error } = await supabase
    .from('operarios')
    .insert([operarioData])
    .select();

  if (error) {
    console.error('Error completo de Supabase:', error);
    return { success: false, error: error.message, details: error };
  }

  return { success: true, data: data[0] };
}

// Actualizar operario existente
async function updateOperario(id, updates) {
  const { data, error } = await supabase
    .from('operarios')
    .update(updates)
    .eq('id', id)
    .select();

  if (error) {
    console.error('Error al actualizar operario:', error.message);
    return { success: false, error: error.message };
  }

  return { success: true, data: data[0] };
}

// Eliminar operario
async function deleteOperario(id) {
  try {
    const { data, error } = await supabase
      .from('operarios')
      .delete()
      .eq('id', id);

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
async function searchOperarios(filters = {}) {
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

export { addOperario as a, fetchOperarioById as b, deleteOperario as d, fetchOperarios as f, searchOperarios as s, updateOperario as u };
