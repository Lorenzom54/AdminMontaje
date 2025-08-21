import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BxYUwxS1.mjs';
import 'kleur/colors';
import { $ as $$AdminLayout, a as $$PageHeader } from '../../chunks/PageHeader_D7LDH3qQ.mjs';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

const $$Accesos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Accesos", "activeSection": "accesos", "data-astro-cid-3sbsvduf": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Control de Accesos", "subtitle": "Gesti\xF3n de permisos y seguridad del sistema", "actionButton": { text: "Nuevo Usuario", href: "#" }, "data-astro-cid-3sbsvduf": true })} ${maybeRenderHead()}<div class="accesos-content" data-astro-cid-3sbsvduf> <div class="content-placeholder" data-astro-cid-3sbsvduf> <div class="placeholder-icon" data-astro-cid-3sbsvduf> <svg width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3sbsvduf> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" data-astro-cid-3sbsvduf></path> </svg> </div> <h3 data-astro-cid-3sbsvduf>Sección de Accesos</h3> <p data-astro-cid-3sbsvduf>Control de usuarios, roles y permisos de acceso al sistema.</p> </div> </div> ` })} `;
}, "/Applications/XAMPP/xamppfiles/htdocs/AdminMontaje/src/pages/admin/accesos.astro", void 0);

const $$file = "/Applications/XAMPP/xamppfiles/htdocs/AdminMontaje/src/pages/admin/accesos.astro";
const $$url = "/admin/accesos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Accesos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
