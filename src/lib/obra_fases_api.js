import { supabase } from './supabaseClient.js';

// Obtener fases de piezas de una obra
export async function fetchObraFasesPiezas(obraId) {
  const { data, error } = await supabase
    .from('obras_fases_piezas')
    .select(`
      *,
      fases_piezas: fase_id(id, fase)
    `)
    .eq('obra_id', obraId);

  if (error) {
    console.error('Error al obtener fases de piezas de la obra:', error.message);
    return [];
  }
  return data;
}

// Obtener fases de conjuntos de una obra
export async function fetchObraFasesConjuntos(obraId) {
  const { data, error } = await supabase
    .from('obras_fases_conjuntos')
    .select(`
      *,
      fases_conjuntos: fase_id(id, fase)
    `)
    .eq('obra_id', obraId);

  if (error) {
    console.error('Error al obtener fases de conjuntos de la obra:', error.message);
    return [];
  }
  return data;
}

// Crear relación obra-fase pieza
export async function addObraFasePieza(obraId, faseId) {
  const { data, error } = await supabase
    .from('obras_fases_piezas')
    .insert([{ obra_id: obraId, fase_id: faseId }])
    .select();

  if (error) {
    console.error('Error al crear relación obra-fase pieza:', error.message);
    return { success: false, error: error.message };
  }

  return { success: true, data: data[0] };
}

// Crear relación obra-fase conjunto
export async function addObraFaseConjunto(obraId, faseId) {
  const { data, error } = await supabase
    .from('obras_fases_conjuntos')
    .insert([{ obra_id: obraId, fase_id: faseId }])
    .select();

  if (error) {
    console.error('Error al crear relación obra-fase conjunto:', error.message);
    return { success: false, error: error.message };
  }

  return { success: true, data: data[0] };
}

// Eliminar todas las fases de piezas de una obra
export async function deleteObraFasesPiezas(obraId) {
  const { error } = await supabase
    .from('obras_fases_piezas')
    .delete()
    .eq('obra_id', obraId);

  if (error) {
    console.error('Error al eliminar fases de piezas de la obra:', error.message);
    return { success: false, error: error.message };
  }

  return { success: true };
}

// Eliminar todas las fases de conjuntos de una obra
export async function deleteObraFasesConjuntos(obraId) {
  const { error } = await supabase
    .from('obras_fases_conjuntos')
    .delete()
    .eq('obra_id', obraId);

  if (error) {
    console.error('Error al eliminar fases de conjuntos de la obra:', error.message);
    return { success: false, error: error.message };
  }

  return { success: true };
}