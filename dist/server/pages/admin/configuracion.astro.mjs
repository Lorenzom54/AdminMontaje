import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BxYUwxS1.mjs';
import 'kleur/colors';
import { $ as $$AdminLayout, a as $$PageHeader } from '../../chunks/PageHeader_DqTSEC0h.mjs';
/* empty css                                            */
export { renderers } from '../../renderers.mjs';

const $$Configuracion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Configuraci\xF3n", "activeSection": "configuracion", "data-astro-cid-6kdlctd2": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Configuraci\xF3n del Sistema", "subtitle": "Ajustes generales y par\xE1metros de la aplicaci\xF3n", "data-astro-cid-6kdlctd2": true })} ${maybeRenderHead()}<div class="configuracion-content" data-astro-cid-6kdlctd2> <div class="content-placeholder" data-astro-cid-6kdlctd2> <div class="placeholder-icon" data-astro-cid-6kdlctd2> <svg width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-6kdlctd2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" data-astro-cid-6kdlctd2></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-6kdlctd2></path> </svg> </div> <h3 data-astro-cid-6kdlctd2>Sección de Configuración</h3> <p data-astro-cid-6kdlctd2>Personaliza y ajusta los parámetros del sistema según tus necesidades.</p> </div> </div> ` })} `;
}, "/home/project/src/pages/admin/configuracion.astro", void 0);

const $$file = "/home/project/src/pages/admin/configuracion.astro";
const $$url = "/admin/configuracion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Configuracion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
