import { supabase } from './supabaseClient.js';

// Mapeo de estados para conjuntos
export const ESTADOS_CONJUNTOS = {
  0: 'Incompleto',
  1: 'En Progreso',
  2: 'Completado',
  3: 'Revisión',
  4: 'Aprobado'
};

export const ESTADOS_CONJUNTOS_REVERSE = {
  'Incompleto': 0,
  'En Progreso': 1,
  'Completado': 2,
  'Revisión': 3,
  'Aprobado': 4
};

// Función auxiliar para obtener estados de la base de datos
async function obtenerEstadosDeBD() {
  const { data: fases, error } = await supabase
    .from('fases_conjuntos')
    .select('id, fase')
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Error al obtener fases de conjuntos:', error.message);
    return [];
  }
  
  console.log('Fases obtenidas de la base de datos:', fases);
  return fases;
}

// Función auxiliar para agregar estados a un conjunto
async function agregarEstadosAConjunto(conjunto) {
  if (conjunto && !conjunto.estados) {
    // Si el conjunto tiene estados específicos guardados, usarlos
    if (conjunto.estados && Array.isArray(conjunto.estados) && conjunto.estados.length > 0) {
      return conjunto; // Ya tiene estados específicos
    } else {
      // Si no tiene estados específicos, usar los estados por defecto
      const estados = await obtenerEstadosDeBD();
      return {
        ...conjunto,
        estados: estados.map(fase => fase.fase)
      };
    }
  }
  return conjunto;
}

// Obtener todos los conjuntos
export async function fetchConjuntos() {
  console.log('Fetching conjuntos...');
  
  let { data: conjuntos, error } = await supabase
    .from('conjuntos')
    .select(`
      *,
      obras:obra_id(nombre)
    `)
    .order('created_at', { ascending: false })
    
  if (error) {
    console.error('Error al obtener conjuntos:', error.message);
    return [];
  }

  // NO sobrescribir los estados específicos de los conjuntos
  if (conjuntos) {
    conjuntos = conjuntos.map(conjunto => {
      console.log(`Conjunto ${conjunto.codigo}:`, {
        tieneEstados: !!conjunto.estados,
        esArray: Array.isArray(conjunto.estados),
        longitud: conjunto.estados?.length,
        estados: conjunto.estados
      });
      
      // Mantener los estados tal como están en la base de datos
      return conjunto;
    });
  }
  
  console.log('Conjuntos obtenidos:', conjuntos?.length || 0);
  return conjuntos || [];
}

// Obtener un conjunto por ID
export async function fetchConjuntoById(id) {
  let { data: conjunto, error } = await supabase
    .from('conjuntos')
    .select(`
      *,
      obras:obra_id(nombre)
    `)
    .eq('id', id)
    .single()
    
  if (error) {
    console.error('Error al obtener conjunto:', error.message);
    return null;
  }

  console.log(`Conjunto por ID ${id}:`, {
    tieneEstados: !!conjunto.estados,
    esArray: Array.isArray(conjunto.estados),
    longitud: conjunto.estados?.length,
    estados: conjunto.estados
  });

  if (conjunto && !conjunto.estados) {
    const estados = await obtenerEstadosDeBD();
    return {
      ...conjunto,
      estados: estados
    };
  }

  return conjunto;
}

// Crear nuevo conjunto
export async function addConjunto(conjuntoData) {
  console.log('Intentando insertar conjunto:', conjuntoData); // Para debug
  
  const { data, error } = await supabase
    .from('conjuntos')
    .insert([conjuntoData])
    .select()

  if (error) {
    console.error('Error completo de Supabase:', error);
    return { success: false, error: error.message, details: error };
  }

  return { success: true, data: data[0] };
}

// Actualizar conjunto existente
export async function updateConjunto(id, updates) {
  console.log('Actualizando conjunto ID:', id, 'con datos:', updates); // Para debug
  
  const { data, error } = await supabase
    .from('conjuntos')
    .update(updates)
    .eq('id', id)
    .select()

  if (error) {
    console.error('Error al actualizar conjunto:', error.message);
    return { success: false, error: error.message };
  }

  console.log('Conjunto actualizado exitosamente:', data[0]); // Para debug
  return { success: true, data: data[0] };
}

// Eliminar conjunto
export async function deleteConjunto(id) {
  try {
    const { data, error } = await supabase
      .from('conjuntos')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error al eliminar conjunto:', error.message);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    console.error('Error inesperado al eliminar conjunto:', err.message);
    return { success: false, error: err.message };
  }
}

// Buscar conjuntos por filtros
export async function searchConjuntos(filters = {}) {
  let query = supabase.from('conjuntos').select(`
    *,
    obras:obra_id(nombre)
  `);

  if (filters.codigo) {
    query = query.ilike('codigo', `%${filters.codigo}%`);
  }

  if (filters.descripcion) {
    query = query.ilike('descripcion', `%${filters.descripcion}%`);
  }

  if (filters.obra_id) {
    query = query.eq('obra_id', filters.obra_id);
  }

  if (filters.estado_actual !== undefined && filters.estado_actual !== '') {
    query = query.eq('estado_actual', parseInt(filters.estado_actual));
  }

  if (filters.is_completed !== undefined) {
    query = query.eq('is_completed', filters.is_completed);
  }

  const { data, error } = await query.order('created_at', { ascending: false });

  if (error) {
    console.error('Error al buscar conjuntos:', error.message);
    return [];
  }

  // Agregar el array de estados a cada conjunto si no existe
  if (data) {
    const estados = await obtenerEstadosDeBD();
    return data.map(conjunto => {
      console.log(`Conjunto ${conjunto.codigo} en búsqueda:`, {
        tieneEstados: !!conjunto.estados,
        esArray: Array.isArray(conjunto.estados),
        longitud: conjunto.estados?.length,
        estados: conjunto.estados
      });
      
      // Si el conjunto ya tiene estados específicos guardados, usarlos
      if (conjunto.estados && Array.isArray(conjunto.estados) && conjunto.estados.length > 0) {
        console.log(`✅ Conjunto ${conjunto.codigo} mantiene sus estados específicos en búsqueda:`, conjunto.estados);
        return conjunto; // Mantener los estados específicos
      } else {
        // Si no tiene estados específicos, usar los estados por defecto
        console.log(`⚠️ Conjunto ${conjunto.codigo} usa estados por defecto en búsqueda`);
        return {
          ...conjunto,
          estados: conjunto.estados || estados
        };
      }
    });
  }

  return data;
}

// Obtener conjunto por código
export async function fetchConjuntoByCodigo(codigo) {
  let { data: conjunto, error } = await supabase
    .from('conjuntos')
    .select('*')
    .eq('codigo', codigo)
    .single()
    
  if (error) {
    if (error.code === 'PGRST116') {
      // No se encontró el conjunto
      return null;
    }
    console.error('Error al obtener conjunto por código:', error.message);
    return null;
  }

  console.log(`Conjunto por código ${codigo}:`, {
    tieneEstados: !!conjunto.estados,
    esArray: Array.isArray(conjunto.estados),
    longitud: conjunto.estados?.length,
    estados: conjunto.estados
  });

  if (conjunto && (!conjunto.estados || conjunto.estados.length === 0)) {
    const estados = await obtenerEstadosDeBD();
    return {
      ...conjunto,
      estados: estados.map(f => f.fase)
    };
  }

  return conjunto;
}

// Obtener obras para el formulario
export async function fetchObrasForSelect() {
  let { data: obras, error } = await supabase
    .from('obras')
    .select('id, nombre')
    .order('nombre', { ascending: true })
    
  if (error) {
    console.error('Error al obtener obras:', error.message);
    return [];
  }
  return obras;
}

// Obtener fases de conjuntos para el formulario
export async function fetchFaseConjuntosForSelect() {
  let { data: fases, error } = await supabase
    .from('fases_conjuntos')
    .select('id, fase')
    .order('created_at', { ascending: true })
    
  if (error) {
    console.error('Error al obtener fases de conjuntos:', error.message);
    return [];
  }
  return fases;
}

// Obtener fase de conjunto por ID
export async function fetchFaseConjuntoById(id) {
  let { data: fase, error } = await supabase
    .from('fases_conjuntos')
    .select('*')
    .eq('id', id)
    .single()
    
  if (error) {
    console.error('Error al obtener fase de conjunto:', error.message);
    return null;
  }
  return fase;
}

// Función para actualizar las fases de un conjunto basado en su obra
export async function actualizarFasesConjunto(conjuntoId) {
  try {
    // Primero obtener el conjunto para saber a qué obra pertenece
    const conjunto = await fetchConjuntoById(conjuntoId);
    if (!conjunto) {
      return { success: false, error: 'Conjunto no encontrado' };
    }

    // Si el conjunto ya tiene estados específicos, no sobrescribirlos
    if (conjunto.estados && Array.isArray(conjunto.estados) && conjunto.estados.length > 0) {
      console.log(`Conjunto ${conjunto.codigo} ya tiene estados específicos, no se actualizarán`);
      return { success: true, data: conjunto, message: 'Estados específicos preservados' };
    }

    // Solo actualizar si no tiene estados específicos
    const { getObraFasesPiezas, getObraFasesConjuntos } = await import('./obra_api.js');
    const fasesPiezas = await getObraFasesPiezas(conjunto.obra_id);
    const fasesConjuntos = await getObraFasesConjuntos(conjunto.obra_id);

    // Actualizar el conjunto con las fases
    const { data, error } = await supabase
      .from('conjuntos')
      .update({
        estados: fasesConjuntos,
        fases_piezas: fasesPiezas
      })
      .eq('id', conjuntoId)
      .select();

    if (error) {
      console.error('Error al actualizar fases del conjunto:', error.message);
      return { success: false, error: error.message };
    }

    return { success: true, data: data[0] };
  } catch (err) {
    console.error('Error inesperado al actualizar fases del conjunto:', err.message);
    return { success: false, error: err.message };
  }
}

// Obtener fases de piezas de un conjunto específico
export async function getFasesPiezasByConjunto(conjuntoId) {
  try {
    const { data: conjunto, error } = await supabase
      .from('conjuntos')
      .select('fases_piezas')
      .eq('id', conjuntoId)
      .single();

    if (error) {
      console.error('Error al obtener fases de piezas del conjunto:', error.message);
      return [];
    }

    return conjunto?.fases_piezas || [];
  } catch (err) {
    console.error('Error inesperado al obtener fases de piezas del conjunto:', err.message);
    return [];
  }
}

// Función para actualizar todos los conjuntos existentes
export async function actualizarFasesTodosConjuntos() {
  try {
    // Obtener todos los conjuntos
    const conjuntos = await fetchConjuntos();
    const results = {
      total: conjuntos.length,
      actualizados: 0,
      errores: []
    };

    console.log(`Actualizando fases para ${conjuntos.length} conjuntos...`);

    // Actualizar cada conjunto
    for (const conjunto of conjuntos) {
      try {
        const result = await actualizarFasesConjunto(conjunto.id);
        if (result.success) {
          results.actualizados++;
          console.log(`✅ Conjunto ${conjunto.codigo} actualizado`);
        } else {
          results.errores.push(`Conjunto ${conjunto.codigo}: ${result.error}`);
          console.log(`❌ Error en conjunto ${conjunto.codigo}: ${result.error}`);
        }
      } catch (error) {
        results.errores.push(`Conjunto ${conjunto.codigo}: ${error.message}`);
        console.log(`❌ Error inesperado en conjunto ${conjunto.codigo}: ${error.message}`);
      }
    }

    console.log(`Actualización completada: ${results.actualizados}/${results.total} conjuntos actualizados`);
    return results;
  } catch (err) {
    console.error('Error inesperado al actualizar todos los conjuntos:', err.message);
    return { success: false, error: err.message };
  }
}

// Función para obtener conjuntos con sus fases
export async function fetchConjuntosWithFases() {
  let { data: conjuntos, error } = await supabase
    .from('conjuntos')
    .select(`
      *,
      obras:obra_id(nombre)
    `)
    .order('created_at', { ascending: false })
    
  if (error) {
    console.error('Error al obtener conjuntos:', error.message);
    return [];
  }
  
  return conjuntos || [];
}