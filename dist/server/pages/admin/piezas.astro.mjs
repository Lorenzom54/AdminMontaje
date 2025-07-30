import { e as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead, f as createAstro, h as addAttribute } from '../../chunks/astro/server_BxYUwxS1.mjs';
import 'kleur/colors';
import { a as $$PageHeader, $ as $$AdminLayout } from '../../chunks/PageHeader_DqTSEC0h.mjs';
import { $ as $$FormField, a as $$DetailModal, b as $$Modal } from '../../chunks/DetailModal_C4b4Ka4M.mjs';
import { f as fetchConjuntosForSelect, a as fetchChapasForSelect, F as FASES, b as fetchPiezas } from '../../chunks/pieza_api_BZdt-77e.mjs';
/* empty css                                     */
import 'clsx';
export { renderers } from '../../renderers.mjs';

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$PiezasForm = createComponent(async ($$result, $$props, $$slots) => {
  const conjuntos = await fetchConjuntosForSelect();
  const chapas = await fetchChapasForSelect();
  const tipoMaterialOptions = [
    { value: "chapas y perfiles", label: "Chapas y Perfiles" }
  ];
  const faseOptions = [
    { value: "0", label: "Corte" },
    { value: "1", label: "Biselado" },
    { value: "2", label: "Montaje" },
    { value: "3", label: "Soldadura" }
  ];
  const conjuntoOptions = conjuntos.map((c) => ({ value: c.id.toString(), label: c.codigo }));
  const chapaOptions = chapas.map((c) => ({ value: c.id.toString(), label: `#${c.codigo}` }));
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
      fase: formData.get('fase'),
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
      fase: formData.get('fase'),
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
<\/script>`])), maybeRenderHead(), renderComponent($$result, "FormField", $$FormField, { "label": "C\xF3digo de la Pieza", "name": "codigo", "required": true, "placeholder": "Ej: PZ-001", "data-astro-cid-sigyfebt": true }), renderComponent($$result, "FormField", $$FormField, { "label": "Tipo de Material", "name": "tipo_material", "type": "select", "options": tipoMaterialOptions, "required": true, "data-astro-cid-sigyfebt": true }), renderComponent($$result, "FormField", $$FormField, { "label": "Colada", "name": "colada", "placeholder": "Ej: COL2024001", "data-astro-cid-sigyfebt": true }), renderComponent($$result, "FormField", $$FormField, { "label": "Fase", "name": "fase", "type": "select", "options": faseOptions, "required": true, "data-astro-cid-sigyfebt": true }), renderComponent($$result, "FormField", $$FormField, { "label": "Conjunto", "name": "conjunto_id", "type": "select", "options": conjuntoOptions, "data-astro-cid-sigyfebt": true }), renderComponent($$result, "FormField", $$FormField, { "label": "Chapa", "name": "chapa_id", "type": "select", "options": chapaOptions, "data-astro-cid-sigyfebt": true }));
}, "/home/project/src/components/forms/PiezasForm.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro();
const $$TablePieza = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TablePieza;
  const { piezas } = Astro2.props;
  function formatDate(dateString) {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString("es-ES");
  }
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="table-container" data-astro-cid-aaagcoq6> <table class="data-table" data-astro-cid-aaagcoq6> <thead data-astro-cid-aaagcoq6> <tr data-astro-cid-aaagcoq6> <th data-astro-cid-aaagcoq6>C\xF3digo</th> <th data-astro-cid-aaagcoq6>Tipo Material</th> <th data-astro-cid-aaagcoq6>Fase</th> <th data-astro-cid-aaagcoq6>Conjunto</th> <th data-astro-cid-aaagcoq6>Chapa</th> <th data-astro-cid-aaagcoq6>Colada</th> <th data-astro-cid-aaagcoq6>Fecha Creaci\xF3n</th> <th data-astro-cid-aaagcoq6>Acciones</th> </tr> </thead> <tbody data-astro-cid-aaagcoq6> ', ` </tbody> </table> </div>  <script type="module">
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
          form.querySelector('[name="fase"]').value = pieza.fase?.toString() || '';
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
          fase: formData.get('fase'),
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
  });

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
<\/script>`], ["", '<div class="table-container" data-astro-cid-aaagcoq6> <table class="data-table" data-astro-cid-aaagcoq6> <thead data-astro-cid-aaagcoq6> <tr data-astro-cid-aaagcoq6> <th data-astro-cid-aaagcoq6>C\xF3digo</th> <th data-astro-cid-aaagcoq6>Tipo Material</th> <th data-astro-cid-aaagcoq6>Fase</th> <th data-astro-cid-aaagcoq6>Conjunto</th> <th data-astro-cid-aaagcoq6>Chapa</th> <th data-astro-cid-aaagcoq6>Colada</th> <th data-astro-cid-aaagcoq6>Fecha Creaci\xF3n</th> <th data-astro-cid-aaagcoq6>Acciones</th> </tr> </thead> <tbody data-astro-cid-aaagcoq6> ', ` </tbody> </table> </div>  <script type="module">
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
          form.querySelector('[name="fase"]').value = pieza.fase?.toString() || '';
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
          fase: formData.get('fase'),
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
  });

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
<\/script>`])), maybeRenderHead(), piezas.map((pieza) => renderTemplate`<tr data-astro-cid-aaagcoq6> <td data-astro-cid-aaagcoq6> <div class="pieza-info" data-astro-cid-aaagcoq6> <strong data-astro-cid-aaagcoq6>${pieza.codigo}</strong> <span class="pieza-id" data-astro-cid-aaagcoq6>ID: ${pieza.id}</span> </div> </td> <td data-astro-cid-aaagcoq6> <span class="material-badge" data-astro-cid-aaagcoq6> ${pieza.tipo_material || "-"} </span> </td> <td data-astro-cid-aaagcoq6> <span${addAttribute(`fase-badge fase-${pieza.fase}`, "class")} data-astro-cid-aaagcoq6> ${FASES[pieza.fase] || "Desconocida"} </span> </td> <td data-astro-cid-aaagcoq6> <div class="conjunto-info" data-astro-cid-aaagcoq6> <span data-astro-cid-aaagcoq6>${pieza.conjuntos?.codigo || "-"}</span> </div> </td> <td data-astro-cid-aaagcoq6> <div class="chapa-info" data-astro-cid-aaagcoq6> <span data-astro-cid-aaagcoq6>${pieza.chapas?.codigo ? `#${pieza.chapas.codigo}` : "-"}</span> </div> </td> <td data-astro-cid-aaagcoq6> <div class="colada-info" data-astro-cid-aaagcoq6> <span data-astro-cid-aaagcoq6>${pieza.colada || "-"}</span> </div> </td> <td data-astro-cid-aaagcoq6>${formatDate(pieza.created_at)}</td> <td data-astro-cid-aaagcoq6> <div class="action-buttons" data-astro-cid-aaagcoq6> <button class="btn-icon" title="Ver detalles"${addAttribute(`openModal('detail-pieza-${pieza.id}')`, "onclick")} data-astro-cid-aaagcoq6> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-aaagcoq6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-aaagcoq6></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" data-astro-cid-aaagcoq6></path> </svg> </button> <button class="btn-icon" title="Editar"${addAttribute(`editPieza('${pieza.id}')`, "onclick")} data-astro-cid-aaagcoq6> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-aaagcoq6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" data-astro-cid-aaagcoq6></path> </svg> </button> <button class="btn-icon btn-delete" title="Eliminar"${addAttribute(`deletePieza('${pieza.id}', '${pieza.codigo}')`, "onclick")} data-astro-cid-aaagcoq6> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-aaagcoq6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" data-astro-cid-aaagcoq6></path> </svg> </button> </div> </td> </tr>`));
}, "/home/project/src/components/table/TablePieza.astro", void 0);

const $$Astro = createAstro();
const $$PiezaDetail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PiezaDetail;
  const { pieza } = Astro2.props;
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
  return renderTemplate`${maybeRenderHead()}<div slot="general" class="detail-content" data-astro-cid-zamgxzrv> <div class="detail-grid" data-astro-cid-zamgxzrv> <div class="detail-section" data-astro-cid-zamgxzrv> <h3 class="section-title" data-astro-cid-zamgxzrv>Información de la Pieza</h3> <div class="info-grid" data-astro-cid-zamgxzrv> <div class="info-item" data-astro-cid-zamgxzrv> <label class="info-label" data-astro-cid-zamgxzrv>Código</label> <div class="info-value editable" data-field="codigo" data-astro-cid-zamgxzrv>${pieza.codigo}</div> </div> <div class="info-item" data-astro-cid-zamgxzrv> <label class="info-label" data-astro-cid-zamgxzrv>ID del Sistema</label> <div class="info-value" data-astro-cid-zamgxzrv>${pieza.id}</div> </div> <div class="info-item" data-astro-cid-zamgxzrv> <label class="info-label" data-astro-cid-zamgxzrv>Tipo de Material</label> <div class="info-value editable" data-field="tipo_material" data-astro-cid-zamgxzrv>${pieza.tipo_material}</div> </div> <div class="info-item" data-astro-cid-zamgxzrv> <label class="info-label" data-astro-cid-zamgxzrv>Fecha de Creación</label> <div class="info-value" data-astro-cid-zamgxzrv>${formatDate(pieza.created_at)}</div> </div> </div> </div> <div class="detail-section" data-astro-cid-zamgxzrv> <h3 class="section-title" data-astro-cid-zamgxzrv>Estado y Relaciones</h3> <div class="info-grid" data-astro-cid-zamgxzrv> <div class="info-item" data-astro-cid-zamgxzrv> <label class="info-label" data-astro-cid-zamgxzrv>Fase</label> <div class="info-value" data-astro-cid-zamgxzrv> <span${addAttribute(`fase-badge fase-${pieza.fase}`, "class")} data-astro-cid-zamgxzrv> ${FASES[pieza.fase] || "Desconocida"} </span> </div> </div> <div class="info-item" data-astro-cid-zamgxzrv> <label class="info-label" data-astro-cid-zamgxzrv>Colada</label> <div class="info-value editable" data-field="colada" data-astro-cid-zamgxzrv>${pieza.colada || "-"}</div> </div> <div class="info-item" data-astro-cid-zamgxzrv> <label class="info-label" data-astro-cid-zamgxzrv>Conjunto</label> <div class="info-value" data-astro-cid-zamgxzrv>${pieza.conjuntos?.codigo || "-"}</div> </div> <div class="info-item" data-astro-cid-zamgxzrv> <label class="info-label" data-astro-cid-zamgxzrv>Chapa</label> <div class="info-value" data-astro-cid-zamgxzrv>${pieza.chapas?.codigo ? `#${pieza.chapas.codigo}` : "-"}</div> </div> </div> </div> </div> </div> <div slot="progress" class="detail-content" data-astro-cid-zamgxzrv> <div class="progress-section" data-astro-cid-zamgxzrv> <h3 class="section-title" data-astro-cid-zamgxzrv>Estado de la Pieza</h3> <div class="fase-overview" data-astro-cid-zamgxzrv> <div class="fase-card" data-astro-cid-zamgxzrv> <div class="fase-icon corte" data-astro-cid-zamgxzrv> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-zamgxzrv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-5-9V3m0 0L8 6m3-3l3 3" data-astro-cid-zamgxzrv></path> </svg> </div> <div class="fase-details" data-astro-cid-zamgxzrv> <span class="fase-label" data-astro-cid-zamgxzrv>Corte</span> <span class="fase-status" data-astro-cid-zamgxzrv>${pieza.fase >= 0 ? "Completado" : "Pendiente"}</span> </div> </div> <div class="fase-card" data-astro-cid-zamgxzrv> <div class="fase-icon biselado" data-astro-cid-zamgxzrv> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-zamgxzrv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-astro-cid-zamgxzrv></path> </svg> </div> <div class="fase-details" data-astro-cid-zamgxzrv> <span class="fase-label" data-astro-cid-zamgxzrv>Biselado</span> <span class="fase-status" data-astro-cid-zamgxzrv>${pieza.fase >= 1 ? "Completado" : "Pendiente"}</span> </div> </div> <div class="fase-card" data-astro-cid-zamgxzrv> <div class="fase-icon montaje" data-astro-cid-zamgxzrv> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-zamgxzrv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" data-astro-cid-zamgxzrv></path> </svg> </div> <div class="fase-details" data-astro-cid-zamgxzrv> <span class="fase-label" data-astro-cid-zamgxzrv>Montaje</span> <span class="fase-status" data-astro-cid-zamgxzrv>${pieza.fase >= 2 ? "Completado" : "Pendiente"}</span> </div> </div> <div class="fase-card" data-astro-cid-zamgxzrv> <div class="fase-icon soldadura" data-astro-cid-zamgxzrv> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-zamgxzrv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-astro-cid-zamgxzrv></path> </svg> </div> <div class="fase-details" data-astro-cid-zamgxzrv> <span class="fase-label" data-astro-cid-zamgxzrv>Soldadura</span> <span class="fase-status" data-astro-cid-zamgxzrv>${pieza.fase >= 3 ? "Completado" : "Pendiente"}</span> </div> </div> </div> </div> </div> <div slot="history" class="detail-content" data-astro-cid-zamgxzrv> <div class="history-section" data-astro-cid-zamgxzrv> <h3 class="section-title" data-astro-cid-zamgxzrv>Historial de la Pieza</h3> <div class="history-items" data-astro-cid-zamgxzrv> <div class="history-item" data-astro-cid-zamgxzrv> <div class="history-avatar" data-astro-cid-zamgxzrv>SYS</div> <div class="history-content" data-astro-cid-zamgxzrv> <div class="history-header" data-astro-cid-zamgxzrv> <strong data-astro-cid-zamgxzrv>Sistema</strong> <span class="history-action" data-astro-cid-zamgxzrv>registró pieza</span> <span class="history-time" data-astro-cid-zamgxzrv>${formatDate(pieza.created_at)}</span> </div> <p class="history-description" data-astro-cid-zamgxzrv>Pieza ${pieza.codigo} registrada en el sistema</p> </div> </div> </div> </div> </div> <div slot="files" class="detail-content" data-astro-cid-zamgxzrv> <div class="files-section" data-astro-cid-zamgxzrv> <h3 class="section-title" data-astro-cid-zamgxzrv>Documentos de la Pieza</h3> <div class="files-upload" data-astro-cid-zamgxzrv> <button class="btn-upload" data-astro-cid-zamgxzrv> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-zamgxzrv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" data-astro-cid-zamgxzrv></path> </svg>
Subir Archivo
</button> </div> <div class="files-placeholder" data-astro-cid-zamgxzrv> <div class="placeholder-icon" data-astro-cid-zamgxzrv> <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-zamgxzrv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-astro-cid-zamgxzrv></path> </svg> </div> <p data-astro-cid-zamgxzrv>No hay documentos adjuntos</p> <span data-astro-cid-zamgxzrv>Sube planos, especificaciones o documentos relacionados con la pieza</span> </div> </div> </div> `;
}, "/home/project/src/components/detail/PiezaDetail.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$PiezasSection = createComponent(async ($$result, $$props, $$slots) => {
  const piezas = await fetchPiezas();
  const totalPiezas = piezas.length;
  const piezasPorFase = piezas.reduce((acc, pieza) => {
    const fase = FASES[pieza.fase] || "Desconocida";
    acc[fase] = (acc[fase] || 0) + 1;
    return acc;
  }, {});
  return renderTemplate(_a || (_a = __template(["", " ", '<div class="piezas-section" data-astro-cid-vag3ingl> <div class="stats-grid" data-astro-cid-vag3ingl> <div class="stat-card" data-astro-cid-vag3ingl> <div class="stat-icon inventory" data-astro-cid-vag3ingl> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vag3ingl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" data-astro-cid-vag3ingl></path> </svg> </div> <div class="stat-content" data-astro-cid-vag3ingl> <div class="stat-number" data-astro-cid-vag3ingl>', '</div> <div class="stat-label" data-astro-cid-vag3ingl>Total Piezas</div> </div> </div> <div class="stat-card" data-astro-cid-vag3ingl> <div class="stat-icon fabrication" data-astro-cid-vag3ingl> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vag3ingl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" data-astro-cid-vag3ingl></path> </svg> </div> <div class="stat-content" data-astro-cid-vag3ingl> <div class="stat-number" data-astro-cid-vag3ingl>', '</div> <div class="stat-label" data-astro-cid-vag3ingl>En Corte</div> </div> </div> <div class="stat-card" data-astro-cid-vag3ingl> <div class="stat-icon ready" data-astro-cid-vag3ingl> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vag3ingl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-vag3ingl></path> </svg> </div> <div class="stat-content" data-astro-cid-vag3ingl> <div class="stat-number" data-astro-cid-vag3ingl>', '</div> <div class="stat-label" data-astro-cid-vag3ingl>En Soldadura</div> </div> </div> <div class="stat-card" data-astro-cid-vag3ingl> <div class="stat-icon quality" data-astro-cid-vag3ingl> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vag3ingl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" data-astro-cid-vag3ingl></path> </svg> </div> <div class="stat-content" data-astro-cid-vag3ingl> <div class="stat-number" data-astro-cid-vag3ingl>', `</div> <div class="stat-label" data-astro-cid-vag3ingl>En Montaje</div> </div> </div> </div> <div class="piezas-table" data-astro-cid-vag3ingl> <div class="table-header" data-astro-cid-vag3ingl> <h3 data-astro-cid-vag3ingl>Piezas Registradas</h3> <div class="table-filters" data-astro-cid-vag3ingl> <select class="filter-select" id="fase-filter" data-astro-cid-vag3ingl> <option value="" data-astro-cid-vag3ingl>Todas las fases</option> <option value="0" data-astro-cid-vag3ingl>Corte</option> <option value="1" data-astro-cid-vag3ingl>Biselado</option> <option value="2" data-astro-cid-vag3ingl>Montaje</option> <option value="3" data-astro-cid-vag3ingl>Soldadura</option> </select> <input type="text" class="filter-input" id="search-input" placeholder="Buscar por c\xF3digo o colada..." data-astro-cid-vag3ingl> <button class="btn-import" onclick="openModal('modal-import-csv')" data-astro-cid-vag3ingl> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vag3ingl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" data-astro-cid-vag3ingl></path> </svg>
Importar CSV
</button> </div> </div> `, " </div> </div> <!-- Modal para Nueva Pieza --> ", " <!-- Modal para Importar CSV --> ", " <!-- Modales de Detalles din\xE1micos --> ", `  <script type="module">
  // Filtros en tiempo real
  document.addEventListener('DOMContentLoaded', function() {
    const faseFilter = document.getElementById('fase-filter');
    const searchInput = document.getElementById('search-input');
    const tableRows = document.querySelectorAll('.data-table tbody tr');

    function filterTable() {
      const faseValue = faseFilter.value;
      const searchValue = searchInput.value.toLowerCase();

      tableRows.forEach(row => {
        const fase = row.querySelector('.fase-badge').className;
        const codigo = row.cells[0].textContent.toLowerCase();
        const colada = row.cells[5].textContent.toLowerCase();

        const matchesFase = !faseValue || fase.includes(\`fase-\${faseValue}\`);
        const matchesSearch = !searchValue || 
          codigo.includes(searchValue) || 
          colada.includes(searchValue);

        if (matchesFase && matchesSearch) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    }

    faseFilter.addEventListener('change', filterTable);
    searchInput.addEventListener('input', filterTable);

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

      const headers = lines[0].split(',').map(h => h.trim());
      const rows = lines.slice(1).map(line => {
        const values = line.split(',').map(v => v.trim());
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

      importBtn.disabled = true;
      const originalText = importBtn.innerHTML;
      importBtn.innerHTML = \`
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="animate-spin">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Importando...
      \`;

      try {
        const response = await fetch('/api/piezas/import-csv', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ csvData })
        });

        const result = await response.json();

        if (result.success) {
          importBtn.innerHTML = \`
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            \xA1Importado!
          \`;
          importBtn.style.background = '#10b981';
          
          alert(result.message);
          
          setTimeout(() => {
            location.reload();
          }, 1500);
        } else {
          throw new Error(result.error || 'Error al importar CSV');
        }
      } catch (error) {
        console.error('Error al importar CSV:', error);
        alert('Error al importar CSV: ' + error.message);
        
        importBtn.innerHTML = originalText;
        importBtn.disabled = false;
      }
    });
  });
<\/script>`], ["", " ", '<div class="piezas-section" data-astro-cid-vag3ingl> <div class="stats-grid" data-astro-cid-vag3ingl> <div class="stat-card" data-astro-cid-vag3ingl> <div class="stat-icon inventory" data-astro-cid-vag3ingl> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vag3ingl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" data-astro-cid-vag3ingl></path> </svg> </div> <div class="stat-content" data-astro-cid-vag3ingl> <div class="stat-number" data-astro-cid-vag3ingl>', '</div> <div class="stat-label" data-astro-cid-vag3ingl>Total Piezas</div> </div> </div> <div class="stat-card" data-astro-cid-vag3ingl> <div class="stat-icon fabrication" data-astro-cid-vag3ingl> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vag3ingl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" data-astro-cid-vag3ingl></path> </svg> </div> <div class="stat-content" data-astro-cid-vag3ingl> <div class="stat-number" data-astro-cid-vag3ingl>', '</div> <div class="stat-label" data-astro-cid-vag3ingl>En Corte</div> </div> </div> <div class="stat-card" data-astro-cid-vag3ingl> <div class="stat-icon ready" data-astro-cid-vag3ingl> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vag3ingl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-vag3ingl></path> </svg> </div> <div class="stat-content" data-astro-cid-vag3ingl> <div class="stat-number" data-astro-cid-vag3ingl>', '</div> <div class="stat-label" data-astro-cid-vag3ingl>En Soldadura</div> </div> </div> <div class="stat-card" data-astro-cid-vag3ingl> <div class="stat-icon quality" data-astro-cid-vag3ingl> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vag3ingl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" data-astro-cid-vag3ingl></path> </svg> </div> <div class="stat-content" data-astro-cid-vag3ingl> <div class="stat-number" data-astro-cid-vag3ingl>', `</div> <div class="stat-label" data-astro-cid-vag3ingl>En Montaje</div> </div> </div> </div> <div class="piezas-table" data-astro-cid-vag3ingl> <div class="table-header" data-astro-cid-vag3ingl> <h3 data-astro-cid-vag3ingl>Piezas Registradas</h3> <div class="table-filters" data-astro-cid-vag3ingl> <select class="filter-select" id="fase-filter" data-astro-cid-vag3ingl> <option value="" data-astro-cid-vag3ingl>Todas las fases</option> <option value="0" data-astro-cid-vag3ingl>Corte</option> <option value="1" data-astro-cid-vag3ingl>Biselado</option> <option value="2" data-astro-cid-vag3ingl>Montaje</option> <option value="3" data-astro-cid-vag3ingl>Soldadura</option> </select> <input type="text" class="filter-input" id="search-input" placeholder="Buscar por c\xF3digo o colada..." data-astro-cid-vag3ingl> <button class="btn-import" onclick="openModal('modal-import-csv')" data-astro-cid-vag3ingl> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vag3ingl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" data-astro-cid-vag3ingl></path> </svg>
Importar CSV
</button> </div> </div> `, " </div> </div> <!-- Modal para Nueva Pieza --> ", " <!-- Modal para Importar CSV --> ", " <!-- Modales de Detalles din\xE1micos --> ", `  <script type="module">
  // Filtros en tiempo real
  document.addEventListener('DOMContentLoaded', function() {
    const faseFilter = document.getElementById('fase-filter');
    const searchInput = document.getElementById('search-input');
    const tableRows = document.querySelectorAll('.data-table tbody tr');

    function filterTable() {
      const faseValue = faseFilter.value;
      const searchValue = searchInput.value.toLowerCase();

      tableRows.forEach(row => {
        const fase = row.querySelector('.fase-badge').className;
        const codigo = row.cells[0].textContent.toLowerCase();
        const colada = row.cells[5].textContent.toLowerCase();

        const matchesFase = !faseValue || fase.includes(\\\`fase-\\\${faseValue}\\\`);
        const matchesSearch = !searchValue || 
          codigo.includes(searchValue) || 
          colada.includes(searchValue);

        if (matchesFase && matchesSearch) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    }

    faseFilter.addEventListener('change', filterTable);
    searchInput.addEventListener('input', filterTable);

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

      const headers = lines[0].split(',').map(h => h.trim());
      const rows = lines.slice(1).map(line => {
        const values = line.split(',').map(v => v.trim());
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

      importBtn.disabled = true;
      const originalText = importBtn.innerHTML;
      importBtn.innerHTML = \\\`
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="animate-spin">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Importando...
      \\\`;

      try {
        const response = await fetch('/api/piezas/import-csv', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ csvData })
        });

        const result = await response.json();

        if (result.success) {
          importBtn.innerHTML = \\\`
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            \xA1Importado!
          \\\`;
          importBtn.style.background = '#10b981';
          
          alert(result.message);
          
          setTimeout(() => {
            location.reload();
          }, 1500);
        } else {
          throw new Error(result.error || 'Error al importar CSV');
        }
      } catch (error) {
        console.error('Error al importar CSV:', error);
        alert('Error al importar CSV: ' + error.message);
        
        importBtn.innerHTML = originalText;
        importBtn.disabled = false;
      }
    });
  });
<\/script>`])), renderComponent($$result, "PageHeader", $$PageHeader, { "title": "Gesti\xF3n de Piezas", "subtitle": "Control de inventario y seguimiento de piezas individuales", "actionButton": { text: "Nueva Pieza", onClick: "openModal('modal-nueva-pieza')" }, "data-astro-cid-vag3ingl": true }), maybeRenderHead(), totalPiezas, piezasPorFase["Corte"] || 0, piezasPorFase["Soldadura"] || 0, piezasPorFase["Montaje"] || 0, renderComponent($$result, "TablePieza", $$TablePieza, { "piezas": piezas, "data-astro-cid-vag3ingl": true }), renderComponent($$result, "Modal", $$Modal, { "id": "modal-nueva-pieza", "title": "Nueva Pieza", "size": "lg", "data-astro-cid-vag3ingl": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PiezasForm", $$PiezasForm, { "data-astro-cid-vag3ingl": true })} ` }), renderComponent($$result, "Modal", $$Modal, { "id": "modal-import-csv", "title": "Importar Piezas desde CSV", "size": "lg", "data-astro-cid-vag3ingl": true }, { "default": async ($$result2) => renderTemplate` <div class="import-csv-form" data-astro-cid-vag3ingl> <div class="csv-instructions" data-astro-cid-vag3ingl> <h4 data-astro-cid-vag3ingl>Formato del archivo CSV</h4> <p data-astro-cid-vag3ingl>El archivo debe contener las siguientes columnas:</p> <ul data-astro-cid-vag3ingl> <li data-astro-cid-vag3ingl><strong data-astro-cid-vag3ingl>codigo</strong> - Código único de la pieza (obligatorio)</li> <li data-astro-cid-vag3ingl><strong data-astro-cid-vag3ingl>tipo_material</strong> - Tipo de material (opcional, por defecto: "chapas y perfiles")</li> <li data-astro-cid-vag3ingl><strong data-astro-cid-vag3ingl>colada</strong> - Código de colada (opcional)</li> <li data-astro-cid-vag3ingl><strong data-astro-cid-vag3ingl>fase</strong> - Fase: 0=Corte, 1=Biselado, 2=Montaje, 3=Soldadura (opcional, por defecto: 0)</li> <li data-astro-cid-vag3ingl><strong data-astro-cid-vag3ingl>conjunto_id</strong> - ID del conjunto (opcional)</li> <li data-astro-cid-vag3ingl><strong data-astro-cid-vag3ingl>chapa_id</strong> - ID de la chapa (opcional)</li> </ul> </div> <div class="csv-upload" data-astro-cid-vag3ingl> <input type="file" id="csv-file" accept=".csv" data-astro-cid-vag3ingl> <div class="upload-area" id="upload-area" data-astro-cid-vag3ingl> <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vag3ingl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" data-astro-cid-vag3ingl></path> </svg> <p data-astro-cid-vag3ingl>Arrastra tu archivo CSV aquí o haz clic para seleccionar</p> </div> </div> <div class="csv-preview" id="csv-preview" style="display: none;" data-astro-cid-vag3ingl> <h4 data-astro-cid-vag3ingl>Vista previa del archivo</h4> <div class="preview-table" id="preview-table" data-astro-cid-vag3ingl></div> </div> <div class="form-actions" data-astro-cid-vag3ingl> <button type="button" class="btn-cancel" data-close-modal="modal-import-csv" data-astro-cid-vag3ingl>
Cancelar
</button> <button type="button" class="btn-submit" id="import-btn" disabled data-astro-cid-vag3ingl> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vag3ingl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" data-astro-cid-vag3ingl></path> </svg>
Importar Piezas
</button> </div> </div> ` }), piezas.map((pieza) => renderTemplate`${renderComponent($$result, "DetailModal", $$DetailModal, { "id": `detail-pieza-${pieza.id}`, "title": `Pieza ${pieza.codigo}`, "type": "pieza", "data-astro-cid-vag3ingl": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PiezaDetail", $$PiezaDetail, { "pieza": pieza, "data-astro-cid-vag3ingl": true })} ` })}`));
}, "/home/project/src/components/sections/PiezasSection.astro", void 0);

const $$Piezas = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Piezas", "activeSection": "piezas" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PiezasSection", $$PiezasSection, {})} ` })}`;
}, "/home/project/src/pages/admin/piezas.astro", void 0);

const $$file = "/home/project/src/pages/admin/piezas.astro";
const $$url = "/admin/piezas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Piezas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
