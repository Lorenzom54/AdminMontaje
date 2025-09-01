import { e as createComponent, k as renderComponent, r as renderTemplate } from '../../chunks/astro/server_B5z0SCK9.mjs';
import 'kleur/colors';
import { $ as $$AdminLayout } from '../../chunks/PageHeader_B1Q6qJIn.mjs';
import { $ as $$ObrasSection } from '../../chunks/ObrasSection_BdaeVvW7.mjs';
export { renderers } from '../../renderers.mjs';

const $$Obras = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Obras", "activeSection": "obras" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ObrasSection", $$ObrasSection, {})} ` })}`;
}, "/Applications/XAMPP/xamppfiles/htdocs/AdminMontaje/src/pages/admin/obras.astro", void 0);

const $$file = "/Applications/XAMPP/xamppfiles/htdocs/AdminMontaje/src/pages/admin/obras.astro";
const $$url = "/admin/obras";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Obras,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
