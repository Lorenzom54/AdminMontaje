// Script de prueba para verificar la importación de CSV
const testCSVData = [
  {
    "Conjunto": "TEST-01",
    "Parte": "P001",
    "Apodo": "TUBO_TEST",
    "Perfil": "RHS250*100*5",
    "Longitud(mm)": "1500",
    "Peso": "12.5"
  },
  {
    "Conjunto": "TEST-01", 
    "Parte": "P002",
    "Apodo": "PLACA_TEST",
    "Perfil": "PLACA10",
    "Longitud(mm)": "800",
    "Peso": "6.8"
  },
  {
    "Conjunto": "TEST-02",
    "Parte": "P003", 
    "Apodo": "TUBO_TEST2",
    "Perfil": "RHS200*100*4",
    "Longitud(mm)": "1800",
    "Peso": "14.3"
  }
];

async function testImport() {
  try {
    console.log('Iniciando prueba de importación...');
    
    const response = await fetch('http://localhost:4321/api/piezas/import-csv', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        csvData: testCSVData,
        selectedObraId: '15' // Usar una obra existente
      })
    });

    const result = await response.json();
    
    console.log('Resultado de la importación:', result);
    
    if (result.success) {
      console.log('✅ Importación exitosa!');
      console.log(`- Piezas creadas: ${result.data.piezasCreadas}`);
      console.log(`- Conjuntos creados: ${result.data.conjuntosCreados}`);
      if (result.data.errores.length > 0) {
        console.log(`- Errores: ${result.data.errores.length}`);
        result.data.errores.forEach(error => console.log(`  - ${error}`));
      }
    } else {
      console.log('❌ Error en la importación:', result.error);
    }
    
  } catch (error) {
    console.error('❌ Error al ejecutar la prueba:', error);
  }
}

// Ejecutar la prueba
testImport();
