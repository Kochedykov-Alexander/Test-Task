(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Footer/Footer.tsx":
/*!**************************************!*\
  !*** ./components/Footer/Footer.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Footer.module.scss */ "./styles/Footer.module.scss");
/* harmony import */ var _styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\front\\Test-Task\\Test-Task\\components\\Footer\\Footer.tsx";




const Footer = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("footer", {
    className: (_styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().footer)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./components/Main.tsx":
/*!*****************************!*\
  !*** ./components/Main.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Main.module.scss */ "./styles/Main.module.scss");
/* harmony import */ var _styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products */ "./components/Products.tsx");
/* harmony import */ var _UI_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI/Tabs */ "./components/UI/Tabs.tsx");
/* harmony import */ var _hooks_useConfirmation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useConfirmation */ "./hooks/useConfirmation.ts");
/* harmony import */ var _shared_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/context */ "./shared/context.ts");
/* harmony import */ var _UI_Order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UI/Order */ "./components/UI/Order.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\front\\Test-Task\\Test-Task\\components\\Main.tsx";









const Main = () => {
  const {
    state,
    setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_shared_context__WEBPACK_IMPORTED_MODULE_4__.default);
  const products = [{
    id: 1,
    name: 'Сумка',
    description: 'Крутая сумка',
    price: 300
  }, {
    id: 2,
    name: 'Сумка',
    description: 'Крутая сумка 2',
    price: 300
  }, {
    id: 3,
    name: 'Сумка',
    description: 'Крутая сумка 3',
    price: 300
  }, {
    id: 4,
    name: 'Сумка',
    description: 'Крутая сумка 4',
    price: 300
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("main", {
    className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_7___default().page),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_7___default().page__main) + " " + (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_7___default().main),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_7___default().main__container) + " " + (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_7___default()._container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_7___default().main__body),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_7___default().main__body__container),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("form", {
              onSubmit: _hooks_useConfirmation__WEBPACK_IMPORTED_MODULE_3__.default,
              className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_7___default().main__form),
              children: !state ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_UI_Tabs__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 18
              }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_UI_Order__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 28
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 7
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Products__WEBPACK_IMPORTED_MODULE_1__.default, {
              products: products
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 7
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ "./components/Navbar/Header.tsx":
/*!**************************************!*\
  !*** ./components/Navbar/Header.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Header.module.scss */ "./styles/Header.module.scss");
/* harmony import */ var _styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\front\\Test-Task\\Test-Task\\components\\Navbar\\Header.tsx";




const Header = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("header", {
    className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default().header),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default().header__container) + " " + (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default()._container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default().header__logo),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default().header__logo_icon),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            src: "../../logo.png",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default().header__logo_text)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default().header__busket),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default().header__busket_text),
          children: "cart"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 5
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default().header__busket_icon),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            src: "../../basket.png",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 6
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 5
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 4
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./components/Products.tsx":
/*!*********************************!*\
  !*** ./components/Products.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Products.module.scss */ "./styles/Products.module.scss");
/* harmony import */ var _styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\front\\Test-Task\\Test-Task\\components\\Products.tsx";





const Products = ({
  products
}) => {
  const {
    0: selectedProducts,
    1: setSelectedProducts
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(products);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_3___default().main__products),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_3___default().products__text),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_3___default().products__text_title),
        children: "Order summary"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_3___default().products__text_edit),
        children: "edit order"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
      className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_3___default().products__items),
      children: !loading && selectedProducts.map(product => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
        className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_3___default().products__product),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_3___default().product__image),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            src: "/../public/sumka.png",
            width: 45,
            height: 45,
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 8
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_3___default().product__content),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_3___default().product__content_name),
            children: product.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 8
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_3___default().product__content_description),
            children: product.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 8
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_3___default().product__content_quantity),
            children: "Quantity: 1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 8
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_3___default().product__price),
          children: ["$", product.price]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 8
        }, undefined)]
      }, product.id, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 6
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_3___default().products__cost),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cost__subtotal),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_3___default().subtotal__text),
          children: "Subtotal"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_3___default().subtotal__count),
          children: ["$", !loading && selectedProducts.reduce((acc, cur) => {
            return acc + cur.price;
          }, 0)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 6
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cost__shipping),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_3___default().shipping__text),
          children: "Shipping"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_3___default().shipping__count),
          children: "Free"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 6
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cost__taxes),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_3___default().taxes__text),
          children: "Taxes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_3___default().taxes__count),
          children: !loading && selectedProducts.reduce((acc, cur) => acc + cur.price, 0) * 0.03
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 6
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cost__total),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_3___default().total__text),
          children: "Total"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_3___default().total__count),
          children: ["$", !loading && selectedProducts.reduce((acc, cur) => acc + cur.price, 0) + selectedProducts.reduce((acc, cur) => acc + cur.price, 0) * 0.03]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 6
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("footer", {
      className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_3___default().products__information),
      children: "All purchases are subject to our Terms and Conditions."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Products);

/***/ }),

/***/ "./components/UI/Order.tsx":
/*!*********************************!*\
  !*** ./components/UI/Order.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Order.module.scss */ "./styles/Order.module.scss");
/* harmony import */ var _styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\front\\Test-Task\\Test-Task\\components\\UI\\Order.tsx";




const Order = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_2___default().order),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_2___default().order__title),
      children: "Thank you for your order!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_2___default().order__number),
      children: "Order number is: 188787788"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_2___default().order__text),
      children: ["Your will recieve an email confirmation shortly to ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
        href: "",
        children: "jonathan.smith@gmail.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 56
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_2___default().order__estimated),
      children: ["Estimated delivery Day is ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: (_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bold),
        children: "Friday 1st April 2016"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 31
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
      className: (_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_2___default().order__print_recipe),
      children: "Print Recipe"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Order);

/***/ }),

/***/ "./components/UI/Tabs.tsx":
/*!********************************!*\
  !*** ./components/UI/Tabs.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useGeolocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useGeolocation */ "./hooks/useGeolocation.ts");
/* harmony import */ var _hooks_useIdentificationCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useIdentificationCard */ "./hooks/useIdentificationCard.ts");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useInput */ "./hooks/useInput.ts");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-input-mask */ "react-input-mask");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\front\\Test-Task\\Test-Task\\components\\UI\\Tabs.tsx";






 //import sentContext from '../../shared/context';



const Tabs = () => {
  const {
    0: toggleClass,
    1: setToggleClass
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const {
    0: cardType,
    1: setCardType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const full_name = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.useInput)('', {
    isEmpty: true,
    minLength: 3
  });
  const street = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.useInput)('', {
    isEmpty: true
  });
  const phone = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.useInput)('', {
    isEmpty: true
  });
  const apt = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.useInput)('', {});
  const city = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.useInput)('', {
    isEmpty: true
  });
  const country = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.useInput)('Country', {
    isEmpty: true
  });
  const zip = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.useInput)('', {
    isEmpty: true
  });
  const b = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.useInput)('', {});
  const card = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.useInput)('', {});
  const email = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.useInput)('', {
    isEmail: false
  });
  const geo = (0,_hooks_useGeolocation__WEBPACK_IMPORTED_MODULE_1__.useGeolocation)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setCardType((0,_hooks_useIdentificationCard__WEBPACK_IMPORTED_MODULE_2__.useIdentificationCard)(card.value));
  }, [card.value]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "main-block__form__tabs",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: toggleClass === 1 ? "tabs active-tabs" : "tabs",
        onClick: () => setToggleClass(1),
        children: "Shipping"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: toggleClass === 2 ? "tabs active-tabs" : "tabs",
        onClick: () => setToggleClass(2),
        children: "Billing"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: toggleClass === 3 ? "tabs active-tabs" : "tabs",
        onClick: () => setToggleClass(3),
        children: "Payment"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "main-block__form__tabs__content",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: toggleClass === 1 ? "content active-content" : "content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__title",
          children: "Shipping info"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__recipient",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__recipient_text",
            children: "Recipient"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__inputs",
          children: [(b.isNext && full_name.isEmpty || b.isNext && full_name.isMinLengthError) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "message",
            children: "Please enter recipient full name and min length = 3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 94
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
            type: "text",
            className: b.isNext && full_name.isEmpty || b.isNext && full_name.isMinLengthError ? "content__inputs_fullname focused" : "content__inputs_fullname",
            placeholder: "Full Name",
            value: full_name.value,
            onChange: e => full_name.onChange(e),
            onBlur: e => full_name.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__inputs_daytime_container",
            children: [b.isNext && phone.isEmpty && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              className: "message",
              children: "Please enter recipient phone in format +7 (000) 000 00 00"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 47
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_4___default()), {
              name: "phone",
              mask: "+7\\(999) 999-99-99",
              type: "tel",
              className: b.isNext && phone.isEmpty ? "content__inputs_daytime focused" : "content__inputs_daytime",
              id: "phoneNumber",
              placeholder: "Datetime Phone",
              value: phone.value,
              onChange: e => phone.onChange(e),
              onBlur: e => phone.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 13
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
              htmlFor: "content__inputs_daytime_label",
              children: "For delivery questions only"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__address",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__address_text",
            children: "Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__inputs",
          children: [b.isNext && street.isEmpty && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "message",
            children: "Please enter recipient street"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 47
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
            type: "text",
            className: b.isNext && street.isEmpty ? "content__inputs_street focused" : "content__inputs_street",
            placeholder: "Street Address",
            value: street.value,
            onChange: e => street.onChange(e),
            onBlur: e => street.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
            type: "text",
            className: "content__inputs_apt",
            placeholder: "Apt, Suite, Bldg, Gate Code. (optional)",
            value: apt.value,
            onChange: e => apt.onChange(e),
            onBlur: e => apt.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__inputs_icon",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
              type: "text",
              name: "city",
              className: b.isNext && city.isEmpty ? "content__inputs_city focused" : "content__inputs_city",
              placeholder: "City",
              value: geo.city == undefined ? city.value : geo.city,
              onChange: e => city.onChange(e),
              onBlur: e => city.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 11
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faCrosshairs,
              style: {
                position: 'absolute',
                top: '40%',
                right: '10px',
                fontSize: '20px',
                cursor: 'pointer'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 10
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__inputs__row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              className: "content__inputs__row_country",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("select", {
                onChange: e => country.onChange(e),
                onBlur: e => country.onBlur(e),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                  value: geo.country == undefined ? country.value : geo.country,
                  selected: true,
                  disabled: true,
                  children: geo.country == undefined ? country.value : geo.country
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 14
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                  value: "Russia",
                  children: "Russia"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 14
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                  value: "USA",
                  children: "USA"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 14
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                  value: "UK",
                  children: "UK"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 14
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                  value: "Ukraine",
                  children: "Ukraine"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 14
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 12
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 12
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
              type: "text",
              className: b.isNext && zip.isEmpty ? "content__inputs__row_zip focused" : "content__inputs__row_zip",
              placeholder: "ZIP",
              value: geo.zip == undefined ? zip.value : geo.zip,
              onChange: e => zip.onChange(e),
              onBlur: e => zip.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 10
        }, undefined), full_name.inputValid && phone.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
          onClick: () => setToggleClass(2),
          className: "content__button",
          style: {
            cursor: 'pointer'
          },
          children: "Continue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, undefined), !(full_name.inputValid && phone.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
          className: "content__button",
          style: {
            cursor: 'pointer'
          },
          children: "Continue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: toggleClass === 2 ? "content active-content" : "content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__title",
          children: "Billing Information"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__recipient",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__recipient_text",
            children: "Billing Contact"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__inputs",
          children: [(b.isNext && full_name.isEmpty || b.isNext && full_name.isMinLengthError) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "message",
            children: "Please enter recipient full name and min length = 3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 93
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
            type: "text",
            className: b.isNext && full_name.isEmpty || b.isNext && full_name.isMinLengthError ? "content__inputs_fullname focused" : "content__inputs_fullname",
            name: "name",
            placeholder: "Full Name",
            value: full_name.value,
            onChange: e => full_name.onChange(e),
            onBlur: e => full_name.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 11
          }, undefined), b.isNext && email.isEmailError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "message",
            children: "Please enter correct email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 48
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
            type: "text",
            className: b.isNext && email.isEmailError ? "content__inputs_email focused" : "content__inputs_email",
            placeholder: "Email Address",
            value: email.value,
            onChange: e => email.onChange(e),
            onBlur: e => email.onBlur(e),
            name: "email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__address",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__address_text",
            children: "Billing Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__inputs",
          children: [b.isNext && street.isEmpty && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "message",
            children: "Please enter recipient street"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 46
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
            type: "text",
            className: b.isNext && street.isEmpty ? "content__inputs_street focused" : "content__inputs_street",
            placeholder: "Street Address",
            value: street.value,
            onChange: e => street.onChange(e),
            onBlur: e => street.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
            type: "text",
            className: "content__inputs_apt",
            placeholder: "Apt, Suite, Bldg, Gate Code. (optional)",
            value: apt.value,
            onChange: e => apt.onChange(e),
            onBlur: e => apt.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 12
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__inputs_icon",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
              type: "text",
              name: "city",
              className: b.isNext && city.isEmpty ? "content__inputs_city focused" : "content__inputs_city",
              placeholder: "City",
              value: geo.city == undefined ? city.value : geo.city,
              onChange: e => city.onChange(e),
              onBlur: e => city.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 11
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faCrosshairs,
              style: {
                position: 'absolute',
                top: '40%',
                right: '10px',
                fontSize: '20px',
                cursor: 'pointer'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__inputs__row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              className: "content__inputs__row_country",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("select", {
                onChange: e => country.onChange(e),
                onBlur: e => country.onBlur(e),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                  value: geo.country == undefined ? country.value : geo.country,
                  selected: true,
                  disabled: true,
                  children: geo.country === undefined ? country.value : geo.country
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 14
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                  value: "Russia",
                  children: "Russia"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 151,
                  columnNumber: 14
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                  value: "USA",
                  children: "USA"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 14
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                  value: "UK",
                  children: "UK"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 14
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                  value: "Ukraine",
                  children: "Ukraine"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 154,
                  columnNumber: 14
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 12
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 12
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
              type: "text",
              className: b.isNext && zip.isEmpty ? "content__inputs__row_zip focused" : "content__inputs__row_zip",
              placeholder: "ZIP",
              value: geo.zip == undefined ? zip.value : geo.zip,
              onChange: e => zip.onChange(e),
              onBlur: e => zip.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 10
        }, undefined), full_name.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
          onClick: () => setToggleClass(3),
          className: "content__button",
          style: {
            cursor: 'pointer'
          },
          children: "Continue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }, undefined), !(full_name.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
          className: "content__button",
          style: {
            cursor: 'pointer'
          },
          children: "Continue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: toggleClass === 3 ? "content active-content" : "content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__title",
          children: "Payment"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__ssl",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__ssl_logo",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
              src: "../../lock.png",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 12
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__ssl_text",
            children: "This is a secure 128-bit SSL encrypted payment"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__recipient",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__recipient_text",
            children: "Cardholder Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__inputs",
          children: [(b.isNext && full_name.isEmpty || b.isNext && full_name.isMinLengthError) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "message",
            children: "Please enter recipient full name and min length = 3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 93
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
            type: "text",
            className: b.isNext && full_name.isEmpty || b.isNext && full_name.isMinLengthError ? "content__inputs_fullname focused" : "content__inputs_fullname",
            placeholder: "Name as it appears on your card",
            value: full_name.value,
            onChange: e => full_name.onChange(e),
            onBlur: e => full_name.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__address",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__address_text",
            children: "Card Number"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__inputs",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_4___default()), {
            mask: "9999 9999 9999 9999",
            name: "card",
            type: "text",
            className: "content__inputs_card",
            placeholder: "XXXX XXXX XXXX XXXX XXXX",
            value: card.value,
            onChange: e => card.onChange(e),
            onBlur: e => card.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
            src: cardType,
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__cards__info",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__cards__info__expire",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              className: "content__cards_info__expire_text",
              children: "Expire Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 12
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_4___default()), {
              mask: "99 / 99",
              placeholder: "MM / YY",
              type: "text",
              className: "content__cards_info__expire_input",
              name: "message"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__cards__info__security",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              className: "content__cards_info__security_text",
              children: "Security Code"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 12
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_4___default()), {
              mask: "999",
              type: "text",
              placeholder: "XXX",
              className: "content__cards_info__security_input",
              name: "subject"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
          className: "content__button",
          type: "submit",
          children: "Pay Securely"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 10
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 8
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabs);

/***/ }),

/***/ "./hooks/useConfirmation.ts":
/*!**********************************!*\
  !*** ./hooks/useConfirmation.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sendEmail)
/* harmony export */ });
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emailjs-com */ "emailjs-com");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/context */ "./shared/context.ts");



function sendEmail(e) {
  const {
    state,
    setState
  } = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(_shared_context__WEBPACK_IMPORTED_MODULE_2__.default);
  e.preventDefault();
  emailjs_com__WEBPACK_IMPORTED_MODULE_0___default().sendForm('service_owomoeu', 'template_x9ti2tv', e.target, 'user_CDqPOO792JWRicGOj2wWn').then(result => {
    () => setState(true);

    console.log(result.text);
  }, error => {
    console.log(error.text);
  });
  e.target.reset;
}
;

/***/ }),

/***/ "./hooks/useGeolocation.ts":
/*!*********************************!*\
  !*** ./hooks/useGeolocation.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useGeolocation": () => (/* binding */ useGeolocation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useGeolocation = () => {
  const {
    0: city,
    1: setCity
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: country,
    1: setCountry
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: zip,
    1: setZip
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');

  const successCallback = async url => {
    await fetch(url).then(d => d.json()).then(res => {
      setCity(res.city);
      setCountry(res.country_name);
      setZip(res.postal);
    });
  };

  const errorCallback = error => {
    console.error(error);
  }; // navigator.geolocation.getCurrentPosition(successCallback, errorCallback);


  successCallback('https://ipapi.co/json/');
  return {
    city,
    country,
    zip
  };
};

/***/ }),

/***/ "./hooks/useIdentificationCard.ts":
/*!****************************************!*\
  !*** ./hooks/useIdentificationCard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIdentificationCard": () => (/* binding */ useIdentificationCard)
/* harmony export */ });
function useIdentificationCard(value) {
  // visa
  var regex = new RegExp("^4");
  if (value.match(regex) != null) return "../img/tabs/cards/visa.png"; // Mastercard 
  // Updated for Mastercard 2017 BINs expansion

  if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(value)) return "Mastercard"; // // AMEX
  // re = new RegExp("^3[47]");
  // if (number.match(re) != null)
  //     return "AMEX";
  // // Discover
  // re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
  // if (number.match(re) != null)
  //     return "Discover";
  // // Diners
  // re = new RegExp("^36");
  // if (number.match(re) != null)
  //     return "Diners";
  // // Diners - Carte Blanche
  // re = new RegExp("^30[0-5]");
  // if (number.match(re) != null)
  //     return "Diners - Carte Blanche";
  // // JCB
  // re = new RegExp("^35(2[89]|[3-8][0-9])");
  // if (number.match(re) != null)
  //     return "JCB";
  // // Visa Electron
  // re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
  // if (number.match(re) != null)
  //     return "Visa Electron";

  return "null";
}

/***/ }),

/***/ "./hooks/useInput.ts":
/*!***************************!*\
  !*** ./hooks/useInput.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useInput": () => (/* binding */ useInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useValidation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useValidation */ "./hooks/useValidation.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const useInput = (initialValue, validations) => {
  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue);
  const {
    0: isDirty,
    1: setIsDirty
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: isNext,
    1: setIsNext
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const valid = (0,_useValidation__WEBPACK_IMPORTED_MODULE_1__.useValidation)(value, validations);

  const onChange = e => {
    setValue(e.target.value);
  };

  const onBlur = e => {
    setIsDirty(true);
  };

  const onClick = e => {
    e.preventDefault();
    setIsNext(true);
  };

  return _objectSpread({
    value,
    isNext,
    onClick,
    onChange,
    onBlur,
    isDirty
  }, valid);
};

/***/ }),

/***/ "./hooks/useValidation.ts":
/*!********************************!*\
  !*** ./hooks/useValidation.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useValidation": () => (/* binding */ useValidation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useValidation = (value, validations) => {
  const {
    0: isEmpty,
    1: setIsEmpty
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    0: isEmailError,
    1: setIsEmailError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: isMinLengthError,
    1: setIsMinLengthError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: inputValid,
    1: setInputValid
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation] ? setIsMinLengthError(true) : setIsMinLengthError(false);
          break;

        case 'isEmpty':
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;

        case 'isPhone':
          break;

        case 'isEmail':
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          re.test(String(value).toLowerCase()) ? setIsEmailError(false) : setIsEmailError(true);
          break;
      }
    }
  }, [value]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isMinLengthError || isEmpty) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, isMinLengthError]);
  return {
    isEmpty,
    isMinLengthError,
    inputValid,
    isEmailError
  };
};

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = Image1;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ "../shared/lib/head"));

var _toBase64 = __webpack_require__(/*! ../shared/lib/to-base-64 */ "../shared/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../server/image-config */ "../server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const loadedImageURLs = new Set();

if (true) {
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['default', defaultLoader], ['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['custom', customLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load(_objectSpread({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function handleLoading(img, src, layout, placeholder, onLoadingComplete) {
  if (!img) {
    return;
  }

  const handleLoad = () => {
    if (!img.src.startsWith('data:')) {
      const p = 'decode' in img ? img.decode() : Promise.resolve();
      p.catch(() => {}).then(() => {
        if (placeholder === 'blur') {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        }

        loadedImageURLs.add(src);

        if (onLoadingComplete) {
          const {
            naturalWidth,
            naturalHeight
          } = img; // Pass back read-only primitive values but not the
          // underlying DOM element because it could be misused.

          onLoadingComplete({
            naturalWidth,
            naturalHeight
          });
        }

        if (true) {
          var ref;

          if ((ref = img.parentElement) === null || ref === void 0 ? void 0 : ref.parentElement) {
            const parent = getComputedStyle(img.parentElement.parentElement);

            if (layout === 'responsive' && parent.display === 'flex') {
              console.warn(`Image with src "${src}" may not render properly as a child of a flex container. Consider wrapping the image with a div to configure the width.`);
            } else if (layout === 'fill' && parent.position !== 'relative') {
              console.warn(`Image with src "${src}" may not render properly with a parent using position:"${parent.position}". Consider changing the parent style to position:"relative" with a width and height.`);
            }
          }
        }
      });
    }
  };

  if (img.complete) {
    // If the real image fails to load, this will still remove the placeholder.
    // This is the desired behavior for now, and will be revisited when error
    // handling is worked on for the image component itself.
    handleLoad();
  } else {
    img.onload = handleLoad;
  }
}

function Image1(_param) {
  var {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    lazyBoundary = '200px',
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    onLoadingComplete,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _param,
      all = _objectWithoutProperties(_param, ["src", "sizes", "unoptimized", "priority", "loading", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]);

  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src.startsWith('data:') || src.startsWith('blob:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  if (false) {}

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (layout === 'fill' && (width || height)) {
      console.warn(`Image with src "${src}" and "layout='fill'" has unused properties assigned. Please remove "width" and "height".`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp'] // should match next-image-loader
        ;
        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }

    if ('ref' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoadingComplete" property instead.`);
    }

    if ('style' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "style" property. Please use the "className" property instead.`);
    }

    const rand = Math.floor(Math.random() * 1000) + 100;

    if (!unoptimized && !loader({
      src,
      width: rand,
      quality: 75
    }).includes(rand.toString())) {
      console.warn(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
    }
  }

  const [setRef, isIntersected] = (0, _useIntersection).useIntersection({
    rootMargin: lazyBoundary,
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };
  const blurStyle = placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: objectFit || 'cover',
    backgroundImage: `url("${blurDataURL}")`,
    backgroundPosition: objectPosition || '0% 0%'
  } : {};

  if (layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  let srcString = src;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    src: `data:image/svg+xml;base64,${(0, _toBase64).toBase64(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    "data-nimg": layout,
    className: className,
    ref: img => {
      setRef(img);
      handleLoading(img, srcString, layout, placeholder, onLoadingComplete);
    },
    style: _objectSpread({}, imgStyle, blurStyle)
  })), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    "data-nimg": layout,
    style: imgStyle,
    className: className,
    loading: loading || 'lazy'
  }))), priority ? // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset

  /*#__PURE__*/
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src,
    // @ts-ignore: imagesrcset is not yet in the link element type.
    imagesrcset: imgAttributes.srcSet,
    // @ts-ignore: imagesizes is not yet in the link element type.
    imagesizes: imgAttributes.sizes
  })) : null);
}

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
  const url = new URL(`${root}${normalizeSrc(src)}`);
  const params = url.searchParams;
  params.set('auto', params.get('auto') || 'format');
  params.set('fit', params.get('fit') || 'max');
  params.set('w', params.get('w') || width.toString());

  if (quality) {
    params.set('q', quality.toString());
  }

  return url.href;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function customLoader({
  src
}) {
  throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if ( true && !configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/index.module.scss */ "./styles/index.module.scss");
/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.tsx");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Main */ "./components/Main.tsx");
/* harmony import */ var _components_Navbar_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar/Header */ "./components/Navbar/Header.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\front\\Test-Task\\Test-Task\\pages\\index.tsx";







const Index = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().wrapper),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Navbar_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Main__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

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

/***/ "./styles/Footer.module.scss":
/*!***********************************!*\
  !*** ./styles/Footer.module.scss ***!
  \***********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__1KW17"
};


/***/ }),

/***/ "./styles/Header.module.scss":
/*!***********************************!*\
  !*** ./styles/Header.module.scss ***!
  \***********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Header_wrapper__JRgJA",
	"_container": "Header__container__3EiU-",
	"header": "Header_header__2-XWX",
	"header__container": "Header_header__container__4-XJI",
	"header__logo": "Header_header__logo__E1yl1",
	"header__logo_icon": "Header_header__logo_icon__20UtJ",
	"header__logo_icon__img": "Header_header__logo_icon__img__HLOHB",
	"header__logo_text": "Header_header__logo_text__3Su3a",
	"header__busket": "Header_header__busket__2mn8Q",
	"header__busket_text": "Header_header__busket_text__1y2qH",
	"header__busket_icon": "Header_header__busket_icon__LixBY"
};


/***/ }),

/***/ "./styles/Main.module.scss":
/*!*********************************!*\
  !*** ./styles/Main.module.scss ***!
  \*********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Main_wrapper__2nJlm",
	"_container": "Main__container__3oQ63",
	"page": "Main_page__1aAVU",
	"page__main": "Main_page__main__Arx_8",
	"main": "Main_main__6DPiD",
	"main__body": "Main_main__body__2W06i",
	"main__body__container": "Main_main__body__container__fBWbJ",
	"main__form": "Main_main__form__1yOMe",
	"main__form__tabs": "Main_main__form__tabs__3s6Fd"
};


/***/ }),

/***/ "./styles/Order.module.scss":
/*!**********************************!*\
  !*** ./styles/Order.module.scss ***!
  \**********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Order_wrapper__O8Xph",
	"_container": "Order__container__Tfq7U",
	"order": "Order_order__6vuP-",
	"order__title": "Order_order__title__deccw",
	"order__number": "Order_order__number__1WWn4",
	"order__text": "Order_order__text__1es6x",
	"order__estimated": "Order_order__estimated__g50g-",
	"order__print_recipe": "Order_order__print_recipe__3Tjfc",
	"bold": "Order_bold__D_9Oi"
};


/***/ }),

/***/ "./styles/Products.module.scss":
/*!*************************************!*\
  !*** ./styles/Products.module.scss ***!
  \*************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Products_wrapper__1nI3C",
	"_container": "Products__container__1HI-a",
	"main__products": "Products_main__products__tJCY2",
	"products": "Products_products__2HvGS",
	"products__text": "Products_products__text__oDEQ5",
	"products__text_title": "Products_products__text_title__2e1YT",
	"products__text_edit": "Products_products__text_edit__1nV6j",
	"products__product": "Products_products__product__2NFVZ",
	"products__cost": "Products_products__cost__10JVs",
	"products__information": "Products_products__information__3xZEB",
	"product": "Products_product__EHUyM",
	"product__image": "Products_product__image__1ChZN",
	"product__content": "Products_product__content__3pxRU",
	"product__content_name": "Products_product__content_name__3Wvce",
	"product__content_description": "Products_product__content_description__2CjrR",
	"product__content_quantity": "Products_product__content_quantity__qBXIQ",
	"product__price": "Products_product__price__2N6c0",
	"cost__subtotal": "Products_cost__subtotal__FVdGO",
	"cost__shipping": "Products_cost__shipping__udbUf",
	"cost__taxes": "Products_cost__taxes___8DK3",
	"cost__total": "Products_cost__total__1KNSH"
};


/***/ }),

/***/ "./styles/index.module.scss":
/*!**********************************!*\
  !*** ./styles/index.module.scss ***!
  \**********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "styles_wrapper__1CpRO",
	"_container": "styles__container__1hxE2"
};


/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "emailjs-com":
/*!******************************!*\
  !*** external "emailjs-com" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("emailjs-com");

/***/ }),

/***/ "../server/image-config":
/*!***************************************************!*\
  !*** external "next/dist/server/image-config.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "../shared/lib/to-base-64":
/*!*****************************************************!*\
  !*** external "next/dist/shared/lib/to-base-64.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-input-mask":
/*!***********************************!*\
  !*** external "react-input-mask" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-input-mask");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b290ZXIudHN4Iiwid2VicGFjazovL05leHQvLi9jb21wb25lbnRzL01haW4udHN4Iiwid2VicGFjazovL05leHQvLi9jb21wb25lbnRzL05hdmJhci9IZWFkZXIudHN4Iiwid2VicGFjazovL05leHQvLi9jb21wb25lbnRzL1Byb2R1Y3RzLnRzeCIsIndlYnBhY2s6Ly9OZXh0Ly4vY29tcG9uZW50cy9VSS9PcmRlci50c3giLCJ3ZWJwYWNrOi8vTmV4dC8uL2NvbXBvbmVudHMvVUkvVGFicy50c3giLCJ3ZWJwYWNrOi8vTmV4dC8uL2hvb2tzL3VzZUNvbmZpcm1hdGlvbi50cyIsIndlYnBhY2s6Ly9OZXh0Ly4vaG9va3MvdXNlR2VvbG9jYXRpb24udHMiLCJ3ZWJwYWNrOi8vTmV4dC8uL2hvb2tzL3VzZUlkZW50aWZpY2F0aW9uQ2FyZC50cyIsIndlYnBhY2s6Ly9OZXh0Ly4vaG9va3MvdXNlSW5wdXQudHMiLCJ3ZWJwYWNrOi8vTmV4dC8uL2hvb2tzL3VzZVZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vTmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2ltYWdlLmpzIiwid2VicGFjazovL05leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vTmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vTmV4dC8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9OZXh0Ly4vc2hhcmVkL2NvbnRleHQudHMiLCJ3ZWJwYWNrOi8vTmV4dC8uL3N0eWxlcy9Gb290ZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vTmV4dC8uL3N0eWxlcy9IZWFkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vTmV4dC8uL3N0eWxlcy9NYWluLm1vZHVsZS5zY3NzIiwid2VicGFjazovL05leHQvLi9zdHlsZXMvT3JkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vTmV4dC8uL3N0eWxlcy9Qcm9kdWN0cy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9OZXh0Ly4vc3R5bGVzL2luZGV4Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL05leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9OZXh0L2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIiLCJ3ZWJwYWNrOi8vTmV4dC9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiIiwid2VicGFjazovL05leHQvZXh0ZXJuYWwgXCJlbWFpbGpzLWNvbVwiIiwid2VicGFjazovL05leHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL05leHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vTmV4dC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9OZXh0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9OZXh0L2V4dGVybmFsIFwicmVhY3QtaW5wdXQtbWFza1wiIiwid2VicGFjazovL05leHQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0Zvb3Rlci5tb2R1bGUuc2NzcydcclxuXHJcbmNvbnN0IEZvb3RlcjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuXHRcdFx0XHJcblx0XHQ8L2Zvb3Rlcj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvTWFpbi5tb2R1bGUuc2NzcydcclxuaW1wb3J0IFByb2R1Y3RzIGZyb20gJy4vUHJvZHVjdHMnXHJcbmltcG9ydCBUYWJzIGZyb20gJy4vVUkvVGFicydcclxuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tIFwiLi4vdHlwZXMvSVByb2R1Y3RcIjtcclxuaW1wb3J0IHNlbmRFbWFpbCBmcm9tICcuLi9ob29rcy91c2VDb25maXJtYXRpb24nO1xyXG5pbXBvcnQgc2VudENvbnRleHQgZnJvbSAnLi4vc2hhcmVkL2NvbnRleHQnO1xyXG5pbXBvcnQgT3JkZXIgZnJvbSAnLi9VSS9PcmRlcic7XHJcblxyXG5cclxuY29uc3QgTWFpbjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcblxyXG5cdGNvbnN0IHtzdGF0ZSwgc2V0U3RhdGV9ID0gdXNlQ29udGV4dChzZW50Q29udGV4dCk7XHJcblxyXG5cdGNvbnN0IHByb2R1Y3RzOiBJUHJvZHVjdFtdID0gW3tpZDogMSwgbmFtZTogJ9Ch0YPQvNC60LAnLCBkZXNjcmlwdGlvbjogJ9Ca0YDRg9GC0LDRjyDRgdGD0LzQutCwJywgcHJpY2U6IDMwMCB9LCB7aWQ6IDIsIG5hbWU6ICfQodGD0LzQutCwJywgZGVzY3JpcHRpb246ICfQmtGA0YPRgtCw0Y8g0YHRg9C80LrQsCAyJywgcHJpY2U6IDMwMCB9LCB7aWQ6IDMsIG5hbWU6ICfQodGD0LzQutCwJywgZGVzY3JpcHRpb246ICfQmtGA0YPRgtCw0Y8g0YHRg9C80LrQsCAzJywgcHJpY2U6IDMwMCB9LCB7aWQ6IDQsIG5hbWU6ICfQodGD0LzQutCwJywgZGVzY3JpcHRpb246ICfQmtGA0YPRgtCw0Y8g0YHRg9C80LrQsCA0JywgcHJpY2U6IDMwMCB9XVxyXG5cdFxyXG5cdHJldHVybiAoXHJcblx0XHQ8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlX19tYWluICsgXCIgXCIgKyBzdHlsZXMubWFpbn0+XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluX19jb250YWluZXIgKyBcIiBcIiArIHN0eWxlcy5fY29udGFpbmVyfT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbl9fYm9keX0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbl9fYm9keV9fY29udGFpbmVyfT5cclxuXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17c2VuZEVtYWlsfSBjbGFzc05hbWU9e3N0eWxlcy5tYWluX19mb3JtfT5cclxuXHRcdFx0XHRcdFx0XHR7IXN0YXRlID8gPFRhYnMvPiA6IDxPcmRlci8+fVxyXG5cdFx0XHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdFx0XHRcdDxQcm9kdWN0cyBwcm9kdWN0cyA9IHtwcm9kdWN0c30+PC9Qcm9kdWN0cz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L21haW4+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0hlYWRlci5tb2R1bGUuc2NzcydcclxuXHJcblxyXG5cclxuY29uc3QgSGVhZGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fY29udGFpbmVyICsgXCIgXCIgKyBzdHlsZXMuX2NvbnRhaW5lcn0gPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX19sb2dvfT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX19sb2dvX2ljb259PlxyXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz0nLi4vLi4vbG9nby5wbmcnIGFsdD1cIlwiLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9IHtzdHlsZXMuaGVhZGVyX19sb2dvX3RleHR9PlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fYnVza2V0fT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fYnVza2V0X3RleHR9PlxyXG5cdFx0XHRcdFx0Y2FydFxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX19idXNrZXRfaWNvbn0+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz0nLi4vLi4vYmFza2V0LnBuZycgYWx0PVwiXCIvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHRcclxuXHRcdDwvaGVhZGVyPlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvUHJvZHVjdHMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IElQcm9kdWN0IH0gZnJvbSAnLi4vdHlwZXMvSVByb2R1Y3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5pbnRlcmZhY2UgUHJvZHVjdHNJdGVtc1Byb3BzIHtcclxuXHRwcm9kdWN0czogSVByb2R1Y3RbXTtcclxufVxyXG5jb25zdCBQcm9kdWN0czogUmVhY3QuRkM8UHJvZHVjdHNJdGVtc1Byb3BzPiA9ICh7cHJvZHVjdHN9KSA9PiB7XHJcblxyXG5cdGNvbnN0IFtzZWxlY3RlZFByb2R1Y3RzLCBzZXRTZWxlY3RlZFByb2R1Y3RzXSA9IHVzZVN0YXRlPElQcm9kdWN0W10+KHByb2R1Y3RzKVxyXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5fX3Byb2R1Y3RzfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0c19fdGV4dH0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0c19fdGV4dF90aXRsZX0+XHJcblx0XHRcdFx0XHRPcmRlciBzdW1tYXJ5XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGEgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdHNfX3RleHRfZWRpdH0+XHJcblx0XHRcdFx0XHRlZGl0IG9yZGVyXHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PHVsIGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RzX19pdGVtc30+XHJcblx0XHRcdFx0eyFsb2FkaW5nICYmICBzZWxlY3RlZFByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IFxyXG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RzX19wcm9kdWN0fSBrZXk9e3Byb2R1Y3QuaWR9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RfX2ltYWdlfT5cclxuXHRcdFx0XHRcdFx0XHQ8SW1hZ2Ugc3JjPSAnLy4uL3B1YmxpYy9zdW1rYS5wbmcnIHdpZHRoPXs0NX0gaGVpZ2h0PXs0NX0gYWx0PVwiXCIvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0X19jb250ZW50fT5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RfX2NvbnRlbnRfbmFtZX0+XHJcblx0XHRcdFx0XHRcdFx0XHR7cHJvZHVjdC5uYW1lfVxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdF9fY29udGVudF9kZXNjcmlwdGlvbn0+XHJcblx0XHRcdFx0XHRcdFx0XHR7cHJvZHVjdC5kZXNjcmlwdGlvbn1cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RfX2NvbnRlbnRfcXVhbnRpdHl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0UXVhbnRpdHk6IDFcclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0X19wcmljZX0+XHJcblx0XHRcdFx0XHRcdFx0XHQke3Byb2R1Y3QucHJpY2V9XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDwvbGk+XHJcblxyXG5cdFx0XHRcdCl9XHJcblxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdHNfX2Nvc3R9PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3N0X19zdWJ0b3RhbH0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VidG90YWxfX3RleHR9PlxyXG5cdFx0XHRcdFx0XHRcdFN1YnRvdGFsXHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1YnRvdGFsX19jb3VudH0+XHJcblx0XHRcdFx0XHRcdFx0JHshbG9hZGluZyAmJiBzZWxlY3RlZFByb2R1Y3RzLnJlZHVjZSgoYWNjLCBjdXIpID0+IHsgcmV0dXJuIGFjYyArIGN1ci5wcmljZSB9LCAwKX1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29zdF9fc2hpcHBpbmd9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNoaXBwaW5nX190ZXh0fT5cclxuXHRcdFx0XHRcdFx0XHRTaGlwcGluZ1xyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaGlwcGluZ19fY291bnR9PlxyXG5cdFx0XHRcdFx0XHRcdEZyZWVcclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29zdF9fdGF4ZXN9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRheGVzX190ZXh0fT5cclxuXHRcdFx0XHRcdFx0XHRUYXhlc1xyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YXhlc19fY291bnR9PlxyXG5cdFx0XHRcdFx0XHRcdHshbG9hZGluZyAmJiBzZWxlY3RlZFByb2R1Y3RzLnJlZHVjZSgoYWNjLCBjdXIpID0+IGFjYyArIGN1ci5wcmljZSwgMCkqMC4wM31cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29zdF9fdG90YWx9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvdGFsX190ZXh0fT5cclxuXHRcdFx0XHRcdFx0XHRUb3RhbFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3RhbF9fY291bnR9PlxyXG5cdFx0XHRcdFx0XHRcdCR7IWxvYWRpbmcgJiYgc2VsZWN0ZWRQcm9kdWN0cy5yZWR1Y2UoKGFjYywgY3VyKSA9PiBhY2MgKyBjdXIucHJpY2UsIDApICsgc2VsZWN0ZWRQcm9kdWN0cy5yZWR1Y2UoKGFjYywgY3VyKSA9PiBhY2MgKyBjdXIucHJpY2UsIDApKjAuMDN9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0c19faW5mb3JtYXRpb259PlxyXG5cdFx0XHRcdFx0QWxsIHB1cmNoYXNlcyBhcmUgc3ViamVjdCB0byBvdXIgVGVybXMgYW5kIENvbmRpdGlvbnMuXHJcblx0XHRcdFx0PC9mb290ZXI+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHtGQ30gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL09yZGVyLm1vZHVsZS5zY3NzJ1xyXG5cclxuY29uc3QgT3JkZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9yZGVyfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vcmRlcl9fdGl0bGV9PlxyXG5cdFx0XHRcdFRoYW5rIHlvdSBmb3IgeW91ciBvcmRlciFcclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3JkZXJfX251bWJlcn0+XHJcblx0XHRcdFx0T3JkZXIgbnVtYmVyIGlzOiAxODg3ODc3ODhcclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3JkZXJfX3RleHR9PlxyXG5cdFx0XHRcdFlvdXIgd2lsbCByZWNpZXZlIGFuIGVtYWlsIGNvbmZpcm1hdGlvbiBzaG9ydGx5IHRvIDxhIGhyZWY9XCJcIj5qb25hdGhhbi5zbWl0aEBnbWFpbC5jb208L2E+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9yZGVyX19lc3RpbWF0ZWR9PlxyXG5cdFx0XHRcdEVzdGltYXRlZCBkZWxpdmVyeSBEYXkgaXMgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYm9sZH0+RnJpZGF5IDFzdCBBcHJpbCAyMDE2PC9wPlxyXG5cdFx0XHQ8L2Rpdj5cdFxyXG5cdFx0XHQ8YSBjbGFzc05hbWU9e3N0eWxlcy5vcmRlcl9fcHJpbnRfcmVjaXBlfT5QcmludCBSZWNpcGU8L2E+XHJcblx0XHRcdFxyXG5cdFx0PC9kaXY+XHJcblxyXG5cdFx0XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcmRlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VHZW9sb2NhdGlvbiB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUdlb2xvY2F0aW9uJztcclxuaW1wb3J0IHsgdXNlSWRlbnRpZmljYXRpb25DYXJkIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlSWRlbnRpZmljYXRpb25DYXJkJztcclxuaW1wb3J0IHsgdXNlSW5wdXQgfSBmcm9tICcuLi8uLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCBJbnB1dE1hc2sgZnJvbSBcInJlYWN0LWlucHV0LW1hc2tcIjtcclxuaW1wb3J0IHsgZmFDcm9zc2hhaXJzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG4vL2ltcG9ydCBzZW50Q29udGV4dCBmcm9tICcuLi8uLi9zaGFyZWQvY29udGV4dCc7XHJcblxyXG5cclxuXHJcbmNvbnN0IFRhYnM6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG5cclxuXHJcblx0Y29uc3QgW3RvZ2dsZUNsYXNzLCBzZXRUb2dnbGVDbGFzc10gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xyXG5cdGNvbnN0IFtjYXJkVHlwZSwgc2V0Q2FyZFR5cGVdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcblxyXG5cdGNvbnN0IGZ1bGxfbmFtZSA9IHVzZUlucHV0KCcnLCB7aXNFbXB0eTogdHJ1ZSwgbWluTGVuZ3RoOiAzfSk7XHJcblx0Y29uc3Qgc3RyZWV0ID0gdXNlSW5wdXQoJycsIHtpc0VtcHR5OiB0cnVlfSk7XHJcblx0Y29uc3QgcGhvbmUgPSB1c2VJbnB1dCgnJywge2lzRW1wdHk6IHRydWV9KTtcclxuXHRjb25zdCBhcHQgPSB1c2VJbnB1dCgnJywge30pO1xyXG5cdGNvbnN0IGNpdHkgPSB1c2VJbnB1dCgnJywge2lzRW1wdHk6IHRydWV9KTtcclxuXHRjb25zdCBjb3VudHJ5ID0gdXNlSW5wdXQoJ0NvdW50cnknLCB7aXNFbXB0eTogdHJ1ZX0pO1xyXG5cdGNvbnN0IHppcCA9IHVzZUlucHV0KCcnLCB7aXNFbXB0eTogdHJ1ZX0pO1xyXG4gXHRjb25zdCBiID0gdXNlSW5wdXQoJycsIHt9KTtcclxuXHRjb25zdCBjYXJkID0gdXNlSW5wdXQoJycsIHt9KTtcclxuXHRjb25zdCBlbWFpbCA9IHVzZUlucHV0KCcnLCB7aXNFbWFpbDogZmFsc2V9KTtcclxuXHRcclxuXHRjb25zdCBnZW8gPSB1c2VHZW9sb2NhdGlvbigpOyBcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNldENhcmRUeXBlKHVzZUlkZW50aWZpY2F0aW9uQ2FyZChjYXJkLnZhbHVlKSk7XHJcblx0fSwgW2NhcmQudmFsdWVdKVxyXG5cclxuXHRcclxuXHJcblxyXG5cclxuXHJcblx0cmV0dXJuIChcclxuXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYmxvY2tfX2Zvcm1fX3RhYnNcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dG9nZ2xlQ2xhc3MgPT09IDEgPyBcInRhYnMgYWN0aXZlLXRhYnNcIiA6IFwidGFic1wifSBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGVDbGFzcygxKX0+U2hpcHBpbmc8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dG9nZ2xlQ2xhc3MgPT09IDIgPyBcInRhYnMgYWN0aXZlLXRhYnNcIiA6IFwidGFic1wifSBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGVDbGFzcygyKX0+QmlsbGluZzwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXt0b2dnbGVDbGFzcyA9PT0gMyA/IFwidGFicyBhY3RpdmUtdGFic1wiIDogXCJ0YWJzXCJ9IG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZUNsYXNzKDMpfT5QYXltZW50PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYmxvY2tfX2Zvcm1fX3RhYnNfX2NvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXt0b2dnbGVDbGFzcyA9PT0gMSA/IFwiY29udGVudCBhY3RpdmUtY29udGVudFwiIDogXCJjb250ZW50XCJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3RpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0U2hpcHBpbmcgaW5mb1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fcmVjaXBpZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19yZWNpcGllbnRfdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0UmVjaXBpZW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c1wiPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7KChiLmlzTmV4dCAmJiBmdWxsX25hbWUuaXNFbXB0eSkgfHwgKGIuaXNOZXh0ICYmIGZ1bGxfbmFtZS5pc01pbkxlbmd0aEVycm9yKSkgJiYgKDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlJz5QbGVhc2UgZW50ZXIgcmVjaXBpZW50IGZ1bGwgbmFtZSBhbmQgbWluIGxlbmd0aCA9IDM8L2Rpdj4pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17KChiLmlzTmV4dCAmJiBmdWxsX25hbWUuaXNFbXB0eSkgfHwgKGIuaXNOZXh0ICYmIGZ1bGxfbmFtZS5pc01pbkxlbmd0aEVycm9yKSkgPyBcImNvbnRlbnRfX2lucHV0c19mdWxsbmFtZSBmb2N1c2VkXCIgOiBcImNvbnRlbnRfX2lucHV0c19mdWxsbmFtZVwifSBwbGFjZWhvbGRlcj1cIkZ1bGwgTmFtZVwiIHZhbHVlPXtmdWxsX25hbWUudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gZnVsbF9uYW1lLm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBmdWxsX25hbWUub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfZGF5dGltZV9jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsoKGIuaXNOZXh0ICYmIHBob25lLmlzRW1wdHkpKSAmJiAoPGRpdiBjbGFzc05hbWU9J21lc3NhZ2UnPlBsZWFzZSBlbnRlciByZWNpcGllbnQgcGhvbmUgaW4gZm9ybWF0ICs3ICgwMDApIDAwMCAwMCAwMDwvZGl2Pil9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dE1hc2sgbmFtZT1cInBob25lXCIgbWFzaz1cIis3XFwoOTk5KSA5OTktOTktOTlcIiB0eXBlPVwidGVsXCIgY2xhc3NOYW1lPXsoKGIuaXNOZXh0ICYmIHBob25lLmlzRW1wdHkpKSA/IFwiY29udGVudF9faW5wdXRzX2RheXRpbWUgZm9jdXNlZFwiIDogXCJjb250ZW50X19pbnB1dHNfZGF5dGltZVwifSBpZD1cInBob25lTnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJEYXRldGltZSBQaG9uZVwiIHZhbHVlPXtwaG9uZS52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBwaG9uZS5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gcGhvbmUub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvciA9XCJjb250ZW50X19pbnB1dHNfZGF5dGltZV9sYWJlbFwiPkZvciBkZWxpdmVyeSBxdWVzdGlvbnMgb25seTwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fYWRkcmVzc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fYWRkcmVzc190ZXh0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBZGRyZXNzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c1wiPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7KChiLmlzTmV4dCAmJiBzdHJlZXQuaXNFbXB0eSkpICYmICg8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZSc+UGxlYXNlIGVudGVyIHJlY2lwaWVudCBzdHJlZXQ8L2Rpdj4pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17KChiLmlzTmV4dCAmJiBzdHJlZXQuaXNFbXB0eSkpID8gXCJjb250ZW50X19pbnB1dHNfc3RyZWV0IGZvY3VzZWRcIiA6IFwiY29udGVudF9faW5wdXRzX3N0cmVldFwifSBwbGFjZWhvbGRlcj1cIlN0cmVldCBBZGRyZXNzXCIgdmFsdWU9e3N0cmVldC52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBzdHJlZXQub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IHN0cmVldC5vbkJsdXIoZSl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfYXB0XCIgcGxhY2Vob2xkZXI9XCJBcHQsIFN1aXRlLCBCbGRnLCBHYXRlIENvZGUuIChvcHRpb25hbClcIiB2YWx1ZT17YXB0LnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IGFwdC5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gYXB0Lm9uQmx1cihlKX0vPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfaWNvblwiPlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY2l0eVwiIGNsYXNzTmFtZT17KChiLmlzTmV4dCAmJiBjaXR5LmlzRW1wdHkpKSA/IFwiY29udGVudF9faW5wdXRzX2NpdHkgZm9jdXNlZFwiIDogXCJjb250ZW50X19pbnB1dHNfY2l0eVwifSBwbGFjZWhvbGRlcj1cIkNpdHlcIiB2YWx1ZT17Z2VvLmNpdHkgPT0gdW5kZWZpbmVkID8gY2l0eS52YWx1ZSA6IGdlby5jaXR5fSBvbkNoYW5nZT17KGUpID0+IGNpdHkub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IGNpdHkub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ3Jvc3NoYWlyc30gc3R5bGU9e3twb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAnNDAlJywgcmlnaHQ6ICcxMHB4JywgZm9udFNpemU6ICcyMHB4JywgY3Vyc29yOiAncG9pbnRlcid9fSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19fcm93XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19fcm93X2NvdW50cnlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiBjb3VudHJ5Lm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBjb3VudHJ5Lm9uQmx1cihlKX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT17Z2VvLmNvdW50cnkgPT0gdW5kZWZpbmVkID8gY291bnRyeS52YWx1ZSA6IGdlby5jb3VudHJ5fSBzZWxlY3RlZCBkaXNhYmxlZD57KGdlby5jb3VudHJ5ID09IHVuZGVmaW5lZCkgPyBjb3VudHJ5LnZhbHVlIDogZ2VvLmNvdW50cnl9PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlJ1c3NpYVwiPlJ1c3NpYTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJVU0FcIj5VU0E8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiVUtcIj5VSzwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJVa3JhaW5lXCI+VWtyYWluZTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17KChiLmlzTmV4dCAmJiB6aXAuaXNFbXB0eSkpID8gXCJjb250ZW50X19pbnB1dHNfX3Jvd196aXAgZm9jdXNlZFwiIDogXCJjb250ZW50X19pbnB1dHNfX3Jvd196aXBcIn0gcGxhY2Vob2xkZXI9XCJaSVBcIiB2YWx1ZT17Z2VvLnppcCA9PSB1bmRlZmluZWQgPyB6aXAudmFsdWUgOiBnZW8uemlwfSBvbkNoYW5nZT17KGUpID0+IHppcC5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gemlwLm9uQmx1cihlKX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0eyhmdWxsX25hbWUuaW5wdXRWYWxpZCAmJiBwaG9uZS5pbnB1dFZhbGlkICYmIHN0cmVldC5pbnB1dFZhbGlkICYmIGNpdHkuaW5wdXRWYWxpZCAmJiBjb3VudHJ5LmlucHV0VmFsaWQgJiYgemlwLmlucHV0VmFsaWQpICYmIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZUNsYXNzKDIpfSBjbGFzc05hbWU9XCJjb250ZW50X19idXR0b25cIiBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX0+Q29udGludWU8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0eyEoZnVsbF9uYW1lLmlucHV0VmFsaWQgJiYgcGhvbmUuaW5wdXRWYWxpZCAmJiBzdHJlZXQuaW5wdXRWYWxpZCAmJiBjaXR5LmlucHV0VmFsaWQgJiYgY291bnRyeS5pbnB1dFZhbGlkICYmIHppcC5pbnB1dFZhbGlkKSAmJiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJjb250ZW50X19idXR0b25cIiBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX0+Q29udGludWU8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXt0b2dnbGVDbGFzcyA9PT0gMiA/IFwiY29udGVudCBhY3RpdmUtY29udGVudFwiIDogXCJjb250ZW50XCJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3RpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0QmlsbGluZyBJbmZvcm1hdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19yZWNpcGllbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3JlY2lwaWVudF90ZXh0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRCaWxsaW5nIENvbnRhY3RcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzXCI+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7KChiLmlzTmV4dCAmJiBmdWxsX25hbWUuaXNFbXB0eSkgfHwgKGIuaXNOZXh0ICYmIGZ1bGxfbmFtZS5pc01pbkxlbmd0aEVycm9yKSkgJiYgKDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlJz5QbGVhc2UgZW50ZXIgcmVjaXBpZW50IGZ1bGwgbmFtZSBhbmQgbWluIGxlbmd0aCA9IDM8L2Rpdj4pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17KChiLmlzTmV4dCAmJiBmdWxsX25hbWUuaXNFbXB0eSkgfHwgKGIuaXNOZXh0ICYmIGZ1bGxfbmFtZS5pc01pbkxlbmd0aEVycm9yKSkgPyBcImNvbnRlbnRfX2lucHV0c19mdWxsbmFtZSBmb2N1c2VkXCIgOiBcImNvbnRlbnRfX2lucHV0c19mdWxsbmFtZVwifSBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiRnVsbCBOYW1lXCIgdmFsdWU9e2Z1bGxfbmFtZS52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBmdWxsX25hbWUub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IGZ1bGxfbmFtZS5vbkJsdXIoZSl9Lz5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHsoYi5pc05leHQgJiYgZW1haWwuaXNFbWFpbEVycm9yKSAmJiAoPGRpdiBjbGFzc05hbWU9J21lc3NhZ2UnPlBsZWFzZSBlbnRlciBjb3JyZWN0IGVtYWlsPC9kaXY+KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9eygoYi5pc05leHQgJiYgZW1haWwuaXNFbWFpbEVycm9yKSkgPyBcImNvbnRlbnRfX2lucHV0c19lbWFpbCBmb2N1c2VkXCIgOiBcImNvbnRlbnRfX2lucHV0c19lbWFpbFwifSBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3NcIiB2YWx1ZT17ZW1haWwudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gZW1haWwub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IGVtYWlsLm9uQmx1cihlKX0gbmFtZT1cImVtYWlsXCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fYWRkcmVzc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fYWRkcmVzc190ZXh0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRCaWxsaW5nIEFkZHJlc3NcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHsoKGIuaXNOZXh0ICYmIHN0cmVldC5pc0VtcHR5KSkgJiYgKDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlJz5QbGVhc2UgZW50ZXIgcmVjaXBpZW50IHN0cmVldDwvZGl2Pil9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXsoKGIuaXNOZXh0ICYmIHN0cmVldC5pc0VtcHR5KSkgPyBcImNvbnRlbnRfX2lucHV0c19zdHJlZXQgZm9jdXNlZFwiIDogXCJjb250ZW50X19pbnB1dHNfc3RyZWV0XCJ9IHBsYWNlaG9sZGVyPVwiU3RyZWV0IEFkZHJlc3NcIiB2YWx1ZT17c3RyZWV0LnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHN0cmVldC5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gc3RyZWV0Lm9uQmx1cihlKX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzX2FwdFwiIHBsYWNlaG9sZGVyPVwiQXB0LCBTdWl0ZSwgQmxkZywgR2F0ZSBDb2RlLiAob3B0aW9uYWwpXCIgdmFsdWU9e2FwdC52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBhcHQub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IGFwdC5vbkJsdXIoZSl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19pY29uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNpdHlcIiBjbGFzc05hbWU9eygoYi5pc05leHQgJiYgY2l0eS5pc0VtcHR5KSkgPyBcImNvbnRlbnRfX2lucHV0c19jaXR5IGZvY3VzZWRcIiA6IFwiY29udGVudF9faW5wdXRzX2NpdHlcIn0gcGxhY2Vob2xkZXI9XCJDaXR5XCIgdmFsdWU9e2dlby5jaXR5ID09IHVuZGVmaW5lZCA/IGNpdHkudmFsdWUgOiBnZW8uY2l0eX0gb25DaGFuZ2U9eyhlKSA9PiBjaXR5Lm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBjaXR5Lm9uQmx1cihlKX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNyb3NzaGFpcnN9IHN0eWxlPXt7cG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJzQwJScsIHJpZ2h0OiAnMTBweCcsIGZvbnRTaXplOiAnMjBweCcsIGN1cnNvcjogJ3BvaW50ZXInfX0gLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19fcm93XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19fcm93X2NvdW50cnlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiBjb3VudHJ5Lm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBjb3VudHJ5Lm9uQmx1cihlKX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT17Z2VvLmNvdW50cnkgPT0gdW5kZWZpbmVkID8gY291bnRyeS52YWx1ZSA6IGdlby5jb3VudHJ5fSBzZWxlY3RlZCBkaXNhYmxlZD57KGdlby5jb3VudHJ5ID09PSB1bmRlZmluZWQpID8gY291bnRyeS52YWx1ZSA6IGdlby5jb3VudHJ5fTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJSdXNzaWFcIj5SdXNzaWE8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiVVNBXCI+VVNBPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlVLXCI+VUs8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiVWtyYWluZVwiPlVrcmFpbmU8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9eygoYi5pc05leHQgJiYgemlwLmlzRW1wdHkpKSA/IFwiY29udGVudF9faW5wdXRzX19yb3dfemlwIGZvY3VzZWRcIiA6IFwiY29udGVudF9faW5wdXRzX19yb3dfemlwXCJ9IHBsYWNlaG9sZGVyPVwiWklQXCIgdmFsdWU9e2dlby56aXAgPT0gdW5kZWZpbmVkID8gemlwLnZhbHVlIDogZ2VvLnppcH0gb25DaGFuZ2U9eyhlKSA9PiB6aXAub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IHppcC5vbkJsdXIoZSl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHsoZnVsbF9uYW1lLmlucHV0VmFsaWQgJiYgc3RyZWV0LmlucHV0VmFsaWQgJiYgY2l0eS5pbnB1dFZhbGlkICYmIGNvdW50cnkuaW5wdXRWYWxpZCAmJiB6aXAuaW5wdXRWYWxpZCkgJiYgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlQ2xhc3MoMyl9IGNsYXNzTmFtZT1cImNvbnRlbnRfX2J1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcid9fT5Db250aW51ZTwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7IShmdWxsX25hbWUuaW5wdXRWYWxpZCAmJiBzdHJlZXQuaW5wdXRWYWxpZCAmJiBjaXR5LmlucHV0VmFsaWQgJiYgY291bnRyeS5pbnB1dFZhbGlkICYmIHppcC5pbnB1dFZhbGlkKSAmJiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJjb250ZW50X19idXR0b25cIiBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX0+Q29udGludWU8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXt0b2dnbGVDbGFzcyA9PT0gMyA/IFwiY29udGVudCBhY3RpdmUtY29udGVudFwiIDogXCJjb250ZW50XCJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3RpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0UGF5bWVudFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19zc2xcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3NzbF9sb2dvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz0nLi4vLi4vbG9jay5wbmcnIGFsdD1cIlwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19zc2xfdGV4dFwiPlRoaXMgaXMgYSBzZWN1cmUgMTI4LWJpdCBTU0wgZW5jcnlwdGVkIHBheW1lbnQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fcmVjaXBpZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19yZWNpcGllbnRfdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Q2FyZGhvbGRlciBOYW1lXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7KChiLmlzTmV4dCAmJiBmdWxsX25hbWUuaXNFbXB0eSkgfHwgKGIuaXNOZXh0ICYmIGZ1bGxfbmFtZS5pc01pbkxlbmd0aEVycm9yKSkgJiYgKDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlJz5QbGVhc2UgZW50ZXIgcmVjaXBpZW50IGZ1bGwgbmFtZSBhbmQgbWluIGxlbmd0aCA9IDM8L2Rpdj4pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17KChiLmlzTmV4dCAmJiBmdWxsX25hbWUuaXNFbXB0eSkgfHwgKGIuaXNOZXh0ICYmIGZ1bGxfbmFtZS5pc01pbkxlbmd0aEVycm9yKSkgPyBcImNvbnRlbnRfX2lucHV0c19mdWxsbmFtZSBmb2N1c2VkXCIgOiBcImNvbnRlbnRfX2lucHV0c19mdWxsbmFtZVwifSBwbGFjZWhvbGRlcj1cIk5hbWUgYXMgaXQgYXBwZWFycyBvbiB5b3VyIGNhcmRcIiB2YWx1ZT17ZnVsbF9uYW1lLnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IGZ1bGxfbmFtZS5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gZnVsbF9uYW1lLm9uQmx1cihlKX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fYWRkcmVzc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fYWRkcmVzc190ZXh0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRDYXJkIE51bWJlclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRNYXNrIG1hc2s9XCI5OTk5IDk5OTkgOTk5OSA5OTk5XCIgbmFtZT1cImNhcmRcIiB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19jYXJkXCIgcGxhY2Vob2xkZXI9XCJYWFhYIFhYWFggWFhYWCBYWFhYIFhYWFhcIiB2YWx1ZT17Y2FyZC52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBjYXJkLm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBjYXJkLm9uQmx1cihlKX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17Y2FyZFR5cGV9IGFsdD1cIlwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2NhcmRzX19pbmZvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19jYXJkc19faW5mb19fZXhwaXJlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2NhcmRzX2luZm9fX2V4cGlyZV90ZXh0XCI+RXhwaXJlIERhdGU8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dE1hc2sgbWFzaz1cIjk5IC8gOTlcIiBwbGFjZWhvbGRlcj1cIk1NIC8gWVlcIiB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImNvbnRlbnRfX2NhcmRzX2luZm9fX2V4cGlyZV9pbnB1dFwiIG5hbWU9XCJtZXNzYWdlXCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fY2FyZHNfX2luZm9fX3NlY3VyaXR5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2NhcmRzX2luZm9fX3NlY3VyaXR5X3RleHRcIj5TZWN1cml0eSBDb2RlPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRNYXNrIG1hc2s9XCI5OTlcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWFhYXCIgY2xhc3NOYW1lPVwiY29udGVudF9fY2FyZHNfaW5mb19fc2VjdXJpdHlfaW5wdXRcIiBuYW1lPVwic3ViamVjdFwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiY29udGVudF9fYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFBheSBTZWN1cmVseVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cdFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJzO1xyXG4iLCJpbXBvcnQgZW1haWxqcyBmcm9tICdlbWFpbGpzLWNvbSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzZW50Q29udGV4dCBmcm9tICcuLi9zaGFyZWQvY29udGV4dCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VuZEVtYWlsKGUpIHtcclxuXHJcblx0Y29uc3Qge3N0YXRlLCBzZXRTdGF0ZX0gPSBSZWFjdC51c2VDb250ZXh0KHNlbnRDb250ZXh0KTtcclxuXHJcblxyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuICAgXHJcblx0ZW1haWxqcy5zZW5kRm9ybSgnc2VydmljZV9vd29tb2V1JywgJ3RlbXBsYXRlX3g5dGkydHYnLCBlLnRhcmdldCwgJ3VzZXJfQ0RxUE9PNzkySldSaWNHT2oyd1duJylcclxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgKCkgPT4gc2V0U3RhdGUodHJ1ZSlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC50ZXh0KTtcclxuXHJcbiAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IudGV4dCk7XHJcbiAgICAgIH0pO1xyXG5cdCAgZS50YXJnZXQucmVzZXQ7XHJcbn07XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlR2VvbG9jYXRpb24gPSAoKSA9PiB7XHJcblxyXG5cdGNvbnN0IFtjaXR5LCBzZXRDaXR5XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cdGNvbnN0IFtjb3VudHJ5LCBzZXRDb3VudHJ5XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cdGNvbnN0IFt6aXAsIHNldFppcF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuXHJcblx0Y29uc3Qgc3VjY2Vzc0NhbGxiYWNrID0gYXN5bmMgKHVybDogc3RyaW5nKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuXHRcdGF3YWl0IGZldGNoKHVybClcclxuICBcdFx0XHQudGhlbihkID0+IGQuanNvbigpKVxyXG5cdFx0XHQudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdHNldENpdHkocmVzLmNpdHkpO1xyXG5cdFx0XHRcdHNldENvdW50cnkocmVzLmNvdW50cnlfbmFtZSk7XHJcblx0XHRcdFx0c2V0WmlwKHJlcy5wb3N0YWwpO1xyXG5cdFx0XHR9KVxyXG5cdCAgfVxyXG5cclxuXHQgIFxyXG5cdCAgY29uc3QgZXJyb3JDYWxsYmFjayA9IChlcnJvcjogYW55KTogdm9pZCA9PiB7XHJcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKVxyXG5cdCAgfVxyXG5cclxuXHQvLyBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcblx0ICBzdWNjZXNzQ2FsbGJhY2soJ2h0dHBzOi8vaXBhcGkuY28vanNvbi8nKTtcclxuXHJcblx0ICByZXR1cm4ge1xyXG5cdFx0Y2l0eSxcclxuXHRcdGNvdW50cnksXHJcblx0XHR6aXBcclxuXHR9XHJcblx0XHJcblx0XHRcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gdXNlSWRlbnRpZmljYXRpb25DYXJkKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcgXHJcbntcclxuICAgIC8vIHZpc2FcclxuICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJeNFwiKTtcclxuICAgIGlmICh2YWx1ZS5tYXRjaChyZWdleCkgIT0gbnVsbClcclxuICAgICAgICByZXR1cm4gXCIuLi9pbWcvdGFicy9jYXJkcy92aXNhLnBuZ1wiO1xyXG5cclxuICAgIC8vIE1hc3RlcmNhcmQgXHJcbiAgICAvLyBVcGRhdGVkIGZvciBNYXN0ZXJjYXJkIDIwMTcgQklOcyBleHBhbnNpb25cclxuICAgICBpZiAoL14oNVsxLTVdWzAtOV17MTR9fDIoMjJbMS05XVswLTldezEyfXwyWzMtOV1bMC05XXsxM318WzMtNl1bMC05XXsxNH18N1swLTFdWzAtOV17MTN9fDcyMFswLTldezEyfSkpJC8udGVzdCh2YWx1ZSkpIFxyXG4gICAgICAgIHJldHVybiBcIk1hc3RlcmNhcmRcIjtcclxuXHJcbiAgICAvLyAvLyBBTUVYXHJcbiAgICAvLyByZSA9IG5ldyBSZWdFeHAoXCJeM1s0N11cIik7XHJcbiAgICAvLyBpZiAobnVtYmVyLm1hdGNoKHJlKSAhPSBudWxsKVxyXG4gICAgLy8gICAgIHJldHVybiBcIkFNRVhcIjtcclxuXHJcbiAgICAvLyAvLyBEaXNjb3ZlclxyXG4gICAgLy8gcmUgPSBuZXcgUmVnRXhwKFwiXig2MDExfDYyMigxMls2LTldfDFbMy05XVswLTldfFsyLThdWzAtOV17Mn18OVswLTFdWzAtOV18OTJbMC01XXw2NFs0LTldKXw2NSlcIik7XHJcbiAgICAvLyBpZiAobnVtYmVyLm1hdGNoKHJlKSAhPSBudWxsKVxyXG4gICAgLy8gICAgIHJldHVybiBcIkRpc2NvdmVyXCI7XHJcblxyXG4gICAgLy8gLy8gRGluZXJzXHJcbiAgICAvLyByZSA9IG5ldyBSZWdFeHAoXCJeMzZcIik7XHJcbiAgICAvLyBpZiAobnVtYmVyLm1hdGNoKHJlKSAhPSBudWxsKVxyXG4gICAgLy8gICAgIHJldHVybiBcIkRpbmVyc1wiO1xyXG5cclxuICAgIC8vIC8vIERpbmVycyAtIENhcnRlIEJsYW5jaGVcclxuICAgIC8vIHJlID0gbmV3IFJlZ0V4cChcIl4zMFswLTVdXCIpO1xyXG4gICAgLy8gaWYgKG51bWJlci5tYXRjaChyZSkgIT0gbnVsbClcclxuICAgIC8vICAgICByZXR1cm4gXCJEaW5lcnMgLSBDYXJ0ZSBCbGFuY2hlXCI7XHJcblxyXG4gICAgLy8gLy8gSkNCXHJcbiAgICAvLyByZSA9IG5ldyBSZWdFeHAoXCJeMzUoMls4OV18WzMtOF1bMC05XSlcIik7XHJcbiAgICAvLyBpZiAobnVtYmVyLm1hdGNoKHJlKSAhPSBudWxsKVxyXG4gICAgLy8gICAgIHJldHVybiBcIkpDQlwiO1xyXG5cclxuICAgIC8vIC8vIFZpc2EgRWxlY3Ryb25cclxuICAgIC8vIHJlID0gbmV3IFJlZ0V4cChcIl4oNDAyNnw0MTc1MDB8NDUwOHw0ODQ0fDQ5MSgzfDcpKVwiKTtcclxuICAgIC8vIGlmIChudW1iZXIubWF0Y2gocmUpICE9IG51bGwpXHJcbiAgICAvLyAgICAgcmV0dXJuIFwiVmlzYSBFbGVjdHJvblwiO1xyXG5cclxuICAgIHJldHVybiBcIm51bGxcIjtcclxufSIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVZhbGlkYXRpb24gfSBmcm9tICcuL3VzZVZhbGlkYXRpb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUlucHV0ID0gKGluaXRpYWxWYWx1ZTogc3RyaW5nLCB2YWxpZGF0aW9uczogT2JqZWN0KSA9PiB7XHJcblxyXG5cdGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPihpbml0aWFsVmFsdWUpO1xyXG5cdGNvbnN0IFtpc0RpcnR5LCBzZXRJc0RpcnR5XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHRjb25zdCBbaXNOZXh0LCBzZXRJc05leHRdID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcblx0Y29uc3QgdmFsaWQgPSB1c2VWYWxpZGF0aW9uKHZhbHVlLCB2YWxpZGF0aW9ucyk7XHJcblxyXG5cclxuXHRjb25zdCBvbkNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFNlbGVjdEVsZW1lbnQ+KTogdm9pZCA9PiB7XHJcblx0XHRzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBvbkJsdXIgPSAoZTogUmVhY3QuRm9jdXNFdmVudDxIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFNlbGVjdEVsZW1lbnQ+KTogdm9pZCA9PiB7XHJcblx0XHRzZXRJc0RpcnR5KHRydWUpO1xyXG5cdH1cclxuXHJcblx0Y29uc3Qgb25DbGljayA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KTogdm9pZCA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRzZXRJc05leHQodHJ1ZSk7XHJcblxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHZhbHVlLFxyXG5cdFx0aXNOZXh0LFxyXG5cdFx0b25DbGljayxcclxuXHRcdG9uQ2hhbmdlLFxyXG5cdFx0b25CbHVyLFxyXG5cdFx0aXNEaXJ0eSxcclxuXHRcdC4uLnZhbGlkXHJcblx0fVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVZhbGlkYXRpb24gPSAodmFsdWU6IHN0cmluZywgdmFsaWRhdGlvbnM6IE9iamVjdCkgPT4ge1xyXG5cclxuXHRjb25zdCBbaXNFbXB0eSwgc2V0SXNFbXB0eV0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuXHRjb25zdCBbaXNFbWFpbEVycm9yLCBzZXRJc0VtYWlsRXJyb3JdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cdGNvbnN0IFtpc01pbkxlbmd0aEVycm9yLCBzZXRJc01pbkxlbmd0aEVycm9yXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHRjb25zdCBbaW5wdXRWYWxpZCwgc2V0SW5wdXRWYWxpZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRmb3IgKGNvbnN0IHZhbGlkYXRpb24gaW4gdmFsaWRhdGlvbnMpIHtcclxuXHRcdFx0c3dpdGNoICh2YWxpZGF0aW9uKSB7XHJcblx0XHRcdFx0Y2FzZSAnbWluTGVuZ3RoJzpcclxuXHRcdFx0XHRcdHZhbHVlLmxlbmd0aCA8IHZhbGlkYXRpb25zW3ZhbGlkYXRpb25dID8gc2V0SXNNaW5MZW5ndGhFcnJvcih0cnVlKSA6IHNldElzTWluTGVuZ3RoRXJyb3IoZmFsc2UpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnaXNFbXB0eSc6XHJcblx0XHRcdFx0XHR2YWx1ZSA/IHNldElzRW1wdHkoZmFsc2UpIDogc2V0SXNFbXB0eSh0cnVlKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ2lzUGhvbmUnOlxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnaXNFbWFpbCc6XHJcblx0XHRcdFx0XHRjb25zdCByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuICAgIFx0XHRcdFx0KHJlLnRlc3QoU3RyaW5nKHZhbHVlKS50b0xvd2VyQ2FzZSgpKSkgPyBzZXRJc0VtYWlsRXJyb3IoZmFsc2UpIDogc2V0SXNFbWFpbEVycm9yKHRydWUpXHJcblx0XHRcdFx0XHRicmVha1xyXG5cdFx0XHR9XHRcclxuXHRcdH1cclxuXHR9LCBbdmFsdWVdKVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKGlzTWluTGVuZ3RoRXJyb3IgfHwgaXNFbXB0eSkge1xyXG5cdFx0XHRzZXRJbnB1dFZhbGlkKGZhbHNlKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRzZXRJbnB1dFZhbGlkKHRydWUpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fSwgW2lzRW1wdHksIGlzTWluTGVuZ3RoRXJyb3JdKVxyXG5cclxuXHRcclxuXHRcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGlzRW1wdHksXHJcblx0XHRpc01pbkxlbmd0aEVycm9yLFxyXG5cdFx0aW5wdXRWYWxpZCxcclxuXHRcdGlzRW1haWxFcnJvclxyXG5cdH1cclxufSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gSW1hZ2UxO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfaGVhZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvaGVhZFwiKSk7XG52YXIgX3RvQmFzZTY0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvdG8tYmFzZS02NFwiKTtcbnZhciBfaW1hZ2VDb25maWcgPSByZXF1aXJlKFwiLi4vc2VydmVyL2ltYWdlLWNvbmZpZ1wiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgICBmb3IodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbihzeW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuICAgICAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0ge1xuICAgIH07XG4gICAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgIHZhciBrZXksIGk7XG4gICAgZm9yKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5jb25zdCBsb2FkZWRJbWFnZVVSTHMgPSBuZXcgU2V0KCk7XG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBnbG9iYWwuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZTtcbn1cbmNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTID0gW1xuICAgICdsYXp5JyxcbiAgICAnZWFnZXInLFxuICAgIHVuZGVmaW5lZFxuXTtcbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwKFtcbiAgICBbXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgZGVmYXVsdExvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnaW1naXgnLFxuICAgICAgICBpbWdpeExvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnY2xvdWRpbmFyeScsXG4gICAgICAgIGNsb3VkaW5hcnlMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2FrYW1haScsXG4gICAgICAgIGFrYW1haUxvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnY3VzdG9tJyxcbiAgICAgICAgY3VzdG9tTG9hZGVyXG4gICAgXSwgXG5dKTtcbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICAgJ2ZpbGwnLFxuICAgICdmaXhlZCcsXG4gICAgJ2ludHJpbnNpYycsXG4gICAgJ3Jlc3BvbnNpdmUnLFxuICAgIHVuZGVmaW5lZCwgXG5dO1xuZnVuY3Rpb24gaXNTdGF0aWNSZXF1aXJlKHNyYykge1xuICAgIHJldHVybiBzcmMuZGVmYXVsdCAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTdGF0aWNJbWFnZURhdGEoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5zcmMgIT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzU3RhdGljSW1wb3J0KHNyYykge1xuICAgIHJldHVybiB0eXBlb2Ygc3JjID09PSAnb2JqZWN0JyAmJiAoaXNTdGF0aWNSZXF1aXJlKHNyYykgfHwgaXNTdGF0aWNJbWFnZURhdGEoc3JjKSk7XG59XG5jb25zdCB7IGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyAsIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMgLCBsb2FkZXI6IGNvbmZpZ0xvYWRlciAsIHBhdGg6IGNvbmZpZ1BhdGggLCBkb21haW5zOiBjb25maWdEb21haW5zICwgIH0gPSBwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyB8fCBfaW1hZ2VDb25maWcuaW1hZ2VDb25maWdEZWZhdWx0O1xuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFtcbiAgICAuLi5jb25maWdEZXZpY2VTaXplcyxcbiAgICAuLi5jb25maWdJbWFnZVNpemVzXG5dO1xuY29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSwgYik9PmEgLSBiXG4pO1xuYWxsU2l6ZXMuc29ydCgoYSwgYik9PmEgLSBiXG4pO1xuZnVuY3Rpb24gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKSB7XG4gICAgaWYgKHNpemVzICYmIChsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykpIHtcbiAgICAgICAgLy8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbiAgICAgICAgY29uc3Qgdmlld3BvcnRXaWR0aFJlID0gLyhefFxccykoMT9cXGQ/XFxkKXZ3L2c7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRTaXplcyA9IFtdO1xuICAgICAgICBmb3IobGV0IG1hdGNoOyBtYXRjaCA9IHZpZXdwb3J0V2lkdGhSZS5leGVjKHNpemVzKTsgbWF0Y2gpe1xuICAgICAgICAgICAgcGVyY2VudFNpemVzLnB1c2gocGFyc2VJbnQobWF0Y2hbMl0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGVyY2VudFNpemVzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3Qgc21hbGxlc3RSYXRpbyA9IE1hdGgubWluKC4uLnBlcmNlbnRTaXplcykgKiAwLjAxO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3aWR0aHM6IGFsbFNpemVzLmZpbHRlcigocyk9PnMgPj0gY29uZmlnRGV2aWNlU2l6ZXNbMF0gKiBzbWFsbGVzdFJhdGlvXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoczogYWxsU2l6ZXMsXG4gICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHwgbGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgd2lkdGhzID0gW1xuICAgICAgICAuLi5uZXcgU2V0KC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAgIC8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuICAgICAgICAvLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbiAgICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgICAgLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbiAgICAgICAgLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuICAgICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgICAgLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuICAgICAgICBbXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIHdpZHRoICogMiAvKiwgd2lkdGggKiAzKi8gXG4gICAgICAgIF0ubWFwKCh3KT0+YWxsU2l6ZXMuZmluZCgocCk9PnAgPj0gd1xuICAgICAgICAgICAgKSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgICApKSwgXG4gICAgXTtcbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aHMsXG4gICAgICAgIGtpbmQ6ICd4J1xuICAgIH07XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHsgc3JjICwgdW5vcHRpbWl6ZWQgLCBsYXlvdXQgLCB3aWR0aCAsIHF1YWxpdHkgLCBzaXplcyAsIGxvYWRlciAgfSkge1xuICAgIGlmICh1bm9wdGltaXplZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzaXplczogdW5kZWZpbmVkXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHsgd2lkdGhzICwga2luZCAgfSA9IGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcyk7XG4gICAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgICAgICBzcmNTZXQ6IHdpZHRocy5tYXAoKHcsIGkpPT5gJHtsb2FkZXIoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3XG4gICAgICAgICAgICB9KX0gJHtraW5kID09PSAndycgPyB3IDogaSArIDF9JHtraW5kfWBcbiAgICAgICAgKS5qb2luKCcsICcpLFxuICAgICAgICAvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuICAgICAgICAvLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4gICAgICAgIC8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbiAgICAgICAgLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbiAgICAgICAgLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4gICAgICAgIC8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94LlxuICAgICAgICBzcmM6IGxvYWRlcih7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoc1tsYXN0XVxuICAgICAgICB9KVxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRJbnQoeCkge1xuICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wcykge1xuICAgIGNvbnN0IGxvYWQgPSBsb2FkZXJzLmdldChjb25maWdMb2FkZXIpO1xuICAgIGlmIChsb2FkKSB7XG4gICAgICAgIHJldHVybiBsb2FkKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgcm9vdDogY29uZmlnUGF0aFxuICAgICAgICB9LCBsb2FkZXJQcm9wcykpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke19pbWFnZUNvbmZpZy5WQUxJRF9MT0FERVJTLmpvaW4oJywgJyl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YCk7XG59XG4vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gaGFuZGxlTG9hZGluZyhpbWcsIHNyYywgbGF5b3V0LCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpIHtcbiAgICBpZiAoIWltZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUxvYWQgPSAoKT0+e1xuICAgICAgICBpZiAoIWltZy5zcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgICAgICAgICAgY29uc3QgcCA9ICdkZWNvZGUnIGluIGltZyA/IGltZy5kZWNvZGUoKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgcC5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgfSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5maWx0ZXIgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbG9hZGVkSW1hZ2VVUkxzLmFkZChzcmMpO1xuICAgICAgICAgICAgICAgIGlmIChvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IG5hdHVyYWxXaWR0aCAsIG5hdHVyYWxIZWlnaHQgIH0gPSBpbWc7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBhc3MgYmFjayByZWFkLW9ubHkgcHJpbWl0aXZlIHZhbHVlcyBidXQgbm90IHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyB1bmRlcmx5aW5nIERPTSBlbGVtZW50IGJlY2F1c2UgaXQgY291bGQgYmUgbWlzdXNlZC5cbiAgICAgICAgICAgICAgICAgICAgb25Mb2FkaW5nQ29tcGxldGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbEhlaWdodFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChyZWYgPSBpbWcucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZ2V0Q29tcHV0ZWRTdHlsZShpbWcucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJyAmJiBwYXJlbnQuZGlzcGxheSA9PT0gJ2ZsZXgnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IGFzIGEgY2hpbGQgb2YgYSBmbGV4IGNvbnRhaW5lci4gQ29uc2lkZXIgd3JhcHBpbmcgdGhlIGltYWdlIHdpdGggYSBkaXYgdG8gY29uZmlndXJlIHRoZSB3aWR0aC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZmlsbCcgJiYgcGFyZW50LnBvc2l0aW9uICE9PSAncmVsYXRpdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IHdpdGggYSBwYXJlbnQgdXNpbmcgcG9zaXRpb246XCIke3BhcmVudC5wb3NpdGlvbn1cIi4gQ29uc2lkZXIgY2hhbmdpbmcgdGhlIHBhcmVudCBzdHlsZSB0byBwb3NpdGlvbjpcInJlbGF0aXZlXCIgd2l0aCBhIHdpZHRoIGFuZCBoZWlnaHQuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKGltZy5jb21wbGV0ZSkge1xuICAgICAgICAvLyBJZiB0aGUgcmVhbCBpbWFnZSBmYWlscyB0byBsb2FkLCB0aGlzIHdpbGwgc3RpbGwgcmVtb3ZlIHRoZSBwbGFjZWhvbGRlci5cbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3Igbm93LCBhbmQgd2lsbCBiZSByZXZpc2l0ZWQgd2hlbiBlcnJvclxuICAgICAgICAvLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuICAgICAgICBoYW5kbGVMb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW1nLm9ubG9hZCA9IGhhbmRsZUxvYWQ7XG4gICAgfVxufVxuZnVuY3Rpb24gSW1hZ2UxKF9wYXJhbSkge1xuICAgIHZhciB7IHNyYyAsIHNpemVzICwgdW5vcHRpbWl6ZWQgPWZhbHNlICwgcHJpb3JpdHkgPWZhbHNlICwgbG9hZGluZyAsIGxhenlCb3VuZGFyeSA9JzIwMHB4JyAsIGNsYXNzTmFtZSAsIHF1YWxpdHkgLCB3aWR0aCAsIGhlaWdodCAsIG9iamVjdEZpdCAsIG9iamVjdFBvc2l0aW9uICwgb25Mb2FkaW5nQ29tcGxldGUgLCBsb2FkZXIgPWRlZmF1bHRJbWFnZUxvYWRlciAsIHBsYWNlaG9sZGVyID0nZW1wdHknICwgYmx1ckRhdGFVUkwgIH0gPSBfcGFyYW0sIGFsbCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcGFyYW0sIFtcInNyY1wiLCBcInNpemVzXCIsIFwidW5vcHRpbWl6ZWRcIiwgXCJwcmlvcml0eVwiLCBcImxvYWRpbmdcIiwgXCJsYXp5Qm91bmRhcnlcIiwgXCJjbGFzc05hbWVcIiwgXCJxdWFsaXR5XCIsIFwid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJvYmplY3RGaXRcIiwgXCJvYmplY3RQb3NpdGlvblwiLCBcIm9uTG9hZGluZ0NvbXBsZXRlXCIsIFwibG9hZGVyXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJibHVyRGF0YVVSTFwiXSk7XG4gICAgbGV0IHJlc3QgPSBhbGw7XG4gICAgbGV0IGxheW91dCA9IHNpemVzID8gJ3Jlc3BvbnNpdmUnIDogJ2ludHJpbnNpYyc7XG4gICAgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbiAgICAgICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dDtcbiAgICAgICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgICAgICBkZWxldGUgcmVzdFsnbGF5b3V0J107XG4gICAgfVxuICAgIGxldCBzdGF0aWNTcmMgPSAnJztcbiAgICBpZiAoaXNTdGF0aWNJbXBvcnQoc3JjKSkge1xuICAgICAgICBjb25zdCBzdGF0aWNJbWFnZURhdGEgPSBpc1N0YXRpY1JlcXVpcmUoc3JjKSA/IHNyYy5kZWZhdWx0IDogc3JjO1xuICAgICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5zcmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBzcmMuIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBibHVyRGF0YVVSTCA9IGJsdXJEYXRhVVJMIHx8IHN0YXRpY0ltYWdlRGF0YS5ibHVyRGF0YVVSTDtcbiAgICAgICAgc3RhdGljU3JjID0gc3RhdGljSW1hZ2VEYXRhLnNyYztcbiAgICAgICAgaWYgKCFsYXlvdXQgfHwgbGF5b3V0ICE9PSAnZmlsbCcpIHtcbiAgICAgICAgICAgIGhlaWdodCA9IGhlaWdodCB8fCBzdGF0aWNJbWFnZURhdGEuaGVpZ2h0O1xuICAgICAgICAgICAgd2lkdGggPSB3aWR0aCB8fCBzdGF0aWNJbWFnZURhdGEud2lkdGg7XG4gICAgICAgICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5oZWlnaHQgfHwgIXN0YXRpY0ltYWdlRGF0YS53aWR0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBoZWlnaHQgYW5kIHdpZHRoLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3JjID0gdHlwZW9mIHNyYyA9PT0gJ3N0cmluZycgPyBzcmMgOiBzdGF0aWNTcmM7XG4gICAgY29uc3Qgd2lkdGhJbnQgPSBnZXRJbnQod2lkdGgpO1xuICAgIGNvbnN0IGhlaWdodEludCA9IGdldEludChoZWlnaHQpO1xuICAgIGNvbnN0IHF1YWxpdHlJbnQgPSBnZXRJbnQocXVhbGl0eSk7XG4gICAgbGV0IGlzTGF6eSA9ICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJyk7XG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCdkYXRhOicpIHx8IHNyYy5zdGFydHNXaXRoKCdibG9iOicpKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgICAgIHVub3B0aW1pemVkID0gdHJ1ZTtcbiAgICAgICAgaXNMYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBsb2FkZWRJbWFnZVVSTHMuaGFzKHNyYykpIHtcbiAgICAgICAgaXNMYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgICAgIH0pfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKHdpZHRoSW50KSB8fCB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTihoZWlnaHRJbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJ3aWR0aFwiIG9yIFwiaGVpZ2h0XCIgcHJvcGVydHkuIFRoZXNlIHNob3VsZCBiZSBudW1lcmljIHZhbHVlcy5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGF5b3V0ID09PSAnZmlsbCcgJiYgKHdpZHRoIHx8IGhlaWdodCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBhbmQgXCJsYXlvdXQ9J2ZpbGwnXCIgaGFzIHVudXNlZCBwcm9wZXJ0aWVzIGFzc2lnbmVkLiBQbGVhc2UgcmVtb3ZlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIi5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgICAgICAgaWYgKGxheW91dCAhPT0gJ2ZpbGwnICYmICh3aWR0aEludCB8fCAwKSAqIChoZWlnaHRJbnQgfHwgMCkgPCAxNjAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHNtYWxsZXIgdGhhbiA0MHg0MC4gQ29uc2lkZXIgcmVtb3ZpbmcgdGhlIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYmx1ckRhdGFVUkwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBWQUxJRF9CTFVSX0VYVCA9IFtcbiAgICAgICAgICAgICAgICAgICAgJ2pwZWcnLFxuICAgICAgICAgICAgICAgICAgICAncG5nJyxcbiAgICAgICAgICAgICAgICAgICAgJ3dlYnAnXG4gICAgICAgICAgICAgICAgXSAvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IGJ1dCBpcyBtaXNzaW5nIHRoZSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHkuXG4gICAgICAgICAgUG9zc2libGUgc29sdXRpb25zOlxuICAgICAgICAgICAgLSBBZGQgYSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHksIHRoZSBjb250ZW50cyBzaG91bGQgYmUgYSBzbWFsbCBEYXRhIFVSTCB0byByZXByZXNlbnQgdGhlIGltYWdlXG4gICAgICAgICAgICAtIENoYW5nZSB0aGUgXCJzcmNcIiBwcm9wZXJ0eSB0byBhIHN0YXRpYyBpbXBvcnQgd2l0aCBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmaWxlIHR5cGVzOiAke1ZBTElEX0JMVVJfRVhULmpvaW4oJywnKX1cbiAgICAgICAgICAgIC0gUmVtb3ZlIHRoZSBcInBsYWNlaG9sZGVyXCIgcHJvcGVydHksIGVmZmVjdGl2ZWx5IG5vIGJsdXIgZWZmZWN0XG4gICAgICAgICAgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wbGFjZWhvbGRlci1ibHVyLWRhdGEtdXJsYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdyZWYnIGluIHJlc3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyB1c2luZyB1bnN1cHBvcnRlZCBcInJlZlwiIHByb3BlcnR5LiBDb25zaWRlciB1c2luZyB0aGUgXCJvbkxvYWRpbmdDb21wbGV0ZVwiIHByb3BlcnR5IGluc3RlYWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdzdHlsZScgaW4gcmVzdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwic3R5bGVcIiBwcm9wZXJ0eS4gUGxlYXNlIHVzZSB0aGUgXCJjbGFzc05hbWVcIiBwcm9wZXJ0eSBpbnN0ZWFkLmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSArIDEwMDtcbiAgICAgICAgaWYgKCF1bm9wdGltaXplZCAmJiAhbG9hZGVyKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHdpZHRoOiByYW5kLFxuICAgICAgICAgICAgcXVhbGl0eTogNzVcbiAgICAgICAgfSkuaW5jbHVkZXMocmFuZC50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBhIFwibG9hZGVyXCIgcHJvcGVydHkgdGhhdCBkb2VzIG5vdCBpbXBsZW1lbnQgd2lkdGguIFBsZWFzZSBpbXBsZW1lbnQgaXQgb3IgdXNlIHRoZSBcInVub3B0aW1pemVkXCIgcHJvcGVydHkgaW5zdGVhZC5gICsgYFxcblJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS1taXNzaW5nLWxvYWRlci13aWR0aGApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46IGxhenlCb3VuZGFyeSxcbiAgICAgICAgZGlzYWJsZWQ6ICFpc0xhenlcbiAgICB9KTtcbiAgICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWQ7XG4gICAgbGV0IHdyYXBwZXJTdHlsZTtcbiAgICBsZXQgc2l6ZXJTdHlsZTtcbiAgICBsZXQgc2l6ZXJTdmc7XG4gICAgbGV0IGltZ1N0eWxlID0ge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG9iamVjdEZpdCxcbiAgICAgICAgb2JqZWN0UG9zaXRpb25cbiAgICB9O1xuICAgIGNvbnN0IGJsdXJTdHlsZSA9IHBsYWNlaG9sZGVyID09PSAnYmx1cicgPyB7XG4gICAgICAgIGZpbHRlcjogJ2JsdXIoMjBweCknLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogb2JqZWN0Rml0IHx8ICdjb3ZlcicsXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYCxcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBvYmplY3RQb3NpdGlvbiB8fCAnMCUgMCUnXG4gICAgfSA6IHtcbiAgICB9O1xuICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJykge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgICAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50O1xuICAgICAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWA7XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJSdcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gO1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodEludFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGltZ0F0dHJpYnV0ZXMgPSB7XG4gICAgICAgIHNyYzogJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gICAgICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgICAgICBzaXplczogdW5kZWZpbmVkXG4gICAgfTtcbiAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICAgIGltZ0F0dHJpYnV0ZXMgPSBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICAgICAgbGF5b3V0LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgICAgIHNpemVzLFxuICAgICAgICAgICAgbG9hZGVyXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgc3JjU3RyaW5nID0gc3JjO1xuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBzdHlsZTogd3JhcHBlclN0eWxlXG4gICAgfSwgc2l6ZXJTdHlsZSA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiBzaXplclN0eWxlXG4gICAgfSwgc2l6ZXJTdmcgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgIHBhZGRpbmc6IDBcbiAgICAgICAgfSxcbiAgICAgICAgYWx0OiBcIlwiLFxuICAgICAgICBcImFyaWEtaGlkZGVuXCI6IHRydWUsXG4gICAgICAgIHNyYzogYGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHsoMCwgX3RvQmFzZTY0KS50b0Jhc2U2NChzaXplclN2Zyl9YFxuICAgIH0pIDogbnVsbCkgOiBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcmVzdCwgaW1nQXR0cmlidXRlcywge1xuICAgICAgICBkZWNvZGluZzogXCJhc3luY1wiLFxuICAgICAgICBcImRhdGEtbmltZ1wiOiBsYXlvdXQsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICByZWY6IChpbWcpPT57XG4gICAgICAgICAgICBzZXRSZWYoaW1nKTtcbiAgICAgICAgICAgIGhhbmRsZUxvYWRpbmcoaW1nLCBzcmNTdHJpbmcsIGxheW91dCwgcGxhY2Vob2xkZXIsIG9uTG9hZGluZ0NvbXBsZXRlKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoe1xuICAgICAgICB9LCBpbWdTdHlsZSwgYmx1clN0eWxlKVxuICAgIH0pKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIiwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIH0sIHJlc3QsIGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICBzcmMsXG4gICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICBsYXlvdXQsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgc2l6ZXMsXG4gICAgICAgIGxvYWRlclxuICAgIH0pLCB7XG4gICAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICAgIFwiZGF0YS1uaW1nXCI6IGxheW91dCxcbiAgICAgICAgc3R5bGU6IGltZ1N0eWxlLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgbG9hZGluZzogbG9hZGluZyB8fCAnbGF6eSdcbiAgICB9KSkpLCBwcmlvcml0eSA/IC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbiAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgLy9cbiAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbiAgICAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgIGtleTogJ19fbmltZy0nICsgaW1nQXR0cmlidXRlcy5zcmMgKyBpbWdBdHRyaWJ1dGVzLnNyY1NldCArIGltZ0F0dHJpYnV0ZXMuc2l6ZXMsXG4gICAgICAgIHJlbDogXCJwcmVsb2FkXCIsXG4gICAgICAgIGFzOiBcImltYWdlXCIsXG4gICAgICAgIGhyZWY6IGltZ0F0dHJpYnV0ZXMuc3JjU2V0ID8gdW5kZWZpbmVkIDogaW1nQXR0cmlidXRlcy5zcmMsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlLlxuICAgICAgICBpbWFnZXNyY3NldDogaW1nQXR0cmlidXRlcy5zcmNTZXQsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgIGltYWdlc2l6ZXM6IGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICB9KSkgOiBudWxsKSk7XG59XG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjKSB7XG4gICAgcmV0dXJuIHNyY1swXSA9PT0gJy8nID8gc3JjLnNsaWNlKDEpIDogc3JjO1xufVxuZnVuY3Rpb24gaW1naXhMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgLy8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9hdXRvPWZvcm1hdCZmaXQ9bWF4Jnc9MzAwXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9YCk7XG4gICAgY29uc3QgcGFyYW1zID0gdXJsLnNlYXJjaFBhcmFtcztcbiAgICBwYXJhbXMuc2V0KCdhdXRvJywgcGFyYW1zLmdldCgnYXV0bycpIHx8ICdmb3JtYXQnKTtcbiAgICBwYXJhbXMuc2V0KCdmaXQnLCBwYXJhbXMuZ2V0KCdmaXQnKSB8fCAnbWF4Jyk7XG4gICAgcGFyYW1zLnNldCgndycsIHBhcmFtcy5nZXQoJ3cnKSB8fCB3aWR0aC50b1N0cmluZygpKTtcbiAgICBpZiAocXVhbGl0eSkge1xuICAgICAgICBwYXJhbXMuc2V0KCdxJywgcXVhbGl0eS50b1N0cmluZygpKTtcbiAgICB9XG4gICAgcmV0dXJuIHVybC5ocmVmO1xufVxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICB9KSB7XG4gICAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWA7XG59XG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gICAgY29uc3QgcGFyYW1zID0gW1xuICAgICAgICAnZl9hdXRvJyxcbiAgICAgICAgJ2NfbGltaXQnLFxuICAgICAgICAnd18nICsgd2lkdGgsXG4gICAgICAgICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXG4gICAgXTtcbiAgICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJztcbiAgICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWA7XG59XG5mdW5jdGlvbiBjdXN0b21Mb2FkZXIoeyBzcmMgIH0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgbWlzc2luZyBcImxvYWRlclwiIHByb3AuYCArIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXJgKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdO1xuICAgICAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICAgICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJyk7XG4gICAgICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKTtcbiAgICAgICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbignLCAnKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBxdWFsaXR5XG4gICAgICAgICAgICB9KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgICAgICAgIGxldCBwYXJzZWRTcmM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHBhcnNlZFNyYyA9IG5ldyBVUkwoc3JjKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmICFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmAgKyBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IGV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gdm9pZCAwO1xuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihjYikge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCAxKTtcbn07XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrO1xuY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihpZCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufTtcbmV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gY2FuY2VsSWRsZUNhbGxiYWNrO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVzZUludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbjtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oeyByb290TWFyZ2luICwgZGlzYWJsZWQgIH0pIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIGNvbnN0IHVub2JzZXJ2ZSA9ICgwLCBfcmVhY3QpLnVzZVJlZigpO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9ICgwLCBfcmVhY3QpLnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBzZXRSZWYgPSAoMCwgX3JlYWN0KS51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVybjtcbiAgICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShlbCwgKGlzVmlzaWJsZSk9PmlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSlcbiAgICAgICAgICAgICwge1xuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9ICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpPT4oMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLmNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgc2V0UmVmLFxuICAgICAgICB2aXNpYmxlXG4gICAgXTtcbn1cbmZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkICwgb2JzZXJ2ZXIgLCBlbGVtZW50cyAgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO1xuICAgIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgICAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgICAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xuICAgIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnO1xuICAgIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKT0+e1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KT0+e1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMDtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICBvYnNlcnZlcnMuc2V0KGlkLCBpbnN0YW5jZSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG9ic2VydmVyLFxuICAgICAgICBlbGVtZW50c1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9pbmRleC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlclwiO1xyXG5pbXBvcnQgTWFpbiBmcm9tIFwiLi4vY29tcG9uZW50cy9NYWluXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyL0hlYWRlclwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBJbmRleDogUmVhY3QuRkMgPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcblx0XHRcdDxIZWFkZXI+PC9IZWFkZXI+XHJcblx0XHRcdDxNYWluPjwvTWFpbj5cclxuXHRcdFx0PEZvb3Rlcj48L0Zvb3Rlcj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5cclxuY29uc3Qgc2VudENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpOyBcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZW50Q29udGV4dDtcclxuXHJcblxyXG5cclxuXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvb3RlclwiOiBcIkZvb3Rlcl9mb290ZXJfXzFLVzE3XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwiSGVhZGVyX3dyYXBwZXJfX0pSZ0pBXCIsXG5cdFwiX2NvbnRhaW5lclwiOiBcIkhlYWRlcl9fY29udGFpbmVyX18zRWlVLVwiLFxuXHRcImhlYWRlclwiOiBcIkhlYWRlcl9oZWFkZXJfXzItWFdYXCIsXG5cdFwiaGVhZGVyX19jb250YWluZXJcIjogXCJIZWFkZXJfaGVhZGVyX19jb250YWluZXJfXzQtWEpJXCIsXG5cdFwiaGVhZGVyX19sb2dvXCI6IFwiSGVhZGVyX2hlYWRlcl9fbG9nb19fRTF5bDFcIixcblx0XCJoZWFkZXJfX2xvZ29faWNvblwiOiBcIkhlYWRlcl9oZWFkZXJfX2xvZ29faWNvbl9fMjBVdEpcIixcblx0XCJoZWFkZXJfX2xvZ29faWNvbl9faW1nXCI6IFwiSGVhZGVyX2hlYWRlcl9fbG9nb19pY29uX19pbWdfX0hMT0hCXCIsXG5cdFwiaGVhZGVyX19sb2dvX3RleHRcIjogXCJIZWFkZXJfaGVhZGVyX19sb2dvX3RleHRfXzNTdTNhXCIsXG5cdFwiaGVhZGVyX19idXNrZXRcIjogXCJIZWFkZXJfaGVhZGVyX19idXNrZXRfXzJtbjhRXCIsXG5cdFwiaGVhZGVyX19idXNrZXRfdGV4dFwiOiBcIkhlYWRlcl9oZWFkZXJfX2J1c2tldF90ZXh0X18xeTJxSFwiLFxuXHRcImhlYWRlcl9fYnVza2V0X2ljb25cIjogXCJIZWFkZXJfaGVhZGVyX19idXNrZXRfaWNvbl9fTGl4QllcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyYXBwZXJcIjogXCJNYWluX3dyYXBwZXJfXzJuSmxtXCIsXG5cdFwiX2NvbnRhaW5lclwiOiBcIk1haW5fX2NvbnRhaW5lcl9fM29RNjNcIixcblx0XCJwYWdlXCI6IFwiTWFpbl9wYWdlX18xYUFWVVwiLFxuXHRcInBhZ2VfX21haW5cIjogXCJNYWluX3BhZ2VfX21haW5fX0FyeF84XCIsXG5cdFwibWFpblwiOiBcIk1haW5fbWFpbl9fNkRQaURcIixcblx0XCJtYWluX19ib2R5XCI6IFwiTWFpbl9tYWluX19ib2R5X18yVzA2aVwiLFxuXHRcIm1haW5fX2JvZHlfX2NvbnRhaW5lclwiOiBcIk1haW5fbWFpbl9fYm9keV9fY29udGFpbmVyX19mQldiSlwiLFxuXHRcIm1haW5fX2Zvcm1cIjogXCJNYWluX21haW5fX2Zvcm1fXzF5T01lXCIsXG5cdFwibWFpbl9fZm9ybV9fdGFic1wiOiBcIk1haW5fbWFpbl9fZm9ybV9fdGFic19fM3M2RmRcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyYXBwZXJcIjogXCJPcmRlcl93cmFwcGVyX19POFhwaFwiLFxuXHRcIl9jb250YWluZXJcIjogXCJPcmRlcl9fY29udGFpbmVyX19UZnE3VVwiLFxuXHRcIm9yZGVyXCI6IFwiT3JkZXJfb3JkZXJfXzZ2dVAtXCIsXG5cdFwib3JkZXJfX3RpdGxlXCI6IFwiT3JkZXJfb3JkZXJfX3RpdGxlX19kZWNjd1wiLFxuXHRcIm9yZGVyX19udW1iZXJcIjogXCJPcmRlcl9vcmRlcl9fbnVtYmVyX18xV1duNFwiLFxuXHRcIm9yZGVyX190ZXh0XCI6IFwiT3JkZXJfb3JkZXJfX3RleHRfXzFlczZ4XCIsXG5cdFwib3JkZXJfX2VzdGltYXRlZFwiOiBcIk9yZGVyX29yZGVyX19lc3RpbWF0ZWRfX2c1MGctXCIsXG5cdFwib3JkZXJfX3ByaW50X3JlY2lwZVwiOiBcIk9yZGVyX29yZGVyX19wcmludF9yZWNpcGVfXzNUamZjXCIsXG5cdFwiYm9sZFwiOiBcIk9yZGVyX2JvbGRfX0RfOU9pXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwiUHJvZHVjdHNfd3JhcHBlcl9fMW5JM0NcIixcblx0XCJfY29udGFpbmVyXCI6IFwiUHJvZHVjdHNfX2NvbnRhaW5lcl9fMUhJLWFcIixcblx0XCJtYWluX19wcm9kdWN0c1wiOiBcIlByb2R1Y3RzX21haW5fX3Byb2R1Y3RzX190SkNZMlwiLFxuXHRcInByb2R1Y3RzXCI6IFwiUHJvZHVjdHNfcHJvZHVjdHNfXzJIdkdTXCIsXG5cdFwicHJvZHVjdHNfX3RleHRcIjogXCJQcm9kdWN0c19wcm9kdWN0c19fdGV4dF9fb0RFUTVcIixcblx0XCJwcm9kdWN0c19fdGV4dF90aXRsZVwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RzX190ZXh0X3RpdGxlX18yZTFZVFwiLFxuXHRcInByb2R1Y3RzX190ZXh0X2VkaXRcIjogXCJQcm9kdWN0c19wcm9kdWN0c19fdGV4dF9lZGl0X18xblY2alwiLFxuXHRcInByb2R1Y3RzX19wcm9kdWN0XCI6IFwiUHJvZHVjdHNfcHJvZHVjdHNfX3Byb2R1Y3RfXzJORlZaXCIsXG5cdFwicHJvZHVjdHNfX2Nvc3RcIjogXCJQcm9kdWN0c19wcm9kdWN0c19fY29zdF9fMTBKVnNcIixcblx0XCJwcm9kdWN0c19faW5mb3JtYXRpb25cIjogXCJQcm9kdWN0c19wcm9kdWN0c19faW5mb3JtYXRpb25fXzN4WkVCXCIsXG5cdFwicHJvZHVjdFwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RfX0VIVXlNXCIsXG5cdFwicHJvZHVjdF9faW1hZ2VcIjogXCJQcm9kdWN0c19wcm9kdWN0X19pbWFnZV9fMUNoWk5cIixcblx0XCJwcm9kdWN0X19jb250ZW50XCI6IFwiUHJvZHVjdHNfcHJvZHVjdF9fY29udGVudF9fM3B4UlVcIixcblx0XCJwcm9kdWN0X19jb250ZW50X25hbWVcIjogXCJQcm9kdWN0c19wcm9kdWN0X19jb250ZW50X25hbWVfXzNXdmNlXCIsXG5cdFwicHJvZHVjdF9fY29udGVudF9kZXNjcmlwdGlvblwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RfX2NvbnRlbnRfZGVzY3JpcHRpb25fXzJDanJSXCIsXG5cdFwicHJvZHVjdF9fY29udGVudF9xdWFudGl0eVwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RfX2NvbnRlbnRfcXVhbnRpdHlfX3FCWElRXCIsXG5cdFwicHJvZHVjdF9fcHJpY2VcIjogXCJQcm9kdWN0c19wcm9kdWN0X19wcmljZV9fMk42YzBcIixcblx0XCJjb3N0X19zdWJ0b3RhbFwiOiBcIlByb2R1Y3RzX2Nvc3RfX3N1YnRvdGFsX19GVmRHT1wiLFxuXHRcImNvc3RfX3NoaXBwaW5nXCI6IFwiUHJvZHVjdHNfY29zdF9fc2hpcHBpbmdfX3VkYlVmXCIsXG5cdFwiY29zdF9fdGF4ZXNcIjogXCJQcm9kdWN0c19jb3N0X190YXhlc19fXzhESzNcIixcblx0XCJjb3N0X190b3RhbFwiOiBcIlByb2R1Y3RzX2Nvc3RfX3RvdGFsX18xS05TSFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid3JhcHBlclwiOiBcInN0eWxlc193cmFwcGVyX18xQ3BST1wiLFxuXHRcIl9jb250YWluZXJcIjogXCJzdHlsZXNfX2NvbnRhaW5lcl9fMWh4RTJcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVtYWlsanMtY29tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pbnB1dC1tYXNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJGb290ZXIiLCJmb290ZXIiLCJ1c2VDb250ZXh0IiwiUHJvZHVjdHMiLCJUYWJzIiwic2VuZEVtYWlsIiwic2VudENvbnRleHQiLCJPcmRlciIsIk1haW4iLCJzdGF0ZSIsInNldFN0YXRlIiwicHJvZHVjdHMiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwicGFnZSIsInBhZ2VfX21haW4iLCJtYWluIiwibWFpbl9fY29udGFpbmVyIiwiX2NvbnRhaW5lciIsIm1haW5fX2JvZHkiLCJtYWluX19ib2R5X19jb250YWluZXIiLCJtYWluX19mb3JtIiwiSGVhZGVyIiwiaGVhZGVyIiwiaGVhZGVyX19jb250YWluZXIiLCJoZWFkZXJfX2xvZ28iLCJoZWFkZXJfX2xvZ29faWNvbiIsImhlYWRlcl9fbG9nb190ZXh0IiwiaGVhZGVyX19idXNrZXQiLCJoZWFkZXJfX2J1c2tldF90ZXh0IiwiaGVhZGVyX19idXNrZXRfaWNvbiIsInVzZVN0YXRlIiwiSW1hZ2UiLCJzZWxlY3RlZFByb2R1Y3RzIiwic2V0U2VsZWN0ZWRQcm9kdWN0cyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibWFpbl9fcHJvZHVjdHMiLCJwcm9kdWN0c19fdGV4dCIsInByb2R1Y3RzX190ZXh0X3RpdGxlIiwicHJvZHVjdHNfX3RleHRfZWRpdCIsInByb2R1Y3RzX19pdGVtcyIsIm1hcCIsInByb2R1Y3QiLCJwcm9kdWN0c19fcHJvZHVjdCIsInByb2R1Y3RfX2ltYWdlIiwicHJvZHVjdF9fY29udGVudCIsInByb2R1Y3RfX2NvbnRlbnRfbmFtZSIsInByb2R1Y3RfX2NvbnRlbnRfZGVzY3JpcHRpb24iLCJwcm9kdWN0X19jb250ZW50X3F1YW50aXR5IiwicHJvZHVjdF9fcHJpY2UiLCJwcm9kdWN0c19fY29zdCIsImNvc3RfX3N1YnRvdGFsIiwic3VidG90YWxfX3RleHQiLCJzdWJ0b3RhbF9fY291bnQiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJjb3N0X19zaGlwcGluZyIsInNoaXBwaW5nX190ZXh0Iiwic2hpcHBpbmdfX2NvdW50IiwiY29zdF9fdGF4ZXMiLCJ0YXhlc19fdGV4dCIsInRheGVzX19jb3VudCIsImNvc3RfX3RvdGFsIiwidG90YWxfX3RleHQiLCJ0b3RhbF9fY291bnQiLCJwcm9kdWN0c19faW5mb3JtYXRpb24iLCJvcmRlciIsIm9yZGVyX190aXRsZSIsIm9yZGVyX19udW1iZXIiLCJvcmRlcl9fdGV4dCIsIm9yZGVyX19lc3RpbWF0ZWQiLCJib2xkIiwib3JkZXJfX3ByaW50X3JlY2lwZSIsInVzZUVmZmVjdCIsInVzZUdlb2xvY2F0aW9uIiwidXNlSWRlbnRpZmljYXRpb25DYXJkIiwidXNlSW5wdXQiLCJJbnB1dE1hc2siLCJmYUNyb3NzaGFpcnMiLCJGb250QXdlc29tZUljb24iLCJ0b2dnbGVDbGFzcyIsInNldFRvZ2dsZUNsYXNzIiwiY2FyZFR5cGUiLCJzZXRDYXJkVHlwZSIsImZ1bGxfbmFtZSIsImlzRW1wdHkiLCJtaW5MZW5ndGgiLCJzdHJlZXQiLCJwaG9uZSIsImFwdCIsImNpdHkiLCJjb3VudHJ5IiwiemlwIiwiYiIsImNhcmQiLCJlbWFpbCIsImlzRW1haWwiLCJnZW8iLCJ2YWx1ZSIsImlzTmV4dCIsImlzTWluTGVuZ3RoRXJyb3IiLCJlIiwib25DaGFuZ2UiLCJvbkJsdXIiLCJ1bmRlZmluZWQiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwiZm9udFNpemUiLCJjdXJzb3IiLCJpbnB1dFZhbGlkIiwiaXNFbWFpbEVycm9yIiwiZW1haWxqcyIsInByZXZlbnREZWZhdWx0Iiwic2VuZEZvcm0iLCJ0YXJnZXQiLCJ0aGVuIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInRleHQiLCJlcnJvciIsInJlc2V0Iiwic2V0Q2l0eSIsInNldENvdW50cnkiLCJzZXRaaXAiLCJzdWNjZXNzQ2FsbGJhY2siLCJ1cmwiLCJmZXRjaCIsImQiLCJqc29uIiwicmVzIiwiY291bnRyeV9uYW1lIiwicG9zdGFsIiwiZXJyb3JDYWxsYmFjayIsInJlZ2V4IiwiUmVnRXhwIiwibWF0Y2giLCJ0ZXN0IiwidXNlVmFsaWRhdGlvbiIsImluaXRpYWxWYWx1ZSIsInZhbGlkYXRpb25zIiwic2V0VmFsdWUiLCJpc0RpcnR5Iiwic2V0SXNEaXJ0eSIsInNldElzTmV4dCIsInZhbGlkIiwib25DbGljayIsInNldElzRW1wdHkiLCJzZXRJc0VtYWlsRXJyb3IiLCJzZXRJc01pbkxlbmd0aEVycm9yIiwic2V0SW5wdXRWYWxpZCIsInZhbGlkYXRpb24iLCJsZW5ndGgiLCJyZSIsIlN0cmluZyIsInRvTG93ZXJDYXNlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwiZGVmYXVsdCIsIkltYWdlMSIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2hlYWQiLCJfdG9CYXNlNjQiLCJfaW1hZ2VDb25maWciLCJfdXNlSW50ZXJzZWN0aW9uIiwiX2RlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX19lc01vZHVsZSIsIl9vYmplY3RTcHJlYWQiLCJpIiwiYXJndW1lbnRzIiwic291cmNlIiwib3duS2V5cyIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJjb25jYXQiLCJmaWx0ZXIiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJmb3JFYWNoIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiZXhjbHVkZWQiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsInNvdXJjZVN5bWJvbEtleXMiLCJpbmRleE9mIiwicHJvdG90eXBlIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJjYWxsIiwic291cmNlS2V5cyIsImxvYWRlZEltYWdlVVJMcyIsIlNldCIsImdsb2JhbCIsIl9fTkVYVF9JTUFHRV9JTVBPUlRFRCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwibG9hZGVycyIsIk1hcCIsImRlZmF1bHRMb2FkZXIiLCJpbWdpeExvYWRlciIsImNsb3VkaW5hcnlMb2FkZXIiLCJha2FtYWlMb2FkZXIiLCJjdXN0b21Mb2FkZXIiLCJWQUxJRF9MQVlPVVRfVkFMVUVTIiwiaXNTdGF0aWNSZXF1aXJlIiwic3JjIiwiaXNTdGF0aWNJbWFnZURhdGEiLCJpc1N0YXRpY0ltcG9ydCIsImRldmljZVNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwiY29uZmlnSW1hZ2VTaXplcyIsImxvYWRlciIsImNvbmZpZ0xvYWRlciIsInBhdGgiLCJjb25maWdQYXRoIiwiZG9tYWlucyIsImNvbmZpZ0RvbWFpbnMiLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX0lNQUdFX09QVFMiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsInNvcnQiLCJhIiwiZ2V0V2lkdGhzIiwid2lkdGgiLCJsYXlvdXQiLCJzaXplcyIsInZpZXdwb3J0V2lkdGhSZSIsInBlcmNlbnRTaXplcyIsImV4ZWMiLCJwdXNoIiwicGFyc2VJbnQiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIm1pbiIsIndpZHRocyIsInMiLCJraW5kIiwidyIsImZpbmQiLCJwIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJqb2luIiwiZ2V0SW50IiwieCIsImRlZmF1bHRJbWFnZUxvYWRlciIsImxvYWRlclByb3BzIiwibG9hZCIsImdldCIsInJvb3QiLCJFcnJvciIsIlZBTElEX0xPQURFUlMiLCJoYW5kbGVMb2FkaW5nIiwiaW1nIiwicGxhY2Vob2xkZXIiLCJvbkxvYWRpbmdDb21wbGV0ZSIsImhhbmRsZUxvYWQiLCJzdGFydHNXaXRoIiwiZGVjb2RlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjYXRjaCIsInN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJhZGQiLCJuYXR1cmFsV2lkdGgiLCJuYXR1cmFsSGVpZ2h0IiwicmVmIiwicGFyZW50RWxlbWVudCIsInBhcmVudCIsImdldENvbXB1dGVkU3R5bGUiLCJkaXNwbGF5Iiwid2FybiIsImNvbXBsZXRlIiwib25sb2FkIiwiX3BhcmFtIiwicHJpb3JpdHkiLCJsYXp5Qm91bmRhcnkiLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImJsdXJEYXRhVVJMIiwiYWxsIiwicmVzdCIsInN0YXRpY1NyYyIsInN0YXRpY0ltYWdlRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aWR0aEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpc0xhenkiLCJoYXMiLCJpbmNsdWRlcyIsImlzTmFOIiwiVkFMSURfQkxVUl9FWFQiLCJyYW5kIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsInNldFJlZiIsImlzSW50ZXJzZWN0ZWQiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3cmFwcGVyU3R5bGUiLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdTdHlsZSIsImxlZnQiLCJib3R0b20iLCJib3hTaXppbmciLCJwYWRkaW5nIiwiYm9yZGVyIiwibWFyZ2luIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsImJsdXJTdHlsZSIsImJhY2tncm91bmRQb3NpdGlvbiIsIm92ZXJmbG93IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaW1nQXR0cmlidXRlcyIsInNyY1N0cmluZyIsImNyZWF0ZUVsZW1lbnQiLCJhbHQiLCJ0b0Jhc2U2NCIsImFzc2lnbiIsImRlY29kaW5nIiwicmVsIiwiYXMiLCJocmVmIiwiaW1hZ2VzcmNzZXQiLCJpbWFnZXNpemVzIiwibm9ybWFsaXplU3JjIiwic2xpY2UiLCJVUkwiLCJwYXJhbXMiLCJzZWFyY2hQYXJhbXMiLCJzZXQiLCJwYXJhbXNTdHJpbmciLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiZXJyIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJ3aW5kb3ciLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImNsZWFyVGltZW91dCIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ1c2VSZWYiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZUNhbGxiYWNrIiwiZWwiLCJjdXJyZW50IiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvcHRpb25zIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJpbnN0YW5jZSIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJJbmRleCIsIndyYXBwZXIiLCJjcmVhdGVDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==