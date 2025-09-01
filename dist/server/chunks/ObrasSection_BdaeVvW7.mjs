import { e as createComponent, m as maybeRenderHead, k as renderComponent, r as renderTemplate, f as createAstro, h as addAttribute } from './astro/server_B5z0SCK9.mjs';
import 'kleur/colors';
import { a as $$PageHeader } from './PageHeader_B1Q6qJIn.mjs';
import { $ as $$FormField, a as $$Modal } from './FormField_CyNQw7Yx.mjs';
/* empty css                         */
import { $ as $$DetailModal } from './DetailModal_CzXwdrlz.mjs';
import 'clsx';
import { fetchObras } from './obra_api_D3QhXp__.mjs';

const $$ObrasForm = createComponent(($$result, $$props, $$slots) => {
  const estadoOptions = [
    { value: "planificacion", label: "Planificaci\xF3n" },
    { value: "enprogreso", label: "En Progreso" },
    { value: "pausada", label: "Pausada" },
    { value: "completada", label: "Completada" }
  ];
  return renderTemplate`${maybeRenderHead()}<form class="obras-form" id="obras-form" data-astro-cid-o5nfvmc2> <div class="form-grid" data-astro-cid-o5nfvmc2> <div class="form-column" data-astro-cid-o5nfvmc2> ${renderComponent($$result, "FormField", $$FormField, { "label": "Nombre de la Obra", "name": "nombre", "required": true, "placeholder": "Ej: Centro Comercial Plaza Norte", "data-astro-cid-o5nfvmc2": true })} ${renderComponent($$result, "FormField", $$FormField, { "label": "Estado", "name": "estado", "type": "select", "options": estadoOptions, "required": true, "data-astro-cid-o5nfvmc2": true })} ${renderComponent($$result, "FormField", $$FormField, { "label": "Fecha de Inicio", "name": "fecha_inicio", "type": "date", "required": true, "data-astro-cid-o5nfvmc2": true })} </div> <div class="form-column" data-astro-cid-o5nfvmc2> ${renderComponent($$result, "FormField", $$FormField, { "label": "Fecha de Finalizaci\xF3n", "name": "fecha_fin", "type": "date", "required": true, "data-astro-cid-o5nfvmc2": true })} ${renderComponent($$result, "FormField", $$FormField, { "label": "Responsable del Proyecto", "name": "responsable", "placeholder": "Nombre del responsable", "required": true, "data-astro-cid-o5nfvmc2": true })} ${renderComponent($$result, "FormField", $$FormField, { "label": "Ubicaci\xF3n", "name": "ubicacion", "placeholder": "Direcci\xF3n completa de la obra", "required": true, "data-astro-cid-o5nfvmc2": true })} </div> </div> ${renderComponent($$result, "FormField", $$FormField, { "label": "Descripci\xF3n", "name": "descripcion", "type": "textarea", "rows": 4, "placeholder": "Descripci\xF3n detallada de la obra...", "data-astro-cid-o5nfvmc2": true })} <!-- Información de Fases --> <div class="phases-info" data-astro-cid-o5nfvmc2> <h3 class="section-title" data-astro-cid-o5nfvmc2>Fases de la Obra</h3> <p class="section-description" data-astro-cid-o5nfvmc2>
Esta obra incluirá automáticamente todas las fases disponibles configuradas en el sistema.
</p> <div class="phases-summary" data-astro-cid-o5nfvmc2> <div class="phase-group" data-astro-cid-o5nfvmc2> <h4 data-astro-cid-o5nfvmc2>Fases de Piezas:</h4> <p data-astro-cid-o5nfvmc2>Se cargarán dinámicamente desde la base de datos</p> </div> <div class="phase-group" data-astro-cid-o5nfvmc2> <h4 data-astro-cid-o5nfvmc2>Fases de Conjuntos:</h4> <p data-astro-cid-o5nfvmc2>Se cargarán dinámicamente desde la base de datos</p> </div> </div> </div> <div class="form-actions" data-astro-cid-o5nfvmc2> <button type="button" class="btn-cancel" data-close-modal="modal-nueva-obra" data-astro-cid-o5nfvmc2>
Cancelar
</button> <button type="submit" class="btn-submit" data-astro-cid-o5nfvmc2> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-o5nfvmc2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-o5nfvmc2></path> </svg>
Crear Obra
</button> </div> </form> `;
}, "/Applications/XAMPP/xamppfiles/htdocs/AdminMontaje/src/components/forms/ObrasForm.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro();
const $$TableObra = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TableObra;
  const { obras } = Astro2.props;
  function formatDate(dateString) {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString("es-ES");
  }
  function getDaysRemaining(fechaFin) {
    if (!fechaFin) return null;
    const today = /* @__PURE__ */ new Date();
    const endDate = new Date(fechaFin);
    const diffTime = endDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
    return diffDays;
  }
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="table-container" data-astro-cid-y44ntbxy> <table class="data-table" data-astro-cid-y44ntbxy> <thead data-astro-cid-y44ntbxy> <tr data-astro-cid-y44ntbxy> <th data-astro-cid-y44ntbxy>Obra</th> <th data-astro-cid-y44ntbxy>Estado</th> <th data-astro-cid-y44ntbxy>Fecha Inicio</th> <th data-astro-cid-y44ntbxy>Fecha Fin</th> <th data-astro-cid-y44ntbxy>D\xEDas Restantes</th> <th data-astro-cid-y44ntbxy>Responsable</th> <th data-astro-cid-y44ntbxy>Acciones</th> </tr> </thead> <tbody data-astro-cid-y44ntbxy> ', ` </tbody> </table> </div>  <script type="module">
  // Funci\xF3n para editar obra
  window.editObra = async function(obraId) {
    try {
      const response = await fetch(\`/api/obras/\${obraId}\`);
      const result = await response.json();
      
      if (result.success) {
        const obra = result.data;
        
        // Llenar el formulario con los datos existentes
        const form = document.getElementById('obras-form');
        if (form) {
          form.querySelector('[name="nombre"]').value = obra.nombre || '';
          form.querySelector('[name="estado"]').value = obra.estado || '';
          form.querySelector('[name="fecha_inicio"]').value = obra.fecha_inicio || '';
          form.querySelector('[name="fecha_fin"]').value = obra.fecha_fin || '';
          form.querySelector('[name="ubicacion"]').value = obra.ubicacion || '';
          form.querySelector('[name="responsable"]').value = obra.responsable || '';
          form.querySelector('[name="descripcion"]').value = obra.descripcion || '';
          
          // Cambiar el comportamiento del formulario para actualizar
          form.setAttribute('data-edit-id', obraId);
          form.querySelector('.btn-submit').innerHTML = \`
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Actualizar Obra
          \`;
          
          // Cambiar el t\xEDtulo del modal
          const modal = document.getElementById('modal-nueva-obra');
          const title = modal.querySelector('.modal-title');
          if (title) {
            title.textContent = 'Editar Obra';
          }
          
          // Abrir el modal
          openModal('modal-nueva-obra');
        }
      }
    } catch (error) {
      console.error('Error al cargar obra para editar:', error);
      alert('Error al cargar los datos de la obra');
    }
  };

  // Funci\xF3n para eliminar obra
  window.deleteObra = async function(obraId, obraNombre) {
    if (confirm(\`\xBFEst\xE1s seguro de que quieres eliminar la obra "\${obraNombre}"? Esta acci\xF3n no se puede deshacer.\`)) {
      try {
        const response = await fetch(\`/api/obras/\${obraId}\`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ action: 'delete' })
        });
        
        const result = await response.json();
        
        if (result.success) {
          alert('Obra eliminada correctamente');
          location.reload();
        } else {
          throw new Error(result.error || 'Error al eliminar la obra');
        }
      } catch (error) {
        console.error('Error al eliminar obra:', error);
        alert('Error al eliminar la obra: ' + error.message);
      }
    }
  };

  // Limpiar formulario cuando se cierra el modal
  document.addEventListener('click', function(e) {
    if (e.target.matches('[data-close-modal="modal-nueva-obra"]')) {
      const form = document.getElementById('obras-form');
      if (form) {
        form.reset();
        form.removeAttribute('data-edit-id');
        form.querySelector('.btn-submit').innerHTML = \`
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          Crear Obra
        \`;
        
        // Restaurar t\xEDtulo del modal
        const modal = document.getElementById('modal-nueva-obra');
        const title = modal.querySelector('.modal-title');
        if (title) {
          title.textContent = 'Nueva Obra';
        }
      }
    }
  });
<\/script>`], ["", '<div class="table-container" data-astro-cid-y44ntbxy> <table class="data-table" data-astro-cid-y44ntbxy> <thead data-astro-cid-y44ntbxy> <tr data-astro-cid-y44ntbxy> <th data-astro-cid-y44ntbxy>Obra</th> <th data-astro-cid-y44ntbxy>Estado</th> <th data-astro-cid-y44ntbxy>Fecha Inicio</th> <th data-astro-cid-y44ntbxy>Fecha Fin</th> <th data-astro-cid-y44ntbxy>D\xEDas Restantes</th> <th data-astro-cid-y44ntbxy>Responsable</th> <th data-astro-cid-y44ntbxy>Acciones</th> </tr> </thead> <tbody data-astro-cid-y44ntbxy> ', ` </tbody> </table> </div>  <script type="module">
  // Funci\xF3n para editar obra
  window.editObra = async function(obraId) {
    try {
      const response = await fetch(\\\`/api/obras/\\\${obraId}\\\`);
      const result = await response.json();
      
      if (result.success) {
        const obra = result.data;
        
        // Llenar el formulario con los datos existentes
        const form = document.getElementById('obras-form');
        if (form) {
          form.querySelector('[name="nombre"]').value = obra.nombre || '';
          form.querySelector('[name="estado"]').value = obra.estado || '';
          form.querySelector('[name="fecha_inicio"]').value = obra.fecha_inicio || '';
          form.querySelector('[name="fecha_fin"]').value = obra.fecha_fin || '';
          form.querySelector('[name="ubicacion"]').value = obra.ubicacion || '';
          form.querySelector('[name="responsable"]').value = obra.responsable || '';
          form.querySelector('[name="descripcion"]').value = obra.descripcion || '';
          
          // Cambiar el comportamiento del formulario para actualizar
          form.setAttribute('data-edit-id', obraId);
          form.querySelector('.btn-submit').innerHTML = \\\`
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Actualizar Obra
          \\\`;
          
          // Cambiar el t\xEDtulo del modal
          const modal = document.getElementById('modal-nueva-obra');
          const title = modal.querySelector('.modal-title');
          if (title) {
            title.textContent = 'Editar Obra';
          }
          
          // Abrir el modal
          openModal('modal-nueva-obra');
        }
      }
    } catch (error) {
      console.error('Error al cargar obra para editar:', error);
      alert('Error al cargar los datos de la obra');
    }
  };

  // Funci\xF3n para eliminar obra
  window.deleteObra = async function(obraId, obraNombre) {
    if (confirm(\\\`\xBFEst\xE1s seguro de que quieres eliminar la obra "\\\${obraNombre}"? Esta acci\xF3n no se puede deshacer.\\\`)) {
      try {
        const response = await fetch(\\\`/api/obras/\\\${obraId}\\\`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ action: 'delete' })
        });
        
        const result = await response.json();
        
        if (result.success) {
          alert('Obra eliminada correctamente');
          location.reload();
        } else {
          throw new Error(result.error || 'Error al eliminar la obra');
        }
      } catch (error) {
        console.error('Error al eliminar obra:', error);
        alert('Error al eliminar la obra: ' + error.message);
      }
    }
  };

  // Limpiar formulario cuando se cierra el modal
  document.addEventListener('click', function(e) {
    if (e.target.matches('[data-close-modal="modal-nueva-obra"]')) {
      const form = document.getElementById('obras-form');
      if (form) {
        form.reset();
        form.removeAttribute('data-edit-id');
        form.querySelector('.btn-submit').innerHTML = \\\`
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          Crear Obra
        \\\`;
        
        // Restaurar t\xEDtulo del modal
        const modal = document.getElementById('modal-nueva-obra');
        const title = modal.querySelector('.modal-title');
        if (title) {
          title.textContent = 'Nueva Obra';
        }
      }
    }
  });
<\/script>`])), maybeRenderHead(), obras.map((obra) => {
    const daysRemaining = getDaysRemaining(obra.fecha_fin);
    return renderTemplate`<tr data-astro-cid-y44ntbxy> <td data-astro-cid-y44ntbxy> <div class="obra-info" data-astro-cid-y44ntbxy> <strong data-astro-cid-y44ntbxy>${obra.nombre}</strong> <span class="obra-location" data-astro-cid-y44ntbxy>${obra.ubicacion}</span> </div> </td> <td data-astro-cid-y44ntbxy> <span${addAttribute(`status-badge ${obra.estado.toLowerCase().replace("_", "-")}`, "class")} data-astro-cid-y44ntbxy> ${obra.estado === "enprogreso" ? "En Progreso" : obra.estado === "planificacion" ? "Planificaci\xF3n" : obra.estado === "pausada" ? "Pausada" : obra.estado === "completada" ? "Completada" : obra.estado} </span> </td> <td data-astro-cid-y44ntbxy>${formatDate(obra.fecha_inicio)}</td> <td data-astro-cid-y44ntbxy>${formatDate(obra.fecha_fin)}</td> <td data-astro-cid-y44ntbxy> ${daysRemaining !== null ? renderTemplate`<span${addAttribute(`days-remaining ${daysRemaining < 0 ? "overdue" : daysRemaining <= 7 ? "urgent" : "normal"}`, "class")} data-astro-cid-y44ntbxy> ${daysRemaining < 0 ? `${Math.abs(daysRemaining)} d\xEDas atrasado` : daysRemaining === 0 ? "Hoy" : `${daysRemaining} d\xEDas`} </span>` : "-"} </td> <td data-astro-cid-y44ntbxy>${obra.responsable}</td> <td data-astro-cid-y44ntbxy> <div class="action-buttons" data-astro-cid-y44ntbxy> <button class="btn-icon" title="Ver detalles"${addAttribute(`openModal('detail-obra-${obra.id}')`, "onclick")} data-astro-cid-y44ntbxy> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-y44ntbxy> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-y44ntbxy></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" data-astro-cid-y44ntbxy></path> </svg> </button> <button class="btn-icon" title="Editar"${addAttribute(`editObra('${obra.id}')`, "onclick")} data-astro-cid-y44ntbxy> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-y44ntbxy> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" data-astro-cid-y44ntbxy></path> </svg> </button> <button class="btn-icon btn-delete" title="Eliminar"${addAttribute(`deleteObra('${obra.id}', '${obra.nombre}')`, "onclick")} data-astro-cid-y44ntbxy> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-y44ntbxy> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" data-astro-cid-y44ntbxy></path> </svg> </button> </div> </td> </tr>`;
  }));
}, "/Applications/XAMPP/xamppfiles/htdocs/AdminMontaje/src/components/table/TableObra.astro", void 0);

const $$Astro = createAstro();
const $$ObraDetail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ObraDetail;
  const { obra } = Astro2.props;
  function formatDate(dateString) {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
  function getDaysRemaining(fechaFin) {
    if (!fechaFin) return null;
    const today = /* @__PURE__ */ new Date();
    const endDate = new Date(fechaFin);
    const diffTime = endDate - today;
    const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
    return diffDays;
  }
  const daysRemaining = getDaysRemaining(obra.fecha_fin);
  return renderTemplate`${maybeRenderHead()}<div slot="general" class="detail-content" data-astro-cid-w6x3tgij> <div class="detail-grid" data-astro-cid-w6x3tgij> <div class="detail-section" data-astro-cid-w6x3tgij> <h3 class="section-title" data-astro-cid-w6x3tgij>Información Básica</h3> <div class="info-grid" data-astro-cid-w6x3tgij> <div class="info-item" data-astro-cid-w6x3tgij> <label class="info-label" data-astro-cid-w6x3tgij>Nombre de la Obra</label> <div class="info-value editable" data-field="nombre" data-astro-cid-w6x3tgij>${obra.nombre}</div> </div> <div class="info-item" data-astro-cid-w6x3tgij> <label class="info-label" data-astro-cid-w6x3tgij>Estado</label> <div class="info-value" data-astro-cid-w6x3tgij> <span${addAttribute(`status-badge ${obra.estado.toLowerCase().replace("_", "-")}`, "class")} data-astro-cid-w6x3tgij> ${obra.estado === "enprogreso" ? "En Progreso" : obra.estado === "planificacion" ? "Planificaci\xF3n" : obra.estado === "pausada" ? "Pausada" : obra.estado === "completada" ? "Completada" : obra.estado} </span> </div> </div> <div class="info-item" data-astro-cid-w6x3tgij> <label class="info-label" data-astro-cid-w6x3tgij>Responsable</label> <div class="info-value editable" data-field="responsable" data-astro-cid-w6x3tgij>${obra.responsable}</div> </div> </div> </div> <div class="detail-section" data-astro-cid-w6x3tgij> <h3 class="section-title" data-astro-cid-w6x3tgij>Fechas y Plazos</h3> <div class="info-grid" data-astro-cid-w6x3tgij> <div class="info-item" data-astro-cid-w6x3tgij> <label class="info-label" data-astro-cid-w6x3tgij>Fecha de Inicio</label> <div class="info-value editable" data-field="fecha_inicio" data-astro-cid-w6x3tgij>${formatDate(obra.fecha_inicio)}</div> </div> <div class="info-item" data-astro-cid-w6x3tgij> <label class="info-label" data-astro-cid-w6x3tgij>Fecha de Finalización</label> <div class="info-value editable" data-field="fecha_fin" data-astro-cid-w6x3tgij>${formatDate(obra.fecha_fin)}</div> </div> <div class="info-item" data-astro-cid-w6x3tgij> <label class="info-label" data-astro-cid-w6x3tgij>Días Restantes</label> <div class="info-value" data-astro-cid-w6x3tgij> ${daysRemaining !== null ? renderTemplate`<span${addAttribute(`days-remaining ${daysRemaining < 0 ? "overdue" : daysRemaining <= 7 ? "urgent" : "normal"}`, "class")} data-astro-cid-w6x3tgij> ${daysRemaining < 0 ? `${Math.abs(daysRemaining)} d\xEDas atrasado` : daysRemaining === 0 ? "Hoy" : `${daysRemaining} d\xEDas`} </span>` : "-"} </div> </div> </div> </div> <div class="detail-section full-width" data-astro-cid-w6x3tgij> <h3 class="section-title" data-astro-cid-w6x3tgij>Ubicación</h3> <div class="info-grid" data-astro-cid-w6x3tgij> <div class="info-item" data-astro-cid-w6x3tgij> <label class="info-label" data-astro-cid-w6x3tgij>Dirección</label> <div class="info-value editable" data-field="ubicacion" data-astro-cid-w6x3tgij>${obra.ubicacion}</div> </div> </div> </div> <div class="detail-section full-width" data-astro-cid-w6x3tgij> <h3 class="section-title" data-astro-cid-w6x3tgij>Descripción</h3> <div class="info-item" data-astro-cid-w6x3tgij> <div class="info-value editable" data-field="descripcion" data-astro-cid-w6x3tgij>${obra.descripcion || "Sin descripci\xF3n"}</div> </div> </div> </div> </div> <div slot="progress" class="detail-content" data-astro-cid-w6x3tgij> <div class="progress-section" data-astro-cid-w6x3tgij> <h3 class="section-title" data-astro-cid-w6x3tgij>Estado del Proyecto</h3> <div class="progress-overview" data-astro-cid-w6x3tgij> <div class="progress-card" data-astro-cid-w6x3tgij> <div class="progress-icon completed" data-astro-cid-w6x3tgij> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-w6x3tgij> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-w6x3tgij></path> </svg> </div> <div class="progress-details" data-astro-cid-w6x3tgij> <span class="progress-number" data-astro-cid-w6x3tgij>12</span> <span class="progress-label" data-astro-cid-w6x3tgij>Conjuntos Completados</span> </div> </div> <div class="progress-card" data-astro-cid-w6x3tgij> <div class="progress-icon in-progress" data-astro-cid-w6x3tgij> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-w6x3tgij> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-w6x3tgij></path> </svg> </div> <div class="progress-details" data-astro-cid-w6x3tgij> <span class="progress-number" data-astro-cid-w6x3tgij>5</span> <span class="progress-label" data-astro-cid-w6x3tgij>En Producción</span> </div> </div> <div class="progress-card" data-astro-cid-w6x3tgij> <div class="progress-icon pending" data-astro-cid-w6x3tgij> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-w6x3tgij> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-w6x3tgij></path> </svg> </div> <div class="progress-details" data-astro-cid-w6x3tgij> <span class="progress-number" data-astro-cid-w6x3tgij>3</span> <span class="progress-label" data-astro-cid-w6x3tgij>Pendientes</span> </div> </div> </div> <div class="timeline" data-astro-cid-w6x3tgij> <h4 class="timeline-title" data-astro-cid-w6x3tgij>Cronograma de Hitos</h4> <div class="timeline-items" data-astro-cid-w6x3tgij> <div class="timeline-item completed" data-astro-cid-w6x3tgij> <div class="timeline-marker" data-astro-cid-w6x3tgij></div> <div class="timeline-content" data-astro-cid-w6x3tgij> <h5 data-astro-cid-w6x3tgij>Inicio de Obra</h5> <p data-astro-cid-w6x3tgij>${formatDate(obra.fecha_inicio)}</p> <span class="timeline-status" data-astro-cid-w6x3tgij>Completado</span> </div> </div> <div class="timeline-item active" data-astro-cid-w6x3tgij> <div class="timeline-marker" data-astro-cid-w6x3tgij></div> <div class="timeline-content" data-astro-cid-w6x3tgij> <h5 data-astro-cid-w6x3tgij>Desarrollo del Proyecto</h5> <p data-astro-cid-w6x3tgij>En progreso</p> <span class="timeline-status" data-astro-cid-w6x3tgij>En Progreso</span> </div> </div> <div class="timeline-item" data-astro-cid-w6x3tgij> <div class="timeline-marker" data-astro-cid-w6x3tgij></div> <div class="timeline-content" data-astro-cid-w6x3tgij> <h5 data-astro-cid-w6x3tgij>Finalización</h5> <p data-astro-cid-w6x3tgij>${formatDate(obra.fecha_fin)}</p> <span class="timeline-status" data-astro-cid-w6x3tgij>Pendiente</span> </div> </div> </div> </div> </div> </div> <div slot="history" class="detail-content" data-astro-cid-w6x3tgij> <div class="history-section" data-astro-cid-w6x3tgij> <h3 class="section-title" data-astro-cid-w6x3tgij>Historial de Cambios</h3> <div class="history-items" data-astro-cid-w6x3tgij> <div class="history-item" data-astro-cid-w6x3tgij> <div class="history-avatar" data-astro-cid-w6x3tgij>JM</div> <div class="history-content" data-astro-cid-w6x3tgij> <div class="history-header" data-astro-cid-w6x3tgij> <strong data-astro-cid-w6x3tgij>José Martínez</strong> <span class="history-action" data-astro-cid-w6x3tgij>actualizó el estado</span> <span class="history-time" data-astro-cid-w6x3tgij>hace 2 horas</span> </div> <p class="history-description" data-astro-cid-w6x3tgij>Estado cambiado a "En Progreso"</p> </div> </div> <div class="history-item" data-astro-cid-w6x3tgij> <div class="history-avatar" data-astro-cid-w6x3tgij>MR</div> <div class="history-content" data-astro-cid-w6x3tgij> <div class="history-header" data-astro-cid-w6x3tgij> <strong data-astro-cid-w6x3tgij>María Rodríguez</strong> <span class="history-action" data-astro-cid-w6x3tgij>creó la obra</span> <span class="history-time" data-astro-cid-w6x3tgij>hace 3 días</span> </div> <p class="history-description" data-astro-cid-w6x3tgij>Obra registrada en el sistema</p> </div> </div> </div> </div> </div> <div slot="files" class="detail-content" data-astro-cid-w6x3tgij> <div class="files-section" data-astro-cid-w6x3tgij> <h3 class="section-title" data-astro-cid-w6x3tgij>Documentos y Archivos</h3> <div class="files-upload" data-astro-cid-w6x3tgij> <button class="btn-upload" data-astro-cid-w6x3tgij> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-w6x3tgij> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" data-astro-cid-w6x3tgij></path> </svg>
Subir Archivo
</button> </div> <div class="files-list" data-astro-cid-w6x3tgij> <div class="file-item" data-astro-cid-w6x3tgij> <div class="file-icon pdf" data-astro-cid-w6x3tgij> <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-w6x3tgij> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-astro-cid-w6x3tgij></path> </svg> </div> <div class="file-details" data-astro-cid-w6x3tgij> <span class="file-name" data-astro-cid-w6x3tgij>Planos_Estructura_Principal.pdf</span> <span class="file-meta" data-astro-cid-w6x3tgij>2.4 MB • Subido hace 5 días</span> </div> <div class="file-actions" data-astro-cid-w6x3tgij> <button class="btn-file-action" title="Descargar" data-astro-cid-w6x3tgij> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-w6x3tgij> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-astro-cid-w6x3tgij></path> </svg> </button> <button class="btn-file-action" title="Eliminar" data-astro-cid-w6x3tgij> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-w6x3tgij> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" data-astro-cid-w6x3tgij></path> </svg> </button> </div> </div> </div> </div> </div> `;
}, "/Applications/XAMPP/xamppfiles/htdocs/AdminMontaje/src/components/detail/ObraDetail.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ObrasSection = createComponent(async ($$result, $$props, $$slots) => {
  const obras = await fetchObras();
  const obrasActivas = obras.filter((o) => o.estado !== "completada").length;
  const obrasCompletadas = obras.filter((o) => o.estado === "completada").length;
  const totalObras = obras.length;
  return renderTemplate(_a || (_a = __template(["", " ", '<div class="obras-section" data-astro-cid-v4u32k3q> <div class="stats-grid" data-astro-cid-v4u32k3q> <div class="stat-card" data-astro-cid-v4u32k3q> <div class="stat-icon obras" data-astro-cid-v4u32k3q> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-v4u32k3q> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" data-astro-cid-v4u32k3q></path> </svg> </div> <div class="stat-content" data-astro-cid-v4u32k3q> <div class="stat-number" data-astro-cid-v4u32k3q>', '</div> <div class="stat-label" data-astro-cid-v4u32k3q>Obras Activas</div> </div> </div> <div class="stat-card" data-astro-cid-v4u32k3q> <div class="stat-icon progress" data-astro-cid-v4u32k3q> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-v4u32k3q> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" data-astro-cid-v4u32k3q></path> </svg> </div> <div class="stat-content" data-astro-cid-v4u32k3q> <div class="stat-number" data-astro-cid-v4u32k3q>', '</div> <div class="stat-label" data-astro-cid-v4u32k3q>En Progreso</div> </div> </div> <div class="stat-card" data-astro-cid-v4u32k3q> <div class="stat-icon completed" data-astro-cid-v4u32k3q> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-v4u32k3q> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-v4u32k3q></path> </svg> </div> <div class="stat-content" data-astro-cid-v4u32k3q> <div class="stat-number" data-astro-cid-v4u32k3q>', '</div> <div class="stat-label" data-astro-cid-v4u32k3q>Obras Completadas</div> </div> </div> <div class="stat-card" data-astro-cid-v4u32k3q> <div class="stat-icon revenue" data-astro-cid-v4u32k3q> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-v4u32k3q> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" data-astro-cid-v4u32k3q></path> </svg> </div> <div class="stat-content" data-astro-cid-v4u32k3q> <div class="stat-number" data-astro-cid-v4u32k3q>', '</div> <div class="stat-label" data-astro-cid-v4u32k3q>Total Obras</div> </div> </div> </div> <div class="obras-table" data-astro-cid-v4u32k3q> <div class="table-header" data-astro-cid-v4u32k3q> <h3 data-astro-cid-v4u32k3q>Obras Registradas</h3> <div class="table-filters" data-astro-cid-v4u32k3q> <select class="filter-select" id="estado-filter" data-astro-cid-v4u32k3q> <option value="" data-astro-cid-v4u32k3q>Todas las obras</option> <option value="planificacion" data-astro-cid-v4u32k3q>Planificaci\xF3n</option> <option value="enprogreso" data-astro-cid-v4u32k3q>En progreso</option> <option value="pausada" data-astro-cid-v4u32k3q>Pausada</option> <option value="completada" data-astro-cid-v4u32k3q>Completadas</option> </select> <input type="text" class="filter-input" id="search-input" placeholder="Buscar por nombre o responsable..." data-astro-cid-v4u32k3q> </div> </div> ', " </div> </div> <!-- Modal para Nueva Obra --> ", " <!-- Modales de Detalles din\xE1micos --> ", `  <script type="module">
  // Filtros en tiempo real
  document.addEventListener('DOMContentLoaded', function() {
    const estadoFilter = document.getElementById('estado-filter');
    const searchInput = document.getElementById('search-input');
    const tableRows = document.querySelectorAll('.data-table tbody tr');

    function filterTable() {
      const estadoValue = estadoFilter.value.toLowerCase();
      const searchValue = searchInput.value.toLowerCase();

      tableRows.forEach(row => {
        const estado = row.querySelector('.status-badge').textContent.toLowerCase();
        const nombre = row.cells[0].textContent.toLowerCase();
        const responsable = row.cells[5].textContent.toLowerCase();

        const matchesEstado = !estadoValue || estado.includes(estadoValue.replace('_', ' '));
        const matchesSearch = !searchValue || 
          nombre.includes(searchValue) || 
          responsable.includes(searchValue);

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
<\/script>`])), renderComponent($$result, "PageHeader", $$PageHeader, { "title": "Gesti\xF3n de Obras", "subtitle": "Administra y controla todos los proyectos y obras en curso", "actionButton": { text: "Nueva Obra", onClick: "openModal('modal-nueva-obra')" }, "data-astro-cid-v4u32k3q": true }), maybeRenderHead(), obrasActivas, obras.filter((o) => o.estado === "enprogreso").length, obrasCompletadas, totalObras, renderComponent($$result, "TableObra", $$TableObra, { "obras": obras, "data-astro-cid-v4u32k3q": true }), renderComponent($$result, "Modal", $$Modal, { "id": "modal-nueva-obra", "title": "Nueva Obra", "size": "lg", "data-astro-cid-v4u32k3q": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ObrasForm", $$ObrasForm, { "data-astro-cid-v4u32k3q": true })} ` }), obras.map((obra) => renderTemplate`${renderComponent($$result, "DetailModal", $$DetailModal, { "id": `detail-obra-${obra.id}`, "title": obra.nombre, "type": "obra", "data-astro-cid-v4u32k3q": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ObraDetail", $$ObraDetail, { "obra": {
    id: obra.id,
    nombre: obra.nombre,
    estado: obra.estado,
    fecha_inicio: obra.fecha_inicio,
    fecha_fin: obra.fecha_fin,
    ubicacion: obra.ubicacion,
    responsable: obra.responsable,
    descripcion: obra.descripcion
  }, "data-astro-cid-v4u32k3q": true })} ` })}`));
}, "/Applications/XAMPP/xamppfiles/htdocs/AdminMontaje/src/components/sections/ObrasSection.astro", void 0);

export { $$ObrasSection as $ };
