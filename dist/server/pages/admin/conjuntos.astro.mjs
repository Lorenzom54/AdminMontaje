import { e as createComponent, r as renderTemplate, h as addAttribute, k as renderComponent, m as maybeRenderHead, f as createAstro } from '../../chunks/astro/server_B5z0SCK9.mjs';
import 'kleur/colors';
import { a as $$PageHeader, $ as $$AdminLayout } from '../../chunks/PageHeader_B1Q6qJIn.mjs';
import { $ as $$FormField, a as $$Modal } from '../../chunks/FormField_CyNQw7Yx.mjs';
import { f as fetchObrasForSelect, a as fetchFaseConjuntosForSelect, b as fetchConjuntos } from '../../chunks/conjunto_api_DdlW2uM9.mjs';
/* empty css                                        */
import { $ as $$DetailModal } from '../../chunks/DetailModal_CzXwdrlz.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$ConjuntosForm = createComponent(async ($$result, $$props, $$slots) => {
  const obras = await fetchObrasForSelect();
  const obraOptions = obras?.map((obra) => ({
    value: obra.id.toString(),
    label: obra.nombre
  })) || [];
  const fasesConjuntos = await fetchFaseConjuntosForSelect();
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<form class="conjuntos-form" id="conjuntos-form" data-astro-cid-kg2k3o6u> <div class="form-grid" data-astro-cid-kg2k3o6u> <div class="form-column" data-astro-cid-kg2k3o6u> ', " ", ' </div> <div class="form-column" data-astro-cid-kg2k3o6u> ', ' <div class="form-field" data-astro-cid-kg2k3o6u> <label class="form-label" data-astro-cid-kg2k3o6u>Estado Actual</label> <select name="estado_actual" class="form-select" data-astro-cid-kg2k3o6u> <option value="" data-astro-cid-kg2k3o6u>Seleccionar estado</option> ', ` </select> </div> <div class="form-field" data-astro-cid-kg2k3o6u> <label class="form-label" data-astro-cid-kg2k3o6u> <input type="checkbox" name="is_completed" value="true" data-astro-cid-kg2k3o6u>
Conjunto completado
</label> </div> </div> </div> <div class="form-actions" data-astro-cid-kg2k3o6u> <button type="button" class="btn-cancel" data-close-modal="modal-nuevo-conjunto" data-astro-cid-kg2k3o6u>
Cancelar
</button> <button type="submit" class="btn-submit" data-astro-cid-kg2k3o6u> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-kg2k3o6u> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-kg2k3o6u></path> </svg>
Crear Conjunto
</button> </div> </form>  <script type="module">
  document.getElementById('conjuntos-form').addEventListener('submit', async (e) => {
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
      descripcion: formData.get('descripcion'),
      obra_id: formData.get('obra_id'),
      estado_actual: formData.get('estado_actual') ? parseInt(formData.get('estado_actual')) : null,
      is_completed: formData.has('is_completed'),
    };

    try {
      const res = await fetch('/api/conjuntos/create', {
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
          \xA1Conjunto creado!
        \`;
        submitButton.style.background = '#10b981';
        
        // Recargar la p\xE1gina despu\xE9s de un breve delay
        setTimeout(() => {
          location.reload();
        }, 1500);
      } else {
        throw new Error(json.error || 'Error al crear el conjunto');
      }
    } catch (error) {
      console.error('Error al crear conjunto:', error);
      
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
<\/script>`], ["", '<form class="conjuntos-form" id="conjuntos-form" data-astro-cid-kg2k3o6u> <div class="form-grid" data-astro-cid-kg2k3o6u> <div class="form-column" data-astro-cid-kg2k3o6u> ', " ", ' </div> <div class="form-column" data-astro-cid-kg2k3o6u> ', ' <div class="form-field" data-astro-cid-kg2k3o6u> <label class="form-label" data-astro-cid-kg2k3o6u>Estado Actual</label> <select name="estado_actual" class="form-select" data-astro-cid-kg2k3o6u> <option value="" data-astro-cid-kg2k3o6u>Seleccionar estado</option> ', ` </select> </div> <div class="form-field" data-astro-cid-kg2k3o6u> <label class="form-label" data-astro-cid-kg2k3o6u> <input type="checkbox" name="is_completed" value="true" data-astro-cid-kg2k3o6u>
Conjunto completado
</label> </div> </div> </div> <div class="form-actions" data-astro-cid-kg2k3o6u> <button type="button" class="btn-cancel" data-close-modal="modal-nuevo-conjunto" data-astro-cid-kg2k3o6u>
Cancelar
</button> <button type="submit" class="btn-submit" data-astro-cid-kg2k3o6u> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-kg2k3o6u> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-kg2k3o6u></path> </svg>
Crear Conjunto
</button> </div> </form>  <script type="module">
  document.getElementById('conjuntos-form').addEventListener('submit', async (e) => {
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
      descripcion: formData.get('descripcion'),
      obra_id: formData.get('obra_id'),
      estado_actual: formData.get('estado_actual') ? parseInt(formData.get('estado_actual')) : null,
      is_completed: formData.has('is_completed'),
    };

    try {
      const res = await fetch('/api/conjuntos/create', {
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
          \xA1Conjunto creado!
        \\\`;
        submitButton.style.background = '#10b981';
        
        // Recargar la p\xE1gina despu\xE9s de un breve delay
        setTimeout(() => {
          location.reload();
        }, 1500);
      } else {
        throw new Error(json.error || 'Error al crear el conjunto');
      }
    } catch (error) {
      console.error('Error al crear conjunto:', error);
      
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
<\/script>`])), maybeRenderHead(), renderComponent($$result, "FormField", $$FormField, { "label": "C\xF3digo del Conjunto", "name": "codigo", "required": true, "placeholder": "Ej: CNJ-001", "data-astro-cid-kg2k3o6u": true }), renderComponent($$result, "FormField", $$FormField, { "label": "Obra", "name": "obra_id", "type": "select", "options": obraOptions, "required": true, "data-astro-cid-kg2k3o6u": true }), renderComponent($$result, "FormField", $$FormField, { "label": "Descripci\xF3n", "name": "descripcion", "type": "textarea", "rows": 3, "placeholder": "Descripci\xF3n del conjunto...", "data-astro-cid-kg2k3o6u": true }), fasesConjuntos?.map((fase) => renderTemplate`<option${addAttribute(fase.id, "value")} data-astro-cid-kg2k3o6u>${fase.fase}</option>`));
}, "/Applications/XAMPP/xamppfiles/htdocs/AdminMontaje/src/components/forms/ConjuntosForm.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro();
const $$TableConjunto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TableConjunto;
  const { conjuntos } = Astro2.props;
  function formatDate(dateString) {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString("es-ES");
  }
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="table-container" data-astro-cid-uza2tlil> <table class="data-table" data-astro-cid-uza2tlil> <thead data-astro-cid-uza2tlil> <tr data-astro-cid-uza2tlil> <th data-astro-cid-uza2tlil>C\xF3digo</th> <th data-astro-cid-uza2tlil>Descripci\xF3n</th> <th data-astro-cid-uza2tlil>Obra</th> <th data-astro-cid-uza2tlil>Estado Actual</th> <th data-astro-cid-uza2tlil>Estado</th> <th data-astro-cid-uza2tlil>Fecha Creaci\xF3n</th> <th data-astro-cid-uza2tlil>Acciones</th> </tr> </thead> <tbody data-astro-cid-uza2tlil> ', ` </tbody> </table> </div>  <script type="module">
  // Funci\xF3n para editar conjunto
  window.editConjunto = async function(conjuntoId) {
    try {
      const response = await fetch(\`/api/conjuntos/\${conjuntoId}\`);
      const result = await response.json();
      
      if (result.success) {
        const conjunto = result.data;
        
                // Llenar el formulario con los datos existentes
        const form = document.getElementById('conjuntos-form');
        if (form) {
          form.querySelector('[name="codigo"]').value = conjunto.codigo || '';
          form.querySelector('[name="descripcion"]').value = conjunto.descripcion || '';
          form.querySelector('[name="obra_id"]').value = conjunto.obra_id?.toString() || '';
          form.querySelector('[name="estado_actual"]').value = conjunto.estado_actual?.toString() || '';
          form.querySelector('[name="is_completed"]').checked = conjunto.is_completed || false;
          
          // Cambiar el comportamiento del formulario para actualizar
          form.setAttribute('data-edit-id', conjuntoId);
          form.querySelector('.btn-submit').innerHTML = \`
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Actualizar Conjunto
          \`;
          
          // Cambiar el t\xEDtulo del modal
          const modal = document.getElementById('modal-nuevo-conjunto');
          const title = modal.querySelector('.modal-title');
          if (title) {
            title.textContent = 'Editar Conjunto';
          }
          
          // Abrir el modal
          openModal('modal-nuevo-conjunto');
        }
      }
    } catch (error) {
      console.error('Error al cargar conjunto para editar:', error);
      alert('Error al cargar los datos del conjunto');
    }
  };

  // Funci\xF3n para eliminar conjunto
  window.deleteConjunto = async function(conjuntoId, conjuntoCodigo) {
    if (confirm(\`\xBFEst\xE1s seguro de que quieres eliminar el conjunto "\${conjuntoCodigo}"? Esta acci\xF3n no se puede deshacer.\`)) {
      try {
        const response = await fetch(\`/api/conjuntos/\${conjuntoId}\`, {
          method: 'DELETE'
        });
        
        const result = await response.json();
        
        if (result.success) {
          alert('Conjunto eliminado correctamente');
          location.reload();
        } else {
          throw new Error(result.error || 'Error al eliminar el conjunto');
        }
      } catch (error) {
        console.error('Error al eliminar conjunto:', error);
        alert('Error al eliminar el conjunto: ' + error.message);
      }
    }
  };

  // Modificar el comportamiento del formulario para manejar edici\xF3n
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('conjuntos-form');
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
          descripcion: formData.get('descripcion'),
          obra_id: formData.get('obra_id'),
          estado_actual: formData.get('estado_actual') ? parseInt(formData.get('estado_actual')) : null,
          is_completed: formData.has('is_completed'),
        };

        try {
          const url = isEditing ? \`/api/conjuntos/\${editId}\` : '/api/conjuntos/create';
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
              \${isEditing ? '\xA1Conjunto actualizado!' : '\xA1Conjunto creado!'}
            \`;
            submitButton.style.background = '#10b981';
            
            // Recargar la p\xE1gina despu\xE9s de un breve delay
            setTimeout(() => {
              location.reload();
            }, 1500);
          } else {
            throw new Error(json.error || \`Error al \${isEditing ? 'actualizar' : 'crear'} el conjunto\`);
          }
        } catch (error) {
          console.error(\`Error al \${isEditing ? 'actualizar' : 'crear'} conjunto:\`, error);
          
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
    if (e.target.matches('[data-close-modal="modal-nuevo-conjunto"]')) {
      const form = document.getElementById('conjuntos-form');
      if (form) {
        form.reset();
        form.removeAttribute('data-edit-id');
        form.querySelector('.btn-submit').innerHTML = \`
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          Crear Conjunto
        \`;
        
        // Restaurar t\xEDtulo del modal
        const modal = document.getElementById('modal-nuevo-conjunto');
        const title = modal.querySelector('.modal-title');
        if (title) {
          title.textContent = 'Nuevo Conjunto';
        }
      }
    }
  });
<\/script>`], ["", '<div class="table-container" data-astro-cid-uza2tlil> <table class="data-table" data-astro-cid-uza2tlil> <thead data-astro-cid-uza2tlil> <tr data-astro-cid-uza2tlil> <th data-astro-cid-uza2tlil>C\xF3digo</th> <th data-astro-cid-uza2tlil>Descripci\xF3n</th> <th data-astro-cid-uza2tlil>Obra</th> <th data-astro-cid-uza2tlil>Estado Actual</th> <th data-astro-cid-uza2tlil>Estado</th> <th data-astro-cid-uza2tlil>Fecha Creaci\xF3n</th> <th data-astro-cid-uza2tlil>Acciones</th> </tr> </thead> <tbody data-astro-cid-uza2tlil> ', ` </tbody> </table> </div>  <script type="module">
  // Funci\xF3n para editar conjunto
  window.editConjunto = async function(conjuntoId) {
    try {
      const response = await fetch(\\\`/api/conjuntos/\\\${conjuntoId}\\\`);
      const result = await response.json();
      
      if (result.success) {
        const conjunto = result.data;
        
                // Llenar el formulario con los datos existentes
        const form = document.getElementById('conjuntos-form');
        if (form) {
          form.querySelector('[name="codigo"]').value = conjunto.codigo || '';
          form.querySelector('[name="descripcion"]').value = conjunto.descripcion || '';
          form.querySelector('[name="obra_id"]').value = conjunto.obra_id?.toString() || '';
          form.querySelector('[name="estado_actual"]').value = conjunto.estado_actual?.toString() || '';
          form.querySelector('[name="is_completed"]').checked = conjunto.is_completed || false;
          
          // Cambiar el comportamiento del formulario para actualizar
          form.setAttribute('data-edit-id', conjuntoId);
          form.querySelector('.btn-submit').innerHTML = \\\`
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Actualizar Conjunto
          \\\`;
          
          // Cambiar el t\xEDtulo del modal
          const modal = document.getElementById('modal-nuevo-conjunto');
          const title = modal.querySelector('.modal-title');
          if (title) {
            title.textContent = 'Editar Conjunto';
          }
          
          // Abrir el modal
          openModal('modal-nuevo-conjunto');
        }
      }
    } catch (error) {
      console.error('Error al cargar conjunto para editar:', error);
      alert('Error al cargar los datos del conjunto');
    }
  };

  // Funci\xF3n para eliminar conjunto
  window.deleteConjunto = async function(conjuntoId, conjuntoCodigo) {
    if (confirm(\\\`\xBFEst\xE1s seguro de que quieres eliminar el conjunto "\\\${conjuntoCodigo}"? Esta acci\xF3n no se puede deshacer.\\\`)) {
      try {
        const response = await fetch(\\\`/api/conjuntos/\\\${conjuntoId}\\\`, {
          method: 'DELETE'
        });
        
        const result = await response.json();
        
        if (result.success) {
          alert('Conjunto eliminado correctamente');
          location.reload();
        } else {
          throw new Error(result.error || 'Error al eliminar el conjunto');
        }
      } catch (error) {
        console.error('Error al eliminar conjunto:', error);
        alert('Error al eliminar el conjunto: ' + error.message);
      }
    }
  };

  // Modificar el comportamiento del formulario para manejar edici\xF3n
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('conjuntos-form');
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
          descripcion: formData.get('descripcion'),
          obra_id: formData.get('obra_id'),
          estado_actual: formData.get('estado_actual') ? parseInt(formData.get('estado_actual')) : null,
          is_completed: formData.has('is_completed'),
        };

        try {
          const url = isEditing ? \\\`/api/conjuntos/\\\${editId}\\\` : '/api/conjuntos/create';
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
              \\\${isEditing ? '\xA1Conjunto actualizado!' : '\xA1Conjunto creado!'}
            \\\`;
            submitButton.style.background = '#10b981';
            
            // Recargar la p\xE1gina despu\xE9s de un breve delay
            setTimeout(() => {
              location.reload();
            }, 1500);
          } else {
            throw new Error(json.error || \\\`Error al \\\${isEditing ? 'actualizar' : 'crear'} el conjunto\\\`);
          }
        } catch (error) {
          console.error(\\\`Error al \\\${isEditing ? 'actualizar' : 'crear'} conjunto:\\\`, error);
          
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
    if (e.target.matches('[data-close-modal="modal-nuevo-conjunto"]')) {
      const form = document.getElementById('conjuntos-form');
      if (form) {
        form.reset();
        form.removeAttribute('data-edit-id');
        form.querySelector('.btn-submit').innerHTML = \\\`
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          Crear Conjunto
        \\\`;
        
        // Restaurar t\xEDtulo del modal
        const modal = document.getElementById('modal-nuevo-conjunto');
        const title = modal.querySelector('.modal-title');
        if (title) {
          title.textContent = 'Nuevo Conjunto';
        }
      }
    }
  });
<\/script>`])), maybeRenderHead(), conjuntos.map((conjunto) => renderTemplate`<tr data-astro-cid-uza2tlil> <td data-astro-cid-uza2tlil> <div class="conjunto-info" data-astro-cid-uza2tlil> <strong data-astro-cid-uza2tlil>${conjunto.codigo}</strong> <span class="conjunto-id" data-astro-cid-uza2tlil>ID: ${conjunto.id}</span> </div> </td> <td data-astro-cid-uza2tlil> <div class="descripcion-info" data-astro-cid-uza2tlil> <span data-astro-cid-uza2tlil>${conjunto.descripcion || "-"}</span> </div> </td> <td data-astro-cid-uza2tlil> <div class="obra-info" data-astro-cid-uza2tlil> <span data-astro-cid-uza2tlil>${conjunto.obras?.nombre || "-"}</span> </div> </td> <td data-astro-cid-uza2tlil> <span class="estado-actual-badge" data-astro-cid-uza2tlil> ${conjunto.estados[conjunto.estado_actual]} </span> </td> <td data-astro-cid-uza2tlil> <span${addAttribute(`status-badge ${conjunto.is_completed ? "completed" : "pending"}`, "class")} data-astro-cid-uza2tlil> ${conjunto.is_completed ? "Completado" : "En Progreso"} </span> </td> <td data-astro-cid-uza2tlil>${formatDate(conjunto.created_at)}</td> <td data-astro-cid-uza2tlil> <div class="action-buttons" data-astro-cid-uza2tlil> <button class="btn-icon" title="Ver detalles"${addAttribute(`openModal('detail-conjunto-${conjunto.id}')`, "onclick")} data-astro-cid-uza2tlil> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-uza2tlil> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-uza2tlil></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" data-astro-cid-uza2tlil></path> </svg> </button> <button class="btn-icon" title="Editar"${addAttribute(`editConjunto('${conjunto.id}')`, "onclick")} data-astro-cid-uza2tlil> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-uza2tlil> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" data-astro-cid-uza2tlil></path> </svg> </button> <button class="btn-icon btn-delete" title="Eliminar"${addAttribute(`deleteConjunto('${conjunto.id}', '${conjunto.codigo}')`, "onclick")} data-astro-cid-uza2tlil> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-uza2tlil> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" data-astro-cid-uza2tlil></path> </svg> </button> </div> </td> </tr>`));
}, "/Applications/XAMPP/xamppfiles/htdocs/AdminMontaje/src/components/table/TableConjunto.astro", void 0);

const $$Astro = createAstro();
const $$ConjuntoDetail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ConjuntoDetail;
  const { conjunto } = Astro2.props;
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
  return renderTemplate`${maybeRenderHead()}<div slot="general" class="detail-content" data-astro-cid-74raotst> <div class="detail-grid" data-astro-cid-74raotst> <div class="detail-section" data-astro-cid-74raotst> <h3 class="section-title" data-astro-cid-74raotst>Información del Conjunto</h3> <div class="info-grid" data-astro-cid-74raotst> <div class="info-item" data-astro-cid-74raotst> <label class="info-label" data-astro-cid-74raotst>Código</label> <div class="info-value editable" data-field="codigo" data-astro-cid-74raotst>${conjunto.codigo}</div> </div> <div class="info-item" data-astro-cid-74raotst> <label class="info-label" data-astro-cid-74raotst>ID del Sistema</label> <div class="info-value" data-astro-cid-74raotst>${conjunto.id}</div> </div> <div class="info-item" data-astro-cid-74raotst> <label class="info-label" data-astro-cid-74raotst>Obra</label> <div class="info-value" data-astro-cid-74raotst>${conjunto.obras?.nombre || "-"}</div> </div> <div class="info-item" data-astro-cid-74raotst> <label class="info-label" data-astro-cid-74raotst>Fecha de Creación</label> <div class="info-value" data-astro-cid-74raotst>${formatDate(conjunto.created_at)}</div> </div> </div> </div> <div class="detail-section" data-astro-cid-74raotst> <h3 class="section-title" data-astro-cid-74raotst>Estado y Descripción</h3> <div class="info-grid" data-astro-cid-74raotst> <div class="info-item" data-astro-cid-74raotst> <label class="info-label" data-astro-cid-74raotst>Estado Actual</label> <div class="info-value" data-astro-cid-74raotst> <span class="estado-actual-badge" data-astro-cid-74raotst> ${conjunto.estados && conjunto.estado_actual !== null ? conjunto.estados[conjunto.estado_actual] : "Sin estado"} </span> </div> </div> <div class="info-item" data-astro-cid-74raotst> <label class="info-label" data-astro-cid-74raotst>Estado</label> <div class="info-value" data-astro-cid-74raotst> <span${addAttribute(`status-badge ${conjunto.is_completed ? "completed" : "pending"}`, "class")} data-astro-cid-74raotst> ${conjunto.is_completed ? "Completado" : "En Progreso"} </span> </div> </div> </div> </div> <div class="detail-section full-width" data-astro-cid-74raotst> <h3 class="section-title" data-astro-cid-74raotst>Descripción</h3> <div class="info-item" data-astro-cid-74raotst> <div class="info-value editable" data-field="descripcion" data-astro-cid-74raotst>${conjunto.descripcion || "Sin descripci\xF3n"}</div> </div> </div> </div> </div> <div slot="progress" class="detail-content" data-astro-cid-74raotst> <div class="progress-section" data-astro-cid-74raotst> <h3 class="section-title" data-astro-cid-74raotst>Estado del Conjunto</h3> <div class="conjunto-overview" data-astro-cid-74raotst> <div class="conjunto-card" data-astro-cid-74raotst> <div class="conjunto-icon status" data-astro-cid-74raotst> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-74raotst> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-74raotst></path> </svg> </div> <div class="conjunto-details" data-astro-cid-74raotst> <span class="conjunto-label" data-astro-cid-74raotst>Estado</span> <span class="conjunto-status" data-astro-cid-74raotst>${conjunto.is_completed ? "Completado" : "En Progreso"}</span> </div> </div> <div class="conjunto-card" data-astro-cid-74raotst> <div class="conjunto-icon obra" data-astro-cid-74raotst> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-74raotst> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" data-astro-cid-74raotst></path> </svg> </div> <div class="conjunto-details" data-astro-cid-74raotst> <span class="conjunto-label" data-astro-cid-74raotst>Obra</span> <span class="conjunto-status" data-astro-cid-74raotst>${conjunto.obras?.nombre || "Sin asignar"}</span> </div> </div> </div> </div> </div> <div slot="history" class="detail-content" data-astro-cid-74raotst> <div class="history-section" data-astro-cid-74raotst> <h3 class="section-title" data-astro-cid-74raotst>Historial del Conjunto</h3> <div class="history-items" data-astro-cid-74raotst> <div class="history-item" data-astro-cid-74raotst> <div class="history-avatar" data-astro-cid-74raotst>SYS</div> <div class="history-content" data-astro-cid-74raotst> <div class="history-header" data-astro-cid-74raotst> <strong data-astro-cid-74raotst>Sistema</strong> <span class="history-action" data-astro-cid-74raotst>creó conjunto</span> <span class="history-time" data-astro-cid-74raotst>${formatDate(conjunto.created_at)}</span> </div> <p class="history-description" data-astro-cid-74raotst>Conjunto ${conjunto.codigo} registrado en el sistema</p> </div> </div> </div> </div> </div> <div slot="files" class="detail-content" data-astro-cid-74raotst> <div class="files-section" data-astro-cid-74raotst> <h3 class="section-title" data-astro-cid-74raotst>Documentos del Conjunto</h3> <div class="files-upload" data-astro-cid-74raotst> <button class="btn-upload" data-astro-cid-74raotst> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-74raotst> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" data-astro-cid-74raotst></path> </svg>
Subir Archivo
</button> </div> <div class="files-placeholder" data-astro-cid-74raotst> <div class="placeholder-icon" data-astro-cid-74raotst> <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-74raotst> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-astro-cid-74raotst></path> </svg> </div> <p data-astro-cid-74raotst>No hay documentos adjuntos</p> <span data-astro-cid-74raotst>Sube planos, especificaciones o documentos relacionados con el conjunto</span> </div> </div> </div> `;
}, "/Applications/XAMPP/xamppfiles/htdocs/AdminMontaje/src/components/detail/ConjuntoDetail.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ConjuntosSection = createComponent(async ($$result, $$props, $$slots) => {
  const conjuntos = await fetchConjuntos();
  const totalConjuntos = conjuntos.length;
  const conjuntosCompletados = conjuntos.filter((c) => c.is_completed).length;
  const conjuntosEnProgreso = conjuntos.filter((c) => !c.is_completed).length;
  const obrasPorConjunto = [...new Set(conjuntos.map((c) => c.obra_id).filter(Boolean))].length;
  return renderTemplate(_a || (_a = __template(["", " ", '<div class="conjuntos-section" data-astro-cid-rr7jtk2p> <div class="stats-grid" data-astro-cid-rr7jtk2p> <div class="stat-card" data-astro-cid-rr7jtk2p> <div class="stat-icon conjuntos" data-astro-cid-rr7jtk2p> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-rr7jtk2p> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" data-astro-cid-rr7jtk2p></path> </svg> </div> <div class="stat-content" data-astro-cid-rr7jtk2p> <div class="stat-number" data-astro-cid-rr7jtk2p>', '</div> <div class="stat-label" data-astro-cid-rr7jtk2p>Total Conjuntos</div> </div> </div> <div class="stat-card" data-astro-cid-rr7jtk2p> <div class="stat-icon production" data-astro-cid-rr7jtk2p> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-rr7jtk2p> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" data-astro-cid-rr7jtk2p></path> </svg> </div> <div class="stat-content" data-astro-cid-rr7jtk2p> <div class="stat-number" data-astro-cid-rr7jtk2p>', '</div> <div class="stat-label" data-astro-cid-rr7jtk2p>En Progreso</div> </div> </div> <div class="stat-card" data-astro-cid-rr7jtk2p> <div class="stat-icon completed" data-astro-cid-rr7jtk2p> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-rr7jtk2p> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-rr7jtk2p></path> </svg> </div> <div class="stat-content" data-astro-cid-rr7jtk2p> <div class="stat-number" data-astro-cid-rr7jtk2p>', '</div> <div class="stat-label" data-astro-cid-rr7jtk2p>Completados</div> </div> </div> <div class="stat-card" data-astro-cid-rr7jtk2p> <div class="stat-icon efficiency" data-astro-cid-rr7jtk2p> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-rr7jtk2p> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-astro-cid-rr7jtk2p></path> </svg> </div> <div class="stat-content" data-astro-cid-rr7jtk2p> <div class="stat-number" data-astro-cid-rr7jtk2p>', '</div> <div class="stat-label" data-astro-cid-rr7jtk2p>Obras Activas</div> </div> </div> </div> <div class="conjuntos-table" data-astro-cid-rr7jtk2p> <div class="table-header" data-astro-cid-rr7jtk2p> <h3 data-astro-cid-rr7jtk2p>Conjuntos Registrados</h3> <div class="table-filters" data-astro-cid-rr7jtk2p> <select class="filter-select" id="estado-filter" data-astro-cid-rr7jtk2p> <option value="" data-astro-cid-rr7jtk2p>Todos los estados</option> <option value="true" data-astro-cid-rr7jtk2p>Completados</option> <option value="false" data-astro-cid-rr7jtk2p>En progreso</option> </select> <input type="text" class="filter-input" id="search-input" placeholder="Buscar por c\xF3digo o descripci\xF3n..." data-astro-cid-rr7jtk2p> </div> </div> ', " </div> </div> <!-- Modal para Nuevo Conjunto --> ", " <!-- Modales de Detalles din\xE1micos --> ", `  <script type="module">
  // Filtros en tiempo real
  document.addEventListener('DOMContentLoaded', function() {
    const estadoFilter = document.getElementById('estado-filter');
    const searchInput = document.getElementById('search-input');
    const tableRows = document.querySelectorAll('.data-table tbody tr');

    function filterTable() {
      const estadoValue = estadoFilter.value;
      const searchValue = searchInput.value.toLowerCase();

      tableRows.forEach(row => {
        const estado = row.querySelector('.status-badge').classList.contains('completed');
        const codigo = row.cells[0].textContent.toLowerCase();
        const descripcion = row.cells[1].textContent.toLowerCase();

        const matchesEstado = !estadoValue || 
          (estadoValue === 'true' && estado) || 
          (estadoValue === 'false' && !estado);
        const matchesSearch = !searchValue || 
          codigo.includes(searchValue) || 
          descripcion.includes(searchValue);

        if (matchesEstado && matchesSearch) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    }

    estadoFilter.addEventListener('change', filterTable);
    searchInput.addEventListener('input', filterTable);
  });
<\/script>`])), renderComponent($$result, "PageHeader", $$PageHeader, { "title": "Gesti\xF3n de Conjuntos", "subtitle": "Administra los conjuntos de elementos y componentes estructurales", "actionButton": { text: "Nuevo Conjunto", onClick: "openModal('modal-nuevo-conjunto')" }, "data-astro-cid-rr7jtk2p": true }), maybeRenderHead(), totalConjuntos, conjuntosEnProgreso, conjuntosCompletados, obrasPorConjunto, renderComponent($$result, "TableConjunto", $$TableConjunto, { "conjuntos": conjuntos, "data-astro-cid-rr7jtk2p": true }), renderComponent($$result, "Modal", $$Modal, { "id": "modal-nuevo-conjunto", "title": "Nuevo Conjunto", "size": "lg", "data-astro-cid-rr7jtk2p": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ConjuntosForm", $$ConjuntosForm, { "data-astro-cid-rr7jtk2p": true })} ` }), conjuntos.map((conjunto) => renderTemplate`${renderComponent($$result, "DetailModal", $$DetailModal, { "id": `detail-conjunto-${conjunto.id}`, "title": `Conjunto ${conjunto.codigo}`, "type": "conjunto", "data-astro-cid-rr7jtk2p": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ConjuntoDetail", $$ConjuntoDetail, { "conjunto": conjunto, "data-astro-cid-rr7jtk2p": true })} ` })}`));
}, "/Applications/XAMPP/xamppfiles/htdocs/AdminMontaje/src/components/sections/ConjuntosSection.astro", void 0);

const $$Conjuntos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Conjuntos", "activeSection": "conjuntos" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ConjuntosSection", $$ConjuntosSection, {})} ` })}`;
}, "/Applications/XAMPP/xamppfiles/htdocs/AdminMontaje/src/pages/admin/conjuntos.astro", void 0);

const $$file = "/Applications/XAMPP/xamppfiles/htdocs/AdminMontaje/src/pages/admin/conjuntos.astro";
const $$url = "/admin/conjuntos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Conjuntos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
