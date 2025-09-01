import { s as supabase } from './supabaseClient_CTFy9dOP.mjs';

// Obtener todas las fases de conjuntos
async function fetchFaseConjuntos() {
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

// Crear nueva fase de conjunto
async function addFaseConjunto(payload) {
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
async function updateFaseConjunto(id, updates) {
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
async function deleteFaseConjunto(id) {
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
async function fetchFaseConjuntosForSelect() {
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

export { addFaseConjunto as a, fetchFaseConjuntosForSelect as b, deleteFaseConjunto as d, fetchFaseConjuntos as f, updateFaseConjunto as u };
