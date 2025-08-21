import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jjxvgpxweolzeqmtlkmx.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqeHZncHh3ZW9semVxbXRsa214Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzNTAyNjcsImV4cCI6MjA2ODkyNjI2N30.UJFru02b79iTKiA-u4k3uxrnJ-pxyzUctjcT5x2KMZE";
const supabase = createClient(supabaseUrl, supabaseKey);

// Mapeo de fases
const FASES = {
  0: 'Corte',
  1: 'Biselado', 
  2: 'Montaje',
  3: 'Soldadura'
};

// Obtener todas las piezas
async function fetchPiezas() {
  let { data: piezas, error } = await supabase
    .from('piezas')
    .select(`
      *,
      conjuntos:conjunto_id(codigo, obras:obra_id(nombre)),
      chapas:chapa_id(codigo)
    `)
    .order('created_at', { ascending: false });
    
  if (error) {
    console.error('Error al obtener piezas:', error.message);
    return [];
  }
  return piezas;
}

// Obtener una pieza por ID
async function fetchPiezaById(id) {
  let { data: pieza, error } = await supabase
    .from('piezas')
    .select(`
      *,
      conjuntos:conjunto_id(codigo, obras:obra_id(nombre)),
      chapas:chapa_id(codigo)
    `)
    .eq('id', id)
    .single();
    
  if (error) {
    console.error('Error al obtener pieza:', error.message);
    return null;
  }
  return pieza;
}

// Crear nueva pieza
async function addPieza(piezaData) {
  console.log('Intentando insertar pieza:', piezaData); // Para debug
  
  const { data, error } = await supabase
    .from('piezas')
    .insert([piezaData])
    .select();

  if (error) {
    console.error('Error completo de Supabase:', error);
    return { success: false, error: error.message, details: error };
  }

  return { success: true, data: data[0] };
}

// Actualizar pieza existente
async function updatePieza(id, updates) {
  const { data, error } = await supabase
    .from('piezas')
    .update(updates)
    .eq('id', id)
    .select();

  if (error) {
    console.error('Error al actualizar pieza:', error.message);
    return { success: false, error: error.message };
  }

  return { success: true, data: data[0] };
}

// Eliminar pieza
async function deletePieza(id) {
  try {
    const { data, error } = await supabase
      .from('piezas')
      .delete()
      .eq('id', id);

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
async function searchPiezas(filters = {}) {
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
async function fetchConjuntosForSelect() {
  let { data: conjuntos, error } = await supabase
    .from('conjuntos')
    .select('id, codigo')
    .order('codigo', { ascending: true });
    
  if (error) {
    console.error('Error al obtener conjuntos:', error.message);
    return [];
  }
  return conjuntos;
}

// Obtener chapas para el formulario
async function fetchChapasForSelect() {
  let { data: chapas, error } = await supabase
    .from('chapas')
    .select('id, codigo')
    .order('codigo', { ascending: true });
    
  if (error) {
    console.error('Error al obtener chapas:', error.message);
    return [];
  }
  return chapas;
}

export { FASES as F, fetchChapasForSelect as a, fetchPiezas as b, addPieza as c, fetchPiezaById as d, deletePieza as e, fetchConjuntosForSelect as f, searchPiezas as s, updatePieza as u };
