import { e as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead, f as createAstro, h as addAttribute } from '../../chunks/astro/server_BxYUwxS1.mjs';
import 'kleur/colors';
import { a as $$PageHeader, $ as $$AdminLayout } from '../../chunks/PageHeader_DqTSEC0h.mjs';
import { $ as $$FormField, a as $$DetailModal, b as $$Modal } from '../../chunks/DetailModal_C4b4Ka4M.mjs';
/* empty css                                     */
import 'clsx';
import { f as fetchChapas } from '../../chunks/chapa_api_D_TPbLdp.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$ChapasForm = createComponent(async ($$result, $$props, $$slots) => {
  const tipoAceroOptions = [
    { value: "S235", label: "S235" },
    { value: "S275", label: "S275" },
    { value: "S355", label: "S355" },
    { value: "S460", label: "S460" },
    { value: "S690", label: "S690" }
  ];
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<form class="chapas-form" id="chapas-form" data-astro-cid-sbdsyxmj> <div class="form-grid" data-astro-cid-sbdsyxmj> <div class="form-column" data-astro-cid-sbdsyxmj> ', " ", " ", ' </div> <div class="form-column" data-astro-cid-sbdsyxmj> ', " ", ` </div> </div> <div class="form-actions" data-astro-cid-sbdsyxmj> <button type="button" class="btn-cancel" data-close-modal="modal-nueva-chapa" data-astro-cid-sbdsyxmj>
Cancelar
</button> <button type="submit" class="btn-submit" data-astro-cid-sbdsyxmj> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-sbdsyxmj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-sbdsyxmj></path> </svg>
Crear Chapa
</button> </div> </form>  <script type="module">
  document.getElementById('chapas-form').addEventListener('submit', async (e) => {
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
      colada: formData.get('colada'),
      espesor: formData.get('espesor'),
      dimensiones: formData.get('dimensiones'),
      tipo_acero: formData.get('tipo_acero'),
    };

    try {
      const res = await fetch('/api/chapas/create', {
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
          \xA1Chapa creada!
        \`;
        submitButton.style.background = '#10b981';
        
        // Recargar la p\xE1gina despu\xE9s de un breve delay
        setTimeout(() => {
          location.reload();
        }, 1500);
      } else {
        throw new Error(json.error || 'Error al crear la chapa');
      }
    } catch (error) {
      console.error('Error al crear chapa:', error);
      
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
<\/script>`], ["", '<form class="chapas-form" id="chapas-form" data-astro-cid-sbdsyxmj> <div class="form-grid" data-astro-cid-sbdsyxmj> <div class="form-column" data-astro-cid-sbdsyxmj> ', " ", " ", ' </div> <div class="form-column" data-astro-cid-sbdsyxmj> ', " ", ` </div> </div> <div class="form-actions" data-astro-cid-sbdsyxmj> <button type="button" class="btn-cancel" data-close-modal="modal-nueva-chapa" data-astro-cid-sbdsyxmj>
Cancelar
</button> <button type="submit" class="btn-submit" data-astro-cid-sbdsyxmj> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-sbdsyxmj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-sbdsyxmj></path> </svg>
Crear Chapa
</button> </div> </form>  <script type="module">
  document.getElementById('chapas-form').addEventListener('submit', async (e) => {
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
      colada: formData.get('colada'),
      espesor: formData.get('espesor'),
      dimensiones: formData.get('dimensiones'),
      tipo_acero: formData.get('tipo_acero'),
    };

    try {
      const res = await fetch('/api/chapas/create', {
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
          \xA1Chapa creada!
        \\\`;
        submitButton.style.background = '#10b981';
        
        // Recargar la p\xE1gina despu\xE9s de un breve delay
        setTimeout(() => {
          location.reload();
        }, 1500);
      } else {
        throw new Error(json.error || 'Error al crear la chapa');
      }
    } catch (error) {
      console.error('Error al crear chapa:', error);
      
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
<\/script>`])), maybeRenderHead(), renderComponent($$result, "FormField", $$FormField, { "label": "C\xF3digo de la Chapa", "name": "codigo", "type": "number", "required": true, "placeholder": "Ej: 1001", "data-astro-cid-sbdsyxmj": true }), renderComponent($$result, "FormField", $$FormField, { "label": "Colada", "name": "colada", "placeholder": "Ej: COL2024001", "data-astro-cid-sbdsyxmj": true }), renderComponent($$result, "FormField", $$FormField, { "label": "Espesor", "name": "espesor", "placeholder": "Ej: 10", "data-astro-cid-sbdsyxmj": true }), renderComponent($$result, "FormField", $$FormField, { "label": "Dimensiones", "name": "dimensiones", "placeholder": "Ej: 6000x2000", "data-astro-cid-sbdsyxmj": true }), renderComponent($$result, "FormField", $$FormField, { "label": "Tipo de Acero", "name": "tipo_acero", "type": "select", "options": tipoAceroOptions, "required": true, "data-astro-cid-sbdsyxmj": true }));
}, "/home/project/src/components/forms/ChapasForm.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro();
const $$TableChapa = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TableChapa;
  const { chapas } = Astro2.props;
  function formatDate(dateString) {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString("es-ES");
  }
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="table-container" data-astro-cid-th2orm5c> <table class="data-table" data-astro-cid-th2orm5c> <thead data-astro-cid-th2orm5c> <tr data-astro-cid-th2orm5c> <th data-astro-cid-th2orm5c>C\xF3digo</th> <th data-astro-cid-th2orm5c>Tipo de Acero</th> <th data-astro-cid-th2orm5c>Dimensiones</th> <th data-astro-cid-th2orm5c>Espesor</th> <th data-astro-cid-th2orm5c>Colada</th> <th data-astro-cid-th2orm5c>Fecha Creaci\xF3n</th> <th data-astro-cid-th2orm5c>Acciones</th> </tr> </thead> <tbody data-astro-cid-th2orm5c> ', ` </tbody> </table> </div>  <script type="module">
  // Funci\xF3n para editar chapa
  window.editChapa = async function(chapaId) {
    try {
      const response = await fetch(\`/api/chapas/\${chapaId}\`);
      const result = await response.json();
      
      if (result.success) {
        const chapa = result.data;
        
        // Llenar el formulario con los datos existentes
        const form = document.getElementById('chapas-form');
        if (form) {
          form.querySelector('[name="codigo"]').value = chapa.codigo || '';
          form.querySelector('[name="colada"]').value = chapa.colada || '';
          form.querySelector('[name="espesor"]').value = chapa.espesor || '';
          form.querySelector('[name="dimensiones"]').value = chapa.dimensiones || '';
          form.querySelector('[name="tipo_acero"]').value = chapa.tipo_acero || '';
          
          // Cambiar el comportamiento del formulario para actualizar
          form.setAttribute('data-edit-id', chapaId);
          form.querySelector('.btn-submit').innerHTML = \`
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Actualizar Chapa
          \`;
          
          // Cambiar el t\xEDtulo del modal
          const modal = document.getElementById('modal-nueva-chapa');
          const title = modal.querySelector('.modal-title');
          if (title) {
            title.textContent = 'Editar Chapa';
          }
          
          // Abrir el modal
          openModal('modal-nueva-chapa');
        }
      }
    } catch (error) {
      console.error('Error al cargar chapa para editar:', error);
      alert('Error al cargar los datos de la chapa');
    }
  };

  // Funci\xF3n para eliminar chapa
  window.deleteChapa = async function(chapaId, chapaCodigo) {
    if (confirm(\`\xBFEst\xE1s seguro de que quieres eliminar la chapa "#\${chapaCodigo}"? Esta acci\xF3n no se puede deshacer.\`)) {
      try {
        const response = await fetch(\`/api/chapas/\${chapaId}\`, {
          method: 'DELETE'
        });
        
        const result = await response.json();
        
        if (result.success) {
          alert('Chapa eliminada correctamente');
          location.reload();
        } else {
          throw new Error(result.error || 'Error al eliminar la chapa');
        }
      } catch (error) {
        console.error('Error al eliminar chapa:', error);
        alert('Error al eliminar la chapa: ' + error.message);
      }
    }
  };

  // Modificar el comportamiento del formulario para manejar edici\xF3n
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('chapas-form');
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
          colada: formData.get('colada'),
          espesor: formData.get('espesor'),
          dimensiones: formData.get('dimensiones'),
          tipo_acero: formData.get('tipo_acero'),
        };

        try {
          const url = isEditing ? \`/api/chapas/\${editId}\` : '/api/chapas/create';
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
              \${isEditing ? '\xA1Chapa actualizada!' : '\xA1Chapa creada!'}
            \`;
            submitButton.style.background = '#10b981';
            
            // Recargar la p\xE1gina despu\xE9s de un breve delay
            setTimeout(() => {
              location.reload();
            }, 1500);
          } else {
            throw new Error(json.error || \`Error al \${isEditing ? 'actualizar' : 'crear'} la chapa\`);
          }
        } catch (error) {
          console.error(\`Error al \${isEditing ? 'actualizar' : 'crear'} chapa:\`, error);
          
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
    if (e.target.matches('[data-close-modal="modal-nueva-chapa"]')) {
      const form = document.getElementById('chapas-form');
      if (form) {
        form.reset();
        form.removeAttribute('data-edit-id');
        form.querySelector('.btn-submit').innerHTML = \`
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          Crear Chapa
        \`;
        
        // Restaurar t\xEDtulo del modal
        const modal = document.getElementById('modal-nueva-chapa');
        const title = modal.querySelector('.modal-title');
        if (title) {
          title.textContent = 'Nueva Chapa';
        }
      }
    }
  });
<\/script>`], ["", '<div class="table-container" data-astro-cid-th2orm5c> <table class="data-table" data-astro-cid-th2orm5c> <thead data-astro-cid-th2orm5c> <tr data-astro-cid-th2orm5c> <th data-astro-cid-th2orm5c>C\xF3digo</th> <th data-astro-cid-th2orm5c>Tipo de Acero</th> <th data-astro-cid-th2orm5c>Dimensiones</th> <th data-astro-cid-th2orm5c>Espesor</th> <th data-astro-cid-th2orm5c>Colada</th> <th data-astro-cid-th2orm5c>Fecha Creaci\xF3n</th> <th data-astro-cid-th2orm5c>Acciones</th> </tr> </thead> <tbody data-astro-cid-th2orm5c> ', ` </tbody> </table> </div>  <script type="module">
  // Funci\xF3n para editar chapa
  window.editChapa = async function(chapaId) {
    try {
      const response = await fetch(\\\`/api/chapas/\\\${chapaId}\\\`);
      const result = await response.json();
      
      if (result.success) {
        const chapa = result.data;
        
        // Llenar el formulario con los datos existentes
        const form = document.getElementById('chapas-form');
        if (form) {
          form.querySelector('[name="codigo"]').value = chapa.codigo || '';
          form.querySelector('[name="colada"]').value = chapa.colada || '';
          form.querySelector('[name="espesor"]').value = chapa.espesor || '';
          form.querySelector('[name="dimensiones"]').value = chapa.dimensiones || '';
          form.querySelector('[name="tipo_acero"]').value = chapa.tipo_acero || '';
          
          // Cambiar el comportamiento del formulario para actualizar
          form.setAttribute('data-edit-id', chapaId);
          form.querySelector('.btn-submit').innerHTML = \\\`
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Actualizar Chapa
          \\\`;
          
          // Cambiar el t\xEDtulo del modal
          const modal = document.getElementById('modal-nueva-chapa');
          const title = modal.querySelector('.modal-title');
          if (title) {
            title.textContent = 'Editar Chapa';
          }
          
          // Abrir el modal
          openModal('modal-nueva-chapa');
        }
      }
    } catch (error) {
      console.error('Error al cargar chapa para editar:', error);
      alert('Error al cargar los datos de la chapa');
    }
  };

  // Funci\xF3n para eliminar chapa
  window.deleteChapa = async function(chapaId, chapaCodigo) {
    if (confirm(\\\`\xBFEst\xE1s seguro de que quieres eliminar la chapa "#\\\${chapaCodigo}"? Esta acci\xF3n no se puede deshacer.\\\`)) {
      try {
        const response = await fetch(\\\`/api/chapas/\\\${chapaId}\\\`, {
          method: 'DELETE'
        });
        
        const result = await response.json();
        
        if (result.success) {
          alert('Chapa eliminada correctamente');
          location.reload();
        } else {
          throw new Error(result.error || 'Error al eliminar la chapa');
        }
      } catch (error) {
        console.error('Error al eliminar chapa:', error);
        alert('Error al eliminar la chapa: ' + error.message);
      }
    }
  };

  // Modificar el comportamiento del formulario para manejar edici\xF3n
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('chapas-form');
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
          colada: formData.get('colada'),
          espesor: formData.get('espesor'),
          dimensiones: formData.get('dimensiones'),
          tipo_acero: formData.get('tipo_acero'),
        };

        try {
          const url = isEditing ? \\\`/api/chapas/\\\${editId}\\\` : '/api/chapas/create';
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
              \\\${isEditing ? '\xA1Chapa actualizada!' : '\xA1Chapa creada!'}
            \\\`;
            submitButton.style.background = '#10b981';
            
            // Recargar la p\xE1gina despu\xE9s de un breve delay
            setTimeout(() => {
              location.reload();
            }, 1500);
          } else {
            throw new Error(json.error || \\\`Error al \\\${isEditing ? 'actualizar' : 'crear'} la chapa\\\`);
          }
        } catch (error) {
          console.error(\\\`Error al \\\${isEditing ? 'actualizar' : 'crear'} chapa:\\\`, error);
          
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
    if (e.target.matches('[data-close-modal="modal-nueva-chapa"]')) {
      const form = document.getElementById('chapas-form');
      if (form) {
        form.reset();
        form.removeAttribute('data-edit-id');
        form.querySelector('.btn-submit').innerHTML = \\\`
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          Crear Chapa
        \\\`;
        
        // Restaurar t\xEDtulo del modal
        const modal = document.getElementById('modal-nueva-chapa');
        const title = modal.querySelector('.modal-title');
        if (title) {
          title.textContent = 'Nueva Chapa';
        }
      }
    }
  });
<\/script>`])), maybeRenderHead(), chapas.map((chapa) => renderTemplate`<tr data-astro-cid-th2orm5c> <td data-astro-cid-th2orm5c> <div class="chapa-info" data-astro-cid-th2orm5c> <strong data-astro-cid-th2orm5c>#${chapa.codigo}</strong> <span class="chapa-id" data-astro-cid-th2orm5c>ID: ${chapa.id}</span> </div> </td> <td data-astro-cid-th2orm5c> <span${addAttribute(`tipo-badge ${chapa.tipo_acero?.toLowerCase().replace("jr", "").replace("ql", "")}`, "class")} data-astro-cid-th2orm5c> ${chapa.tipo_acero || "-"} </span> </td> <td data-astro-cid-th2orm5c> <div class="dimensions" data-astro-cid-th2orm5c> <span data-astro-cid-th2orm5c>${chapa.dimensiones || "-"}</span> </div> </td> <td data-astro-cid-th2orm5c> <div class="espesor-info" data-astro-cid-th2orm5c> <span class="espesor-value" data-astro-cid-th2orm5c>${chapa.espesor || "-"}</span> </div> </td> <td data-astro-cid-th2orm5c> <div class="colada-info" data-astro-cid-th2orm5c> <span data-astro-cid-th2orm5c>${chapa.colada || "-"}</span> </div> </td> <td data-astro-cid-th2orm5c>${formatDate(chapa.created_at)}</td> <td data-astro-cid-th2orm5c> <div class="action-buttons" data-astro-cid-th2orm5c> <button class="btn-icon" title="Ver detalles"${addAttribute(`openModal('detail-chapa-${chapa.id}')`, "onclick")} data-astro-cid-th2orm5c> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-th2orm5c> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-th2orm5c></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" data-astro-cid-th2orm5c></path> </svg> </button> <button class="btn-icon" title="Editar"${addAttribute(`editChapa('${chapa.id}')`, "onclick")} data-astro-cid-th2orm5c> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-th2orm5c> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" data-astro-cid-th2orm5c></path> </svg> </button> <button class="btn-icon btn-delete" title="Eliminar"${addAttribute(`deleteChapa('${chapa.id}', '${chapa.codigo}')`, "onclick")} data-astro-cid-th2orm5c> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-th2orm5c> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" data-astro-cid-th2orm5c></path> </svg> </button> </div> </td> </tr>`));
}, "/home/project/src/components/table/TableChapa.astro", void 0);

const $$Astro = createAstro();
const $$ChapaDetail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ChapaDetail;
  const { chapa } = Astro2.props;
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
  return renderTemplate`${maybeRenderHead()}<div slot="general" class="detail-content" data-astro-cid-mqbwys6w> <div class="detail-grid" data-astro-cid-mqbwys6w> <div class="detail-section" data-astro-cid-mqbwys6w> <h3 class="section-title" data-astro-cid-mqbwys6w>Información Básica</h3> <div class="info-grid" data-astro-cid-mqbwys6w> <div class="info-item" data-astro-cid-mqbwys6w> <label class="info-label" data-astro-cid-mqbwys6w>Código</label> <div class="info-value editable" data-field="codigo" data-astro-cid-mqbwys6w>#${chapa.codigo}</div> </div> <div class="info-item" data-astro-cid-mqbwys6w> <label class="info-label" data-astro-cid-mqbwys6w>ID del Sistema</label> <div class="info-value" data-astro-cid-mqbwys6w>${chapa.id}</div> </div> <div class="info-item" data-astro-cid-mqbwys6w> <label class="info-label" data-astro-cid-mqbwys6w>Fecha de Creación</label> <div class="info-value" data-astro-cid-mqbwys6w>${formatDate(chapa.created_at)}</div> </div> </div> </div> <div class="detail-section" data-astro-cid-mqbwys6w> <h3 class="section-title" data-astro-cid-mqbwys6w>Especificaciones Técnicas</h3> <div class="info-grid" data-astro-cid-mqbwys6w> <div class="info-item" data-astro-cid-mqbwys6w> <label class="info-label" data-astro-cid-mqbwys6w>Tipo de Acero</label> <div class="info-value" data-astro-cid-mqbwys6w> <span${addAttribute(`tipo-badge ${chapa.tipo_acero?.toLowerCase().replace("jr", "").replace("ql", "")}`, "class")} data-astro-cid-mqbwys6w> ${chapa.tipo_acero || "-"} </span> </div> </div> <div class="info-item" data-astro-cid-mqbwys6w> <label class="info-label" data-astro-cid-mqbwys6w>Espesor</label> <div class="info-value editable" data-field="espesor" data-astro-cid-mqbwys6w>${chapa.espesor || "-"}</div> </div> <div class="info-item" data-astro-cid-mqbwys6w> <label class="info-label" data-astro-cid-mqbwys6w>Dimensiones</label> <div class="info-value editable" data-field="dimensiones" data-astro-cid-mqbwys6w>${chapa.dimensiones || "-"}</div> </div> </div> </div> <div class="detail-section full-width" data-astro-cid-mqbwys6w> <h3 class="section-title" data-astro-cid-mqbwys6w>Trazabilidad</h3> <div class="info-grid" data-astro-cid-mqbwys6w> <div class="info-item" data-astro-cid-mqbwys6w> <label class="info-label" data-astro-cid-mqbwys6w>Colada</label> <div class="info-value editable" data-field="colada" data-astro-cid-mqbwys6w>${chapa.colada || "-"}</div> </div> </div> </div> </div> </div> <div slot="progress" class="detail-content" data-astro-cid-mqbwys6w> <div class="progress-section" data-astro-cid-mqbwys6w> <h3 class="section-title" data-astro-cid-mqbwys6w>Estado del Material</h3> <div class="material-overview" data-astro-cid-mqbwys6w> <div class="material-card" data-astro-cid-mqbwys6w> <div class="material-icon available" data-astro-cid-mqbwys6w> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-mqbwys6w> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-mqbwys6w></path> </svg> </div> <div class="material-details" data-astro-cid-mqbwys6w> <span class="material-label" data-astro-cid-mqbwys6w>Estado</span> <span class="material-status" data-astro-cid-mqbwys6w>Disponible</span> </div> </div> <div class="material-card" data-astro-cid-mqbwys6w> <div class="material-icon quality" data-astro-cid-mqbwys6w> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-mqbwys6w> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" data-astro-cid-mqbwys6w></path> </svg> </div> <div class="material-details" data-astro-cid-mqbwys6w> <span class="material-label" data-astro-cid-mqbwys6w>Calidad</span> <span class="material-status" data-astro-cid-mqbwys6w>Certificada</span> </div> </div> <div class="material-card" data-astro-cid-mqbwys6w> <div class="material-icon location" data-astro-cid-mqbwys6w> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-mqbwys6w> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-astro-cid-mqbwys6w></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-mqbwys6w></path> </svg> </div> <div class="material-details" data-astro-cid-mqbwys6w> <span class="material-label" data-astro-cid-mqbwys6w>Ubicación</span> <span class="material-status" data-astro-cid-mqbwys6w>Almacén A</span> </div> </div> </div> <div class="usage-timeline" data-astro-cid-mqbwys6w> <h4 class="timeline-title" data-astro-cid-mqbwys6w>Historial de Uso</h4> <div class="timeline-items" data-astro-cid-mqbwys6w> <div class="timeline-item" data-astro-cid-mqbwys6w> <div class="timeline-marker" data-astro-cid-mqbwys6w></div> <div class="timeline-content" data-astro-cid-mqbwys6w> <h5 data-astro-cid-mqbwys6w>Material Registrado</h5> <p data-astro-cid-mqbwys6w>${formatDate(chapa.created_at)}</p> <span class="timeline-status" data-astro-cid-mqbwys6w>Completado</span> </div> </div> <div class="timeline-item active" data-astro-cid-mqbwys6w> <div class="timeline-marker" data-astro-cid-mqbwys6w></div> <div class="timeline-content" data-astro-cid-mqbwys6w> <h5 data-astro-cid-mqbwys6w>En Almacén</h5> <p data-astro-cid-mqbwys6w>Disponible para uso</p> <span class="timeline-status" data-astro-cid-mqbwys6w>Actual</span> </div> </div> </div> </div> </div> </div> <div slot="history" class="detail-content" data-astro-cid-mqbwys6w> <div class="history-section" data-astro-cid-mqbwys6w> <h3 class="section-title" data-astro-cid-mqbwys6w>Historial de Cambios</h3> <div class="history-items" data-astro-cid-mqbwys6w> <div class="history-item" data-astro-cid-mqbwys6w> <div class="history-avatar" data-astro-cid-mqbwys6w>SYS</div> <div class="history-content" data-astro-cid-mqbwys6w> <div class="history-header" data-astro-cid-mqbwys6w> <strong data-astro-cid-mqbwys6w>Sistema</strong> <span class="history-action" data-astro-cid-mqbwys6w>registró material</span> <span class="history-time" data-astro-cid-mqbwys6w>${formatDate(chapa.created_at)}</span> </div> <p class="history-description" data-astro-cid-mqbwys6w>Chapa #${chapa.codigo} registrada en el sistema</p> </div> </div> </div> </div> </div> <div slot="files" class="detail-content" data-astro-cid-mqbwys6w> <div class="files-section" data-astro-cid-mqbwys6w> <h3 class="section-title" data-astro-cid-mqbwys6w>Certificados y Documentos</h3> <div class="files-upload" data-astro-cid-mqbwys6w> <button class="btn-upload" data-astro-cid-mqbwys6w> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-mqbwys6w> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" data-astro-cid-mqbwys6w></path> </svg>
Subir Documento
</button> </div> <div class="files-placeholder" data-astro-cid-mqbwys6w> <div class="placeholder-icon" data-astro-cid-mqbwys6w> <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-mqbwys6w> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-astro-cid-mqbwys6w></path> </svg> </div> <p data-astro-cid-mqbwys6w>No hay documentos adjuntos</p> <span data-astro-cid-mqbwys6w>Sube certificados de calidad, especificaciones técnicas o documentos relacionados</span> </div> </div> </div> `;
}, "/home/project/src/components/detail/ChapaDetail.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ChapasSection = createComponent(async ($$result, $$props, $$slots) => {
  const chapas = await fetchChapas();
  const totalChapas = chapas.length;
  const tiposUnicos = [...new Set(chapas.map((c) => c.tipo_acero).filter(Boolean))].length;
  const chapasPorTipo = chapas.reduce((acc, chapa) => {
    if (chapa.tipo_acero) {
      acc[chapa.tipo_acero] = (acc[chapa.tipo_acero] || 0) + 1;
    }
    return acc;
  }, {});
  return renderTemplate(_a || (_a = __template(["", " ", '<div class="chapas-section" data-astro-cid-v5ymcghf> <div class="stats-grid" data-astro-cid-v5ymcghf> <div class="stat-card" data-astro-cid-v5ymcghf> <div class="stat-icon stock" data-astro-cid-v5ymcghf> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-v5ymcghf> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" data-astro-cid-v5ymcghf></path> </svg> </div> <div class="stat-content" data-astro-cid-v5ymcghf> <div class="stat-number" data-astro-cid-v5ymcghf>', '</div> <div class="stat-label" data-astro-cid-v5ymcghf>Total Chapas</div> </div> </div> <div class="stat-card" data-astro-cid-v5ymcghf> <div class="stat-icon types" data-astro-cid-v5ymcghf> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-v5ymcghf> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" data-astro-cid-v5ymcghf></path> </svg> </div> <div class="stat-content" data-astro-cid-v5ymcghf> <div class="stat-number" data-astro-cid-v5ymcghf>', '</div> <div class="stat-label" data-astro-cid-v5ymcghf>Tipos de Acero</div> </div> </div> <div class="stat-card" data-astro-cid-v5ymcghf> <div class="stat-icon s275" data-astro-cid-v5ymcghf> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-v5ymcghf> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" data-astro-cid-v5ymcghf></path> </svg> </div> <div class="stat-content" data-astro-cid-v5ymcghf> <div class="stat-number" data-astro-cid-v5ymcghf>', '</div> <div class="stat-label" data-astro-cid-v5ymcghf>S275JR</div> </div> </div> <div class="stat-card" data-astro-cid-v5ymcghf> <div class="stat-icon s355" data-astro-cid-v5ymcghf> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-v5ymcghf> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-astro-cid-v5ymcghf></path> </svg> </div> <div class="stat-content" data-astro-cid-v5ymcghf> <div class="stat-number" data-astro-cid-v5ymcghf>', '</div> <div class="stat-label" data-astro-cid-v5ymcghf>S355JR</div> </div> </div> </div> <div class="chapas-table" data-astro-cid-v5ymcghf> <div class="table-header" data-astro-cid-v5ymcghf> <h3 data-astro-cid-v5ymcghf>Inventario de Chapas</h3> <div class="table-filters" data-astro-cid-v5ymcghf> <select class="filter-select" id="tipo-filter" data-astro-cid-v5ymcghf> <option value="" data-astro-cid-v5ymcghf>Todos los tipos</option> <option value="S235" data-astro-cid-v5ymcghf>S235</option> <option value="S275" data-astro-cid-v5ymcghf>S275</option> <option value="S355" data-astro-cid-v5ymcghf>S355</option> <option value="S460" data-astro-cid-v5ymcghf>S460</option> <option value="S690" data-astro-cid-v5ymcghf>S690</option> </select> <input type="text" class="filter-input" id="search-input" placeholder="Buscar por c\xF3digo o colada..." data-astro-cid-v5ymcghf> </div> </div> ', " </div> </div> <!-- Modal para Nueva Chapa --> ", " <!-- Modales de Detalles din\xE1micos --> ", `  <script type="module">
  // Filtros en tiempo real
  document.addEventListener('DOMContentLoaded', function() {
    const tipoFilter = document.getElementById('tipo-filter');
    const searchInput = document.getElementById('search-input');
    const tableRows = document.querySelectorAll('.data-table tbody tr');

    function filterTable() {
      const tipoValue = tipoFilter.value.toLowerCase();
      const searchValue = searchInput.value.toLowerCase();

      tableRows.forEach(row => {
        const tipo = row.querySelector('.tipo-badge').textContent.toLowerCase();
        const codigo = row.cells[0].textContent.toLowerCase();
        const colada = row.cells[4].textContent.toLowerCase();

        const matchesTipo = !tipoValue || tipo.includes(tipoValue);
        const matchesSearch = !searchValue || 
          codigo.includes(searchValue) || 
          colada.includes(searchValue);

        if (matchesTipo && matchesSearch) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    }

    tipoFilter.addEventListener('change', filterTable);
    searchInput.addEventListener('input', filterTable);
  });
<\/script>`])), renderComponent($$result, "PageHeader", $$PageHeader, { "title": "Chapas y Perfiles", "subtitle": "Gesti\xF3n de materiales base: chapas y perfiles met\xE1licos", "actionButton": { text: "Nueva Chapa", onClick: "openModal('modal-nueva-chapa')" }, "data-astro-cid-v5ymcghf": true }), maybeRenderHead(), totalChapas, tiposUnicos, chapasPorTipo["S275JR"] || 0, chapasPorTipo["S355JR"] || 0, renderComponent($$result, "TableChapa", $$TableChapa, { "chapas": chapas, "data-astro-cid-v5ymcghf": true }), renderComponent($$result, "Modal", $$Modal, { "id": "modal-nueva-chapa", "title": "Nueva Chapa", "size": "lg", "data-astro-cid-v5ymcghf": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ChapasForm", $$ChapasForm, { "data-astro-cid-v5ymcghf": true })} ` }), chapas.map((chapa) => renderTemplate`${renderComponent($$result, "DetailModal", $$DetailModal, { "id": `detail-chapa-${chapa.id}`, "title": `Chapa #${chapa.codigo}`, "type": "chapa", "data-astro-cid-v5ymcghf": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ChapaDetail", $$ChapaDetail, { "chapa": chapa, "data-astro-cid-v5ymcghf": true })} ` })}`));
}, "/home/project/src/components/sections/ChapasSection.astro", void 0);

const $$Chapas = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Chapas / Perfiles", "activeSection": "chapas" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ChapasSection", $$ChapasSection, {})} ` })}`;
}, "/home/project/src/pages/admin/chapas.astro", void 0);

const $$file = "/home/project/src/pages/admin/chapas.astro";
const $$url = "/admin/chapas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Chapas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
