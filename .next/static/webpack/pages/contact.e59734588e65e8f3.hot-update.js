/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contact",{

/***/ "./components/Contact/ContactForm.js":
/*!*******************************************!*\
  !*** ./components/Contact/ContactForm.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_App_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/_App/Navbar */ \"./components/_App/Navbar.js\");\n/* harmony import */ var _components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Common/PageBanner */ \"./components/Common/PageBanner.js\");\n/* harmony import */ var _components_Contact_ContactForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Contact/ContactForm */ \"./components/Contact/ContactForm.js\");\n/* harmony import */ var _components_Contact_ContactForm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_Contact_ContactForm__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_App_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/_App/Footer */ \"./components/_App/Footer.js\");\n/* harmony import */ var _components_App_WhatsAppIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/_App/WhatsAppIcon */ \"./components/_App/WhatsAppIcon.js\");\n\n\n\n\n\n\n\nconst Contact = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_App_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Programador\\\\Documents\\\\arioac\\\\ARIOAC\\\\pages\\\\contact.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                homePageUrl: \"/\",\n                imgClass: \"bg-3\",\n                pageTitle: \"CONTACTO\",\n                parrafo: \"Estamos aqu\\xed para ayudarte. Solicita informaci\\xf3n y un asesor especializado en tecnolog\\xeda de ARIOAC se comunicar\\xe1 contigo en la brevedad para atender todas tus dudas. Nuestro servicio est\\xe1 disponible por medio de Whatsapp y tel\\xe9fonos.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Programador\\\\Documents\\\\arioac\\\\ARIOAC\\\\pages\\\\contact.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_Contact_ContactForm__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Programador\\\\Documents\\\\arioac\\\\ARIOAC\\\\pages\\\\contact.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_App_WhatsAppIcon__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Programador\\\\Documents\\\\arioac\\\\ARIOAC\\\\pages\\\\contact.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_App_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Programador\\\\Documents\\\\arioac\\\\ARIOAC\\\\pages\\\\contact.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Programador\\\\Documents\\\\arioac\\\\ARIOAC\\\\pages\\\\contact.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250YWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNxQjtBQUNVO0FBQ0c7QUFDYjtBQUNZO0FBRTNELE1BQU1NLFVBQVU7SUFDWixxQkFDSSw4REFBQ04sdURBQWM7OzBCQUNYLDhEQUFDQyw4REFBTUE7Ozs7OzBCQUNQLDhEQUFDQyxxRUFBVUE7Z0JBQ1BNLGFBQVk7Z0JBQ1pDLFVBQVM7Z0JBQ1RDLFdBQVU7Z0JBQ1ZDLFNBQVE7Ozs7OzswQkFFWiw4REFBQ1Isd0VBQVdBOzs7OzswQkFDWiw4REFBQ0Usb0VBQVlBOzs7OzswQkFDYiw4REFBQ0QsOERBQU1BOzs7Ozs7Ozs7OztBQUduQjtLQWZNRTtBQWlCTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb250YWN0LmpzPzRlNzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL19BcHAvTmF2YmFyJztcclxuaW1wb3J0IFBhZ2VCYW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vUGFnZUJhbm5lcic7XHJcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhY3QvQ29udGFjdEZvcm0nO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvX0FwcC9Gb290ZXInO1xyXG5pbXBvcnQgV2hhdHNBcHBJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvX0FwcC9XaGF0c0FwcEljb24nO1xyXG5cclxuY29uc3QgQ29udGFjdCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICAgIDxQYWdlQmFubmVyIFxyXG4gICAgICAgICAgICAgICAgaG9tZVBhZ2VVcmw9XCIvXCJcclxuICAgICAgICAgICAgICAgIGltZ0NsYXNzPVwiYmctM1wiXHJcbiAgICAgICAgICAgICAgICBwYWdlVGl0bGU9XCJDT05UQUNUT1wiXHJcbiAgICAgICAgICAgICAgICBwYXJyYWZvPVwiRXN0YW1vcyBhcXXDrSBwYXJhIGF5dWRhcnRlLiBTb2xpY2l0YSBpbmZvcm1hY2nDs24geSB1biBhc2Vzb3IgZXNwZWNpYWxpemFkbyBlbiB0ZWNub2xvZ8OtYSBkZSBBUklPQUMgc2UgY29tdW5pY2Fyw6EgY29udGlnbyBlbiBsYSBicmV2ZWRhZCBwYXJhIGF0ZW5kZXIgdG9kYXMgdHVzIGR1ZGFzLiBOdWVzdHJvIHNlcnZpY2lvIGVzdMOhIGRpc3BvbmlibGUgcG9yIG1lZGlvIGRlIFdoYXRzYXBwIHkgdGVsw6lmb25vcy5cIlxyXG4gICAgICAgICAgICAvPiBcclxuICAgICAgICAgICAgPENvbnRhY3RGb3JtIC8+XHJcbiAgICAgICAgICAgIDxXaGF0c0FwcEljb24gLz5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0OyJdLCJuYW1lcyI6WyJSZWFjdCIsIk5hdmJhciIsIlBhZ2VCYW5uZXIiLCJDb250YWN0Rm9ybSIsIkZvb3RlciIsIldoYXRzQXBwSWNvbiIsIkNvbnRhY3QiLCJGcmFnbWVudCIsImhvbWVQYWdlVXJsIiwiaW1nQ2xhc3MiLCJwYWdlVGl0bGUiLCJwYXJyYWZvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/contact.js\n"));

/***/ })

});