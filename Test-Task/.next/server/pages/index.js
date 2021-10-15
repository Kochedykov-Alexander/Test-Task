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
/* harmony import */ var _styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Main.module.scss */ "./styles/Main.module.scss");
/* harmony import */ var _styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products */ "./components/Products.tsx");
/* harmony import */ var _UI_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI/Tabs */ "./components/UI/Tabs.tsx");
/* harmony import */ var _hooks_useConfirmation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useConfirmation */ "./hooks/useConfirmation.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\front\\Test-Task\\Test-Task\\components\\Main.tsx";







const Main = () => {
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("main", {
    className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().page),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().page__main) + " " + (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().main),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().main__container) + " " + (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5___default()._container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().main__body),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().main__body__container),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
              onSubmit: _hooks_useConfirmation__WEBPACK_IMPORTED_MODULE_3__.default,
              className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().main__form),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_UI_Tabs__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 8
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 7
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Products__WEBPACK_IMPORTED_MODULE_1__.default, {
              products: products
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 7
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
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
/* harmony import */ var _styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Header.module.scss */ "./styles/Header.module.scss");
/* harmony import */ var _styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_header_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/header/logo.png */ "./img/header/logo.png");
/* harmony import */ var _img_header_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_header_logo_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_header_Shape_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/header/Shape.png */ "./img/header/Shape.png");
/* harmony import */ var _img_header_Shape_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_header_Shape_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\front\\Test-Task\\Test-Task\\components\\Navbar\\Header.tsx";






const Header = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("header", {
    className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header__container) + " " + (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default()._container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header__logo),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header__logo_icon),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
            src: (_img_header_logo_png__WEBPACK_IMPORTED_MODULE_1___default()),
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
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header__logo_text)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header__busket),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header__busket_text),
          children: "cart"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 5
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header__busket_icon),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
            src: (_img_header_Shape_png__WEBPACK_IMPORTED_MODULE_2___default()),
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
            src: "/../img/products/sumka.png",
            width: 20,
            height: 20,
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
      }, void 0, true, {
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
/* harmony import */ var _img_payment_Shape_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/payment/Shape.png */ "./img/payment/Shape.png");
/* harmony import */ var _img_payment_Shape_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_payment_Shape_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-input-mask */ "react-input-mask");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\front\\Test-Task\\Test-Task\\components\\UI\\Tabs.tsx";








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
  const msg = "Проверка";
  const geo = (0,_hooks_useGeolocation__WEBPACK_IMPORTED_MODULE_1__.useGeolocation)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setCardType((0,_hooks_useIdentificationCard__WEBPACK_IMPORTED_MODULE_2__.useIdentificationCard)(card.value));
  }, [card.value]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "main-block__form__tabs",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: toggleClass === 1 ? "tabs active-tabs" : "tabs",
        onClick: () => setToggleClass(1),
        children: "Shipping"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: toggleClass === 2 ? "tabs active-tabs" : "tabs",
        onClick: () => setToggleClass(2),
        children: "Billing"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: toggleClass === 3 ? "tabs active-tabs" : "tabs",
        onClick: () => setToggleClass(3),
        children: "Payment"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "main-block__form__tabs__content",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: toggleClass === 1 ? "content active-content" : "content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "content__title",
          children: "Shipping info"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "content__recipient",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "content__recipient_text",
            children: "Recipient"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "content__inputs",
          children: [(b.isNext && full_name.isEmpty || b.isNext && full_name.isMinLengthError) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "message",
            children: "Please enter recipient full name and min length = 3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 94
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
            type: "text",
            className: b.isNext && full_name.isEmpty || b.isNext && full_name.isMinLengthError ? "content__inputs_fullname focused" : "content__inputs_fullname",
            placeholder: "Full Name",
            value: full_name.value,
            onChange: e => full_name.onChange(e),
            onBlur: e => full_name.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "content__inputs_daytime_container",
            children: [b.isNext && phone.isEmpty && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "message",
              children: "Please enter recipient phone in format +7 (000) 000 00 00"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 47
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_5___default()), {
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
              lineNumber: 67,
              columnNumber: 13
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("label", {
              htmlFor: "content__inputs_daytime_label",
              children: "For delivery questions only"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "content__address",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "content__address_text",
            children: "Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "content__inputs",
          children: [b.isNext && street.isEmpty && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "message",
            children: "Please enter recipient street"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 47
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
            type: "text",
            className: b.isNext && street.isEmpty ? "content__inputs_street focused" : "content__inputs_street",
            placeholder: "Street Address",
            value: street.value,
            onChange: e => street.onChange(e),
            onBlur: e => street.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
            type: "text",
            className: "content__inputs_apt",
            placeholder: "Apt, Suite, Bldg, Gate Code. (optional)",
            value: apt.value,
            onChange: e => apt.onChange(e),
            onBlur: e => apt.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "content__inputs_icon",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
              type: "text",
              name: "city",
              className: b.isNext && city.isEmpty ? "content__inputs_city focused" : "content__inputs_city",
              placeholder: "City",
              value: geo.city == undefined ? city.value : geo.city,
              onChange: e => city.onChange(e),
              onBlur: e => city.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 11
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 10
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "content__inputs__row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "content__inputs__row_country",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("select", {
                onChange: e => country.onChange(e),
                onBlur: e => country.onBlur(e),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
                  value: geo.country == undefined ? country.value : geo.country,
                  selected: true,
                  disabled: true,
                  children: geo.country == undefined ? country.value : geo.country
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 14
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
                  value: "Russia",
                  children: "Russia"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 14
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
                  value: "USA",
                  children: "USA"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 14
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
                  value: "UK",
                  children: "UK"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 14
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
                  value: "Ukraine",
                  children: "Ukraine"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 14
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 12
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 12
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
              type: "text",
              className: b.isNext && zip.isEmpty ? "content__inputs__row_zip focused" : "content__inputs__row_zip",
              placeholder: "ZIP",
              value: geo.zip == undefined ? zip.value : geo.zip,
              onChange: e => zip.onChange(e),
              onBlur: e => zip.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 10
        }, undefined), full_name.inputValid && phone.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
          onClick: () => setToggleClass(2),
          className: "content__button",
          style: {
            cursor: 'pointer'
          },
          children: "Continue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, undefined), !(full_name.inputValid && phone.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
          className: "content__button",
          style: {
            cursor: 'pointer'
          },
          children: "Continue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: toggleClass === 2 ? "content active-content" : "content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "content__title",
          children: "Billing Information"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "content__recipient",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "content__recipient_text",
            children: "Billing Contact"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "content__inputs",
          children: [(b.isNext && full_name.isEmpty || b.isNext && full_name.isMinLengthError) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "message",
            children: "Please enter recipient full name and min length = 3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 93
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
            type: "text",
            className: b.isNext && full_name.isEmpty || b.isNext && full_name.isMinLengthError ? "content__inputs_fullname focused" : "content__inputs_fullname",
            name: "name",
            placeholder: "Full Name",
            value: full_name.value,
            onChange: e => full_name.onChange(e),
            onBlur: e => full_name.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 11
          }, undefined), b.isNext && email.isEmailError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "message",
            children: "Please enter correct email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 48
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
            type: "text",
            className: b.isNext && email.isEmailError ? "content__inputs_email focused" : "content__inputs_email",
            placeholder: "Email Address",
            value: email.value,
            onChange: e => email.onChange(e),
            onBlur: e => email.onBlur(e),
            name: "email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "content__address",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "content__address_text",
            children: "Billing Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "content__inputs",
          children: [b.isNext && street.isEmpty && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "message",
            children: "Please enter recipient street"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 46
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
            type: "text",
            className: b.isNext && street.isEmpty ? "content__inputs_street focused" : "content__inputs_street",
            placeholder: "Street Address",
            value: street.value,
            onChange: e => street.onChange(e),
            onBlur: e => street.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
            type: "text",
            className: "content__inputs_apt",
            placeholder: "Apt, Suite, Bldg, Gate Code. (optional)",
            value: apt.value,
            onChange: e => apt.onChange(e),
            onBlur: e => apt.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 12
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "content__inputs_icon",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
              type: "text",
              name: "city",
              className: b.isNext && city.isEmpty ? "content__inputs_city focused" : "content__inputs_city",
              placeholder: "City",
              value: geo.city == undefined ? city.value : geo.city,
              onChange: e => city.onChange(e),
              onBlur: e => city.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 11
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "content__inputs__row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "content__inputs__row_country",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("select", {
                onChange: e => country.onChange(e),
                onBlur: e => country.onBlur(e),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
                  value: geo.country == undefined ? country.value : geo.country,
                  selected: true,
                  disabled: true,
                  children: geo.country === undefined ? country.value : geo.country
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 14
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
                  value: "Russia",
                  children: "Russia"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 14
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
                  value: "USA",
                  children: "USA"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 151,
                  columnNumber: 14
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
                  value: "UK",
                  children: "UK"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 14
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
                  value: "Ukraine",
                  children: "Ukraine"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 14
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 12
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 12
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
              type: "text",
              className: b.isNext && zip.isEmpty ? "content__inputs__row_zip focused" : "content__inputs__row_zip",
              placeholder: "ZIP",
              value: geo.zip == undefined ? zip.value : geo.zip,
              onChange: e => zip.onChange(e),
              onBlur: e => zip.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 10
        }, undefined), full_name.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
          onClick: () => setToggleClass(3),
          className: "content__button",
          style: {
            cursor: 'pointer'
          },
          children: "Continue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, undefined), !(full_name.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
          className: "content__button",
          style: {
            cursor: 'pointer'
          },
          children: "Continue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: toggleClass === 3 ? "content active-content" : "content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "content__title",
          children: "Payment"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "content__ssl",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "content__ssl_logo",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
              src: (_img_payment_Shape_png__WEBPACK_IMPORTED_MODULE_4___default()),
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 12
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "content__ssl_text",
            children: "This is a secure 128-bit SSL encrypted payment"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "content__recipient",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "content__recipient_text",
            children: "Cardholder Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "content__inputs",
          children: [(b.isNext && full_name.isEmpty || b.isNext && full_name.isMinLengthError) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "message",
            children: "Please enter recipient full name and min length = 3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 93
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
            type: "text",
            className: b.isNext && full_name.isEmpty || b.isNext && full_name.isMinLengthError ? "content__inputs_fullname focused" : "content__inputs_fullname",
            placeholder: "Name as it appears on your card",
            value: full_name.value,
            onChange: e => full_name.onChange(e),
            onBlur: e => full_name.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "content__address",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "content__address_text",
            children: "Card Number"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "content__inputs",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_5___default()), {
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
            lineNumber: 193,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
            src: cardType,
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "content__cards__info",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "content__cards__info__expire",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "content__cards_info__expire_text",
              children: "Expire Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 12
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_5___default()), {
              mask: "99 / 99",
              placeholder: "MM / YY",
              type: "text",
              className: "content__cards_info__expire_input",
              name: "message"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "content__cards__info__security",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "content__cards_info__security_text",
              children: "Security Code"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 12
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_5___default()), {
              mask: "999",
              type: "text",
              placeholder: "XXX",
              className: "content__cards_info__security_input",
              name: "subject"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
          className: "content__button",
          type: "submit",
          children: "Pay Securely"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 10
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 8
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
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

function sendEmail(e) {
  e.preventDefault();
  emailjs_com__WEBPACK_IMPORTED_MODULE_0___default().sendForm('service_owomoeu', 'template_x9ti2tv', e.target, 'user_CDqPOO792JWRicGOj2wWn').then(result => {
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
      lineNumber: 15,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Main__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

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

/***/ "./img/header/Shape.png":
/*!******************************!*\
  !*** ./img/header/Shape.png ***!
  \******************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAQCAYAAAD52jQlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH1SURBVHgBrZQxb9NAHMXf3dmNqe3UlWgpEoP5BHhiJRILCAnCzID4AoQdpLAwIjGzRBFCbElJkZBKIOnAgpDqSnyAMhRFalEMbczF9vm4lFCCE5DS9E2+97t79/dfd0eaZuOdJCBESplScp7FrHCZX/uMk1LTXCs1zVe3MaO00YEkyRYBK63bDcLUmEKAIT3iQjkYOiITxIaeHov2X6GaBl/E0tMJVoEY+uHkP8vpcOmA0BHCfhclZTHRaRdZtfO1TRxTTbtReW3UXZoFORn5783nHo4hKlP3Kr+5PRbKCPwcSy9hSm06FcdiB7/Cx7cTGwRi6kotcG+B9doTQy8Gt3xC4GJKLej7F/Lpt/bgW5s4Q6V+cp56JkRgIIBj8CPU4SvKMcC5ASh/BRwOOsiR/UIftDoxtGXVnsSi39VZcjelESiZI5GIYdK+5KlGBFVHKp5DyAzVKQO7pKf+N5HL8muwGDwMxgpsOXV33WrUMaOyPQ3UG+AOzhpmEMkaTbtehGQldUWdU4y7JgmDedKHxXrb8whhMI6D1MJOdBZ7wil0kuW2ukqeyXqr18Mrd/6721trrfzGfnnjo/OsuJWvlLO8u/TI+3L68WGrPtgvaqOM/is00pKqemHufU/schihmuWLu/f9JW3P+XHmQeucsbMxyn4CSEm84pmgGS8AAAAASUVORK5CYII="

/***/ }),

/***/ "./img/header/logo.png":
/*!*****************************!*\
  !*** ./img/header/logo.png ***!
  \*****************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKiSURBVHgBtZVBaNNQGMe/95q0CdOR6WSbXqIXmZfZ3XZy3c3T1qMX24kIQ5AOBNnBtRWGiId2II7pIWMOdpBZ9TIQXKYwph4seJiiQoIXhxPMHDNp0veeyWBjLW1Wbfs7vu//8ue9//e+ADSBWeGN9oB/dxaayWNBTc0FV5TydQ4ayPOWF3GHwEUH2wPlNQQNQpVysmkLaoFCJGqd18vrGBoFARUBnalk0jBWWudTr1sWFD9N3RnlJSVeoDRm87/Dfrq6MvooTckOE95vF6C3zxrW/bR1nYhHoDIg6T7rsg7/w5f2qf6DNN+OZDJfpXslueSknFRNX9J17n33r7U9VBFh4+DDj2O34wGgQ1vgjO5f5wti/ImganPC21j5np2MVqV5mQOmcMyWQ4jGzxiXXlUzMTuTskWCecvB4S5jTC+vzwuqXKTikslCmyQgREes7h0NenloIRXEJBakzkyQsyfDxrABPpgd45pF+Wzbxs1JP90Un3e7UUxaTFg2KUujpcM5jQcHOIdE+qwLut9m0nUjS4ocC25MjEINZAKfsiYRr7lfj+KBrehJr3NwiKr51hnFa9lKm6yOsQQwGOSd7fRBBo+E1f5pPq9hBD0c4EgSTjzbe0duI8gYcMw9XTIAhVunjaup3ZqXC2JUZciOiOt39GoGi8KivI1ExaQh2SSh+JVi717We13nZqP3GLE0AucUhzHbXf8lJSWHYhUoy/qZeJAAGkKMLRdFK7zfpCZ+Hp3IbranMlAnvpNhvf1uAqHiIHWY7xyrhaqz7ntnRgZCVXDsSKX38q9U/B9pkiLZNnLnGMs2wsSj4tUR/MfL5OnxjeuT0CzWpOnE57b7GjSYkhN5b4mhYpIwWnf4vkbAvFxQotsY0aGZfJBmz0GT+Av1mholchsK0QAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./img/payment/Shape.png":
/*!*******************************!*\
  !*** ./img/payment/Shape.png ***!
  \*******************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAaCAYAAABVX2cEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHuSURBVHgBvZVdTvJAFIZnSoFbllBXIN8KPliB7EC94y+xrKC4g5oA4U5YgboC6grUHXQHcg0BfE7TGqx0OibGk0w67Zx55syZd061ytlwOGwdDoeAbpPWoL3SltVqdRGG4VoZzMmBxvv9/h7YI5PPptOp5t1n6Hyz2bx0u13PBNNZp9/vX/EImNyez+dx3pHxQGvdYoG2ETYYDA673e6sUqmsePUKnbVuSwqKgNk2I8dxGiaQGKAL2rJo/DNnKUyVwBr4rUthP7Bfhak/gWm01UEO57VabYmWAqOz1hH6e8avxZwoLyGXpD7MZrNMb9cmmIh6u92GQBvI6IpP8ReYsjRAIQvfmHyscia3owxkDWNbgY1fKUyqiDpxM4i0Q8TN42+lOWPS5dGrCHbBt7UcAv0HgBFKGEl5sjmAbPUFshjlatpIqgknLAXin03OmkQSUymuTxVHZHUrEQs0gaV5+Wa+7yeXny2NlcEYv5VaJ9uMWHlFTfvmRPjJE8W/mWCu677i23Kl0BHiRZrQUxaS4HdlYckBsO+nIgcW6vCQdlfkQ+QdubelB0AxFIhf9DORvKaiXpTCJpNJlDg6zioPBOSlsngkXUutLI0Dkl+e3M84Fa1H36M/Jk1JCqxhmfV6vf9E6VHP4nq9/nasvQ992eXoNxkepQAAAABJRU5ErkJggg=="

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQSwyR0FBK0M7Ozs7Ozs7Ozs7O0FDQS9DLGlDQUFpQzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUM7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDOzs7Ozs7Ozs7OztBQ0FqQzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL05leHQvLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIudHN4Iiwid2VicGFjazovL05leHQvLi9jb21wb25lbnRzL01haW4udHN4Iiwid2VicGFjazovL05leHQvLi9jb21wb25lbnRzL05hdmJhci9IZWFkZXIudHN4Iiwid2VicGFjazovL05leHQvLi9jb21wb25lbnRzL1Byb2R1Y3RzLnRzeCIsIndlYnBhY2s6Ly9OZXh0Ly4vY29tcG9uZW50cy9VSS9UYWJzLnRzeCIsIndlYnBhY2s6Ly9OZXh0Ly4vaG9va3MvdXNlQ29uZmlybWF0aW9uLnRzIiwid2VicGFjazovL05leHQvLi9ob29rcy91c2VHZW9sb2NhdGlvbi50cyIsIndlYnBhY2s6Ly9OZXh0Ly4vaG9va3MvdXNlSWRlbnRpZmljYXRpb25DYXJkLnRzIiwid2VicGFjazovL05leHQvLi9ob29rcy91c2VJbnB1dC50cyIsIndlYnBhY2s6Ly9OZXh0Ly4vaG9va3MvdXNlVmFsaWRhdGlvbi50cyIsIndlYnBhY2s6Ly9OZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vTmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9OZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9OZXh0Ly4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL05leHQvLi9zdHlsZXMvRm9vdGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL05leHQvLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL05leHQvLi9zdHlsZXMvTWFpbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9OZXh0Ly4vc3R5bGVzL1Byb2R1Y3RzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL05leHQvLi9zdHlsZXMvaW5kZXgubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vTmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovL05leHQvLi9pbWcvaGVhZGVyL1NoYXBlLnBuZyIsIndlYnBhY2s6Ly9OZXh0Ly4vaW1nL2hlYWRlci9sb2dvLnBuZyIsIndlYnBhY2s6Ly9OZXh0Ly4vaW1nL3BheW1lbnQvU2hhcGUucG5nIiwid2VicGFjazovL05leHQvZXh0ZXJuYWwgXCJlbWFpbGpzLWNvbVwiIiwid2VicGFjazovL05leHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL05leHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vTmV4dC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9OZXh0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9OZXh0L2V4dGVybmFsIFwicmVhY3QtaW5wdXQtbWFza1wiIiwid2VicGFjazovL05leHQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0Zvb3Rlci5tb2R1bGUuc2NzcydcclxuXHJcbmNvbnN0IEZvb3RlcjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuXHRcdFx0XHJcblx0XHQ8L2Zvb3Rlcj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9NYWluLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgUHJvZHVjdHMgZnJvbSAnLi9Qcm9kdWN0cydcclxuaW1wb3J0IFRhYnMgZnJvbSAnLi9VSS9UYWJzJ1xyXG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gXCIuLi90eXBlcy9JUHJvZHVjdFwiO1xyXG5pbXBvcnQgc2VuZEVtYWlsIGZyb20gJy4uL2hvb2tzL3VzZUNvbmZpcm1hdGlvbic7XHJcblxyXG5cclxuY29uc3QgTWFpbjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcblxyXG5cdGNvbnN0IHByb2R1Y3RzOiBJUHJvZHVjdFtdID0gW3tpZDogMSwgbmFtZTogJ9Ch0YPQvNC60LAnLCBkZXNjcmlwdGlvbjogJ9Ca0YDRg9GC0LDRjyDRgdGD0LzQutCwJywgcHJpY2U6IDMwMCB9LCB7aWQ6IDIsIG5hbWU6ICfQodGD0LzQutCwJywgZGVzY3JpcHRpb246ICfQmtGA0YPRgtCw0Y8g0YHRg9C80LrQsCAyJywgcHJpY2U6IDMwMCB9LCB7aWQ6IDMsIG5hbWU6ICfQodGD0LzQutCwJywgZGVzY3JpcHRpb246ICfQmtGA0YPRgtCw0Y8g0YHRg9C80LrQsCAzJywgcHJpY2U6IDMwMCB9LCB7aWQ6IDQsIG5hbWU6ICfQodGD0LzQutCwJywgZGVzY3JpcHRpb246ICfQmtGA0YPRgtCw0Y8g0YHRg9C80LrQsCA0JywgcHJpY2U6IDMwMCB9XVxyXG5cdFxyXG5cdHJldHVybiAoXHJcblx0XHQ8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlX19tYWluICsgXCIgXCIgKyBzdHlsZXMubWFpbn0+XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluX19jb250YWluZXIgKyBcIiBcIiArIHN0eWxlcy5fY29udGFpbmVyfT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbl9fYm9keX0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbl9fYm9keV9fY29udGFpbmVyfT5cclxuXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17c2VuZEVtYWlsfSBjbGFzc05hbWU9e3N0eWxlcy5tYWluX19mb3JtfT5cclxuXHRcdFx0XHRcdFx0XHQ8VGFicz48L1RhYnM+XHJcblx0XHRcdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0XHRcdFx0PFByb2R1Y3RzIHByb2R1Y3RzID0ge3Byb2R1Y3RzfT48L1Byb2R1Y3RzPlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L21haW4+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0hlYWRlci5tb2R1bGUuc2NzcydcclxuaW1wb3J0IGxvZ28gZnJvbSAnLi4vLi4vaW1nL2hlYWRlci9sb2dvLnBuZyc7XHJcbmltcG9ydCBpY29uIGZyb20gJy4uLy4uL2ltZy9oZWFkZXIvU2hhcGUucG5nJztcclxuXHJcbmNvbnN0IEhlYWRlcjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfX2NvbnRhaW5lciArIFwiIFwiICsgc3R5bGVzLl9jb250YWluZXJ9ID5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fbG9nb30+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fbG9nb19pY29ufT5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e2xvZ299IGFsdD1cIlwiLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9IHtzdHlsZXMuaGVhZGVyX19sb2dvX3RleHR9PlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fYnVza2V0fT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fYnVza2V0X3RleHR9PlxyXG5cdFx0XHRcdFx0Y2FydFxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX19idXNrZXRfaWNvbn0+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz17aWNvbn0gYWx0PVwiXCIvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHRcclxuXHRcdDwvaGVhZGVyPlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvUHJvZHVjdHMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IElQcm9kdWN0IH0gZnJvbSAnLi4vdHlwZXMvSVByb2R1Y3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5pbnRlcmZhY2UgUHJvZHVjdHNJdGVtc1Byb3BzIHtcclxuXHRwcm9kdWN0czogSVByb2R1Y3RbXTtcclxufVxyXG5jb25zdCBQcm9kdWN0czogUmVhY3QuRkM8UHJvZHVjdHNJdGVtc1Byb3BzPiA9ICh7cHJvZHVjdHN9KSA9PiB7XHJcblxyXG5cdGNvbnN0IFtzZWxlY3RlZFByb2R1Y3RzLCBzZXRTZWxlY3RlZFByb2R1Y3RzXSA9IHVzZVN0YXRlPElQcm9kdWN0W10+KHByb2R1Y3RzKVxyXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5fX3Byb2R1Y3RzfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0c19fdGV4dH0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0c19fdGV4dF90aXRsZX0+XHJcblx0XHRcdFx0XHRPcmRlciBzdW1tYXJ5XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGEgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdHNfX3RleHRfZWRpdH0+XHJcblx0XHRcdFx0XHRlZGl0IG9yZGVyXHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PHVsIGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RzX19pdGVtc30+XHJcblx0XHRcdFx0eyFsb2FkaW5nICYmICBzZWxlY3RlZFByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IFxyXG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RzX19wcm9kdWN0fT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0X19pbWFnZX0+XHJcblx0XHRcdFx0XHRcdFx0PEltYWdlIHNyYz0gJy8uLi9pbWcvcHJvZHVjdHMvc3Vta2EucG5nJyB3aWR0aD17MjB9IGhlaWdodD17MjB9IGFsdD1cIlwiLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdF9fY29udGVudH0+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0X19jb250ZW50X25hbWV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0e3Byb2R1Y3QubmFtZX1cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RfX2NvbnRlbnRfZGVzY3JpcHRpb259PlxyXG5cdFx0XHRcdFx0XHRcdFx0e3Byb2R1Y3QuZGVzY3JpcHRpb259XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0X19jb250ZW50X3F1YW50aXR5fT5cclxuXHRcdFx0XHRcdFx0XHRcdFF1YW50aXR5OiAxXHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdF9fcHJpY2V9PlxyXG5cdFx0XHRcdFx0XHRcdFx0JHtwcm9kdWN0LnByaWNlfVxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8L2xpPlxyXG5cclxuXHRcdFx0XHQpfVxyXG5cclxuXHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RzX19jb3N0fT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29zdF9fc3VidG90YWx9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1YnRvdGFsX190ZXh0fT5cclxuXHRcdFx0XHRcdFx0XHRTdWJ0b3RhbFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0b3RhbF9fY291bnR9PlxyXG5cdFx0XHRcdFx0XHRcdCR7IWxvYWRpbmcgJiYgc2VsZWN0ZWRQcm9kdWN0cy5yZWR1Y2UoKGFjYywgY3VyKSA9PiB7IHJldHVybiBhY2MgKyBjdXIucHJpY2UgfSwgMCl9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvc3RfX3NoaXBwaW5nfT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaGlwcGluZ19fdGV4dH0+XHJcblx0XHRcdFx0XHRcdFx0U2hpcHBpbmdcclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2hpcHBpbmdfX2NvdW50fT5cclxuXHRcdFx0XHRcdFx0XHRGcmVlXHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvc3RfX3RheGVzfT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YXhlc19fdGV4dH0+XHJcblx0XHRcdFx0XHRcdFx0VGF4ZXNcclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGF4ZXNfX2NvdW50fT5cclxuXHRcdFx0XHRcdFx0XHR7IWxvYWRpbmcgJiYgc2VsZWN0ZWRQcm9kdWN0cy5yZWR1Y2UoKGFjYywgY3VyKSA9PiBhY2MgKyBjdXIucHJpY2UsIDApKjAuMDN9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvc3RfX3RvdGFsfT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3RhbF9fdGV4dH0+XHJcblx0XHRcdFx0XHRcdFx0VG90YWxcclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG90YWxfX2NvdW50fT5cclxuXHRcdFx0XHRcdFx0XHQkeyFsb2FkaW5nICYmIHNlbGVjdGVkUHJvZHVjdHMucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjICsgY3VyLnByaWNlLCAwKSArIHNlbGVjdGVkUHJvZHVjdHMucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjICsgY3VyLnByaWNlLCAwKSowLjAzfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdHNfX2luZm9ybWF0aW9ufT5cclxuXHRcdFx0XHRcdEFsbCBwdXJjaGFzZXMgYXJlIHN1YmplY3QgdG8gb3VyIFRlcm1zIGFuZCBDb25kaXRpb25zLlxyXG5cdFx0XHRcdDwvZm9vdGVyPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0cztcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VHZW9sb2NhdGlvbiB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUdlb2xvY2F0aW9uJztcclxuaW1wb3J0IHsgdXNlSWRlbnRpZmljYXRpb25DYXJkIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlSWRlbnRpZmljYXRpb25DYXJkJztcclxuaW1wb3J0IHsgdXNlSW5wdXQgfSBmcm9tICcuLi8uLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCBsb2dvIGZyb20gJy4uLy4uL2ltZy9wYXltZW50L1NoYXBlLnBuZyc7XHJcbmltcG9ydCBJbnB1dE1hc2sgZnJvbSBcInJlYWN0LWlucHV0LW1hc2tcIjtcclxuaW1wb3J0IGVtYWlsanMgZnJvbSAnZW1haWxqcy1jb20nO1xyXG5cclxuXHJcbmNvbnN0IFRhYnM6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG5cclxuXHJcblx0Y29uc3QgW3RvZ2dsZUNsYXNzLCBzZXRUb2dnbGVDbGFzc10gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xyXG5cdGNvbnN0IFtjYXJkVHlwZSwgc2V0Q2FyZFR5cGVdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcblxyXG5cdGNvbnN0IGZ1bGxfbmFtZSA9IHVzZUlucHV0KCcnLCB7aXNFbXB0eTogdHJ1ZSwgbWluTGVuZ3RoOiAzfSk7XHJcblx0Y29uc3Qgc3RyZWV0ID0gdXNlSW5wdXQoJycsIHtpc0VtcHR5OiB0cnVlfSk7XHJcblx0Y29uc3QgcGhvbmUgPSB1c2VJbnB1dCgnJywge2lzRW1wdHk6IHRydWV9KTtcclxuXHRjb25zdCBhcHQgPSB1c2VJbnB1dCgnJywge30pO1xyXG5cdGNvbnN0IGNpdHkgPSB1c2VJbnB1dCgnJywge2lzRW1wdHk6IHRydWV9KTtcclxuXHRjb25zdCBjb3VudHJ5ID0gdXNlSW5wdXQoJ0NvdW50cnknLCB7aXNFbXB0eTogdHJ1ZX0pO1xyXG5cdGNvbnN0IHppcCA9IHVzZUlucHV0KCcnLCB7aXNFbXB0eTogdHJ1ZX0pO1xyXG4gXHRjb25zdCBiID0gdXNlSW5wdXQoJycsIHt9KTtcclxuXHRjb25zdCBjYXJkID0gdXNlSW5wdXQoJycsIHt9KTtcclxuXHRjb25zdCBlbWFpbCA9IHVzZUlucHV0KCcnLCB7aXNFbWFpbDogZmFsc2V9KTtcclxuXHRjb25zdCBtc2c6IHN0cmluZyA9IFwi0J/RgNC+0LLQtdGA0LrQsFwiXHJcblx0XHJcblx0Y29uc3QgZ2VvID0gdXNlR2VvbG9jYXRpb24oKTsgXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZXRDYXJkVHlwZSh1c2VJZGVudGlmaWNhdGlvbkNhcmQoY2FyZC52YWx1ZSkpO1xyXG5cdH0sIFtjYXJkLnZhbHVlXSlcclxuXHJcblx0XHJcblx0XHJcblxyXG5cdFxyXG5cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpbi1ibG9ja19fZm9ybV9fdGFic1wiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXt0b2dnbGVDbGFzcyA9PT0gMSA/IFwidGFicyBhY3RpdmUtdGFic1wiIDogXCJ0YWJzXCJ9IG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZUNsYXNzKDEpfT5TaGlwcGluZzwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXt0b2dnbGVDbGFzcyA9PT0gMiA/IFwidGFicyBhY3RpdmUtdGFic1wiIDogXCJ0YWJzXCJ9IG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZUNsYXNzKDIpfT5CaWxsaW5nPC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3RvZ2dsZUNsYXNzID09PSAzID8gXCJ0YWJzIGFjdGl2ZS10YWJzXCIgOiBcInRhYnNcIn0gb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlQ2xhc3MoMyl9PlBheW1lbnQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpbi1ibG9ja19fZm9ybV9fdGFic19fY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3RvZ2dsZUNsYXNzID09PSAxID8gXCJjb250ZW50IGFjdGl2ZS1jb250ZW50XCIgOiBcImNvbnRlbnRcIn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fdGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRTaGlwcGluZyBpbmZvXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19yZWNpcGllbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3JlY2lwaWVudF90ZXh0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRSZWNpcGllbnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzXCI+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsoKGIuaXNOZXh0ICYmIGZ1bGxfbmFtZS5pc0VtcHR5KSB8fCAoYi5pc05leHQgJiYgZnVsbF9uYW1lLmlzTWluTGVuZ3RoRXJyb3IpKSAmJiAoPGRpdiBjbGFzc05hbWU9J21lc3NhZ2UnPlBsZWFzZSBlbnRlciByZWNpcGllbnQgZnVsbCBuYW1lIGFuZCBtaW4gbGVuZ3RoID0gMzwvZGl2Pil9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXsoKGIuaXNOZXh0ICYmIGZ1bGxfbmFtZS5pc0VtcHR5KSB8fCAoYi5pc05leHQgJiYgZnVsbF9uYW1lLmlzTWluTGVuZ3RoRXJyb3IpKSA/IFwiY29udGVudF9faW5wdXRzX2Z1bGxuYW1lIGZvY3VzZWRcIiA6IFwiY29udGVudF9faW5wdXRzX2Z1bGxuYW1lXCJ9IHBsYWNlaG9sZGVyPVwiRnVsbCBOYW1lXCIgdmFsdWU9e2Z1bGxfbmFtZS52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBmdWxsX25hbWUub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IGZ1bGxfbmFtZS5vbkJsdXIoZSl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19kYXl0aW1lX2NvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0eygoYi5pc05leHQgJiYgcGhvbmUuaXNFbXB0eSkpICYmICg8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZSc+UGxlYXNlIGVudGVyIHJlY2lwaWVudCBwaG9uZSBpbiBmb3JtYXQgKzcgKDAwMCkgMDAwIDAwIDAwPC9kaXY+KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PElucHV0TWFzayBuYW1lPVwicGhvbmVcIiBtYXNrPVwiKzdcXCg5OTkpIDk5OS05OS05OVwiIHR5cGU9XCJ0ZWxcIiBjbGFzc05hbWU9eygoYi5pc05leHQgJiYgcGhvbmUuaXNFbXB0eSkpID8gXCJjb250ZW50X19pbnB1dHNfZGF5dGltZSBmb2N1c2VkXCIgOiBcImNvbnRlbnRfX2lucHV0c19kYXl0aW1lXCJ9IGlkPVwicGhvbmVOdW1iZXJcIiBwbGFjZWhvbGRlcj1cIkRhdGV0aW1lIFBob25lXCIgdmFsdWU9e3Bob25lLnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHBob25lLm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBwaG9uZS5vbkJsdXIoZSl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yID1cImNvbnRlbnRfX2lucHV0c19kYXl0aW1lX2xhYmVsXCI+Rm9yIGRlbGl2ZXJ5IHF1ZXN0aW9ucyBvbmx5PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19hZGRyZXNzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19hZGRyZXNzX3RleHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEFkZHJlc3NcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzXCI+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsoKGIuaXNOZXh0ICYmIHN0cmVldC5pc0VtcHR5KSkgJiYgKDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlJz5QbGVhc2UgZW50ZXIgcmVjaXBpZW50IHN0cmVldDwvZGl2Pil9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXsoKGIuaXNOZXh0ICYmIHN0cmVldC5pc0VtcHR5KSkgPyBcImNvbnRlbnRfX2lucHV0c19zdHJlZXQgZm9jdXNlZFwiIDogXCJjb250ZW50X19pbnB1dHNfc3RyZWV0XCJ9IHBsYWNlaG9sZGVyPVwiU3RyZWV0IEFkZHJlc3NcIiB2YWx1ZT17c3RyZWV0LnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHN0cmVldC5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gc3RyZWV0Lm9uQmx1cihlKX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19hcHRcIiBwbGFjZWhvbGRlcj1cIkFwdCwgU3VpdGUsIEJsZGcsIEdhdGUgQ29kZS4gKG9wdGlvbmFsKVwiIHZhbHVlPXthcHQudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gYXB0Lm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBhcHQub25CbHVyKGUpfS8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19pY29uXCI+XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjaXR5XCIgY2xhc3NOYW1lPXsoKGIuaXNOZXh0ICYmIGNpdHkuaXNFbXB0eSkpID8gXCJjb250ZW50X19pbnB1dHNfY2l0eSBmb2N1c2VkXCIgOiBcImNvbnRlbnRfX2lucHV0c19jaXR5XCJ9IHBsYWNlaG9sZGVyPVwiQ2l0eVwiIHZhbHVlPXtnZW8uY2l0eSA9PSB1bmRlZmluZWQgPyBjaXR5LnZhbHVlIDogZ2VvLmNpdHl9IG9uQ2hhbmdlPXsoZSkgPT4gY2l0eS5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gY2l0eS5vbkJsdXIoZSl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsvKiA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ3Jvc3NoYWlyc30gc3R5bGU9e3twb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAnNDAlJywgcmlnaHQ6ICcxMHB4JywgZm9udFNpemU6ICcyMHB4JywgY3Vyc29yOiAncG9pbnRlcid9fSAvPiAqL31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfX3Jvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfX3Jvd19jb3VudHJ5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0IG9uQ2hhbmdlPXsoZSkgPT4gY291bnRyeS5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gY291bnRyeS5vbkJsdXIoZSl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9e2dlby5jb3VudHJ5ID09IHVuZGVmaW5lZCA/IGNvdW50cnkudmFsdWUgOiBnZW8uY291bnRyeX0gc2VsZWN0ZWQgZGlzYWJsZWQ+eyhnZW8uY291bnRyeSA9PSB1bmRlZmluZWQpID8gY291bnRyeS52YWx1ZSA6IGdlby5jb3VudHJ5fTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJSdXNzaWFcIj5SdXNzaWE8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiVVNBXCI+VVNBPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlVLXCI+VUs8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiVWtyYWluZVwiPlVrcmFpbmU8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9eygoYi5pc05leHQgJiYgemlwLmlzRW1wdHkpKSA/IFwiY29udGVudF9faW5wdXRzX19yb3dfemlwIGZvY3VzZWRcIiA6IFwiY29udGVudF9faW5wdXRzX19yb3dfemlwXCJ9IHBsYWNlaG9sZGVyPVwiWklQXCIgdmFsdWU9e2dlby56aXAgPT0gdW5kZWZpbmVkID8gemlwLnZhbHVlIDogZ2VvLnppcH0gb25DaGFuZ2U9eyhlKSA9PiB6aXAub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IHppcC5vbkJsdXIoZSl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHsoZnVsbF9uYW1lLmlucHV0VmFsaWQgJiYgcGhvbmUuaW5wdXRWYWxpZCAmJiBzdHJlZXQuaW5wdXRWYWxpZCAmJiBjaXR5LmlucHV0VmFsaWQgJiYgY291bnRyeS5pbnB1dFZhbGlkICYmIHppcC5pbnB1dFZhbGlkKSAmJiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGVDbGFzcygyKX0gY2xhc3NOYW1lPVwiY29udGVudF9fYnV0dG9uXCIgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJ319PkNvbnRpbnVlPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHshKGZ1bGxfbmFtZS5pbnB1dFZhbGlkICYmIHBob25lLmlucHV0VmFsaWQgJiYgc3RyZWV0LmlucHV0VmFsaWQgJiYgY2l0eS5pbnB1dFZhbGlkICYmIGNvdW50cnkuaW5wdXRWYWxpZCAmJiB6aXAuaW5wdXRWYWxpZCkgJiYgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiY29udGVudF9fYnV0dG9uXCIgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJ319PkNvbnRpbnVlPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dG9nZ2xlQ2xhc3MgPT09IDIgPyBcImNvbnRlbnQgYWN0aXZlLWNvbnRlbnRcIiA6IFwiY29udGVudFwifT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X190aXRsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEJpbGxpbmcgSW5mb3JtYXRpb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fcmVjaXBpZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19yZWNpcGllbnRfdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QmlsbGluZyBDb250YWN0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c1wiPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0eygoYi5pc05leHQgJiYgZnVsbF9uYW1lLmlzRW1wdHkpIHx8IChiLmlzTmV4dCAmJiBmdWxsX25hbWUuaXNNaW5MZW5ndGhFcnJvcikpICYmICg8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZSc+UGxlYXNlIGVudGVyIHJlY2lwaWVudCBmdWxsIG5hbWUgYW5kIG1pbiBsZW5ndGggPSAzPC9kaXY+KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9eygoYi5pc05leHQgJiYgZnVsbF9uYW1lLmlzRW1wdHkpIHx8IChiLmlzTmV4dCAmJiBmdWxsX25hbWUuaXNNaW5MZW5ndGhFcnJvcikpID8gXCJjb250ZW50X19pbnB1dHNfZnVsbG5hbWUgZm9jdXNlZFwiIDogXCJjb250ZW50X19pbnB1dHNfZnVsbG5hbWVcIn0gbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkZ1bGwgTmFtZVwiIHZhbHVlPXtmdWxsX25hbWUudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gZnVsbF9uYW1lLm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBmdWxsX25hbWUub25CbHVyKGUpfS8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7KGIuaXNOZXh0ICYmIGVtYWlsLmlzRW1haWxFcnJvcikgJiYgKDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlJz5QbGVhc2UgZW50ZXIgY29ycmVjdCBlbWFpbDwvZGl2Pil9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXsoKGIuaXNOZXh0ICYmIGVtYWlsLmlzRW1haWxFcnJvcikpID8gXCJjb250ZW50X19pbnB1dHNfZW1haWwgZm9jdXNlZFwiIDogXCJjb250ZW50X19pbnB1dHNfZW1haWxcIn0gcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCIgdmFsdWU9e2VtYWlsLnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IGVtYWlsLm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBlbWFpbC5vbkJsdXIoZSl9IG5hbWU9XCJlbWFpbFwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2FkZHJlc3NcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2FkZHJlc3NfdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QmlsbGluZyBBZGRyZXNzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7KChiLmlzTmV4dCAmJiBzdHJlZXQuaXNFbXB0eSkpICYmICg8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZSc+UGxlYXNlIGVudGVyIHJlY2lwaWVudCBzdHJlZXQ8L2Rpdj4pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17KChiLmlzTmV4dCAmJiBzdHJlZXQuaXNFbXB0eSkpID8gXCJjb250ZW50X19pbnB1dHNfc3RyZWV0IGZvY3VzZWRcIiA6IFwiY29udGVudF9faW5wdXRzX3N0cmVldFwifSBwbGFjZWhvbGRlcj1cIlN0cmVldCBBZGRyZXNzXCIgdmFsdWU9e3N0cmVldC52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBzdHJlZXQub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IHN0cmVldC5vbkJsdXIoZSl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19hcHRcIiBwbGFjZWhvbGRlcj1cIkFwdCwgU3VpdGUsIEJsZGcsIEdhdGUgQ29kZS4gKG9wdGlvbmFsKVwiIHZhbHVlPXthcHQudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gYXB0Lm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBhcHQub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfaWNvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjaXR5XCIgY2xhc3NOYW1lPXsoKGIuaXNOZXh0ICYmIGNpdHkuaXNFbXB0eSkpID8gXCJjb250ZW50X19pbnB1dHNfY2l0eSBmb2N1c2VkXCIgOiBcImNvbnRlbnRfX2lucHV0c19jaXR5XCJ9IHBsYWNlaG9sZGVyPVwiQ2l0eVwiIHZhbHVlPXtnZW8uY2l0eSA9PSB1bmRlZmluZWQgPyBjaXR5LnZhbHVlIDogZ2VvLmNpdHl9IG9uQ2hhbmdlPXsoZSkgPT4gY2l0eS5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gY2l0eS5vbkJsdXIoZSl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsvKiA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ3Jvc3NoYWlyc30gc3R5bGU9e3twb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAnNDAlJywgcmlnaHQ6ICcxMHB4JywgZm9udFNpemU6ICcyMHB4JywgY3Vyc29yOiAncG9pbnRlcid9fSAvPiAqL31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19fcm93XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19fcm93X2NvdW50cnlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiBjb3VudHJ5Lm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBjb3VudHJ5Lm9uQmx1cihlKX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT17Z2VvLmNvdW50cnkgPT0gdW5kZWZpbmVkID8gY291bnRyeS52YWx1ZSA6IGdlby5jb3VudHJ5fSBzZWxlY3RlZCBkaXNhYmxlZD57KGdlby5jb3VudHJ5ID09PSB1bmRlZmluZWQpID8gY291bnRyeS52YWx1ZSA6IGdlby5jb3VudHJ5fTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJSdXNzaWFcIj5SdXNzaWE8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiVVNBXCI+VVNBPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlVLXCI+VUs8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiVWtyYWluZVwiPlVrcmFpbmU8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9eygoYi5pc05leHQgJiYgemlwLmlzRW1wdHkpKSA/IFwiY29udGVudF9faW5wdXRzX19yb3dfemlwIGZvY3VzZWRcIiA6IFwiY29udGVudF9faW5wdXRzX19yb3dfemlwXCJ9IHBsYWNlaG9sZGVyPVwiWklQXCIgdmFsdWU9e2dlby56aXAgPT0gdW5kZWZpbmVkID8gemlwLnZhbHVlIDogZ2VvLnppcH0gb25DaGFuZ2U9eyhlKSA9PiB6aXAub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IHppcC5vbkJsdXIoZSl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHsoZnVsbF9uYW1lLmlucHV0VmFsaWQgJiYgc3RyZWV0LmlucHV0VmFsaWQgJiYgY2l0eS5pbnB1dFZhbGlkICYmIGNvdW50cnkuaW5wdXRWYWxpZCAmJiB6aXAuaW5wdXRWYWxpZCkgJiYgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlQ2xhc3MoMyl9IGNsYXNzTmFtZT1cImNvbnRlbnRfX2J1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcid9fT5Db250aW51ZTwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7IShmdWxsX25hbWUuaW5wdXRWYWxpZCAmJiBzdHJlZXQuaW5wdXRWYWxpZCAmJiBjaXR5LmlucHV0VmFsaWQgJiYgY291bnRyeS5pbnB1dFZhbGlkICYmIHppcC5pbnB1dFZhbGlkKSAmJiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJjb250ZW50X19idXR0b25cIiBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX0+Q29udGludWU8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXt0b2dnbGVDbGFzcyA9PT0gMyA/IFwiY29udGVudCBhY3RpdmUtY29udGVudFwiIDogXCJjb250ZW50XCJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3RpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0UGF5bWVudFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19zc2xcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3NzbF9sb2dvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17bG9nb30gYWx0PVwiXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3NzbF90ZXh0XCI+VGhpcyBpcyBhIHNlY3VyZSAxMjgtYml0IFNTTCBlbmNyeXB0ZWQgcGF5bWVudDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19yZWNpcGllbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3JlY2lwaWVudF90ZXh0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRDYXJkaG9sZGVyIE5hbWVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHsoKGIuaXNOZXh0ICYmIGZ1bGxfbmFtZS5pc0VtcHR5KSB8fCAoYi5pc05leHQgJiYgZnVsbF9uYW1lLmlzTWluTGVuZ3RoRXJyb3IpKSAmJiAoPGRpdiBjbGFzc05hbWU9J21lc3NhZ2UnPlBsZWFzZSBlbnRlciByZWNpcGllbnQgZnVsbCBuYW1lIGFuZCBtaW4gbGVuZ3RoID0gMzwvZGl2Pil9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXsoKGIuaXNOZXh0ICYmIGZ1bGxfbmFtZS5pc0VtcHR5KSB8fCAoYi5pc05leHQgJiYgZnVsbF9uYW1lLmlzTWluTGVuZ3RoRXJyb3IpKSA/IFwiY29udGVudF9faW5wdXRzX2Z1bGxuYW1lIGZvY3VzZWRcIiA6IFwiY29udGVudF9faW5wdXRzX2Z1bGxuYW1lXCJ9IHBsYWNlaG9sZGVyPVwiTmFtZSBhcyBpdCBhcHBlYXJzIG9uIHlvdXIgY2FyZFwiIHZhbHVlPXtmdWxsX25hbWUudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gZnVsbF9uYW1lLm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBmdWxsX25hbWUub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19hZGRyZXNzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19hZGRyZXNzX3RleHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdENhcmQgTnVtYmVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dE1hc2sgbWFzaz1cIjk5OTkgOTk5OSA5OTk5IDk5OTlcIiBuYW1lPVwiY2FyZFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzX2NhcmRcIiBwbGFjZWhvbGRlcj1cIlhYWFggWFhYWCBYWFhYIFhYWFggWFhYWFwiIHZhbHVlPXtjYXJkLnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IGNhcmQub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IGNhcmQub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtjYXJkVHlwZX0gYWx0PVwiXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fY2FyZHNfX2luZm9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2NhcmRzX19pbmZvX19leHBpcmVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fY2FyZHNfaW5mb19fZXhwaXJlX3RleHRcIj5FeHBpcmUgRGF0ZTwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PElucHV0TWFzayBtYXNrPVwiOTkgLyA5OVwiIHBsYWNlaG9sZGVyPVwiTU0gLyBZWVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY29udGVudF9fY2FyZHNfaW5mb19fZXhwaXJlX2lucHV0XCIgbmFtZT1cIm1lc3NhZ2VcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19jYXJkc19faW5mb19fc2VjdXJpdHlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fY2FyZHNfaW5mb19fc2VjdXJpdHlfdGV4dFwiPlNlY3VyaXR5IENvZGU8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dE1hc2sgbWFzaz1cIjk5OVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJYWFhcIiBjbGFzc05hbWU9XCJjb250ZW50X19jYXJkc19pbmZvX19zZWN1cml0eV9pbnB1dFwiIG5hbWU9XCJzdWJqZWN0XCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJjb250ZW50X19idXR0b25cIiB0eXBlPVwic3VibWl0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0UGF5IFNlY3VyZWx5XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlx0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYnM7XHJcbiIsImltcG9ydCBlbWFpbGpzIGZyb20gJ2VtYWlsanMtY29tJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZW5kRW1haWwoZSkge1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRlbWFpbGpzLnNlbmRGb3JtKCdzZXJ2aWNlX293b21vZXUnLCAndGVtcGxhdGVfeDl0aTJ0dicsIGUudGFyZ2V0LCAndXNlcl9DRHFQT083OTJKV1JpY0dPajJ3V24nKVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQudGV4dCk7XHJcbiAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IudGV4dCk7XHJcbiAgICAgIH0pO1xyXG5cdCAgZS50YXJnZXQucmVzZXQ7XHJcbn07XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlR2VvbG9jYXRpb24gPSAoKSA9PiB7XHJcblxyXG5cdGNvbnN0IFtjaXR5LCBzZXRDaXR5XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cdGNvbnN0IFtjb3VudHJ5LCBzZXRDb3VudHJ5XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cdGNvbnN0IFt6aXAsIHNldFppcF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuXHJcblx0Y29uc3Qgc3VjY2Vzc0NhbGxiYWNrID0gYXN5bmMgKHVybDogc3RyaW5nKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuXHRcdGF3YWl0IGZldGNoKHVybClcclxuICBcdFx0XHQudGhlbihkID0+IGQuanNvbigpKVxyXG5cdFx0XHQudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdHNldENpdHkocmVzLmNpdHkpO1xyXG5cdFx0XHRcdHNldENvdW50cnkocmVzLmNvdW50cnlfbmFtZSk7XHJcblx0XHRcdFx0c2V0WmlwKHJlcy5wb3N0YWwpO1xyXG5cdFx0XHR9KVxyXG5cdCAgfVxyXG5cclxuXHQgIFxyXG5cdCAgY29uc3QgZXJyb3JDYWxsYmFjayA9IChlcnJvcjogYW55KTogdm9pZCA9PiB7XHJcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKVxyXG5cdCAgfVxyXG5cclxuXHQvLyBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcblx0ICBzdWNjZXNzQ2FsbGJhY2soJ2h0dHBzOi8vaXBhcGkuY28vanNvbi8nKTtcclxuXHJcblx0ICByZXR1cm4ge1xyXG5cdFx0Y2l0eSxcclxuXHRcdGNvdW50cnksXHJcblx0XHR6aXBcclxuXHR9XHJcblx0XHJcblx0XHRcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gdXNlSWRlbnRpZmljYXRpb25DYXJkKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcgXHJcbntcclxuICAgIC8vIHZpc2FcclxuICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJeNFwiKTtcclxuICAgIGlmICh2YWx1ZS5tYXRjaChyZWdleCkgIT0gbnVsbClcclxuICAgICAgICByZXR1cm4gXCIuLi9pbWcvdGFicy9jYXJkcy92aXNhLnBuZ1wiO1xyXG5cclxuICAgIC8vIE1hc3RlcmNhcmQgXHJcbiAgICAvLyBVcGRhdGVkIGZvciBNYXN0ZXJjYXJkIDIwMTcgQklOcyBleHBhbnNpb25cclxuICAgICBpZiAoL14oNVsxLTVdWzAtOV17MTR9fDIoMjJbMS05XVswLTldezEyfXwyWzMtOV1bMC05XXsxM318WzMtNl1bMC05XXsxNH18N1swLTFdWzAtOV17MTN9fDcyMFswLTldezEyfSkpJC8udGVzdCh2YWx1ZSkpIFxyXG4gICAgICAgIHJldHVybiBcIk1hc3RlcmNhcmRcIjtcclxuXHJcbiAgICAvLyAvLyBBTUVYXHJcbiAgICAvLyByZSA9IG5ldyBSZWdFeHAoXCJeM1s0N11cIik7XHJcbiAgICAvLyBpZiAobnVtYmVyLm1hdGNoKHJlKSAhPSBudWxsKVxyXG4gICAgLy8gICAgIHJldHVybiBcIkFNRVhcIjtcclxuXHJcbiAgICAvLyAvLyBEaXNjb3ZlclxyXG4gICAgLy8gcmUgPSBuZXcgUmVnRXhwKFwiXig2MDExfDYyMigxMls2LTldfDFbMy05XVswLTldfFsyLThdWzAtOV17Mn18OVswLTFdWzAtOV18OTJbMC01XXw2NFs0LTldKXw2NSlcIik7XHJcbiAgICAvLyBpZiAobnVtYmVyLm1hdGNoKHJlKSAhPSBudWxsKVxyXG4gICAgLy8gICAgIHJldHVybiBcIkRpc2NvdmVyXCI7XHJcblxyXG4gICAgLy8gLy8gRGluZXJzXHJcbiAgICAvLyByZSA9IG5ldyBSZWdFeHAoXCJeMzZcIik7XHJcbiAgICAvLyBpZiAobnVtYmVyLm1hdGNoKHJlKSAhPSBudWxsKVxyXG4gICAgLy8gICAgIHJldHVybiBcIkRpbmVyc1wiO1xyXG5cclxuICAgIC8vIC8vIERpbmVycyAtIENhcnRlIEJsYW5jaGVcclxuICAgIC8vIHJlID0gbmV3IFJlZ0V4cChcIl4zMFswLTVdXCIpO1xyXG4gICAgLy8gaWYgKG51bWJlci5tYXRjaChyZSkgIT0gbnVsbClcclxuICAgIC8vICAgICByZXR1cm4gXCJEaW5lcnMgLSBDYXJ0ZSBCbGFuY2hlXCI7XHJcblxyXG4gICAgLy8gLy8gSkNCXHJcbiAgICAvLyByZSA9IG5ldyBSZWdFeHAoXCJeMzUoMls4OV18WzMtOF1bMC05XSlcIik7XHJcbiAgICAvLyBpZiAobnVtYmVyLm1hdGNoKHJlKSAhPSBudWxsKVxyXG4gICAgLy8gICAgIHJldHVybiBcIkpDQlwiO1xyXG5cclxuICAgIC8vIC8vIFZpc2EgRWxlY3Ryb25cclxuICAgIC8vIHJlID0gbmV3IFJlZ0V4cChcIl4oNDAyNnw0MTc1MDB8NDUwOHw0ODQ0fDQ5MSgzfDcpKVwiKTtcclxuICAgIC8vIGlmIChudW1iZXIubWF0Y2gocmUpICE9IG51bGwpXHJcbiAgICAvLyAgICAgcmV0dXJuIFwiVmlzYSBFbGVjdHJvblwiO1xyXG5cclxuICAgIHJldHVybiBcIm51bGxcIjtcclxufSIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVZhbGlkYXRpb24gfSBmcm9tICcuL3VzZVZhbGlkYXRpb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUlucHV0ID0gKGluaXRpYWxWYWx1ZTogc3RyaW5nLCB2YWxpZGF0aW9uczogT2JqZWN0KSA9PiB7XHJcblxyXG5cdGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPihpbml0aWFsVmFsdWUpO1xyXG5cdGNvbnN0IFtpc0RpcnR5LCBzZXRJc0RpcnR5XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHRjb25zdCBbaXNOZXh0LCBzZXRJc05leHRdID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcblx0Y29uc3QgdmFsaWQgPSB1c2VWYWxpZGF0aW9uKHZhbHVlLCB2YWxpZGF0aW9ucyk7XHJcblxyXG5cclxuXHRjb25zdCBvbkNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFNlbGVjdEVsZW1lbnQ+KTogdm9pZCA9PiB7XHJcblx0XHRzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBvbkJsdXIgPSAoZTogUmVhY3QuRm9jdXNFdmVudDxIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFNlbGVjdEVsZW1lbnQ+KTogdm9pZCA9PiB7XHJcblx0XHRzZXRJc0RpcnR5KHRydWUpO1xyXG5cdH1cclxuXHJcblx0Y29uc3Qgb25DbGljayA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KTogdm9pZCA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRzZXRJc05leHQodHJ1ZSk7XHJcblxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHZhbHVlLFxyXG5cdFx0aXNOZXh0LFxyXG5cdFx0b25DbGljayxcclxuXHRcdG9uQ2hhbmdlLFxyXG5cdFx0b25CbHVyLFxyXG5cdFx0aXNEaXJ0eSxcclxuXHRcdC4uLnZhbGlkXHJcblx0fVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVZhbGlkYXRpb24gPSAodmFsdWU6IHN0cmluZywgdmFsaWRhdGlvbnM6IE9iamVjdCkgPT4ge1xyXG5cclxuXHRjb25zdCBbaXNFbXB0eSwgc2V0SXNFbXB0eV0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuXHRjb25zdCBbaXNFbWFpbEVycm9yLCBzZXRJc0VtYWlsRXJyb3JdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cdGNvbnN0IFtpc01pbkxlbmd0aEVycm9yLCBzZXRJc01pbkxlbmd0aEVycm9yXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHRjb25zdCBbaW5wdXRWYWxpZCwgc2V0SW5wdXRWYWxpZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRmb3IgKGNvbnN0IHZhbGlkYXRpb24gaW4gdmFsaWRhdGlvbnMpIHtcclxuXHRcdFx0c3dpdGNoICh2YWxpZGF0aW9uKSB7XHJcblx0XHRcdFx0Y2FzZSAnbWluTGVuZ3RoJzpcclxuXHRcdFx0XHRcdHZhbHVlLmxlbmd0aCA8IHZhbGlkYXRpb25zW3ZhbGlkYXRpb25dID8gc2V0SXNNaW5MZW5ndGhFcnJvcih0cnVlKSA6IHNldElzTWluTGVuZ3RoRXJyb3IoZmFsc2UpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnaXNFbXB0eSc6XHJcblx0XHRcdFx0XHR2YWx1ZSA/IHNldElzRW1wdHkoZmFsc2UpIDogc2V0SXNFbXB0eSh0cnVlKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ2lzUGhvbmUnOlxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnaXNFbWFpbCc6XHJcblx0XHRcdFx0XHRjb25zdCByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuICAgIFx0XHRcdFx0KHJlLnRlc3QoU3RyaW5nKHZhbHVlKS50b0xvd2VyQ2FzZSgpKSkgPyBzZXRJc0VtYWlsRXJyb3IoZmFsc2UpIDogc2V0SXNFbWFpbEVycm9yKHRydWUpXHJcblx0XHRcdFx0XHRicmVha1xyXG5cdFx0XHR9XHRcclxuXHRcdH1cclxuXHR9LCBbdmFsdWVdKVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKGlzTWluTGVuZ3RoRXJyb3IgfHwgaXNFbXB0eSkge1xyXG5cdFx0XHRzZXRJbnB1dFZhbGlkKGZhbHNlKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRzZXRJbnB1dFZhbGlkKHRydWUpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fSwgW2lzRW1wdHksIGlzTWluTGVuZ3RoRXJyb3JdKVxyXG5cclxuXHRcclxuXHRcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGlzRW1wdHksXHJcblx0XHRpc01pbkxlbmd0aEVycm9yLFxyXG5cdFx0aW5wdXRWYWxpZCxcclxuXHRcdGlzRW1haWxFcnJvclxyXG5cdH1cclxufSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gSW1hZ2UxO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfaGVhZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvaGVhZFwiKSk7XG52YXIgX3RvQmFzZTY0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvdG8tYmFzZS02NFwiKTtcbnZhciBfaW1hZ2VDb25maWcgPSByZXF1aXJlKFwiLi4vc2VydmVyL2ltYWdlLWNvbmZpZ1wiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgICBmb3IodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbihzeW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuICAgICAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0ge1xuICAgIH07XG4gICAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgIHZhciBrZXksIGk7XG4gICAgZm9yKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5jb25zdCBsb2FkZWRJbWFnZVVSTHMgPSBuZXcgU2V0KCk7XG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBnbG9iYWwuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZTtcbn1cbmNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTID0gW1xuICAgICdsYXp5JyxcbiAgICAnZWFnZXInLFxuICAgIHVuZGVmaW5lZFxuXTtcbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwKFtcbiAgICBbXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgZGVmYXVsdExvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnaW1naXgnLFxuICAgICAgICBpbWdpeExvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnY2xvdWRpbmFyeScsXG4gICAgICAgIGNsb3VkaW5hcnlMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2FrYW1haScsXG4gICAgICAgIGFrYW1haUxvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnY3VzdG9tJyxcbiAgICAgICAgY3VzdG9tTG9hZGVyXG4gICAgXSwgXG5dKTtcbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICAgJ2ZpbGwnLFxuICAgICdmaXhlZCcsXG4gICAgJ2ludHJpbnNpYycsXG4gICAgJ3Jlc3BvbnNpdmUnLFxuICAgIHVuZGVmaW5lZCwgXG5dO1xuZnVuY3Rpb24gaXNTdGF0aWNSZXF1aXJlKHNyYykge1xuICAgIHJldHVybiBzcmMuZGVmYXVsdCAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTdGF0aWNJbWFnZURhdGEoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5zcmMgIT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzU3RhdGljSW1wb3J0KHNyYykge1xuICAgIHJldHVybiB0eXBlb2Ygc3JjID09PSAnb2JqZWN0JyAmJiAoaXNTdGF0aWNSZXF1aXJlKHNyYykgfHwgaXNTdGF0aWNJbWFnZURhdGEoc3JjKSk7XG59XG5jb25zdCB7IGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyAsIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMgLCBsb2FkZXI6IGNvbmZpZ0xvYWRlciAsIHBhdGg6IGNvbmZpZ1BhdGggLCBkb21haW5zOiBjb25maWdEb21haW5zICwgIH0gPSBwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyB8fCBfaW1hZ2VDb25maWcuaW1hZ2VDb25maWdEZWZhdWx0O1xuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFtcbiAgICAuLi5jb25maWdEZXZpY2VTaXplcyxcbiAgICAuLi5jb25maWdJbWFnZVNpemVzXG5dO1xuY29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSwgYik9PmEgLSBiXG4pO1xuYWxsU2l6ZXMuc29ydCgoYSwgYik9PmEgLSBiXG4pO1xuZnVuY3Rpb24gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKSB7XG4gICAgaWYgKHNpemVzICYmIChsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykpIHtcbiAgICAgICAgLy8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbiAgICAgICAgY29uc3Qgdmlld3BvcnRXaWR0aFJlID0gLyhefFxccykoMT9cXGQ/XFxkKXZ3L2c7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRTaXplcyA9IFtdO1xuICAgICAgICBmb3IobGV0IG1hdGNoOyBtYXRjaCA9IHZpZXdwb3J0V2lkdGhSZS5leGVjKHNpemVzKTsgbWF0Y2gpe1xuICAgICAgICAgICAgcGVyY2VudFNpemVzLnB1c2gocGFyc2VJbnQobWF0Y2hbMl0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGVyY2VudFNpemVzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3Qgc21hbGxlc3RSYXRpbyA9IE1hdGgubWluKC4uLnBlcmNlbnRTaXplcykgKiAwLjAxO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3aWR0aHM6IGFsbFNpemVzLmZpbHRlcigocyk9PnMgPj0gY29uZmlnRGV2aWNlU2l6ZXNbMF0gKiBzbWFsbGVzdFJhdGlvXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoczogYWxsU2l6ZXMsXG4gICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHwgbGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgd2lkdGhzID0gW1xuICAgICAgICAuLi5uZXcgU2V0KC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAgIC8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuICAgICAgICAvLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbiAgICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgICAgLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbiAgICAgICAgLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuICAgICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgICAgLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuICAgICAgICBbXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIHdpZHRoICogMiAvKiwgd2lkdGggKiAzKi8gXG4gICAgICAgIF0ubWFwKCh3KT0+YWxsU2l6ZXMuZmluZCgocCk9PnAgPj0gd1xuICAgICAgICAgICAgKSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgICApKSwgXG4gICAgXTtcbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aHMsXG4gICAgICAgIGtpbmQ6ICd4J1xuICAgIH07XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHsgc3JjICwgdW5vcHRpbWl6ZWQgLCBsYXlvdXQgLCB3aWR0aCAsIHF1YWxpdHkgLCBzaXplcyAsIGxvYWRlciAgfSkge1xuICAgIGlmICh1bm9wdGltaXplZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzaXplczogdW5kZWZpbmVkXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHsgd2lkdGhzICwga2luZCAgfSA9IGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcyk7XG4gICAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgICAgICBzcmNTZXQ6IHdpZHRocy5tYXAoKHcsIGkpPT5gJHtsb2FkZXIoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3XG4gICAgICAgICAgICB9KX0gJHtraW5kID09PSAndycgPyB3IDogaSArIDF9JHtraW5kfWBcbiAgICAgICAgKS5qb2luKCcsICcpLFxuICAgICAgICAvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuICAgICAgICAvLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4gICAgICAgIC8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbiAgICAgICAgLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbiAgICAgICAgLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4gICAgICAgIC8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94LlxuICAgICAgICBzcmM6IGxvYWRlcih7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoc1tsYXN0XVxuICAgICAgICB9KVxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRJbnQoeCkge1xuICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wcykge1xuICAgIGNvbnN0IGxvYWQgPSBsb2FkZXJzLmdldChjb25maWdMb2FkZXIpO1xuICAgIGlmIChsb2FkKSB7XG4gICAgICAgIHJldHVybiBsb2FkKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgcm9vdDogY29uZmlnUGF0aFxuICAgICAgICB9LCBsb2FkZXJQcm9wcykpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke19pbWFnZUNvbmZpZy5WQUxJRF9MT0FERVJTLmpvaW4oJywgJyl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YCk7XG59XG4vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gaGFuZGxlTG9hZGluZyhpbWcsIHNyYywgbGF5b3V0LCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpIHtcbiAgICBpZiAoIWltZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUxvYWQgPSAoKT0+e1xuICAgICAgICBpZiAoIWltZy5zcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgICAgICAgICAgY29uc3QgcCA9ICdkZWNvZGUnIGluIGltZyA/IGltZy5kZWNvZGUoKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgcC5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgfSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5maWx0ZXIgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbG9hZGVkSW1hZ2VVUkxzLmFkZChzcmMpO1xuICAgICAgICAgICAgICAgIGlmIChvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IG5hdHVyYWxXaWR0aCAsIG5hdHVyYWxIZWlnaHQgIH0gPSBpbWc7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBhc3MgYmFjayByZWFkLW9ubHkgcHJpbWl0aXZlIHZhbHVlcyBidXQgbm90IHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyB1bmRlcmx5aW5nIERPTSBlbGVtZW50IGJlY2F1c2UgaXQgY291bGQgYmUgbWlzdXNlZC5cbiAgICAgICAgICAgICAgICAgICAgb25Mb2FkaW5nQ29tcGxldGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbEhlaWdodFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChyZWYgPSBpbWcucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZ2V0Q29tcHV0ZWRTdHlsZShpbWcucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJyAmJiBwYXJlbnQuZGlzcGxheSA9PT0gJ2ZsZXgnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IGFzIGEgY2hpbGQgb2YgYSBmbGV4IGNvbnRhaW5lci4gQ29uc2lkZXIgd3JhcHBpbmcgdGhlIGltYWdlIHdpdGggYSBkaXYgdG8gY29uZmlndXJlIHRoZSB3aWR0aC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZmlsbCcgJiYgcGFyZW50LnBvc2l0aW9uICE9PSAncmVsYXRpdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IHdpdGggYSBwYXJlbnQgdXNpbmcgcG9zaXRpb246XCIke3BhcmVudC5wb3NpdGlvbn1cIi4gQ29uc2lkZXIgY2hhbmdpbmcgdGhlIHBhcmVudCBzdHlsZSB0byBwb3NpdGlvbjpcInJlbGF0aXZlXCIgd2l0aCBhIHdpZHRoIGFuZCBoZWlnaHQuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKGltZy5jb21wbGV0ZSkge1xuICAgICAgICAvLyBJZiB0aGUgcmVhbCBpbWFnZSBmYWlscyB0byBsb2FkLCB0aGlzIHdpbGwgc3RpbGwgcmVtb3ZlIHRoZSBwbGFjZWhvbGRlci5cbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3Igbm93LCBhbmQgd2lsbCBiZSByZXZpc2l0ZWQgd2hlbiBlcnJvclxuICAgICAgICAvLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuICAgICAgICBoYW5kbGVMb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW1nLm9ubG9hZCA9IGhhbmRsZUxvYWQ7XG4gICAgfVxufVxuZnVuY3Rpb24gSW1hZ2UxKF9wYXJhbSkge1xuICAgIHZhciB7IHNyYyAsIHNpemVzICwgdW5vcHRpbWl6ZWQgPWZhbHNlICwgcHJpb3JpdHkgPWZhbHNlICwgbG9hZGluZyAsIGxhenlCb3VuZGFyeSA9JzIwMHB4JyAsIGNsYXNzTmFtZSAsIHF1YWxpdHkgLCB3aWR0aCAsIGhlaWdodCAsIG9iamVjdEZpdCAsIG9iamVjdFBvc2l0aW9uICwgb25Mb2FkaW5nQ29tcGxldGUgLCBsb2FkZXIgPWRlZmF1bHRJbWFnZUxvYWRlciAsIHBsYWNlaG9sZGVyID0nZW1wdHknICwgYmx1ckRhdGFVUkwgIH0gPSBfcGFyYW0sIGFsbCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcGFyYW0sIFtcInNyY1wiLCBcInNpemVzXCIsIFwidW5vcHRpbWl6ZWRcIiwgXCJwcmlvcml0eVwiLCBcImxvYWRpbmdcIiwgXCJsYXp5Qm91bmRhcnlcIiwgXCJjbGFzc05hbWVcIiwgXCJxdWFsaXR5XCIsIFwid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJvYmplY3RGaXRcIiwgXCJvYmplY3RQb3NpdGlvblwiLCBcIm9uTG9hZGluZ0NvbXBsZXRlXCIsIFwibG9hZGVyXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJibHVyRGF0YVVSTFwiXSk7XG4gICAgbGV0IHJlc3QgPSBhbGw7XG4gICAgbGV0IGxheW91dCA9IHNpemVzID8gJ3Jlc3BvbnNpdmUnIDogJ2ludHJpbnNpYyc7XG4gICAgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbiAgICAgICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dDtcbiAgICAgICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgICAgICBkZWxldGUgcmVzdFsnbGF5b3V0J107XG4gICAgfVxuICAgIGxldCBzdGF0aWNTcmMgPSAnJztcbiAgICBpZiAoaXNTdGF0aWNJbXBvcnQoc3JjKSkge1xuICAgICAgICBjb25zdCBzdGF0aWNJbWFnZURhdGEgPSBpc1N0YXRpY1JlcXVpcmUoc3JjKSA/IHNyYy5kZWZhdWx0IDogc3JjO1xuICAgICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5zcmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBzcmMuIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBibHVyRGF0YVVSTCA9IGJsdXJEYXRhVVJMIHx8IHN0YXRpY0ltYWdlRGF0YS5ibHVyRGF0YVVSTDtcbiAgICAgICAgc3RhdGljU3JjID0gc3RhdGljSW1hZ2VEYXRhLnNyYztcbiAgICAgICAgaWYgKCFsYXlvdXQgfHwgbGF5b3V0ICE9PSAnZmlsbCcpIHtcbiAgICAgICAgICAgIGhlaWdodCA9IGhlaWdodCB8fCBzdGF0aWNJbWFnZURhdGEuaGVpZ2h0O1xuICAgICAgICAgICAgd2lkdGggPSB3aWR0aCB8fCBzdGF0aWNJbWFnZURhdGEud2lkdGg7XG4gICAgICAgICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5oZWlnaHQgfHwgIXN0YXRpY0ltYWdlRGF0YS53aWR0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBoZWlnaHQgYW5kIHdpZHRoLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3JjID0gdHlwZW9mIHNyYyA9PT0gJ3N0cmluZycgPyBzcmMgOiBzdGF0aWNTcmM7XG4gICAgY29uc3Qgd2lkdGhJbnQgPSBnZXRJbnQod2lkdGgpO1xuICAgIGNvbnN0IGhlaWdodEludCA9IGdldEludChoZWlnaHQpO1xuICAgIGNvbnN0IHF1YWxpdHlJbnQgPSBnZXRJbnQocXVhbGl0eSk7XG4gICAgbGV0IGlzTGF6eSA9ICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJyk7XG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCdkYXRhOicpIHx8IHNyYy5zdGFydHNXaXRoKCdibG9iOicpKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgICAgIHVub3B0aW1pemVkID0gdHJ1ZTtcbiAgICAgICAgaXNMYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBsb2FkZWRJbWFnZVVSTHMuaGFzKHNyYykpIHtcbiAgICAgICAgaXNMYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgICAgIH0pfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKHdpZHRoSW50KSB8fCB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTihoZWlnaHRJbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJ3aWR0aFwiIG9yIFwiaGVpZ2h0XCIgcHJvcGVydHkuIFRoZXNlIHNob3VsZCBiZSBudW1lcmljIHZhbHVlcy5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGF5b3V0ID09PSAnZmlsbCcgJiYgKHdpZHRoIHx8IGhlaWdodCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBhbmQgXCJsYXlvdXQ9J2ZpbGwnXCIgaGFzIHVudXNlZCBwcm9wZXJ0aWVzIGFzc2lnbmVkLiBQbGVhc2UgcmVtb3ZlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIi5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgICAgICAgaWYgKGxheW91dCAhPT0gJ2ZpbGwnICYmICh3aWR0aEludCB8fCAwKSAqIChoZWlnaHRJbnQgfHwgMCkgPCAxNjAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHNtYWxsZXIgdGhhbiA0MHg0MC4gQ29uc2lkZXIgcmVtb3ZpbmcgdGhlIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYmx1ckRhdGFVUkwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBWQUxJRF9CTFVSX0VYVCA9IFtcbiAgICAgICAgICAgICAgICAgICAgJ2pwZWcnLFxuICAgICAgICAgICAgICAgICAgICAncG5nJyxcbiAgICAgICAgICAgICAgICAgICAgJ3dlYnAnXG4gICAgICAgICAgICAgICAgXSAvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IGJ1dCBpcyBtaXNzaW5nIHRoZSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHkuXG4gICAgICAgICAgUG9zc2libGUgc29sdXRpb25zOlxuICAgICAgICAgICAgLSBBZGQgYSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHksIHRoZSBjb250ZW50cyBzaG91bGQgYmUgYSBzbWFsbCBEYXRhIFVSTCB0byByZXByZXNlbnQgdGhlIGltYWdlXG4gICAgICAgICAgICAtIENoYW5nZSB0aGUgXCJzcmNcIiBwcm9wZXJ0eSB0byBhIHN0YXRpYyBpbXBvcnQgd2l0aCBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmaWxlIHR5cGVzOiAke1ZBTElEX0JMVVJfRVhULmpvaW4oJywnKX1cbiAgICAgICAgICAgIC0gUmVtb3ZlIHRoZSBcInBsYWNlaG9sZGVyXCIgcHJvcGVydHksIGVmZmVjdGl2ZWx5IG5vIGJsdXIgZWZmZWN0XG4gICAgICAgICAgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wbGFjZWhvbGRlci1ibHVyLWRhdGEtdXJsYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdyZWYnIGluIHJlc3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyB1c2luZyB1bnN1cHBvcnRlZCBcInJlZlwiIHByb3BlcnR5LiBDb25zaWRlciB1c2luZyB0aGUgXCJvbkxvYWRpbmdDb21wbGV0ZVwiIHByb3BlcnR5IGluc3RlYWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdzdHlsZScgaW4gcmVzdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwic3R5bGVcIiBwcm9wZXJ0eS4gUGxlYXNlIHVzZSB0aGUgXCJjbGFzc05hbWVcIiBwcm9wZXJ0eSBpbnN0ZWFkLmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSArIDEwMDtcbiAgICAgICAgaWYgKCF1bm9wdGltaXplZCAmJiAhbG9hZGVyKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHdpZHRoOiByYW5kLFxuICAgICAgICAgICAgcXVhbGl0eTogNzVcbiAgICAgICAgfSkuaW5jbHVkZXMocmFuZC50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBhIFwibG9hZGVyXCIgcHJvcGVydHkgdGhhdCBkb2VzIG5vdCBpbXBsZW1lbnQgd2lkdGguIFBsZWFzZSBpbXBsZW1lbnQgaXQgb3IgdXNlIHRoZSBcInVub3B0aW1pemVkXCIgcHJvcGVydHkgaW5zdGVhZC5gICsgYFxcblJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS1taXNzaW5nLWxvYWRlci13aWR0aGApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46IGxhenlCb3VuZGFyeSxcbiAgICAgICAgZGlzYWJsZWQ6ICFpc0xhenlcbiAgICB9KTtcbiAgICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWQ7XG4gICAgbGV0IHdyYXBwZXJTdHlsZTtcbiAgICBsZXQgc2l6ZXJTdHlsZTtcbiAgICBsZXQgc2l6ZXJTdmc7XG4gICAgbGV0IGltZ1N0eWxlID0ge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG9iamVjdEZpdCxcbiAgICAgICAgb2JqZWN0UG9zaXRpb25cbiAgICB9O1xuICAgIGNvbnN0IGJsdXJTdHlsZSA9IHBsYWNlaG9sZGVyID09PSAnYmx1cicgPyB7XG4gICAgICAgIGZpbHRlcjogJ2JsdXIoMjBweCknLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogb2JqZWN0Rml0IHx8ICdjb3ZlcicsXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYCxcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBvYmplY3RQb3NpdGlvbiB8fCAnMCUgMCUnXG4gICAgfSA6IHtcbiAgICB9O1xuICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJykge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgICAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50O1xuICAgICAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWA7XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJSdcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gO1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodEludFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGltZ0F0dHJpYnV0ZXMgPSB7XG4gICAgICAgIHNyYzogJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gICAgICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgICAgICBzaXplczogdW5kZWZpbmVkXG4gICAgfTtcbiAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICAgIGltZ0F0dHJpYnV0ZXMgPSBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICAgICAgbGF5b3V0LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgICAgIHNpemVzLFxuICAgICAgICAgICAgbG9hZGVyXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgc3JjU3RyaW5nID0gc3JjO1xuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBzdHlsZTogd3JhcHBlclN0eWxlXG4gICAgfSwgc2l6ZXJTdHlsZSA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiBzaXplclN0eWxlXG4gICAgfSwgc2l6ZXJTdmcgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgIHBhZGRpbmc6IDBcbiAgICAgICAgfSxcbiAgICAgICAgYWx0OiBcIlwiLFxuICAgICAgICBcImFyaWEtaGlkZGVuXCI6IHRydWUsXG4gICAgICAgIHNyYzogYGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHsoMCwgX3RvQmFzZTY0KS50b0Jhc2U2NChzaXplclN2Zyl9YFxuICAgIH0pIDogbnVsbCkgOiBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcmVzdCwgaW1nQXR0cmlidXRlcywge1xuICAgICAgICBkZWNvZGluZzogXCJhc3luY1wiLFxuICAgICAgICBcImRhdGEtbmltZ1wiOiBsYXlvdXQsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICByZWY6IChpbWcpPT57XG4gICAgICAgICAgICBzZXRSZWYoaW1nKTtcbiAgICAgICAgICAgIGhhbmRsZUxvYWRpbmcoaW1nLCBzcmNTdHJpbmcsIGxheW91dCwgcGxhY2Vob2xkZXIsIG9uTG9hZGluZ0NvbXBsZXRlKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoe1xuICAgICAgICB9LCBpbWdTdHlsZSwgYmx1clN0eWxlKVxuICAgIH0pKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIiwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIH0sIHJlc3QsIGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICBzcmMsXG4gICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICBsYXlvdXQsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgc2l6ZXMsXG4gICAgICAgIGxvYWRlclxuICAgIH0pLCB7XG4gICAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICAgIFwiZGF0YS1uaW1nXCI6IGxheW91dCxcbiAgICAgICAgc3R5bGU6IGltZ1N0eWxlLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgbG9hZGluZzogbG9hZGluZyB8fCAnbGF6eSdcbiAgICB9KSkpLCBwcmlvcml0eSA/IC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbiAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgLy9cbiAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbiAgICAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgIGtleTogJ19fbmltZy0nICsgaW1nQXR0cmlidXRlcy5zcmMgKyBpbWdBdHRyaWJ1dGVzLnNyY1NldCArIGltZ0F0dHJpYnV0ZXMuc2l6ZXMsXG4gICAgICAgIHJlbDogXCJwcmVsb2FkXCIsXG4gICAgICAgIGFzOiBcImltYWdlXCIsXG4gICAgICAgIGhyZWY6IGltZ0F0dHJpYnV0ZXMuc3JjU2V0ID8gdW5kZWZpbmVkIDogaW1nQXR0cmlidXRlcy5zcmMsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlLlxuICAgICAgICBpbWFnZXNyY3NldDogaW1nQXR0cmlidXRlcy5zcmNTZXQsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgIGltYWdlc2l6ZXM6IGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICB9KSkgOiBudWxsKSk7XG59XG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjKSB7XG4gICAgcmV0dXJuIHNyY1swXSA9PT0gJy8nID8gc3JjLnNsaWNlKDEpIDogc3JjO1xufVxuZnVuY3Rpb24gaW1naXhMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgLy8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9hdXRvPWZvcm1hdCZmaXQ9bWF4Jnc9MzAwXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9YCk7XG4gICAgY29uc3QgcGFyYW1zID0gdXJsLnNlYXJjaFBhcmFtcztcbiAgICBwYXJhbXMuc2V0KCdhdXRvJywgcGFyYW1zLmdldCgnYXV0bycpIHx8ICdmb3JtYXQnKTtcbiAgICBwYXJhbXMuc2V0KCdmaXQnLCBwYXJhbXMuZ2V0KCdmaXQnKSB8fCAnbWF4Jyk7XG4gICAgcGFyYW1zLnNldCgndycsIHBhcmFtcy5nZXQoJ3cnKSB8fCB3aWR0aC50b1N0cmluZygpKTtcbiAgICBpZiAocXVhbGl0eSkge1xuICAgICAgICBwYXJhbXMuc2V0KCdxJywgcXVhbGl0eS50b1N0cmluZygpKTtcbiAgICB9XG4gICAgcmV0dXJuIHVybC5ocmVmO1xufVxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICB9KSB7XG4gICAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWA7XG59XG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gICAgY29uc3QgcGFyYW1zID0gW1xuICAgICAgICAnZl9hdXRvJyxcbiAgICAgICAgJ2NfbGltaXQnLFxuICAgICAgICAnd18nICsgd2lkdGgsXG4gICAgICAgICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXG4gICAgXTtcbiAgICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJztcbiAgICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWA7XG59XG5mdW5jdGlvbiBjdXN0b21Mb2FkZXIoeyBzcmMgIH0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgbWlzc2luZyBcImxvYWRlclwiIHByb3AuYCArIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXJgKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdO1xuICAgICAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICAgICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJyk7XG4gICAgICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKTtcbiAgICAgICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbignLCAnKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBxdWFsaXR5XG4gICAgICAgICAgICB9KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgICAgICAgIGxldCBwYXJzZWRTcmM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHBhcnNlZFNyYyA9IG5ldyBVUkwoc3JjKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmICFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmAgKyBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IGV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gdm9pZCAwO1xuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihjYikge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCAxKTtcbn07XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrO1xuY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihpZCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufTtcbmV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gY2FuY2VsSWRsZUNhbGxiYWNrO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVzZUludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbjtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oeyByb290TWFyZ2luICwgZGlzYWJsZWQgIH0pIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIGNvbnN0IHVub2JzZXJ2ZSA9ICgwLCBfcmVhY3QpLnVzZVJlZigpO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9ICgwLCBfcmVhY3QpLnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBzZXRSZWYgPSAoMCwgX3JlYWN0KS51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVybjtcbiAgICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShlbCwgKGlzVmlzaWJsZSk9PmlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSlcbiAgICAgICAgICAgICwge1xuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9ICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpPT4oMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLmNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgc2V0UmVmLFxuICAgICAgICB2aXNpYmxlXG4gICAgXTtcbn1cbmZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkICwgb2JzZXJ2ZXIgLCBlbGVtZW50cyAgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO1xuICAgIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgICAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgICAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xuICAgIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnO1xuICAgIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKT0+e1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KT0+e1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMDtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICBvYnNlcnZlcnMuc2V0KGlkLCBpbnN0YW5jZSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG9ic2VydmVyLFxuICAgICAgICBlbGVtZW50c1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9pbmRleC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlclwiO1xyXG5pbXBvcnQgTWFpbiBmcm9tIFwiLi4vY29tcG9uZW50cy9NYWluXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyL0hlYWRlclwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBJbmRleDogUmVhY3QuRkMgPSAoKSA9PiB7XHJcblxyXG5cdFxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuXHRcdFx0PEhlYWRlcj48L0hlYWRlcj5cclxuXHRcdFx0PE1haW4+PC9NYWluPlxyXG5cdFx0XHQ8Rm9vdGVyPjwvRm9vdGVyPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9vdGVyXCI6IFwiRm9vdGVyX2Zvb3Rlcl9fMUtXMTdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyYXBwZXJcIjogXCJIZWFkZXJfd3JhcHBlcl9fSlJnSkFcIixcblx0XCJfY29udGFpbmVyXCI6IFwiSGVhZGVyX19jb250YWluZXJfXzNFaVUtXCIsXG5cdFwiaGVhZGVyXCI6IFwiSGVhZGVyX2hlYWRlcl9fMi1YV1hcIixcblx0XCJoZWFkZXJfX2NvbnRhaW5lclwiOiBcIkhlYWRlcl9oZWFkZXJfX2NvbnRhaW5lcl9fNC1YSklcIixcblx0XCJoZWFkZXJfX2xvZ29cIjogXCJIZWFkZXJfaGVhZGVyX19sb2dvX19FMXlsMVwiLFxuXHRcImhlYWRlcl9fbG9nb19pY29uXCI6IFwiSGVhZGVyX2hlYWRlcl9fbG9nb19pY29uX18yMFV0SlwiLFxuXHRcImhlYWRlcl9fbG9nb19pY29uX19pbWdcIjogXCJIZWFkZXJfaGVhZGVyX19sb2dvX2ljb25fX2ltZ19fSExPSEJcIixcblx0XCJoZWFkZXJfX2xvZ29fdGV4dFwiOiBcIkhlYWRlcl9oZWFkZXJfX2xvZ29fdGV4dF9fM1N1M2FcIixcblx0XCJoZWFkZXJfX2J1c2tldFwiOiBcIkhlYWRlcl9oZWFkZXJfX2J1c2tldF9fMm1uOFFcIixcblx0XCJoZWFkZXJfX2J1c2tldF90ZXh0XCI6IFwiSGVhZGVyX2hlYWRlcl9fYnVza2V0X3RleHRfXzF5MnFIXCIsXG5cdFwiaGVhZGVyX19idXNrZXRfaWNvblwiOiBcIkhlYWRlcl9oZWFkZXJfX2J1c2tldF9pY29uX19MaXhCWVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid3JhcHBlclwiOiBcIk1haW5fd3JhcHBlcl9fMm5KbG1cIixcblx0XCJfY29udGFpbmVyXCI6IFwiTWFpbl9fY29udGFpbmVyX18zb1E2M1wiLFxuXHRcInBhZ2VcIjogXCJNYWluX3BhZ2VfXzFhQVZVXCIsXG5cdFwicGFnZV9fbWFpblwiOiBcIk1haW5fcGFnZV9fbWFpbl9fQXJ4XzhcIixcblx0XCJtYWluXCI6IFwiTWFpbl9tYWluX182RFBpRFwiLFxuXHRcIm1haW5fX2JvZHlcIjogXCJNYWluX21haW5fX2JvZHlfXzJXMDZpXCIsXG5cdFwibWFpbl9fYm9keV9fY29udGFpbmVyXCI6IFwiTWFpbl9tYWluX19ib2R5X19jb250YWluZXJfX2ZCV2JKXCIsXG5cdFwibWFpbl9fZm9ybVwiOiBcIk1haW5fbWFpbl9fZm9ybV9fMXlPTWVcIixcblx0XCJtYWluX19mb3JtX190YWJzXCI6IFwiTWFpbl9tYWluX19mb3JtX190YWJzX18zczZGZFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid3JhcHBlclwiOiBcIlByb2R1Y3RzX3dyYXBwZXJfXzFuSTNDXCIsXG5cdFwiX2NvbnRhaW5lclwiOiBcIlByb2R1Y3RzX19jb250YWluZXJfXzFISS1hXCIsXG5cdFwibWFpbl9fcHJvZHVjdHNcIjogXCJQcm9kdWN0c19tYWluX19wcm9kdWN0c19fdEpDWTJcIixcblx0XCJwcm9kdWN0c1wiOiBcIlByb2R1Y3RzX3Byb2R1Y3RzX18ySHZHU1wiLFxuXHRcInByb2R1Y3RzX190ZXh0XCI6IFwiUHJvZHVjdHNfcHJvZHVjdHNfX3RleHRfX29ERVE1XCIsXG5cdFwicHJvZHVjdHNfX3RleHRfdGl0bGVcIjogXCJQcm9kdWN0c19wcm9kdWN0c19fdGV4dF90aXRsZV9fMmUxWVRcIixcblx0XCJwcm9kdWN0c19fdGV4dF9lZGl0XCI6IFwiUHJvZHVjdHNfcHJvZHVjdHNfX3RleHRfZWRpdF9fMW5WNmpcIixcblx0XCJwcm9kdWN0c19fcHJvZHVjdFwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RzX19wcm9kdWN0X18yTkZWWlwiLFxuXHRcInByb2R1Y3RzX19jb3N0XCI6IFwiUHJvZHVjdHNfcHJvZHVjdHNfX2Nvc3RfXzEwSlZzXCIsXG5cdFwicHJvZHVjdHNfX2luZm9ybWF0aW9uXCI6IFwiUHJvZHVjdHNfcHJvZHVjdHNfX2luZm9ybWF0aW9uX18zeFpFQlwiLFxuXHRcInByb2R1Y3RcIjogXCJQcm9kdWN0c19wcm9kdWN0X19FSFV5TVwiLFxuXHRcInByb2R1Y3RfX2ltYWdlXCI6IFwiUHJvZHVjdHNfcHJvZHVjdF9faW1hZ2VfXzFDaFpOXCIsXG5cdFwicHJvZHVjdF9fY29udGVudFwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RfX2NvbnRlbnRfXzNweFJVXCIsXG5cdFwicHJvZHVjdF9fY29udGVudF9uYW1lXCI6IFwiUHJvZHVjdHNfcHJvZHVjdF9fY29udGVudF9uYW1lX18zV3ZjZVwiLFxuXHRcInByb2R1Y3RfX2NvbnRlbnRfZGVzY3JpcHRpb25cIjogXCJQcm9kdWN0c19wcm9kdWN0X19jb250ZW50X2Rlc2NyaXB0aW9uX18yQ2pyUlwiLFxuXHRcInByb2R1Y3RfX2NvbnRlbnRfcXVhbnRpdHlcIjogXCJQcm9kdWN0c19wcm9kdWN0X19jb250ZW50X3F1YW50aXR5X19xQlhJUVwiLFxuXHRcInByb2R1Y3RfX3ByaWNlXCI6IFwiUHJvZHVjdHNfcHJvZHVjdF9fcHJpY2VfXzJONmMwXCIsXG5cdFwiY29zdF9fc3VidG90YWxcIjogXCJQcm9kdWN0c19jb3N0X19zdWJ0b3RhbF9fRlZkR09cIixcblx0XCJjb3N0X19zaGlwcGluZ1wiOiBcIlByb2R1Y3RzX2Nvc3RfX3NoaXBwaW5nX191ZGJVZlwiLFxuXHRcImNvc3RfX3RheGVzXCI6IFwiUHJvZHVjdHNfY29zdF9fdGF4ZXNfX184REszXCIsXG5cdFwiY29zdF9fdG90YWxcIjogXCJQcm9kdWN0c19jb3N0X190b3RhbF9fMUtOU0hcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyYXBwZXJcIjogXCJzdHlsZXNfd3JhcHBlcl9fMUNwUk9cIixcblx0XCJfY29udGFpbmVyXCI6IFwic3R5bGVzX19jb250YWluZXJfXzFoeEUyXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlVBQUFBUUNBWUFBQUQ1MmpRbEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFIMVNVUkJWSGdCclpReGI5TkFITVhmM2RtTnFlM1VsV2dwRW9QNUJIaGlKUklMQ0FuQ3pJRDRBb1FkcExBd0lqR3pSQkZDYkVsSmtaQktJT25BZ3BEcVNueUFNaFJGYWxFTWJjekY5dm00bEZDQ0U1RFM5RTIrOTd0NzkvZGZkMGVhWnVPZEpDQkVTcGxTY3A3RnJIQ1pYL3VNazFMVFhDczF6VmUzTWFPMDBZRWt5UllCSzYzYkRjTFVtRUtBSVQzaVFqa1lPaUlUeElhZUhvdjJYNkdhQmwvRTB0TUpWb0VZK3VIa1A4dnBjT21BMEJIQ2ZoY2xaVEhSYVJkWnRmTzFUUnhUVGJ0UmVXM1VYWm9GT1JuNTc4M25IbzRoS2xQM0tyKzVQUmJLQ1B3Y1N5OWhTbTA2RmNkaUI3L0N4N2NUR3dSaTZrb3RjRytCOWRvVFF5OEd0M3hDNEdKS0xlajdGL0xwdC9iZ1c1czRRNlYrY3A1NkprUmdJSUJqOENQVTRTdktNY0M1QVNoL0JSd09Pc2lSL1VJZnREb3h0R1hWbnNTaTM5VlpjamVsRVNpWkk1R0lZZEsrNUtsR0JGVkhLcDVEeUF6VktRTzdwS2YrTjVITDhtdXdHRHdNeGdwc09YVjMzV3JVTWFPeVBRM1VHK0FPemhwbUVNa2FUYnRlaEdRbGRVV2RVNHk3SmdtRGVkS0h4WHJiOHdoaE1JNkQxTUpPZEJaN3dpbDBrdVcydWtxZXlYcXIxOE1yZC82NzIxdHJyZnpHZm5uam8vT3N1Sld2bExPOHUvVEkrM0w2OFdHclB0Z3ZhcU9NL2lzMDBwS3FlbUh1ZlUvc2NoaWhtdVdMdS9mOUpXM1ArWEhtUWV1Y3NiTXh5bjRDU0VtODRwbWdHUzhBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQm9BQUFBYUNBWUFBQUNwU2t6T0FBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFLaVNVUkJWSGdCdFpWQmFOTlFHTWUvOTVxMENkT1I2V1NiWHFJWG1aZlozWFp5M2MzVDFxTVgyNGtJUTVBT0JObkJ0UldHaUlkMklJN3BJV01PZHBCWjlUSVFYS1l3cGg0c2VKaWlRb0lYaHhQTUhETnAwdmVleVdCakxXMVdiZnM3dnUvLzh1ZTkvL2UrQURTQldlR045b0IvZHhhYXlXTkJUYzBGVjVUeWRRNGF5UE9XRjNHSHdFVUgyd1BsTlFRTlFwVnlzbWtMYW9GQ0pHcWQxOHZyR0JvRkFSVUJuYWxrMGpCV1d1ZFRyMXNXRkQ5TjNSbmxKU1Zlb0RSbTg3L0RmcnE2TXZvb1Rja09FOTV2RjZDM3p4clcvYlIxblloSG9ESWc2VDdyc2c3L3c1ZjJxZjZETk4rT1pESmZwWHNsdWVTa25GUk5YOUoxN24zM3I3VTlWQkZoNCtERGoyTzM0d0dnUTF2Z2pPNWY1d3RpL0ltZ2FuUEMyMWo1bnAyTVZxVjVtUU9tY015V1E0akd6eGlYWGxVek1UdVRza1dDZWN2QjRTNWpUQyt2end1cVhLVGlrc2xDbXlRZ1JFZXM3aDBOZW5sb0lSWEVKQmFremt5UXN5ZkR4ckFCUHBnZDQ1cEYrV3pieHMxSlA5MFVuM2U3VVV4YVRGZzJLVXVqcGNNNWpRY0hPSWRFK3F3THV0OW0wblVqUzRvY0MyNU1qRUlOWkFLZnNpWVJyN2xmaitLQnJlaEpyM053aUtyNTFobkZhOWxLbTZ5T3NRUXdHT1NkN2ZSQkJvK0UxZjVwUHE5aEJEMGM0RWdTVGp6YmUwZHVJOGdZY013OVhUSUFoVnVuamF1cDNacVhDMkpVWmNpT2lPdDM5R29HaThLaXZJMUV4YVFoMlNTaCtKVmk3MTdXZTEzblpxUDNHTEUwQXVjVWh6SGJYZjhsSlNXSFloVW95L3FaZUpBQUdrS01MUmRGSzd6ZnBDWitIcDNJYnJhbk1sQW52cE5odmYxdUFxSGlJSFdZN3h5cmhhcXo3bnRuUmdaQ1ZYRHNTS1gzOHE5VS9COXBraUxaTm5MbkdNczJ3c1NqNHRVUi9NZkw1T254amV1VDBDeldwT25FNTdiN0dqU1lraE41YjRtaFlwSXdXbmY0dmtiQXZGeFFvdHNZMGFHWmZKQm16MEdUK0F2MW1ob2xjaHNLMFFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJNQUFBQWFDQVlBQUFCVlgyY0VBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBSHVTVVJCVkhnQnZaVmRUdkpBRklablNvRmJsbEJYSU44S1BsaUI3RUM5NHkreHJLQzRnNW9BNFU1WWdib0M2Z3JVSFhRSGNnMEJmRTdUR3F4ME9pYkdrMHc2N1p4NTVzeVpkMDYxeXRsd09Hd2REb2VBYnBQV29MM1NsdFZxZFJHRzRWb1p6TW1CeHZ2OS9oN1lJNVBQcHRPcDV0MW42SHl6MmJ4MHUxM1BCTk5acDkvdlgvRUltTnlleitkeDNwSHhRR3ZkWW9HMkVUWVlEQTY3M2U2c1VxbXNlUFVLbmJWdVN3cUtnTmsySThkeEdpYVFHS0FMMnJKby9ETm5LVXlWd0JyNHJVdGhQN0JmaGFrL2dXbTAxVUVPNTdWYWJZbVdBcU96MWhINmU4YXZ4WndvTHlHWHBEN01ack5NYjljbW1JaDZ1OTJHUUJ2STZJcFA4UmVZc2pSQUlRdmZtSHlzY2lhM293eGtEV05iZ1kxZktVeXFpRHB4TTRpMFE4VE40MitsT1dQUzVkR3JDSGJCdDdVY0F2MEhnQkZLR0VsNXNqbUFiUFVGc2hqbGF0cElxZ2tuTEFYaW4wM09ta1FTVXltdVR4VkhaSFVyRVFzMGdhVjUrV2ErN3llWG55Mk5sY0VZdjVWYUo5dU1XSGxGVGZ2bVJQakpFOFcvbVdDdTY3N2kyM0tsMEJIaVJaclFVeGFTNEhkbFlja0JzTytuSWdjVzZ2Q1FkbGZrUStRZHViZWxCMEF4RkloZjlET1J2S2FpWHBUQ0pwTkpsRGc2emlvUEJPU2xzbmdrWFV1dExJMERrbCtlM004NEZhMUgzNk0vSmsxSkNxeGhtZlY2dmY5RTZWSFA0bnE5L25hc3ZROTkyZVhvTnhrZXBRQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbWFpbGpzLWNvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3RvLWJhc2UtNjQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW5wdXQtbWFza1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiRm9vdGVyIiwiZm9vdGVyIiwiUHJvZHVjdHMiLCJUYWJzIiwic2VuZEVtYWlsIiwiTWFpbiIsInByb2R1Y3RzIiwiaWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsInBhZ2UiLCJwYWdlX19tYWluIiwibWFpbiIsIm1haW5fX2NvbnRhaW5lciIsIl9jb250YWluZXIiLCJtYWluX19ib2R5IiwibWFpbl9fYm9keV9fY29udGFpbmVyIiwibWFpbl9fZm9ybSIsImxvZ28iLCJpY29uIiwiSGVhZGVyIiwiaGVhZGVyIiwiaGVhZGVyX19jb250YWluZXIiLCJoZWFkZXJfX2xvZ28iLCJoZWFkZXJfX2xvZ29faWNvbiIsImhlYWRlcl9fbG9nb190ZXh0IiwiaGVhZGVyX19idXNrZXQiLCJoZWFkZXJfX2J1c2tldF90ZXh0IiwiaGVhZGVyX19idXNrZXRfaWNvbiIsInVzZVN0YXRlIiwiSW1hZ2UiLCJzZWxlY3RlZFByb2R1Y3RzIiwic2V0U2VsZWN0ZWRQcm9kdWN0cyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibWFpbl9fcHJvZHVjdHMiLCJwcm9kdWN0c19fdGV4dCIsInByb2R1Y3RzX190ZXh0X3RpdGxlIiwicHJvZHVjdHNfX3RleHRfZWRpdCIsInByb2R1Y3RzX19pdGVtcyIsIm1hcCIsInByb2R1Y3QiLCJwcm9kdWN0c19fcHJvZHVjdCIsInByb2R1Y3RfX2ltYWdlIiwicHJvZHVjdF9fY29udGVudCIsInByb2R1Y3RfX2NvbnRlbnRfbmFtZSIsInByb2R1Y3RfX2NvbnRlbnRfZGVzY3JpcHRpb24iLCJwcm9kdWN0X19jb250ZW50X3F1YW50aXR5IiwicHJvZHVjdF9fcHJpY2UiLCJwcm9kdWN0c19fY29zdCIsImNvc3RfX3N1YnRvdGFsIiwic3VidG90YWxfX3RleHQiLCJzdWJ0b3RhbF9fY291bnQiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJjb3N0X19zaGlwcGluZyIsInNoaXBwaW5nX190ZXh0Iiwic2hpcHBpbmdfX2NvdW50IiwiY29zdF9fdGF4ZXMiLCJ0YXhlc19fdGV4dCIsInRheGVzX19jb3VudCIsImNvc3RfX3RvdGFsIiwidG90YWxfX3RleHQiLCJ0b3RhbF9fY291bnQiLCJwcm9kdWN0c19faW5mb3JtYXRpb24iLCJ1c2VFZmZlY3QiLCJ1c2VHZW9sb2NhdGlvbiIsInVzZUlkZW50aWZpY2F0aW9uQ2FyZCIsInVzZUlucHV0IiwiSW5wdXRNYXNrIiwidG9nZ2xlQ2xhc3MiLCJzZXRUb2dnbGVDbGFzcyIsImNhcmRUeXBlIiwic2V0Q2FyZFR5cGUiLCJmdWxsX25hbWUiLCJpc0VtcHR5IiwibWluTGVuZ3RoIiwic3RyZWV0IiwicGhvbmUiLCJhcHQiLCJjaXR5IiwiY291bnRyeSIsInppcCIsImIiLCJjYXJkIiwiZW1haWwiLCJpc0VtYWlsIiwibXNnIiwiZ2VvIiwidmFsdWUiLCJpc05leHQiLCJpc01pbkxlbmd0aEVycm9yIiwiZSIsIm9uQ2hhbmdlIiwib25CbHVyIiwidW5kZWZpbmVkIiwiaW5wdXRWYWxpZCIsImN1cnNvciIsImlzRW1haWxFcnJvciIsImVtYWlsanMiLCJwcmV2ZW50RGVmYXVsdCIsInNlbmRGb3JtIiwidGFyZ2V0IiwidGhlbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwiZXJyb3IiLCJyZXNldCIsInNldENpdHkiLCJzZXRDb3VudHJ5Iiwic2V0WmlwIiwic3VjY2Vzc0NhbGxiYWNrIiwidXJsIiwiZmV0Y2giLCJkIiwianNvbiIsInJlcyIsImNvdW50cnlfbmFtZSIsInBvc3RhbCIsImVycm9yQ2FsbGJhY2siLCJyZWdleCIsIlJlZ0V4cCIsIm1hdGNoIiwidGVzdCIsInVzZVZhbGlkYXRpb24iLCJpbml0aWFsVmFsdWUiLCJ2YWxpZGF0aW9ucyIsInNldFZhbHVlIiwiaXNEaXJ0eSIsInNldElzRGlydHkiLCJzZXRJc05leHQiLCJ2YWxpZCIsIm9uQ2xpY2siLCJzZXRJc0VtcHR5Iiwic2V0SXNFbWFpbEVycm9yIiwic2V0SXNNaW5MZW5ndGhFcnJvciIsInNldElucHV0VmFsaWQiLCJ2YWxpZGF0aW9uIiwibGVuZ3RoIiwicmUiLCJTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsImRlZmF1bHQiLCJJbWFnZTEiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9oZWFkIiwiX3RvQmFzZTY0IiwiX2ltYWdlQ29uZmlnIiwiX3VzZUludGVyc2VjdGlvbiIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl9fZXNNb2R1bGUiLCJfb2JqZWN0U3ByZWFkIiwiaSIsImFyZ3VtZW50cyIsInNvdXJjZSIsIm93bktleXMiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiY29uY2F0IiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZm9yRWFjaCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsImV4Y2x1ZGVkIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJzb3VyY2VTeW1ib2xLZXlzIiwiaW5kZXhPZiIsInByb3RvdHlwZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiY2FsbCIsInNvdXJjZUtleXMiLCJsb2FkZWRJbWFnZVVSTHMiLCJTZXQiLCJnbG9iYWwiLCJfX05FWFRfSU1BR0VfSU1QT1JURUQiLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsImxvYWRlcnMiLCJNYXAiLCJkZWZhdWx0TG9hZGVyIiwiaW1naXhMb2FkZXIiLCJjbG91ZGluYXJ5TG9hZGVyIiwiYWthbWFpTG9hZGVyIiwiY3VzdG9tTG9hZGVyIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImlzU3RhdGljUmVxdWlyZSIsInNyYyIsImlzU3RhdGljSW1hZ2VEYXRhIiwiaXNTdGF0aWNJbXBvcnQiLCJkZXZpY2VTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImNvbmZpZ0ltYWdlU2l6ZXMiLCJsb2FkZXIiLCJjb25maWdMb2FkZXIiLCJwYXRoIiwiY29uZmlnUGF0aCIsImRvbWFpbnMiLCJjb25maWdEb21haW5zIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9JTUFHRV9PUFRTIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJzb3J0IiwiYSIsImdldFdpZHRocyIsIndpZHRoIiwibGF5b3V0Iiwic2l6ZXMiLCJ2aWV3cG9ydFdpZHRoUmUiLCJwZXJjZW50U2l6ZXMiLCJleGVjIiwicHVzaCIsInBhcnNlSW50Iiwic21hbGxlc3RSYXRpbyIsIk1hdGgiLCJtaW4iLCJ3aWR0aHMiLCJzIiwia2luZCIsInciLCJmaW5kIiwicCIsImdlbmVyYXRlSW1nQXR0cnMiLCJ1bm9wdGltaXplZCIsInF1YWxpdHkiLCJzcmNTZXQiLCJsYXN0Iiwiam9pbiIsImdldEludCIsIngiLCJkZWZhdWx0SW1hZ2VMb2FkZXIiLCJsb2FkZXJQcm9wcyIsImxvYWQiLCJnZXQiLCJyb290IiwiRXJyb3IiLCJWQUxJRF9MT0FERVJTIiwiaGFuZGxlTG9hZGluZyIsImltZyIsInBsYWNlaG9sZGVyIiwib25Mb2FkaW5nQ29tcGxldGUiLCJoYW5kbGVMb2FkIiwic3RhcnRzV2l0aCIsImRlY29kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2F0Y2giLCJzdHlsZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEltYWdlIiwiYWRkIiwibmF0dXJhbFdpZHRoIiwibmF0dXJhbEhlaWdodCIsInJlZiIsInBhcmVudEVsZW1lbnQiLCJwYXJlbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZGlzcGxheSIsIndhcm4iLCJwb3NpdGlvbiIsImNvbXBsZXRlIiwib25sb2FkIiwiX3BhcmFtIiwicHJpb3JpdHkiLCJsYXp5Qm91bmRhcnkiLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImJsdXJEYXRhVVJMIiwiYWxsIiwicmVzdCIsInN0YXRpY1NyYyIsInN0YXRpY0ltYWdlRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aWR0aEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpc0xhenkiLCJoYXMiLCJpbmNsdWRlcyIsImlzTmFOIiwiVkFMSURfQkxVUl9FWFQiLCJyYW5kIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsInNldFJlZiIsImlzSW50ZXJzZWN0ZWQiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3cmFwcGVyU3R5bGUiLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdTdHlsZSIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsImJveFNpemluZyIsInBhZGRpbmciLCJib3JkZXIiLCJtYXJnaW4iLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwiYmx1clN0eWxlIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwib3ZlcmZsb3ciLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJpbWdBdHRyaWJ1dGVzIiwic3JjU3RyaW5nIiwiY3JlYXRlRWxlbWVudCIsImFsdCIsInRvQmFzZTY0IiwiYXNzaWduIiwiZGVjb2RpbmciLCJyZWwiLCJhcyIsImhyZWYiLCJpbWFnZXNyY3NldCIsImltYWdlc2l6ZXMiLCJub3JtYWxpemVTcmMiLCJzbGljZSIsIlVSTCIsInBhcmFtcyIsInNlYXJjaFBhcmFtcyIsInNldCIsInBhcmFtc1N0cmluZyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJlcnIiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJzZWxmIiwiYmluZCIsIndpbmRvdyIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwibWF4IiwiY2xlYXJUaW1lb3V0IiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInVzZVJlZiIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlQ2FsbGJhY2siLCJlbCIsImN1cnJlbnQiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImluc3RhbmNlIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIkluZGV4Iiwid3JhcHBlciJdLCJzb3VyY2VSb290IjoiIn0=