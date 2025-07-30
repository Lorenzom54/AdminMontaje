import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BxYUwxS1.mjs';
import 'kleur/colors';
import { $ as $$AdminLayout, a as $$PageHeader } from '../../chunks/PageHeader_DqTSEC0h.mjs';
/* empty css                                           */
export { renderers } from '../../renderers.mjs';

const $$Trazabilidad = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Trazabilidad", "activeSection": "trazabilidad", "data-astro-cid-sgd3uohf": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Sistema de Trazabilidad", "subtitle": "Seguimiento completo de procesos y movimientos", "actionButton": { text: "Generar Reporte", href: "#" }, "data-astro-cid-sgd3uohf": true })} ${maybeRenderHead()}<div class="trazabilidad-content" data-astro-cid-sgd3uohf> <div class="content-placeholder" data-astro-cid-sgd3uohf> <div class="placeholder-icon" data-astro-cid-sgd3uohf> <svg width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-sgd3uohf> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" data-astro-cid-sgd3uohf></path> </svg> </div> <h3 data-astro-cid-sgd3uohf>Sección de Trazabilidad</h3> <p data-astro-cid-sgd3uohf>Historial completo de movimientos, cambios y procesos en el sistema.</p> </div> </div> ` })} `;
}, "/home/project/src/pages/admin/trazabilidad.astro", void 0);

const $$file = "/home/project/src/pages/admin/trazabilidad.astro";
const $$url = "/admin/trazabilidad";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Trazabilidad,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
