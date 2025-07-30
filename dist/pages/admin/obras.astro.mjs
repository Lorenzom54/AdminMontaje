import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_C9Kd2jCT.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$AdminLayout } from '../../chunks/PageHeader_D8-LSaEg.mjs';
import { $ as $$ObrasSection } from '../../chunks/ObrasSection_CKtF1P_U.mjs';
export { renderers } from '../../renderers.mjs';

const $$Obras = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Obras", "activeSection": "obras" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ObrasSection", $$ObrasSection, {})} ` })}`;
}, "/home/project/src/pages/admin/obras.astro", void 0);

const $$file = "/home/project/src/pages/admin/obras.astro";
const $$url = "/admin/obras";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Obras,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
