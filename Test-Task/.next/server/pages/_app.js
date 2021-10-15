(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/global.scss */ "./styles/global.scss");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_SentContextProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/SentContextProvider */ "./shared/SentContextProvider.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\front\\Test-Task\\Test-Task\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_shared_SentContextProvider__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 31
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./shared/SentContextProvider.tsx":
/*!****************************************!*\
  !*** ./shared/SentContextProvider.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SentContextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./shared/context.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\front\\Test-Task\\Test-Task\\shared\\SentContextProvider.tsx";



function SentContextProvider({
  children
}) {
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_1__.default.Provider, {
    value: {
      state,
      setState
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 4
  }, this);
}

/***/ }),

/***/ "./shared/context.ts":
/*!***************************!*\
  !*** ./shared/context.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const sentContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sentContext);

/***/ }),

/***/ "./styles/global.scss":
/*!****************************!*\
  !*** ./styles/global.scss ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7O0FBRUEsTUFBTUUsS0FBeUIsR0FBRyxDQUFDO0FBQUVDLEVBQUFBLFNBQUY7QUFBYUMsRUFBQUE7QUFBYixDQUFELEtBQXVDO0FBQ3ZFLHNCQUFPLDhEQUFDLGdFQUFEO0FBQUEsMkJBQXFCLDhEQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQUZEOztBQUlBLGlFQUFlRixLQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBOztBQUVlLFNBQVNELG1CQUFULENBQTZCO0FBQUNLLEVBQUFBO0FBQUQsQ0FBN0IsRUFBeUM7QUFFdkQsUUFBTSxDQUFDQyxLQUFELEVBQVFDLFFBQVIsSUFBb0JSLHFEQUFBLENBQXdCLEtBQXhCLENBQTFCO0FBRUEsc0JBQ0UsOERBQUMsc0RBQUQ7QUFBc0IsU0FBSyxFQUFFO0FBQUNPLE1BQUFBLEtBQUQ7QUFBUUMsTUFBQUE7QUFBUixLQUE3QjtBQUFBLGNBQ0FGO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkQ7QUFFQSxNQUFNRCxXQUFXLGdCQUFHTCwwREFBQSxDQUFvQixJQUFwQixDQUFwQjtBQUdBLGlFQUFlSyxXQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUVMQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL05leHQvLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9OZXh0Ly4vc2hhcmVkL1NlbnRDb250ZXh0UHJvdmlkZXIudHN4Iiwid2VicGFjazovL05leHQvLi9zaGFyZWQvY29udGV4dC50cyIsIndlYnBhY2s6Ly9OZXh0Ly4vc3R5bGVzL2dsb2JhbC5zY3NzIiwid2VicGFjazovL05leHQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL05leHQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuc2NzcydcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIlxyXG5pbXBvcnQgU2VudENvbnRleHRQcm92aWRlciBmcm9tICcuLi9zaGFyZWQvU2VudENvbnRleHRQcm92aWRlcidcclxuXHJcbmNvbnN0IE15QXBwOiBSZWFjdC5GQzxBcHBQcm9wcz4gPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wc306IEFwcFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIDxTZW50Q29udGV4dFByb3ZpZGVyPjxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz48L1NlbnRDb250ZXh0UHJvdmlkZXI+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHNlbnRDb250ZXh0IGZyb20gJy4vY29udGV4dCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZW50Q29udGV4dFByb3ZpZGVyKHtjaGlsZHJlbn0pIHtcclxuXHRcclxuXHRjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHRcclxuXHRyZXR1cm4gKFxyXG5cdCAgPHNlbnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7c3RhdGUsIHNldFN0YXRlfX0+XHJcblx0XHR7Y2hpbGRyZW59XHJcblx0ICA8L3NlbnRDb250ZXh0LlByb3ZpZGVyPlxyXG5cdCk7XHJcblx0XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcblxyXG5jb25zdCBzZW50Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7IFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlbnRDb250ZXh0O1xyXG5cclxuXHJcblxyXG5cclxuIiwiIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsIlNlbnRDb250ZXh0UHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlbnRDb250ZXh0IiwiY2hpbGRyZW4iLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlU3RhdGUiLCJjcmVhdGVDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==