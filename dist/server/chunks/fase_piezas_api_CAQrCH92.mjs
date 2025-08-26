import { s as supabase } from './supabaseClient_CMJLZPZx.mjs';

// Obtener todas las fases de piezas
async function fetchFasePiezas() {
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

// Crear nueva fase de pieza
async function addFasePieza(payload) {
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
async function updateFasePieza(id, updates) {
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
async function deleteFasePieza(id) {
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

export { addFasePieza as a, deleteFasePieza as d, fetchFasePiezas as f, updateFasePieza as u };
