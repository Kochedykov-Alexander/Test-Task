(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_app"],{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MyApp; }
/* harmony export */ });
/* harmony import */ var C_front_Test_Task_Test_Task_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ "./styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\front\\Test-Task\\Test-Task\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_front_Test_Task_Test_Task_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
_c = MyApp;

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app!":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app! ***!
  \*******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app */ "./pages/_app.js");
      }
    ]);
  

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./global.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/global.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./global.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/global.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./global.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/global.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

const isOldIE = function isOldIE1() {
    let memo;
    return function memorize() {
        if (typeof memo === 'undefined') {
            // Test for IE <= 9 as proposed by Browserhacks
            // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
            // Tests for existence of standard globals is to allow style-loader
            // to operate correctly into non-standard environments
            // @see https://github.com/webpack-contrib/style-loader/issues/177
            memo = Boolean(window && document && document.all && !window.atob);
        }
        return memo;
    };
}();
const getTarget = function getTarget1() {
    const memo = {
    };
    return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
            let styleTarget = document.querySelector(target);
            // Special case to return head of iframe instead of iframe itself
            if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                try {
                    // This will throw an exception if access to iframe is blocked
                    // due to cross-origin restrictions
                    styleTarget = styleTarget.contentDocument.head;
                } catch (e) {
                    // istanbul ignore next
                    styleTarget = null;
                }
            }
            memo[target] = styleTarget;
        }
        return memo[target];
    };
}();
const stylesInDom = [];
function getIndexByIdentifier(identifier) {
    let result = -1;
    for(let i = 0; i < stylesInDom.length; i++){
        if (stylesInDom[i].identifier === identifier) {
            result = i;
            break;
        }
    }
    return result;
}
function modulesToDom(list, options) {
    const idCountMap = {
    };
    const identifiers = [];
    for(let i = 0; i < list.length; i++){
        const item = list[i];
        const id = options.base ? item[0] + options.base : item[0];
        const count = idCountMap[id] || 0;
        const identifier = id + ' ' + count.toString();
        idCountMap[id] = count + 1;
        const index = getIndexByIdentifier(identifier);
        const obj = {
            css: item[1],
            media: item[2],
            sourceMap: item[3]
        };
        if (index !== -1) {
            stylesInDom[index].references++;
            stylesInDom[index].updater(obj);
        } else {
            stylesInDom.push({
                identifier: identifier,
                updater: addStyle(obj, options),
                references: 1
            });
        }
        identifiers.push(identifier);
    }
    return identifiers;
}
function insertStyleElement(options) {
    const style = document.createElement('style');
    const attributes = options.attributes || {
    };
    if (typeof attributes.nonce === 'undefined') {
        const nonce = // eslint-disable-next-line no-undef
         true ? __webpack_require__.nc : 0;
        if (nonce) {
            attributes.nonce = nonce;
        }
    }
    Object.keys(attributes).forEach(function(key) {
        style.setAttribute(key, attributes[key]);
    });
    if (typeof options.insert === 'function') {
        options.insert(style);
    } else {
        const target = getTarget(options.insert || 'head');
        if (!target) {
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }
        target.appendChild(style);
    }
    return style;
}
function removeStyleElement(style) {
    // istanbul ignore if
    if (style.parentNode === null) {
        return false;
    }
    style.parentNode.removeChild(style);
}
/* istanbul ignore next  */ const replaceText = function replaceText1() {
    const textStore = [];
    return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
    };
}();
function applyToSingletonTag(style, index, remove, obj) {
    const css = remove ? '' : obj.media ? '@media ' + obj.media + ' {' + obj.css + '}' : obj.css;
    // For old IE
    /* istanbul ignore if  */ if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
    } else {
        const cssNode = document.createTextNode(css);
        const childNodes = style.childNodes;
        if (childNodes[index]) {
            style.removeChild(childNodes[index]);
        }
        if (childNodes.length) {
            style.insertBefore(cssNode, childNodes[index]);
        } else {
            style.appendChild(cssNode);
        }
    }
}
function applyToTag(style, options, obj) {
    let css = obj.css;
    const media = obj.media;
    const sourceMap = obj.sourceMap;
    if (media) {
        style.setAttribute('media', media);
    } else {
        style.removeAttribute('media');
    }
    if (sourceMap && typeof btoa !== 'undefined') {
        css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */';
    }
    // For old IE
    /* istanbul ignore if  */ if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        while(style.firstChild){
            style.removeChild(style.firstChild);
        }
        style.appendChild(document.createTextNode(css));
    }
}
let singleton = null;
let singletonCounter = 0;
function addStyle(obj, options) {
    let style;
    let update;
    let remove;
    if (options.singleton) {
        const styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
    } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);
        remove = function() {
            removeStyleElement(style);
        };
    }
    update(obj);
    return function updateStyle(newObj) {
        if (newObj) {
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                return;
            }
            update(obj = newObj);
        } else {
            remove();
        }
    };
}
module.exports = function(list, options) {
    options = options || {
    };
    // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
    // tags it will allow on a page
    if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
    }
    list = list || [];
    let lastIdentifiers = modulesToDom(list, options);
    return function update(newList) {
        newList = newList || [];
        if (Object.prototype.toString.call(newList) !== '[object Array]') {
            return;
        }
        for(let i = 0; i < lastIdentifiers.length; i++){
            const identifier = lastIdentifiers[i];
            const index = getIndexByIdentifier(identifier);
            stylesInDom[index].references--;
        }
        const newLastIdentifiers = modulesToDom(newList, options);
        for(let i1 = 0; i1 < lastIdentifiers.length; i1++){
            const identifier = lastIdentifiers[i1];
            const index = getIndexByIdentifier(identifier);
            if (stylesInDom[index].references === 0) {
                stylesInDom[index].updater();
                stylesInDom.splice(index, 1);
            }
        }
        lastIdentifiers = newLastIdentifiers;
    };
};

//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/global.css":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/global.css ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*Обнуление*/\r\n\r\n* {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tborder: 0;\r\n  }\r\n  \r\n  /* @font-face {\r\n\tfont-family: 'Helvetica Neue';\r\n\tsrc: url(\"../../fonts/HelveticaNeue-Medium.eot\");\r\n\tsrc: local(\"☺\"), url(\"../../fonts/HelveticaNeue-Medium.woff\") format(\"woff\"), url(\"../../fonts/HelveticaNeue-Medium.ttf\") format(\"truetype\"), url(\"../../fonts/HelveticaNeue-Medium.svg\") format(\"svg\");\r\n\tfont-weight: 500;\r\n\tfont-style: normal;\r\n  } */\r\n  \r\n  *, *:before, *:after {\r\n\t-webkit-box-sizing: border-box;\r\n\t-moz-box-sizing: border-box;\r\n\t     box-sizing: border-box;\r\n  }\r\n  \r\n  :focus, :active {\r\n\toutline: none;\r\n  }\r\n  \r\n  a:focus, a:active {\r\n\toutline: none;\r\n  }\r\n  \r\n  nav, footer, header, aside {\r\n\tdisplay: block;\r\n  }\r\n  \r\n  html, body {\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tfont-size: 100%;\r\n\tline-height: 1;\r\n\tfont-size: 14px;\r\n\t-ms-text-size-adjust: 100%;\r\n\t-moz-text-size-adjust: 100%;\r\n\t-webkit-text-size-adjust: 100%;\r\n  }\r\n  \r\n  input, button, textarea {\r\n\tfont-family: inherit;\r\n\tpadding-left: 15px;\r\n  }\r\n  \r\n  input::-ms-clear {\r\n\tdisplay: none;\r\n  }\r\n  \r\n  button {\r\n\tcursor: pointer;\r\n  }\r\n  \r\n  button::-moz-focus-inner {\r\n\tpadding: 0;\r\n\tborder: 0;\r\n  }\r\n  \r\n  a, a:visited {\r\n\ttext-decoration: none;\r\n  }\r\n  \r\n  a:hover {\r\n\ttext-decoration: none;\r\n  }\r\n  \r\n  ul li {\r\n\tlist-style: none;\r\n  }\r\n  \r\n  img {\r\n\tvertical-align: top;\r\n  }\r\n  \r\n  ::-webkit-input-placeholder {\r\n\tfont-size: 16px;\r\n\tline-height: 112%;\r\n\tcolor: #6B6B6B;\r\n\tpadding: 12px 0 12px 0px;\r\n\ttext-overflow: ellipsis;\r\n  }\r\n  \r\n  ::-moz-placeholder {\r\n\tfont-size: 16px;\r\n\tline-height: 112%;\r\n\tcolor: #6B6B6B;\r\n\tpadding: 12px 0 12px 0px;\r\n\ttext-overflow: ellipsis;\r\n  }\r\n  \r\n  /* Firefox 19+ */\r\n  :-moz-placeholder {\r\n\tfont-size: 16px;\r\n\tline-height: 112%;\r\n\tcolor: #6B6B6B;\r\n\tpadding: 12px 0 12px 0px;\r\n\ttext-overflow: ellipsis;\r\n  }\r\n  \r\n  /* Firefox 18- */\r\n  :-ms-input-placeholder {\r\n\tfont-size: 16px;\r\n\tline-height: 112%;\r\n\tcolor: #6B6B6B;\r\n\tpadding: 12px 0 12px 0px;\r\n\ttext-overflow: ellipsis;\r\n  }\r\n  \r\n  input[placeholder] {\r\n\ttext-overflow: ellipsis;\r\n  }\r\n  \r\n  input::-moz-placeholder {\r\n\ttext-overflow: ellipsis;\r\n  }\r\n  \r\n  input:-moz-placeholder {\r\n\ttext-overflow: ellipsis;\r\n  }\r\n  \r\n  input:-ms-input-placeholder {\r\n\ttext-overflow: ellipsis;\r\n  }\r\n  \r\n  input::-webkit-input-placeholder {\r\n\topacity: 1;\r\n\t-webkit-transition: opacity 0.3s ease;\r\n\ttransition: opacity 0.3s ease;\r\n  }\r\n  \r\n  input::-moz-placeholder {\r\n\topacity: 1;\r\n\t-webkit-transition: opacity 0.3s ease;\r\n\t-moz-transition: opacity 0.3s ease;\r\n\ttransition: opacity 0.3s ease;\r\n  }\r\n  \r\n  input:-moz-placeholder {\r\n\topacity: 1;\r\n\t-webkit-transition: opacity 0.3s ease;\r\n\t-moz-transition: opacity 0.3s ease;\r\n\ttransition: opacity 0.3s ease;\r\n  }\r\n  \r\n  input:-ms-input-placeholder {\r\n\topacity: 1;\r\n\t-webkit-transition: opacity 0.3s ease;\r\n\t-ms-transition: opacity 0.3s ease;\r\n\ttransition: opacity 0.3s ease;\r\n  }\r\n  \r\n  input:focus::-webkit-input-placeholder {\r\n\topacity: 0;\r\n\t-webkit-transition: opacity 0.3s ease;\r\n\ttransition: opacity 0.3s ease;\r\n  }\r\n  \r\n  input:focus::-moz-placeholder {\r\n\topacity: 0;\r\n\t-webkit-transition: opacity 0.3s ease;\r\n\t-moz-transition: opacity 0.3s ease;\r\n\ttransition: opacity 0.3s ease;\r\n  }\r\n  \r\n  input:focus:-moz-placeholder {\r\n\topacity: 0;\r\n\t-webkit-transition: opacity 0.3s ease;\r\n\t-moz-transition: opacity 0.3s ease;\r\n\ttransition: opacity 0.3s ease;\r\n  }\r\n  \r\n  input:focus:-ms-input-placeholder {\r\n\topacity: 0;\r\n\t-webkit-transition: opacity 0.3s ease;\r\n\t-ms-transition: opacity 0.3s ease;\r\n\ttransition: opacity 0.3s ease;\r\n  }\r\n  \r\n  select {\r\n\tfont-size: 16px;\r\n\tline-height: 112%;\r\n\tcolor: #6B6B6B;\r\n\tpadding: 6px 0 6px 12px;\r\n\ttext-overflow: ellipsis;\r\n  }\r\n  \r\n  label {\r\n\tfont-size: 13px;\r\n\tline-height: 92%;\r\n\tcolor: #777879;\r\n\tmax-width: 81px;\r\n  }\r\n  \r\n  h1, h2, h3, h4, h5, h6 {\r\n\tfont-size: inherit;\r\n\tfont-weight: 400;\r\n\tcolor: red;\r\n  }\r\n\r\n\r\n  .main-block__form__tabs {\r\n\tdisplay: -webkit-flex;\r\n\tdisplay: -moz-box;\r\n\tdisplay: flex;\r\n\tcursor: pointer;\r\n}\r\n\r\n.tabs {\r\n\tfont-size: 12px;\r\n\tline-height: 117%;\r\n\tcolor: #979797;\r\n\tmix-blend-mode: normal;\r\n\topacity: 0.8;\r\n\tdisplay: -webkit-inline-flex;\r\n\tdisplay: -moz-inline-box;\r\n\tdisplay: inline-flex;\r\n\t-webkit-align-items: center;\r\n\t   -moz-box-align: center;\r\n\t        align-items: center;\r\n\tposition: relative;\r\n  }\r\n  \r\n  .tabs:not(:first-child) {\r\n\tmargin-left: 39px;\r\n  }\r\n  \r\n  .tabs:not(:last-child)::after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\tleft: 120%;\r\n\twidth: 13.45px;\r\n\theight: 13.45px;\r\n\tborder-left: 1px solid #979797;\r\n\tborder-bottom: 1px solid #979797;\r\n\tdisplay: -webkit-inline-flex;\r\n\tdisplay: -moz-inline-box;\r\n\tdisplay: inline-flex;\r\n\t-webkit-transform: rotate(-135deg);\r\n\t\t\ttransform: rotate(-135deg);\r\n\t-webkit-align-items: center;\r\n\t   -moz-box-align: center;\r\n\t        align-items: center;\r\n  }\r\n  \r\n  .active-tabs {\r\n\tcolor: #5A1094;\r\n  }\r\n  \r\n  .content {\r\n\tdisplay: none;\r\n  }\r\n  \r\n  .content__title {\r\n\tfont-size: 26px;\r\n\tline-height: 31px;\r\n\tmargin-top: 20px;\r\n  }\r\n  \r\n  .content__recipient_text {\r\n\tmargin-top: 20px;\r\n\tfont-size: 16px;\r\n\tline-height: 112.5%;\r\n  }\r\n  \r\n  .content__address_text {\r\n\tmargin-top: 20px;\r\n\tfont-size: 16px;\r\n\tline-height: 112.5%;\r\n  }\r\n  \r\n  .content__button {\r\n\tbackground: rgba(90, 16, 148, 0.8);\r\n\tborder: 1px solid rgba(67, 28, 93, 0.8);\r\n\t-webkit-box-sizing: border-box;\r\n\t\t\t-moz-box-sizing: border-box;\r\n\t     box-sizing: border-box;\r\n\tborder-radius: 5px;\r\n\twidth: 180px;\r\n\theight: 45px;\r\n\tfont-size: 16px;\r\n\tline-height: 119%;\r\n\tdisplay: -webkit-flex;\r\n\tdisplay: -moz-box;\r\n\tdisplay: flex;\r\n\t-webkit-justify-content: center;\r\n\t   -moz-box-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-align-items: center;\r\n\t   -moz-box-align: center;\r\n\t        align-items: center;\r\n\tcolor: #FFFFFF;\r\n\tmargin-top: 20px;\r\n  }\r\n  \r\n  .content__inputs {\r\n\tdisplay: -webkit-flex;\r\n\tdisplay: -moz-box;\r\n\tdisplay: flex;\r\n\t-webkit-flex-direction: column;\r\n\t   -moz-box-orient: vertical;\r\n\t   -moz-box-direction: normal;\r\n\t        flex-direction: column;\r\n\tmargin-top: 6px;\r\n  }\r\n  \r\n  .content__inputs_fullname, .content__inputs_street, .content__inputs_apt, .content__inputs_city, .content__inputs_email, .content__inputs_cardholder, .content__inputs_card {\r\n\twidth: 100%;\r\n\tmargin-top: 10px;\r\n\theight: 40px;\r\n\tbackground: #FFFFFF;\r\n\tborder: 1px solid #DEDCDC;\r\n\t-webkit-box-sizing: border-box;\r\n\t\t\t-moz-box-sizing: border-box;\r\n\t     box-sizing: border-box;\r\n\tborder-radius: 5px;\r\n\tpadding-right: 40px;\r\n  }\r\n  \r\n  .content__inputs_daytime {\r\n\twidth: 60%;\r\n\theight: 40px;\r\n\tmargin-top: 20px;\r\n\tbackground: #FFFFFF;\r\n\tborder: 1px solid #DEDCDC;\r\n\t-webkit-box-sizing: border-box;\r\n\t\t\t-moz-box-sizing: border-box;\r\n\t     box-sizing: border-box;\r\n\tborder-radius: 5px;\r\n\tmargin-right: 10px;\r\n\tposition: relative;\r\n  }\r\n  \r\n  .content__inputs__row {\r\n\tdisplay: -webkit-flex;\r\n\tdisplay: -moz-box;\r\n\tdisplay: flex;\r\n\t-webkit-justify-content: space-between;\r\n\t   -moz-box-pack: justify;\r\n\t        justify-content: space-between;\r\n\tmargin-top: 10px;\r\n  }\r\n  \r\n  .content__inputs__row_country {\r\n\twidth: 57%;\r\n\theight: 40px;\r\n\tposition: relative;\r\n\tdisplay: block;\r\n  }\r\n  \r\n  .content__inputs__row_country:after {\r\n\tcontent: \"\";\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tmargin-top: -5px;\r\n\tpointer-events: none;\r\n\tright: 15px;\r\n\twidth: 8.5px;\r\n\theight: 8.5px;\r\n\tborder-top: 1.5px solid #9B9B9B;\r\n\tborder-left: 1.5px solid #9B9B9B;\r\n\t-webkit-transform: rotate(225deg);\r\n\t\t\ttransform: rotate(225deg);\r\n\tz-index: 51;\r\n  }\r\n  \r\n  .content__inputs__row_country select {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\t-webkit-box-sizing: border-box;\r\n\t\t\t-moz-box-sizing: border-box;\r\n\t     box-sizing: border-box;\r\n\tborder-radius: 5px;\r\n\tpadding-right: 40px;\r\n\tborder: 1px solid #DEDCDC;\r\n\tbackground: none;\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\t\t appearance: none;\r\n\tfont-family: inherit;\r\n\tfont-size: 1rem;\r\n  }\r\n  \r\n  .content__inputs__row_zip {\r\n\twidth: 37%;\r\n\tbackground: #FFFFFF;\r\n\tborder: 1px solid #DEDCDC;\r\n\t-webkit-box-sizing: border-box;\r\n\t\t\t-moz-box-sizing: border-box;\r\n\t     box-sizing: border-box;\r\n\tborder-radius: 5px;\r\n  }\r\n  \r\n  .content__inputs_icon {\r\n\tposition: relative;\r\n  }\r\n  \r\n  .content i.fas {\r\n\tposition: absolute;\r\n\ttop: 40%;\r\n\tright: 10px;\r\n\tfont-size: 20px;\r\n\tcursor: pointer;\r\n  }\r\n  \r\n  .active-content {\r\n\tdisplay: block;\r\n  }\r\n\r\n  .focused {\r\n\t  background-color: rgba(248, 231, 28, 0.07);\r\n  }\r\n  \r\n\r\n  .message {\r\n\tposition: relative;\r\n\tbackground: #FFFFFF;\r\n\tborder: 1px solid rgba(222, 220, 220, 0.695907);\r\n\t-webkit-box-sizing: border-box;\r\n\t   -moz-box-sizing: border-box;\r\n\t        box-sizing: border-box;\r\n\t-webkit-box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);\r\n\t        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);\r\n\tfont-size: 13px;\r\n\tline-height: 123%;\r\n\tcolor: #D0021B;\r\n\tpadding: 7px 8px 7px 8px;\r\n\ttext-align: center;\r\n\twidth: 198px;\r\n\tmargin-top: 16px;\r\n\t\r\n\t\r\n\tborder-radius: 5px;\r\n  }\r\n\r\n  .message::before {\r\n\t  position: absolute;\r\n\t  content: \"\";\r\n\t  border-top: 10px solid rgba(222, 220, 220, 0.695907);\r\n\t  border-left: 10px solid transparent;\r\n\t  border-right: 10px solid transparent;\r\n\t  top: 100%;\r\n\r\n\t  \r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n ", "",{"version":3,"sources":["webpack://styles/global.css"],"names":[],"mappings":"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","sourcesContent":["/*Обнуление*/\r\n\r\n* {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tborder: 0;\r\n  }\r\n  \r\n  /* @font-face {\r\n\tfont-family: 'Helvetica Neue';\r\n\tsrc: url(\"../../fonts/HelveticaNeue-Medium.eot\");\r\n\tsrc: local(\"☺\"), url(\"../../fonts/HelveticaNeue-Medium.woff\") format(\"woff\"), url(\"../../fonts/HelveticaNeue-Medium.ttf\") format(\"truetype\"), url(\"../../fonts/HelveticaNeue-Medium.svg\") format(\"svg\");\r\n\tfont-weight: 500;\r\n\tfont-style: normal;\r\n  } */\r\n  \r\n  *, *:before, *:after {\r\n\t-webkit-box-sizing: border-box;\r\n\tbox-sizing: border-box;\r\n  }\r\n  \r\n  :focus, :active {\r\n\toutline: none;\r\n  }\r\n  \r\n  a:focus, a:active {\r\n\toutline: none;\r\n  }\r\n  \r\n  nav, footer, header, aside {\r\n\tdisplay: block;\r\n  }\r\n  \r\n  html, body {\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tfont-size: 100%;\r\n\tline-height: 1;\r\n\tfont-size: 14px;\r\n\t-ms-text-size-adjust: 100%;\r\n\t-moz-text-size-adjust: 100%;\r\n\t-webkit-text-size-adjust: 100%;\r\n  }\r\n  \r\n  input, button, textarea {\r\n\tfont-family: inherit;\r\n\tpadding-left: 15px;\r\n  }\r\n  \r\n  input::-ms-clear {\r\n\tdisplay: none;\r\n  }\r\n  \r\n  button {\r\n\tcursor: pointer;\r\n  }\r\n  \r\n  button::-moz-focus-inner {\r\n\tpadding: 0;\r\n\tborder: 0;\r\n  }\r\n  \r\n  a, a:visited {\r\n\ttext-decoration: none;\r\n  }\r\n  \r\n  a:hover {\r\n\ttext-decoration: none;\r\n  }\r\n  \r\n  ul li {\r\n\tlist-style: none;\r\n  }\r\n  \r\n  img {\r\n\tvertical-align: top;\r\n  }\r\n  \r\n  ::-webkit-input-placeholder {\r\n\tfont-size: 16px;\r\n\tline-height: 112%;\r\n\tcolor: #6B6B6B;\r\n\tpadding: 12px 0 12px 0px;\r\n\ttext-overflow: ellipsis;\r\n  }\r\n  \r\n  ::-moz-placeholder {\r\n\tfont-size: 16px;\r\n\tline-height: 112%;\r\n\tcolor: #6B6B6B;\r\n\tpadding: 12px 0 12px 0px;\r\n\ttext-overflow: ellipsis;\r\n  }\r\n  \r\n  /* Firefox 19+ */\r\n  :-moz-placeholder {\r\n\tfont-size: 16px;\r\n\tline-height: 112%;\r\n\tcolor: #6B6B6B;\r\n\tpadding: 12px 0 12px 0px;\r\n\ttext-overflow: ellipsis;\r\n  }\r\n  \r\n  /* Firefox 18- */\r\n  :-ms-input-placeholder {\r\n\tfont-size: 16px;\r\n\tline-height: 112%;\r\n\tcolor: #6B6B6B;\r\n\tpadding: 12px 0 12px 0px;\r\n\ttext-overflow: ellipsis;\r\n  }\r\n  \r\n  input[placeholder] {\r\n\t-o-text-overflow: ellipsis;\r\n\t   text-overflow: ellipsis;\r\n  }\r\n  \r\n  input::-moz-placeholder {\r\n\ttext-overflow: ellipsis;\r\n  }\r\n  \r\n  input:-moz-placeholder {\r\n\ttext-overflow: ellipsis;\r\n  }\r\n  \r\n  input:-ms-input-placeholder {\r\n\ttext-overflow: ellipsis;\r\n  }\r\n  \r\n  input::-webkit-input-placeholder {\r\n\topacity: 1;\r\n\t-webkit-transition: opacity 0.3s ease;\r\n\t-o-transition: opacity 0.3s ease;\r\n\ttransition: opacity 0.3s ease;\r\n  }\r\n  \r\n  input::-moz-placeholder {\r\n\topacity: 1;\r\n\t-webkit-transition: opacity 0.3s ease;\r\n\t-o-transition: opacity 0.3s ease;\r\n\ttransition: opacity 0.3s ease;\r\n  }\r\n  \r\n  input:-moz-placeholder {\r\n\topacity: 1;\r\n\t-webkit-transition: opacity 0.3s ease;\r\n\t-o-transition: opacity 0.3s ease;\r\n\ttransition: opacity 0.3s ease;\r\n  }\r\n  \r\n  input:-ms-input-placeholder {\r\n\topacity: 1;\r\n\t-webkit-transition: opacity 0.3s ease;\r\n\t-o-transition: opacity 0.3s ease;\r\n\ttransition: opacity 0.3s ease;\r\n  }\r\n  \r\n  input:focus::-webkit-input-placeholder {\r\n\topacity: 0;\r\n\t-webkit-transition: opacity 0.3s ease;\r\n\t-o-transition: opacity 0.3s ease;\r\n\ttransition: opacity 0.3s ease;\r\n  }\r\n  \r\n  input:focus::-moz-placeholder {\r\n\topacity: 0;\r\n\t-webkit-transition: opacity 0.3s ease;\r\n\t-o-transition: opacity 0.3s ease;\r\n\ttransition: opacity 0.3s ease;\r\n  }\r\n  \r\n  input:focus:-moz-placeholder {\r\n\topacity: 0;\r\n\t-webkit-transition: opacity 0.3s ease;\r\n\t-o-transition: opacity 0.3s ease;\r\n\ttransition: opacity 0.3s ease;\r\n  }\r\n  \r\n  input:focus:-ms-input-placeholder {\r\n\topacity: 0;\r\n\t-webkit-transition: opacity 0.3s ease;\r\n\t-o-transition: opacity 0.3s ease;\r\n\ttransition: opacity 0.3s ease;\r\n  }\r\n  \r\n  select {\r\n\tfont-size: 16px;\r\n\tline-height: 112%;\r\n\tcolor: #6B6B6B;\r\n\tpadding: 6px 0 6px 12px;\r\n\t-o-text-overflow: ellipsis;\r\n\t   text-overflow: ellipsis;\r\n  }\r\n  \r\n  label {\r\n\tfont-size: 13px;\r\n\tline-height: 92%;\r\n\tcolor: #777879;\r\n\tmax-width: 81px;\r\n  }\r\n  \r\n  h1, h2, h3, h4, h5, h6 {\r\n\tfont-size: inherit;\r\n\tfont-weight: 400;\r\n\tcolor: red;\r\n  }\r\n\r\n\r\n  .main-block__form__tabs {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\tcursor: pointer;\r\n}\r\n\r\n.tabs {\r\n\tfont-size: 12px;\r\n\tline-height: 117%;\r\n\tcolor: #979797;\r\n\tmix-blend-mode: normal;\r\n\topacity: 0.8;\r\n\tdisplay: -webkit-inline-box;\r\n\tdisplay: -ms-inline-flexbox;\r\n\tdisplay: inline-flex;\r\n\t-webkit-box-align: center;\r\n\t\t-ms-flex-align: center;\r\n\t\t\talign-items: center;\r\n\tposition: relative;\r\n  }\r\n  \r\n  .tabs:not(:first-child) {\r\n\tmargin-left: 39px;\r\n  }\r\n  \r\n  .tabs:not(:last-child)::after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\tleft: 120%;\r\n\twidth: 13.45px;\r\n\theight: 13.45px;\r\n\tborder-left: 1px solid #979797;\r\n\tborder-bottom: 1px solid #979797;\r\n\tdisplay: -webkit-inline-box;\r\n\tdisplay: -ms-inline-flexbox;\r\n\tdisplay: inline-flex;\r\n\t-webkit-transform: rotate(-135deg);\r\n\t\t-ms-transform: rotate(-135deg);\r\n\t\t\ttransform: rotate(-135deg);\r\n\t-webkit-box-align: center;\r\n\t\t-ms-flex-align: center;\r\n\t\t\talign-items: center;\r\n  }\r\n  \r\n  .active-tabs {\r\n\tcolor: #5A1094;\r\n  }\r\n  \r\n  .content {\r\n\tdisplay: none;\r\n  }\r\n  \r\n  .content__title {\r\n\tfont-size: 26px;\r\n\tline-height: 31px;\r\n\tmargin-top: 20px;\r\n  }\r\n  \r\n  .content__recipient_text {\r\n\tmargin-top: 20px;\r\n\tfont-size: 16px;\r\n\tline-height: 112.5%;\r\n  }\r\n  \r\n  .content__address_text {\r\n\tmargin-top: 20px;\r\n\tfont-size: 16px;\r\n\tline-height: 112.5%;\r\n  }\r\n  \r\n  .content__button {\r\n\tbackground: rgba(90, 16, 148, 0.8);\r\n\tborder: 1px solid rgba(67, 28, 93, 0.8);\r\n\t-webkit-box-sizing: border-box;\r\n\t\t\tbox-sizing: border-box;\r\n\tborder-radius: 5px;\r\n\twidth: 180px;\r\n\theight: 45px;\r\n\tfont-size: 16px;\r\n\tline-height: 119%;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t\t-ms-flex-pack: center;\r\n\t\t\tjustify-content: center;\r\n\t-webkit-box-align: center;\r\n\t\t-ms-flex-align: center;\r\n\t\t\talign-items: center;\r\n\tcolor: #FFFFFF;\r\n\tmargin-top: 20px;\r\n  }\r\n  \r\n  .content__inputs {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t\t-ms-flex-direction: column;\r\n\t\t\tflex-direction: column;\r\n\tmargin-top: 6px;\r\n  }\r\n  \r\n  .content__inputs_fullname, .content__inputs_street, .content__inputs_apt, .content__inputs_city, .content__inputs_email, .content__inputs_cardholder, .content__inputs_card {\r\n\twidth: 100%;\r\n\tmargin-top: 10px;\r\n\theight: 40px;\r\n\tbackground: #FFFFFF;\r\n\tborder: 1px solid #DEDCDC;\r\n\t-webkit-box-sizing: border-box;\r\n\t\t\tbox-sizing: border-box;\r\n\tborder-radius: 5px;\r\n\tpadding-right: 40px;\r\n  }\r\n  \r\n  .content__inputs_daytime {\r\n\twidth: 60%;\r\n\theight: 40px;\r\n\tmargin-top: 20px;\r\n\tbackground: #FFFFFF;\r\n\tborder: 1px solid #DEDCDC;\r\n\t-webkit-box-sizing: border-box;\r\n\t\t\tbox-sizing: border-box;\r\n\tborder-radius: 5px;\r\n\tmargin-right: 10px;\r\n\tposition: relative;\r\n  }\r\n  \r\n  .content__inputs__row {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: justify;\r\n\t\t-ms-flex-pack: justify;\r\n\t\t\tjustify-content: space-between;\r\n\tmargin-top: 10px;\r\n  }\r\n  \r\n  .content__inputs__row_country {\r\n\twidth: 57%;\r\n\theight: 40px;\r\n\tposition: relative;\r\n\tdisplay: block;\r\n  }\r\n  \r\n  .content__inputs__row_country:after {\r\n\tcontent: \"\";\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tmargin-top: -5px;\r\n\tpointer-events: none;\r\n\tright: 15px;\r\n\twidth: 8.5px;\r\n\theight: 8.5px;\r\n\tborder-top: 1.5px solid #9B9B9B;\r\n\tborder-left: 1.5px solid #9B9B9B;\r\n\t-webkit-transform: rotate(225deg);\r\n\t\t-ms-transform: rotate(225deg);\r\n\t\t\ttransform: rotate(225deg);\r\n\tz-index: 51;\r\n  }\r\n  \r\n  .content__inputs__row_country select {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\t-webkit-box-sizing: border-box;\r\n\t\t\tbox-sizing: border-box;\r\n\tborder-radius: 5px;\r\n\tpadding-right: 40px;\r\n\tborder: 1px solid #DEDCDC;\r\n\tbackground: none;\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\t\t appearance: none;\r\n\tfont-family: inherit;\r\n\tfont-size: 1rem;\r\n  }\r\n  \r\n  .content__inputs__row_zip {\r\n\twidth: 37%;\r\n\tbackground: #FFFFFF;\r\n\tborder: 1px solid #DEDCDC;\r\n\t-webkit-box-sizing: border-box;\r\n\t\t\tbox-sizing: border-box;\r\n\tborder-radius: 5px;\r\n  }\r\n  \r\n  .content__inputs_icon {\r\n\tposition: relative;\r\n  }\r\n  \r\n  .content i.fas {\r\n\tposition: absolute;\r\n\ttop: 40%;\r\n\tright: 10px;\r\n\tfont-size: 20px;\r\n\tcursor: pointer;\r\n  }\r\n  \r\n  .active-content {\r\n\tdisplay: block;\r\n  }\r\n\r\n  .focused {\r\n\t  background-color: rgba(248, 231, 28, 0.07);\r\n  }\r\n  \r\n\r\n  .message {\r\n\tposition: relative;\r\n\tbackground: #FFFFFF;\r\n\tborder: 1px solid rgba(222, 220, 220, 0.695907);\r\n\tbox-sizing: border-box;\r\n\tbox-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);\r\n\tfont-size: 13px;\r\n\tline-height: 123%;\r\n\tcolor: #D0021B;\r\n\tpadding: 7px 8px 7px 8px;\r\n\ttext-align: center;\r\n\twidth: 198px;\r\n\tmargin-top: 16px;\r\n\t\r\n\t\r\n\tborder-radius: 5px;\r\n  }\r\n\r\n  .message::before {\r\n\t  position: absolute;\r\n\t  content: \"\";\r\n\t  border-top: 10px solid rgba(222, 220, 220, 0.695907);\r\n\t  border-left: 10px solid transparent;\r\n\t  border-right: 10px solid transparent;\r\n\t  top: 100%;\r\n\r\n\t  \r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n "],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app!"), __webpack_exec__("./node_modules/next/dist/client/router.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssV0FBVyxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsaURBQWlELGlCQUFpQixnQkFBZ0IsZ0JBQWdC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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLCtGQUErRixlQUFlO0FBQzlHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxHQUFHOztBQUVSLGtEQUFrRDtBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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QUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwySEFBMkg7QUFDM0g7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvRUFBb0U7O0FBRXBFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsV0FBVyxHQUFHO0FBQ2QsV0FBVyxHQUFHO0FBQ2QsV0FBVyxlQUFlO0FBQzFCLFdBQVcsR0FBRztBQUNkLFdBQVcsR0FBRztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBEQUEwRDtBQUMxRDs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixxQkFBcUI7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUEsY0FBYztBQUNkLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDbHJDYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUMsQ0FBQztBQUNGLEVBQUUsdUpBQXNFO0FBQ3hFOzs7Ozs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL19OX0UvIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFsLmNzcz8xYjk3Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvanN4LWRldi1ydW50aW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLmNzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbn0iLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL19hcHBcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJwcml2YXRlLW5leHQtcGFnZXMvX2FwcFwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL2dsb2JhbC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxuICAgICAgICAgICAgICAgIHZhciBhbmNob3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnROb2RlID0gYW5jaG9yRWxlbWVudC5wYXJlbnROb2RlLy8gTm9ybWFsbHkgPGhlYWQ+XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIC8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuICAgICAgICAgICAgICAgIC8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3RcbiAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgYW5jaG9yRWxlbWVudCk7XG4gICAgICAgICAgICB9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gICAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBwO1xuICAgIGZvcihwIGluIGEpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKHAgaW4gYil7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL2dsb2JhbC5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL2dsb2JhbC5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRTEoKSB7XG4gICAgbGV0IG1lbW87XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgICAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAgICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgICAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVtbztcbiAgICB9O1xufSgpO1xuY29uc3QgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0MSgpIHtcbiAgICBjb25zdCBtZW1vID0ge1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGxldCBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgICAgICAgICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgICAgICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICAgIH07XG59KCk7XG5jb25zdCBzdHlsZXNJbkRvbSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICAgIGxldCByZXN1bHQgPSAtMTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgICAgICAgcmVzdWx0ID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICAgIGNvbnN0IGlkQ291bnRNYXAgPSB7XG4gICAgfTtcbiAgICBjb25zdCBpZGVudGlmaWVycyA9IFtdO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgaXRlbSA9IGxpc3RbaV07XG4gICAgICAgIGNvbnN0IGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgICAgIGNvbnN0IGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICAgICAgY29uc3QgaWRlbnRpZmllciA9IGlkICsgJyAnICsgY291bnQudG9TdHJpbmcoKTtcbiAgICAgICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgICAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgICAgIH07XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICAgICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgICAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gICAgfVxuICAgIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge1xuICAgIH07XG4gICAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zdCBub25jZSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICAgICAgICBpZiAobm9uY2UpIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGU7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovIGNvbnN0IHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQxKCkge1xuICAgIGNvbnN0IHRleHRTdG9yZSA9IFtdO1xuICAgIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgICAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICAgIH07XG59KCk7XG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgICBjb25zdCBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/ICdAbWVkaWEgJyArIG9iai5tZWRpYSArICcgeycgKyBvYmouY3NzICsgJ30nIDogb2JqLmNzcztcbiAgICAvLyBGb3Igb2xkIElFXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqLyBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG4gICAgICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gICAgbGV0IGNzcyA9IG9iai5jc3M7XG4gICAgY29uc3QgbWVkaWEgPSBvYmoubWVkaWE7XG4gICAgY29uc3Qgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gICAgfVxuICAgIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nO1xuICAgIH1cbiAgICAvLyBGb3Igb2xkIElFXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqLyBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2hpbGUoc3R5bGUuZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgICB9XG59XG5sZXQgc2luZ2xldG9uID0gbnVsbDtcbmxldCBzaW5nbGV0b25Db3VudGVyID0gMDtcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICAgIGxldCBzdHlsZTtcbiAgICBsZXQgdXBkYXRlO1xuICAgIGxldCByZW1vdmU7XG4gICAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgICAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICAgICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICAgICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcbiAgICAgICAgcmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICB1cGRhdGUob2JqKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgICAgIGlmIChuZXdPYmopIHtcbiAgICAgICAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHtcbiAgICB9O1xuICAgIC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAgIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbiAgICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICAgIH1cbiAgICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgICBsZXQgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgICAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29uc3QgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICAgICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICAgICAgZm9yKGxldCBpMSA9IDA7IGkxIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaTErKyl7XG4gICAgICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2kxXTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICAgICAgICBpZiAoc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcigpO1xuICAgICAgICAgICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICAgIH07XG59O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMubWFwIiwibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbj17NzYyOmZ1bmN0aW9uKG4pe24uZXhwb3J0cz1mdW5jdGlvbihuKXt2YXIgdD1bXTt0LnRvU3RyaW5nPWZ1bmN0aW9uIHRvU3RyaW5nKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHQpe3ZhciByPWNzc1dpdGhNYXBwaW5nVG9TdHJpbmcodCxuKTtpZih0WzJdKXtyZXR1cm5cIkBtZWRpYSBcIi5jb25jYXQodFsyXSxcIiB7XCIpLmNvbmNhdChyLFwifVwiKX1yZXR1cm4gcn0pLmpvaW4oXCJcIil9O3QuaT1mdW5jdGlvbihuLHIsbyl7aWYodHlwZW9mIG49PT1cInN0cmluZ1wiKXtuPVtbbnVsbCxuLFwiXCJdXX12YXIgZT17fTtpZihvKXtmb3IodmFyIGE9MDthPHRoaXMubGVuZ3RoO2ErKyl7dmFyIGM9dGhpc1thXVswXTtpZihjIT1udWxsKXtlW2NdPXRydWV9fX1mb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKyl7dmFyIHU9W10uY29uY2F0KG5baV0pO2lmKG8mJmVbdVswXV0pe2NvbnRpbnVlfWlmKHIpe2lmKCF1WzJdKXt1WzJdPXJ9ZWxzZXt1WzJdPVwiXCIuY29uY2F0KHIsXCIgYW5kIFwiKS5jb25jYXQodVsyXSl9fXQucHVzaCh1KX19O3JldHVybiB0fTtmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKG4sdCl7dmFyIHI9blsxXXx8XCJcIjt2YXIgbz1uWzNdO2lmKCFvKXtyZXR1cm4gcn1pZih0JiZ0eXBlb2YgYnRvYT09PVwiZnVuY3Rpb25cIil7dmFyIGU9dG9Db21tZW50KG8pO3ZhciBhPW8uc291cmNlcy5tYXAoZnVuY3Rpb24obil7cmV0dXJuXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChvLnNvdXJjZVJvb3R8fFwiXCIpLmNvbmNhdChuLFwiICovXCIpfSk7cmV0dXJuW3JdLmNvbmNhdChhKS5jb25jYXQoW2VdKS5qb2luKFwiXFxuXCIpfXJldHVybltyXS5qb2luKFwiXFxuXCIpfWZ1bmN0aW9uIHRvQ29tbWVudChuKXt2YXIgdD1idG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShuKSkpKTt2YXIgcj1cInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdCh0KTtyZXR1cm5cIi8qIyBcIi5jb25jYXQocixcIiAqL1wiKX19fTt2YXIgdD17fTtmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKHIpe2lmKHRbcl0pe3JldHVybiB0W3JdLmV4cG9ydHN9dmFyIG89dFtyXT17ZXhwb3J0czp7fX07dmFyIGU9dHJ1ZTt0cnl7bltyXShvLG8uZXhwb3J0cyxfX25jY3dwY2tfcmVxdWlyZV9fKTtlPWZhbHNlfWZpbmFsbHl7aWYoZSlkZWxldGUgdFtyXX1yZXR1cm4gby5leHBvcnRzfV9fbmNjd3Bja19yZXF1aXJlX18uYWI9X19kaXJuYW1lK1wiL1wiO3JldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDc2Mil9KCk7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyrQntCx0L3Rg9C70LXQvdC40LUqL1xcclxcblxcclxcbioge1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogQGZvbnQtZmFjZSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZSc7XFxyXFxuXFx0c3JjOiB1cmwoXFxcIi4uLy4uL2ZvbnRzL0hlbHZldGljYU5ldWUtTWVkaXVtLmVvdFxcXCIpO1xcclxcblxcdHNyYzogbG9jYWwoXFxcIuKYulxcXCIpLCB1cmwoXFxcIi4uLy4uL2ZvbnRzL0hlbHZldGljYU5ldWUtTWVkaXVtLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKSwgdXJsKFxcXCIuLi8uLi9mb250cy9IZWx2ZXRpY2FOZXVlLU1lZGl1bS50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIiksIHVybChcXFwiLi4vLi4vZm9udHMvSGVsdmV0aWNhTmV1ZS1NZWRpdW0uc3ZnXFxcIikgZm9ybWF0KFxcXCJzdmdcXFwiKTtcXHJcXG5cXHRmb250LXdlaWdodDogNTAwO1xcclxcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIH0gKi9cXHJcXG4gIFxcclxcbiAgKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcclxcblxcdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0ICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICA6Zm9jdXMsIDphY3RpdmUge1xcclxcblxcdG91dGxpbmU6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGE6Zm9jdXMsIGE6YWN0aXZlIHtcXHJcXG5cXHRvdXRsaW5lOiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBuYXYsIGZvb3RlciwgaGVhZGVyLCBhc2lkZSB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGh0bWwsIGJvZHkge1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRmb250LXNpemU6IDEwMCU7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcclxcblxcdC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcblxcdC1tb3otdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG5cXHQtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGlucHV0LCBidXR0b24sIHRleHRhcmVhIHtcXHJcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG5cXHRwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGlucHV0OjotbXMtY2xlYXIge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGJ1dHRvbiB7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBidXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym9yZGVyOiAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBhLCBhOnZpc2l0ZWQge1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgYTpob3ZlciB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICB1bCBsaSB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgaW1nIHtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcclxcblxcdGZvbnQtc2l6ZTogMTZweDtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTEyJTtcXHJcXG5cXHRjb2xvcjogIzZCNkI2QjtcXHJcXG5cXHRwYWRkaW5nOiAxMnB4IDAgMTJweCAwcHg7XFxyXFxuXFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIDo6LW1vei1wbGFjZWhvbGRlciB7XFxyXFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxMTIlO1xcclxcblxcdGNvbG9yOiAjNkI2QjZCO1xcclxcblxcdHBhZGRpbmc6IDEycHggMCAxMnB4IDBweDtcXHJcXG5cXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogRmlyZWZveCAxOSsgKi9cXHJcXG4gIDotbW96LXBsYWNlaG9sZGVyIHtcXHJcXG5cXHRmb250LXNpemU6IDE2cHg7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDExMiU7XFxyXFxuXFx0Y29sb3I6ICM2QjZCNkI7XFxyXFxuXFx0cGFkZGluZzogMTJweCAwIDEycHggMHB4O1xcclxcblxcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBGaXJlZm94IDE4LSAqL1xcclxcbiAgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxyXFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxMTIlO1xcclxcblxcdGNvbG9yOiAjNkI2QjZCO1xcclxcblxcdHBhZGRpbmc6IDEycHggMCAxMnB4IDBweDtcXHJcXG5cXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgaW5wdXRbcGxhY2Vob2xkZXJdIHtcXHJcXG5cXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xcclxcblxcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBpbnB1dDotbW96LXBsYWNlaG9sZGVyIHtcXHJcXG5cXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG5cXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcclxcblxcdG9wYWNpdHk6IDE7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xcclxcblxcdG9wYWNpdHk6IDE7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcXHJcXG5cXHQtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xcclxcblxcdHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBpbnB1dDotbW96LXBsYWNlaG9sZGVyIHtcXHJcXG5cXHRvcGFjaXR5OiAxO1xcclxcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxyXFxuXFx0LW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG5cXHRvcGFjaXR5OiAxO1xcclxcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxyXFxuXFx0LW1zLXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xcclxcblxcdHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBpbnB1dDpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxyXFxuXFx0b3BhY2l0eTogMDtcXHJcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xcclxcblxcdHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBpbnB1dDpmb2N1czo6LW1vei1wbGFjZWhvbGRlciB7XFxyXFxuXFx0b3BhY2l0eTogMDtcXHJcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xcclxcblxcdC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxyXFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGlucHV0OmZvY3VzOi1tb3otcGxhY2Vob2xkZXIge1xcclxcblxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcXHJcXG5cXHQtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xcclxcblxcdHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBpbnB1dDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcclxcblxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcXHJcXG5cXHQtbXMtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxyXFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIHNlbGVjdCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxMTIlO1xcclxcblxcdGNvbG9yOiAjNkI2QjZCO1xcclxcblxcdHBhZGRpbmc6IDZweCAwIDZweCAxMnB4O1xcclxcblxcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBsYWJlbCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxM3B4O1xcclxcblxcdGxpbmUtaGVpZ2h0OiA5MiU7XFxyXFxuXFx0Y29sb3I6ICM3Nzc4Nzk7XFxyXFxuXFx0bWF4LXdpZHRoOiA4MXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXHJcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRjb2xvcjogcmVkO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgLm1haW4tYmxvY2tfX2Zvcm1fX3RhYnMge1xcclxcblxcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG5cXHRkaXNwbGF5OiAtbW96LWJveDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYnMge1xcclxcblxcdGZvbnQtc2l6ZTogMTJweDtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTE3JTtcXHJcXG5cXHRjb2xvcjogIzk3OTc5NztcXHJcXG5cXHRtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xcclxcblxcdG9wYWNpdHk6IDAuODtcXHJcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWlubGluZS1mbGV4O1xcclxcblxcdGRpc3BsYXk6IC1tb3otaW5saW5lLWJveDtcXHJcXG5cXHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG5cXHQtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0ICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHQgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAudGFiczpub3QoOmZpcnN0LWNoaWxkKSB7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDM5cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC50YWJzOm5vdCg6bGFzdC1jaGlsZCk6OmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0bGVmdDogMTIwJTtcXHJcXG5cXHR3aWR0aDogMTMuNDVweDtcXHJcXG5cXHRoZWlnaHQ6IDEzLjQ1cHg7XFxyXFxuXFx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjOTc5Nzk3O1xcclxcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTc5Nzk3O1xcclxcblxcdGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWZsZXg7XFxyXFxuXFx0ZGlzcGxheTogLW1vei1pbmxpbmUtYm94O1xcclxcblxcdGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcblxcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XFxyXFxuXFx0XFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XFxyXFxuXFx0LXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdCAgIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0ICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYWN0aXZlLXRhYnMge1xcclxcblxcdGNvbG9yOiAjNUExMDk0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29udGVudCB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRlbnRfX3RpdGxlIHtcXHJcXG5cXHRmb250LXNpemU6IDI2cHg7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDMxcHg7XFxyXFxuXFx0bWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRlbnRfX3JlY2lwaWVudF90ZXh0IHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAyMHB4O1xcclxcblxcdGZvbnQtc2l6ZTogMTZweDtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTEyLjUlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29udGVudF9fYWRkcmVzc190ZXh0IHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAyMHB4O1xcclxcblxcdGZvbnQtc2l6ZTogMTZweDtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTEyLjUlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29udGVudF9fYnV0dG9uIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiByZ2JhKDkwLCAxNiwgMTQ4LCAwLjgpO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNjcsIDI4LCA5MywgMC44KTtcXHJcXG5cXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0XFx0XFx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcdCAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0d2lkdGg6IDE4MHB4O1xcclxcblxcdGhlaWdodDogNDVweDtcXHJcXG5cXHRmb250LXNpemU6IDE2cHg7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDExOSU7XFxyXFxuXFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcblxcdGRpc3BsYXk6IC1tb3otYm94O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHQgICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxyXFxuXFx0ICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHQtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0ICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHQgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Y29sb3I6ICNGRkZGRkY7XFxyXFxuXFx0bWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRlbnRfX2lucHV0cyB7XFxyXFxuXFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcblxcdGRpc3BsYXk6IC1tb3otYm94O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdCAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxyXFxuXFx0ICAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxyXFxuXFx0ICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdG1hcmdpbi10b3A6IDZweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRlbnRfX2lucHV0c19mdWxsbmFtZSwgLmNvbnRlbnRfX2lucHV0c19zdHJlZXQsIC5jb250ZW50X19pbnB1dHNfYXB0LCAuY29udGVudF9faW5wdXRzX2NpdHksIC5jb250ZW50X19pbnB1dHNfZW1haWwsIC5jb250ZW50X19pbnB1dHNfY2FyZGhvbGRlciwgLmNvbnRlbnRfX2lucHV0c19jYXJkIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxMHB4O1xcclxcblxcdGhlaWdodDogNDBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkICNERURDREM7XFxyXFxuXFx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcdFxcdFxcdC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHQgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdHBhZGRpbmctcmlnaHQ6IDQwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb250ZW50X19pbnB1dHNfZGF5dGltZSB7XFxyXFxuXFx0d2lkdGg6IDYwJTtcXHJcXG5cXHRoZWlnaHQ6IDQwcHg7XFxyXFxuXFx0bWFyZ2luLXRvcDogMjBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkICNERURDREM7XFxyXFxuXFx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcdFxcdFxcdC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHQgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb250ZW50X19pbnB1dHNfX3JvdyB7XFxyXFxuXFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcblxcdGRpc3BsYXk6IC1tb3otYm94O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0ICAgLW1vei1ib3gtcGFjazoganVzdGlmeTtcXHJcXG5cXHQgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29udGVudF9faW5wdXRzX19yb3dfY291bnRyeSB7XFxyXFxuXFx0d2lkdGg6IDU3JTtcXHJcXG5cXHRoZWlnaHQ6IDQwcHg7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29udGVudF9faW5wdXRzX19yb3dfY291bnRyeTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogNTAlO1xcclxcblxcdG1hcmdpbi10b3A6IC01cHg7XFxyXFxuXFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuXFx0cmlnaHQ6IDE1cHg7XFxyXFxuXFx0d2lkdGg6IDguNXB4O1xcclxcblxcdGhlaWdodDogOC41cHg7XFxyXFxuXFx0Ym9yZGVyLXRvcDogMS41cHggc29saWQgIzlCOUI5QjtcXHJcXG5cXHRib3JkZXItbGVmdDogMS41cHggc29saWQgIzlCOUI5QjtcXHJcXG5cXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XFxyXFxuXFx0XFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcXHJcXG5cXHR6LWluZGV4OiA1MTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRlbnRfX2lucHV0c19fcm93X2NvdW50cnkgc2VsZWN0IHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcdFxcdFxcdC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHQgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdHBhZGRpbmctcmlnaHQ6IDQwcHg7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI0RFRENEQztcXHJcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcclxcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG5cXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuXFx0XFx0IGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29udGVudF9faW5wdXRzX19yb3dfemlwIHtcXHJcXG5cXHR3aWR0aDogMzclO1xcclxcblxcdGJhY2tncm91bmQ6ICNGRkZGRkY7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI0RFRENEQztcXHJcXG5cXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0XFx0XFx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcdCAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb250ZW50X19pbnB1dHNfaWNvbiB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29udGVudCBpLmZhcyB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogNDAlO1xcclxcblxcdHJpZ2h0OiAxMHB4O1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5hY3RpdmUtY29udGVudCB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9jdXNlZCB7XFxyXFxuXFx0ICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMjMxLCAyOCwgMC4wNyk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG5cXHJcXG4gIC5tZXNzYWdlIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0YmFja2dyb3VuZDogI0ZGRkZGRjtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIyMiwgMjIwLCAyMjAsIDAuNjk1OTA3KTtcXHJcXG5cXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0ICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcdCAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHQtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG5cXHQgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG5cXHRmb250LXNpemU6IDEzcHg7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEyMyU7XFxyXFxuXFx0Y29sb3I6ICNEMDAyMUI7XFxyXFxuXFx0cGFkZGluZzogN3B4IDhweCA3cHggOHB4O1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHR3aWR0aDogMTk4cHg7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTZweDtcXHJcXG5cXHRcXHJcXG5cXHRcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVzc2FnZTo6YmVmb3JlIHtcXHJcXG5cXHQgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHQgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcblxcdCAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCByZ2JhKDIyMiwgMjIwLCAyMjAsIDAuNjk1OTA3KTtcXHJcXG5cXHQgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcblxcdCAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcblxcdCAgdG9wOiAxMDAlO1xcclxcblxcclxcblxcdCAgXFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuIFwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvZ2xvYmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxZQUFZOztBQUVaO0NBQ0MsVUFBVTtDQUNWLFNBQVM7Q0FDVCxTQUFTO0VBQ1I7O0VBRUE7Ozs7OztLQU1HOztFQUVIO0NBQ0QsOEJBQThCO0NBQzlCLDJCQUFzQjtNQUF0QixzQkFBc0I7RUFDckI7O0VBRUE7Q0FDRCxhQUFhO0VBQ1o7O0VBRUE7Q0FDRCxhQUFhO0VBQ1o7O0VBRUE7Q0FDRCxjQUFjO0VBQ2I7O0VBRUE7Q0FDRCxZQUFZO0NBQ1osV0FBVztDQUNYLGVBQWU7Q0FDZixjQUFjO0NBQ2QsZUFBZTtDQUNmLDBCQUEwQjtDQUMxQiwyQkFBMkI7Q0FDM0IsOEJBQThCO0VBQzdCOztFQUVBO0NBQ0Qsb0JBQW9CO0NBQ3BCLGtCQUFrQjtFQUNqQjs7RUFFQTtDQUNELGFBQWE7RUFDWjs7RUFFQTtDQUNELGVBQWU7RUFDZDs7RUFFQTtDQUNELFVBQVU7Q0FDVixTQUFTO0VBQ1I7O0VBRUE7Q0FDRCxxQkFBcUI7RUFDcEI7O0VBRUE7Q0FDRCxxQkFBcUI7RUFDcEI7O0VBRUE7Q0FDRCxnQkFBZ0I7RUFDZjs7RUFF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QixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLHlCQUF5QjtDQUN6QixnQkFBZ0I7Q0FDaEIsd0JBQXdCO0NBQ3hCLHFCQUFxQjtHQUNuQixnQkFBZ0I7Q0FDbEIsb0JBQW9CO0NBQ3BCLGVBQWU7RUFDZDs7RUFFQTtDQUNELFVBQVU7Q0FDVixtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLDhCQUE4QjtHQUM1QiwyQkFBc0I7TUFBdEIsc0JBQXNCO0NBQ3hCLGtCQUFrQjtFQUNqQjs7RUFFQTtDQUNELGtCQUFrQjtFQUNqQjs7RUFFQTtDQUNELGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsV0FBVztDQUNYLGVBQWU7Q0FDZixlQUFlO0VBQ2Q7O0VBRUE7Q0FDRCxjQUFjO0VBQ2I7O0VBRUE7R0FDQywwQ0FBMEM7RUFDM0M7OztFQUdBO0NBQ0Qsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQiwrQ0FBK0M7Q0FDL0MsOEJBQXNCO0lBQXRCLDJCQUFzQjtTQUF0QixzQkFBc0I7Q0FDdEIsa0RBQTBDO1NBQTFDLDBDQUEwQztDQUMxQyxlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZCx3QkFBd0I7Q0FDeEIsa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixnQkFBZ0I7OztDQUdoQixrQkFBa0I7RUFDakI7O0VBRUE7R0FDQyxrQkFBa0I7R0FDbEIsV0FBVztHQUNYLG9EQUFvRDtHQUNwRCxtQ0FBbUM7R0FDbkMsb0NBQW9DO0dBQ3BDLFNBQVM7OztFQUdWXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8q0J7QsdC90YPQu9C10L3QuNC1Ki9cXHJcXG5cXHJcXG4qIHtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIEBmb250LWZhY2Uge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnO1xcclxcblxcdHNyYzogdXJsKFxcXCIuLi8uLi9mb250cy9IZWx2ZXRpY2FOZXVlLU1lZGl1bS5lb3RcXFwiKTtcXHJcXG5cXHRzcmM6IGxvY2FsKFxcXCLimLpcXFwiKSwgdXJsKFxcXCIuLi8uLi9mb250cy9IZWx2ZXRpY2FOZXVlLU1lZGl1bS53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIiksIHVybChcXFwiLi4vLi4vZm9udHMvSGVsdmV0aWNhTmV1ZS1NZWRpdW0udHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpLCB1cmwoXFxcIi4uLy4uL2ZvbnRzL0hlbHZldGljYU5ldWUtTWVkaXVtLnN2Z1xcXCIpIGZvcm1hdChcXFwic3ZnXFxcIik7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXHJcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICB9ICovXFxyXFxuICBcXHJcXG4gICosICo6YmVmb3JlLCAqOmFmdGVyIHtcXHJcXG5cXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgOmZvY3VzLCA6YWN0aXZlIHtcXHJcXG5cXHRvdXRsaW5lOiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBhOmZvY3VzLCBhOmFjdGl2ZSB7XFxyXFxuXFx0b3V0bGluZTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgbmF2LCBmb290ZXIsIGhlYWRlciwgYXNpZGUge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBodG1sLCBib2R5IHtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcblxcdGZvbnQtc2l6ZTogMTRweDtcXHJcXG5cXHQtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG5cXHQtbW96LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuXFx0LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBpbnB1dCwgYnV0dG9uLCB0ZXh0YXJlYSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuXFx0cGFkZGluZy1sZWZ0OiAxNXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBpbnB1dDo6LW1zLWNsZWFyIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBidXR0b24ge1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgYnV0dG9uOjotbW96LWZvY3VzLWlubmVyIHtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgYSwgYTp2aXNpdGVkIHtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGE6aG92ZXIge1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgdWwgbGkge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGltZyB7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG5cXHRmb250LXNpemU6IDE2cHg7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDExMiU7XFxyXFxuXFx0Y29sb3I6ICM2QjZCNkI7XFxyXFxuXFx0cGFkZGluZzogMTJweCAwIDEycHggMHB4O1xcclxcblxcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICA6Oi1tb3otcGxhY2Vob2xkZXIge1xcclxcblxcdGZvbnQtc2l6ZTogMTZweDtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTEyJTtcXHJcXG5cXHRjb2xvcjogIzZCNkI2QjtcXHJcXG5cXHRwYWRkaW5nOiAxMnB4IDAgMTJweCAwcHg7XFxyXFxuXFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIEZpcmVmb3ggMTkrICovXFxyXFxuICA6LW1vei1wbGFjZWhvbGRlciB7XFxyXFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxMTIlO1xcclxcblxcdGNvbG9yOiAjNkI2QjZCO1xcclxcblxcdHBhZGRpbmc6IDEycHggMCAxMnB4IDBweDtcXHJcXG5cXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogRmlyZWZveCAxOC0gKi9cXHJcXG4gIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcclxcblxcdGZvbnQtc2l6ZTogMTZweDtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTEyJTtcXHJcXG5cXHRjb2xvcjogIzZCNkI2QjtcXHJcXG5cXHRwYWRkaW5nOiAxMnB4IDAgMTJweCAwcHg7XFxyXFxuXFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGlucHV0W3BsYWNlaG9sZGVyXSB7XFxyXFxuXFx0LW8tdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuXFx0ICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcXHJcXG5cXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7XFxyXFxuXFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxyXFxuXFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG5cXHRvcGFjaXR5OiAxO1xcclxcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxyXFxuXFx0LW8tdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxyXFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcXHJcXG5cXHRvcGFjaXR5OiAxO1xcclxcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxyXFxuXFx0LW8tdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxyXFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xcclxcblxcdG9wYWNpdHk6IDE7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcXHJcXG5cXHQtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG5cXHRvcGFjaXR5OiAxO1xcclxcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxyXFxuXFx0LW8tdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxyXFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGlucHV0OmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG5cXHRvcGFjaXR5OiAwO1xcclxcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxyXFxuXFx0LW8tdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxyXFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGlucHV0OmZvY3VzOjotbW96LXBsYWNlaG9sZGVyIHtcXHJcXG5cXHRvcGFjaXR5OiAwO1xcclxcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxyXFxuXFx0LW8tdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxyXFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGlucHV0OmZvY3VzOi1tb3otcGxhY2Vob2xkZXIge1xcclxcblxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcXHJcXG5cXHQtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgaW5wdXQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG5cXHRvcGFjaXR5OiAwO1xcclxcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxyXFxuXFx0LW8tdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxyXFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIHNlbGVjdCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxMTIlO1xcclxcblxcdGNvbG9yOiAjNkI2QjZCO1xcclxcblxcdHBhZGRpbmc6IDZweCAwIDZweCAxMnB4O1xcclxcblxcdC1vLXRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcblxcdCAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBsYWJlbCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxM3B4O1xcclxcblxcdGxpbmUtaGVpZ2h0OiA5MiU7XFxyXFxuXFx0Y29sb3I6ICM3Nzc4Nzk7XFxyXFxuXFx0bWF4LXdpZHRoOiA4MXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXHJcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRjb2xvcjogcmVkO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgLm1haW4tYmxvY2tfX2Zvcm1fX3RhYnMge1xcclxcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcclxcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFicyB7XFxyXFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxMTclO1xcclxcblxcdGNvbG9yOiAjOTc5Nzk3O1xcclxcblxcdG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XFxyXFxuXFx0b3BhY2l0eTogMC44O1xcclxcblxcdGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcXHJcXG5cXHRkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XFxyXFxuXFx0ZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRcXHQtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAudGFiczpub3QoOmZpcnN0LWNoaWxkKSB7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDM5cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC50YWJzOm5vdCg6bGFzdC1jaGlsZCk6OmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0bGVmdDogMTIwJTtcXHJcXG5cXHR3aWR0aDogMTMuNDVweDtcXHJcXG5cXHRoZWlnaHQ6IDEzLjQ1cHg7XFxyXFxuXFx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjOTc5Nzk3O1xcclxcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTc5Nzk3O1xcclxcblxcdGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcXHJcXG5cXHRkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XFxyXFxuXFx0ZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcXHJcXG5cXHRcXHQtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XFxyXFxuXFx0XFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XFxyXFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRcXHQtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5hY3RpdmUtdGFicyB7XFxyXFxuXFx0Y29sb3I6ICM1QTEwOTQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb250ZW50IHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29udGVudF9fdGl0bGUge1xcclxcblxcdGZvbnQtc2l6ZTogMjZweDtcXHJcXG5cXHRsaW5lLWhlaWdodDogMzFweDtcXHJcXG5cXHRtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29udGVudF9fcmVjaXBpZW50X3RleHQge1xcclxcblxcdG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxMTIuNSU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb250ZW50X19hZGRyZXNzX3RleHQge1xcclxcblxcdG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxMTIuNSU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb250ZW50X19idXR0b24ge1xcclxcblxcdGJhY2tncm91bmQ6IHJnYmEoOTAsIDE2LCAxNDgsIDAuOCk7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSg2NywgMjgsIDkzLCAwLjgpO1xcclxcblxcdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHRcXHRcXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHR3aWR0aDogMTgwcHg7XFxyXFxuXFx0aGVpZ2h0OiA0NXB4O1xcclxcblxcdGZvbnQtc2l6ZTogMTZweDtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTE5JTtcXHJcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXHJcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXHJcXG5cXHRcXHQtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRcXHQtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Y29sb3I6ICNGRkZGRkY7XFxyXFxuXFx0bWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRlbnRfX2lucHV0cyB7XFxyXFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxyXFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcclxcblxcdC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcclxcblxcdFxcdC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0bWFyZ2luLXRvcDogNnB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29udGVudF9faW5wdXRzX2Z1bGxuYW1lLCAuY29udGVudF9faW5wdXRzX3N0cmVldCwgLmNvbnRlbnRfX2lucHV0c19hcHQsIC5jb250ZW50X19pbnB1dHNfY2l0eSwgLmNvbnRlbnRfX2lucHV0c19lbWFpbCwgLmNvbnRlbnRfX2lucHV0c19jYXJkaG9sZGVyLCAuY29udGVudF9faW5wdXRzX2NhcmQge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuXFx0aGVpZ2h0OiA0MHB4O1xcclxcblxcdGJhY2tncm91bmQ6ICNGRkZGRkY7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI0RFRENEQztcXHJcXG5cXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0XFx0XFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0cGFkZGluZy1yaWdodDogNDBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRlbnRfX2lucHV0c19kYXl0aW1lIHtcXHJcXG5cXHR3aWR0aDogNjAlO1xcclxcblxcdGhlaWdodDogNDBweDtcXHJcXG5cXHRtYXJnaW4tdG9wOiAyMHB4O1xcclxcblxcdGJhY2tncm91bmQ6ICNGRkZGRkY7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI0RFRENEQztcXHJcXG5cXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0XFx0XFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRlbnRfX2lucHV0c19fcm93IHtcXHJcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXHJcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxyXFxuXFx0XFx0LW1zLWZsZXgtcGFjazoganVzdGlmeTtcXHJcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0bWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRlbnRfX2lucHV0c19fcm93X2NvdW50cnkge1xcclxcblxcdHdpZHRoOiA1NyU7XFxyXFxuXFx0aGVpZ2h0OiA0MHB4O1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRlbnRfX2lucHV0c19fcm93X2NvdW50cnk6YWZ0ZXIge1xcclxcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IDUwJTtcXHJcXG5cXHRtYXJnaW4tdG9wOiAtNXB4O1xcclxcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcblxcdHJpZ2h0OiAxNXB4O1xcclxcblxcdHdpZHRoOiA4LjVweDtcXHJcXG5cXHRoZWlnaHQ6IDguNXB4O1xcclxcblxcdGJvcmRlci10b3A6IDEuNXB4IHNvbGlkICM5QjlCOUI7XFxyXFxuXFx0Ym9yZGVyLWxlZnQ6IDEuNXB4IHNvbGlkICM5QjlCOUI7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xcclxcblxcdFxcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xcclxcblxcdFxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XFxyXFxuXFx0ei1pbmRleDogNTE7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb250ZW50X19pbnB1dHNfX3Jvd19jb3VudHJ5IHNlbGVjdCB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHRcXHRcXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRwYWRkaW5nLXJpZ2h0OiA0MHB4O1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkICNERURDREM7XFxyXFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXHJcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuXFx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xcclxcblxcdFxcdCBhcHBlYXJhbmNlOiBub25lO1xcclxcblxcdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRlbnRfX2lucHV0c19fcm93X3ppcCB7XFxyXFxuXFx0d2lkdGg6IDM3JTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkICNERURDREM7XFxyXFxuXFx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcdFxcdFxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29udGVudF9faW5wdXRzX2ljb24ge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRlbnQgaS5mYXMge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IDQwJTtcXHJcXG5cXHRyaWdodDogMTBweDtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYWN0aXZlLWNvbnRlbnQge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvY3VzZWQge1xcclxcblxcdCAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDIzMSwgMjgsIDAuMDcpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuXFxyXFxuICAubWVzc2FnZSB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGJhY2tncm91bmQ6ICNGRkZGRkY7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyMjIsIDIyMCwgMjIwLCAwLjY5NTkwNyk7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHRib3gtc2hhZG93OiAwcHggMHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuXFx0Zm9udC1zaXplOiAxM3B4O1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxMjMlO1xcclxcblxcdGNvbG9yOiAjRDAwMjFCO1xcclxcblxcdHBhZGRpbmc6IDdweCA4cHggN3B4IDhweDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0d2lkdGg6IDE5OHB4O1xcclxcblxcdG1hcmdpbi10b3A6IDE2cHg7XFxyXFxuXFx0XFxyXFxuXFx0XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lc3NhZ2U6OmJlZm9yZSB7XFxyXFxuXFx0ICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0ICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG5cXHQgIGJvcmRlci10b3A6IDEwcHggc29saWQgcmdiYSgyMjIsIDIyMCwgMjIwLCAwLjY5NTkwNyk7XFxyXFxuXFx0ICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG5cXHQgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG5cXHQgIHRvcDogMTAwJTtcXHJcXG5cXHJcXG5cXHQgIFxcclxcbiAgfVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbiBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbmV4cG9ydHMuRnJhZ21lbnQgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIGV4cG9ydHMuRnJhZ21lbnQgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuXG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH1cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuRnJhZ21lbnQ6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpO1xuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duO1xudmFyIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSksIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmZjcy9wdWxsLzEwN1xuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqL1xuXG5mdW5jdGlvbiBqc3hERVYodHlwZSwgY29uZmlnLCBtYXliZUtleSwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHZhciBrZXkgPSBudWxsO1xuICAgIHZhciByZWYgPSBudWxsOyAvLyBDdXJyZW50bHksIGtleSBjYW4gYmUgc3ByZWFkIGluIGFzIGEgcHJvcC4gVGhpcyBjYXVzZXMgYSBwb3RlbnRpYWxcbiAgICAvLyBpc3N1ZSBpZiBrZXkgaXMgYWxzbyBleHBsaWNpdGx5IGRlY2xhcmVkIChpZS4gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz5cbiAgICAvLyBvciA8ZGl2IGtleT1cIkhpXCIgey4uLnByb3BzfSAvPiApLiBXZSB3YW50IHRvIGRlcHJlY2F0ZSBrZXkgc3ByZWFkLFxuICAgIC8vIGJ1dCBhcyBhbiBpbnRlcm1lZGlhcnkgc3RlcCwgd2Ugd2lsbCB1c2UganN4REVWIGZvciBldmVyeXRoaW5nIGV4Y2VwdFxuICAgIC8vIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+LCBiZWNhdXNlIHdlIGFyZW4ndCBjdXJyZW50bHkgYWJsZSB0byB0ZWxsIGlmXG4gICAgLy8ga2V5IGlzIGV4cGxpY2l0bHkgZGVjbGFyZWQgdG8gYmUgdW5kZWZpbmVkIG9yIG5vdC5cblxuICAgIGlmIChtYXliZUtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBrZXkgPSAnJyArIG1heWJlS2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIHtcbiAgICBpZiAoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICB7XG4gICAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gICAgaWYgKCFpbmZvKSB7XG4gICAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmZvO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gICAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gICAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gICAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICAgIGlmICghdmFsaWRUeXBlKSB7XG4gICAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSk7XG5cbiAgICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICAgIH1cblxuICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBzb3VyY2UsIHNlbGYpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAgIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAgIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gICAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgICBpZiAodmFsaWRUeXBlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgICAgaWYgKGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzU3RhdGljQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW5baV0sIHR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogU3RhdGljIGNoaWxkcmVuIHNob3VsZCBhbHdheXMgYmUgYW4gYXJyYXkuICcgKyAnWW91IGFyZSBsaWtlbHkgZXhwbGljaXRseSBjYWxsaW5nIFJlYWN0LmpzeHMgb3IgUmVhY3QuanN4REVWLiAnICsgJ1VzZSB0aGUgQmFiZWwgdHJhbnNmb3JtIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50KSB7XG4gICAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59IC8vIFRoZXNlIHR3byBmdW5jdGlvbnMgZXhpc3QgdG8gc3RpbGwgZ2V0IGNoaWxkIHdhcm5pbmdzIGluIGRldlxuXG52YXIganN4REVWJDEgPSAganN4V2l0aFZhbGlkYXRpb24gO1xuXG5leHBvcnRzLmpzeERFViA9IGpzeERFViQxO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=