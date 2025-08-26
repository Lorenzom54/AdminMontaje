import { supabase } from './supabaseClient.js';

// Obtener todas las fases de piezas
export async function fetchFasePiezas() {
  const { data, error } = await supabase
    .from('fases_piezas')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Error al obtener fases de piezas:', error.message);
    return [];
  }
  return data;
}

// Obtener una fase de pieza por ID
export async function fetchFasePiezaById(id) {
  const { data, error } = await supabase
    .from('fases_piezas')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error al obtener fase de pieza:', error.message);
    return null;
  }
  return data;
}

// Obtener fase de pieza por nombre
export async function getFasePiezaByName(nombre) {
  const { data, error } = await supabase
    .from('fases_piezas')
    .select('*')
    .eq('fase', nombre)
    .single();

  if (error) {
    console.error('Error al obtener fase de pieza por nombre:', error.message);
    return null;
  }
  return data;
}

// Crear nueva fase de pieza
export async function addFasePieza(payload) {
  const { data, error } = await supabase
    .from('fases_piezas')
    .insert([payload])
    .select();

  if (error) {
    console.error('Error al crear fase de pieza:', error.message);
    return { success: false, error: error.message };
  }

  return { success: true, data: data[0] };
}

// Actualizar fase de pieza existente
export async function updateFasePieza(id, updates) {
  const { data, error } = await supabase
    .from('fases_piezas')
    .update(updates)
    .eq('id', id)
    .select();

  if (error) {
    console.error('Error al actualizar fase de pieza:', error.message);
    return { success: false, error: error.message };
  }

  return { success: true, data: data[0] };
}

// Eliminar fase de pieza
export async function deleteFasePieza(id) {
  const { error } = await supabase
    .from('fases_piezas')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error al eliminar fase de pieza:', error.message);
    return { success: false, error: error.message };
  }

  return { success: true };
}

// Obtener fases para select (formularios)
export async function fetchFasePiezasForSelect() {
  const { data, error } = await supabase
    .from('fases_piezas')
    .select('id, fase')
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Error al obtener fases de piezas para select:', error.message);
    return [];
  }
  return data;
}
