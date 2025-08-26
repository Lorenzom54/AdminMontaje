import { supabase } from './supabaseClient.js';

// Obtener todas las fases de conjuntos
export async function fetchFaseConjuntos() {
  const { data, error } = await supabase
    .from('fases_conjuntos')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Error al obtener fases de conjuntos:', error.message);
    return [];
  }
  return data;
}

// Obtener una fase de conjunto por ID
export async function fetchFaseConjuntoById(id) {
  const { data, error } = await supabase
    .from('fases_conjuntos')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error al obtener fase de conjunto:', error.message);
    return null;
  }
  return data;
}

// Crear nueva fase de conjunto
export async function addFaseConjunto(payload) {
  const { data, error } = await supabase
    .from('fases_conjuntos')
    .insert([payload])
    .select();

  if (error) {
    console.error('Error al crear fase de conjunto:', error.message);
    return { success: false, error: error.message };
  }

  return { success: true, data: data[0] };
}

// Actualizar fase de conjunto existente
export async function updateFaseConjunto(id, updates) {
  const { data, error } = await supabase
    .from('fases_conjuntos')
    .update(updates)
    .eq('id', id)
    .select();

  if (error) {
    console.error('Error al actualizar fase de conjunto:', error.message);
    return { success: false, error: error.message };
  }

  return { success: true, data: data[0] };
}

// Eliminar fase de conjunto
export async function deleteFaseConjunto(id) {
  const { error } = await supabase
    .from('fases_conjuntos')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error al eliminar fase de conjunto:', error.message);
    return { success: false, error: error.message };
  }

  return { success: true };
}

// Obtener fases para select (formularios)
export async function fetchFaseConjuntosForSelect() {
  const { data, error } = await supabase
    .from('fases_conjuntos')
    .select('id, fase')
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Error al obtener fases de conjuntos para select:', error.message);
    return [];
  }
  return data;
}
