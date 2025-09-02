import { e as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead, f as createAstro, h as addAttribute, l as defineScriptVars } from '../../chunks/astro/server_Bi__Z7-M.mjs';
import 'kleur/colors';
import { a as $$PageHeader, $ as $$AdminLayout } from '../../chunks/PageHeader_Brl_MUMp.mjs';
import { $ as $$FormField, a as $$Modal } from '../../chunks/FormField_BixoaIOJ.mjs';
import { f as fetchConjuntosForSelect, a as fetchChapasForSelect, b as fetchFasePiezasForSelect, g as getFasesMap, s as searchPiezas, c as searchPiezasCount, d as fetchPiezas, e as fetchPiezasCount } from '../../chunks/pieza_api_CWN9-kdm.mjs';
/* empty css                                     */
import { $ as $$DetailModal } from '../../chunks/DetailModal_NkGyXgeE.mjs';
import 'clsx';
import { f as fetchObrasForSelect } from '../../chunks/conjunto_api_DdlW2uM9.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$PiezasForm = createComponent(async ($$result, $$props, $$slots) => {
  const conjuntos = await fetchConjuntosForSelect();
  const chapas = await fetchChapasForSelect();
  const fases = await fetchFasePiezasForSelect();
  const faseOptions = fases?.map((f, i) => ({ value: i.toString(), label: f.fase })) || [];
  const conjuntoOptions = conjuntos?.map((c) => ({ value: c.id.toString(), label: c.codigo })) || [];
  const chapaOptions = chapas?.map((c) => ({ value: c.id.toString(), label: `#${c.codigo}` })) || [];
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<form class="piezas-form" id="piezas-form" data-astro-cid-sigyfebt> <div class="form-grid" data-astro-cid-sigyfebt> <div class="form-column" data-astro-cid-sigyfebt> ', " ", " ", ' </div> <div class="form-column" data-astro-cid-sigyfebt> ', " ", " ", ` </div> </div> <div class="form-actions" data-astro-cid-sigyfebt> <button type="button" class="btn-cancel" data-close-modal="modal-nueva-pieza" data-astro-cid-sigyfebt>
Cancelar
</button> <button type="submit" class="btn-submit" data-astro-cid-sigyfebt> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-sigyfebt> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-sigyfebt></path> </svg>
Crear Pieza
</button> </div> </form>  <script type="module">
  document.getElementById('piezas-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const submitButton = form.querySelector('.btn-submit');
    
    // Prevenir m\xFAltiples env\xEDos
    if (submitButton.disabled) {
      return;
    }
    
    // Deshabilitar bot\xF3n durante el env\xEDo
    submitButton.disabled = true;
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = \`
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="animate-spin">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
      Creando...
    \`;

    const body = {
      codigo: formData.get('codigo'),
      tipo_material: formData.get('tipo_material'),
      colada: formData.get('colada'),
      fase_id: formData.get('fase_id'),
      conjunto_id: formData.get('conjunto_id'),
      chapa_id: formData.get('chapa_id'),
    };

    try {
      const res = await fetch('/api/piezas/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

      const json = await res.json();
      
      if (json.success) {
        // Mostrar \xE9xito
        submitButton.innerHTML = \`
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          \xA1Pieza creada!
        \`;
        submitButton.style.background = '#10b981';
        
        // Recargar la p\xE1gina despu\xE9s de un breve delay
        setTimeout(() => {
          location.reload();
        }, 1500);
      } else {
        throw new Error(json.error || 'Error al crear la pieza');
      }
    } catch (error) {
      console.error('Error al crear pieza:', error);
      
      // Mostrar error
      submitButton.innerHTML = \`
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
        Error al crear
      \`;
      submitButton.style.background = '#ef4444';
      
      // Restaurar bot\xF3n despu\xE9s de un delay
      setTimeout(() => {
        submitButton.innerHTML = originalText;
        submitButton.style.background = '';
        submitButton.disabled = false;
      }, 2000);
    }
  });
<\/script>`], ["", '<form class="piezas-form" id="piezas-form" data-astro-cid-sigyfebt> <div class="form-grid" data-astro-cid-sigyfebt> <div class="form-column" data-astro-cid-sigyfebt> ', " ", " ", ' </div> <div class="form-column" data-astro-cid-sigyfebt> ', " ", " ", ` </div> </div> <div class="form-actions" data-astro-cid-sigyfebt> <button type="button" class="btn-cancel" data-close-modal="modal-nueva-pieza" data-astro-cid-sigyfebt>
Cancelar
</button> <button type="submit" class="btn-submit" data-astro-cid-sigyfebt> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-sigyfebt> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-sigyfebt></path> </svg>
Crear Pieza
</button> </div> </form>  <script type="module">
  document.getElementById('piezas-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const submitButton = form.querySelector('.btn-submit');
    
    // Prevenir m\xFAltiples env\xEDos
    if (submitButton.disabled) {
      return;
    }
    
    // Deshabilitar bot\xF3n durante el env\xEDo
    submitButton.disabled = true;
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = \\\`
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="animate-spin">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
      Creando...
    \\\`;

    const body = {
      codigo: formData.get('codigo'),
      tipo_material: formData.get('tipo_material'),
      colada: formData.get('colada'),
      fase_id: formData.get('fase_id'),
      conjunto_id: formData.get('conjunto_id'),
      chapa_id: formData.get('chapa_id'),
    };

    try {
      const res = await fetch('/api/piezas/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

      const json = await res.json();
      
      if (json.success) {
        // Mostrar \xE9xito
        submitButton.innerHTML = \\\`
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          \xA1Pieza creada!
        \\\`;
        submitButton.style.background = '#10b981';
        
        // Recargar la p\xE1gina despu\xE9s de un breve delay
        setTimeout(() => {
          location.reload();
        }, 1500);
      } else {
        throw new Error(json.error || 'Error al crear la pieza');
      }
    } catch (error) {
      console.error('Error al crear pieza:', error);
      
      // Mostrar error
      submitButton.innerHTML = \\\`
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
        Error al crear
      \\\`;
      submitButton.style.background = '#ef4444';
      
      // Restaurar bot\xF3n despu\xE9s de un delay
      setTimeout(() => {
        submitButton.innerHTML = originalText;
        submitButton.style.background = '';
        submitButton.disabled = false;
      }, 2000);
    }
  });
<\/script>`])), maybeRenderHead(), renderComponent($$result, "FormField", $$FormField, { "label": "C\xF3digo de la Pieza", "name": "codigo", "required": true, "placeholder": "Ej: PZ-001", "data-astro-cid-sigyfebt": true }), renderComponent($$result, "FormField", $$FormField, { "label": "Tipo de Material", "name": "tipo_material", "data-astro-cid-sigyfebt": true }), renderComponent($$result, "FormField", $$FormField, { "label": "Colada", "name": "colada", "placeholder": "Ej: COL2024001", "data-astro-cid-sigyfebt": true }), renderComponent($$result, "FormField", $$FormField, { "label": "Fase", "name": "fase_id", "type": "select", "options": faseOptions, "required": true, "data-astro-cid-sigyfebt": true }), renderComponent($$result, "FormField", $$FormField, { "label": "Conjunto", "name": "conjunto_id", "type": "select", "options": conjuntoOptions, "data-astro-cid-sigyfebt": true }), renderComponent($$result, "FormField", $$FormField, { "label": "Chapa", "name": "chapa_id", "type": "select", "options": chapaOptions, "data-astro-cid-sigyfebt": true }));
}, "/Applications/XAMPP/xamppfiles/htdocs/AdminMontaje/src/components/forms/PiezasForm.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$3 = createAstro();
const $$TablePieza = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TablePieza;
  const { piezas } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<div class="table-container" data-astro-cid-aaagcoq6> <div id="piezas-table" data-astro-cid-aaagcoq6></div> </div>  <script type="module">
  // Funci\xF3n para formatear fechas
  function formatDate(dateString) {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('es-ES');
  }

  // Funci\xF3n para obtener el nombre de la fase
  function getFaseName(fase) {
    if (fase === 0) return 'Para cortar';
    if (fase === 1) return 'Cortado';
    return \`Fase \${fase}\`;
  }

  // Funci\xF3n para editar pieza
  window.editPieza = async function(piezaId) {
    try {
      const response = await fetch(\`/api/piezas/\${piezaId}\`);
      const result = await response.json();
      
      if (result.success) {
        const pieza = result.data;
        
        // Llenar el formulario con los datos existentes
        const form = document.getElementById('piezas-form');
        if (form) {
          form.querySelector('[name="codigo"]').value = pieza.codigo || '';
          form.querySelector('[name="tipo_material"]').value = pieza.tipo_material || '';
          form.querySelector('[name="colada"]').value = pieza.colada || '';
          form.querySelector('[name="fase_id"]').value = pieza.fase?.toString() || '';
          form.querySelector('[name="conjunto_id"]').value = pieza.conjunto_id?.toString() || '';
          form.querySelector('[name="chapa_id"]').value = pieza.chapa_id?.toString() || '';
          
          // Cambiar el comportamiento del formulario para actualizar
          form.setAttribute('data-edit-id', piezaId);
          form.querySelector('.btn-submit').innerHTML = \`
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Actualizar Pieza
          \`;
          
          // Cambiar el t\xEDtulo del modal
          const modal = document.getElementById('modal-nueva-pieza');
          const title = modal.querySelector('.modal-title');
          if (title) {
            title.textContent = 'Editar Pieza';
          }
          
          // Abrir el modal
          openModal('modal-nueva-pieza');
        }
      }
    } catch (error) {
      console.error('Error al cargar pieza para editar:', error);
      alert('Error al cargar los datos de la pieza');
    }
  };

  // Funci\xF3n para eliminar pieza
  window.deletePieza = async function(piezaId, piezaCodigo) {
    if (confirm(\`\xBFEst\xE1s seguro de que quieres eliminar la pieza "\${piezaCodigo}"? Esta acci\xF3n no se puede deshacer.\`)) {
      try {
        const response = await fetch(\`/api/piezas/\${piezaId}\`, {
          method: 'DELETE'
        });
        
        const result = await response.json();
        
        if (result.success) {
          alert('Pieza eliminada correctamente');
          location.reload();
        } else {
          throw new Error(result.error || 'Error al eliminar la pieza');
        }
      } catch (error) {
        console.error('Error al eliminar pieza:', error);
        alert('Error al eliminar la pieza: ' + error.message);
      }
    }
  };

  // Inicializar Tabulator cuando el DOM est\xE9 listo
  document.addEventListener('DOMContentLoaded', function() {
    // Esperar a que Tabulator est\xE9 disponible
    if (typeof Tabulator === 'undefined') {
      console.error('Tabulator no est\xE1 disponible');
      return;
    }

    // Preparar los datos para Tabulator
    const tableData = window.piezasData || [];
    
    // Configuraci\xF3n de Tabulator
    const table = new Tabulator('#piezas-table', {
      data: tableData,
      layout: 'fitDataFill',
      pagination: true,
      paginationSize: 20,
      paginationSizeSelector: [10, 20, 50, 100],
      paginationButtonCount: 5,
      paginationCounter: 'rows',
      movableColumns: true,
      resizableRows: true,
      selectable: true,
      sortable: true,
      filterable: true,
      height: 'auto',
      maxHeight: '600px',
      locale: 'es',
      langs: {
        es: {
          'pagination': {
            'first': 'Primera',
            'first_title': 'Primera p\xE1gina',
            'last': '\xDAltima',
            'last_title': '\xDAltima p\xE1gina',
            'prev': 'Anterior',
            'prev_title': 'P\xE1gina anterior',
            'next': 'Siguiente',
            'next_title': 'P\xE1gina siguiente',
            'all': 'Todas',
            'counter': {
              'showing': 'Mostrando',
              'of': 'de',
              'rows': 'filas',
              'pages': 'p\xE1ginas'
            }
          }
        }
      },
      columns: [
        {
          title: 'C\xF3digo',
          field: 'codigo',
          headerFilter: 'input',
          headerFilterPlaceholder: 'Buscar c\xF3digo...',
          formatter: function(cell) {
            const pieza = cell.getRow().getData();
            return \`
              <div class="pieza-info">
                <strong>\${pieza.codigo}</strong>
                <span class="pieza-id">ID: \${pieza.id}</span>
              </div>
            \`;
          },
          sorter: 'string',
          width: 150
        },
        {
          title: 'Tipo Material',
          field: 'tipo_material',
          headerFilter: 'input',
          headerFilterPlaceholder: 'Buscar material...',
          formatter: function(cell) {
            const material = cell.getValue() || '-';
            return \`<span class="material-badge">\${material}</span>\`;
          },
          sorter: 'string',
          width: 140
        },
        {
          title: 'Fase',
          field: 'fase',
          headerFilter: 'select',
          headerFilterOptions: [
            { label: 'Todas', value: '' },
            { label: 'Para cortar', value: '0' },
            { label: 'Cortado', value: '1' }
          ],
          formatter: function(cell) {
            const fase = cell.getValue();
            const faseName = getFaseName(fase);
            return \`<span class="fase-badge">\${faseName}</span>\`;
          },
          sorter: 'number',
          width: 120
        },
        {
          title: 'Conjunto',
          field: 'conjuntos.codigo',
          headerFilter: 'input',
          headerFilterPlaceholder: 'Buscar conjunto...',
          formatter: function(cell) {
            const conjunto = cell.getValue() || '-';
            return \`<div class="conjunto-info"><span>\${conjunto}</span></div>\`;
          },
          sorter: 'string',
          width: 120
        },
        {
          title: 'Obra',
          field: 'conjuntos.obras.nombre',
          headerFilter: 'input',
          headerFilterPlaceholder: 'Buscar obra...',
          formatter: function(cell) {
            const obra = cell.getValue() || '-';
            return \`<div class="obra-info"><span>\${obra}</span></div>\`;
          },
          sorter: 'string',
          width: 150
        },
        {
          title: 'Chapa',
          field: 'chapas.codigo',
          headerFilter: 'input',
          headerFilterPlaceholder: 'Buscar chapa...',
          formatter: function(cell) {
            const chapa = cell.getValue();
            const chapaDisplay = chapa ? \`#\${chapa}\` : '-';
            return \`<div class="chapa-info"><span>\${chapaDisplay}</span></div>\`;
          },
          sorter: 'number',
          width: 100
        },
        {
          title: 'Colada',
          field: 'colada',
          headerFilter: 'input',
          headerFilterPlaceholder: 'Buscar colada...',
          formatter: function(cell) {
            const colada = cell.getValue() || '-';
            return \`<div class="colada-info"><span>\${colada}</span></div>\`;
          },
          sorter: 'string',
          width: 120
        },
        {
          title: 'Fecha Creaci\xF3n',
          field: 'created_at',
          headerFilter: 'input',
          headerFilterPlaceholder: 'Buscar fecha...',
          formatter: function(cell) {
            const date = cell.getValue();
            return formatDate(date);
          },
          sorter: 'datetime',
          width: 130
        },
        {
          title: 'Acciones',
          field: 'id',
          headerSort: false,
          formatter: function(cell) {
            const pieza = cell.getRow().getData();
            return \`
              <div class="action-buttons">
                <button class="btn-icon" title="Ver detalles" onclick="openModal('detail-pieza-\${pieza.id}')">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
                <button class="btn-icon" title="Editar" onclick="editPieza('\${pieza.id}')">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
                <button class="btn-icon btn-delete" title="Eliminar" onclick="deletePieza('\${pieza.id}', '\${pieza.codigo}')">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            \`;
          },
          width: 120
        }
      ],
      rowFormatter: function(row) {
        // Agregar clases CSS personalizadas
        const data = row.getData();
        if (data.fase === 0) {
          row.getElement().classList.add('fase-pendiente');
        } else if (data.fase === 1) {
          row.getElement().classList.add('fase-completada');
        }
      }
    });

    // Hacer la tabla disponible globalmente para debugging
    window.piezasTable = table;

    // Eventos de la tabla
    table.on('tableBuilt', function() {
      console.log('Tabla de piezas construida con \xE9xito');
    });

    table.on('dataLoaded', function(data) {
      console.log(\`Datos cargados: \${data.length} piezas\`);
    });

    table.on('rowClick', function(e, row) {
      // Opcional: hacer las filas clickeables
      console.log('Fila clickeada:', row.getData());
    });

    // Exportar datos
    window.exportTableData = function(format = 'csv') {
      if (format === 'csv') {
        table.download('csv', 'piezas.csv');
      } else if (format === 'xlsx') {
        table.download('xlsx', 'piezas.xlsx');
      } else if (format === 'pdf') {
        table.download('pdf', 'piezas.pdf');
      }
    };
  });

  // Modificar el comportamiento del formulario para manejar edici\xF3n
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('piezas-form');
    if (form) {
      // Remover event listeners existentes para evitar duplicados
      const newForm = form.cloneNode(true);
      form.parentNode.replaceChild(newForm, form);
      
      newForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const editId = newForm.getAttribute('data-edit-id');
        const isEditing = !!editId;
        
        const formData = new FormData(newForm);
        const submitButton = newForm.querySelector('.btn-submit');
        
        // Prevenir m\xFAltiples env\xEDos
        if (submitButton.disabled) {
          return;
        }
        
        // Deshabilitar bot\xF3n durante el env\xEDo
        submitButton.disabled = true;
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = \`
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="animate-spin">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          \${isEditing ? 'Actualizando...' : 'Creando...'}
        \`;

        const body = {
          codigo: formData.get('codigo'),
          tipo_material: formData.get('tipo_material'),
          colada: formData.get('colada'),
          fase_id: formData.get('fase_id'),
          conjunto_id: formData.get('conjunto_id'),
          chapa_id: formData.get('chapa_id'),
        };

        try {
          const url = isEditing ? \`/api/piezas/\${editId}\` : '/api/piezas/create';
          const method = isEditing ? 'PUT' : 'POST';
          
          const res = await fetch(url, {
            method: method,
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
          });

          const json = await res.json();
          
          if (json.success) {
            // Mostrar \xE9xito
            submitButton.innerHTML = \`
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              \${isEditing ? '\xA1Pieza actualizada!' : '\xA1Pieza creada!'}
            \`;
            submitButton.style.background = '#10b981';
            
            // Recargar la p\xE1gina despu\xE9s de un breve delay
            setTimeout(() => {
              location.reload();
            }, 1500);
          } else {
            throw new Error(json.error || \`Error al \${isEditing ? 'actualizar' : 'crear'} la pieza\`);
          }
        } catch (error) {
          console.error(\`Error al \${isEditing ? 'actualizar' : 'crear'} pieza:\`, error);
          
          // Mostrar error
          submitButton.innerHTML = \`
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            Error al \${isEditing ? 'actualizar' : 'crear'}
          \`;
          submitButton.style.background = '#ef4444';
          
          // Restaurar bot\xF3n despu\xE9s de un delay
          setTimeout(() => {
            submitButton.innerHTML = originalText;
            submitButton.style.background = '';
            submitButton.disabled = false;
          }, 2000);
        }
      });
    }

    // Limpiar formulario cuando se cierra el modal
    document.addEventListener('click', function(e) {
      if (e.target.matches('[data-close-modal="modal-nueva-pieza"]')) {
        const form = document.getElementById('piezas-form');
        if (form) {
          form.reset();
          form.removeAttribute('data-edit-id');
          form.querySelector('.btn-submit').innerHTML = \`
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Crear Pieza
          \`;
          
          // Restaurar t\xEDtulo del modal
          const modal = document.getElementById('modal-nueva-pieza');
          const title = modal.querySelector('.modal-title');
          if (title) {
            title.textContent = 'Nueva Pieza';
          }
        }
      }
    });
  });
<\/script>`], ["", `<div class="table-container" data-astro-cid-aaagcoq6> <div id="piezas-table" data-astro-cid-aaagcoq6></div> </div>  <script type="module">
  // Funci\xF3n para formatear fechas
  function formatDate(dateString) {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('es-ES');
  }

  // Funci\xF3n para obtener el nombre de la fase
  function getFaseName(fase) {
    if (fase === 0) return 'Para cortar';
    if (fase === 1) return 'Cortado';
    return \\\`Fase \\\${fase}\\\`;
  }

  // Funci\xF3n para editar pieza
  window.editPieza = async function(piezaId) {
    try {
      const response = await fetch(\\\`/api/piezas/\\\${piezaId}\\\`);
      const result = await response.json();
      
      if (result.success) {
        const pieza = result.data;
        
        // Llenar el formulario con los datos existentes
        const form = document.getElementById('piezas-form');
        if (form) {
          form.querySelector('[name="codigo"]').value = pieza.codigo || '';
          form.querySelector('[name="tipo_material"]').value = pieza.tipo_material || '';
          form.querySelector('[name="colada"]').value = pieza.colada || '';
          form.querySelector('[name="fase_id"]').value = pieza.fase?.toString() || '';
          form.querySelector('[name="conjunto_id"]').value = pieza.conjunto_id?.toString() || '';
          form.querySelector('[name="chapa_id"]').value = pieza.chapa_id?.toString() || '';
          
          // Cambiar el comportamiento del formulario para actualizar
          form.setAttribute('data-edit-id', piezaId);
          form.querySelector('.btn-submit').innerHTML = \\\`
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Actualizar Pieza
          \\\`;
          
          // Cambiar el t\xEDtulo del modal
          const modal = document.getElementById('modal-nueva-pieza');
          const title = modal.querySelector('.modal-title');
          if (title) {
            title.textContent = 'Editar Pieza';
          }
          
          // Abrir el modal
          openModal('modal-nueva-pieza');
        }
      }
    } catch (error) {
      console.error('Error al cargar pieza para editar:', error);
      alert('Error al cargar los datos de la pieza');
    }
  };

  // Funci\xF3n para eliminar pieza
  window.deletePieza = async function(piezaId, piezaCodigo) {
    if (confirm(\\\`\xBFEst\xE1s seguro de que quieres eliminar la pieza "\\\${piezaCodigo}"? Esta acci\xF3n no se puede deshacer.\\\`)) {
      try {
        const response = await fetch(\\\`/api/piezas/\\\${piezaId}\\\`, {
          method: 'DELETE'
        });
        
        const result = await response.json();
        
        if (result.success) {
          alert('Pieza eliminada correctamente');
          location.reload();
        } else {
          throw new Error(result.error || 'Error al eliminar la pieza');
        }
      } catch (error) {
        console.error('Error al eliminar pieza:', error);
        alert('Error al eliminar la pieza: ' + error.message);
      }
    }
  };

  // Inicializar Tabulator cuando el DOM est\xE9 listo
  document.addEventListener('DOMContentLoaded', function() {
    // Esperar a que Tabulator est\xE9 disponible
    if (typeof Tabulator === 'undefined') {
      console.error('Tabulator no est\xE1 disponible');
      return;
    }

    // Preparar los datos para Tabulator
    const tableData = window.piezasData || [];
    
    // Configuraci\xF3n de Tabulator
    const table = new Tabulator('#piezas-table', {
      data: tableData,
      layout: 'fitDataFill',
      pagination: true,
      paginationSize: 20,
      paginationSizeSelector: [10, 20, 50, 100],
      paginationButtonCount: 5,
      paginationCounter: 'rows',
      movableColumns: true,
      resizableRows: true,
      selectable: true,
      sortable: true,
      filterable: true,
      height: 'auto',
      maxHeight: '600px',
      locale: 'es',
      langs: {
        es: {
          'pagination': {
            'first': 'Primera',
            'first_title': 'Primera p\xE1gina',
            'last': '\xDAltima',
            'last_title': '\xDAltima p\xE1gina',
            'prev': 'Anterior',
            'prev_title': 'P\xE1gina anterior',
            'next': 'Siguiente',
            'next_title': 'P\xE1gina siguiente',
            'all': 'Todas',
            'counter': {
              'showing': 'Mostrando',
              'of': 'de',
              'rows': 'filas',
              'pages': 'p\xE1ginas'
            }
          }
        }
      },
      columns: [
        {
          title: 'C\xF3digo',
          field: 'codigo',
          headerFilter: 'input',
          headerFilterPlaceholder: 'Buscar c\xF3digo...',
          formatter: function(cell) {
            const pieza = cell.getRow().getData();
            return \\\`
              <div class="pieza-info">
                <strong>\\\${pieza.codigo}</strong>
                <span class="pieza-id">ID: \\\${pieza.id}</span>
              </div>
            \\\`;
          },
          sorter: 'string',
          width: 150
        },
        {
          title: 'Tipo Material',
          field: 'tipo_material',
          headerFilter: 'input',
          headerFilterPlaceholder: 'Buscar material...',
          formatter: function(cell) {
            const material = cell.getValue() || '-';
            return \\\`<span class="material-badge">\\\${material}</span>\\\`;
          },
          sorter: 'string',
          width: 140
        },
        {
          title: 'Fase',
          field: 'fase',
          headerFilter: 'select',
          headerFilterOptions: [
            { label: 'Todas', value: '' },
            { label: 'Para cortar', value: '0' },
            { label: 'Cortado', value: '1' }
          ],
          formatter: function(cell) {
            const fase = cell.getValue();
            const faseName = getFaseName(fase);
            return \\\`<span class="fase-badge">\\\${faseName}</span>\\\`;
          },
          sorter: 'number',
          width: 120
        },
        {
          title: 'Conjunto',
          field: 'conjuntos.codigo',
          headerFilter: 'input',
          headerFilterPlaceholder: 'Buscar conjunto...',
          formatter: function(cell) {
            const conjunto = cell.getValue() || '-';
            return \\\`<div class="conjunto-info"><span>\\\${conjunto}</span></div>\\\`;
          },
          sorter: 'string',
          width: 120
        },
        {
          title: 'Obra',
          field: 'conjuntos.obras.nombre',
          headerFilter: 'input',
          headerFilterPlaceholder: 'Buscar obra...',
          formatter: function(cell) {
            const obra = cell.getValue() || '-';
            return \\\`<div class="obra-info"><span>\\\${obra}</span></div>\\\`;
          },
          sorter: 'string',
          width: 150
        },
        {
          title: 'Chapa',
          field: 'chapas.codigo',
          headerFilter: 'input',
          headerFilterPlaceholder: 'Buscar chapa...',
          formatter: function(cell) {
            const chapa = cell.getValue();
            const chapaDisplay = chapa ? \\\`#\\\${chapa}\\\` : '-';
            return \\\`<div class="chapa-info"><span>\\\${chapaDisplay}</span></div>\\\`;
          },
          sorter: 'number',
          width: 100
        },
        {
          title: 'Colada',
          field: 'colada',
          headerFilter: 'input',
          headerFilterPlaceholder: 'Buscar colada...',
          formatter: function(cell) {
            const colada = cell.getValue() || '-';
            return \\\`<div class="colada-info"><span>\\\${colada}</span></div>\\\`;
          },
          sorter: 'string',
          width: 120
        },
        {
          title: 'Fecha Creaci\xF3n',
          field: 'created_at',
          headerFilter: 'input',
          headerFilterPlaceholder: 'Buscar fecha...',
          formatter: function(cell) {
            const date = cell.getValue();
            return formatDate(date);
          },
          sorter: 'datetime',
          width: 130
        },
        {
          title: 'Acciones',
          field: 'id',
          headerSort: false,
          formatter: function(cell) {
            const pieza = cell.getRow().getData();
            return \\\`
              <div class="action-buttons">
                <button class="btn-icon" title="Ver detalles" onclick="openModal('detail-pieza-\\\${pieza.id}')">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
                <button class="btn-icon" title="Editar" onclick="editPieza('\\\${pieza.id}')">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
                <button class="btn-icon btn-delete" title="Eliminar" onclick="deletePieza('\\\${pieza.id}', '\\\${pieza.codigo}')">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            \\\`;
          },
          width: 120
        }
      ],
      rowFormatter: function(row) {
        // Agregar clases CSS personalizadas
        const data = row.getData();
        if (data.fase === 0) {
          row.getElement().classList.add('fase-pendiente');
        } else if (data.fase === 1) {
          row.getElement().classList.add('fase-completada');
        }
      }
    });

    // Hacer la tabla disponible globalmente para debugging
    window.piezasTable = table;

    // Eventos de la tabla
    table.on('tableBuilt', function() {
      console.log('Tabla de piezas construida con \xE9xito');
    });

    table.on('dataLoaded', function(data) {
      console.log(\\\`Datos cargados: \\\${data.length} piezas\\\`);
    });

    table.on('rowClick', function(e, row) {
      // Opcional: hacer las filas clickeables
      console.log('Fila clickeada:', row.getData());
    });

    // Exportar datos
    window.exportTableData = function(format = 'csv') {
      if (format === 'csv') {
        table.download('csv', 'piezas.csv');
      } else if (format === 'xlsx') {
        table.download('xlsx', 'piezas.xlsx');
      } else if (format === 'pdf') {
        table.download('pdf', 'piezas.pdf');
      }
    };
  });

  // Modificar el comportamiento del formulario para manejar edici\xF3n
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('piezas-form');
    if (form) {
      // Remover event listeners existentes para evitar duplicados
      const newForm = form.cloneNode(true);
      form.parentNode.replaceChild(newForm, form);
      
      newForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const editId = newForm.getAttribute('data-edit-id');
        const isEditing = !!editId;
        
        const formData = new FormData(newForm);
        const submitButton = newForm.querySelector('.btn-submit');
        
        // Prevenir m\xFAltiples env\xEDos
        if (submitButton.disabled) {
          return;
        }
        
        // Deshabilitar bot\xF3n durante el env\xEDo
        submitButton.disabled = true;
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = \\\`
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="animate-spin">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          \\\${isEditing ? 'Actualizando...' : 'Creando...'}
        \\\`;

        const body = {
          codigo: formData.get('codigo'),
          tipo_material: formData.get('tipo_material'),
          colada: formData.get('colada'),
          fase_id: formData.get('fase_id'),
          conjunto_id: formData.get('conjunto_id'),
          chapa_id: formData.get('chapa_id'),
        };

        try {
          const url = isEditing ? \\\`/api/piezas/\\\${editId}\\\` : '/api/piezas/create';
          const method = isEditing ? 'PUT' : 'POST';
          
          const res = await fetch(url, {
            method: method,
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
          });

          const json = await res.json();
          
          if (json.success) {
            // Mostrar \xE9xito
            submitButton.innerHTML = \\\`
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              \\\${isEditing ? '\xA1Pieza actualizada!' : '\xA1Pieza creada!'}
            \\\`;
            submitButton.style.background = '#10b981';
            
            // Recargar la p\xE1gina despu\xE9s de un breve delay
            setTimeout(() => {
              location.reload();
            }, 1500);
          } else {
            throw new Error(json.error || \\\`Error al \\\${isEditing ? 'actualizar' : 'crear'} la pieza\\\`);
          }
        } catch (error) {
          console.error(\\\`Error al \\\${isEditing ? 'actualizar' : 'crear'} pieza:\\\`, error);
          
          // Mostrar error
          submitButton.innerHTML = \\\`
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            Error al \\\${isEditing ? 'actualizar' : 'crear'}
          \\\`;
          submitButton.style.background = '#ef4444';
          
          // Restaurar bot\xF3n despu\xE9s de un delay
          setTimeout(() => {
            submitButton.innerHTML = originalText;
            submitButton.style.background = '';
            submitButton.disabled = false;
          }, 2000);
        }
      });
    }

    // Limpiar formulario cuando se cierra el modal
    document.addEventListener('click', function(e) {
      if (e.target.matches('[data-close-modal="modal-nueva-pieza"]')) {
        const form = document.getElementById('piezas-form');
        if (form) {
          form.reset();
          form.removeAttribute('data-edit-id');
          form.querySelector('.btn-submit').innerHTML = \\\`
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Crear Pieza
          \\\`;
          
          // Restaurar t\xEDtulo del modal
          const modal = document.getElementById('modal-nueva-pieza');
          const title = modal.querySelector('.modal-title');
          if (title) {
            title.textContent = 'Nueva Pieza';
          }
        }
      }
    });
  });
<\/script>`])), maybeRenderHead());
}, "/Applications/XAMPP/xamppfiles/htdocs/AdminMontaje/src/components/table/TablePieza.astro", void 0);

const $$Astro$2 = createAstro();
const $$PiezaDetail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PiezaDetail;
  const { pieza } = Astro2.props;
  const FASES = await getFasesMap();
  function formatDate(dateString) {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  return renderTemplate`${maybeRenderHead()}<div slot="general" class="detail-content" data-astro-cid-zamgxzrv> <div class="detail-grid" data-astro-cid-zamgxzrv> <div class="detail-section" data-astro-cid-zamgxzrv> <h3 class="section-title" data-astro-cid-zamgxzrv>Información de la Pieza</h3> <div class="info-grid" data-astro-cid-zamgxzrv> <div class="info-item" data-astro-cid-zamgxzrv> <label class="info-label" data-astro-cid-zamgxzrv>Código</label> <div class="info-value editable" data-field="codigo" data-astro-cid-zamgxzrv>${pieza.codigo}</div> </div> <div class="info-item" data-astro-cid-zamgxzrv> <label class="info-label" data-astro-cid-zamgxzrv>ID del Sistema</label> <div class="info-value" data-astro-cid-zamgxzrv>${pieza.id}</div> </div> <div class="info-item" data-astro-cid-zamgxzrv> <label class="info-label" data-astro-cid-zamgxzrv>Tipo de Material</label> <div class="info-value editable" data-field="tipo_material" data-astro-cid-zamgxzrv>${pieza.tipo_material}</div> </div> <div class="info-item" data-astro-cid-zamgxzrv> <label class="info-label" data-astro-cid-zamgxzrv>Fecha de Creación</label> <div class="info-value" data-astro-cid-zamgxzrv>${formatDate(pieza.created_at)}</div> </div> </div> </div> <div class="detail-section" data-astro-cid-zamgxzrv> <h3 class="section-title" data-astro-cid-zamgxzrv>Estado y Relaciones</h3> <div class="info-grid" data-astro-cid-zamgxzrv> <div class="info-item" data-astro-cid-zamgxzrv> <label class="info-label" data-astro-cid-zamgxzrv>Fase</label> <div class="info-value" data-astro-cid-zamgxzrv> <span${addAttribute(`fase-badge fase-${pieza.fase}`, "class")} data-astro-cid-zamgxzrv> ${FASES[pieza.fase] || "Desconocida"} </span> </div> </div> <div class="info-item" data-astro-cid-zamgxzrv> <label class="info-label" data-astro-cid-zamgxzrv>Colada</label> <div class="info-value editable" data-field="colada" data-astro-cid-zamgxzrv>${pieza.colada || "-"}</div> </div> <div class="info-item" data-astro-cid-zamgxzrv> <label class="info-label" data-astro-cid-zamgxzrv>Conjunto</label> <div class="info-value" data-astro-cid-zamgxzrv>${pieza.conjuntos?.codigo || "-"}</div> </div> <div class="info-item" data-astro-cid-zamgxzrv> <label class="info-label" data-astro-cid-zamgxzrv>Obra</label> <div class="info-value" data-astro-cid-zamgxzrv>${pieza.conjuntos?.obras?.nombre || "-"}</div> </div> <div class="info-item" data-astro-cid-zamgxzrv> <label class="info-label" data-astro-cid-zamgxzrv>Chapa</label> <div class="info-value" data-astro-cid-zamgxzrv>${pieza.chapas?.codigo ? `#${pieza.chapas.codigo}` : "-"}</div> </div> </div> </div> </div> </div> <div slot="progress" class="detail-content" data-astro-cid-zamgxzrv> <div class="progress-section" data-astro-cid-zamgxzrv> <h3 class="section-title" data-astro-cid-zamgxzrv>Estado de la Pieza</h3> <div class="fase-overview" data-astro-cid-zamgxzrv> <div class="fase-card" data-astro-cid-zamgxzrv> <div class="fase-icon corte" data-astro-cid-zamgxzrv> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-zamgxzrv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-5-9V3m0 0L8 6m3-3l3 3" data-astro-cid-zamgxzrv></path> </svg> </div> <div class="fase-details" data-astro-cid-zamgxzrv> <span class="fase-label" data-astro-cid-zamgxzrv>Para cortar</span> <span class="fase-status" data-astro-cid-zamgxzrv>${pieza.fase >= 0 ? "Completado" : "Pendiente"}</span> </div> </div> <div class="fase-card" data-astro-cid-zamgxzrv> <div class="fase-icon cortado" data-astro-cid-zamgxzrv> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-zamgxzrv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-zamgxzrv></path> </svg> </div> <div class="fase-details" data-astro-cid-zamgxzrv> <span class="fase-label" data-astro-cid-zamgxzrv>Cortado</span> <span class="fase-status" data-astro-cid-zamgxzrv>${pieza.fase >= 1 ? "Completado" : "Pendiente"}</span> </div> </div> </div> </div> </div> <div slot="history" class="detail-content" data-astro-cid-zamgxzrv> <div class="history-section" data-astro-cid-zamgxzrv> <h3 class="section-title" data-astro-cid-zamgxzrv>Historial de la Pieza</h3> <div class="history-items" data-astro-cid-zamgxzrv> <div class="history-item" data-astro-cid-zamgxzrv> <div class="history-avatar" data-astro-cid-zamgxzrv>SYS</div> <div class="history-content" data-astro-cid-zamgxzrv> <div class="history-header" data-astro-cid-zamgxzrv> <strong data-astro-cid-zamgxzrv>Sistema</strong> <span class="history-action" data-astro-cid-zamgxzrv>registró pieza</span> <span class="history-time" data-astro-cid-zamgxzrv>${formatDate(pieza.created_at)}</span> </div> <p class="history-description" data-astro-cid-zamgxzrv>Pieza ${pieza.codigo} registrada en el sistema</p> </div> </div> </div> </div> </div> <div slot="files" class="detail-content" data-astro-cid-zamgxzrv> <div class="files-section" data-astro-cid-zamgxzrv> <h3 class="section-title" data-astro-cid-zamgxzrv>Documentos de la Pieza</h3> <div class="files-upload" data-astro-cid-zamgxzrv> <button class="btn-upload" data-astro-cid-zamgxzrv> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-zamgxzrv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" data-astro-cid-zamgxzrv></path> </svg>
Subir Archivo
</button> </div> <div class="files-placeholder" data-astro-cid-zamgxzrv> <div class="placeholder-icon" data-astro-cid-zamgxzrv> <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-zamgxzrv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-astro-cid-zamgxzrv></path> </svg> </div> <p data-astro-cid-zamgxzrv>No hay documentos adjuntos</p> <span data-astro-cid-zamgxzrv>Sube planos, especificaciones o documentos relacionados con la pieza</span> </div> </div> </div> `;
}, "/Applications/XAMPP/xamppfiles/htdocs/AdminMontaje/src/components/detail/PiezaDetail.astro", void 0);

const $$Astro$1 = createAstro();
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { currentPage, totalPages, totalItems, pageSize, startItem, endItem } = Astro2.props;
  function getVisiblePages(current, total) {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];
    for (let i = Math.max(2, current - delta); i <= Math.min(total - 1, current + delta); i++) {
      range.push(i);
    }
    if (current - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }
    rangeWithDots.push(...range);
    if (current + delta < total - 1) {
      rangeWithDots.push("...", total);
    } else {
      rangeWithDots.push(total);
    }
    return rangeWithDots.filter((item, index, arr) => arr.indexOf(item) === index && item !== 1 || index === 0);
  }
  const visiblePages = totalPages > 1 ? getVisiblePages(currentPage, totalPages) : [];
  return renderTemplate`${maybeRenderHead()}<div class="pagination-container" data-astro-cid-d776pwuy> <!-- Información de registros --> <div class="pagination-info" data-astro-cid-d776pwuy> <span class="text-sm text-gray-600" data-astro-cid-d776pwuy>
Mostrando ${startItem} a ${endItem} de ${totalItems} piezas
</span> </div> <!-- Selector de tamaño de página --> <div class="page-size-selector" data-astro-cid-d776pwuy> <label class="text-sm text-gray-600 mr-2" data-astro-cid-d776pwuy>Mostrar:</label> <select id="page-size-select" class="page-size-select" data-astro-cid-d776pwuy> <option value="10"${addAttribute(pageSize === 10, "selected")} data-astro-cid-d776pwuy>10</option> <option value="20"${addAttribute(pageSize === 20, "selected")} data-astro-cid-d776pwuy>20</option> <option value="50"${addAttribute(pageSize === 50, "selected")} data-astro-cid-d776pwuy>50</option> <option value="100"${addAttribute(pageSize === 100, "selected")} data-astro-cid-d776pwuy>100</option> </select> <span class="text-sm text-gray-600 ml-2" data-astro-cid-d776pwuy>por página</span> </div> <!-- Navegación de páginas --> ${totalPages > 1 && renderTemplate`<div class="pagination-nav" data-astro-cid-d776pwuy> <!-- Botón Anterior --> <button${addAttribute(`pagination-btn ${currentPage === 1 ? "disabled" : ""}`, "class")}${addAttribute(currentPage - 1, "data-page")}${addAttribute(currentPage === 1, "disabled")} data-astro-cid-d776pwuy> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-d776pwuy> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-d776pwuy></path> </svg>
Anterior
</button> <!-- Números de página --> <div class="page-numbers" data-astro-cid-d776pwuy> ${visiblePages.map((page) => page === "..." ? renderTemplate`<span class="pagination-dots" data-astro-cid-d776pwuy>...</span>` : renderTemplate`<button${addAttribute(`pagination-number ${currentPage === page ? "active" : ""}`, "class")}${addAttribute(page, "data-page")} data-astro-cid-d776pwuy> ${page} </button>`)} </div> <!-- Botón Siguiente --> <button${addAttribute(`pagination-btn ${currentPage === totalPages ? "disabled" : ""}`, "class")}${addAttribute(currentPage + 1, "data-page")}${addAttribute(currentPage === totalPages, "disabled")} data-astro-cid-d776pwuy>
Siguiente
<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-d776pwuy> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-d776pwuy></path> </svg> </button> </div>`} </div> `;
}, "/Applications/XAMPP/xamppfiles/htdocs/AdminMontaje/src/components/Pagination.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$PiezasSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PiezasSection;
  const url = new URL(Astro2.request.url);
  const currentPage = parseInt(url.searchParams.get("page") || "1");
  const pageSize = parseInt(url.searchParams.get("pageSize") || "20");
  const filters = {
    fase: url.searchParams.get("fase"),
    obra_id: url.searchParams.get("obra_id"),
    chapa_id: url.searchParams.get("chapa_id"),
    search: url.searchParams.get("search")
  };
  let piezas, totalPiezas;
  if (filters.obra_id || filters.search) {
    const searchFilters = {};
    if (filters.obra_id) searchFilters.obra_id = filters.obra_id;
    if (filters.search) {
      searchFilters.search = filters.search;
    }
    piezas = await searchPiezas(searchFilters, currentPage, pageSize);
    totalPiezas = await searchPiezasCount(searchFilters);
  } else {
    piezas = await fetchPiezas(currentPage, pageSize);
    totalPiezas = await fetchPiezasCount();
  }
  const obras = await fetchObrasForSelect();
  const chapas = await fetchChapasForSelect();
  const obraOptions = (obras || []).map((obra) => ({
    value: obra.id.toString(),
    label: obra.nombre
  }));
  (chapas || []).map((chapa) => ({
    value: chapa.id.toString(),
    label: `#${chapa.codigo}`
  }));
  const piezasPorFase = piezas.reduce((acc, pieza) => {
    const fase = pieza.fase === 0 ? "Para cortar" : pieza.fase === 1 ? "Cortado" : `Fase ${pieza.fase}`;
    acc[fase] = (acc[fase] || 0) + 1;
    return acc;
  }, {});
  const totalPages = Math.ceil((totalPiezas || 0) / pageSize);
  const startItem = (totalPiezas || 0) > 0 ? (currentPage - 1) * pageSize + 1 : 0;
  const endItem = Math.min(currentPage * pageSize, totalPiezas || 0);
  return renderTemplate(_a || (_a = __template(["", " <!-- Barra de filtro de proyecto persistente --> ", '<div class="project-filter-bar" data-astro-cid-vag3ingl> <div class="filter-container" data-astro-cid-vag3ingl> <div class="filter-label" data-astro-cid-vag3ingl> <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vag3ingl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" data-astro-cid-vag3ingl></path> </svg> <span data-astro-cid-vag3ingl>Proyecto Activo:</span> </div> <select class="project-filter-select" id="active-project-filter" data-astro-cid-vag3ingl> <option value="" data-astro-cid-vag3ingl>Todos los proyectos</option> ', ' </select> <div class="filter-info" data-astro-cid-vag3ingl> <span class="text-sm text-gray-500" data-astro-cid-vag3ingl>Esta selecci\xF3n se mantendr\xE1 activa en futuras visitas</span> </div> </div> </div> <div class="piezas-section" data-astro-cid-vag3ingl> <div class="stats-grid" data-astro-cid-vag3ingl> <div class="stat-card" data-astro-cid-vag3ingl> <div class="stat-icon inventory" data-astro-cid-vag3ingl> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vag3ingl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" data-astro-cid-vag3ingl></path> </svg> </div> <div class="stat-content" data-astro-cid-vag3ingl> <div class="stat-number" data-astro-cid-vag3ingl>', '</div> <div class="stat-label" data-astro-cid-vag3ingl>Total Piezas</div> </div> </div> <div class="stat-card" data-astro-cid-vag3ingl> <div class="stat-icon fabrication" data-astro-cid-vag3ingl> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vag3ingl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" data-astro-cid-vag3ingl></path> </svg> </div> <div class="stat-content" data-astro-cid-vag3ingl> <div class="stat-number" data-astro-cid-vag3ingl>', '</div> <div class="stat-label" data-astro-cid-vag3ingl>Para cortar</div> </div> </div> <div class="stat-card" data-astro-cid-vag3ingl> <div class="stat-icon ready" data-astro-cid-vag3ingl> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vag3ingl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-vag3ingl></path> </svg> </div> <div class="stat-content" data-astro-cid-vag3ingl> <div class="stat-number" data-astro-cid-vag3ingl>', '</div> <div class="stat-label" data-astro-cid-vag3ingl>Cortado</div> </div> </div> </div> <div class="piezas-table" data-astro-cid-vag3ingl> <div class="table-header" data-astro-cid-vag3ingl> <h3 data-astro-cid-vag3ingl>Piezas Registradas</h3> <div class="table-filters" data-astro-cid-vag3ingl> <div class="filters-info" id="filters-info" style="display: none;" data-astro-cid-vag3ingl> <span class="filters-badge" data-astro-cid-vag3ingl>Filtros activos</span> </div> ', ' <input type="text" class="filter-input" id="search-input" placeholder="Buscar por c\xF3digo de pieza o colada..."', ` title="Escribe el c\xF3digo de la pieza o n\xFAmero de colada para buscar" data-astro-cid-vag3ingl> <button class="btn-clear-filters" id="clear-filters-btn" title="Limpiar todos los filtros" data-astro-cid-vag3ingl> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vag3ingl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-vag3ingl></path> </svg> </button> <button class="btn-import" onclick="openModal('modal-import-csv')" data-astro-cid-vag3ingl> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vag3ingl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" data-astro-cid-vag3ingl></path> </svg>
Importar CSV
</button> <div class="export-buttons" data-astro-cid-vag3ingl> <button class="btn-export" onclick="exportTableData('csv')" title="Exportar a CSV" data-astro-cid-vag3ingl> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vag3ingl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-astro-cid-vag3ingl></path> </svg>
CSV
</button> <button class="btn-export" onclick="exportTableData('xlsx')" title="Exportar a Excel" data-astro-cid-vag3ingl> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vag3ingl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-astro-cid-vag3ingl></path> </svg>
Excel
</button> </div> </div> </div> `, " <!-- Script para hacer los datos disponibles para Tabulator --> <script>(function(){", "\n      window.piezasData = piezas;\n    })();<\/script> <!-- Paginaci\xF3n --> ", " </div> </div> <!-- Modal para Nueva Pieza --> ", " <!-- Modal para Importar CSV --> ", " <!-- Modales de Detalles din\xE1micos --> ", `  <script type="module">
  // Filtros en tiempo real
  document.addEventListener('DOMContentLoaded', function() {
    const activeProjectFilter = document.getElementById('active-project-filter');
    const searchInput = document.getElementById('search-input');
    const clearFiltersBtn = document.getElementById('clear-filters-btn');
    
    // Estado de paginaci\xF3n
    let currentPage = parseInt(new URLSearchParams(window.location.search).get('page') || '1');
    let currentPageSize = parseInt(new URLSearchParams(window.location.search).get('pageSize') || '20');
    let currentFilters = {
      obra_id: new URLSearchParams(window.location.search).get('obra_id') || '',
      search: new URLSearchParams(window.location.search).get('search') || ''
    };
    
    // Aplicar filtros iniciales
    if (currentFilters.search) searchInput.value = currentFilters.search;

    // Restaurar proyecto activo desde localStorage o URL
    const savedProjectId = localStorage.getItem('activeProjectId');
    const urlProjectId = currentFilters.obra_id;
    
    if (urlProjectId) {
      // Si hay proyecto en URL, usarlo y guardarlo
      activeProjectFilter.value = urlProjectId;
      localStorage.setItem('activeProjectId', urlProjectId);
      currentFilters.obra_id = urlProjectId;
    } else if (savedProjectId) {
      // Si no hay en URL pero s\xED en localStorage, aplicarlo
      activeProjectFilter.value = savedProjectId;
      currentFilters.obra_id = savedProjectId;
    }

    // Funci\xF3n para actualizar el indicador de filtros activos
    function updateFiltersIndicator() {
      const hasActiveFilters = currentFilters.obra_id || currentFilters.search;
      const filtersInfo = document.getElementById('filters-info');
      if (filtersInfo) {
        filtersInfo.style.display = hasActiveFilters ? 'flex' : 'none';
      }
    }
    
    // Actualizar indicador inicial
    updateFiltersIndicator();

    function updateURL() {
      const params = new URLSearchParams();
      params.set('page', currentPage.toString());
      params.set('pageSize', currentPageSize.toString());
      
      if (currentFilters.obra_id) params.set('obra_id', currentFilters.obra_id);
      if (currentFilters.search) params.set('search', currentFilters.search);
      
      const newURL = \`\${window.location.pathname}?\${params.toString()}\`;
      window.history.pushState({}, '', newURL);
      
      // Recargar la p\xE1gina para aplicar los cambios
      window.location.reload();
    }

    function applyFilters() {
      currentFilters.search = searchInput.value;
      currentPage = 1; // Resetear a la primera p\xE1gina cuando se aplican filtros
      updateFiltersIndicator();
      updateURL();
    }

    // Event listeners para filtros
    
    // Event listener para filtro de proyecto persistente
    activeProjectFilter.addEventListener('change', function() {
      const selectedProjectId = this.value;
      
      // Guardar en localStorage
      if (selectedProjectId) {
        localStorage.setItem('activeProjectId', selectedProjectId);
      } else {
        localStorage.removeItem('activeProjectId');
      }
      
      // Actualizar filtros y recargar
      currentFilters.obra_id = selectedProjectId;
      currentPage = 1;
      updateFiltersIndicator();
      updateURL();
    });
    
    // Debounce para el input de b\xFAsqueda
    let searchTimeout;
    searchInput.addEventListener('input', () => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(applyFilters, 500);
    });

    // Event listener para limpiar filtros
    clearFiltersBtn.addEventListener('click', () => {
      activeProjectFilter.value = '';
      searchInput.value = '';
      currentFilters.obra_id = '';
      currentFilters.search = '';
      updateFiltersIndicator();
      updateURL();
    });
    
    // Event listeners para paginaci\xF3n
    document.addEventListener('click', function(e) {
      if (e.target.matches('[data-page]') || e.target.closest('[data-page]')) {
        e.preventDefault();
        const button = e.target.matches('[data-page]') ? e.target : e.target.closest('[data-page]');
        const page = parseInt(button.getAttribute('data-page'));
        
        if (page && page !== currentPage && !button.disabled) {
          currentPage = page;
          updateURL();
        }
      }
    });
    
    // Event listener para cambio de tama\xF1o de p\xE1gina
    const pageSizeSelect = document.getElementById('page-size-select');
    if (pageSizeSelect) {
      pageSizeSelect.addEventListener('change', function() {
        currentPageSize = parseInt(this.value);
        currentPage = 1; // Resetear a la primera p\xE1gina
        updateURL();
      });
    }

    // Funcionalidad de importaci\xF3n CSV
    const csvFile = document.getElementById('csv-file');
    const uploadArea = document.getElementById('upload-area');
    const csvPreview = document.getElementById('csv-preview');
    const previewTable = document.getElementById('preview-table');
    const importBtn = document.getElementById('import-btn');
    let csvData = null;

    // Click en \xE1rea de upload
    uploadArea.addEventListener('click', () => csvFile.click());

    // Drag and drop
    uploadArea.addEventListener('dragover', (e) => {
      e.preventDefault();
      uploadArea.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', () => {
      uploadArea.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', (e) => {
      e.preventDefault();
      uploadArea.classList.remove('dragover');
      const files = e.dataTransfer.files;
      if (files.length > 0) {
        handleFile(files[0]);
      }
    });

    // Selecci\xF3n de archivo
    csvFile.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        handleFile(e.target.files[0]);
      }
    });

    function handleFile(file) {
      if (!file.name.endsWith('.csv')) {
        alert('Por favor selecciona un archivo CSV v\xE1lido');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const csv = e.target.result;
        parseCSV(csv);
      };
      reader.readAsText(file);
    }

    function parseCSV(csv) {
      const lines = csv.split('\\n').filter(line => line.trim());
      if (lines.length < 2) {
        alert('El archivo CSV debe tener al menos una fila de encabezados y una fila de datos');
        return;
      }

      const headers = lines[0].split(';').map(h => h.trim());
      const rows = lines.slice(1).map(line => {
        const values = line.split(';').map(v => v.trim());
        const row = {};
        headers.forEach((header, index) => {
          row[header] = values[index] || '';
        });
        return row;
      });

      csvData = rows;
      showPreview(headers, rows);
      importBtn.disabled = false;
    }

    function showPreview(headers, rows) {
      let html = '<table class="preview-data-table"><thead><tr>';
      headers.forEach(header => {
        html += \`<th>\${header}</th>\`;
      });
      html += '</tr></thead><tbody>';

      rows.slice(0, 5).forEach(row => {
        html += '<tr>';
        headers.forEach(header => {
          html += \`<td>\${row[header] || '-'}</td>\`;
        });
        html += '</tr>';
      });

      if (rows.length > 5) {
        html += \`<tr><td colspan="\${headers.length}" style="text-align: center; font-style: italic;">... y \${rows.length - 5} filas m\xE1s</td></tr>\`;
      }

      html += '</tbody></table>';
      previewTable.innerHTML = html;
      csvPreview.style.display = 'block';
    }

    // Importar CSV
    importBtn.addEventListener('click', async () => {
      if (!csvData) return;

      const obraSelect = document.querySelector('[name="obra_id"]');
      const selectedObraId = obraSelect.value;
      
      if (!selectedObraId) {
        alert('Por favor selecciona una obra de destino');
        return;
      }
      
      // Mostrar advertencia para archivos grandes
      if (csvData.length > 1000) {
        const confirmImport = confirm(\`Est\xE1s a punto de importar \${csvData.length} piezas. Esto puede tomar varios minutos. \xBFQuieres continuar?\`);
        if (!confirmImport) return;
      }
      
      importBtn.disabled = true;
      const originalText = importBtn.innerHTML;
      importBtn.innerHTML = \`
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="animate-spin">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Importando \${csvData.length} piezas...
      \`;

      try {
        // Configurar timeout m\xE1s largo para archivos grandes
        const timeout = csvData.length > 1000 ? 300000 : 60000; // 5 minutos para archivos grandes, 1 minuto para peque\xF1os
        
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);
        
        const response = await fetch('/api/piezas/import-csv', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
            csvData: csvData,
            selectedObraId: selectedObraId 
          }),
          signal: controller.signal
        });
        
        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(\`Error del servidor: \${response.status} \${response.statusText}\`);
        }

        const result = await response.json();

        if (result.success) {
          // Guardar la obra seleccionada en localStorage
          localStorage.setItem('lastSelectedObra', selectedObraId);
          
          importBtn.innerHTML = \`
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            \xA1Importado!
          \`;
          importBtn.style.background = '#10b981';
          
          // Mostrar mensaje detallado
          let message = result.message;
          if (result.data && result.data.errores && result.data.errores.length > 0) {
            message += \`\\n\\nErrores encontrados: \${result.data.errores.length}\`;
            if (result.data.errores.length <= 10) {
              message += '\\n' + result.data.errores.join('\\n');
            } else {
              message += '\\n(Mostrando solo los primeros 10 errores)';
              message += '\\n' + result.data.errores.slice(0, 10).join('\\n');
            }
          }
          
          alert(message);
          
          setTimeout(() => {
            location.reload();
          }, 2000);
        } else {
          throw new Error(result.error || 'Error al importar CSV');
        }
      } catch (error) {
        console.error('Error al importar CSV:', error);
        
        let errorMessage = 'Error al importar CSV: ';
        if (error.name === 'AbortError') {
          errorMessage += 'La importaci\xF3n tard\xF3 demasiado tiempo. Intenta con un archivo m\xE1s peque\xF1o o divide el archivo en partes.';
        } else {
          errorMessage += error.message;
        }
        
        alert(errorMessage);
        
        importBtn.innerHTML = originalText;
        importBtn.disabled = false;
      }
    });
    
    // Restaurar la \xFAltima obra seleccionada
    const lastSelectedObra = localStorage.getItem('lastSelectedObra');
    if (lastSelectedObra) {
      const obraSelect = document.querySelector('[name="obra_id"]');
      if (obraSelect) {
        obraSelect.value = lastSelectedObra;
      }
    }
  });
<\/script>`], ["", " <!-- Barra de filtro de proyecto persistente --> ", '<div class="project-filter-bar" data-astro-cid-vag3ingl> <div class="filter-container" data-astro-cid-vag3ingl> <div class="filter-label" data-astro-cid-vag3ingl> <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vag3ingl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" data-astro-cid-vag3ingl></path> </svg> <span data-astro-cid-vag3ingl>Proyecto Activo:</span> </div> <select class="project-filter-select" id="active-project-filter" data-astro-cid-vag3ingl> <option value="" data-astro-cid-vag3ingl>Todos los proyectos</option> ', ' </select> <div class="filter-info" data-astro-cid-vag3ingl> <span class="text-sm text-gray-500" data-astro-cid-vag3ingl>Esta selecci\xF3n se mantendr\xE1 activa en futuras visitas</span> </div> </div> </div> <div class="piezas-section" data-astro-cid-vag3ingl> <div class="stats-grid" data-astro-cid-vag3ingl> <div class="stat-card" data-astro-cid-vag3ingl> <div class="stat-icon inventory" data-astro-cid-vag3ingl> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vag3ingl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" data-astro-cid-vag3ingl></path> </svg> </div> <div class="stat-content" data-astro-cid-vag3ingl> <div class="stat-number" data-astro-cid-vag3ingl>', '</div> <div class="stat-label" data-astro-cid-vag3ingl>Total Piezas</div> </div> </div> <div class="stat-card" data-astro-cid-vag3ingl> <div class="stat-icon fabrication" data-astro-cid-vag3ingl> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vag3ingl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" data-astro-cid-vag3ingl></path> </svg> </div> <div class="stat-content" data-astro-cid-vag3ingl> <div class="stat-number" data-astro-cid-vag3ingl>', '</div> <div class="stat-label" data-astro-cid-vag3ingl>Para cortar</div> </div> </div> <div class="stat-card" data-astro-cid-vag3ingl> <div class="stat-icon ready" data-astro-cid-vag3ingl> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vag3ingl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-vag3ingl></path> </svg> </div> <div class="stat-content" data-astro-cid-vag3ingl> <div class="stat-number" data-astro-cid-vag3ingl>', '</div> <div class="stat-label" data-astro-cid-vag3ingl>Cortado</div> </div> </div> </div> <div class="piezas-table" data-astro-cid-vag3ingl> <div class="table-header" data-astro-cid-vag3ingl> <h3 data-astro-cid-vag3ingl>Piezas Registradas</h3> <div class="table-filters" data-astro-cid-vag3ingl> <div class="filters-info" id="filters-info" style="display: none;" data-astro-cid-vag3ingl> <span class="filters-badge" data-astro-cid-vag3ingl>Filtros activos</span> </div> ', ' <input type="text" class="filter-input" id="search-input" placeholder="Buscar por c\xF3digo de pieza o colada..."', ` title="Escribe el c\xF3digo de la pieza o n\xFAmero de colada para buscar" data-astro-cid-vag3ingl> <button class="btn-clear-filters" id="clear-filters-btn" title="Limpiar todos los filtros" data-astro-cid-vag3ingl> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vag3ingl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-vag3ingl></path> </svg> </button> <button class="btn-import" onclick="openModal('modal-import-csv')" data-astro-cid-vag3ingl> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vag3ingl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" data-astro-cid-vag3ingl></path> </svg>
Importar CSV
</button> <div class="export-buttons" data-astro-cid-vag3ingl> <button class="btn-export" onclick="exportTableData('csv')" title="Exportar a CSV" data-astro-cid-vag3ingl> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vag3ingl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-astro-cid-vag3ingl></path> </svg>
CSV
</button> <button class="btn-export" onclick="exportTableData('xlsx')" title="Exportar a Excel" data-astro-cid-vag3ingl> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vag3ingl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-astro-cid-vag3ingl></path> </svg>
Excel
</button> </div> </div> </div> `, " <!-- Script para hacer los datos disponibles para Tabulator --> <script>(function(){", "\n      window.piezasData = piezas;\n    })();<\/script> <!-- Paginaci\xF3n --> ", " </div> </div> <!-- Modal para Nueva Pieza --> ", " <!-- Modal para Importar CSV --> ", " <!-- Modales de Detalles din\xE1micos --> ", `  <script type="module">
  // Filtros en tiempo real
  document.addEventListener('DOMContentLoaded', function() {
    const activeProjectFilter = document.getElementById('active-project-filter');
    const searchInput = document.getElementById('search-input');
    const clearFiltersBtn = document.getElementById('clear-filters-btn');
    
    // Estado de paginaci\xF3n
    let currentPage = parseInt(new URLSearchParams(window.location.search).get('page') || '1');
    let currentPageSize = parseInt(new URLSearchParams(window.location.search).get('pageSize') || '20');
    let currentFilters = {
      obra_id: new URLSearchParams(window.location.search).get('obra_id') || '',
      search: new URLSearchParams(window.location.search).get('search') || ''
    };
    
    // Aplicar filtros iniciales
    if (currentFilters.search) searchInput.value = currentFilters.search;

    // Restaurar proyecto activo desde localStorage o URL
    const savedProjectId = localStorage.getItem('activeProjectId');
    const urlProjectId = currentFilters.obra_id;
    
    if (urlProjectId) {
      // Si hay proyecto en URL, usarlo y guardarlo
      activeProjectFilter.value = urlProjectId;
      localStorage.setItem('activeProjectId', urlProjectId);
      currentFilters.obra_id = urlProjectId;
    } else if (savedProjectId) {
      // Si no hay en URL pero s\xED en localStorage, aplicarlo
      activeProjectFilter.value = savedProjectId;
      currentFilters.obra_id = savedProjectId;
    }

    // Funci\xF3n para actualizar el indicador de filtros activos
    function updateFiltersIndicator() {
      const hasActiveFilters = currentFilters.obra_id || currentFilters.search;
      const filtersInfo = document.getElementById('filters-info');
      if (filtersInfo) {
        filtersInfo.style.display = hasActiveFilters ? 'flex' : 'none';
      }
    }
    
    // Actualizar indicador inicial
    updateFiltersIndicator();

    function updateURL() {
      const params = new URLSearchParams();
      params.set('page', currentPage.toString());
      params.set('pageSize', currentPageSize.toString());
      
      if (currentFilters.obra_id) params.set('obra_id', currentFilters.obra_id);
      if (currentFilters.search) params.set('search', currentFilters.search);
      
      const newURL = \\\`\\\${window.location.pathname}?\\\${params.toString()}\\\`;
      window.history.pushState({}, '', newURL);
      
      // Recargar la p\xE1gina para aplicar los cambios
      window.location.reload();
    }

    function applyFilters() {
      currentFilters.search = searchInput.value;
      currentPage = 1; // Resetear a la primera p\xE1gina cuando se aplican filtros
      updateFiltersIndicator();
      updateURL();
    }

    // Event listeners para filtros
    
    // Event listener para filtro de proyecto persistente
    activeProjectFilter.addEventListener('change', function() {
      const selectedProjectId = this.value;
      
      // Guardar en localStorage
      if (selectedProjectId) {
        localStorage.setItem('activeProjectId', selectedProjectId);
      } else {
        localStorage.removeItem('activeProjectId');
      }
      
      // Actualizar filtros y recargar
      currentFilters.obra_id = selectedProjectId;
      currentPage = 1;
      updateFiltersIndicator();
      updateURL();
    });
    
    // Debounce para el input de b\xFAsqueda
    let searchTimeout;
    searchInput.addEventListener('input', () => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(applyFilters, 500);
    });

    // Event listener para limpiar filtros
    clearFiltersBtn.addEventListener('click', () => {
      activeProjectFilter.value = '';
      searchInput.value = '';
      currentFilters.obra_id = '';
      currentFilters.search = '';
      updateFiltersIndicator();
      updateURL();
    });
    
    // Event listeners para paginaci\xF3n
    document.addEventListener('click', function(e) {
      if (e.target.matches('[data-page]') || e.target.closest('[data-page]')) {
        e.preventDefault();
        const button = e.target.matches('[data-page]') ? e.target : e.target.closest('[data-page]');
        const page = parseInt(button.getAttribute('data-page'));
        
        if (page && page !== currentPage && !button.disabled) {
          currentPage = page;
          updateURL();
        }
      }
    });
    
    // Event listener para cambio de tama\xF1o de p\xE1gina
    const pageSizeSelect = document.getElementById('page-size-select');
    if (pageSizeSelect) {
      pageSizeSelect.addEventListener('change', function() {
        currentPageSize = parseInt(this.value);
        currentPage = 1; // Resetear a la primera p\xE1gina
        updateURL();
      });
    }

    // Funcionalidad de importaci\xF3n CSV
    const csvFile = document.getElementById('csv-file');
    const uploadArea = document.getElementById('upload-area');
    const csvPreview = document.getElementById('csv-preview');
    const previewTable = document.getElementById('preview-table');
    const importBtn = document.getElementById('import-btn');
    let csvData = null;

    // Click en \xE1rea de upload
    uploadArea.addEventListener('click', () => csvFile.click());

    // Drag and drop
    uploadArea.addEventListener('dragover', (e) => {
      e.preventDefault();
      uploadArea.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', () => {
      uploadArea.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', (e) => {
      e.preventDefault();
      uploadArea.classList.remove('dragover');
      const files = e.dataTransfer.files;
      if (files.length > 0) {
        handleFile(files[0]);
      }
    });

    // Selecci\xF3n de archivo
    csvFile.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        handleFile(e.target.files[0]);
      }
    });

    function handleFile(file) {
      if (!file.name.endsWith('.csv')) {
        alert('Por favor selecciona un archivo CSV v\xE1lido');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const csv = e.target.result;
        parseCSV(csv);
      };
      reader.readAsText(file);
    }

    function parseCSV(csv) {
      const lines = csv.split('\\\\n').filter(line => line.trim());
      if (lines.length < 2) {
        alert('El archivo CSV debe tener al menos una fila de encabezados y una fila de datos');
        return;
      }

      const headers = lines[0].split(';').map(h => h.trim());
      const rows = lines.slice(1).map(line => {
        const values = line.split(';').map(v => v.trim());
        const row = {};
        headers.forEach((header, index) => {
          row[header] = values[index] || '';
        });
        return row;
      });

      csvData = rows;
      showPreview(headers, rows);
      importBtn.disabled = false;
    }

    function showPreview(headers, rows) {
      let html = '<table class="preview-data-table"><thead><tr>';
      headers.forEach(header => {
        html += \\\`<th>\\\${header}</th>\\\`;
      });
      html += '</tr></thead><tbody>';

      rows.slice(0, 5).forEach(row => {
        html += '<tr>';
        headers.forEach(header => {
          html += \\\`<td>\\\${row[header] || '-'}</td>\\\`;
        });
        html += '</tr>';
      });

      if (rows.length > 5) {
        html += \\\`<tr><td colspan="\\\${headers.length}" style="text-align: center; font-style: italic;">... y \\\${rows.length - 5} filas m\xE1s</td></tr>\\\`;
      }

      html += '</tbody></table>';
      previewTable.innerHTML = html;
      csvPreview.style.display = 'block';
    }

    // Importar CSV
    importBtn.addEventListener('click', async () => {
      if (!csvData) return;

      const obraSelect = document.querySelector('[name="obra_id"]');
      const selectedObraId = obraSelect.value;
      
      if (!selectedObraId) {
        alert('Por favor selecciona una obra de destino');
        return;
      }
      
      // Mostrar advertencia para archivos grandes
      if (csvData.length > 1000) {
        const confirmImport = confirm(\\\`Est\xE1s a punto de importar \\\${csvData.length} piezas. Esto puede tomar varios minutos. \xBFQuieres continuar?\\\`);
        if (!confirmImport) return;
      }
      
      importBtn.disabled = true;
      const originalText = importBtn.innerHTML;
      importBtn.innerHTML = \\\`
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="animate-spin">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Importando \\\${csvData.length} piezas...
      \\\`;

      try {
        // Configurar timeout m\xE1s largo para archivos grandes
        const timeout = csvData.length > 1000 ? 300000 : 60000; // 5 minutos para archivos grandes, 1 minuto para peque\xF1os
        
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);
        
        const response = await fetch('/api/piezas/import-csv', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
            csvData: csvData,
            selectedObraId: selectedObraId 
          }),
          signal: controller.signal
        });
        
        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(\\\`Error del servidor: \\\${response.status} \\\${response.statusText}\\\`);
        }

        const result = await response.json();

        if (result.success) {
          // Guardar la obra seleccionada en localStorage
          localStorage.setItem('lastSelectedObra', selectedObraId);
          
          importBtn.innerHTML = \\\`
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            \xA1Importado!
          \\\`;
          importBtn.style.background = '#10b981';
          
          // Mostrar mensaje detallado
          let message = result.message;
          if (result.data && result.data.errores && result.data.errores.length > 0) {
            message += \\\`\\\\n\\\\nErrores encontrados: \\\${result.data.errores.length}\\\`;
            if (result.data.errores.length <= 10) {
              message += '\\\\n' + result.data.errores.join('\\\\n');
            } else {
              message += '\\\\n(Mostrando solo los primeros 10 errores)';
              message += '\\\\n' + result.data.errores.slice(0, 10).join('\\\\n');
            }
          }
          
          alert(message);
          
          setTimeout(() => {
            location.reload();
          }, 2000);
        } else {
          throw new Error(result.error || 'Error al importar CSV');
        }
      } catch (error) {
        console.error('Error al importar CSV:', error);
        
        let errorMessage = 'Error al importar CSV: ';
        if (error.name === 'AbortError') {
          errorMessage += 'La importaci\xF3n tard\xF3 demasiado tiempo. Intenta con un archivo m\xE1s peque\xF1o o divide el archivo en partes.';
        } else {
          errorMessage += error.message;
        }
        
        alert(errorMessage);
        
        importBtn.innerHTML = originalText;
        importBtn.disabled = false;
      }
    });
    
    // Restaurar la \xFAltima obra seleccionada
    const lastSelectedObra = localStorage.getItem('lastSelectedObra');
    if (lastSelectedObra) {
      const obraSelect = document.querySelector('[name="obra_id"]');
      if (obraSelect) {
        obraSelect.value = lastSelectedObra;
      }
    }
  });
<\/script>`])), renderComponent($$result, "PageHeader", $$PageHeader, { "title": "Gesti\xF3n de Piezas", "subtitle": "Control de inventario y seguimiento de piezas individuales", "actionButton": { text: "Nueva Pieza", onClick: "openModal('modal-nueva-pieza')" }, "data-astro-cid-vag3ingl": true }), maybeRenderHead(), (obras || []).map((obra) => renderTemplate`<option${addAttribute(obra.id.toString(), "value")}${addAttribute(filters.obra_id === obra.id.toString(), "selected")} data-astro-cid-vag3ingl>${obra.nombre}</option>`), totalPiezas, piezasPorFase["Para cortar"] || 0, piezasPorFase["Cortado"] || 0, filters.search && renderTemplate`<div class="search-results-info" data-astro-cid-vag3ingl> <span class="search-badge" data-astro-cid-vag3ingl> <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vag3ingl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-vag3ingl></path> </svg> ${totalPiezas} resultado${filters.search && totalPiezas !== 1 ? "s" : ""} para "${filters.search}"
</span> </div>`, addAttribute(filters.search || "", "value"), renderComponent($$result, "TablePieza", $$TablePieza, { "piezas": piezas, "data-astro-cid-vag3ingl": true }), defineScriptVars({ piezas }), renderComponent($$result, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "totalItems": totalPiezas || 0, "pageSize": pageSize, "startItem": startItem, "endItem": endItem, "data-astro-cid-vag3ingl": true }), renderComponent($$result, "Modal", $$Modal, { "id": "modal-nueva-pieza", "title": "Nueva Pieza", "size": "lg", "data-astro-cid-vag3ingl": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PiezasForm", $$PiezasForm, { "data-astro-cid-vag3ingl": true })} ` }), renderComponent($$result, "Modal", $$Modal, { "id": "modal-import-csv", "title": "Importar Piezas desde CSV", "size": "lg", "data-astro-cid-vag3ingl": true }, { "default": async ($$result2) => renderTemplate` <div class="import-csv-form" data-astro-cid-vag3ingl> <div class="obra-selection" data-astro-cid-vag3ingl> ${renderComponent($$result2, "FormField", $$FormField, { "label": "Obra de Destino", "name": "obra_id", "type": "select", "options": obraOptions, "required": true, "data-astro-cid-vag3ingl": true })} </div> <div class="csv-instructions" data-astro-cid-vag3ingl> <h4 data-astro-cid-vag3ingl>Formato del archivo CSV</h4> <p data-astro-cid-vag3ingl>El archivo debe contener las siguientes columnas:</p> <ul data-astro-cid-vag3ingl> <li data-astro-cid-vag3ingl><strong data-astro-cid-vag3ingl>Conjunto</strong> - Código del conjunto (se creará si no existe)</li> <li data-astro-cid-vag3ingl><strong data-astro-cid-vag3ingl>Parte</strong> - Código único de la pieza</li> <li data-astro-cid-vag3ingl><strong data-astro-cid-vag3ingl>Apodo</strong> - Campo adicional (opcional)</li> <li data-astro-cid-vag3ingl><strong data-astro-cid-vag3ingl>Perfil</strong> - Tipo de material/perfil</li> <li data-astro-cid-vag3ingl><strong data-astro-cid-vag3ingl>Longitud(mm)</strong> - Longitud en milímetros</li> <li data-astro-cid-vag3ingl><strong data-astro-cid-vag3ingl>Peso</strong> - Peso de la pieza</li> </ul> <p data-astro-cid-vag3ingl><strong data-astro-cid-vag3ingl>Nota:</strong> El archivo debe usar punto y coma (;) como separador.</p> </div> <div class="csv-upload" data-astro-cid-vag3ingl> <input type="file" id="csv-file" accept=".csv" data-astro-cid-vag3ingl> <div class="upload-area" id="upload-area" data-astro-cid-vag3ingl> <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vag3ingl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" data-astro-cid-vag3ingl></path> </svg> <p data-astro-cid-vag3ingl>Arrastra tu archivo CSV aquí o haz clic para seleccionar</p> </div> </div> <div class="csv-preview" id="csv-preview" style="display: none;" data-astro-cid-vag3ingl> <h4 data-astro-cid-vag3ingl>Vista previa del archivo</h4> <div class="preview-table" id="preview-table" data-astro-cid-vag3ingl></div> </div> <div class="form-actions" data-astro-cid-vag3ingl> <button type="button" class="btn-cancel" data-close-modal="modal-import-csv" data-astro-cid-vag3ingl>
Cancelar
</button> <button type="button" class="btn-submit" id="import-btn" disabled data-astro-cid-vag3ingl> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vag3ingl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" data-astro-cid-vag3ingl></path> </svg>
Importar Piezas
</button> </div> </div> ` }), piezas.map((pieza) => renderTemplate`${renderComponent($$result, "DetailModal", $$DetailModal, { "id": `detail-pieza-${pieza.id}`, "title": `Pieza ${pieza.codigo}`, "type": "pieza", "data-astro-cid-vag3ingl": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PiezaDetail", $$PiezaDetail, { "pieza": pieza, "data-astro-cid-vag3ingl": true })} ` })}`));
}, "/Applications/XAMPP/xamppfiles/htdocs/AdminMontaje/src/components/sections/PiezasSection.astro", void 0);

const $$Piezas = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Piezas", "activeSection": "piezas" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PiezasSection", $$PiezasSection, {})} ` })}`;
}, "/Applications/XAMPP/xamppfiles/htdocs/AdminMontaje/src/pages/admin/piezas.astro", void 0);

const $$file = "/Applications/XAMPP/xamppfiles/htdocs/AdminMontaje/src/pages/admin/piezas.astro";
const $$url = "/admin/piezas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Piezas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
