import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BxYUwxS1.mjs';
import 'kleur/colors';
import { $ as $$AdminLayout } from '../chunks/PageHeader_DqTSEC0h.mjs';
import { $ as $$ObrasSection } from '../chunks/ObrasSection_CkcA-ouz.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Dashboard", "activeSection": "obras", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="dashboard-welcome" data-astro-cid-j7pv25f6> <div class="welcome-header" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Bienvenido al Panel de Administración</h1> <p data-astro-cid-j7pv25f6>Gestiona todos los aspectos de tu negocio desde un solo lugar</p> </div> <div class="quick-stats" data-astro-cid-j7pv25f6> <div class="stat-item" data-astro-cid-j7pv25f6> <div class="stat-icon obras" data-astro-cid-j7pv25f6> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" data-astro-cid-j7pv25f6></path> </svg> </div> <div class="stat-details" data-astro-cid-j7pv25f6> <span class="stat-number" data-astro-cid-j7pv25f6>24</span> <span class="stat-label" data-astro-cid-j7pv25f6>Obras Activas</span> </div> </div> <div class="stat-item" data-astro-cid-j7pv25f6> <div class="stat-icon operarios" data-astro-cid-j7pv25f6> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m9 5.197v1M13 7a4 4 0 11-8 0 4 4 0 018 0z" data-astro-cid-j7pv25f6></path> </svg> </div> <div class="stat-details" data-astro-cid-j7pv25f6> <span class="stat-number" data-astro-cid-j7pv25f6>45</span> <span class="stat-label" data-astro-cid-j7pv25f6>Operarios</span> </div> </div> <div class="stat-item" data-astro-cid-j7pv25f6> <div class="stat-icon piezas" data-astro-cid-j7pv25f6> <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" data-astro-cid-j7pv25f6></path> </svg> </div> <div class="stat-details" data-astro-cid-j7pv25f6> <span class="stat-number" data-astro-cid-j7pv25f6>1,234</span> <span class="stat-label" data-astro-cid-j7pv25f6>Piezas en Stock</span> </div> </div> </div> </div> ${renderComponent($$result2, "ObrasSection", $$ObrasSection, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "/home/project/src/pages/index.astro", void 0);

const $$file = "/home/project/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
