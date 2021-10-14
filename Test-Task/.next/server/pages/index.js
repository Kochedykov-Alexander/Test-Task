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
/* harmony import */ var _styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Main.module.scss */ "./styles/Main.module.scss");
/* harmony import */ var _styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products */ "./components/Products.tsx");
/* harmony import */ var _UI_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI/Tabs */ "./components/UI/Tabs.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("main", {
    className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().page),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().page__main) + " " + (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().main),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().main__container) + " " + (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_4___default()._container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().main__body),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().main__body__container),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("form", {
              action: "#",
              className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().main__form),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_UI_Tabs__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 8
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 7
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Products__WEBPACK_IMPORTED_MODULE_1__.default, {
              products: products
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 7
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setCardType((0,_hooks_useIdentificationCard__WEBPACK_IMPORTED_MODULE_2__.useIdentificationCard)(card.value));
  }, [card.value]);
  const geo = (0,_hooks_useGeolocation__WEBPACK_IMPORTED_MODULE_1__.useGeolocation)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "main-block__form__tabs",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: toggleClass === 1 ? "tabs active-tabs" : "tabs",
        onClick: () => setToggleClass(1),
        children: "Shipping"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: toggleClass === 2 ? "tabs active-tabs" : "tabs",
        onClick: () => setToggleClass(2),
        children: "Billing"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: toggleClass === 3 ? "tabs active-tabs" : "tabs",
        onClick: () => setToggleClass(3),
        children: "Payment"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "main-block__form__tabs__content",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: toggleClass === 1 ? "content active-content" : "content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "content__title",
          children: "Shipping info"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "content__recipient",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "content__recipient_text",
            children: "Recipient"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "content__inputs",
          children: [(b.isNext && full_name.isEmpty || b.isNext && full_name.isMinLengthError) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "message",
            children: "Please enter recipient full name and min length = 3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 94
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            className: b.isNext && full_name.isEmpty || b.isNext && full_name.isMinLengthError ? "content__inputs_fullname focused" : "content__inputs_fullname",
            placeholder: "Full Name",
            value: full_name.value,
            onChange: e => full_name.onChange(e),
            onBlur: e => full_name.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "content__inputs_daytime_container",
            children: [!(b.isNext && phone.isEmpty) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
              type: "tel",
              className: "content__inputs_daytime",
              placeholder: "Datetime Phone",
              value: phone.value,
              onChange: e => phone.onChange(e),
              onBlur: e => phone.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 45
            }, undefined), b.isNext && phone.isEmpty && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "message",
              children: "Please enter recipient phone in format +7 (000) 000 00 00"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 45
            }, undefined), b.isNext && phone.isEmpty && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
              type: "tel",
              style: {
                backgroundColor: 'rgba(248, 231, 28, 0.07)'
              },
              className: "content__inputs_daytime",
              placeholder: "Datetime Phone",
              value: phone.value,
              onChange: e => phone.onChange(e),
              onBlur: e => phone.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 45
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
              htmlFor: "content__inputs_daytime_label",
              children: "For delivery questions only"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "content__address",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "content__address_text",
            children: "Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "content__inputs",
          children: [!(b.isNext && street.isEmpty) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            className: "content__inputs_street",
            placeholder: "Street Address",
            value: street.value,
            onChange: e => street.onChange(e),
            onBlur: e => street.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 45
          }, undefined), b.isNext && street.isEmpty && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "message",
            children: "Please enter recipient street"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 45
          }, undefined), b.isNext && street.isEmpty && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            className: "content__inputs_street",
            style: {
              backgroundColor: 'rgba(248, 231, 28, 0.07)'
            },
            placeholder: "Street Address",
            value: street.value,
            onChange: e => street.onChange(e),
            onBlur: e => street.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 45
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            className: "content__inputs_apt",
            placeholder: "Apt, Suite, Bldg, Gate Code. (optional)",
            value: apt.value,
            onChange: e => apt.onChange(e),
            onBlur: e => apt.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "content__inputs_icon",
            children: [!(b.isNext && city.isEmpty) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
              type: "text",
              className: "content__inputs_city",
              placeholder: "City",
              value: geo.city == undefined ? city.value : geo.city,
              onChange: e => city.onChange(e),
              onBlur: e => city.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 43
            }, undefined), b.isNext && city.isEmpty && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
              type: "text",
              className: "content__inputs_city",
              placeholder: "City",
              style: {
                backgroundColor: 'rgba(248, 231, 28, 0.07)'
              },
              value: geo.city == undefined ? city.value : geo.city,
              onChange: e => city.onChange(e),
              onBlur: e => city.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 43
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 10
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "content__inputs__row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "content__inputs__row_country",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("select", {
                onChange: e => country.onChange(e),
                onBlur: e => country.onBlur(e),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                  value: geo.country == undefined ? country.value : geo.country,
                  selected: true,
                  disabled: true,
                  children: geo.country === undefined ? country.value : geo.country
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 14
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                  value: "Russia",
                  children: "Russia"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 14
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                  value: "USA",
                  children: "USA"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 14
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                  value: "UK",
                  children: "UK"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 14
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                  value: "Ukraine",
                  children: "Ukraine"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 14
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 12
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 12
            }, undefined), !(b.isNext && zip.isEmpty) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
              type: "text",
              className: "content__inputs__row_zip",
              placeholder: "ZIP",
              value: geo.zip == undefined ? zip.value : geo.zip,
              onChange: e => zip.onChange(e),
              onBlur: e => zip.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 43
            }, undefined), b.isNext && zip.isEmpty && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
              type: "text",
              className: "content__inputs__row_zip",
              placeholder: "ZIP",
              style: {
                backgroundColor: 'rgba(248, 231, 28, 0.07)'
              },
              value: geo.zip == undefined ? zip.value : geo.zip,
              onChange: e => zip.onChange(e),
              onBlur: e => zip.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 43
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 10
        }, undefined), full_name.inputValid && phone.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
          onClick: () => setToggleClass(2),
          className: "content__button",
          style: {
            cursor: 'pointer'
          },
          children: "Continue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, undefined), !(full_name.inputValid && phone.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
          className: "content__button",
          style: {
            cursor: 'pointer'
          },
          children: "Continue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: toggleClass === 2 ? "content active-content" : "content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "content__title",
          children: "Billing Information"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "content__recipient",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "content__recipient_text",
            children: "Billing Contact"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "content__inputs",
          children: [!(b.isNext && full_name.isEmpty || b.isNext && full_name.isMinLengthError) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            className: "content__inputs_fullname",
            placeholder: "Full Name",
            value: full_name.value,
            onChange: e => full_name.onChange(e),
            onBlur: e => full_name.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 94
          }, undefined), (b.isNext && full_name.isEmpty || b.isNext && full_name.isMinLengthError) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "message",
            children: "Please enter recipient full name and min length = 3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 94
          }, undefined), (b.isNext && full_name.isEmpty || b.isNext && full_name.isMinLengthError) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            className: "content__inputs_fullname",
            style: {
              backgroundColor: 'rgba(248, 231, 28, 0.07)'
            },
            placeholder: "Full Name",
            value: full_name.value,
            onChange: e => full_name.onChange(e),
            onBlur: e => full_name.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 94
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            className: "content__inputs_email",
            placeholder: "Email Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "content__address",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "content__address_text",
            children: "Billing Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "content__inputs",
          children: [!(b.isNext && street.isEmpty) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            className: "content__inputs_street",
            placeholder: "Street Address",
            value: street.value,
            onChange: e => street.onChange(e),
            onBlur: e => street.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 46
          }, undefined), b.isNext && street.isEmpty && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "message",
            children: "Please enter recipient street"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 46
          }, undefined), b.isNext && street.isEmpty && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            className: "content__inputs_street",
            style: {
              backgroundColor: 'rgba(248, 231, 28, 0.07)'
            },
            placeholder: "Street Address",
            value: street.value,
            onChange: e => street.onChange(e),
            onBlur: e => street.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 46
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            className: "content__inputs_apt",
            placeholder: "Apt, Suite, Bldg, Gate Code. (optional)",
            value: apt.value,
            onChange: e => apt.onChange(e),
            onBlur: e => apt.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 12
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "content__inputs_icon",
            children: [!(b.isNext && city.isEmpty) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
              type: "text",
              className: "content__inputs_city",
              placeholder: "City",
              value: geo.city == '' ? geo.city : city.value,
              onChange: e => city.onChange(e),
              onBlur: e => city.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 43
            }, undefined), b.isNext && city.isEmpty && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
              type: "text",
              className: "content__inputs_city",
              placeholder: "City",
              style: {
                backgroundColor: 'rgba(248, 231, 28, 0.07)'
              },
              value: geo.city == '' ? geo.city : city.value,
              onChange: e => city.onChange(e),
              onBlur: e => city.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 43
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "content__inputs__row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "content__inputs__row_country",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("select", {
                onChange: e => country.onChange(e),
                onBlur: e => country.onBlur(e),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                  value: geo.country == undefined ? country.value : geo.country,
                  selected: true,
                  disabled: true,
                  children: geo.country === undefined ? country.value : geo.country
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 148,
                  columnNumber: 14
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                  value: "Russia",
                  children: "Russia"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 14
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                  value: "USA",
                  children: "USA"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 14
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                  value: "UK",
                  children: "UK"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 151,
                  columnNumber: 14
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
                  value: "Ukraine",
                  children: "Ukraine"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 14
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 12
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 12
            }, undefined), !(b.isNext && zip.isEmpty) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
              type: "text",
              className: "content__inputs__row_zip",
              placeholder: "ZIP",
              value: geo.zip == undefined ? zip.value : geo.zip,
              onChange: e => zip.onChange(e),
              onBlur: e => zip.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 43
            }, undefined), b.isNext && zip.isEmpty && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
              type: "text",
              className: "content__inputs__row_zip",
              placeholder: "ZIP",
              style: {
                backgroundColor: 'rgba(248, 231, 28, 0.07)'
              },
              value: geo.zip == undefined ? zip.value : geo.zip,
              onChange: e => zip.onChange(e),
              onBlur: e => zip.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 43
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 10
        }, undefined), full_name.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
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
        }, undefined), !(full_name.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
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
        lineNumber: 109,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: toggleClass === 3 ? "content active-content" : "content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "content__title",
          children: "Payment"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "content__recipient",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "content__recipient_text",
            children: "Cardholder Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "content__inputs",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            className: "content__inputs_cardholder",
            placeholder: "Name as it appears on your card"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "content__address",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "content__address_text",
            children: "Card Number"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "content__inputs",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            className: "content__inputs_card",
            placeholder: "XXXX XXXX XXXX XXXX XXXX",
            value: card.value,
            onChange: e => card.onChange(e),
            onBlur: e => card.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
            src: cardType,
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
          className: "content__button",
          children: "Pay Securely"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 10
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 8
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabs);

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
    inputValid
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO0FBQUEsZUFERDtBQU9BLENBWEQ7O0FBYUEsaUVBQWVpWSxLQUFmOzs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQSwyR0FBK0M7Ozs7Ozs7Ozs7O0FDQS9DLGlDQUFpQzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUM7Ozs7Ozs7Ozs7O0FDQWpDOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTmV4dC8uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vTmV4dC8uL2NvbXBvbmVudHMvTWFpbi50c3giLCJ3ZWJwYWNrOi8vTmV4dC8uL2NvbXBvbmVudHMvTmF2YmFyL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vTmV4dC8uL2NvbXBvbmVudHMvUHJvZHVjdHMudHN4Iiwid2VicGFjazovL05leHQvLi9jb21wb25lbnRzL1VJL1RhYnMudHN4Iiwid2VicGFjazovL05leHQvLi9ob29rcy91c2VHZW9sb2NhdGlvbi50cyIsIndlYnBhY2s6Ly9OZXh0Ly4vaG9va3MvdXNlSWRlbnRpZmljYXRpb25DYXJkLnRzIiwid2VicGFjazovL05leHQvLi9ob29rcy91c2VJbnB1dC50cyIsIndlYnBhY2s6Ly9OZXh0Ly4vaG9va3MvdXNlVmFsaWRhdGlvbi50cyIsIndlYnBhY2s6Ly9OZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vTmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9OZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9OZXh0Ly4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL05leHQvLi9zdHlsZXMvRm9vdGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL05leHQvLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL05leHQvLi9zdHlsZXMvTWFpbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9OZXh0Ly4vc3R5bGVzL1Byb2R1Y3RzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL05leHQvLi9zdHlsZXMvaW5kZXgubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vTmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovL05leHQvLi9pbWcvaGVhZGVyL1NoYXBlLnBuZyIsIndlYnBhY2s6Ly9OZXh0Ly4vaW1nL2hlYWRlci9sb2dvLnBuZyIsIndlYnBhY2s6Ly9OZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9OZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL05leHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vTmV4dC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vTmV4dC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvRm9vdGVyLm1vZHVsZS5zY3NzJ1xyXG5cclxuY29uc3QgRm9vdGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG5cdFx0XHRcclxuXHRcdDwvZm9vdGVyPlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL01haW4ubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBQcm9kdWN0cyBmcm9tICcuL1Byb2R1Y3RzJ1xyXG5pbXBvcnQgVGFicyBmcm9tICcuL1VJL1RhYnMnXHJcbmltcG9ydCB7IElQcm9kdWN0IH0gZnJvbSBcIi4uL3R5cGVzL0lQcm9kdWN0XCI7XHJcblxyXG5cclxuY29uc3QgTWFpbjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcblxyXG5cdGNvbnN0IHByb2R1Y3RzOiBJUHJvZHVjdFtdID0gW3tpZDogMSwgbmFtZTogJ9Ch0YPQvNC60LAnLCBkZXNjcmlwdGlvbjogJ9Ca0YDRg9GC0LDRjyDRgdGD0LzQutCwJywgcHJpY2U6IDMwMCB9LCB7aWQ6IDIsIG5hbWU6ICfQodGD0LzQutCwJywgZGVzY3JpcHRpb246ICfQmtGA0YPRgtCw0Y8g0YHRg9C80LrQsCAyJywgcHJpY2U6IDMwMCB9LCB7aWQ6IDMsIG5hbWU6ICfQodGD0LzQutCwJywgZGVzY3JpcHRpb246ICfQmtGA0YPRgtCw0Y8g0YHRg9C80LrQsCAzJywgcHJpY2U6IDMwMCB9LCB7aWQ6IDQsIG5hbWU6ICfQodGD0LzQutCwJywgZGVzY3JpcHRpb246ICfQmtGA0YPRgtCw0Y8g0YHRg9C80LrQsCA0JywgcHJpY2U6IDMwMCB9XVxyXG5cdFxyXG5cdHJldHVybiAoXHJcblx0XHQ8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlX19tYWluICsgXCIgXCIgKyBzdHlsZXMubWFpbn0+XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluX19jb250YWluZXIgKyBcIiBcIiArIHN0eWxlcy5fY29udGFpbmVyfT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbl9fYm9keX0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbl9fYm9keV9fY29udGFpbmVyfT5cclxuXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8Zm9ybSBhY3Rpb249XCIjXCIgY2xhc3NOYW1lPXtzdHlsZXMubWFpbl9fZm9ybX0+XHJcblx0XHRcdFx0XHRcdFx0PFRhYnM+PC9UYWJzPlxyXG5cdFx0XHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdFx0XHRcdDxQcm9kdWN0cyBwcm9kdWN0cyA9IHtwcm9kdWN0c30+PC9Qcm9kdWN0cz5cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9tYWluPlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9IZWFkZXIubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBsb2dvIGZyb20gJy4uLy4uL2ltZy9oZWFkZXIvbG9nby5wbmcnO1xyXG5pbXBvcnQgaWNvbiBmcm9tICcuLi8uLi9pbWcvaGVhZGVyL1NoYXBlLnBuZyc7XHJcblxyXG5jb25zdCBIZWFkZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX19jb250YWluZXIgKyBcIiBcIiArIHN0eWxlcy5fY29udGFpbmVyfSA+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfX2xvZ299PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfX2xvZ29faWNvbn0+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPXtsb2dvfSBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSB7c3R5bGVzLmhlYWRlcl9fbG9nb190ZXh0fT5cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfX2J1c2tldH0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfX2J1c2tldF90ZXh0fT5cclxuXHRcdFx0XHRcdGNhcnRcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fYnVza2V0X2ljb259PlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9e2ljb259IGFsdD1cIlwiLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2Plx0XHJcblx0XHQ8L2hlYWRlcj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1Byb2R1Y3RzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJy4uL3R5cGVzL0lQcm9kdWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuaW50ZXJmYWNlIFByb2R1Y3RzSXRlbXNQcm9wcyB7XHJcblx0cHJvZHVjdHM6IElQcm9kdWN0W107XHJcbn1cclxuY29uc3QgUHJvZHVjdHM6IFJlYWN0LkZDPFByb2R1Y3RzSXRlbXNQcm9wcz4gPSAoe3Byb2R1Y3RzfSkgPT4ge1xyXG5cclxuXHRjb25zdCBbc2VsZWN0ZWRQcm9kdWN0cywgc2V0U2VsZWN0ZWRQcm9kdWN0c10gPSB1c2VTdGF0ZTxJUHJvZHVjdFtdPihwcm9kdWN0cylcclxuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG5cdHJldHVybiAoXHJcblxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluX19wcm9kdWN0c30+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdHNfX3RleHR9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdHNfX3RleHRfdGl0bGV9PlxyXG5cdFx0XHRcdFx0T3JkZXIgc3VtbWFyeVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxhIGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RzX190ZXh0X2VkaXR9PlxyXG5cdFx0XHRcdFx0ZWRpdCBvcmRlclxyXG5cdFx0XHRcdDwvYT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDx1bCBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0c19faXRlbXN9PlxyXG5cdFx0XHRcdHshbG9hZGluZyAmJiAgc2VsZWN0ZWRQcm9kdWN0cy5tYXAocHJvZHVjdCA9PiBcclxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0c19fcHJvZHVjdH0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdF9faW1hZ2V9PlxyXG5cdFx0XHRcdFx0XHRcdDxJbWFnZSBzcmM9ICcvLi4vaW1nL3Byb2R1Y3RzL3N1bWthLnBuZycgd2lkdGg9ezIwfSBoZWlnaHQ9ezIwfSBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RfX2NvbnRlbnR9PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdF9fY29udGVudF9uYW1lfT5cclxuXHRcdFx0XHRcdFx0XHRcdHtwcm9kdWN0Lm5hbWV9XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0X19jb250ZW50X2Rlc2NyaXB0aW9ufT5cclxuXHRcdFx0XHRcdFx0XHRcdHtwcm9kdWN0LmRlc2NyaXB0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdF9fY29udGVudF9xdWFudGl0eX0+XHJcblx0XHRcdFx0XHRcdFx0XHRRdWFudGl0eTogMVxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RfX3ByaWNlfT5cclxuXHRcdFx0XHRcdFx0XHRcdCR7cHJvZHVjdC5wcmljZX1cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHJcblx0XHRcdFx0KX1cclxuXHJcblx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0c19fY29zdH0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvc3RfX3N1YnRvdGFsfT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0b3RhbF9fdGV4dH0+XHJcblx0XHRcdFx0XHRcdFx0U3VidG90YWxcclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VidG90YWxfX2NvdW50fT5cclxuXHRcdFx0XHRcdFx0XHQkeyFsb2FkaW5nICYmIHNlbGVjdGVkUHJvZHVjdHMucmVkdWNlKChhY2MsIGN1cikgPT4geyByZXR1cm4gYWNjICsgY3VyLnByaWNlIH0sIDApfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3N0X19zaGlwcGluZ30+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2hpcHBpbmdfX3RleHR9PlxyXG5cdFx0XHRcdFx0XHRcdFNoaXBwaW5nXHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNoaXBwaW5nX19jb3VudH0+XHJcblx0XHRcdFx0XHRcdFx0RnJlZVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3N0X190YXhlc30+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGF4ZXNfX3RleHR9PlxyXG5cdFx0XHRcdFx0XHRcdFRheGVzXHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRheGVzX19jb3VudH0+XHJcblx0XHRcdFx0XHRcdFx0eyFsb2FkaW5nICYmIHNlbGVjdGVkUHJvZHVjdHMucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjICsgY3VyLnByaWNlLCAwKSowLjAzfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3N0X190b3RhbH0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG90YWxfX3RleHR9PlxyXG5cdFx0XHRcdFx0XHRcdFRvdGFsXHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvdGFsX19jb3VudH0+XHJcblx0XHRcdFx0XHRcdFx0JHshbG9hZGluZyAmJiBzZWxlY3RlZFByb2R1Y3RzLnJlZHVjZSgoYWNjLCBjdXIpID0+IGFjYyArIGN1ci5wcmljZSwgMCkgKyBzZWxlY3RlZFByb2R1Y3RzLnJlZHVjZSgoYWNjLCBjdXIpID0+IGFjYyArIGN1ci5wcmljZSwgMCkqMC4wM31cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RzX19pbmZvcm1hdGlvbn0+XHJcblx0XHRcdFx0XHRBbGwgcHVyY2hhc2VzIGFyZSBzdWJqZWN0IHRvIG91ciBUZXJtcyBhbmQgQ29uZGl0aW9ucy5cclxuXHRcdFx0XHQ8L2Zvb3Rlcj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlR2VvbG9jYXRpb24gfSBmcm9tICcuLi8uLi9ob29rcy91c2VHZW9sb2NhdGlvbic7XHJcbmltcG9ydCB7IHVzZUlkZW50aWZpY2F0aW9uQ2FyZCB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUlkZW50aWZpY2F0aW9uQ2FyZCc7XHJcbmltcG9ydCB7IHVzZUlucHV0IH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5cclxuXHJcbmNvbnN0IFRhYnM6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG5cclxuXHJcblx0Y29uc3QgW3RvZ2dsZUNsYXNzLCBzZXRUb2dnbGVDbGFzc10gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xyXG5cdGNvbnN0IFtjYXJkVHlwZSwgc2V0Q2FyZFR5cGVdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcblxyXG5cdGNvbnN0IGZ1bGxfbmFtZSA9IHVzZUlucHV0KCcnLCB7aXNFbXB0eTogdHJ1ZSwgbWluTGVuZ3RoOiAzfSk7XHJcblx0Y29uc3Qgc3RyZWV0ID0gdXNlSW5wdXQoJycsIHtpc0VtcHR5OiB0cnVlfSk7XHJcblx0Y29uc3QgcGhvbmUgPSB1c2VJbnB1dCgnJywge2lzRW1wdHk6IHRydWV9KTtcclxuXHRjb25zdCBhcHQgPSB1c2VJbnB1dCgnJywge30pO1xyXG5cdGNvbnN0IGNpdHkgPSB1c2VJbnB1dCgnJywge2lzRW1wdHk6IHRydWV9KTtcclxuXHRjb25zdCBjb3VudHJ5ID0gdXNlSW5wdXQoJ0NvdW50cnknLCB7aXNFbXB0eTogdHJ1ZX0pO1xyXG5cdGNvbnN0IHppcCA9IHVzZUlucHV0KCcnLCB7aXNFbXB0eTogdHJ1ZX0pO1xyXG4gXHRjb25zdCBiID0gdXNlSW5wdXQoJycsIHt9KTtcclxuXHRjb25zdCBjYXJkID0gdXNlSW5wdXQoJycsIHt9KTtcclxuXHRcclxuXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZXRDYXJkVHlwZSh1c2VJZGVudGlmaWNhdGlvbkNhcmQoY2FyZC52YWx1ZSkpO1xyXG5cdH0sIFtjYXJkLnZhbHVlXSlcclxuXHRcclxuXHJcblx0Y29uc3QgZ2VvID0gdXNlR2VvbG9jYXRpb24oKTsgXHJcblxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluLWJsb2NrX19mb3JtX190YWJzXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3RvZ2dsZUNsYXNzID09PSAxID8gXCJ0YWJzIGFjdGl2ZS10YWJzXCIgOiBcInRhYnNcIn0gb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlQ2xhc3MoMSl9PlNoaXBwaW5nPC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3RvZ2dsZUNsYXNzID09PSAyID8gXCJ0YWJzIGFjdGl2ZS10YWJzXCIgOiBcInRhYnNcIn0gb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlQ2xhc3MoMil9PkJpbGxpbmc8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dG9nZ2xlQ2xhc3MgPT09IDMgPyBcInRhYnMgYWN0aXZlLXRhYnNcIiA6IFwidGFic1wifSBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGVDbGFzcygzKX0+UGF5bWVudDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluLWJsb2NrX19mb3JtX190YWJzX19jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dG9nZ2xlQ2xhc3MgPT09IDEgPyBcImNvbnRlbnQgYWN0aXZlLWNvbnRlbnRcIiA6IFwiY29udGVudFwifT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X190aXRsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFNoaXBwaW5nIGluZm9cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3JlY2lwaWVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fcmVjaXBpZW50X3RleHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFJlY2lwaWVudFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNcIj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eygoYi5pc05leHQgJiYgZnVsbF9uYW1lLmlzRW1wdHkpIHx8IChiLmlzTmV4dCAmJiBmdWxsX25hbWUuaXNNaW5MZW5ndGhFcnJvcikpICYmICg8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZSc+UGxlYXNlIGVudGVyIHJlY2lwaWVudCBmdWxsIG5hbWUgYW5kIG1pbiBsZW5ndGggPSAzPC9kaXY+KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9eygoYi5pc05leHQgJiYgZnVsbF9uYW1lLmlzRW1wdHkpIHx8IChiLmlzTmV4dCAmJiBmdWxsX25hbWUuaXNNaW5MZW5ndGhFcnJvcikpID8gXCJjb250ZW50X19pbnB1dHNfZnVsbG5hbWUgZm9jdXNlZFwiIDogXCJjb250ZW50X19pbnB1dHNfZnVsbG5hbWVcIn0gcGxhY2Vob2xkZXI9XCJGdWxsIE5hbWVcIiB2YWx1ZT17ZnVsbF9uYW1lLnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IGZ1bGxfbmFtZS5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gZnVsbF9uYW1lLm9uQmx1cihlKX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19kYXl0aW1lX2NvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHshKGIuaXNOZXh0ICYmIHBob25lLmlzRW1wdHkpICYmICg8aW5wdXQgdHlwZT1cInRlbFwiIGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19kYXl0aW1lXCIgcGxhY2Vob2xkZXI9XCJEYXRldGltZSBQaG9uZVwiIHZhbHVlPXtwaG9uZS52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBwaG9uZS5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gcGhvbmUub25CbHVyKGUpfS8+KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsoYi5pc05leHQgJiYgcGhvbmUuaXNFbXB0eSkgJiYgKDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlJz5QbGVhc2UgZW50ZXIgcmVjaXBpZW50IHBob25lIGluIGZvcm1hdCArNyAoMDAwKSAwMDAgMDAgMDA8L2Rpdj4pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyhiLmlzTmV4dCAmJiBwaG9uZS5pc0VtcHR5KSAmJiAoPGlucHV0IHR5cGU9XCJ0ZWxcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3JnYmEoMjQ4LCAyMzEsIDI4LCAwLjA3KSd9fSBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfZGF5dGltZVwiIHBsYWNlaG9sZGVyPVwiRGF0ZXRpbWUgUGhvbmVcIiB2YWx1ZT17cGhvbmUudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gcGhvbmUub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IHBob25lLm9uQmx1cihlKX0vPil9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvciA9XCJjb250ZW50X19pbnB1dHNfZGF5dGltZV9sYWJlbFwiPkZvciBkZWxpdmVyeSBxdWVzdGlvbnMgb25seTwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fYWRkcmVzc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fYWRkcmVzc190ZXh0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBZGRyZXNzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7IShiLmlzTmV4dCAmJiBzdHJlZXQuaXNFbXB0eSkgJiYgKDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19zdHJlZXRcIiBwbGFjZWhvbGRlcj1cIlN0cmVldCBBZGRyZXNzXCIgdmFsdWU9e3N0cmVldC52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBzdHJlZXQub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IHN0cmVldC5vbkJsdXIoZSl9Lz4pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsoYi5pc05leHQgJiYgc3RyZWV0LmlzRW1wdHkpICYmICg8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZSc+UGxlYXNlIGVudGVyIHJlY2lwaWVudCBzdHJlZXQ8L2Rpdj4pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsoYi5pc05leHQgJiYgc3RyZWV0LmlzRW1wdHkpICYmICg8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfc3RyZWV0XCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI0OCwgMjMxLCAyOCwgMC4wNyknfX0gcGxhY2Vob2xkZXI9XCJTdHJlZXQgQWRkcmVzc1wiIHZhbHVlPXtzdHJlZXQudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gc3RyZWV0Lm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBzdHJlZXQub25CbHVyKGUpfS8+KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfYXB0XCIgcGxhY2Vob2xkZXI9XCJBcHQsIFN1aXRlLCBCbGRnLCBHYXRlIENvZGUuIChvcHRpb25hbClcIiB2YWx1ZT17YXB0LnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IGFwdC5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gYXB0Lm9uQmx1cihlKX0vPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfaWNvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdHshKGIuaXNOZXh0ICYmIGNpdHkuaXNFbXB0eSkgJiYgKDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19jaXR5XCIgcGxhY2Vob2xkZXI9XCJDaXR5XCIgdmFsdWU9e2dlby5jaXR5ID09IHVuZGVmaW5lZCA/IGNpdHkudmFsdWUgOiBnZW8uY2l0eX0gb25DaGFuZ2U9eyhlKSA9PiBjaXR5Lm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBjaXR5Lm9uQmx1cihlKX0vPil9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyhiLmlzTmV4dCAmJiBjaXR5LmlzRW1wdHkpICYmICg8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfY2l0eVwiIHBsYWNlaG9sZGVyPVwiQ2l0eVwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAncmdiYSgyNDgsIDIzMSwgMjgsIDAuMDcpJ319IHZhbHVlPXtnZW8uY2l0eSA9PSB1bmRlZmluZWQgPyBjaXR5LnZhbHVlIDogZ2VvLmNpdHl9IG9uQ2hhbmdlPXsoZSkgPT4gY2l0eS5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gY2l0eS5vbkJsdXIoZSl9Lz4pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDcm9zc2hhaXJzfSBzdHlsZT17e3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICc0MCUnLCByaWdodDogJzEwcHgnLCBmb250U2l6ZTogJzIwcHgnLCBjdXJzb3I6ICdwb2ludGVyJ319IC8+ICovfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19fcm93XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19fcm93X2NvdW50cnlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiBjb3VudHJ5Lm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBjb3VudHJ5Lm9uQmx1cihlKX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT17Z2VvLmNvdW50cnkgPT0gdW5kZWZpbmVkID8gY291bnRyeS52YWx1ZSA6IGdlby5jb3VudHJ5fSBzZWxlY3RlZCBkaXNhYmxlZD57KGdlby5jb3VudHJ5ID09PSB1bmRlZmluZWQpID8gY291bnRyeS52YWx1ZSA6IGdlby5jb3VudHJ5fTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJSdXNzaWFcIj5SdXNzaWE8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiVVNBXCI+VVNBPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlVLXCI+VUs8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiVWtyYWluZVwiPlVrcmFpbmU8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyEoYi5pc05leHQgJiYgemlwLmlzRW1wdHkpICYmICg8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfX3Jvd196aXBcIiBwbGFjZWhvbGRlcj1cIlpJUFwiICB2YWx1ZT17Z2VvLnppcCA9PSB1bmRlZmluZWQgPyB6aXAudmFsdWUgOiBnZW8uemlwfSBvbkNoYW5nZT17KGUpID0+IHppcC5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gemlwLm9uQmx1cihlKX0vPil9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7KGIuaXNOZXh0ICYmIHppcC5pc0VtcHR5KSAmJiAoPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzX19yb3dfemlwXCIgcGxhY2Vob2xkZXI9XCJaSVBcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3JnYmEoMjQ4LCAyMzEsIDI4LCAwLjA3KSd9fSB2YWx1ZT17Z2VvLnppcCA9PSB1bmRlZmluZWQgPyB6aXAudmFsdWUgOiBnZW8uemlwfSBvbkNoYW5nZT17KGUpID0+IHppcC5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gemlwLm9uQmx1cihlKX0vPil9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHsoZnVsbF9uYW1lLmlucHV0VmFsaWQgJiYgcGhvbmUuaW5wdXRWYWxpZCAmJiBzdHJlZXQuaW5wdXRWYWxpZCAmJiBjaXR5LmlucHV0VmFsaWQgJiYgY291bnRyeS5pbnB1dFZhbGlkICYmIHppcC5pbnB1dFZhbGlkKSAmJiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGVDbGFzcygyKX0gY2xhc3NOYW1lPVwiY29udGVudF9fYnV0dG9uXCIgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJ319PkNvbnRpbnVlPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHshKGZ1bGxfbmFtZS5pbnB1dFZhbGlkICYmIHBob25lLmlucHV0VmFsaWQgJiYgc3RyZWV0LmlucHV0VmFsaWQgJiYgY2l0eS5pbnB1dFZhbGlkICYmIGNvdW50cnkuaW5wdXRWYWxpZCAmJiB6aXAuaW5wdXRWYWxpZCkgJiYgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiY29udGVudF9fYnV0dG9uXCIgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJ319PkNvbnRpbnVlPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dG9nZ2xlQ2xhc3MgPT09IDIgPyBcImNvbnRlbnQgYWN0aXZlLWNvbnRlbnRcIiA6IFwiY29udGVudFwifT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X190aXRsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEJpbGxpbmcgSW5mb3JtYXRpb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fcmVjaXBpZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19yZWNpcGllbnRfdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QmlsbGluZyBDb250YWN0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c1wiPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0eyEoKGIuaXNOZXh0ICYmIGZ1bGxfbmFtZS5pc0VtcHR5KSB8fCAoYi5pc05leHQgJiYgZnVsbF9uYW1lLmlzTWluTGVuZ3RoRXJyb3IpKSAmJiAoPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzX2Z1bGxuYW1lXCIgcGxhY2Vob2xkZXI9XCJGdWxsIE5hbWVcIiB2YWx1ZT17ZnVsbF9uYW1lLnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IGZ1bGxfbmFtZS5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gZnVsbF9uYW1lLm9uQmx1cihlKX0vPil9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eygoYi5pc05leHQgJiYgZnVsbF9uYW1lLmlzRW1wdHkpIHx8IChiLmlzTmV4dCAmJiBmdWxsX25hbWUuaXNNaW5MZW5ndGhFcnJvcikpICYmICg8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZSc+UGxlYXNlIGVudGVyIHJlY2lwaWVudCBmdWxsIG5hbWUgYW5kIG1pbiBsZW5ndGggPSAzPC9kaXY+KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7KChiLmlzTmV4dCAmJiBmdWxsX25hbWUuaXNFbXB0eSkgfHwgKGIuaXNOZXh0ICYmIGZ1bGxfbmFtZS5pc01pbkxlbmd0aEVycm9yKSkgJiYgKDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19mdWxsbmFtZVwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAncmdiYSgyNDgsIDIzMSwgMjgsIDAuMDcpJ319IHBsYWNlaG9sZGVyPVwiRnVsbCBOYW1lXCIgdmFsdWU9e2Z1bGxfbmFtZS52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBmdWxsX25hbWUub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IGZ1bGxfbmFtZS5vbkJsdXIoZSl9Lz4pfVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3NcIi8+XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2FkZHJlc3NcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2FkZHJlc3NfdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QmlsbGluZyBBZGRyZXNzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHshKGIuaXNOZXh0ICYmIHN0cmVldC5pc0VtcHR5KSAmJiAoPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzX3N0cmVldFwiIHBsYWNlaG9sZGVyPVwiU3RyZWV0IEFkZHJlc3NcIiB2YWx1ZT17c3RyZWV0LnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHN0cmVldC5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gc3RyZWV0Lm9uQmx1cihlKX0vPil9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7KGIuaXNOZXh0ICYmIHN0cmVldC5pc0VtcHR5KSAmJiAoPGRpdiBjbGFzc05hbWU9J21lc3NhZ2UnPlBsZWFzZSBlbnRlciByZWNpcGllbnQgc3RyZWV0PC9kaXY+KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsoYi5pc05leHQgJiYgc3RyZWV0LmlzRW1wdHkpICYmICg8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfc3RyZWV0XCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI0OCwgMjMxLCAyOCwgMC4wNyknfX0gcGxhY2Vob2xkZXI9XCJTdHJlZXQgQWRkcmVzc1wiIHZhbHVlPXtzdHJlZXQudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gc3RyZWV0Lm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBzdHJlZXQub25CbHVyKGUpfS8+KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19hcHRcIiBwbGFjZWhvbGRlcj1cIkFwdCwgU3VpdGUsIEJsZGcsIEdhdGUgQ29kZS4gKG9wdGlvbmFsKVwiIHZhbHVlPXthcHQudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gYXB0Lm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBhcHQub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfaWNvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7IShiLmlzTmV4dCAmJiBjaXR5LmlzRW1wdHkpICYmICg8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfY2l0eVwiIHBsYWNlaG9sZGVyPVwiQ2l0eVwiIHZhbHVlPXtnZW8uY2l0eSA9PSAnJyA/IGdlby5jaXR5IDogY2l0eS52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBjaXR5Lm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBjaXR5Lm9uQmx1cihlKX0vPil9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyhiLmlzTmV4dCAmJiBjaXR5LmlzRW1wdHkpICYmICg8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfY2l0eVwiIHBsYWNlaG9sZGVyPVwiQ2l0eVwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAncmdiYSgyNDgsIDIzMSwgMjgsIDAuMDcpJ319IHZhbHVlPXtnZW8uY2l0eSA9PSAnJyA/IGdlby5jaXR5IDogY2l0eS52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBjaXR5Lm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBjaXR5Lm9uQmx1cihlKX0vPil9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7LyogPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNyb3NzaGFpcnN9IHN0eWxlPXt7cG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJzQwJScsIHJpZ2h0OiAnMTBweCcsIGZvbnRTaXplOiAnMjBweCcsIGN1cnNvcjogJ3BvaW50ZXInfX0gLz4gKi99XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfX3Jvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfX3Jvd19jb3VudHJ5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0IG9uQ2hhbmdlPXsoZSkgPT4gY291bnRyeS5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gY291bnRyeS5vbkJsdXIoZSl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9e2dlby5jb3VudHJ5ID09IHVuZGVmaW5lZCA/IGNvdW50cnkudmFsdWUgOiBnZW8uY291bnRyeX0gc2VsZWN0ZWQgZGlzYWJsZWQ+eyhnZW8uY291bnRyeSA9PT0gdW5kZWZpbmVkKSA/IGNvdW50cnkudmFsdWUgOiBnZW8uY291bnRyeX08L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiUnVzc2lhXCI+UnVzc2lhPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlVTQVwiPlVTQTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJVS1wiPlVLPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlVrcmFpbmVcIj5Va3JhaW5lPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHshKGIuaXNOZXh0ICYmIHppcC5pc0VtcHR5KSAmJiAoPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzX19yb3dfemlwXCIgcGxhY2Vob2xkZXI9XCJaSVBcIiB2YWx1ZT17Z2VvLnppcCA9PSB1bmRlZmluZWQgPyB6aXAudmFsdWUgOiBnZW8uemlwfSBvbkNoYW5nZT17KGUpID0+IHppcC5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gemlwLm9uQmx1cihlKX0vPil9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7KGIuaXNOZXh0ICYmIHppcC5pc0VtcHR5KSAmJiAoPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzX19yb3dfemlwXCIgcGxhY2Vob2xkZXI9XCJaSVBcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3JnYmEoMjQ4LCAyMzEsIDI4LCAwLjA3KSd9fSB2YWx1ZT17Z2VvLnppcCA9PSB1bmRlZmluZWQgPyB6aXAudmFsdWUgOiBnZW8uemlwfSBvbkNoYW5nZT17KGUpID0+IHppcC5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gemlwLm9uQmx1cihlKX0vPil9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7KGZ1bGxfbmFtZS5pbnB1dFZhbGlkICYmIHN0cmVldC5pbnB1dFZhbGlkICYmIGNpdHkuaW5wdXRWYWxpZCAmJiBjb3VudHJ5LmlucHV0VmFsaWQgJiYgemlwLmlucHV0VmFsaWQpICYmIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZUNsYXNzKDMpfSBjbGFzc05hbWU9XCJjb250ZW50X19idXR0b25cIiBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX0+Q29udGludWU8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0eyEoZnVsbF9uYW1lLmlucHV0VmFsaWQgJiYgc3RyZWV0LmlucHV0VmFsaWQgJiYgY2l0eS5pbnB1dFZhbGlkICYmIGNvdW50cnkuaW5wdXRWYWxpZCAmJiB6aXAuaW5wdXRWYWxpZCkgJiYgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiY29udGVudF9fYnV0dG9uXCIgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJ319PkNvbnRpbnVlPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dG9nZ2xlQ2xhc3MgPT09IDMgPyBcImNvbnRlbnQgYWN0aXZlLWNvbnRlbnRcIiA6IFwiY29udGVudFwifT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X190aXRsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFBheW1lbnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fcmVjaXBpZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19yZWNpcGllbnRfdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Q2FyZGhvbGRlciBOYW1lXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19jYXJkaG9sZGVyXCIgcGxhY2Vob2xkZXI9XCJOYW1lIGFzIGl0IGFwcGVhcnMgb24geW91ciBjYXJkXCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fYWRkcmVzc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fYWRkcmVzc190ZXh0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRDYXJkIE51bWJlclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfY2FyZFwiIHBsYWNlaG9sZGVyPVwiWFhYWCBYWFhYIFhYWFggWFhYWCBYWFhYXCIgdmFsdWU9e2NhcmQudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gY2FyZC5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gY2FyZC5vbkJsdXIoZSl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e2NhcmRUeXBlfSBhbHQ9XCJcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiY29udGVudF9fYnV0dG9uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0UGF5IFNlY3VyZWx5XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cdFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYnM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VHZW9sb2NhdGlvbiA9ICgpID0+IHtcclxuXHJcblx0Y29uc3QgW2NpdHksIHNldENpdHldID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcblx0Y29uc3QgW2NvdW50cnksIHNldENvdW50cnldID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcblx0Y29uc3QgW3ppcCwgc2V0WmlwXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cclxuXHRjb25zdCBzdWNjZXNzQ2FsbGJhY2sgPSBhc3luYyAodXJsOiBzdHJpbmcpOiBQcm9taXNlPGFueT4gPT4ge1xyXG5cdFx0YXdhaXQgZmV0Y2godXJsKVxyXG4gIFx0XHRcdC50aGVuKGQgPT4gZC5qc29uKCkpXHJcblx0XHRcdC50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0c2V0Q2l0eShyZXMuY2l0eSk7XHJcblx0XHRcdFx0c2V0Q291bnRyeShyZXMuY291bnRyeV9uYW1lKTtcclxuXHRcdFx0XHRzZXRaaXAocmVzLnBvc3RhbCk7XHJcblx0XHRcdH0pXHJcblx0ICB9XHJcblxyXG5cdCAgXHJcblx0ICBjb25zdCBlcnJvckNhbGxiYWNrID0gKGVycm9yOiBhbnkpOiB2b2lkID0+IHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcblx0ICB9XHJcblxyXG5cdC8vIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuXHQgIHN1Y2Nlc3NDYWxsYmFjaygnaHR0cHM6Ly9pcGFwaS5jby9qc29uLycpO1xyXG5cclxuXHQgIHJldHVybiB7XHJcblx0XHRjaXR5LFxyXG5cdFx0Y291bnRyeSxcclxuXHRcdHppcFxyXG5cdH1cclxuXHRcclxuXHRcdFxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiB1c2VJZGVudGlmaWNhdGlvbkNhcmQodmFsdWU6IHN0cmluZyk6IHN0cmluZyBcclxue1xyXG4gICAgLy8gdmlzYVxyXG4gICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIl40XCIpO1xyXG4gICAgaWYgKHZhbHVlLm1hdGNoKHJlZ2V4KSAhPSBudWxsKVxyXG4gICAgICAgIHJldHVybiBcIi4uL2ltZy90YWJzL2NhcmRzL3Zpc2EucG5nXCI7XHJcblxyXG4gICAgLy8gTWFzdGVyY2FyZCBcclxuICAgIC8vIFVwZGF0ZWQgZm9yIE1hc3RlcmNhcmQgMjAxNyBCSU5zIGV4cGFuc2lvblxyXG4gICAgIGlmICgvXig1WzEtNV1bMC05XXsxNH18MigyMlsxLTldWzAtOV17MTJ9fDJbMy05XVswLTldezEzfXxbMy02XVswLTldezE0fXw3WzAtMV1bMC05XXsxM318NzIwWzAtOV17MTJ9KSkkLy50ZXN0KHZhbHVlKSkgXHJcbiAgICAgICAgcmV0dXJuIFwiTWFzdGVyY2FyZFwiO1xyXG5cclxuICAgIC8vIC8vIEFNRVhcclxuICAgIC8vIHJlID0gbmV3IFJlZ0V4cChcIl4zWzQ3XVwiKTtcclxuICAgIC8vIGlmIChudW1iZXIubWF0Y2gocmUpICE9IG51bGwpXHJcbiAgICAvLyAgICAgcmV0dXJuIFwiQU1FWFwiO1xyXG5cclxuICAgIC8vIC8vIERpc2NvdmVyXHJcbiAgICAvLyByZSA9IG5ldyBSZWdFeHAoXCJeKDYwMTF8NjIyKDEyWzYtOV18MVszLTldWzAtOV18WzItOF1bMC05XXsyfXw5WzAtMV1bMC05XXw5MlswLTVdfDY0WzQtOV0pfDY1KVwiKTtcclxuICAgIC8vIGlmIChudW1iZXIubWF0Y2gocmUpICE9IG51bGwpXHJcbiAgICAvLyAgICAgcmV0dXJuIFwiRGlzY292ZXJcIjtcclxuXHJcbiAgICAvLyAvLyBEaW5lcnNcclxuICAgIC8vIHJlID0gbmV3IFJlZ0V4cChcIl4zNlwiKTtcclxuICAgIC8vIGlmIChudW1iZXIubWF0Y2gocmUpICE9IG51bGwpXHJcbiAgICAvLyAgICAgcmV0dXJuIFwiRGluZXJzXCI7XHJcblxyXG4gICAgLy8gLy8gRGluZXJzIC0gQ2FydGUgQmxhbmNoZVxyXG4gICAgLy8gcmUgPSBuZXcgUmVnRXhwKFwiXjMwWzAtNV1cIik7XHJcbiAgICAvLyBpZiAobnVtYmVyLm1hdGNoKHJlKSAhPSBudWxsKVxyXG4gICAgLy8gICAgIHJldHVybiBcIkRpbmVycyAtIENhcnRlIEJsYW5jaGVcIjtcclxuXHJcbiAgICAvLyAvLyBKQ0JcclxuICAgIC8vIHJlID0gbmV3IFJlZ0V4cChcIl4zNSgyWzg5XXxbMy04XVswLTldKVwiKTtcclxuICAgIC8vIGlmIChudW1iZXIubWF0Y2gocmUpICE9IG51bGwpXHJcbiAgICAvLyAgICAgcmV0dXJuIFwiSkNCXCI7XHJcblxyXG4gICAgLy8gLy8gVmlzYSBFbGVjdHJvblxyXG4gICAgLy8gcmUgPSBuZXcgUmVnRXhwKFwiXig0MDI2fDQxNzUwMHw0NTA4fDQ4NDR8NDkxKDN8NykpXCIpO1xyXG4gICAgLy8gaWYgKG51bWJlci5tYXRjaChyZSkgIT0gbnVsbClcclxuICAgIC8vICAgICByZXR1cm4gXCJWaXNhIEVsZWN0cm9uXCI7XHJcblxyXG4gICAgcmV0dXJuIFwibnVsbFwiO1xyXG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlVmFsaWRhdGlvbiB9IGZyb20gJy4vdXNlVmFsaWRhdGlvbic7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlSW5wdXQgPSAoaW5pdGlhbFZhbHVlOiBzdHJpbmcsIHZhbGlkYXRpb25zOiBPYmplY3QpID0+IHtcclxuXHJcblx0Y29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KGluaXRpYWxWYWx1ZSk7XHJcblx0Y29uc3QgW2lzRGlydHksIHNldElzRGlydHldID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cdGNvbnN0IFtpc05leHQsIHNldElzTmV4dF0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuXHRjb25zdCB2YWxpZCA9IHVzZVZhbGlkYXRpb24odmFsdWUsIHZhbGlkYXRpb25zKTtcclxuXHJcblxyXG5cdGNvbnN0IG9uQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MU2VsZWN0RWxlbWVudD4pOiB2b2lkID0+IHtcclxuXHRcdHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG9uQmx1ciA9IChlOiBSZWFjdC5Gb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MU2VsZWN0RWxlbWVudD4pOiB2b2lkID0+IHtcclxuXHRcdHNldElzRGlydHkodHJ1ZSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBvbkNsaWNrID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pOiB2b2lkID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHNldElzTmV4dCh0cnVlKTtcclxuXHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0dmFsdWUsXHJcblx0XHRpc05leHQsXHJcblx0XHRvbkNsaWNrLFxyXG5cdFx0b25DaGFuZ2UsXHJcblx0XHRvbkJsdXIsXHJcblx0XHRpc0RpcnR5LFxyXG5cdFx0Li4udmFsaWRcclxuXHR9XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlVmFsaWRhdGlvbiA9ICh2YWx1ZTogc3RyaW5nLCB2YWxpZGF0aW9uczogT2JqZWN0KSA9PiB7XHJcblxyXG5cdGNvbnN0IFtpc0VtcHR5LCBzZXRJc0VtcHR5XSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG5cdGNvbnN0IFtpc01pbkxlbmd0aEVycm9yLCBzZXRJc01pbkxlbmd0aEVycm9yXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHRjb25zdCBbaW5wdXRWYWxpZCwgc2V0SW5wdXRWYWxpZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRmb3IgKGNvbnN0IHZhbGlkYXRpb24gaW4gdmFsaWRhdGlvbnMpIHtcclxuXHRcdFx0c3dpdGNoICh2YWxpZGF0aW9uKSB7XHJcblx0XHRcdFx0Y2FzZSAnbWluTGVuZ3RoJzpcclxuXHRcdFx0XHRcdHZhbHVlLmxlbmd0aCA8IHZhbGlkYXRpb25zW3ZhbGlkYXRpb25dID8gc2V0SXNNaW5MZW5ndGhFcnJvcih0cnVlKSA6IHNldElzTWluTGVuZ3RoRXJyb3IoZmFsc2UpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgJ2lzRW1wdHknOlxyXG5cdFx0XHRcdFx0dmFsdWUgPyBzZXRJc0VtcHR5KGZhbHNlKSA6IHNldElzRW1wdHkodHJ1ZSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVx0XHJcblx0XHR9XHJcblx0fSwgW3ZhbHVlXSlcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmIChpc01pbkxlbmd0aEVycm9yIHx8IGlzRW1wdHkpIHtcclxuXHRcdFx0c2V0SW5wdXRWYWxpZChmYWxzZSk7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0c2V0SW5wdXRWYWxpZCh0cnVlKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH0sIFtpc0VtcHR5LCBpc01pbkxlbmd0aEVycm9yXSlcclxuXHJcblx0XHJcblx0XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRpc0VtcHR5LFxyXG5cdFx0aXNNaW5MZW5ndGhFcnJvcixcclxuXHRcdGlucHV0VmFsaWRcclxuXHR9XHJcbn0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IEltYWdlMTtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX2hlYWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2hlYWRcIikpO1xudmFyIF90b0Jhc2U2NCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3RvLWJhc2UtNjRcIik7XG52YXIgX2ltYWdlQ29uZmlnID0gcmVxdWlyZShcIi4uL3NlcnZlci9pbWFnZS1jb25maWdcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gICAgZm9yKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24oc3ltKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xuICAgIH07XG4gICAgdmFyIHRhcmdldCA9IHtcbiAgICB9O1xuICAgIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuY29uc3QgbG9hZGVkSW1hZ2VVUkxzID0gbmV3IFNldCgpO1xuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZ2xvYmFsLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWU7XG59XG5jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUyA9IFtcbiAgICAnbGF6eScsXG4gICAgJ2VhZ2VyJyxcbiAgICB1bmRlZmluZWRcbl07XG5jb25zdCBsb2FkZXJzID0gbmV3IE1hcChbXG4gICAgW1xuICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgIGRlZmF1bHRMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2ltZ2l4JyxcbiAgICAgICAgaW1naXhMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2Nsb3VkaW5hcnknLFxuICAgICAgICBjbG91ZGluYXJ5TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdha2FtYWknLFxuICAgICAgICBha2FtYWlMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2N1c3RvbScsXG4gICAgICAgIGN1c3RvbUxvYWRlclxuICAgIF0sIFxuXSk7XG5jb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTID0gW1xuICAgICdmaWxsJyxcbiAgICAnZml4ZWQnLFxuICAgICdpbnRyaW5zaWMnLFxuICAgICdyZXNwb25zaXZlJyxcbiAgICB1bmRlZmluZWQsIFxuXTtcbmZ1bmN0aW9uIGlzU3RhdGljUmVxdWlyZShzcmMpIHtcbiAgICByZXR1cm4gc3JjLmRlZmF1bHQgIT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzU3RhdGljSW1hZ2VEYXRhKHNyYykge1xuICAgIHJldHVybiBzcmMuc3JjICE9PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc1N0YXRpY0ltcG9ydChzcmMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHNyYyA9PT0gJ29iamVjdCcgJiYgKGlzU3RhdGljUmVxdWlyZShzcmMpIHx8IGlzU3RhdGljSW1hZ2VEYXRhKHNyYykpO1xufVxuY29uc3QgeyBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMgLCBpbWFnZVNpemVzOiBjb25maWdJbWFnZVNpemVzICwgbG9hZGVyOiBjb25maWdMb2FkZXIgLCBwYXRoOiBjb25maWdQYXRoICwgZG9tYWluczogY29uZmlnRG9tYWlucyAsICB9ID0gcHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFMgfHwgX2ltYWdlQ29uZmlnLmltYWdlQ29uZmlnRGVmYXVsdDtcbi8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXMgPSBbXG4gICAgLi4uY29uZmlnRGV2aWNlU2l6ZXMsXG4gICAgLi4uY29uZmlnSW1hZ2VTaXplc1xuXTtcbmNvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsIGIpPT5hIC0gYlxuKTtcbmFsbFNpemVzLnNvcnQoKGEsIGIpPT5hIC0gYlxuKTtcbmZ1bmN0aW9uIGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcykge1xuICAgIGlmIChzaXplcyAmJiAobGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpKSB7XG4gICAgICAgIC8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0V2lkdGhSZSA9IC8oXnxcXHMpKDE/XFxkP1xcZCl2dy9nO1xuICAgICAgICBjb25zdCBwZXJjZW50U2l6ZXMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBtYXRjaDsgbWF0Y2ggPSB2aWV3cG9ydFdpZHRoUmUuZXhlYyhzaXplcyk7IG1hdGNoKXtcbiAgICAgICAgICAgIHBlcmNlbnRTaXplcy5wdXNoKHBhcnNlSW50KG1hdGNoWzJdKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBlcmNlbnRTaXplcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHNtYWxsZXN0UmF0aW8gPSBNYXRoLm1pbiguLi5wZXJjZW50U2l6ZXMpICogMC4wMTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd2lkdGhzOiBhbGxTaXplcy5maWx0ZXIoKHMpPT5zID49IGNvbmZpZ0RldmljZVNpemVzWzBdICogc21hbGxlc3RSYXRpb1xuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aHM6IGFsbFNpemVzLFxuICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInIHx8IGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aHM6IGNvbmZpZ0RldmljZVNpemVzLFxuICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHdpZHRocyA9IFtcbiAgICAgICAgLi4ubmV3IFNldCgvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuICAgICAgICAvLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbiAgICAgICAgLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4gICAgICAgIC8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4gICAgICAgIC8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4gICAgICAgIC8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbiAgICAgICAgLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4gICAgICAgIC8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcbiAgICAgICAgW1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICB3aWR0aCAqIDIgLyosIHdpZHRoICogMyovIFxuICAgICAgICBdLm1hcCgodyk9PmFsbFNpemVzLmZpbmQoKHApPT5wID49IHdcbiAgICAgICAgICAgICkgfHwgYWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoIC0gMV1cbiAgICAgICAgKSksIFxuICAgIF07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGhzLFxuICAgICAgICBraW5kOiAneCdcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7IHNyYyAsIHVub3B0aW1pemVkICwgbGF5b3V0ICwgd2lkdGggLCBxdWFsaXR5ICwgc2l6ZXMgLCBsb2FkZXIgIH0pIHtcbiAgICBpZiAodW5vcHRpbWl6ZWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgc2l6ZXM6IHVuZGVmaW5lZFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB7IHdpZHRocyAsIGtpbmQgIH0gPSBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpO1xuICAgIGNvbnN0IGxhc3QgPSB3aWR0aHMubGVuZ3RoIC0gMTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzaXplczogIXNpemVzICYmIGtpbmQgPT09ICd3JyA/ICcxMDB2dycgOiBzaXplcyxcbiAgICAgICAgc3JjU2V0OiB3aWR0aHMubWFwKCh3LCBpKT0+YCR7bG9hZGVyKHtcbiAgICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgICAgcXVhbGl0eSxcbiAgICAgICAgICAgICAgICB3aWR0aDogd1xuICAgICAgICAgICAgfSl9ICR7a2luZCA9PT0gJ3cnID8gdyA6IGkgKyAxfSR7a2luZH1gXG4gICAgICAgICkuam9pbignLCAnKSxcbiAgICAgICAgLy8gSXQncyBpbnRlbmRlZCB0byBrZWVwIGBzcmNgIHRoZSBsYXN0IGF0dHJpYnV0ZSBiZWNhdXNlIFJlYWN0IHVwZGF0ZXNcbiAgICAgICAgLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuICAgICAgICAvLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4gICAgICAgIC8vIHVwZGF0ZWQgYnkgUmVhY3QuIFRoYXQgY2F1c2VzIG11bHRpcGxlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIGlmIGBzcmNTZXRgXG4gICAgICAgIC8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuICAgICAgICAvLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbiAgICAgICAgc3JjOiBsb2FkZXIoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgcXVhbGl0eSxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aHNbbGFzdF1cbiAgICAgICAgfSlcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2V0SW50KHgpIHtcbiAgICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh4LCAxMCk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHMpIHtcbiAgICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKTtcbiAgICBpZiAobG9hZCkge1xuICAgICAgICByZXR1cm4gbG9hZChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgIHJvb3Q6IGNvbmZpZ1BhdGhcbiAgICAgICAgfSwgbG9hZGVyUHJvcHMpKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtfaW1hZ2VDb25maWcuVkFMSURfTE9BREVSUy5qb2luKCcsICcpfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWApO1xufVxuLy8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8zOTc3NzgzMy8yNjY1MzUgZm9yIHdoeSB3ZSB1c2UgdGhpcyByZWZcbi8vIGhhbmRsZXIgaW5zdGVhZCBvZiB0aGUgaW1nJ3Mgb25Mb2FkIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIGhhbmRsZUxvYWRpbmcoaW1nLCBzcmMsIGxheW91dCwgcGxhY2Vob2xkZXIsIG9uTG9hZGluZ0NvbXBsZXRlKSB7XG4gICAgaWYgKCFpbWcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBoYW5kbGVMb2FkID0gKCk9PntcbiAgICAgICAgaWYgKCFpbWcuc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSAnZGVjb2RlJyBpbiBpbWcgPyBpbWcuZGVjb2RlKCkgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIHAuY2F0Y2goKCk9PntcbiAgICAgICAgICAgIH0pLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuZmlsdGVyID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxvYWRlZEltYWdlVVJMcy5hZGQoc3JjKTtcbiAgICAgICAgICAgICAgICBpZiAob25Mb2FkaW5nQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBuYXR1cmFsV2lkdGggLCBuYXR1cmFsSGVpZ2h0ICB9ID0gaW1nO1xuICAgICAgICAgICAgICAgICAgICAvLyBQYXNzIGJhY2sgcmVhZC1vbmx5IHByaW1pdGl2ZSB2YWx1ZXMgYnV0IG5vdCB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5kZXJseWluZyBET00gZWxlbWVudCBiZWNhdXNlIGl0IGNvdWxkIGJlIG1pc3VzZWQuXG4gICAgICAgICAgICAgICAgICAgIG9uTG9hZGluZ0NvbXBsZXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdHVyYWxXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdHVyYWxIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICAgICAgICAgIGlmICgocmVmID0gaW1nLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGdldENvbXB1dGVkU3R5bGUoaW1nLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScgJiYgcGFyZW50LmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtYXkgbm90IHJlbmRlciBwcm9wZXJseSBhcyBhIGNoaWxkIG9mIGEgZmxleCBjb250YWluZXIuIENvbnNpZGVyIHdyYXBwaW5nIHRoZSBpbWFnZSB3aXRoIGEgZGl2IHRvIGNvbmZpZ3VyZSB0aGUgd2lkdGguYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpbGwnICYmIHBhcmVudC5wb3NpdGlvbiAhPT0gJ3JlbGF0aXZlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtYXkgbm90IHJlbmRlciBwcm9wZXJseSB3aXRoIGEgcGFyZW50IHVzaW5nIHBvc2l0aW9uOlwiJHtwYXJlbnQucG9zaXRpb259XCIuIENvbnNpZGVyIGNoYW5naW5nIHRoZSBwYXJlbnQgc3R5bGUgdG8gcG9zaXRpb246XCJyZWxhdGl2ZVwiIHdpdGggYSB3aWR0aCBhbmQgaGVpZ2h0LmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmIChpbWcuY29tcGxldGUpIHtcbiAgICAgICAgLy8gSWYgdGhlIHJlYWwgaW1hZ2UgZmFpbHMgdG8gbG9hZCwgdGhpcyB3aWxsIHN0aWxsIHJlbW92ZSB0aGUgcGxhY2Vob2xkZXIuXG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIGRlc2lyZWQgYmVoYXZpb3IgZm9yIG5vdywgYW5kIHdpbGwgYmUgcmV2aXNpdGVkIHdoZW4gZXJyb3JcbiAgICAgICAgLy8gaGFuZGxpbmcgaXMgd29ya2VkIG9uIGZvciB0aGUgaW1hZ2UgY29tcG9uZW50IGl0c2VsZi5cbiAgICAgICAgaGFuZGxlTG9hZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGltZy5vbmxvYWQgPSBoYW5kbGVMb2FkO1xuICAgIH1cbn1cbmZ1bmN0aW9uIEltYWdlMShfcGFyYW0pIHtcbiAgICB2YXIgeyBzcmMgLCBzaXplcyAsIHVub3B0aW1pemVkID1mYWxzZSAsIHByaW9yaXR5ID1mYWxzZSAsIGxvYWRpbmcgLCBsYXp5Qm91bmRhcnkgPScyMDBweCcgLCBjbGFzc05hbWUgLCBxdWFsaXR5ICwgd2lkdGggLCBoZWlnaHQgLCBvYmplY3RGaXQgLCBvYmplY3RQb3NpdGlvbiAsIG9uTG9hZGluZ0NvbXBsZXRlICwgbG9hZGVyID1kZWZhdWx0SW1hZ2VMb2FkZXIgLCBwbGFjZWhvbGRlciA9J2VtcHR5JyAsIGJsdXJEYXRhVVJMICB9ID0gX3BhcmFtLCBhbGwgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3BhcmFtLCBbXCJzcmNcIiwgXCJzaXplc1wiLCBcInVub3B0aW1pemVkXCIsIFwicHJpb3JpdHlcIiwgXCJsb2FkaW5nXCIsIFwibGF6eUJvdW5kYXJ5XCIsIFwiY2xhc3NOYW1lXCIsIFwicXVhbGl0eVwiLCBcIndpZHRoXCIsIFwiaGVpZ2h0XCIsIFwib2JqZWN0Rml0XCIsIFwib2JqZWN0UG9zaXRpb25cIiwgXCJvbkxvYWRpbmdDb21wbGV0ZVwiLCBcImxvYWRlclwiLCBcInBsYWNlaG9sZGVyXCIsIFwiYmx1ckRhdGFVUkxcIl0pO1xuICAgIGxldCByZXN0ID0gYWxsO1xuICAgIGxldCBsYXlvdXQgPSBzaXplcyA/ICdyZXNwb25zaXZlJyA6ICdpbnRyaW5zaWMnO1xuICAgIGlmICgnbGF5b3V0JyBpbiByZXN0KSB7XG4gICAgICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG4gICAgICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXQ7XG4gICAgICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICAgICAgZGVsZXRlIHJlc3RbJ2xheW91dCddO1xuICAgIH1cbiAgICBsZXQgc3RhdGljU3JjID0gJyc7XG4gICAgaWYgKGlzU3RhdGljSW1wb3J0KHNyYykpIHtcbiAgICAgICAgY29uc3Qgc3RhdGljSW1hZ2VEYXRhID0gaXNTdGF0aWNSZXF1aXJlKHNyYykgPyBzcmMuZGVmYXVsdCA6IHNyYztcbiAgICAgICAgaWYgKCFzdGF0aWNJbWFnZURhdGEuc3JjKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgc3JjLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgYmx1ckRhdGFVUkwgPSBibHVyRGF0YVVSTCB8fCBzdGF0aWNJbWFnZURhdGEuYmx1ckRhdGFVUkw7XG4gICAgICAgIHN0YXRpY1NyYyA9IHN0YXRpY0ltYWdlRGF0YS5zcmM7XG4gICAgICAgIGlmICghbGF5b3V0IHx8IGxheW91dCAhPT0gJ2ZpbGwnKSB7XG4gICAgICAgICAgICBoZWlnaHQgPSBoZWlnaHQgfHwgc3RhdGljSW1hZ2VEYXRhLmhlaWdodDtcbiAgICAgICAgICAgIHdpZHRoID0gd2lkdGggfHwgc3RhdGljSW1hZ2VEYXRhLndpZHRoO1xuICAgICAgICAgICAgaWYgKCFzdGF0aWNJbWFnZURhdGEuaGVpZ2h0IHx8ICFzdGF0aWNJbWFnZURhdGEud2lkdGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgaGVpZ2h0IGFuZCB3aWR0aC4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHNyYyA9IHR5cGVvZiBzcmMgPT09ICdzdHJpbmcnID8gc3JjIDogc3RhdGljU3JjO1xuICAgIGNvbnN0IHdpZHRoSW50ID0gZ2V0SW50KHdpZHRoKTtcbiAgICBjb25zdCBoZWlnaHRJbnQgPSBnZXRJbnQoaGVpZ2h0KTtcbiAgICBjb25zdCBxdWFsaXR5SW50ID0gZ2V0SW50KHF1YWxpdHkpO1xuICAgIGxldCBpc0xhenkgPSAhcHJpb3JpdHkgJiYgKGxvYWRpbmcgPT09ICdsYXp5JyB8fCB0eXBlb2YgbG9hZGluZyA9PT0gJ3VuZGVmaW5lZCcpO1xuICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSB8fCBzcmMuc3RhcnRzV2l0aCgnYmxvYjonKSkge1xuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xuICAgICAgICB1bm9wdGltaXplZCA9IHRydWU7XG4gICAgICAgIGlzTGF6eSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9hZGVkSW1hZ2VVUkxzLmhhcyhzcmMpKSB7XG4gICAgICAgIGlzTGF6eSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgICAgICBxdWFsaXR5XG4gICAgICAgICAgICB9KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTih3aWR0aEludCkgfHwgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYU4oaGVpZ2h0SW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwid2lkdGhcIiBvciBcImhlaWdodFwiIHByb3BlcnR5LiBUaGVzZSBzaG91bGQgYmUgbnVtZXJpYyB2YWx1ZXMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnICYmICh3aWR0aCB8fCBoZWlnaHQpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgYW5kIFwibGF5b3V0PSdmaWxsJ1wiIGhhcyB1bnVzZWQgcHJvcGVydGllcyBhc3NpZ25lZC4gUGxlYXNlIHJlbW92ZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJpb3JpdHkgJiYgbG9hZGluZyA9PT0gJ2xhenknKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYWNlaG9sZGVyID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgIGlmIChsYXlvdXQgIT09ICdmaWxsJyAmJiAod2lkdGhJbnQgfHwgMCkgKiAoaGVpZ2h0SW50IHx8IDApIDwgMTYwMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBzbWFsbGVyIHRoYW4gNDB4NDAuIENvbnNpZGVyIHJlbW92aW5nIHRoZSBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IHRvIGltcHJvdmUgcGVyZm9ybWFuY2UuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWJsdXJEYXRhVVJMKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgVkFMSURfQkxVUl9FWFQgPSBbXG4gICAgICAgICAgICAgICAgICAgICdqcGVnJyxcbiAgICAgICAgICAgICAgICAgICAgJ3BuZycsXG4gICAgICAgICAgICAgICAgICAgICd3ZWJwJ1xuICAgICAgICAgICAgICAgIF0gLy8gc2hvdWxkIG1hdGNoIG5leHQtaW1hZ2UtbG9hZGVyXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSBidXQgaXMgbWlzc2luZyB0aGUgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LlxuICAgICAgICAgIFBvc3NpYmxlIHNvbHV0aW9uczpcbiAgICAgICAgICAgIC0gQWRkIGEgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LCB0aGUgY29udGVudHMgc2hvdWxkIGJlIGEgc21hbGwgRGF0YSBVUkwgdG8gcmVwcmVzZW50IHRoZSBpbWFnZVxuICAgICAgICAgICAgLSBDaGFuZ2UgdGhlIFwic3JjXCIgcHJvcGVydHkgdG8gYSBzdGF0aWMgaW1wb3J0IHdpdGggb25lIG9mIHRoZSBzdXBwb3J0ZWQgZmlsZSB0eXBlczogJHtWQUxJRF9CTFVSX0VYVC5qb2luKCcsJyl9XG4gICAgICAgICAgICAtIFJlbW92ZSB0aGUgXCJwbGFjZWhvbGRlclwiIHByb3BlcnR5LCBlZmZlY3RpdmVseSBubyBibHVyIGVmZmVjdFxuICAgICAgICAgIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcGxhY2Vob2xkZXItYmx1ci1kYXRhLXVybGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgncmVmJyBpbiByZXN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJyZWZcIiBwcm9wZXJ0eS4gQ29uc2lkZXIgdXNpbmcgdGhlIFwib25Mb2FkaW5nQ29tcGxldGVcIiBwcm9wZXJ0eSBpbnN0ZWFkLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICgnc3R5bGUnIGluIHJlc3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyB1c2luZyB1bnN1cHBvcnRlZCBcInN0eWxlXCIgcHJvcGVydHkuIFBsZWFzZSB1c2UgdGhlIFwiY2xhc3NOYW1lXCIgcHJvcGVydHkgaW5zdGVhZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCkgKyAxMDA7XG4gICAgICAgIGlmICghdW5vcHRpbWl6ZWQgJiYgIWxvYWRlcih7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICB3aWR0aDogcmFuZCxcbiAgICAgICAgICAgIHF1YWxpdHk6IDc1XG4gICAgICAgIH0pLmluY2x1ZGVzKHJhbmQudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYSBcImxvYWRlclwiIHByb3BlcnR5IHRoYXQgZG9lcyBub3QgaW1wbGVtZW50IHdpZHRoLiBQbGVhc2UgaW1wbGVtZW50IGl0IG9yIHVzZSB0aGUgXCJ1bm9wdGltaXplZFwiIHByb3BlcnR5IGluc3RlYWQuYCArIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXItd2lkdGhgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBbc2V0UmVmLCBpc0ludGVyc2VjdGVkXSA9ICgwLCBfdXNlSW50ZXJzZWN0aW9uKS51c2VJbnRlcnNlY3Rpb24oe1xuICAgICAgICByb290TWFyZ2luOiBsYXp5Qm91bmRhcnksXG4gICAgICAgIGRpc2FibGVkOiAhaXNMYXp5XG4gICAgfSk7XG4gICAgY29uc3QgaXNWaXNpYmxlID0gIWlzTGF6eSB8fCBpc0ludGVyc2VjdGVkO1xuICAgIGxldCB3cmFwcGVyU3R5bGU7XG4gICAgbGV0IHNpemVyU3R5bGU7XG4gICAgbGV0IHNpemVyU3ZnO1xuICAgIGxldCBpbWdTdHlsZSA9IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG1heEhlaWdodDogJzEwMCUnLFxuICAgICAgICBvYmplY3RGaXQsXG4gICAgICAgIG9iamVjdFBvc2l0aW9uXG4gICAgfTtcbiAgICBjb25zdCBibHVyU3R5bGUgPSBwbGFjZWhvbGRlciA9PT0gJ2JsdXInID8ge1xuICAgICAgICBmaWx0ZXI6ICdibHVyKDIwcHgpJyxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IG9iamVjdEZpdCB8fCAnY292ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke2JsdXJEYXRhVVJMfVwiKWAsXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogb2JqZWN0UG9zaXRpb24gfHwgJzAlIDAlJ1xuICAgIH0gOiB7XG4gICAgfTtcbiAgICBpZiAobGF5b3V0ID09PSAnZmlsbCcpIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbiAgICAgICAgY29uc3QgcXVvdGllbnQgPSBoZWlnaHRJbnQgLyB3aWR0aEludDtcbiAgICAgICAgY29uc3QgcGFkZGluZ1RvcCA9IGlzTmFOKHF1b3RpZW50KSA/ICcxMDAlJyA6IGAke3F1b3RpZW50ICogMTAwfSVgO1xuICAgICAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnaW50cmluc2ljJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdmcgPSBgPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YDtcbiAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaXhlZCcpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRJbnRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBpbWdBdHRyaWJ1dGVzID0ge1xuICAgICAgICBzcmM6ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLFxuICAgICAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgc2l6ZXM6IHVuZGVmaW5lZFxuICAgIH07XG4gICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgICBpbWdBdHRyaWJ1dGVzID0gZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgICAgICBzaXplcyxcbiAgICAgICAgICAgIGxvYWRlclxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGV0IHNyY1N0cmluZyA9IHNyYztcbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHdyYXBwZXJTdHlsZVxuICAgIH0sIHNpemVyU3R5bGUgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBzdHlsZTogc2l6ZXJTdHlsZVxuICAgIH0sIHNpemVyU3ZnID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICBwYWRkaW5nOiAwXG4gICAgICAgIH0sXG4gICAgICAgIGFsdDogXCJcIixcbiAgICAgICAgXCJhcmlhLWhpZGRlblwiOiB0cnVlLFxuICAgICAgICBzcmM6IGBkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7KDAsIF90b0Jhc2U2NCkudG9CYXNlNjQoc2l6ZXJTdmcpfWBcbiAgICB9KSA6IG51bGwpIDogbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIH0sIHJlc3QsIGltZ0F0dHJpYnV0ZXMsIHtcbiAgICAgICAgZGVjb2Rpbmc6IFwiYXN5bmNcIixcbiAgICAgICAgXCJkYXRhLW5pbWdcIjogbGF5b3V0LFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgcmVmOiAoaW1nKT0+e1xuICAgICAgICAgICAgc2V0UmVmKGltZyk7XG4gICAgICAgICAgICBoYW5kbGVMb2FkaW5nKGltZywgc3JjU3RyaW5nLCBsYXlvdXQsIHBsYWNlaG9sZGVyLCBvbkxvYWRpbmdDb21wbGV0ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgfSwgaW1nU3R5bGUsIGJsdXJTdHlsZSlcbiAgICB9KSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCBPYmplY3QuYXNzaWduKHtcbiAgICB9LCByZXN0LCBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgc3JjLFxuICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgbGF5b3V0LFxuICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgIHNpemVzLFxuICAgICAgICBsb2FkZXJcbiAgICB9KSwge1xuICAgICAgICBkZWNvZGluZzogXCJhc3luY1wiLFxuICAgICAgICBcImRhdGEtbmltZ1wiOiBsYXlvdXQsXG4gICAgICAgIHN0eWxlOiBpbWdTdHlsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIGxvYWRpbmc6IGxvYWRpbmcgfHwgJ2xhenknXG4gICAgfSkpKSwgcHJpb3JpdHkgPyAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4gICAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4gICAgLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuICAgIC8vXG4gICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG4gICAgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICBrZXk6ICdfX25pbWctJyArIGltZ0F0dHJpYnV0ZXMuc3JjICsgaW1nQXR0cmlidXRlcy5zcmNTZXQgKyBpbWdBdHRyaWJ1dGVzLnNpemVzLFxuICAgICAgICByZWw6IFwicHJlbG9hZFwiLFxuICAgICAgICBhczogXCJpbWFnZVwiLFxuICAgICAgICBocmVmOiBpbWdBdHRyaWJ1dGVzLnNyY1NldCA/IHVuZGVmaW5lZCA6IGltZ0F0dHJpYnV0ZXMuc3JjLFxuICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZS5cbiAgICAgICAgaW1hZ2VzcmNzZXQ6IGltZ0F0dHJpYnV0ZXMuc3JjU2V0LFxuICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlLlxuICAgICAgICBpbWFnZXNpemVzOiBpbWdBdHRyaWJ1dGVzLnNpemVzXG4gICAgfSkpIDogbnVsbCkpO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYykge1xuICAgIHJldHVybiBzcmNbMF0gPT09ICcvJyA/IHNyYy5zbGljZSgxKSA6IHNyYztcbn1cbmZ1bmN0aW9uIGltZ2l4TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/YXV0bz1mb3JtYXQmZml0PW1heCZ3PTMwMFxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfWApO1xuICAgIGNvbnN0IHBhcmFtcyA9IHVybC5zZWFyY2hQYXJhbXM7XG4gICAgcGFyYW1zLnNldCgnYXV0bycsIHBhcmFtcy5nZXQoJ2F1dG8nKSB8fCAnZm9ybWF0Jyk7XG4gICAgcGFyYW1zLnNldCgnZml0JywgcGFyYW1zLmdldCgnZml0JykgfHwgJ21heCcpO1xuICAgIHBhcmFtcy5zZXQoJ3cnLCBwYXJhbXMuZ2V0KCd3JykgfHwgd2lkdGgudG9TdHJpbmcoKSk7XG4gICAgaWYgKHF1YWxpdHkpIHtcbiAgICAgICAgcGFyYW1zLnNldCgncScsIHF1YWxpdHkudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIHJldHVybiB1cmwuaHJlZjtcbn1cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAgfSkge1xuICAgIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gO1xufVxuZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICAvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuICAgIGNvbnN0IHBhcmFtcyA9IFtcbiAgICAgICAgJ2ZfYXV0bycsXG4gICAgICAgICdjX2xpbWl0JyxcbiAgICAgICAgJ3dfJyArIHdpZHRoLFxuICAgICAgICAncV8nICsgKHF1YWxpdHkgfHwgJ2F1dG8nKVxuICAgIF07XG4gICAgbGV0IHBhcmFtc1N0cmluZyA9IHBhcmFtcy5qb2luKCcsJykgKyAnLyc7XG4gICAgcmV0dXJuIGAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gO1xufVxuZnVuY3Rpb24gY3VzdG9tTG9hZGVyKHsgc3JjICB9KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIG1pc3NpbmcgXCJsb2FkZXJcIiBwcm9wLmAgKyBgXFxuUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLW1pc3NpbmctbG9hZGVyYCk7XG59XG5mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdWYWx1ZXMgPSBbXTtcbiAgICAgICAgLy8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG4gICAgICAgIGlmICghc3JjKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpO1xuICAgICAgICBpZiAoIXdpZHRoKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJyk7XG4gICAgICAgIGlmIChtaXNzaW5nVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oJywgJyl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgcXVhbGl0eVxuICAgICAgICAgICAgfSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNyYy5zdGFydHNXaXRoKCcvLycpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc3JjLnN0YXJ0c1dpdGgoJy8nKSAmJiBjb25maWdEb21haW5zKSB7XG4gICAgICAgICAgICBsZXQgcGFyc2VkU3JjO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJiAhY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gICsgYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YDtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oY2IpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYih7XG4gICAgICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgMSk7XG59O1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcbmNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn07XG5leHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IGNhbmNlbElkbGVDYWxsYmFjaztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VJbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb247XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHsgcm9vdE1hcmdpbiAsIGRpc2FibGVkICB9KSB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICBjb25zdCB1bm9ic2VydmUgPSAoMCwgX3JlYWN0KS51c2VSZWYoKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSAoMCwgX3JlYWN0KS51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2V0UmVmID0gKDAsIF9yZWFjdCkudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KCk7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm47XG4gICAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoZWwsIChpc1Zpc2libGUpPT5pc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpXG4gICAgICAgICAgICAsIHtcbiAgICAgICAgICAgICAgICByb290TWFyZ2luXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgaXNEaXNhYmxlZCxcbiAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKT0+KDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5jYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgIHJldHVybiBbXG4gICAgICAgIHNldFJlZixcbiAgICAgICAgdmlzaWJsZVxuICAgIF07XG59XG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpZCAsIG9ic2VydmVyICwgZWxlbWVudHMgIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKTtcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICAgICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJztcbiAgICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcyk9PntcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSk9PntcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgb2JzZXJ2ZXJzLnNldChpZCwgaW5zdGFuY2UgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBvYnNlcnZlcixcbiAgICAgICAgZWxlbWVudHNcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvaW5kZXgubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXJcIjtcclxuaW1wb3J0IE1haW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFpblwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhci9IZWFkZXJcIjtcclxuXHJcblxyXG5cclxuY29uc3QgSW5kZXg6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG5cclxuXHRcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcblx0XHRcdDxIZWFkZXI+PC9IZWFkZXI+XHJcblx0XHRcdDxNYWluPjwvTWFpbj5cclxuXHRcdFx0PEZvb3Rlcj48L0Zvb3Rlcj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvb3RlclwiOiBcIkZvb3Rlcl9mb290ZXJfXzFLVzE3XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwiSGVhZGVyX3dyYXBwZXJfX0pSZ0pBXCIsXG5cdFwiX2NvbnRhaW5lclwiOiBcIkhlYWRlcl9fY29udGFpbmVyX18zRWlVLVwiLFxuXHRcImhlYWRlclwiOiBcIkhlYWRlcl9oZWFkZXJfXzItWFdYXCIsXG5cdFwiaGVhZGVyX19jb250YWluZXJcIjogXCJIZWFkZXJfaGVhZGVyX19jb250YWluZXJfXzQtWEpJXCIsXG5cdFwiaGVhZGVyX19sb2dvXCI6IFwiSGVhZGVyX2hlYWRlcl9fbG9nb19fRTF5bDFcIixcblx0XCJoZWFkZXJfX2xvZ29faWNvblwiOiBcIkhlYWRlcl9oZWFkZXJfX2xvZ29faWNvbl9fMjBVdEpcIixcblx0XCJoZWFkZXJfX2xvZ29faWNvbl9faW1nXCI6IFwiSGVhZGVyX2hlYWRlcl9fbG9nb19pY29uX19pbWdfX0hMT0hCXCIsXG5cdFwiaGVhZGVyX19sb2dvX3RleHRcIjogXCJIZWFkZXJfaGVhZGVyX19sb2dvX3RleHRfXzNTdTNhXCIsXG5cdFwiaGVhZGVyX19idXNrZXRcIjogXCJIZWFkZXJfaGVhZGVyX19idXNrZXRfXzJtbjhRXCIsXG5cdFwiaGVhZGVyX19idXNrZXRfdGV4dFwiOiBcIkhlYWRlcl9oZWFkZXJfX2J1c2tldF90ZXh0X18xeTJxSFwiLFxuXHRcImhlYWRlcl9fYnVza2V0X2ljb25cIjogXCJIZWFkZXJfaGVhZGVyX19idXNrZXRfaWNvbl9fTGl4QllcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyYXBwZXJcIjogXCJNYWluX3dyYXBwZXJfXzJuSmxtXCIsXG5cdFwiX2NvbnRhaW5lclwiOiBcIk1haW5fX2NvbnRhaW5lcl9fM29RNjNcIixcblx0XCJwYWdlXCI6IFwiTWFpbl9wYWdlX18xYUFWVVwiLFxuXHRcInBhZ2VfX21haW5cIjogXCJNYWluX3BhZ2VfX21haW5fX0FyeF84XCIsXG5cdFwibWFpblwiOiBcIk1haW5fbWFpbl9fNkRQaURcIixcblx0XCJtYWluX19ib2R5XCI6IFwiTWFpbl9tYWluX19ib2R5X18yVzA2aVwiLFxuXHRcIm1haW5fX2JvZHlfX2NvbnRhaW5lclwiOiBcIk1haW5fbWFpbl9fYm9keV9fY29udGFpbmVyX19mQldiSlwiLFxuXHRcIm1haW5fX2Zvcm1cIjogXCJNYWluX21haW5fX2Zvcm1fXzF5T01lXCIsXG5cdFwibWFpbl9fZm9ybV9fdGFic1wiOiBcIk1haW5fbWFpbl9fZm9ybV9fdGFic19fM3M2RmRcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyYXBwZXJcIjogXCJQcm9kdWN0c193cmFwcGVyX18xbkkzQ1wiLFxuXHRcIl9jb250YWluZXJcIjogXCJQcm9kdWN0c19fY29udGFpbmVyX18xSEktYVwiLFxuXHRcIm1haW5fX3Byb2R1Y3RzXCI6IFwiUHJvZHVjdHNfbWFpbl9fcHJvZHVjdHNfX3RKQ1kyXCIsXG5cdFwicHJvZHVjdHNcIjogXCJQcm9kdWN0c19wcm9kdWN0c19fMkh2R1NcIixcblx0XCJwcm9kdWN0c19fdGV4dFwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RzX190ZXh0X19vREVRNVwiLFxuXHRcInByb2R1Y3RzX190ZXh0X3RpdGxlXCI6IFwiUHJvZHVjdHNfcHJvZHVjdHNfX3RleHRfdGl0bGVfXzJlMVlUXCIsXG5cdFwicHJvZHVjdHNfX3RleHRfZWRpdFwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RzX190ZXh0X2VkaXRfXzFuVjZqXCIsXG5cdFwicHJvZHVjdHNfX3Byb2R1Y3RcIjogXCJQcm9kdWN0c19wcm9kdWN0c19fcHJvZHVjdF9fMk5GVlpcIixcblx0XCJwcm9kdWN0c19fY29zdFwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RzX19jb3N0X18xMEpWc1wiLFxuXHRcInByb2R1Y3RzX19pbmZvcm1hdGlvblwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RzX19pbmZvcm1hdGlvbl9fM3haRUJcIixcblx0XCJwcm9kdWN0XCI6IFwiUHJvZHVjdHNfcHJvZHVjdF9fRUhVeU1cIixcblx0XCJwcm9kdWN0X19pbWFnZVwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RfX2ltYWdlX18xQ2haTlwiLFxuXHRcInByb2R1Y3RfX2NvbnRlbnRcIjogXCJQcm9kdWN0c19wcm9kdWN0X19jb250ZW50X18zcHhSVVwiLFxuXHRcInByb2R1Y3RfX2NvbnRlbnRfbmFtZVwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RfX2NvbnRlbnRfbmFtZV9fM1d2Y2VcIixcblx0XCJwcm9kdWN0X19jb250ZW50X2Rlc2NyaXB0aW9uXCI6IFwiUHJvZHVjdHNfcHJvZHVjdF9fY29udGVudF9kZXNjcmlwdGlvbl9fMkNqclJcIixcblx0XCJwcm9kdWN0X19jb250ZW50X3F1YW50aXR5XCI6IFwiUHJvZHVjdHNfcHJvZHVjdF9fY29udGVudF9xdWFudGl0eV9fcUJYSVFcIixcblx0XCJwcm9kdWN0X19wcmljZVwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RfX3ByaWNlX18yTjZjMFwiLFxuXHRcImNvc3RfX3N1YnRvdGFsXCI6IFwiUHJvZHVjdHNfY29zdF9fc3VidG90YWxfX0ZWZEdPXCIsXG5cdFwiY29zdF9fc2hpcHBpbmdcIjogXCJQcm9kdWN0c19jb3N0X19zaGlwcGluZ19fdWRiVWZcIixcblx0XCJjb3N0X190YXhlc1wiOiBcIlByb2R1Y3RzX2Nvc3RfX3RheGVzX19fOERLM1wiLFxuXHRcImNvc3RfX3RvdGFsXCI6IFwiUHJvZHVjdHNfY29zdF9fdG90YWxfXzFLTlNIXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwic3R5bGVzX3dyYXBwZXJfXzFDcFJPXCIsXG5cdFwiX2NvbnRhaW5lclwiOiBcInN0eWxlc19fY29udGFpbmVyX18xaHhFMlwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJVQUFBQVFDQVlBQUFENTJqUWxBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBSDFTVVJCVkhnQnJaUXhiOU5BSE1YZjNkbU5xZTNVbFdncEVvUDVCSGhpSlJJTENBbkN6SUQ0QW9RZHBMQXdJakd6UkJGQ2JFbEprWkJLSU9uQWdwRHFTbnlBTWhSRmFsRU1iY3pGOXZtNGxGQ0NFNURTOUUyKzk3dDc5L2RmZDBlYVp1T2RKQ0JFU3BsU2NwN0ZySENaWC91TWsxTFRYQ3MxelZlM01hTzAwWUVreVJZQks2M2JEY0xVbUVLQUlUM2lRamtZT2lJVHhJYWVIb3YyWDZHYUJsL0UwdE1KVm9FWSt1SGtQOHZwY09tQTBCSENmaGNsWlRIUmFSZFp0Zk8xVFJ4VFRidFJlVzNVWFpvRk9SbjU3ODNuSG80aEtsUDNLcis1UFJiS0NQd2NTeTloU20wNkZjZGlCNy9DeDdjVEd3Umk2a290Y0crQjlkb1RReThHdDN4QzRHSktMZWo3Ri9McHQvYmdXNXM0UTZWK2NwNTZKa1JnSUlCajhDUFU0U3ZLTWNDNUFTaC9CUndPT3NpUi9VSWZ0RG94dEdYVm5zU2kzOVZaY2plbEVTaVpJNUdJWWRLKzVLbEdCRlZIS3A1RHlBelZLUU83cEtmK041SEw4bXV3R0R3TXhncHNPWFYzM1dyVU1hT3lQUTNVRytBT3pocG1FTWthVGJ0ZWhHUWxkVVdkVTR5N0pnbURlZEtIeFhyYjh3aGhNSTZEMU1KT2RCWjd3aWwwa3VXMnVrcWV5WHFyMThNcmQvNjcyMXRycmZ6R2ZubmpvL09zdUpXdmxMTzh1L1RJKzNMNjhXR3JQdGd2YXFPTS9pczAwcEtxZW1IdWZVL3NjaGlobXVXTHUvZjlKVzNQK1hIbVFldWNzYk14eW40Q1NFbTg0cG1nR1M4QUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJvQUFBQWFDQVlBQUFDcFNrek9BQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBS2lTVVJCVkhnQnRaVkJhTk5RR01lLzk1cTBDZE9SNldTYlhxSVhtWmZaM1haeTNjM1QxcU1YMjRrSVE1QU9CTm5CdFJXR2lJZDJJSTdwSVdNT2RwQlo5VElRWEtZd3BoNHNlSmlpUW9JWGh4UE1IRE5wMHZlZXlXQmpMVzFXYmZzN3Z1Ly84dWU5Ly9lK0FEU0JXZUdOOW9CL2R4YWF5V05CVGMwRlY1VHlkUTRheVBPV0YzR0h3RVVIMndQbE5RUU5RcFZ5c21rTGFvRkNKR3FkMTh2ckdCb0ZBUlVCbmFsazBqQldXdWRUcjFzV0ZEOU4zUm5sSlNWZW9EUm04Ny9EZnJxNk12b29UY2tPRTk1dkY2QzN6eHJXL2JSMW5ZaEhvRElnNlQ3cnNnNy93NWYycWY2RE5OK09aREpmcFhzbHVlU2tuRlJOWDlKMTduMzNyN1U5VkJGaDQrRERqMk8zNHdHZ1ExdmdqTzVmNXd0aS9JbWdhblBDMjFqNW5wMk1WcVY1bVFPbWNNeVdRNGpHenhpWFhsVXpNVHVUc2tXQ2VjdkI0UzVqVEMrdnp3dXFYS1Rpa3NsQ215UWdSRWVzN2gwTmVubG9JUlhFSkJha3preVFzeWZEeHJBQlBwZ2Q0NXBGK1d6YnhzMUpQOTBVbjNlN1VVeGFURmcyS1V1anBjTTVqUWNIT0lkRStxd0x1dDltMG5ValM0b2NDMjVNakVJTlpBS2ZzaVlScjdsZmorS0JyZWhKcjNOd2lLcjUxaG5GYTlsS202eU9zUVF3R09TZDdmUkJCbytFMWY1cFBxOWhCRDBjNEVnU1RqemJlMGR1SThnWWNNdzlYVElBaFZ1bmphdXAzWnFYQzJKVVpjaU9pT3QzOUdvR2k4S2l2STFFeGFRaDJTU2grSlZpNzE3V2UxM25acVAzR0xFMEF1Y1VoekhiWGY4bEpTV0hZaFVveS9xWmVKQUFHa0tNTFJkRks3emZwQ1orSHAzSWJyYW5NbEFudnBOaHZmMXVBcUhpSUhXWTd4eXJoYXF6N250blJnWkNWWERzU0tYMzhxOVUvQjlwa2lMWk5uTG5HTXMyd3NTajR0VVIvTWZMNU9ueGpldVQwQ3pXcE9uRTU3YjdHalNZa2hONWI0bWhZcEl3V25mNHZrYkF2RnhRb3RzWTBhR1pmSkJtejBHVCtBdjFtaG9sY2hzSzBRQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3RvLWJhc2UtNjQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIkZvb3RlciIsImZvb3RlciIsIlByb2R1Y3RzIiwiVGFicyIsIk1haW4iLCJwcm9kdWN0cyIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJwYWdlIiwicGFnZV9fbWFpbiIsIm1haW4iLCJtYWluX19jb250YWluZXIiLCJfY29udGFpbmVyIiwibWFpbl9fYm9keSIsIm1haW5fX2JvZHlfX2NvbnRhaW5lciIsIm1haW5fX2Zvcm0iLCJsb2dvIiwiaWNvbiIsIkhlYWRlciIsImhlYWRlciIsImhlYWRlcl9fY29udGFpbmVyIiwiaGVhZGVyX19sb2dvIiwiaGVhZGVyX19sb2dvX2ljb24iLCJoZWFkZXJfX2xvZ29fdGV4dCIsImhlYWRlcl9fYnVza2V0IiwiaGVhZGVyX19idXNrZXRfdGV4dCIsImhlYWRlcl9fYnVza2V0X2ljb24iLCJ1c2VTdGF0ZSIsIkltYWdlIiwic2VsZWN0ZWRQcm9kdWN0cyIsInNldFNlbGVjdGVkUHJvZHVjdHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm1haW5fX3Byb2R1Y3RzIiwicHJvZHVjdHNfX3RleHQiLCJwcm9kdWN0c19fdGV4dF90aXRsZSIsInByb2R1Y3RzX190ZXh0X2VkaXQiLCJwcm9kdWN0c19faXRlbXMiLCJtYXAiLCJwcm9kdWN0IiwicHJvZHVjdHNfX3Byb2R1Y3QiLCJwcm9kdWN0X19pbWFnZSIsInByb2R1Y3RfX2NvbnRlbnQiLCJwcm9kdWN0X19jb250ZW50X25hbWUiLCJwcm9kdWN0X19jb250ZW50X2Rlc2NyaXB0aW9uIiwicHJvZHVjdF9fY29udGVudF9xdWFudGl0eSIsInByb2R1Y3RfX3ByaWNlIiwicHJvZHVjdHNfX2Nvc3QiLCJjb3N0X19zdWJ0b3RhbCIsInN1YnRvdGFsX190ZXh0Iiwic3VidG90YWxfX2NvdW50IiwicmVkdWNlIiwiYWNjIiwiY3VyIiwiY29zdF9fc2hpcHBpbmciLCJzaGlwcGluZ19fdGV4dCIsInNoaXBwaW5nX19jb3VudCIsImNvc3RfX3RheGVzIiwidGF4ZXNfX3RleHQiLCJ0YXhlc19fY291bnQiLCJjb3N0X190b3RhbCIsInRvdGFsX190ZXh0IiwidG90YWxfX2NvdW50IiwicHJvZHVjdHNfX2luZm9ybWF0aW9uIiwidXNlRWZmZWN0IiwidXNlR2VvbG9jYXRpb24iLCJ1c2VJZGVudGlmaWNhdGlvbkNhcmQiLCJ1c2VJbnB1dCIsInRvZ2dsZUNsYXNzIiwic2V0VG9nZ2xlQ2xhc3MiLCJjYXJkVHlwZSIsInNldENhcmRUeXBlIiwiZnVsbF9uYW1lIiwiaXNFbXB0eSIsIm1pbkxlbmd0aCIsInN0cmVldCIsInBob25lIiwiYXB0IiwiY2l0eSIsImNvdW50cnkiLCJ6aXAiLCJiIiwiY2FyZCIsInZhbHVlIiwiZ2VvIiwiaXNOZXh0IiwiaXNNaW5MZW5ndGhFcnJvciIsImUiLCJvbkNoYW5nZSIsIm9uQmx1ciIsImJhY2tncm91bmRDb2xvciIsInVuZGVmaW5lZCIsImlucHV0VmFsaWQiLCJjdXJzb3IiLCJzZXRDaXR5Iiwic2V0Q291bnRyeSIsInNldFppcCIsInN1Y2Nlc3NDYWxsYmFjayIsInVybCIsImZldGNoIiwidGhlbiIsImQiLCJqc29uIiwicmVzIiwiY291bnRyeV9uYW1lIiwicG9zdGFsIiwiZXJyb3JDYWxsYmFjayIsImVycm9yIiwiY29uc29sZSIsInJlZ2V4IiwiUmVnRXhwIiwibWF0Y2giLCJ0ZXN0IiwidXNlVmFsaWRhdGlvbiIsImluaXRpYWxWYWx1ZSIsInZhbGlkYXRpb25zIiwic2V0VmFsdWUiLCJpc0RpcnR5Iiwic2V0SXNEaXJ0eSIsInNldElzTmV4dCIsInZhbGlkIiwidGFyZ2V0Iiwib25DbGljayIsInByZXZlbnREZWZhdWx0Iiwic2V0SXNFbXB0eSIsInNldElzTWluTGVuZ3RoRXJyb3IiLCJzZXRJbnB1dFZhbGlkIiwidmFsaWRhdGlvbiIsImxlbmd0aCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsImRlZmF1bHQiLCJJbWFnZTEiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9oZWFkIiwiX3RvQmFzZTY0IiwiX2ltYWdlQ29uZmlnIiwiX3VzZUludGVyc2VjdGlvbiIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl9fZXNNb2R1bGUiLCJfb2JqZWN0U3ByZWFkIiwiaSIsImFyZ3VtZW50cyIsInNvdXJjZSIsIm93bktleXMiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiY29uY2F0IiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZm9yRWFjaCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsImV4Y2x1ZGVkIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJzb3VyY2VTeW1ib2xLZXlzIiwiaW5kZXhPZiIsInByb3RvdHlwZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiY2FsbCIsInNvdXJjZUtleXMiLCJsb2FkZWRJbWFnZVVSTHMiLCJTZXQiLCJnbG9iYWwiLCJfX05FWFRfSU1BR0VfSU1QT1JURUQiLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsImxvYWRlcnMiLCJNYXAiLCJkZWZhdWx0TG9hZGVyIiwiaW1naXhMb2FkZXIiLCJjbG91ZGluYXJ5TG9hZGVyIiwiYWthbWFpTG9hZGVyIiwiY3VzdG9tTG9hZGVyIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImlzU3RhdGljUmVxdWlyZSIsInNyYyIsImlzU3RhdGljSW1hZ2VEYXRhIiwiaXNTdGF0aWNJbXBvcnQiLCJkZXZpY2VTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImNvbmZpZ0ltYWdlU2l6ZXMiLCJsb2FkZXIiLCJjb25maWdMb2FkZXIiLCJwYXRoIiwiY29uZmlnUGF0aCIsImRvbWFpbnMiLCJjb25maWdEb21haW5zIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9JTUFHRV9PUFRTIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJzb3J0IiwiYSIsImdldFdpZHRocyIsIndpZHRoIiwibGF5b3V0Iiwic2l6ZXMiLCJ2aWV3cG9ydFdpZHRoUmUiLCJwZXJjZW50U2l6ZXMiLCJleGVjIiwicHVzaCIsInBhcnNlSW50Iiwic21hbGxlc3RSYXRpbyIsIk1hdGgiLCJtaW4iLCJ3aWR0aHMiLCJzIiwia2luZCIsInciLCJmaW5kIiwicCIsImdlbmVyYXRlSW1nQXR0cnMiLCJ1bm9wdGltaXplZCIsInF1YWxpdHkiLCJzcmNTZXQiLCJsYXN0Iiwiam9pbiIsImdldEludCIsIngiLCJkZWZhdWx0SW1hZ2VMb2FkZXIiLCJsb2FkZXJQcm9wcyIsImxvYWQiLCJnZXQiLCJyb290IiwiRXJyb3IiLCJWQUxJRF9MT0FERVJTIiwiaGFuZGxlTG9hZGluZyIsImltZyIsInBsYWNlaG9sZGVyIiwib25Mb2FkaW5nQ29tcGxldGUiLCJoYW5kbGVMb2FkIiwic3RhcnRzV2l0aCIsImRlY29kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2F0Y2giLCJzdHlsZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEltYWdlIiwiYWRkIiwibmF0dXJhbFdpZHRoIiwibmF0dXJhbEhlaWdodCIsInJlZiIsInBhcmVudEVsZW1lbnQiLCJwYXJlbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZGlzcGxheSIsIndhcm4iLCJwb3NpdGlvbiIsImNvbXBsZXRlIiwib25sb2FkIiwiX3BhcmFtIiwicHJpb3JpdHkiLCJsYXp5Qm91bmRhcnkiLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImJsdXJEYXRhVVJMIiwiYWxsIiwicmVzdCIsInN0YXRpY1NyYyIsInN0YXRpY0ltYWdlRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aWR0aEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpc0xhenkiLCJoYXMiLCJpbmNsdWRlcyIsIlN0cmluZyIsImlzTmFOIiwiVkFMSURfQkxVUl9FWFQiLCJyYW5kIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsInNldFJlZiIsImlzSW50ZXJzZWN0ZWQiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3cmFwcGVyU3R5bGUiLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdTdHlsZSIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsImJveFNpemluZyIsInBhZGRpbmciLCJib3JkZXIiLCJtYXJnaW4iLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwiYmx1clN0eWxlIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwib3ZlcmZsb3ciLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJpbWdBdHRyaWJ1dGVzIiwic3JjU3RyaW5nIiwiY3JlYXRlRWxlbWVudCIsImFsdCIsInRvQmFzZTY0IiwiYXNzaWduIiwiZGVjb2RpbmciLCJyZWwiLCJhcyIsImhyZWYiLCJpbWFnZXNyY3NldCIsImltYWdlc2l6ZXMiLCJub3JtYWxpemVTcmMiLCJzbGljZSIsIlVSTCIsInBhcmFtcyIsInNlYXJjaFBhcmFtcyIsInNldCIsInBhcmFtc1N0cmluZyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJlcnIiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJzZWxmIiwiYmluZCIsIndpbmRvdyIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwibWF4IiwiY2xlYXJUaW1lb3V0IiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInVzZVJlZiIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlQ2FsbGJhY2siLCJlbCIsImN1cnJlbnQiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImluc3RhbmNlIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIkluZGV4Iiwid3JhcHBlciJdLCJzb3VyY2VSb290IjoiIn0=