/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/page";
exports.ids = ["app/page"];
exports.modules = {

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fpage&page=%2Fpage&appPaths=%2Fpage&pagePath=private-next-app-dir%2Fpage.tsx&appDir=%2Fapp%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fpage&page=%2Fpage&appPaths=%2Fpage&pagePath=private-next-app-dir%2Fpage.tsx&appDir=%2Fapp%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),\n/* harmony export */   __next_app__: () => (/* binding */ __next_app__),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   pages: () => (/* binding */ pages),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   tree: () => (/* binding */ tree)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-page/module.compiled */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/module.compiled.js?9100\");\n/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/client/components/error-boundary */ \"(rsc)/./node_modules/next/dist/client/components/error-boundary.js\");\n/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/server/app-render/entry-base */ \"(rsc)/./node_modules/next/dist/server/app-render/entry-base.js\");\n/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if([\"default\",\"tree\",\"pages\",\"GlobalError\",\"originalPathname\",\"__next_app__\",\"routeModule\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\"TURBOPACK { transition: next-ssr }\";\n\n\n// We inject the tree and pages here so that we can use them in the route\n// module.\nconst tree = {\n        children: [\n        '',\n        {\n        children: ['__PAGE__', {}, {\n          page: [() => Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./src/app/page.tsx */ \"(rsc)/./src/app/page.tsx\")), \"/app/src/app/page.tsx\"],\n          metadata: {\n    icon: [(async (props) => (await Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! next-metadata-image-loader?type=favicon&segment=&basePath=&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./src/app/favicon.ico?__next_metadata__ */ \"(rsc)/./node_modules/next/dist/build/webpack/loaders/next-metadata-image-loader.js?type=favicon&segment=&basePath=&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./src/app/favicon.ico?__next_metadata__\"))).default(props))],\n    apple: [],\n    openGraph: [],\n    twitter: [],\n    manifest: undefined\n  }\n        }]\n      },\n        {\n        'layout': [() => Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./src/app/layout.tsx */ \"(rsc)/./src/app/layout.tsx\")), \"/app/src/app/layout.tsx\"],\n'not-found': [() => Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! next/dist/client/components/not-found-error */ \"(rsc)/./node_modules/next/dist/client/components/not-found-error.js\", 23)), \"next/dist/client/components/not-found-error\"],\n        metadata: {\n    icon: [(async (props) => (await Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! next-metadata-image-loader?type=favicon&segment=&basePath=&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./src/app/favicon.ico?__next_metadata__ */ \"(rsc)/./node_modules/next/dist/build/webpack/loaders/next-metadata-image-loader.js?type=favicon&segment=&basePath=&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./src/app/favicon.ico?__next_metadata__\"))).default(props))],\n    apple: [],\n    openGraph: [],\n    twitter: [],\n    manifest: undefined\n  }\n      }\n      ]\n      }.children;\nconst pages = [\"/app/src/app/page.tsx\"];\n\n\nconst __next_app_require__ = __webpack_require__\nconst __next_app_load_chunk__ = () => Promise.resolve()\nconst originalPathname = \"/page\";\nconst __next_app__ = {\n    require: __next_app_require__,\n    loadChunk: __next_app_load_chunk__\n};\n\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,\n        page: \"/page\",\n        pathname: \"/\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\",\n        appPaths: []\n    },\n    userland: {\n        loaderTree: tree\n    }\n});\n\n//# sourceMappingURL=app-page.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZwYWdlJnBhZ2U9JTJGcGFnZSZhcHBQYXRocz0lMkZwYWdlJnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGcGFnZS50c3gmYXBwRGlyPSUyRmFwcCUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGYXBwJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsYUFBYSxzQkFBc0I7QUFDaUU7QUFDckM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLHVCQUF1QixnSkFBMEQ7QUFDakY7QUFDQSxvQ0FBb0Msc2ZBQW9OO0FBQ3hQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EseUJBQXlCLG9KQUE0RDtBQUNyRixvQkFBb0IsME5BQWdGO0FBQ3BHO0FBQ0Esb0NBQW9DLHNmQUFvTjtBQUN4UDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUN1QjtBQUM2RDtBQUNwRiw2QkFBNkIsbUJBQW1CO0FBQ2hEO0FBQ087QUFDQTtBQUNQO0FBQ0E7QUFDQTtBQUN1RDtBQUN2RDtBQUNPLHdCQUF3Qiw4R0FBa0I7QUFDakQ7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvPzU0NGIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJUVVJCT1BBQ0sgeyB0cmFuc2l0aW9uOiBuZXh0LXNzciB9XCI7XG5pbXBvcnQgeyBBcHBQYWdlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcGFnZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG4vLyBXZSBpbmplY3QgdGhlIHRyZWUgYW5kIHBhZ2VzIGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCB0cmVlID0ge1xuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAnJyxcbiAgICAgICAge1xuICAgICAgICBjaGlsZHJlbjogWydfX1BBR0VfXycsIHt9LCB7XG4gICAgICAgICAgcGFnZTogWygpID0+IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovIFwiL2FwcC9zcmMvYXBwL3BhZ2UudHN4XCIpLCBcIi9hcHAvc3JjL2FwcC9wYWdlLnRzeFwiXSxcbiAgICAgICAgICBtZXRhZGF0YToge1xuICAgIGljb246IFsoYXN5bmMgKHByb3BzKSA9PiAoYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gXCJuZXh0LW1ldGFkYXRhLWltYWdlLWxvYWRlcj90eXBlPWZhdmljb24mc2VnbWVudD0mYmFzZVBhdGg9JnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMhL2FwcC9zcmMvYXBwL2Zhdmljb24uaWNvP19fbmV4dF9tZXRhZGF0YV9fXCIpKS5kZWZhdWx0KHByb3BzKSldLFxuICAgIGFwcGxlOiBbXSxcbiAgICBvcGVuR3JhcGg6IFtdLFxuICAgIHR3aXR0ZXI6IFtdLFxuICAgIG1hbmlmZXN0OiB1bmRlZmluZWRcbiAgfVxuICAgICAgICB9XVxuICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAnbGF5b3V0JzogWygpID0+IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovIFwiL2FwcC9zcmMvYXBwL2xheW91dC50c3hcIiksIFwiL2FwcC9zcmMvYXBwL2xheW91dC50c3hcIl0sXG4nbm90LWZvdW5kJzogWygpID0+IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovIFwibmV4dC9kaXN0L2NsaWVudC9jb21wb25lbnRzL25vdC1mb3VuZC1lcnJvclwiKSwgXCJuZXh0L2Rpc3QvY2xpZW50L2NvbXBvbmVudHMvbm90LWZvdW5kLWVycm9yXCJdLFxuICAgICAgICBtZXRhZGF0YToge1xuICAgIGljb246IFsoYXN5bmMgKHByb3BzKSA9PiAoYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gXCJuZXh0LW1ldGFkYXRhLWltYWdlLWxvYWRlcj90eXBlPWZhdmljb24mc2VnbWVudD0mYmFzZVBhdGg9JnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMhL2FwcC9zcmMvYXBwL2Zhdmljb24uaWNvP19fbmV4dF9tZXRhZGF0YV9fXCIpKS5kZWZhdWx0KHByb3BzKSldLFxuICAgIGFwcGxlOiBbXSxcbiAgICBvcGVuR3JhcGg6IFtdLFxuICAgIHR3aXR0ZXI6IFtdLFxuICAgIG1hbmlmZXN0OiB1bmRlZmluZWRcbiAgfVxuICAgICAgfVxuICAgICAgXVxuICAgICAgfS5jaGlsZHJlbjtcbmNvbnN0IHBhZ2VzID0gW1wiL2FwcC9zcmMvYXBwL3BhZ2UudHN4XCJdO1xuZXhwb3J0IHsgdHJlZSwgcGFnZXMgfTtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR2xvYmFsRXJyb3IgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9jb21wb25lbnRzL2Vycm9yLWJvdW5kYXJ5XCI7XG5jb25zdCBfX25leHRfYXBwX3JlcXVpcmVfXyA9IF9fd2VicGFja19yZXF1aXJlX19cbmNvbnN0IF9fbmV4dF9hcHBfbG9hZF9jaHVua19fID0gKCkgPT4gUHJvbWlzZS5yZXNvbHZlKClcbmV4cG9ydCBjb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvcGFnZVwiO1xuZXhwb3J0IGNvbnN0IF9fbmV4dF9hcHBfXyA9IHtcbiAgICByZXF1aXJlOiBfX25leHRfYXBwX3JlcXVpcmVfXyxcbiAgICBsb2FkQ2h1bms6IF9fbmV4dF9hcHBfbG9hZF9jaHVua19fXG59O1xuZXhwb3J0ICogZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvYXBwLXJlbmRlci9lbnRyeS1iYXNlXCI7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBQYWdlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9QQUdFLFxuICAgICAgICBwYWdlOiBcIi9wYWdlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9cIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiBcIlwiLFxuICAgICAgICBmaWxlbmFtZTogXCJcIixcbiAgICAgICAgYXBwUGF0aHM6IFtdXG4gICAgfSxcbiAgICB1c2VybGFuZDoge1xuICAgICAgICBsb2FkZXJUcmVlOiB0cmVlXG4gICAgfVxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1wYWdlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fpage&page=%2Fpage&appPaths=%2Fpage&pagePath=private-next-app-dir%2Fpage.tsx&appDir=%2Fapp%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fapp-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fclient-page.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Ferror-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Flayout-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fnot-found-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Frender-from-template-context.js%22%2C%22ids%22%3A%5B%5D%7D&server=true!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fapp-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fclient-page.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Ferror-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Flayout-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fnot-found-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Frender-from-template-context.js%22%2C%22ids%22%3A%5B%5D%7D&server=true! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/app-router.js */ \"(ssr)/./node_modules/next/dist/client/components/app-router.js\", 23));\n;\nPromise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/client-page.js */ \"(ssr)/./node_modules/next/dist/client/components/client-page.js\", 23));\n;\nPromise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/error-boundary.js */ \"(ssr)/./node_modules/next/dist/client/components/error-boundary.js\", 23));\n;\nPromise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/layout-router.js */ \"(ssr)/./node_modules/next/dist/client/components/layout-router.js\", 23));\n;\nPromise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/not-found-boundary.js */ \"(ssr)/./node_modules/next/dist/client/components/not-found-boundary.js\", 23));\n;\nPromise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/render-from-template-context.js */ \"(ssr)/./node_modules/next/dist/client/components/render-from-template-context.js\", 23));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWZsaWdodC1jbGllbnQtZW50cnktbG9hZGVyLmpzP21vZHVsZXM9JTdCJTIycmVxdWVzdCUyMiUzQSUyMiUyRmFwcCUyRm5vZGVfbW9kdWxlcyUyRm5leHQlMkZkaXN0JTJGY2xpZW50JTJGY29tcG9uZW50cyUyRmFwcC1yb3V0ZXIuanMlMjIlMkMlMjJpZHMlMjIlM0ElNUIlNUQlN0QmbW9kdWxlcz0lN0IlMjJyZXF1ZXN0JTIyJTNBJTIyJTJGYXBwJTJGbm9kZV9tb2R1bGVzJTJGbmV4dCUyRmRpc3QlMkZjbGllbnQlMkZjb21wb25lbnRzJTJGY2xpZW50LXBhZ2UuanMlMjIlMkMlMjJpZHMlMjIlM0ElNUIlNUQlN0QmbW9kdWxlcz0lN0IlMjJyZXF1ZXN0JTIyJTNBJTIyJTJGYXBwJTJGbm9kZV9tb2R1bGVzJTJGbmV4dCUyRmRpc3QlMkZjbGllbnQlMkZjb21wb25lbnRzJTJGZXJyb3ItYm91bmRhcnkuanMlMjIlMkMlMjJpZHMlMjIlM0ElNUIlNUQlN0QmbW9kdWxlcz0lN0IlMjJyZXF1ZXN0JTIyJTNBJTIyJTJGYXBwJTJGbm9kZV9tb2R1bGVzJTJGbmV4dCUyRmRpc3QlMkZjbGllbnQlMkZjb21wb25lbnRzJTJGbGF5b3V0LXJvdXRlci5qcyUyMiUyQyUyMmlkcyUyMiUzQSU1QiU1RCU3RCZtb2R1bGVzPSU3QiUyMnJlcXVlc3QlMjIlM0ElMjIlMkZhcHAlMkZub2RlX21vZHVsZXMlMkZuZXh0JTJGZGlzdCUyRmNsaWVudCUyRmNvbXBvbmVudHMlMkZub3QtZm91bmQtYm91bmRhcnkuanMlMjIlMkMlMjJpZHMlMjIlM0ElNUIlNUQlN0QmbW9kdWxlcz0lN0IlMjJyZXF1ZXN0JTIyJTNBJTIyJTJGYXBwJTJGbm9kZV9tb2R1bGVzJTJGbmV4dCUyRmRpc3QlMkZjbGllbnQlMkZjb21wb25lbnRzJTJGcmVuZGVyLWZyb20tdGVtcGxhdGUtY29udGV4dC5qcyUyMiUyQyUyMmlkcyUyMiUzQSU1QiU1RCU3RCZzZXJ2ZXI9dHJ1ZSEiLCJtYXBwaW5ncyI6IkFBQUEsa09BQWdHO0FBQ2hHO0FBQ0Esb09BQWlHO0FBQ2pHO0FBQ0EsME9BQW9HO0FBQ3BHO0FBQ0Esd09BQW1HO0FBQ25HO0FBQ0Esa1BBQXdHO0FBQ3hHO0FBQ0Esc1FBQWtIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvP2U0NjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gXCIvYXBwL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2NvbXBvbmVudHMvYXBwLXJvdXRlci5qc1wiKTtcbjtcbmltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovIFwiL2FwcC9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9jb21wb25lbnRzL2NsaWVudC1wYWdlLmpzXCIpO1xuO1xuaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gXCIvYXBwL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2NvbXBvbmVudHMvZXJyb3ItYm91bmRhcnkuanNcIik7XG47XG5pbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyBcIi9hcHAvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvY29tcG9uZW50cy9sYXlvdXQtcm91dGVyLmpzXCIpO1xuO1xuaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gXCIvYXBwL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2NvbXBvbmVudHMvbm90LWZvdW5kLWJvdW5kYXJ5LmpzXCIpO1xuO1xuaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gXCIvYXBwL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2NvbXBvbmVudHMvcmVuZGVyLWZyb20tdGVtcGxhdGUtY29udGV4dC5qc1wiKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fapp-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fclient-page.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Ferror-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Flayout-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fnot-found-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fapp%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Frender-from-template-context.js%22%2C%22ids%22%3A%5B%5D%7D&server=true!\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fapp%2Fsrc%2Fapp%2Fglobals.css%22%2C%22ids%22%3A%5B%5D%7D&server=true!":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fapp%2Fsrc%2Fapp%2Fglobals.css%22%2C%22ids%22%3A%5B%5D%7D&server=true! ***!
  \************************************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"384e4943f0bd\");\nif (false) {}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZSxjQUFjO0FBQzdCLElBQUksS0FBVSxFQUFFLEVBQXVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvYXBwL2dsb2JhbHMuY3NzPzAzMTIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIzODRlNDk0M2YwYmRcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/globals.css\n");

/***/ }),

/***/ "(rsc)/./src/app/layout.tsx":
/*!****************************!*\
  !*** ./src/app/layout.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RootLayout),\n/* harmony export */   metadata: () => (/* binding */ metadata)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.css */ \"(rsc)/./src/app/globals.css\");\n\n// import localFont from \"next/font/local\";\n\n// const geistSans = localFont({\n//   src: \"./fonts/GeistVF.woff\",\n//   variable: \"--font-geist-sans\",\n//   weight: \"100 900\",\n// });\n// const geistMono = localFont({\n//   src: \"./fonts/GeistMonoVF.woff\",\n//   variable: \"--font-geist-mono\",\n//   weight: \"100 900\",\n// });\nconst metadata = {\n    title: \"Create Next App\",\n    description: \"Generated by create next app\"\n};\nfunction RootLayout({ children }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"ja\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n            children: children\n        }, void 0, false, {\n            fileName: \"/app/src/app/layout.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/app/src/app/layout.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2xheW91dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EsMkNBQTJDO0FBQ3BCO0FBRXZCLGdDQUFnQztBQUNoQyxpQ0FBaUM7QUFDakMsbUNBQW1DO0FBQ25DLHVCQUF1QjtBQUN2QixNQUFNO0FBQ04sZ0NBQWdDO0FBQ2hDLHFDQUFxQztBQUNyQyxtQ0FBbUM7QUFDbkMsdUJBQXVCO0FBQ3ZCLE1BQU07QUFFQyxNQUFNQSxXQUFxQjtJQUNoQ0MsT0FBTztJQUNQQyxhQUFhO0FBQ2YsRUFBRTtBQUVhLFNBQVNDLFdBQVcsRUFDakNDLFFBQVEsRUFHUjtJQUNBLHFCQUNFLDhEQUFDQztRQUFLQyxNQUFLO2tCQUNULDRFQUFDQztzQkFDRUg7Ozs7Ozs7Ozs7O0FBSVQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9hcHAvbGF5b3V0LnRzeD81N2E5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTWV0YWRhdGEgfSBmcm9tIFwibmV4dFwiO1xuLy8gaW1wb3J0IGxvY2FsRm9udCBmcm9tIFwibmV4dC9mb250L2xvY2FsXCI7XG5pbXBvcnQgXCIuL2dsb2JhbHMuY3NzXCI7XG5cbi8vIGNvbnN0IGdlaXN0U2FucyA9IGxvY2FsRm9udCh7XG4vLyAgIHNyYzogXCIuL2ZvbnRzL0dlaXN0VkYud29mZlwiLFxuLy8gICB2YXJpYWJsZTogXCItLWZvbnQtZ2Vpc3Qtc2Fuc1wiLFxuLy8gICB3ZWlnaHQ6IFwiMTAwIDkwMFwiLFxuLy8gfSk7XG4vLyBjb25zdCBnZWlzdE1vbm8gPSBsb2NhbEZvbnQoe1xuLy8gICBzcmM6IFwiLi9mb250cy9HZWlzdE1vbm9WRi53b2ZmXCIsXG4vLyAgIHZhcmlhYmxlOiBcIi0tZm9udC1nZWlzdC1tb25vXCIsXG4vLyAgIHdlaWdodDogXCIxMDAgOTAwXCIsXG4vLyB9KTtcblxuZXhwb3J0IGNvbnN0IG1ldGFkYXRhOiBNZXRhZGF0YSA9IHtcbiAgdGl0bGU6IFwiQ3JlYXRlIE5leHQgQXBwXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvb3RMYXlvdXQoe1xuICBjaGlsZHJlbixcbn06IFJlYWRvbmx5PHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn0+KSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImphXCI+XG4gICAgICA8Ym9keT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJtZXRhZGF0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJSb290TGF5b3V0IiwiY2hpbGRyZW4iLCJodG1sIiwibGFuZyIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/layout.tsx\n");

/***/ }),

/***/ "(rsc)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n// import Image from \"next/image\";\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            children: \"Contents\"\n        }, void 0, false, {\n            fileName: \"/app/src/app/page.tsx\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/app/src/app/page.tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtDQUFrQzs7QUFFbkIsU0FBU0E7SUFDdEIscUJBQ0UsOERBQUNDO2tCQUNDLDRFQUFDQztzQkFBSzs7Ozs7Ozs7Ozs7QUFHWiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8bWFpbj5Db250ZW50czwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiSG9tZSIsImRpdiIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/page.tsx\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-metadata-image-loader.js?type=favicon&segment=&basePath=&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./src/app/favicon.ico?__next_metadata__":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-metadata-image-loader.js?type=favicon&segment=&basePath=&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./src/app/favicon.ico?__next_metadata__ ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/lib/metadata/get-metadata-route */ \"(rsc)/./node_modules/next/dist/lib/metadata/get-metadata-route.js\");\n/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);\n  \n\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {\n    const imageData = {\"type\":\"image/x-icon\",\"sizes\":\"16x16\"}\n    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(\".\", props.params, \"favicon.ico\")\n\n    return [{\n      ...imageData,\n      url: imageUrl + \"\",\n    }]\n  });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LW1ldGFkYXRhLWltYWdlLWxvYWRlci5qcz90eXBlPWZhdmljb24mc2VnbWVudD0mYmFzZVBhdGg9JnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMhLi9zcmMvYXBwL2Zhdmljb24uaWNvP19fbmV4dF9tZXRhZGF0YV9fIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEVBQWlGOztBQUVqRixFQUFFLGlFQUFlO0FBQ2pCLHVCQUF1QjtBQUN2QixxQkFBcUIsOEZBQW1COztBQUV4QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9hcHAvZmF2aWNvbi5pY28/MmRmMCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIGltcG9ydCB7IGZpbGxNZXRhZGF0YVNlZ21lbnQgfSBmcm9tICduZXh0L2Rpc3QvbGliL21ldGFkYXRhL2dldC1tZXRhZGF0YS1yb3V0ZSdcblxuICBleHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcbiAgICBjb25zdCBpbWFnZURhdGEgPSB7XCJ0eXBlXCI6XCJpbWFnZS94LWljb25cIixcInNpemVzXCI6XCIxNngxNlwifVxuICAgIGNvbnN0IGltYWdlVXJsID0gZmlsbE1ldGFkYXRhU2VnbWVudChcIi5cIiwgcHJvcHMucGFyYW1zLCBcImZhdmljb24uaWNvXCIpXG5cbiAgICByZXR1cm4gW3tcbiAgICAgIC4uLmltYWdlRGF0YSxcbiAgICAgIHVybDogaW1hZ2VVcmwgKyBcIlwiLFxuICAgIH1dXG4gIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-metadata-image-loader.js?type=favicon&segment=&basePath=&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./src/app/favicon.ico?__next_metadata__\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fpage&page=%2Fpage&appPaths=%2Fpage&pagePath=private-next-app-dir%2Fpage.tsx&appDir=%2Fapp%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();