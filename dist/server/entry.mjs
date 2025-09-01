import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Q8SBv1ks.mjs';
import { manifest } from './manifest_BbTOk5J2.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin/accesos.astro.mjs');
const _page2 = () => import('./pages/admin/chapas.astro.mjs');
const _page3 = () => import('./pages/admin/configuracion.astro.mjs');
const _page4 = () => import('./pages/admin/conjuntos.astro.mjs');
const _page5 = () => import('./pages/admin/obras.astro.mjs');
const _page6 = () => import('./pages/admin/operarios.astro.mjs');
const _page7 = () => import('./pages/admin/piezas.astro.mjs');
const _page8 = () => import('./pages/admin/trazabilidad.astro.mjs');
const _page9 = () => import('./pages/api/chapas/create.astro.mjs');
const _page10 = () => import('./pages/api/chapas/import-csv.astro.mjs');
const _page11 = () => import('./pages/api/chapas/search.astro.mjs');
const _page12 = () => import('./pages/api/chapas/_id_/cut.astro.mjs');
const _page13 = () => import('./pages/api/chapas/_id_.astro.mjs');
const _page14 = () => import('./pages/api/chapas.astro.mjs');
const _page15 = () => import('./pages/api/conjuntos/create.astro.mjs');
const _page16 = () => import('./pages/api/conjuntos/search.astro.mjs');
const _page17 = () => import('./pages/api/conjuntos/update-fases.astro.mjs');
const _page18 = () => import('./pages/api/conjuntos/_id_.astro.mjs');
const _page19 = () => import('./pages/api/conjuntos.astro.mjs');
const _page20 = () => import('./pages/api/fase_conjuntos/create.astro.mjs');
const _page21 = () => import('./pages/api/fase_conjuntos/_id_.astro.mjs');
const _page22 = () => import('./pages/api/fase_conjuntos.astro.mjs');
const _page23 = () => import('./pages/api/fase_piezas/create.astro.mjs');
const _page24 = () => import('./pages/api/fase_piezas/_id_.astro.mjs');
const _page25 = () => import('./pages/api/fase_piezas.astro.mjs');
const _page26 = () => import('./pages/api/fases/get.astro.mjs');
const _page27 = () => import('./pages/api/obras/create.astro.mjs');
const _page28 = () => import('./pages/api/obras/search.astro.mjs');
const _page29 = () => import('./pages/api/obras/_id_.astro.mjs');
const _page30 = () => import('./pages/api/operarios/create.astro.mjs');
const _page31 = () => import('./pages/api/operarios/search.astro.mjs');
const _page32 = () => import('./pages/api/operarios/_id_.astro.mjs');
const _page33 = () => import('./pages/api/operarios.astro.mjs');
const _page34 = () => import('./pages/api/piezas/create.astro.mjs');
const _page35 = () => import('./pages/api/piezas/import-csv.astro.mjs');
const _page36 = () => import('./pages/api/piezas/search.astro.mjs');
const _page37 = () => import('./pages/api/piezas/_id_.astro.mjs');
const _page38 = () => import('./pages/api/piezas.astro.mjs');
const _page39 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/admin/accesos.astro", _page1],
    ["src/pages/admin/chapas.astro", _page2],
    ["src/pages/admin/configuracion.astro", _page3],
    ["src/pages/admin/conjuntos.astro", _page4],
    ["src/pages/admin/obras.astro", _page5],
    ["src/pages/admin/operarios.astro", _page6],
    ["src/pages/admin/piezas.astro", _page7],
    ["src/pages/admin/trazabilidad.astro", _page8],
    ["src/pages/api/chapas/create.js", _page9],
    ["src/pages/api/chapas/import-csv.js", _page10],
    ["src/pages/api/chapas/search.js", _page11],
    ["src/pages/api/chapas/[id]/cut.js", _page12],
    ["src/pages/api/chapas/[id].js", _page13],
    ["src/pages/api/chapas/index.js", _page14],
    ["src/pages/api/conjuntos/create.js", _page15],
    ["src/pages/api/conjuntos/search.js", _page16],
    ["src/pages/api/conjuntos/update-fases.js", _page17],
    ["src/pages/api/conjuntos/[id].js", _page18],
    ["src/pages/api/conjuntos/index.js", _page19],
    ["src/pages/api/fase_conjuntos/create.js", _page20],
    ["src/pages/api/fase_conjuntos/[id].js", _page21],
    ["src/pages/api/fase_conjuntos/index.js", _page22],
    ["src/pages/api/fase_piezas/create.js", _page23],
    ["src/pages/api/fase_piezas/[id].js", _page24],
    ["src/pages/api/fase_piezas/index.js", _page25],
    ["src/pages/api/fases/get.js", _page26],
    ["src/pages/api/obras/create.js", _page27],
    ["src/pages/api/obras/search.js", _page28],
    ["src/pages/api/obras/[id].js", _page29],
    ["src/pages/api/operarios/create.js", _page30],
    ["src/pages/api/operarios/search.js", _page31],
    ["src/pages/api/operarios/[id].js", _page32],
    ["src/pages/api/operarios/index.js", _page33],
    ["src/pages/api/piezas/create.js", _page34],
    ["src/pages/api/piezas/import-csv.js", _page35],
    ["src/pages/api/piezas/search.js", _page36],
    ["src/pages/api/piezas/[id].js", _page37],
    ["src/pages/api/piezas/index.js", _page38],
    ["src/pages/index.astro", _page39]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///Applications/XAMPP/xamppfiles/htdocs/AdminMontaje/dist/client/",
    "server": "file:///Applications/XAMPP/xamppfiles/htdocs/AdminMontaje/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro",
    "experimentalStaticHeaders": false
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
