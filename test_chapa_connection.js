import { supabase } from './src/lib/supabaseClient.js';

async function testChapaConnection() {
  console.log('=== PRUEBA DE CONEXIÓN A SUPABASE ===');
  
  try {
    // Probar conexión básica
    console.log('1. Probando conexión básica...');
    const { data, error } = await supabase.from('chapas').select('count').limit(1);
    
    if (error) {
      console.error('Error de conexión:', error);
      return;
    }
    
    console.log('✅ Conexión exitosa');
    
    // Probar estructura de la tabla
    console.log('2. Probando estructura de la tabla...');
    const { data: structure, error: structureError } = await supabase
      .from('chapas')
      .select('*')
      .limit(1);
    
    if (structureError) {
      console.error('Error al obtener estructura:', structureError);
      return;
    }
    
    console.log('✅ Estructura de tabla accesible');
    console.log('Campos disponibles:', structure.length > 0 ? Object.keys(structure[0]) : 'Tabla vacía');
    
    // Probar inserción de prueba
    console.log('3. Probando inserción de prueba...');
    const testData = {
      codigo: 'TEST-' + Date.now(),
      tipo_acero: 'S275',
      colada: 'TEST-COLADA',
      espesor: '10',
      dimensiones: '1000x2000'
    };
    
    console.log('Datos de prueba:', testData);
    
    const { data: insertData, error: insertError } = await supabase
      .from('chapas')
      .insert([testData])
      .select();
    
    if (insertError) {
      console.error('❌ Error en inserción:', insertError);
      console.error('Detalles:', JSON.stringify(insertError, null, 2));
    } else {
      console.log('✅ Inserción exitosa:', insertData);
      
      // Limpiar datos de prueba
      if (insertData && insertData[0]) {
        await supabase.from('chapas').delete().eq('id', insertData[0].id);
        console.log('🧹 Datos de prueba eliminados');
      }
    }
    
  } catch (err) {
    console.error('❌ Error general:', err);
  }
}

testChapaConnection();
