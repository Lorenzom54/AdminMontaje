import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, q as renderSlot, r as renderTemplate } from './astro/server_BxYUwxS1.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro$2 = createAstro();
const $$Modal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Modal;
  const { id, title, size = "md" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")}${addAttribute(`modal modal-${size}`, "class")} data-astro-cid-qmzm2soj> <div class="modal-backdrop" data-astro-cid-qmzm2soj></div> <div class="modal-container" data-astro-cid-qmzm2soj> <div class="modal-header" data-astro-cid-qmzm2soj> <h2 class="modal-title" data-astro-cid-qmzm2soj>${title}</h2> <button class="modal-close"${addAttribute(id, "data-close-modal")} data-astro-cid-qmzm2soj> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-qmzm2soj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-qmzm2soj></path> </svg> </button> </div> <div class="modal-body" data-astro-cid-qmzm2soj> ${renderSlot($$result, $$slots["default"])} </div> </div> </div> `;
}, "/home/project/src/components/Modal.astro", void 0);

const $$Astro$1 = createAstro();
const $$FormField = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FormField;
  const {
    label,
    name,
    type = "text",
    required = false,
    placeholder,
    value = "",
    options,
    rows = 3,
    help
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="form-field" data-astro-cid-nn45c2qd> <label class="form-label"${addAttribute(name, "for")} data-astro-cid-nn45c2qd> ${label} ${required && renderTemplate`<span class="required" data-astro-cid-nn45c2qd>*</span>`} </label> ${type === "select" && options ? renderTemplate`<select class="form-input"${addAttribute(name, "name")}${addAttribute(name, "id")}${addAttribute(required, "required")} data-astro-cid-nn45c2qd> <option value="" data-astro-cid-nn45c2qd>Seleccionar...</option> ${options.map((option) => renderTemplate`<option${addAttribute(option.value, "value")}${addAttribute(value === option.value, "selected")} data-astro-cid-nn45c2qd> ${option.label} </option>`)} </select>` : type === "textarea" ? renderTemplate`<textarea class="form-input"${addAttribute(name, "name")}${addAttribute(name, "id")}${addAttribute(rows, "rows")}${addAttribute(placeholder, "placeholder")}${addAttribute(required, "required")} data-astro-cid-nn45c2qd>${value}</textarea>` : renderTemplate`<input class="form-input"${addAttribute(type, "type")}${addAttribute(name, "name")}${addAttribute(name, "id")}${addAttribute(placeholder, "placeholder")}${addAttribute(value, "value")}${addAttribute(required, "required")} data-astro-cid-nn45c2qd>`} ${help && renderTemplate`<p class="form-help" data-astro-cid-nn45c2qd>${help}</p>`} </div> `;
}, "/home/project/src/components/forms/FormField.astro", void 0);

const $$Astro = createAstro();
const $$DetailModal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DetailModal;
  const { id, title, type } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")} class="modal modal-xl detail-modal" data-astro-cid-bit2iklq> <div class="modal-backdrop" data-astro-cid-bit2iklq></div> <div class="modal-container" data-astro-cid-bit2iklq> <div class="modal-header" data-astro-cid-bit2iklq> <h2 class="modal-title" data-astro-cid-bit2iklq>${title}</h2> <div class="header-actions" data-astro-cid-bit2iklq> <button class="btn-edit" data-edit-mode="toggle" data-astro-cid-bit2iklq> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-bit2iklq> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" data-astro-cid-bit2iklq></path> </svg>
Editar
</button> <button class="modal-close"${addAttribute(id, "data-close-modal")} data-astro-cid-bit2iklq> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-bit2iklq> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-bit2iklq></path> </svg> </button> </div> </div> <div class="modal-body" data-astro-cid-bit2iklq> <div class="detail-tabs" data-astro-cid-bit2iklq> <button class="tab-button active" data-tab="general" data-astro-cid-bit2iklq> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-bit2iklq> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-bit2iklq></path> </svg>
General
</button> <button class="tab-button" data-tab="progress" data-astro-cid-bit2iklq> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-bit2iklq> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" data-astro-cid-bit2iklq></path> </svg>
Progreso
</button> <button class="tab-button" data-tab="history" data-astro-cid-bit2iklq> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-bit2iklq> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-bit2iklq></path> </svg>
Historial
</button> <button class="tab-button" data-tab="files" data-astro-cid-bit2iklq> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-bit2iklq> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-astro-cid-bit2iklq></path> </svg>
Archivos
</button> </div> <div class="tab-content" data-astro-cid-bit2iklq> <div class="tab-panel active" data-panel="general" data-astro-cid-bit2iklq> ${renderSlot($$result, $$slots["general"])} </div> <div class="tab-panel" data-panel="progress" data-astro-cid-bit2iklq> ${renderSlot($$result, $$slots["progress"])} </div> <div class="tab-panel" data-panel="history" data-astro-cid-bit2iklq> ${renderSlot($$result, $$slots["history"])} </div> <div class="tab-panel" data-panel="files" data-astro-cid-bit2iklq> ${renderSlot($$result, $$slots["files"])} </div> </div> </div> <div class="modal-footer" data-astro-cid-bit2iklq> <div class="footer-actions view-mode" data-astro-cid-bit2iklq> <button class="btn-secondary"${addAttribute(id, "data-close-modal")} data-astro-cid-bit2iklq>Cerrar</button> <button class="btn-primary" data-edit-mode="enable" data-astro-cid-bit2iklq> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-bit2iklq> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" data-astro-cid-bit2iklq></path> </svg>
Editar
</button> </div> <div class="footer-actions edit-mode" style="display: none;" data-astro-cid-bit2iklq> <button class="btn-secondary" data-edit-mode="cancel" data-astro-cid-bit2iklq>Cancelar</button> <button class="btn-primary" data-edit-mode="save" data-astro-cid-bit2iklq> <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-bit2iklq> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-bit2iklq></path> </svg>
Guardar Cambios
</button> </div> </div> </div> </div> `;
}, "/home/project/src/components/DetailModal.astro", void 0);

export { $$FormField as $, $$DetailModal as a, $$Modal as b };
