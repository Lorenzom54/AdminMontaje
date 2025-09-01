import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B5z0SCK9.mjs';
import 'kleur/colors';
import { $ as $$AdminLayout } from '../chunks/PageHeader_B1Q6qJIn.mjs';
import { $ as $$ObrasSection } from '../chunks/ObrasSection_BdaeVvW7.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Dashboard", "activeSection": "obras", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="dashboard-welcome" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "ObrasSection", $$ObrasSection, { "data-astro-cid-j7pv25f6": true })} </div> ` })}`;
}, "/Applications/XAMPP/xamppfiles/htdocs/AdminMontaje/src/pages/index.astro", void 0);

const $$file = "/Applications/XAMPP/xamppfiles/htdocs/AdminMontaje/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
