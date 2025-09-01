import { s as supabase } from './supabaseClient_CTFy9dOP.mjs';

// Obtener todas las obras
async function fetchObras() {
  let { data: obras, error } = await supabase
    .from('obras')
    .select('*')
    .order('created_at', { ascending: false });
    
  if (error) {
    console.error('Error al obtener obras:', error.message);
    return [];
  }
  return obras;
}

// Crear nueva obra
async function addObra({ nombre, estado, fecha_inicio, fecha_fin, ubicacion, responsable, descripcion, fases_piezas = [], fases_conjuntos = [] }) {
  try {
    // Verificar si las fases ya son nombres (strings) o IDs (números)
    const fasesPiezasNombres = typeof fases_piezas[0] === 'string' ? fases_piezas : await convertirIdsANombres(fases_piezas, 'fases_piezas');
    const fasesConjuntosNombres = typeof fases_conjuntos[0] === 'string' ? fases_conjuntos : await convertirIdsANombres(fases_conjuntos, 'fases_conjuntos');

    console.log('Fases de piezas a guardar:', fasesPiezasNombres);
    console.log('Fases de conjuntos a guardar:', fasesConjuntosNombres);

    // Crear la obra con las fases incluidas directamente
    const { data: obraData, error: obraError } = await supabase
      .from('obras')
      .insert([
        {
          nombre,
          estado,
          fecha_inicio,
          fecha_fin,
          ubicacion,
          responsable,
          descripcion,
          fases_piezas: fasesPiezasNombres,
          fases_conjuntos: fasesConjuntosNombres
        }
      ])
      .select();

    if (obraError) {
      console.error('Error al insertar obra:', obraError.message);
      return { success: false, error: obraError.message };
    }

    const obra = obraData[0];
    return { success: true, data: obra };
  } catch (error) {
    console.error('Error inesperado al crear obra:', error.message);
    return { success: false, error: error.message };
  }
}

// Función auxiliar para convertir IDs a nombres de fases
async function convertirIdsANombres(ids, tipoTabla) {
  if (!ids || ids.length === 0) {
    return [];
  }
  
  const tabla = tipoTabla === 'fases_piezas' ? 'fases_piezas' : 'fases_conjuntos';
  
  const { data, error } = await supabase
    .from(tabla)
    .select('fase')
    .in('id', ids);

  if (error) {
    console.error(`Error al obtener nombres de ${tipoTabla}:`, error.message);
    return [];
  }

  return data.map(item => item.fase);
}

// Actualizar obra con fases
async function updateObraWithFases(id, updates, fases_piezas = [], fases_conjuntos = []) {
  try {
    // Convertir IDs de fases a nombres
    const fasesPiezasNombres = await convertirIdsANombres(fases_piezas, 'fases_piezas');
    const fasesConjuntosNombres = await convertirIdsANombres(fases_conjuntos, 'fases_conjuntos');

    // Actualizar la obra incluyendo las fases
    const updatesWithFases = {
      ...updates,
      fases_piezas: fasesPiezasNombres,
      fases_conjuntos: fasesConjuntosNombres
    };

    const { data: obraData, error: obraError } = await supabase
      .from('obras')
      .update(updatesWithFases)
      .eq('id', id)
      .select();

    if (obraError) {
      console.error('Error al actualizar obra:', obraError.message);
      return { success: false, error: obraError.message };
    }

    const obra = obraData[0];
    return { success: true, data: obra };
  } catch (error) {
    console.error('Error inesperado al actualizar obra:', error.message);
    return { success: false, error: error.message };
  }
}

// Eliminar obra
async function deleteObra(id) {
  try {
    const { data, error } = await supabase
      .from('obras')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error al eliminar obra:', error.message);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    console.error('Error inesperado al eliminar obra:', err.message);
    return { success: false, error: err.message };
  }
}

// Buscar obras por filtros
async function searchObras(filters = {}) {
  let query = supabase.from('obras').select('*');

  if (filters.estado) {
    query = query.eq('estado', filters.estado);
  }

  if (filters.nombre) {
    query = query.ilike('nombre', `%${filters.nombre}%`);
  }

  if (filters.responsable) {
    query = query.ilike('responsable', `%${filters.responsable}%`);
  }

  if (filters.fecha_inicio) {
    query = query.gte('fecha_inicio', filters.fecha_inicio);
  }

  if (filters.fecha_fin) {
    query = query.lte('fecha_fin', filters.fecha_fin);
  }

  const { data, error } = await query.order('created_at', { ascending: false });

  if (error) {
    console.error('Error al buscar obras:', error.message);
    return [];
  }

  return data;
}

// Obtener una obra por ID con sus fases
async function fetchObraByIdWithFases(id) {
  let { data: obra, error } = await supabase
    .from('obras')
    .select('*')
    .eq('id', id)
    .single();
    
  if (error) {
    console.error('Error al obtener obra:', error.message);
    return null;
  }

  // Obtener las fases de la obra
  const fasesPiezas = await getObraFasesPiezas(id);
  const fasesConjuntos = await getObraFasesConjuntos(id);

  return {
    ...obra,
    fases_piezas: fasesPiezas,
    fases_conjuntos: fasesConjuntos
  };
}

// Obtener fases de piezas de una obra
async function getObraFasesPiezas(obraId) {
  const { data, error } = await supabase
    .from('obras')
    .select('fases_piezas')
    .eq('id', obraId)
    .single();

  if (error) {
    console.error('Error al obtener fases de piezas de la obra:', error.message);
    return [];
  }

  // Las fases ya están almacenadas como nombres, no necesitamos conversión
  return data.fases_piezas || [];
}

// Obtener fases de conjuntos de una obra
async function getObraFasesConjuntos(obraId) {
  const { data, error } = await supabase
    .from('obras')
    .select('fases_conjuntos')
    .eq('id', obraId)
    .single();

  if (error) {
    console.error('Error al obtener fases de conjuntos de la obra:', error.message);
    return [];
  }

  // Las fases ya están almacenadas como nombres, no necesitamos conversión
  return data.fases_conjuntos || [];
}

export { addObra, deleteObra, fetchObraByIdWithFases, fetchObras, getObraFasesConjuntos, getObraFasesPiezas, searchObras, updateObraWithFases };
