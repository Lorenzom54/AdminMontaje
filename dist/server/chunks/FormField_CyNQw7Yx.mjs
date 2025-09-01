import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, q as renderSlot, r as renderTemplate } from './astro/server_B5z0SCK9.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro$1 = createAstro();
const $$Modal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Modal;
  const { id, title, size = "md" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")}${addAttribute(`modal modal-${size}`, "class")} data-astro-cid-qmzm2soj> <div class="modal-backdrop" data-astro-cid-qmzm2soj></div> <div class="modal-container" data-astro-cid-qmzm2soj> <div class="modal-header" data-astro-cid-qmzm2soj> <h2 class="modal-title" data-astro-cid-qmzm2soj>${title}</h2> <button class="modal-close"${addAttribute(id, "data-close-modal")} data-astro-cid-qmzm2soj> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-qmzm2soj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-qmzm2soj></path> </svg> </button> </div> <div class="modal-body" data-astro-cid-qmzm2soj> ${renderSlot($$result, $$slots["default"])} </div> </div> </div> `;
}, "/Applications/XAMPP/xamppfiles/htdocs/AdminMontaje/src/components/Modal.astro", void 0);

const $$Astro = createAstro();
const $$FormField = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
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
}, "/Applications/XAMPP/xamppfiles/htdocs/AdminMontaje/src/components/forms/FormField.astro", void 0);

export { $$FormField as $, $$Modal as a };
