import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { N as NOOP_MIDDLEWARE_HEADER, h as decodeKey } from './chunks/astro/server_C9Kd2jCT.mjs';
import 'cookie';
import 'es-module-lexer';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/project/","cacheDir":"file:///home/project/node_modules/.astro/","outDir":"file:///home/project/dist/","srcDir":"file:///home/project/src/","publicDir":"file:///home/project/public/","buildClientDir":"file:///home/project/dist/client/","buildServerDir":"file:///home/project/dist/server/","adapterName":"","routes":[{"file":"file:///home/project/dist/admin/accesos/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/admin/accesos","isIndex":false,"type":"page","pattern":"^\\/admin\\/accesos\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"accesos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/accesos.astro","pathname":"/admin/accesos","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/project/dist/admin/chapas/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/admin/chapas","isIndex":false,"type":"page","pattern":"^\\/admin\\/chapas\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"chapas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/chapas.astro","pathname":"/admin/chapas","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/project/dist/admin/configuracion/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/admin/configuracion","isIndex":false,"type":"page","pattern":"^\\/admin\\/configuracion\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"configuracion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/configuracion.astro","pathname":"/admin/configuracion","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/project/dist/admin/conjuntos/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/admin/conjuntos","isIndex":false,"type":"page","pattern":"^\\/admin\\/conjuntos\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"conjuntos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/conjuntos.astro","pathname":"/admin/conjuntos","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/project/dist/admin/obras/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/admin/obras","isIndex":false,"type":"page","pattern":"^\\/admin\\/obras\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"obras","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/obras.astro","pathname":"/admin/obras","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/project/dist/admin/operarios/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/admin/operarios","isIndex":false,"type":"page","pattern":"^\\/admin\\/operarios\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"operarios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/operarios.astro","pathname":"/admin/operarios","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/project/dist/admin/piezas/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/admin/piezas","isIndex":false,"type":"page","pattern":"^\\/admin\\/piezas\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"piezas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/piezas.astro","pathname":"/admin/piezas","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/project/dist/admin/trazabilidad/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/admin/trazabilidad","isIndex":false,"type":"page","pattern":"^\\/admin\\/trazabilidad\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"trazabilidad","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/trazabilidad.astro","pathname":"/admin/trazabilidad","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/project/dist/api/chapas/create","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/chapas/create","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/chapas\\/create\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"chapas","dynamic":false,"spread":false}],[{"content":"create","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/chapas/create.js","pathname":"/api/chapas/create","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/project/dist/api/chapas/search","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/chapas/search","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/chapas\\/search\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"chapas","dynamic":false,"spread":false}],[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/chapas/search.js","pathname":"/api/chapas/search","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/project/dist/api/chapas","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/chapas","isIndex":true,"type":"endpoint","pattern":"^\\/api\\/chapas\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"chapas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/chapas/index.js","pathname":"/api/chapas","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/project/dist/api/conjuntos/create","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/conjuntos/create","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/conjuntos\\/create\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"conjuntos","dynamic":false,"spread":false}],[{"content":"create","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/conjuntos/create.js","pathname":"/api/conjuntos/create","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/project/dist/api/conjuntos/search","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/conjuntos/search","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/conjuntos\\/search\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"conjuntos","dynamic":false,"spread":false}],[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/conjuntos/search.js","pathname":"/api/conjuntos/search","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/project/dist/api/conjuntos","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/conjuntos","isIndex":true,"type":"endpoint","pattern":"^\\/api\\/conjuntos\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"conjuntos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/conjuntos/index.js","pathname":"/api/conjuntos","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/project/dist/api/obras/create","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/obras/create","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/obras\\/create\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"obras","dynamic":false,"spread":false}],[{"content":"create","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/obras/create.js","pathname":"/api/obras/create","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/project/dist/api/obras/search","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/obras/search","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/obras\\/search\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"obras","dynamic":false,"spread":false}],[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/obras/search.js","pathname":"/api/obras/search","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/project/dist/api/operarios/create","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/operarios/create","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/operarios\\/create\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"operarios","dynamic":false,"spread":false}],[{"content":"create","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/operarios/create.js","pathname":"/api/operarios/create","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/project/dist/api/operarios/search","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/operarios/search","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/operarios\\/search\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"operarios","dynamic":false,"spread":false}],[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/operarios/search.js","pathname":"/api/operarios/search","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/project/dist/api/operarios","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/operarios","isIndex":true,"type":"endpoint","pattern":"^\\/api\\/operarios\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"operarios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/operarios/index.js","pathname":"/api/operarios","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/project/dist/api/piezas/create","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/piezas/create","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/piezas\\/create\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"piezas","dynamic":false,"spread":false}],[{"content":"create","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/piezas/create.js","pathname":"/api/piezas/create","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/project/dist/api/piezas/import-csv","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/piezas/import-csv","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/piezas\\/import-csv\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"piezas","dynamic":false,"spread":false}],[{"content":"import-csv","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/piezas/import-csv.js","pathname":"/api/piezas/import-csv","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/project/dist/api/piezas/search","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/piezas/search","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/piezas\\/search\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"piezas","dynamic":false,"spread":false}],[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/piezas/search.js","pathname":"/api/piezas/search","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/project/dist/api/piezas","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/piezas","isIndex":true,"type":"endpoint","pattern":"^\\/api\\/piezas\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"piezas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/piezas/index.js","pathname":"/api/piezas","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/project/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/project/src/pages/admin/accesos.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/admin/chapas.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/admin/configuracion.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/admin/conjuntos.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/admin/obras.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/admin/operarios.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/admin/piezas.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/admin/trazabilidad.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/admin/accesos@_@astro":"pages/admin/accesos.astro.mjs","\u0000@astro-page:src/pages/admin/chapas@_@astro":"pages/admin/chapas.astro.mjs","\u0000@astro-page:src/pages/admin/configuracion@_@astro":"pages/admin/configuracion.astro.mjs","\u0000@astro-page:src/pages/admin/conjuntos@_@astro":"pages/admin/conjuntos.astro.mjs","\u0000@astro-page:src/pages/admin/obras@_@astro":"pages/admin/obras.astro.mjs","\u0000@astro-page:src/pages/admin/operarios@_@astro":"pages/admin/operarios.astro.mjs","\u0000@astro-page:src/pages/admin/piezas@_@astro":"pages/admin/piezas.astro.mjs","\u0000@astro-page:src/pages/admin/trazabilidad@_@astro":"pages/admin/trazabilidad.astro.mjs","\u0000@astro-page:src/pages/api/chapas/create@_@js":"pages/api/chapas/create.astro.mjs","\u0000@astro-page:src/pages/api/chapas/search@_@js":"pages/api/chapas/search.astro.mjs","\u0000@astro-page:src/pages/api/chapas/[id]@_@js":"pages/api/chapas/_id_.astro.mjs","\u0000@astro-page:src/pages/api/chapas/index@_@js":"pages/api/chapas.astro.mjs","\u0000@astro-page:src/pages/api/conjuntos/create@_@js":"pages/api/conjuntos/create.astro.mjs","\u0000@astro-page:src/pages/api/conjuntos/search@_@js":"pages/api/conjuntos/search.astro.mjs","\u0000@astro-page:src/pages/api/conjuntos/[id]@_@js":"pages/api/conjuntos/_id_.astro.mjs","\u0000@astro-page:src/pages/api/conjuntos/index@_@js":"pages/api/conjuntos.astro.mjs","\u0000@astro-page:src/pages/api/obras/create@_@js":"pages/api/obras/create.astro.mjs","\u0000@astro-page:src/pages/api/obras/search@_@js":"pages/api/obras/search.astro.mjs","\u0000@astro-page:src/pages/api/obras/[id]@_@js":"pages/api/obras/_id_.astro.mjs","\u0000@astro-page:src/pages/api/operarios/create@_@js":"pages/api/operarios/create.astro.mjs","\u0000@astro-page:src/pages/api/operarios/search@_@js":"pages/api/operarios/search.astro.mjs","\u0000@astro-page:src/pages/api/operarios/[id]@_@js":"pages/api/operarios/_id_.astro.mjs","\u0000@astro-page:src/pages/api/operarios/index@_@js":"pages/api/operarios.astro.mjs","\u0000@astro-page:src/pages/api/piezas/create@_@js":"pages/api/piezas/create.astro.mjs","\u0000@astro-page:src/pages/api/piezas/import-csv@_@js":"pages/api/piezas/import-csv.astro.mjs","\u0000@astro-page:src/pages/api/piezas/search@_@js":"pages/api/piezas/search.astro.mjs","\u0000@astro-page:src/pages/api/piezas/[id]@_@js":"pages/api/piezas/_id_.astro.mjs","\u0000@astro-page:src/pages/api/piezas/index@_@js":"pages/api/piezas.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_CbWKkV4B.mjs","/home/project/src/layouts/AdminLayout.astro?astro&type=script&index=0&lang.ts":"_astro/AdminLayout.astro_astro_type_script_index_0_lang.BjVjCbzL.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///home/project/dist/admin/accesos/index.html","/file:///home/project/dist/admin/chapas/index.html","/file:///home/project/dist/admin/configuracion/index.html","/file:///home/project/dist/admin/conjuntos/index.html","/file:///home/project/dist/admin/obras/index.html","/file:///home/project/dist/admin/operarios/index.html","/file:///home/project/dist/admin/piezas/index.html","/file:///home/project/dist/admin/trazabilidad/index.html","/file:///home/project/dist/api/chapas/create","/file:///home/project/dist/api/chapas/search","/file:///home/project/dist/api/chapas","/file:///home/project/dist/api/conjuntos/create","/file:///home/project/dist/api/conjuntos/search","/file:///home/project/dist/api/conjuntos","/file:///home/project/dist/api/obras/create","/file:///home/project/dist/api/obras/search","/file:///home/project/dist/api/operarios/create","/file:///home/project/dist/api/operarios/search","/file:///home/project/dist/api/operarios","/file:///home/project/dist/api/piezas/create","/file:///home/project/dist/api/piezas/import-csv","/file:///home/project/dist/api/piezas/search","/file:///home/project/dist/api/piezas","/file:///home/project/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"XJE7OOiEIhkBWB08xK/m0fgOvTtdqVXoJVSxMx2yCsw="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
