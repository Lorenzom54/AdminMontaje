import { e as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead, f as createAstro, h as addAttribute } from '../../chunks/astro/server_Bi__Z7-M.mjs';
import 'kleur/colors';
import { a as $$PageHeader, $ as $$AdminLayout } from '../../chunks/PageHeader_Brl_MUMp.mjs';
import { $ as $$FormField, a as $$Modal } from '../../chunks/FormField_BixoaIOJ.mjs';
/* empty css                                        */
import { $ as $$DetailModal } from '../../chunks/DetailModal_NkGyXgeE.mjs';
import 'clsx';
import { f as fetchOperarios } from '../../chunks/operario_api_CtNZFblv.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$OperariosForm = createComponent(async ($$result, $$props, $$slots) => {
  const rolOptions = [
    { value: "administrador", label: "Administrador" },
    { value: "supervisor", label: "Supervisor" },
    { value: "operario", label: "Operario" },
    { value: "consulta", label: "Consulta" }
  ];
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<form class="operarios-form" id="operarios-form" data-astro-cid-gepuhhb7> <div class="form-grid" data-astro-cid-gepuhhb7> <div class="form-column" data-astro-cid-gepuhhb7> ', " ", ' </div> <div class="form-column" data-astro-cid-gepuhhb7> ', " ", ` </div> </div> <div class="form-actions" data-astro-cid-gepuhhb7> <button type="button" class="btn-cancel" data-close-modal="modal-nuevo-operario" data-astro-cid-gepuhhb7>
Cancelar
</button> <button type="submit" class="btn-submit" data-astro-cid-gepuhhb7> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-gepuhhb7> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-gepuhhb7></path> </svg>
Crear Operario
</button> </div> </form>  <script type="module">
  document.getElementById('operarios-form').addEventListener('submit', async (e) => {
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
      nombre: formData.get('nombre'),
      rol: formData.get('rol'),
      usuario: formData.get('usuario'),
      email: formData.get('email'),
    };

    try {
      const res = await fetch('/api/operarios/create', {
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
          \xA1Operario creado!
        \`;
        submitButton.style.background = '#10b981';
        
        // Recargar la p\xE1gina despu\xE9s de un breve delay
        setTimeout(() => {
          location.reload();
        }, 1500);
      } else {
        throw new Error(json.error || 'Error al crear el operario');
      }
    } catch (error) {
      console.error('Error al crear operario:', error);
      
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
<\/script>`], ["", '<form class="operarios-form" id="operarios-form" data-astro-cid-gepuhhb7> <div class="form-grid" data-astro-cid-gepuhhb7> <div class="form-column" data-astro-cid-gepuhhb7> ', " ", ' </div> <div class="form-column" data-astro-cid-gepuhhb7> ', " ", ` </div> </div> <div class="form-actions" data-astro-cid-gepuhhb7> <button type="button" class="btn-cancel" data-close-modal="modal-nuevo-operario" data-astro-cid-gepuhhb7>
Cancelar
</button> <button type="submit" class="btn-submit" data-astro-cid-gepuhhb7> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-gepuhhb7> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-gepuhhb7></path> </svg>
Crear Operario
</button> </div> </form>  <script type="module">
  document.getElementById('operarios-form').addEventListener('submit', async (e) => {
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
      nombre: formData.get('nombre'),
      rol: formData.get('rol'),
      usuario: formData.get('usuario'),
      email: formData.get('email'),
    };

    try {
      const res = await fetch('/api/operarios/create', {
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
          \xA1Operario creado!
        \\\`;
        submitButton.style.background = '#10b981';
        
        // Recargar la p\xE1gina despu\xE9s de un breve delay
        setTimeout(() => {
          location.reload();
        }, 1500);
      } else {
        throw new Error(json.error || 'Error al crear el operario');
      }
    } catch (error) {
      console.error('Error al crear operario:', error);
      
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
<\/script>`])), maybeRenderHead(), renderComponent($$result, "FormField", $$FormField, { "label": "Nombre", "name": "nombre", "required": true, "placeholder": "Ej: Jos\xE9 Mart\xEDnez", "data-astro-cid-gepuhhb7": true }), renderComponent($$result, "FormField", $$FormField, { "label": "Rol", "name": "rol", "type": "select", "options": rolOptions, "required": true, "data-astro-cid-gepuhhb7": true }), renderComponent($$result, "FormField", $$FormField, { "label": "Email", "name": "email", "type": "email", "placeholder": "operario@empresa.com", "required": true, "data-astro-cid-gepuhhb7": true }), renderComponent($$result, "FormField", $$FormField, { "label": "Usuario", "name": "usuario", "placeholder": "nombre_usuario (opcional)", "data-astro-cid-gepuhhb7": true }));
}, "/Applications/XAMPP/xamppfiles/htdocs/AdminMontaje/src/components/forms/OperariosForm.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro();
const $$TableOperario = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TableOperario;
  const { operarios } = Astro2.props;
  function formatDate(dateString) {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString("es-ES");
  }
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="table-container" data-astro-cid-ihdqz7tm> <table class="data-table" data-astro-cid-ihdqz7tm> <thead data-astro-cid-ihdqz7tm> <tr data-astro-cid-ihdqz7tm> <th data-astro-cid-ihdqz7tm>Operario</th> <th data-astro-cid-ihdqz7tm>Rol</th> <th data-astro-cid-ihdqz7tm>Usuario</th> <th data-astro-cid-ihdqz7tm>Email</th> <th data-astro-cid-ihdqz7tm>Fecha Creaci\xF3n</th> <th data-astro-cid-ihdqz7tm>Acciones</th> </tr> </thead> <tbody data-astro-cid-ihdqz7tm> ', ` </tbody> </table> </div>  <script type="module">
  // Funci\xF3n para editar operario
  window.editOperario = async function(operarioId) {
    try {
      const response = await fetch(\`/api/operarios/\${operarioId}\`);
      const result = await response.json();
      
      if (result.success) {
        const operario = result.data;
        
        // Llenar el formulario con los datos existentes
        const form = document.getElementById('operarios-form');
        if (form) {
          form.querySelector('[name="nombre"]').value = operario.nombre || '';
          form.querySelector('[name="rol"]').value = operario.rol || '';
          form.querySelector('[name="usuario"]').value = operario.usuario || '';
          form.querySelector('[name="email"]').value = operario.email || '';
          
          // Cambiar el comportamiento del formulario para actualizar
          form.setAttribute('data-edit-id', operarioId);
          form.querySelector('.btn-submit').innerHTML = \`
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Actualizar Operario
          \`;
          
          // Cambiar el t\xEDtulo del modal
          const modal = document.getElementById('modal-nuevo-operario');
          const title = modal.querySelector('.modal-title');
          if (title) {
            title.textContent = 'Editar Operario';
          }
          
          // Abrir el modal
          openModal('modal-nuevo-operario');
        }
      }
    } catch (error) {
      console.error('Error al cargar operario para editar:', error);
      alert('Error al cargar los datos del operario');
    }
  };

  // Funci\xF3n para eliminar operario
  window.deleteOperario = async function(operarioId, operarioNombre) {
    if (confirm(\`\xBFEst\xE1s seguro de que quieres eliminar al operario "\${operarioNombre}"? Esta acci\xF3n no se puede deshacer.\`)) {
      try {
        const response = await fetch(\`/api/operarios/\${operarioId}\`, {
          method: 'DELETE'
        });
        
        const result = await response.json();
        
        if (result.success) {
          alert('Operario eliminado correctamente');
          location.reload();
        } else {
          throw new Error(result.error || 'Error al eliminar el operario');
        }
      } catch (error) {
        console.error('Error al eliminar operario:', error);
        alert('Error al eliminar el operario: ' + error.message);
      }
    }
  };

  // Modificar el comportamiento del formulario para manejar edici\xF3n
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('operarios-form');
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
          nombre: formData.get('nombre'),
          rol: formData.get('rol'),
          usuario: formData.get('usuario'),
          email: formData.get('email'),
        };

        try {
          const url = isEditing ? \`/api/operarios/\${editId}\` : '/api/operarios/create';
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
              \${isEditing ? '\xA1Operario actualizado!' : '\xA1Operario creado!'}
            \`;
            submitButton.style.background = '#10b981';
            
            // Recargar la p\xE1gina despu\xE9s de un breve delay
            setTimeout(() => {
              location.reload();
            }, 1500);
          } else {
            throw new Error(json.error || \`Error al \${isEditing ? 'actualizar' : 'crear'} el operario\`);
          }
        } catch (error) {
          console.error(\`Error al \${isEditing ? 'actualizar' : 'crear'} operario:\`, error);
          
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
    if (e.target.matches('[data-close-modal="modal-nuevo-operario"]')) {
      const form = document.getElementById('operarios-form');
      if (form) {
        form.reset();
        form.removeAttribute('data-edit-id');
        form.querySelector('.btn-submit').innerHTML = \`
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          Crear Operario
        \`;
        
        // Restaurar t\xEDtulo del modal
        const modal = document.getElementById('modal-nuevo-operario');
        const title = modal.querySelector('.modal-title');
        if (title) {
          title.textContent = 'Nuevo Operario';
        }
      }
    }
  });
<\/script>`], ["", '<div class="table-container" data-astro-cid-ihdqz7tm> <table class="data-table" data-astro-cid-ihdqz7tm> <thead data-astro-cid-ihdqz7tm> <tr data-astro-cid-ihdqz7tm> <th data-astro-cid-ihdqz7tm>Operario</th> <th data-astro-cid-ihdqz7tm>Rol</th> <th data-astro-cid-ihdqz7tm>Usuario</th> <th data-astro-cid-ihdqz7tm>Email</th> <th data-astro-cid-ihdqz7tm>Fecha Creaci\xF3n</th> <th data-astro-cid-ihdqz7tm>Acciones</th> </tr> </thead> <tbody data-astro-cid-ihdqz7tm> ', ` </tbody> </table> </div>  <script type="module">
  // Funci\xF3n para editar operario
  window.editOperario = async function(operarioId) {
    try {
      const response = await fetch(\\\`/api/operarios/\\\${operarioId}\\\`);
      const result = await response.json();
      
      if (result.success) {
        const operario = result.data;
        
        // Llenar el formulario con los datos existentes
        const form = document.getElementById('operarios-form');
        if (form) {
          form.querySelector('[name="nombre"]').value = operario.nombre || '';
          form.querySelector('[name="rol"]').value = operario.rol || '';
          form.querySelector('[name="usuario"]').value = operario.usuario || '';
          form.querySelector('[name="email"]').value = operario.email || '';
          
          // Cambiar el comportamiento del formulario para actualizar
          form.setAttribute('data-edit-id', operarioId);
          form.querySelector('.btn-submit').innerHTML = \\\`
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Actualizar Operario
          \\\`;
          
          // Cambiar el t\xEDtulo del modal
          const modal = document.getElementById('modal-nuevo-operario');
          const title = modal.querySelector('.modal-title');
          if (title) {
            title.textContent = 'Editar Operario';
          }
          
          // Abrir el modal
          openModal('modal-nuevo-operario');
        }
      }
    } catch (error) {
      console.error('Error al cargar operario para editar:', error);
      alert('Error al cargar los datos del operario');
    }
  };

  // Funci\xF3n para eliminar operario
  window.deleteOperario = async function(operarioId, operarioNombre) {
    if (confirm(\\\`\xBFEst\xE1s seguro de que quieres eliminar al operario "\\\${operarioNombre}"? Esta acci\xF3n no se puede deshacer.\\\`)) {
      try {
        const response = await fetch(\\\`/api/operarios/\\\${operarioId}\\\`, {
          method: 'DELETE'
        });
        
        const result = await response.json();
        
        if (result.success) {
          alert('Operario eliminado correctamente');
          location.reload();
        } else {
          throw new Error(result.error || 'Error al eliminar el operario');
        }
      } catch (error) {
        console.error('Error al eliminar operario:', error);
        alert('Error al eliminar el operario: ' + error.message);
      }
    }
  };

  // Modificar el comportamiento del formulario para manejar edici\xF3n
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('operarios-form');
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
          nombre: formData.get('nombre'),
          rol: formData.get('rol'),
          usuario: formData.get('usuario'),
          email: formData.get('email'),
        };

        try {
          const url = isEditing ? \\\`/api/operarios/\\\${editId}\\\` : '/api/operarios/create';
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
              \\\${isEditing ? '\xA1Operario actualizado!' : '\xA1Operario creado!'}
            \\\`;
            submitButton.style.background = '#10b981';
            
            // Recargar la p\xE1gina despu\xE9s de un breve delay
            setTimeout(() => {
              location.reload();
            }, 1500);
          } else {
            throw new Error(json.error || \\\`Error al \\\${isEditing ? 'actualizar' : 'crear'} el operario\\\`);
          }
        } catch (error) {
          console.error(\\\`Error al \\\${isEditing ? 'actualizar' : 'crear'} operario:\\\`, error);
          
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
    if (e.target.matches('[data-close-modal="modal-nuevo-operario"]')) {
      const form = document.getElementById('operarios-form');
      if (form) {
        form.reset();
        form.removeAttribute('data-edit-id');
        form.querySelector('.btn-submit').innerHTML = \\\`
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          Crear Operario
        \\\`;
        
        // Restaurar t\xEDtulo del modal
        const modal = document.getElementById('modal-nuevo-operario');
        const title = modal.querySelector('.modal-title');
        if (title) {
          title.textContent = 'Nuevo Operario';
        }
      }
    }
  });
<\/script>`])), maybeRenderHead(), operarios.map((operario) => renderTemplate`<tr data-astro-cid-ihdqz7tm> <td data-astro-cid-ihdqz7tm> <div class="operario-info" data-astro-cid-ihdqz7tm> <div class="operario-avatar" data-astro-cid-ihdqz7tm> <span data-astro-cid-ihdqz7tm>${operario.nombre.split(" ").map((n) => n[0]).join("").toUpperCase()}</span> </div> <div class="operario-details" data-astro-cid-ihdqz7tm> <strong data-astro-cid-ihdqz7tm>${operario.nombre}</strong> <span class="operario-id" data-astro-cid-ihdqz7tm>ID: ${operario.id}</span> </div> </div> </td> <td data-astro-cid-ihdqz7tm> <span${addAttribute(`rol-badge ${operario.rol?.toLowerCase()}`, "class")} data-astro-cid-ihdqz7tm> ${operario.rol || "-"} </span> </td> <td data-astro-cid-ihdqz7tm> <div class="usuario-info" data-astro-cid-ihdqz7tm> <span data-astro-cid-ihdqz7tm>${operario.usuario || "-"}</span> </div> </td> <td data-astro-cid-ihdqz7tm> <div class="email-info" data-astro-cid-ihdqz7tm> <span data-astro-cid-ihdqz7tm>${operario.email}</span> </div> </td> <td data-astro-cid-ihdqz7tm>${formatDate(operario.created_at)}</td> <td data-astro-cid-ihdqz7tm> <div class="action-buttons" data-astro-cid-ihdqz7tm> <button class="btn-icon" title="Ver detalles"${addAttribute(`openModal('detail-operario-${operario.id}')`, "onclick")} data-astro-cid-ihdqz7tm> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ihdqz7tm> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-ihdqz7tm></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" data-astro-cid-ihdqz7tm></path> </svg> </button> <button class="btn-icon" title="Editar"${addAttribute(`editOperario('${operario.id}')`, "onclick")} data-astro-cid-ihdqz7tm> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ihdqz7tm> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" data-astro-cid-ihdqz7tm></path> </svg> </button> <button class="btn-icon btn-delete" title="Eliminar"${addAttribute(`deleteOperario('${operario.id}', '${operario.nombre}')`, "onclick")} data-astro-cid-ihdqz7tm> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ihdqz7tm> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" data-astro-cid-ihdqz7tm></path> </svg> </button> </div> </td> </tr>`));
}, "/Applications/XAMPP/xamppfiles/htdocs/AdminMontaje/src/components/table/TableOperario.astro", void 0);

const $$Astro = createAstro();
const $$OperarioDetail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OperarioDetail;
  const { operario } = Astro2.props;
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
  return renderTemplate`${maybeRenderHead()}<div slot="general" class="detail-content" data-astro-cid-ka4d6vrh> <div class="detail-grid" data-astro-cid-ka4d6vrh> <div class="detail-section" data-astro-cid-ka4d6vrh> <h3 class="section-title" data-astro-cid-ka4d6vrh>Información Básica</h3> <div class="info-grid" data-astro-cid-ka4d6vrh> <div class="info-item" data-astro-cid-ka4d6vrh> <label class="info-label" data-astro-cid-ka4d6vrh>Nombre</label> <div class="info-value editable" data-field="nombre" data-astro-cid-ka4d6vrh>${operario.nombre}</div> </div> <div class="info-item" data-astro-cid-ka4d6vrh> <label class="info-label" data-astro-cid-ka4d6vrh>ID del Sistema</label> <div class="info-value" data-astro-cid-ka4d6vrh>${operario.id}</div> </div> <div class="info-item" data-astro-cid-ka4d6vrh> <label class="info-label" data-astro-cid-ka4d6vrh>Email</label> <div class="info-value editable" data-field="email" data-astro-cid-ka4d6vrh>${operario.email}</div> </div> <div class="info-item" data-astro-cid-ka4d6vrh> <label class="info-label" data-astro-cid-ka4d6vrh>Fecha de Creación</label> <div class="info-value" data-astro-cid-ka4d6vrh>${formatDate(operario.created_at)}</div> </div> </div> </div> <div class="detail-section" data-astro-cid-ka4d6vrh> <h3 class="section-title" data-astro-cid-ka4d6vrh>Rol y Acceso</h3> <div class="info-grid" data-astro-cid-ka4d6vrh> <div class="info-item" data-astro-cid-ka4d6vrh> <label class="info-label" data-astro-cid-ka4d6vrh>Rol</label> <div class="info-value" data-astro-cid-ka4d6vrh> <span${addAttribute(`rol-badge ${operario.rol?.toLowerCase()}`, "class")} data-astro-cid-ka4d6vrh> ${operario.rol} </span> </div> </div> <div class="info-item" data-astro-cid-ka4d6vrh> <label class="info-label" data-astro-cid-ka4d6vrh>Usuario</label> <div class="info-value editable" data-field="usuario" data-astro-cid-ka4d6vrh>${operario.usuario || "-"}</div> </div> </div> </div> </div> </div> <div slot="progress" class="detail-content" data-astro-cid-ka4d6vrh> <div class="progress-section" data-astro-cid-ka4d6vrh> <h3 class="section-title" data-astro-cid-ka4d6vrh>Información del Sistema</h3> <div class="system-overview" data-astro-cid-ka4d6vrh> <div class="system-card" data-astro-cid-ka4d6vrh> <div class="system-icon active" data-astro-cid-ka4d6vrh> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ka4d6vrh> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-ka4d6vrh></path> </svg> </div> <div class="system-details" data-astro-cid-ka4d6vrh> <span class="system-label" data-astro-cid-ka4d6vrh>Estado</span> <span class="system-status" data-astro-cid-ka4d6vrh>Activo</span> </div> </div> <div class="system-card" data-astro-cid-ka4d6vrh> <div class="system-icon permissions" data-astro-cid-ka4d6vrh> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ka4d6vrh> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" data-astro-cid-ka4d6vrh></path> </svg> </div> <div class="system-details" data-astro-cid-ka4d6vrh> <span class="system-label" data-astro-cid-ka4d6vrh>Permisos</span> <span class="system-status" data-astro-cid-ka4d6vrh>Configurados</span> </div> </div> <div class="system-card" data-astro-cid-ka4d6vrh> <div class="system-icon access" data-astro-cid-ka4d6vrh> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ka4d6vrh> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-ka4d6vrh></path> </svg> </div> <div class="system-details" data-astro-cid-ka4d6vrh> <span class="system-label" data-astro-cid-ka4d6vrh>Último Acceso</span> <span class="system-status" data-astro-cid-ka4d6vrh>Hoy</span> </div> </div> </div> </div> </div> <div slot="history" class="detail-content" data-astro-cid-ka4d6vrh> <div class="history-section" data-astro-cid-ka4d6vrh> <h3 class="section-title" data-astro-cid-ka4d6vrh>Historial de Actividad</h3> <div class="history-items" data-astro-cid-ka4d6vrh> <div class="history-item" data-astro-cid-ka4d6vrh> <div class="history-avatar" data-astro-cid-ka4d6vrh>SYS</div> <div class="history-content" data-astro-cid-ka4d6vrh> <div class="history-header" data-astro-cid-ka4d6vrh> <strong data-astro-cid-ka4d6vrh>Sistema</strong> <span class="history-action" data-astro-cid-ka4d6vrh>creó operario</span> <span class="history-time" data-astro-cid-ka4d6vrh>${formatDate(operario.created_at)}</span> </div> <p class="history-description" data-astro-cid-ka4d6vrh>Operario ${operario.nombre} registrado en el sistema</p> </div> </div> </div> </div> </div> <div slot="files" class="detail-content" data-astro-cid-ka4d6vrh> <div class="files-section" data-astro-cid-ka4d6vrh> <h3 class="section-title" data-astro-cid-ka4d6vrh>Documentos del Operario</h3> <div class="files-upload" data-astro-cid-ka4d6vrh> <button class="btn-upload" data-astro-cid-ka4d6vrh> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ka4d6vrh> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" data-astro-cid-ka4d6vrh></path> </svg>
Subir Documento
</button> </div> <div class="files-placeholder" data-astro-cid-ka4d6vrh> <div class="placeholder-icon" data-astro-cid-ka4d6vrh> <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ka4d6vrh> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-astro-cid-ka4d6vrh></path> </svg> </div> <p data-astro-cid-ka4d6vrh>No hay documentos adjuntos</p> <span data-astro-cid-ka4d6vrh>Sube documentos relacionados con el operario</span> </div> </div> </div> `;
}, "/Applications/XAMPP/xamppfiles/htdocs/AdminMontaje/src/components/detail/OperarioDetail.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$OperariosSection = createComponent(async ($$result, $$props, $$slots) => {
  const operarios = await fetchOperarios();
  const totalOperarios = operarios.length;
  const operariosActivos = operarios.length;
  const rolesPorTipo = operarios.reduce((acc, operario) => {
    if (operario.rol) {
      acc[operario.rol] = (acc[operario.rol] || 0) + 1;
    }
    return acc;
  }, {});
  return renderTemplate(_a || (_a = __template(["", " ", '<div class="operarios-section" data-astro-cid-yxn7wuyu> <div class="stats-grid" data-astro-cid-yxn7wuyu> <div class="stat-card" data-astro-cid-yxn7wuyu> <div class="stat-icon total" data-astro-cid-yxn7wuyu> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-yxn7wuyu> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m9 5.197v1M13 7a4 4 0 11-8 0 4 4 0 018 0z" data-astro-cid-yxn7wuyu></path> </svg> </div> <div class="stat-content" data-astro-cid-yxn7wuyu> <div class="stat-number" data-astro-cid-yxn7wuyu>', '</div> <div class="stat-label" data-astro-cid-yxn7wuyu>Total Operarios</div> </div> </div> <div class="stat-card" data-astro-cid-yxn7wuyu> <div class="stat-icon active" data-astro-cid-yxn7wuyu> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-yxn7wuyu> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-astro-cid-yxn7wuyu></path> </svg> </div> <div class="stat-content" data-astro-cid-yxn7wuyu> <div class="stat-number" data-astro-cid-yxn7wuyu>', '</div> <div class="stat-label" data-astro-cid-yxn7wuyu>Operarios Activos</div> </div> </div> <div class="stat-card" data-astro-cid-yxn7wuyu> <div class="stat-icon efficiency" data-astro-cid-yxn7wuyu> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-yxn7wuyu> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" data-astro-cid-yxn7wuyu></path> </svg> </div> <div class="stat-content" data-astro-cid-yxn7wuyu> <div class="stat-number" data-astro-cid-yxn7wuyu>', '</div> <div class="stat-label" data-astro-cid-yxn7wuyu>Administradores</div> </div> </div> <div class="stat-card" data-astro-cid-yxn7wuyu> <div class="stat-icon hours" data-astro-cid-yxn7wuyu> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-yxn7wuyu> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-yxn7wuyu></path> </svg> </div> <div class="stat-content" data-astro-cid-yxn7wuyu> <div class="stat-number" data-astro-cid-yxn7wuyu>', '</div> <div class="stat-label" data-astro-cid-yxn7wuyu>Operarios</div> </div> </div> </div> <div class="operarios-table" data-astro-cid-yxn7wuyu> <div class="table-header" data-astro-cid-yxn7wuyu> <h3 data-astro-cid-yxn7wuyu>Operarios Registrados</h3> <div class="table-filters" data-astro-cid-yxn7wuyu> <select class="filter-select" id="rol-filter" data-astro-cid-yxn7wuyu> <option value="" data-astro-cid-yxn7wuyu>Todos los roles</option> <option value="administrador" data-astro-cid-yxn7wuyu>Administrador</option> <option value="supervisor" data-astro-cid-yxn7wuyu>Supervisor</option> <option value="operario" data-astro-cid-yxn7wuyu>Operario</option> <option value="consulta" data-astro-cid-yxn7wuyu>Consulta</option> </select> <input type="text" class="filter-input" id="search-input" placeholder="Buscar por nombre o email..." data-astro-cid-yxn7wuyu> </div> </div> ', " </div> </div> <!-- Modal para Nuevo Operario --> ", " <!-- Modales de Detalles --> ", `  <script type="module">
  // Filtros en tiempo real
  document.addEventListener('DOMContentLoaded', function() {
    const rolFilter = document.getElementById('rol-filter');
    const searchInput = document.getElementById('search-input');
    const tableRows = document.querySelectorAll('.data-table tbody tr');

    function filterTable() {
      const rolValue = rolFilter.value.toLowerCase();
      const searchValue = searchInput.value.toLowerCase();

      tableRows.forEach(row => {
        const rol = row.querySelector('.rol-badge').textContent.toLowerCase();
        const nombre = row.cells[0].textContent.toLowerCase();
        const email = row.cells[3].textContent.toLowerCase();

        const matchesRol = !rolValue || rol.includes(rolValue);
        const matchesSearch = !searchValue || 
          nombre.includes(searchValue) || 
          email.includes(searchValue);

        if (matchesRol && matchesSearch) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    }

    rolFilter.addEventListener('change', filterTable);
    searchInput.addEventListener('input', filterTable);
  });
<\/script>`])), renderComponent($$result, "PageHeader", $$PageHeader, { "title": "Gesti\xF3n de Operarios", "subtitle": "Control de personal y asignaci\xF3n de tareas", "actionButton": { text: "Nuevo Operario", onClick: "openModal('modal-nuevo-operario')" }, "data-astro-cid-yxn7wuyu": true }), maybeRenderHead(), totalOperarios, operariosActivos, rolesPorTipo["administrador"] || 0, rolesPorTipo["operario"] || 0, renderComponent($$result, "TableOperario", $$TableOperario, { "operarios": operarios, "data-astro-cid-yxn7wuyu": true }), renderComponent($$result, "Modal", $$Modal, { "id": "modal-nuevo-operario", "title": "Nuevo Operario", "size": "lg", "data-astro-cid-yxn7wuyu": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "OperariosForm", $$OperariosForm, { "data-astro-cid-yxn7wuyu": true })} ` }), operarios.map((operario) => renderTemplate`${renderComponent($$result, "DetailModal", $$DetailModal, { "id": `detail-operario-${operario.id}`, "title": operario.nombre, "type": "operario", "data-astro-cid-yxn7wuyu": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "OperarioDetail", $$OperarioDetail, { "operario": operario, "data-astro-cid-yxn7wuyu": true })} ` })}`));
}, "/Applications/XAMPP/xamppfiles/htdocs/AdminMontaje/src/components/sections/OperariosSection.astro", void 0);

const $$Operarios = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Operarios", "activeSection": "operarios", "data-astro-cid-hn6ijy43": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "OperariosSection", $$OperariosSection, { "data-astro-cid-hn6ijy43": true })} ` })} `;
}, "/Applications/XAMPP/xamppfiles/htdocs/AdminMontaje/src/pages/admin/operarios.astro", void 0);

const $$file = "/Applications/XAMPP/xamppfiles/htdocs/AdminMontaje/src/pages/admin/operarios.astro";
const $$url = "/admin/operarios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Operarios,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
