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
/* harmony import */ var _styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Main.module.scss */ "./styles/Main.module.scss");
/* harmony import */ var _styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products */ "./components/Products.tsx");
/* harmony import */ var _UI_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI/Tabs */ "./components/UI/Tabs.tsx");
/* harmony import */ var _shared_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/context */ "./shared/context.ts");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emailjs-com */ "emailjs-com");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UI_Order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UI/Order */ "./components/UI/Order.tsx");
/* harmony import */ var _hooks_useGeolocation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useGeolocation */ "./hooks/useGeolocation.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\front\\Test-Task\\Test-Task\\components\\Main.tsx";










const Main = () => {
  const {
    state,
    setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_shared_context__WEBPACK_IMPORTED_MODULE_3__.default);
  const geo = (0,_hooks_useGeolocation__WEBPACK_IMPORTED_MODULE_6__.useGeolocation)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (state == true) {
      setTimeout(() => setState(false), 10000);
    }
  }, [state]);

  function sendEmail(e) {
    setState(true);
    e.preventDefault();
    emailjs_com__WEBPACK_IMPORTED_MODULE_4___default().sendForm('service_owomoeu', 'template_x9ti2tv', e.target, 'user_CDqPOO792JWRicGOj2wWn').then(result => {
      console.log(result.text);
    }, error => {
      console.log(error.text);
    });
    e.target.reset;
  }

  ;
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("main", {
    className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_8___default().page),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_8___default().page__main) + " " + (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_8___default().main),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_8___default().main__container) + " " + (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_8___default()._container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_8___default().main__body),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_8___default().main__body__container),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("form", {
              className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_8___default().main__form),
              onSubmit: sendEmail,
              children: !state ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_UI_Tabs__WEBPACK_IMPORTED_MODULE_2__.default, {
                geolocation: geo
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 18
              }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_UI_Order__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 46
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 7
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Products__WEBPACK_IMPORTED_MODULE_1__.default, {
              products: products
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 7
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
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
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            src: "../../basket.png",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 6
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default().header__busket_count),
            children: "4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 6
          }, undefined)]
        }, void 0, true, {
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
/* harmony import */ var _styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Order.module.scss */ "./styles/Order.module.scss");
/* harmony import */ var _styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/context */ "./shared/context.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\front\\Test-Task\\Test-Task\\components\\UI\\Order.tsx";





const Order = () => {
  const {
    state,
    setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_shared_context__WEBPACK_IMPORTED_MODULE_1__.default);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_3___default().order),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_3___default().order__title),
      children: "Thank you for your order!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_3___default().order__number),
      children: "Order number is: 188787788"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_3___default().order__text),
      children: ["Your will recieve an email confirmation shortly to ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        href: "",
        children: "jonathan.smith@gmail.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 56
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_3___default().order__estimated),
      children: ["Estimated delivery Day is ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        className: (_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bold),
        children: "Friday 1st April 2016"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 31
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
      className: (_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_3___default().order__print_recipe),
      children: "Print Recipe"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
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
/* harmony import */ var _shared_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/context */ "./shared/context.ts");
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









const Tabs = ({
  geolocation
}) => {
  const geo = undefined;
  const {
    state,
    setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_shared_context__WEBPACK_IMPORTED_MODULE_1__.default);
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
  const card = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.useInput)('', {
    isEmpty: true
  });
  const expire = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.useInput)('', {
    isEmpty: true
  });
  const security = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.useInput)('', {
    isEmpty: true
  });
  const email = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.useInput)('', {
    isEmail: false
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setCardType((0,_hooks_useIdentificationCard__WEBPACK_IMPORTED_MODULE_2__.useIdentificationCard)(card.value));
  }, [card.value]); // // function clicked() :void {
  // // 	document.getElementById("editor").classList.remove('content__inputs__row_country');
  // // 	document.getElementById("editor").classList.add('content__inputs__row_country_new');
  // }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "main-block__form__tabs",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: toggleClass === 1 ? "tabs active-tabs" : "tabs",
        id: "tab1",
        onClick: () => setToggleClass(1),
        children: "Shipping"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: toggleClass === 2 ? "tabs active-tabs" : "tabs",
        onClick: () => setToggleClass(2),
        children: "Billing"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: toggleClass === 3 ? "tabs active-tabs" : "tabs",
        onClick: () => setToggleClass(3),
        children: "Payment"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
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
          lineNumber: 62,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__recipient",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__recipient_text",
            children: "Recipient"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__inputs",
          children: [(b.isNext && full_name.isEmpty || b.isNext && full_name.isMinLengthError) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "message",
            children: "Please enter recipient full name and min length = 3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
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
            lineNumber: 74,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__inputs_daytime_container",
            children: [b.isNext && phone.isEmpty && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              className: "message",
              children: "Please enter recipient phone in format +7 (000) 000 00 00"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
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
              lineNumber: 79,
              columnNumber: 13
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
              htmlFor: "content__inputs_daytime_label",
              children: "For delivery questions only"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__address",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__address_text",
            children: "Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__inputs",
          children: [b.isNext && street.isEmpty && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "message",
            children: "Please enter recipient street"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
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
            lineNumber: 93,
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
            lineNumber: 95,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__inputs_icon",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
              type: "text",
              name: "city",
              className: b.isNext && city.isEmpty ? "content__inputs_city focused" : "content__inputs_city",
              placeholder: "City",
              value: geolocation.city == '' ? city.value : geolocation.city,
              onChange: e => city.onChange(e),
              onBlur: e => city.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
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
              lineNumber: 100,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 10
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__inputs__row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              className: "content__inputs__row_count",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                className: "content__inputs__row_country",
                id: "editor",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
                  type: "text",
                  className: "select",
                  placeholder: "Country",
                  value: geolocation.country == '' ? "" : geolocation.country,
                  name: "city",
                  list: "cityname",
                  onChange: e => country.onChange(e),
                  onBlur: e => country.onBlur(e)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 12
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("datalist", {
                  id: "cityname",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                    value: "Boston"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 14
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                    value: "Cambridge"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 110,
                    columnNumber: 14
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 13
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 12
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 11
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
              type: "text",
              className: b.isNext && zip.isEmpty ? "content__inputs__row_zip focused" : "content__inputs__row_zip",
              placeholder: "ZIP",
              value: geolocation.zip == '' ? zip.value : geolocation.zip,
              onChange: e => zip.onChange(e),
              onBlur: e => zip.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
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
          lineNumber: 119,
          columnNumber: 11
        }, undefined), !(full_name.inputValid && phone.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
          className: "content__button",
          style: {
            cursor: 'pointer'
          },
          children: "Continue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: toggleClass === 2 ? "content active-content" : "content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__title",
          children: "Billing Information"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
          onClick: () => setToggleClass(1),
          className: "content__recipient_link",
          children: "Same as shipping"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__recipient",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__recipient_text",
            children: "Billing Contact"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__inputs",
          children: [(b.isNext && full_name.isEmpty || b.isNext && full_name.isMinLengthError) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "message",
            children: "Please enter recipient full name and min length = 3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
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
            lineNumber: 142,
            columnNumber: 11
          }, undefined), b.isNext && email.isEmailError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "message",
            children: "Please enter correct email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
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
            lineNumber: 145,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__address",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__address_text",
            children: "Billing Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__inputs",
          children: [b.isNext && street.isEmpty && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "message",
            children: "Please enter recipient street"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
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
            lineNumber: 157,
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
            lineNumber: 159,
            columnNumber: 12
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__inputs_icon",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
              type: "text",
              name: "city",
              className: b.isNext && city.isEmpty ? "content__inputs_city focused" : "content__inputs_city",
              placeholder: "City",
              value: geo == undefined ? city.value : geo.city,
              onChange: e => city.onChange(e),
              onBlur: e => city.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
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
              lineNumber: 163,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__inputs__row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              className: "content__inputs__row_count",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                className: "content__inputs__row_country",
                id: "editor",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
                  type: "text",
                  className: "select",
                  placeholder: "Country",
                  value: geolocation.country == '' ? "" : geolocation.country,
                  name: "city",
                  list: "cityname",
                  onBlur: e => country.onBlur(e)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 12
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("datalist", {
                  id: "cityname",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                    value: "Boston"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 172,
                    columnNumber: 14
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                    value: "Cambridge"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 173,
                    columnNumber: 14
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 13
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 12
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 11
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
              type: "text",
              className: b.isNext && zip.isEmpty ? "content__inputs__row_zip focused" : "content__inputs__row_zip",
              placeholder: "ZIP",
              value: geolocation.zip == '' ? zip.value : geolocation.zip,
              onChange: e => zip.onChange(e),
              onBlur: e => zip.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 155,
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
          lineNumber: 182,
          columnNumber: 11
        }, undefined), !(full_name.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
          className: "content__button",
          style: {
            cursor: 'pointer'
          },
          children: "Continue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: toggleClass === 3 ? "content active-content" : "content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__title",
          children: "Payment"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
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
              lineNumber: 195,
              columnNumber: 12
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__ssl_text",
            children: "This is a secure 128-bit SSL encrypted payment"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__recipient",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__recipient_text",
            children: "Cardholder Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__inputs",
          children: [(b.isNext && full_name.isEmpty || b.isNext && full_name.isMinLengthError) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "message",
            children: "Please enter recipient full name and min length = 3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
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
            lineNumber: 206,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__address",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__address_text",
            children: "Card Number"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
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
            lineNumber: 215,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
            src: cardType,
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 218,
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
              lineNumber: 223,
              columnNumber: 12
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_4___default()), {
              mask: "99 / 99",
              placeholder: "MM / YY",
              type: "text",
              className: "content__cards_info__expire_input",
              name: "message",
              value: expire.value,
              onChange: e => expire.onChange(e),
              onBlur: e => expire.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__cards__info__security",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              className: "content__cards_info__security_text",
              children: "Security Code"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 12
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_4___default()), {
              mask: "999",
              type: "text",
              placeholder: "XXX",
              className: "content__cards_info__security_input",
              name: "subject",
              value: security.value,
              onChange: e => security.onChange(e),
              onBlur: e => security.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 10
        }, undefined), full_name.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid && card.inputValid && security.inputValid && expire.inputValid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
          className: "content__button",
          type: "submit",
          children: "Pay Securely"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 10
        }, undefined), !(full_name.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid && card.inputValid && security.inputValid && expire.inputValid) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
          className: "content__button disabled",
          disabled: true,
          children: "Pay Securely"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 10
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 8
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);
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

  const successCallback = async () => {
    await fetch('https://ipapi.co/json/').then(d => d.json()).then(res => {
      setCity(res.city);
      setCountry(res.country_name);
      setZip(res.postal);
    });
  };

  const errorCallback = error => {
    console.error(error);
  };

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
	"header__busket_icon": "Header_header__busket_icon__LixBY",
	"header__busket_count": "Header_header__busket_count__Pmr26"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHQSxpRUFBZVEsV0FBZjs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQSwyR0FBK0M7Ozs7Ozs7Ozs7OztBQ0EvQzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL05leHQvLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIudHN4Iiwid2VicGFjazovL05leHQvLi9jb21wb25lbnRzL01haW4udHN4Iiwid2VicGFjazovL05leHQvLi9jb21wb25lbnRzL05hdmJhci9IZWFkZXIudHN4Iiwid2VicGFjazovL05leHQvLi9jb21wb25lbnRzL1Byb2R1Y3RzLnRzeCIsIndlYnBhY2s6Ly9OZXh0Ly4vY29tcG9uZW50cy9VSS9PcmRlci50c3giLCJ3ZWJwYWNrOi8vTmV4dC8uL2NvbXBvbmVudHMvVUkvVGFicy50c3giLCJ3ZWJwYWNrOi8vTmV4dC8uL2hvb2tzL3VzZUdlb2xvY2F0aW9uLnRzIiwid2VicGFjazovL05leHQvLi9ob29rcy91c2VJZGVudGlmaWNhdGlvbkNhcmQudHMiLCJ3ZWJwYWNrOi8vTmV4dC8uL2hvb2tzL3VzZUlucHV0LnRzIiwid2VicGFjazovL05leHQvLi9ob29rcy91c2VWYWxpZGF0aW9uLnRzIiwid2VicGFjazovL05leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9OZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL05leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL05leHQvLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vTmV4dC8uL3NoYXJlZC9jb250ZXh0LnRzIiwid2VicGFjazovL05leHQvLi9zdHlsZXMvRm9vdGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL05leHQvLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL05leHQvLi9zdHlsZXMvTWFpbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9OZXh0Ly4vc3R5bGVzL09yZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL05leHQvLi9zdHlsZXMvUHJvZHVjdHMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vTmV4dC8uL3N0eWxlcy9pbmRleC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9OZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vTmV4dC9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiIiwid2VicGFjazovL05leHQvZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIiIsIndlYnBhY2s6Ly9OZXh0L2V4dGVybmFsIFwiZW1haWxqcy1jb21cIiIsIndlYnBhY2s6Ly9OZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9OZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL05leHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vTmV4dC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vTmV4dC9leHRlcm5hbCBcInJlYWN0LWlucHV0LW1hc2tcIiIsIndlYnBhY2s6Ly9OZXh0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Gb290ZXIubW9kdWxlLnNjc3MnXHJcblxyXG5jb25zdCBGb290ZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XHJcblx0XHRcdFxyXG5cdFx0PC9mb290ZXI+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvTWFpbi5tb2R1bGUuc2NzcydcclxuaW1wb3J0IFByb2R1Y3RzIGZyb20gJy4vUHJvZHVjdHMnXHJcbmltcG9ydCBUYWJzIGZyb20gJy4vVUkvVGFicydcclxuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tIFwiLi4vdHlwZXMvSVByb2R1Y3RcIjtcclxuaW1wb3J0IHNlbnRDb250ZXh0IGZyb20gJy4uL3NoYXJlZC9jb250ZXh0JztcclxuaW1wb3J0IGVtYWlsanMgZnJvbSAnZW1haWxqcy1jb20nO1xyXG5pbXBvcnQgT3JkZXIgZnJvbSAnLi9VSS9PcmRlcic7XHJcbmltcG9ydCB7IHVzZUdlb2xvY2F0aW9uIH0gZnJvbSAnLi4vaG9va3MvdXNlR2VvbG9jYXRpb24nO1xyXG5cclxuXHJcbmNvbnN0IE1haW46IFJlYWN0LkZDID0gKCkgPT4ge1xyXG5cclxuXHRjb25zdCB7c3RhdGUsIHNldFN0YXRlfSA9IHVzZUNvbnRleHQoc2VudENvbnRleHQpO1xyXG5cdGNvbnN0IGdlbyA9IHVzZUdlb2xvY2F0aW9uKCk7XHJcblxyXG5cdFxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZihzdGF0ZSA9PSB0cnVlKSB7IFxyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHNldFN0YXRlKGZhbHNlKSwgMTAwMDApXHJcblx0XHR9XHJcblx0fSwgW3N0YXRlXSlcclxuXHJcblxyXG5cdGZ1bmN0aW9uIHNlbmRFbWFpbChlKXtcclxuXHRcdHNldFN0YXRlKHRydWUpXHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRlbWFpbGpzLnNlbmRGb3JtKCdzZXJ2aWNlX293b21vZXUnLCAndGVtcGxhdGVfeDl0aTJ0dicsIGUudGFyZ2V0LCAndXNlcl9DRHFQT083OTJKV1JpY0dPajJ3V24nKVxyXG5cdFx0ICAudGhlbigocmVzdWx0KSA9PiB7XHJcblx0XHRcdCAgXHJcblx0XHRcdCAgY29uc29sZS5sb2cocmVzdWx0LnRleHQpO1xyXG5cclxuXHRcdCAgfSwgKGVycm9yKSA9PiB7XHJcblx0XHRcdCAgY29uc29sZS5sb2coZXJyb3IudGV4dCk7XHJcblx0XHQgIH0pO1xyXG5cdFx0ICBlLnRhcmdldC5yZXNldDtcclxuXHRcclxuXHRcdCBcclxuXHR9O1xyXG5cclxuXHRcclxuXHRjb25zdCBwcm9kdWN0czogSVByb2R1Y3RbXSA9IFt7aWQ6IDEsIG5hbWU6ICfQodGD0LzQutCwJywgZGVzY3JpcHRpb246ICfQmtGA0YPRgtCw0Y8g0YHRg9C80LrQsCcsIHByaWNlOiAzMDAgfSwge2lkOiAyLCBuYW1lOiAn0KHRg9C80LrQsCcsIGRlc2NyaXB0aW9uOiAn0JrRgNGD0YLQsNGPINGB0YPQvNC60LAgMicsIHByaWNlOiAzMDAgfSwge2lkOiAzLCBuYW1lOiAn0KHRg9C80LrQsCcsIGRlc2NyaXB0aW9uOiAn0JrRgNGD0YLQsNGPINGB0YPQvNC60LAgMycsIHByaWNlOiAzMDAgfSwge2lkOiA0LCBuYW1lOiAn0KHRg9C80LrQsCcsIGRlc2NyaXB0aW9uOiAn0JrRgNGD0YLQsNGPINGB0YPQvNC60LAgNCcsIHByaWNlOiAzMDAgfV1cclxuXHRcclxuXHRyZXR1cm4gKFxyXG5cdFx0PG1haW4gY2xhc3NOYW1lPXtzdHlsZXMucGFnZX0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZV9fbWFpbiArIFwiIFwiICsgc3R5bGVzLm1haW59PlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbl9fY29udGFpbmVyICsgXCIgXCIgKyBzdHlsZXMuX2NvbnRhaW5lcn0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5fX2JvZHl9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5fX2JvZHlfX2NvbnRhaW5lcn0+XHJcblxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMubWFpbl9fZm9ybX0gb25TdWJtaXQ9e3NlbmRFbWFpbH0+XHJcblx0XHRcdFx0XHRcdFx0eyFzdGF0ZSA/IDxUYWJzIGdlb2xvY2F0aW9uPXtnZW99Lz4gOiA8T3JkZXIvPn1cclxuXHRcdFx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHRcdFx0XHQ8UHJvZHVjdHMgcHJvZHVjdHMgPSB7cHJvZHVjdHN9PjwvUHJvZHVjdHM+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9tYWluPlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9IZWFkZXIubW9kdWxlLnNjc3MnXHJcblxyXG5cclxuXHJcbmNvbnN0IEhlYWRlcjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfX2NvbnRhaW5lciArIFwiIFwiICsgc3R5bGVzLl9jb250YWluZXJ9ID5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fbG9nb30+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fbG9nb19pY29ufT5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9Jy4uLy4uL2xvZ28ucG5nJyBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSB7c3R5bGVzLmhlYWRlcl9fbG9nb190ZXh0fT5cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfX2J1c2tldH0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfX2J1c2tldF90ZXh0fT5cclxuXHRcdFx0XHRcdGNhcnRcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fYnVza2V0X2ljb259PlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9Jy4uLy4uL2Jhc2tldC5wbmcnIGFsdD1cIlwiLz5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fYnVza2V0X2NvdW50fT40PC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHRcclxuXHRcdDwvaGVhZGVyPlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvUHJvZHVjdHMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IElQcm9kdWN0IH0gZnJvbSAnLi4vdHlwZXMvSVByb2R1Y3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5pbnRlcmZhY2UgUHJvZHVjdHNJdGVtc1Byb3BzIHtcclxuXHRwcm9kdWN0czogSVByb2R1Y3RbXTtcclxufVxyXG5jb25zdCBQcm9kdWN0czogUmVhY3QuRkM8UHJvZHVjdHNJdGVtc1Byb3BzPiA9ICh7cHJvZHVjdHN9KSA9PiB7XHJcblxyXG5cdGNvbnN0IFtzZWxlY3RlZFByb2R1Y3RzLCBzZXRTZWxlY3RlZFByb2R1Y3RzXSA9IHVzZVN0YXRlPElQcm9kdWN0W10+KHByb2R1Y3RzKVxyXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5fX3Byb2R1Y3RzfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0c19fdGV4dH0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0c19fdGV4dF90aXRsZX0+XHJcblx0XHRcdFx0XHRPcmRlciBzdW1tYXJ5XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGEgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdHNfX3RleHRfZWRpdH0+XHJcblx0XHRcdFx0XHRlZGl0IG9yZGVyXHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PHVsIGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RzX19pdGVtc30+XHJcblx0XHRcdFx0eyFsb2FkaW5nICYmICBzZWxlY3RlZFByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IFxyXG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RzX19wcm9kdWN0fSBrZXk9e3Byb2R1Y3QuaWR9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RfX2ltYWdlfT5cclxuXHRcdFx0XHRcdFx0XHQ8SW1hZ2Ugc3JjPSAnLy4uL3B1YmxpYy9zdW1rYS5wbmcnIHdpZHRoPXs0NX0gaGVpZ2h0PXs0NX0gYWx0PVwiXCIvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0X19jb250ZW50fT5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RfX2NvbnRlbnRfbmFtZX0+XHJcblx0XHRcdFx0XHRcdFx0XHR7cHJvZHVjdC5uYW1lfVxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdF9fY29udGVudF9kZXNjcmlwdGlvbn0+XHJcblx0XHRcdFx0XHRcdFx0XHR7cHJvZHVjdC5kZXNjcmlwdGlvbn1cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RfX2NvbnRlbnRfcXVhbnRpdHl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0UXVhbnRpdHk6IDFcclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0X19wcmljZX0+XHJcblx0XHRcdFx0XHRcdFx0XHQke3Byb2R1Y3QucHJpY2V9XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDwvbGk+XHJcblxyXG5cdFx0XHRcdCl9XHJcblxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdHNfX2Nvc3R9PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3N0X19zdWJ0b3RhbH0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VidG90YWxfX3RleHR9PlxyXG5cdFx0XHRcdFx0XHRcdFN1YnRvdGFsXHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1YnRvdGFsX19jb3VudH0+XHJcblx0XHRcdFx0XHRcdFx0JHshbG9hZGluZyAmJiBzZWxlY3RlZFByb2R1Y3RzLnJlZHVjZSgoYWNjLCBjdXIpID0+IHsgcmV0dXJuIGFjYyArIGN1ci5wcmljZSB9LCAwKX1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29zdF9fc2hpcHBpbmd9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNoaXBwaW5nX190ZXh0fT5cclxuXHRcdFx0XHRcdFx0XHRTaGlwcGluZ1xyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaGlwcGluZ19fY291bnR9PlxyXG5cdFx0XHRcdFx0XHRcdEZyZWVcclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29zdF9fdGF4ZXN9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRheGVzX190ZXh0fT5cclxuXHRcdFx0XHRcdFx0XHRUYXhlc1xyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YXhlc19fY291bnR9PlxyXG5cdFx0XHRcdFx0XHRcdHshbG9hZGluZyAmJiBzZWxlY3RlZFByb2R1Y3RzLnJlZHVjZSgoYWNjLCBjdXIpID0+IGFjYyArIGN1ci5wcmljZSwgMCkqMC4wM31cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29zdF9fdG90YWx9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvdGFsX190ZXh0fT5cclxuXHRcdFx0XHRcdFx0XHRUb3RhbFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3RhbF9fY291bnR9PlxyXG5cdFx0XHRcdFx0XHRcdCR7IWxvYWRpbmcgJiYgc2VsZWN0ZWRQcm9kdWN0cy5yZWR1Y2UoKGFjYywgY3VyKSA9PiBhY2MgKyBjdXIucHJpY2UsIDApICsgc2VsZWN0ZWRQcm9kdWN0cy5yZWR1Y2UoKGFjYywgY3VyKSA9PiBhY2MgKyBjdXIucHJpY2UsIDApKjAuMDN9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0c19faW5mb3JtYXRpb259PlxyXG5cdFx0XHRcdFx0QWxsIHB1cmNoYXNlcyBhcmUgc3ViamVjdCB0byBvdXIgVGVybXMgYW5kIENvbmRpdGlvbnMuXHJcblx0XHRcdFx0PC9mb290ZXI+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9PcmRlci5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHNlbnRDb250ZXh0IGZyb20gJy4uLy4uL3NoYXJlZC9jb250ZXh0JztcclxuXHJcbmNvbnN0IE9yZGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuXHRcclxuXHRjb25zdCB7c3RhdGUsIHNldFN0YXRlfSA9IHVzZUNvbnRleHQoc2VudENvbnRleHQpO1xyXG5cclxuXHRcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3JkZXJ9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9yZGVyX190aXRsZX0+XHJcblx0XHRcdFx0VGhhbmsgeW91IGZvciB5b3VyIG9yZGVyIVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vcmRlcl9fbnVtYmVyfT5cclxuXHRcdFx0XHRPcmRlciBudW1iZXIgaXM6IDE4ODc4Nzc4OFxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vcmRlcl9fdGV4dH0+XHJcblx0XHRcdFx0WW91ciB3aWxsIHJlY2lldmUgYW4gZW1haWwgY29uZmlybWF0aW9uIHNob3J0bHkgdG8gPGEgaHJlZj1cIlwiPmpvbmF0aGFuLnNtaXRoQGdtYWlsLmNvbTwvYT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3JkZXJfX2VzdGltYXRlZH0+XHJcblx0XHRcdFx0RXN0aW1hdGVkIGRlbGl2ZXJ5IERheSBpcyA8cCBjbGFzc05hbWU9e3N0eWxlcy5ib2xkfT5GcmlkYXkgMXN0IEFwcmlsIDIwMTY8L3A+XHJcblx0XHRcdDwvZGl2Plx0XHJcblx0XHRcdDxhIGNsYXNzTmFtZT17c3R5bGVzLm9yZGVyX19wcmludF9yZWNpcGV9PlByaW50IFJlY2lwZTwvYT5cclxuXHRcdFx0XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9yZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHNlbnRDb250ZXh0IGZyb20gJy4uLy4uL3NoYXJlZC9jb250ZXh0JztcclxuaW1wb3J0IHsgdXNlR2VvbG9jYXRpb24gfSBmcm9tICcuLi8uLi9ob29rcy91c2VHZW9sb2NhdGlvbic7XHJcbmltcG9ydCB7IHVzZUlkZW50aWZpY2F0aW9uQ2FyZCB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUlkZW50aWZpY2F0aW9uQ2FyZCc7XHJcbmltcG9ydCB7IHVzZUlucHV0IH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgSW5wdXRNYXNrIGZyb20gXCJyZWFjdC1pbnB1dC1tYXNrXCI7XHJcbmltcG9ydCB7IGZhQ3Jvc3NoYWlycyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgc2VuZEVtYWlsIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlQ29uZmlybWF0aW9uJztcclxuXHJcbi8vaW1wb3J0IHNlbnRDb250ZXh0IGZyb20gJy4uLy4uL3NoYXJlZC9jb250ZXh0JztcclxuXHJcbmludGVyZmFjZSBUYWJzUHJvcHMge1xyXG5cdGNoaWxkcmVuPzogUmVhY3QuUmVhY3RDaGlsZCB8IFJlYWN0LlJlYWN0Tm9kZSxcclxuXHRnZW9sb2NhdGlvbjogT2JqZWN0XHJcbn1cclxuXHJcbmNvbnN0IFRhYnM6IFJlYWN0LkZDID0gKHtnZW9sb2NhdGlvbn0gOiBUYWJzUHJvcHMpID0+IHtcclxuXHJcblx0Y29uc3QgZ2VvID0gdW5kZWZpbmVkO1xyXG5cdGNvbnN0IHtzdGF0ZSwgc2V0U3RhdGV9ID0gdXNlQ29udGV4dChzZW50Q29udGV4dCk7XHJcblxyXG5cdGNvbnN0IFt0b2dnbGVDbGFzcywgc2V0VG9nZ2xlQ2xhc3NdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcclxuXHRjb25zdCBbY2FyZFR5cGUsIHNldENhcmRUeXBlXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cclxuXHRjb25zdCBmdWxsX25hbWUgPSB1c2VJbnB1dCgnJywge2lzRW1wdHk6IHRydWUsIG1pbkxlbmd0aDogM30pO1xyXG5cdGNvbnN0IHN0cmVldCA9IHVzZUlucHV0KCcnLCB7aXNFbXB0eTogdHJ1ZX0pO1xyXG5cdGNvbnN0IHBob25lID0gdXNlSW5wdXQoJycsIHtpc0VtcHR5OiB0cnVlfSk7XHJcblx0Y29uc3QgYXB0ID0gdXNlSW5wdXQoJycsIHt9KTtcclxuXHRjb25zdCBjaXR5ID0gdXNlSW5wdXQoJycsIHtpc0VtcHR5OiB0cnVlfSk7XHJcblx0Y29uc3QgY291bnRyeSA9IHVzZUlucHV0KCdDb3VudHJ5Jywge2lzRW1wdHk6IHRydWV9KTtcclxuXHRjb25zdCB6aXAgPSB1c2VJbnB1dCgnJywge2lzRW1wdHk6IHRydWV9KTtcclxuIFx0Y29uc3QgYiA9IHVzZUlucHV0KCcnLCB7fSk7XHJcblx0Y29uc3QgY2FyZCA9IHVzZUlucHV0KCcnLCB7aXNFbXB0eTogdHJ1ZX0pO1xyXG5cdGNvbnN0IGV4cGlyZSA9IHVzZUlucHV0KCcnLCB7aXNFbXB0eTogdHJ1ZX0pO1xyXG5cdGNvbnN0IHNlY3VyaXR5ID0gdXNlSW5wdXQoJycsIHtpc0VtcHR5OiB0cnVlfSk7XHJcblx0Y29uc3QgZW1haWwgPSB1c2VJbnB1dCgnJywge2lzRW1haWw6IGZhbHNlfSk7XHJcblx0XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZXRDYXJkVHlwZSh1c2VJZGVudGlmaWNhdGlvbkNhcmQoY2FyZC52YWx1ZSkpO1xyXG5cdH0sIFtjYXJkLnZhbHVlXSlcclxuXHJcblx0Ly8gLy8gZnVuY3Rpb24gY2xpY2tlZCgpIDp2b2lkIHtcclxuXHQvLyAvLyBcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdG9yXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRlbnRfX2lucHV0c19fcm93X2NvdW50cnknKTtcclxuXHQvLyAvLyBcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdG9yXCIpLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRfX2lucHV0c19fcm93X2NvdW50cnlfbmV3Jyk7XHJcblx0Ly8gfVxyXG5cclxuXHJcblxyXG5cdHJldHVybiAoXHJcblxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluLWJsb2NrX19mb3JtX190YWJzXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3RvZ2dsZUNsYXNzID09PSAxID8gXCJ0YWJzIGFjdGl2ZS10YWJzXCIgOiBcInRhYnNcIn0gaWQ9XCJ0YWIxXCIgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlQ2xhc3MoMSl9PlNoaXBwaW5nPC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3RvZ2dsZUNsYXNzID09PSAyID8gXCJ0YWJzIGFjdGl2ZS10YWJzXCIgOiBcInRhYnNcIn0gb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlQ2xhc3MoMil9PkJpbGxpbmc8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dG9nZ2xlQ2xhc3MgPT09IDMgPyBcInRhYnMgYWN0aXZlLXRhYnNcIiA6IFwidGFic1wifSBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGVDbGFzcygzKX0+UGF5bWVudDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluLWJsb2NrX19mb3JtX190YWJzX19jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dG9nZ2xlQ2xhc3MgPT09IDEgPyBcImNvbnRlbnQgYWN0aXZlLWNvbnRlbnRcIiA6IFwiY29udGVudFwifT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X190aXRsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFNoaXBwaW5nIGluZm9cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3JlY2lwaWVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fcmVjaXBpZW50X3RleHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFJlY2lwaWVudFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNcIj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eygoYi5pc05leHQgJiYgZnVsbF9uYW1lLmlzRW1wdHkpIHx8IChiLmlzTmV4dCAmJiBmdWxsX25hbWUuaXNNaW5MZW5ndGhFcnJvcikpICYmICg8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZSc+UGxlYXNlIGVudGVyIHJlY2lwaWVudCBmdWxsIG5hbWUgYW5kIG1pbiBsZW5ndGggPSAzPC9kaXY+KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9eygoYi5pc05leHQgJiYgZnVsbF9uYW1lLmlzRW1wdHkpIHx8IChiLmlzTmV4dCAmJiBmdWxsX25hbWUuaXNNaW5MZW5ndGhFcnJvcikpID8gXCJjb250ZW50X19pbnB1dHNfZnVsbG5hbWUgZm9jdXNlZFwiIDogXCJjb250ZW50X19pbnB1dHNfZnVsbG5hbWVcIn0gcGxhY2Vob2xkZXI9XCJGdWxsIE5hbWVcIiB2YWx1ZT17ZnVsbF9uYW1lLnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IGZ1bGxfbmFtZS5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gZnVsbF9uYW1lLm9uQmx1cihlKX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzX2RheXRpbWVfY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7KChiLmlzTmV4dCAmJiBwaG9uZS5pc0VtcHR5KSkgJiYgKDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlJz5QbGVhc2UgZW50ZXIgcmVjaXBpZW50IHBob25lIGluIGZvcm1hdCArNyAoMDAwKSAwMDAgMDAgMDA8L2Rpdj4pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRNYXNrIG5hbWU9XCJwaG9uZVwiIG1hc2s9XCIrN1xcKDk5OSkgOTk5LTk5LTk5XCIgdHlwZT1cInRlbFwiIGNsYXNzTmFtZT17KChiLmlzTmV4dCAmJiBwaG9uZS5pc0VtcHR5KSkgPyBcImNvbnRlbnRfX2lucHV0c19kYXl0aW1lIGZvY3VzZWRcIiA6IFwiY29udGVudF9faW5wdXRzX2RheXRpbWVcIn0gaWQ9XCJwaG9uZU51bWJlclwiIHBsYWNlaG9sZGVyPVwiRGF0ZXRpbWUgUGhvbmVcIiB2YWx1ZT17cGhvbmUudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gcGhvbmUub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IHBob25lLm9uQmx1cihlKX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3IgPVwiY29udGVudF9faW5wdXRzX2RheXRpbWVfbGFiZWxcIj5Gb3IgZGVsaXZlcnkgcXVlc3Rpb25zIG9ubHk8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2FkZHJlc3NcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2FkZHJlc3NfdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QWRkcmVzc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNcIj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eygoYi5pc05leHQgJiYgc3RyZWV0LmlzRW1wdHkpKSAmJiAoPGRpdiBjbGFzc05hbWU9J21lc3NhZ2UnPlBsZWFzZSBlbnRlciByZWNpcGllbnQgc3RyZWV0PC9kaXY+KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9eygoYi5pc05leHQgJiYgc3RyZWV0LmlzRW1wdHkpKSA/IFwiY29udGVudF9faW5wdXRzX3N0cmVldCBmb2N1c2VkXCIgOiBcImNvbnRlbnRfX2lucHV0c19zdHJlZXRcIn0gcGxhY2Vob2xkZXI9XCJTdHJlZXQgQWRkcmVzc1wiIHZhbHVlPXtzdHJlZXQudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gc3RyZWV0Lm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBzdHJlZXQub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzX2FwdFwiIHBsYWNlaG9sZGVyPVwiQXB0LCBTdWl0ZSwgQmxkZywgR2F0ZSBDb2RlLiAob3B0aW9uYWwpXCIgdmFsdWU9e2FwdC52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBhcHQub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IGFwdC5vbkJsdXIoZSl9Lz5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzX2ljb25cIj5cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNpdHlcIiBjbGFzc05hbWU9eygoYi5pc05leHQgJiYgY2l0eS5pc0VtcHR5KSkgPyBcImNvbnRlbnRfX2lucHV0c19jaXR5IGZvY3VzZWRcIiA6IFwiY29udGVudF9faW5wdXRzX2NpdHlcIn0gcGxhY2Vob2xkZXI9XCJDaXR5XCIgdmFsdWU9e2dlb2xvY2F0aW9uLmNpdHkgPT0gJycgPyBjaXR5LnZhbHVlIDogZ2VvbG9jYXRpb24uY2l0eX0gb25DaGFuZ2U9eyhlKSA9PiBjaXR5Lm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBjaXR5Lm9uQmx1cihlKX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNyb3NzaGFpcnN9IHN0eWxlPXt7cG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJzQwJScsIHJpZ2h0OiAnMTBweCcsIGZvbnRTaXplOiAnMjBweCcsIGN1cnNvcjogJ3BvaW50ZXInfX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19fcm93XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfX3Jvd19jb3VudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfX3Jvd19jb3VudHJ5XCIgaWQ9XCJlZGl0b3JcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInNlbGVjdFwiIHBsYWNlaG9sZGVyPVwiQ291bnRyeVwiIHZhbHVlPXtnZW9sb2NhdGlvbi5jb3VudHJ5ID09ICcnID8gXCJcIiA6IGdlb2xvY2F0aW9uLmNvdW50cnl9IG5hbWU9XCJjaXR5XCIgbGlzdD1cImNpdHluYW1lXCIgb25DaGFuZ2U9eyhlKSA9PiBjb3VudHJ5Lm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBjb3VudHJ5Lm9uQmx1cihlKX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGF0YWxpc3QgaWQ9XCJjaXR5bmFtZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJCb3N0b25cIi8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkNhbWJyaWRnZVwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kYXRhbGlzdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17KChiLmlzTmV4dCAmJiB6aXAuaXNFbXB0eSkpID8gXCJjb250ZW50X19pbnB1dHNfX3Jvd196aXAgZm9jdXNlZFwiIDogXCJjb250ZW50X19pbnB1dHNfX3Jvd196aXBcIn0gcGxhY2Vob2xkZXI9XCJaSVBcIiB2YWx1ZT17Z2VvbG9jYXRpb24uemlwID09ICcnID8gemlwLnZhbHVlIDogIGdlb2xvY2F0aW9uLnppcH0gb25DaGFuZ2U9eyhlKSA9PiB6aXAub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IHppcC5vbkJsdXIoZSl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHsoZnVsbF9uYW1lLmlucHV0VmFsaWQgJiYgcGhvbmUuaW5wdXRWYWxpZCAmJiBzdHJlZXQuaW5wdXRWYWxpZCAmJiBjaXR5LmlucHV0VmFsaWQgJiYgY291bnRyeS5pbnB1dFZhbGlkICYmIHppcC5pbnB1dFZhbGlkKSAmJiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGVDbGFzcygyKX0gY2xhc3NOYW1lPVwiY29udGVudF9fYnV0dG9uXCIgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJ319PkNvbnRpbnVlPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHshKGZ1bGxfbmFtZS5pbnB1dFZhbGlkICYmIHBob25lLmlucHV0VmFsaWQgJiYgc3RyZWV0LmlucHV0VmFsaWQgJiYgY2l0eS5pbnB1dFZhbGlkICYmIGNvdW50cnkuaW5wdXRWYWxpZCAmJiB6aXAuaW5wdXRWYWxpZCkgJiYgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiY29udGVudF9fYnV0dG9uXCIgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJ319PkNvbnRpbnVlPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dG9nZ2xlQ2xhc3MgPT09IDIgPyBcImNvbnRlbnQgYWN0aXZlLWNvbnRlbnRcIiA6IFwiY29udGVudFwifT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X190aXRsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEJpbGxpbmcgSW5mb3JtYXRpb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZUNsYXNzKDEpfSBjbGFzc05hbWU9XCJjb250ZW50X19yZWNpcGllbnRfbGlua1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0U2FtZSBhcyBzaGlwcGluZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fcmVjaXBpZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19yZWNpcGllbnRfdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QmlsbGluZyBDb250YWN0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c1wiPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0eygoYi5pc05leHQgJiYgZnVsbF9uYW1lLmlzRW1wdHkpIHx8IChiLmlzTmV4dCAmJiBmdWxsX25hbWUuaXNNaW5MZW5ndGhFcnJvcikpICYmICg8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZSc+UGxlYXNlIGVudGVyIHJlY2lwaWVudCBmdWxsIG5hbWUgYW5kIG1pbiBsZW5ndGggPSAzPC9kaXY+KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9eygoYi5pc05leHQgJiYgZnVsbF9uYW1lLmlzRW1wdHkpIHx8IChiLmlzTmV4dCAmJiBmdWxsX25hbWUuaXNNaW5MZW5ndGhFcnJvcikpID8gXCJjb250ZW50X19pbnB1dHNfZnVsbG5hbWUgZm9jdXNlZFwiIDogXCJjb250ZW50X19pbnB1dHNfZnVsbG5hbWVcIn0gbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkZ1bGwgTmFtZVwiIHZhbHVlPXtmdWxsX25hbWUudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gZnVsbF9uYW1lLm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBmdWxsX25hbWUub25CbHVyKGUpfS8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7KGIuaXNOZXh0ICYmIGVtYWlsLmlzRW1haWxFcnJvcikgJiYgKDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlJz5QbGVhc2UgZW50ZXIgY29ycmVjdCBlbWFpbDwvZGl2Pil9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXsoKGIuaXNOZXh0ICYmIGVtYWlsLmlzRW1haWxFcnJvcikpID8gXCJjb250ZW50X19pbnB1dHNfZW1haWwgZm9jdXNlZFwiIDogXCJjb250ZW50X19pbnB1dHNfZW1haWxcIn0gcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCIgdmFsdWU9e2VtYWlsLnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IGVtYWlsLm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBlbWFpbC5vbkJsdXIoZSl9IG5hbWU9XCJlbWFpbFwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2FkZHJlc3NcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2FkZHJlc3NfdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QmlsbGluZyBBZGRyZXNzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7KChiLmlzTmV4dCAmJiBzdHJlZXQuaXNFbXB0eSkpICYmICg8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZSc+UGxlYXNlIGVudGVyIHJlY2lwaWVudCBzdHJlZXQ8L2Rpdj4pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17KChiLmlzTmV4dCAmJiBzdHJlZXQuaXNFbXB0eSkpID8gXCJjb250ZW50X19pbnB1dHNfc3RyZWV0IGZvY3VzZWRcIiA6IFwiY29udGVudF9faW5wdXRzX3N0cmVldFwifSBwbGFjZWhvbGRlcj1cIlN0cmVldCBBZGRyZXNzXCIgdmFsdWU9e3N0cmVldC52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBzdHJlZXQub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IHN0cmVldC5vbkJsdXIoZSl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19hcHRcIiBwbGFjZWhvbGRlcj1cIkFwdCwgU3VpdGUsIEJsZGcsIEdhdGUgQ29kZS4gKG9wdGlvbmFsKVwiIHZhbHVlPXthcHQudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gYXB0Lm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBhcHQub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfaWNvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjaXR5XCIgY2xhc3NOYW1lPXsoKGIuaXNOZXh0ICYmIGNpdHkuaXNFbXB0eSkpID8gXCJjb250ZW50X19pbnB1dHNfY2l0eSBmb2N1c2VkXCIgOiBcImNvbnRlbnRfX2lucHV0c19jaXR5XCJ9IHBsYWNlaG9sZGVyPVwiQ2l0eVwiIHZhbHVlPXtnZW8gPT0gdW5kZWZpbmVkID8gY2l0eS52YWx1ZSA6IGdlby5jaXR5fSBvbkNoYW5nZT17KGUpID0+IGNpdHkub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IGNpdHkub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ3Jvc3NoYWlyc30gc3R5bGU9e3twb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAnNDAlJywgcmlnaHQ6ICcxMHB4JywgZm9udFNpemU6ICcyMHB4JywgY3Vyc29yOiAncG9pbnRlcid9fS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfX3Jvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzX19yb3dfY291bnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzX19yb3dfY291bnRyeVwiIGlkPVwiZWRpdG9yXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJzZWxlY3RcIiBwbGFjZWhvbGRlcj1cIkNvdW50cnlcIiB2YWx1ZT17Z2VvbG9jYXRpb24uY291bnRyeSA9PSAnJyA/IFwiXCIgOiBnZW9sb2NhdGlvbi5jb3VudHJ5fSBuYW1lPVwiY2l0eVwiIGxpc3Q9XCJjaXR5bmFtZVwiIG9uQmx1cj17KGUpID0+IGNvdW50cnkub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkYXRhbGlzdCBpZD1cImNpdHluYW1lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkJvc3RvblwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiQ2FtYnJpZGdlXCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2RhdGFsaXN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXsoKGIuaXNOZXh0ICYmIHppcC5pc0VtcHR5KSkgPyBcImNvbnRlbnRfX2lucHV0c19fcm93X3ppcCBmb2N1c2VkXCIgOiBcImNvbnRlbnRfX2lucHV0c19fcm93X3ppcFwifSBwbGFjZWhvbGRlcj1cIlpJUFwiIHZhbHVlPXtnZW9sb2NhdGlvbi56aXAgPT0gJycgPyB6aXAudmFsdWUgOiAgZ2VvbG9jYXRpb24uemlwfSBvbkNoYW5nZT17KGUpID0+IHppcC5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gemlwLm9uQmx1cihlKX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0eyhmdWxsX25hbWUuaW5wdXRWYWxpZCAmJiBzdHJlZXQuaW5wdXRWYWxpZCAmJiBjaXR5LmlucHV0VmFsaWQgJiYgY291bnRyeS5pbnB1dFZhbGlkICYmIHppcC5pbnB1dFZhbGlkKSAmJiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGVDbGFzcygzKX0gY2xhc3NOYW1lPVwiY29udGVudF9fYnV0dG9uXCIgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJ319PkNvbnRpbnVlPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHshKGZ1bGxfbmFtZS5pbnB1dFZhbGlkICYmIHN0cmVldC5pbnB1dFZhbGlkICYmIGNpdHkuaW5wdXRWYWxpZCAmJiBjb3VudHJ5LmlucHV0VmFsaWQgJiYgemlwLmlucHV0VmFsaWQpICYmIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImNvbnRlbnRfX2J1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcid9fT5Db250aW51ZTwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3RvZ2dsZUNsYXNzID09PSAzID8gXCJjb250ZW50IGFjdGl2ZS1jb250ZW50XCIgOiBcImNvbnRlbnRcIn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fdGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRQYXltZW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3NzbFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fc3NsX2xvZ29cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPScuLi8uLi9sb2NrLnBuZycgYWx0PVwiXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3NzbF90ZXh0XCI+VGhpcyBpcyBhIHNlY3VyZSAxMjgtYml0IFNTTCBlbmNyeXB0ZWQgcGF5bWVudDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19yZWNpcGllbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3JlY2lwaWVudF90ZXh0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRDYXJkaG9sZGVyIE5hbWVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHsoKGIuaXNOZXh0ICYmIGZ1bGxfbmFtZS5pc0VtcHR5KSB8fCAoYi5pc05leHQgJiYgZnVsbF9uYW1lLmlzTWluTGVuZ3RoRXJyb3IpKSAmJiAoPGRpdiBjbGFzc05hbWU9J21lc3NhZ2UnPlBsZWFzZSBlbnRlciByZWNpcGllbnQgZnVsbCBuYW1lIGFuZCBtaW4gbGVuZ3RoID0gMzwvZGl2Pil9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXsoKGIuaXNOZXh0ICYmIGZ1bGxfbmFtZS5pc0VtcHR5KSB8fCAoYi5pc05leHQgJiYgZnVsbF9uYW1lLmlzTWluTGVuZ3RoRXJyb3IpKSA/IFwiY29udGVudF9faW5wdXRzX2Z1bGxuYW1lIGZvY3VzZWRcIiA6IFwiY29udGVudF9faW5wdXRzX2Z1bGxuYW1lXCJ9IHBsYWNlaG9sZGVyPVwiTmFtZSBhcyBpdCBhcHBlYXJzIG9uIHlvdXIgY2FyZFwiIHZhbHVlPXtmdWxsX25hbWUudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gZnVsbF9uYW1lLm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBmdWxsX25hbWUub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19hZGRyZXNzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19hZGRyZXNzX3RleHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdENhcmQgTnVtYmVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dE1hc2sgbWFzaz1cIjk5OTkgOTk5OSA5OTk5IDk5OTlcIiBuYW1lPVwiY2FyZFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzX2NhcmRcIiBwbGFjZWhvbGRlcj1cIlhYWFggWFhYWCBYWFhYIFhYWFggWFhYWFwiIHZhbHVlPXtjYXJkLnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IGNhcmQub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IGNhcmQub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtjYXJkVHlwZX0gYWx0PVwiXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fY2FyZHNfX2luZm9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2NhcmRzX19pbmZvX19leHBpcmVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fY2FyZHNfaW5mb19fZXhwaXJlX3RleHRcIj5FeHBpcmUgRGF0ZTwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PElucHV0TWFzayBtYXNrPVwiOTkgLyA5OVwiIHBsYWNlaG9sZGVyPVwiTU0gLyBZWVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY29udGVudF9fY2FyZHNfaW5mb19fZXhwaXJlX2lucHV0XCIgbmFtZT1cIm1lc3NhZ2VcIiB2YWx1ZT17ZXhwaXJlLnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IGV4cGlyZS5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gZXhwaXJlLm9uQmx1cihlKX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fY2FyZHNfX2luZm9fX3NlY3VyaXR5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2NhcmRzX2luZm9fX3NlY3VyaXR5X3RleHRcIj5TZWN1cml0eSBDb2RlPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRNYXNrIG1hc2s9XCI5OTlcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWFhYXCIgY2xhc3NOYW1lPVwiY29udGVudF9fY2FyZHNfaW5mb19fc2VjdXJpdHlfaW5wdXRcIiBuYW1lPVwic3ViamVjdFwiIHZhbHVlPXtzZWN1cml0eS52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBzZWN1cml0eS5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gc2VjdXJpdHkub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7KGZ1bGxfbmFtZS5pbnB1dFZhbGlkICYmIHN0cmVldC5pbnB1dFZhbGlkICYmIGNpdHkuaW5wdXRWYWxpZCAmJiBjb3VudHJ5LmlucHV0VmFsaWQgJiYgemlwLmlucHV0VmFsaWQgJiYgY2FyZC5pbnB1dFZhbGlkICYmIHNlY3VyaXR5LmlucHV0VmFsaWQgJiYgZXhwaXJlLmlucHV0VmFsaWQpICYmIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImNvbnRlbnRfX2J1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRQYXkgU2VjdXJlbHlcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0eyEoZnVsbF9uYW1lLmlucHV0VmFsaWQgJiYgc3RyZWV0LmlucHV0VmFsaWQgJiYgY2l0eS5pbnB1dFZhbGlkICYmIGNvdW50cnkuaW5wdXRWYWxpZCAmJiB6aXAuaW5wdXRWYWxpZCAmJiBjYXJkLmlucHV0VmFsaWQgJiYgc2VjdXJpdHkuaW5wdXRWYWxpZCAmJiBleHBpcmUuaW5wdXRWYWxpZCkgJiYgXHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJjb250ZW50X19idXR0b24gZGlzYWJsZWRcIiBkaXNhYmxlZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRQYXkgU2VjdXJlbHlcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFicztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCAgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBicm93c2VyRW52IGZyb20gJ2Jyb3dzZXItZW52JztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VHZW9sb2NhdGlvbiA9ICgpID0+IHtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuXHRcdFxyXG5cdCAgfSwgW10pXHJcblxyXG5cdGNvbnN0IFtjaXR5LCBzZXRDaXR5XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cdGNvbnN0IFtjb3VudHJ5LCBzZXRDb3VudHJ5XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cdGNvbnN0IFt6aXAsIHNldFppcF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuXHJcblx0Y29uc3Qgc3VjY2Vzc0NhbGxiYWNrID0gYXN5bmMgKCk6IFByb21pc2U8YW55PiA9PiB7XHJcblx0XHRhd2FpdCBmZXRjaCgnaHR0cHM6Ly9pcGFwaS5jby9qc29uLycpXHJcbiAgXHRcdFx0LnRoZW4oZCA9PiBkLmpzb24oKSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRzZXRDaXR5KHJlcy5jaXR5KTtcclxuXHRcdFx0XHRzZXRDb3VudHJ5KHJlcy5jb3VudHJ5X25hbWUpO1xyXG5cdFx0XHRcdHNldFppcChyZXMucG9zdGFsKTtcclxuXHRcdFx0fSlcclxuXHQgIH1cclxuXHJcblx0ICBcclxuXHQgIGNvbnN0IGVycm9yQ2FsbGJhY2sgPSAoZXJyb3I6IGFueSk6IHZvaWQgPT4ge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlcnJvcilcclxuXHQgIH1cclxuXHJcblx0IFxyXG5cclxuXHRcclxuXHQgXHJcblxyXG5cdCAgcmV0dXJuIHtcclxuXHRcdGNpdHksXHJcblx0XHRjb3VudHJ5LFxyXG5cdFx0emlwXHJcblx0fVxyXG5cdFxyXG5cdFx0XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHVzZUlkZW50aWZpY2F0aW9uQ2FyZCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIFxyXG57XHJcbiAgICAvLyB2aXNhXHJcbiAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiXjRcIik7XHJcbiAgICBpZiAodmFsdWUubWF0Y2gocmVnZXgpICE9IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIFwiLi4vaW1nL3RhYnMvY2FyZHMvdmlzYS5wbmdcIjtcclxuXHJcbiAgICAvLyBNYXN0ZXJjYXJkIFxyXG4gICAgLy8gVXBkYXRlZCBmb3IgTWFzdGVyY2FyZCAyMDE3IEJJTnMgZXhwYW5zaW9uXHJcbiAgICAgaWYgKC9eKDVbMS01XVswLTldezE0fXwyKDIyWzEtOV1bMC05XXsxMn18MlszLTldWzAtOV17MTN9fFszLTZdWzAtOV17MTR9fDdbMC0xXVswLTldezEzfXw3MjBbMC05XXsxMn0pKSQvLnRlc3QodmFsdWUpKSBcclxuICAgICAgICByZXR1cm4gXCJNYXN0ZXJjYXJkXCI7XHJcblxyXG4gICAgLy8gLy8gQU1FWFxyXG4gICAgLy8gcmUgPSBuZXcgUmVnRXhwKFwiXjNbNDddXCIpO1xyXG4gICAgLy8gaWYgKG51bWJlci5tYXRjaChyZSkgIT0gbnVsbClcclxuICAgIC8vICAgICByZXR1cm4gXCJBTUVYXCI7XHJcblxyXG4gICAgLy8gLy8gRGlzY292ZXJcclxuICAgIC8vIHJlID0gbmV3IFJlZ0V4cChcIl4oNjAxMXw2MjIoMTJbNi05XXwxWzMtOV1bMC05XXxbMi04XVswLTldezJ9fDlbMC0xXVswLTldfDkyWzAtNV18NjRbNC05XSl8NjUpXCIpO1xyXG4gICAgLy8gaWYgKG51bWJlci5tYXRjaChyZSkgIT0gbnVsbClcclxuICAgIC8vICAgICByZXR1cm4gXCJEaXNjb3ZlclwiO1xyXG5cclxuICAgIC8vIC8vIERpbmVyc1xyXG4gICAgLy8gcmUgPSBuZXcgUmVnRXhwKFwiXjM2XCIpO1xyXG4gICAgLy8gaWYgKG51bWJlci5tYXRjaChyZSkgIT0gbnVsbClcclxuICAgIC8vICAgICByZXR1cm4gXCJEaW5lcnNcIjtcclxuXHJcbiAgICAvLyAvLyBEaW5lcnMgLSBDYXJ0ZSBCbGFuY2hlXHJcbiAgICAvLyByZSA9IG5ldyBSZWdFeHAoXCJeMzBbMC01XVwiKTtcclxuICAgIC8vIGlmIChudW1iZXIubWF0Y2gocmUpICE9IG51bGwpXHJcbiAgICAvLyAgICAgcmV0dXJuIFwiRGluZXJzIC0gQ2FydGUgQmxhbmNoZVwiO1xyXG5cclxuICAgIC8vIC8vIEpDQlxyXG4gICAgLy8gcmUgPSBuZXcgUmVnRXhwKFwiXjM1KDJbODldfFszLThdWzAtOV0pXCIpO1xyXG4gICAgLy8gaWYgKG51bWJlci5tYXRjaChyZSkgIT0gbnVsbClcclxuICAgIC8vICAgICByZXR1cm4gXCJKQ0JcIjtcclxuXHJcbiAgICAvLyAvLyBWaXNhIEVsZWN0cm9uXHJcbiAgICAvLyByZSA9IG5ldyBSZWdFeHAoXCJeKDQwMjZ8NDE3NTAwfDQ1MDh8NDg0NHw0OTEoM3w3KSlcIik7XHJcbiAgICAvLyBpZiAobnVtYmVyLm1hdGNoKHJlKSAhPSBudWxsKVxyXG4gICAgLy8gICAgIHJldHVybiBcIlZpc2EgRWxlY3Ryb25cIjtcclxuXHJcbiAgICByZXR1cm4gXCJudWxsXCI7XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHtGb3JtRXZlbnQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVZhbGlkYXRpb24gfSBmcm9tICcuL3VzZVZhbGlkYXRpb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUlucHV0ID0gKGluaXRpYWxWYWx1ZTogc3RyaW5nLCB2YWxpZGF0aW9uczogT2JqZWN0KSA9PiB7XHJcblxyXG5cdGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPihpbml0aWFsVmFsdWUpO1xyXG5cdGNvbnN0IFtpc0RpcnR5LCBzZXRJc0RpcnR5XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHRjb25zdCBbaXNOZXh0LCBzZXRJc05leHRdID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcblx0Y29uc3QgdmFsaWQgPSB1c2VWYWxpZGF0aW9uKHZhbHVlLCB2YWxpZGF0aW9ucyk7XHJcblxyXG5cclxuXHRjb25zdCBvbkNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFNlbGVjdEVsZW1lbnQ+KTogdm9pZCA9PiB7XHJcblx0XHRzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBvbkJsdXIgPSAoZTogUmVhY3QuRm9jdXNFdmVudDxIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFNlbGVjdEVsZW1lbnQ+KTogdm9pZCA9PiB7XHJcblx0XHRzZXRJc0RpcnR5KHRydWUpO1xyXG5cdH1cclxuXHJcblx0Y29uc3Qgb25DbGljayA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KTogdm9pZCA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRzZXRJc05leHQodHJ1ZSk7XHJcblxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHZhbHVlLFxyXG5cdFx0aXNOZXh0LFxyXG5cdFx0b25DbGljayxcclxuXHRcdG9uQ2hhbmdlLFxyXG5cdFx0b25CbHVyLFxyXG5cdFx0aXNEaXJ0eSxcclxuXHRcdC4uLnZhbGlkXHJcblx0fVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVZhbGlkYXRpb24gPSAodmFsdWU6IHN0cmluZywgdmFsaWRhdGlvbnM6IE9iamVjdCkgPT4ge1xyXG5cclxuXHRjb25zdCBbaXNFbXB0eSwgc2V0SXNFbXB0eV0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuXHRjb25zdCBbaXNFbWFpbEVycm9yLCBzZXRJc0VtYWlsRXJyb3JdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cdGNvbnN0IFtpc01pbkxlbmd0aEVycm9yLCBzZXRJc01pbkxlbmd0aEVycm9yXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHRjb25zdCBbaW5wdXRWYWxpZCwgc2V0SW5wdXRWYWxpZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRmb3IgKGNvbnN0IHZhbGlkYXRpb24gaW4gdmFsaWRhdGlvbnMpIHtcclxuXHRcdFx0c3dpdGNoICh2YWxpZGF0aW9uKSB7XHJcblx0XHRcdFx0Y2FzZSAnbWluTGVuZ3RoJzpcclxuXHRcdFx0XHRcdHZhbHVlLmxlbmd0aCA8IHZhbGlkYXRpb25zW3ZhbGlkYXRpb25dID8gc2V0SXNNaW5MZW5ndGhFcnJvcih0cnVlKSA6IHNldElzTWluTGVuZ3RoRXJyb3IoZmFsc2UpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnaXNFbXB0eSc6XHJcblx0XHRcdFx0XHR2YWx1ZSA/IHNldElzRW1wdHkoZmFsc2UpIDogc2V0SXNFbXB0eSh0cnVlKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ2lzUGhvbmUnOlxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnaXNFbWFpbCc6XHJcblx0XHRcdFx0XHRjb25zdCByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuICAgIFx0XHRcdFx0KHJlLnRlc3QoU3RyaW5nKHZhbHVlKS50b0xvd2VyQ2FzZSgpKSkgPyBzZXRJc0VtYWlsRXJyb3IoZmFsc2UpIDogc2V0SXNFbWFpbEVycm9yKHRydWUpXHJcblx0XHRcdFx0XHRicmVha1xyXG5cdFx0XHR9XHRcclxuXHRcdH1cclxuXHR9LCBbdmFsdWVdKVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKGlzTWluTGVuZ3RoRXJyb3IgfHwgaXNFbXB0eSkge1xyXG5cdFx0XHRzZXRJbnB1dFZhbGlkKGZhbHNlKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRzZXRJbnB1dFZhbGlkKHRydWUpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fSwgW2lzRW1wdHksIGlzTWluTGVuZ3RoRXJyb3JdKVxyXG5cclxuXHRcclxuXHRcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGlzRW1wdHksXHJcblx0XHRpc01pbkxlbmd0aEVycm9yLFxyXG5cdFx0aW5wdXRWYWxpZCxcclxuXHRcdGlzRW1haWxFcnJvclxyXG5cdH1cclxufSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gSW1hZ2UxO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfaGVhZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvaGVhZFwiKSk7XG52YXIgX3RvQmFzZTY0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvdG8tYmFzZS02NFwiKTtcbnZhciBfaW1hZ2VDb25maWcgPSByZXF1aXJlKFwiLi4vc2VydmVyL2ltYWdlLWNvbmZpZ1wiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgICBmb3IodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbihzeW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuICAgICAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0ge1xuICAgIH07XG4gICAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgIHZhciBrZXksIGk7XG4gICAgZm9yKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5jb25zdCBsb2FkZWRJbWFnZVVSTHMgPSBuZXcgU2V0KCk7XG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBnbG9iYWwuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZTtcbn1cbmNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTID0gW1xuICAgICdsYXp5JyxcbiAgICAnZWFnZXInLFxuICAgIHVuZGVmaW5lZFxuXTtcbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwKFtcbiAgICBbXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgZGVmYXVsdExvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnaW1naXgnLFxuICAgICAgICBpbWdpeExvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnY2xvdWRpbmFyeScsXG4gICAgICAgIGNsb3VkaW5hcnlMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2FrYW1haScsXG4gICAgICAgIGFrYW1haUxvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnY3VzdG9tJyxcbiAgICAgICAgY3VzdG9tTG9hZGVyXG4gICAgXSwgXG5dKTtcbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICAgJ2ZpbGwnLFxuICAgICdmaXhlZCcsXG4gICAgJ2ludHJpbnNpYycsXG4gICAgJ3Jlc3BvbnNpdmUnLFxuICAgIHVuZGVmaW5lZCwgXG5dO1xuZnVuY3Rpb24gaXNTdGF0aWNSZXF1aXJlKHNyYykge1xuICAgIHJldHVybiBzcmMuZGVmYXVsdCAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTdGF0aWNJbWFnZURhdGEoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5zcmMgIT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzU3RhdGljSW1wb3J0KHNyYykge1xuICAgIHJldHVybiB0eXBlb2Ygc3JjID09PSAnb2JqZWN0JyAmJiAoaXNTdGF0aWNSZXF1aXJlKHNyYykgfHwgaXNTdGF0aWNJbWFnZURhdGEoc3JjKSk7XG59XG5jb25zdCB7IGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyAsIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMgLCBsb2FkZXI6IGNvbmZpZ0xvYWRlciAsIHBhdGg6IGNvbmZpZ1BhdGggLCBkb21haW5zOiBjb25maWdEb21haW5zICwgIH0gPSBwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyB8fCBfaW1hZ2VDb25maWcuaW1hZ2VDb25maWdEZWZhdWx0O1xuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFtcbiAgICAuLi5jb25maWdEZXZpY2VTaXplcyxcbiAgICAuLi5jb25maWdJbWFnZVNpemVzXG5dO1xuY29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSwgYik9PmEgLSBiXG4pO1xuYWxsU2l6ZXMuc29ydCgoYSwgYik9PmEgLSBiXG4pO1xuZnVuY3Rpb24gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKSB7XG4gICAgaWYgKHNpemVzICYmIChsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykpIHtcbiAgICAgICAgLy8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbiAgICAgICAgY29uc3Qgdmlld3BvcnRXaWR0aFJlID0gLyhefFxccykoMT9cXGQ/XFxkKXZ3L2c7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRTaXplcyA9IFtdO1xuICAgICAgICBmb3IobGV0IG1hdGNoOyBtYXRjaCA9IHZpZXdwb3J0V2lkdGhSZS5leGVjKHNpemVzKTsgbWF0Y2gpe1xuICAgICAgICAgICAgcGVyY2VudFNpemVzLnB1c2gocGFyc2VJbnQobWF0Y2hbMl0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGVyY2VudFNpemVzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3Qgc21hbGxlc3RSYXRpbyA9IE1hdGgubWluKC4uLnBlcmNlbnRTaXplcykgKiAwLjAxO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3aWR0aHM6IGFsbFNpemVzLmZpbHRlcigocyk9PnMgPj0gY29uZmlnRGV2aWNlU2l6ZXNbMF0gKiBzbWFsbGVzdFJhdGlvXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoczogYWxsU2l6ZXMsXG4gICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHwgbGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgd2lkdGhzID0gW1xuICAgICAgICAuLi5uZXcgU2V0KC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAgIC8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuICAgICAgICAvLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbiAgICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgICAgLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbiAgICAgICAgLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuICAgICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgICAgLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuICAgICAgICBbXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIHdpZHRoICogMiAvKiwgd2lkdGggKiAzKi8gXG4gICAgICAgIF0ubWFwKCh3KT0+YWxsU2l6ZXMuZmluZCgocCk9PnAgPj0gd1xuICAgICAgICAgICAgKSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgICApKSwgXG4gICAgXTtcbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aHMsXG4gICAgICAgIGtpbmQ6ICd4J1xuICAgIH07XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHsgc3JjICwgdW5vcHRpbWl6ZWQgLCBsYXlvdXQgLCB3aWR0aCAsIHF1YWxpdHkgLCBzaXplcyAsIGxvYWRlciAgfSkge1xuICAgIGlmICh1bm9wdGltaXplZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzaXplczogdW5kZWZpbmVkXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHsgd2lkdGhzICwga2luZCAgfSA9IGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcyk7XG4gICAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgICAgICBzcmNTZXQ6IHdpZHRocy5tYXAoKHcsIGkpPT5gJHtsb2FkZXIoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3XG4gICAgICAgICAgICB9KX0gJHtraW5kID09PSAndycgPyB3IDogaSArIDF9JHtraW5kfWBcbiAgICAgICAgKS5qb2luKCcsICcpLFxuICAgICAgICAvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuICAgICAgICAvLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4gICAgICAgIC8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbiAgICAgICAgLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbiAgICAgICAgLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4gICAgICAgIC8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94LlxuICAgICAgICBzcmM6IGxvYWRlcih7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoc1tsYXN0XVxuICAgICAgICB9KVxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRJbnQoeCkge1xuICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wcykge1xuICAgIGNvbnN0IGxvYWQgPSBsb2FkZXJzLmdldChjb25maWdMb2FkZXIpO1xuICAgIGlmIChsb2FkKSB7XG4gICAgICAgIHJldHVybiBsb2FkKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgcm9vdDogY29uZmlnUGF0aFxuICAgICAgICB9LCBsb2FkZXJQcm9wcykpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke19pbWFnZUNvbmZpZy5WQUxJRF9MT0FERVJTLmpvaW4oJywgJyl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YCk7XG59XG4vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gaGFuZGxlTG9hZGluZyhpbWcsIHNyYywgbGF5b3V0LCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpIHtcbiAgICBpZiAoIWltZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUxvYWQgPSAoKT0+e1xuICAgICAgICBpZiAoIWltZy5zcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgICAgICAgICAgY29uc3QgcCA9ICdkZWNvZGUnIGluIGltZyA/IGltZy5kZWNvZGUoKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgcC5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgfSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5maWx0ZXIgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbG9hZGVkSW1hZ2VVUkxzLmFkZChzcmMpO1xuICAgICAgICAgICAgICAgIGlmIChvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IG5hdHVyYWxXaWR0aCAsIG5hdHVyYWxIZWlnaHQgIH0gPSBpbWc7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBhc3MgYmFjayByZWFkLW9ubHkgcHJpbWl0aXZlIHZhbHVlcyBidXQgbm90IHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyB1bmRlcmx5aW5nIERPTSBlbGVtZW50IGJlY2F1c2UgaXQgY291bGQgYmUgbWlzdXNlZC5cbiAgICAgICAgICAgICAgICAgICAgb25Mb2FkaW5nQ29tcGxldGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbEhlaWdodFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChyZWYgPSBpbWcucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZ2V0Q29tcHV0ZWRTdHlsZShpbWcucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJyAmJiBwYXJlbnQuZGlzcGxheSA9PT0gJ2ZsZXgnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IGFzIGEgY2hpbGQgb2YgYSBmbGV4IGNvbnRhaW5lci4gQ29uc2lkZXIgd3JhcHBpbmcgdGhlIGltYWdlIHdpdGggYSBkaXYgdG8gY29uZmlndXJlIHRoZSB3aWR0aC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZmlsbCcgJiYgcGFyZW50LnBvc2l0aW9uICE9PSAncmVsYXRpdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IHdpdGggYSBwYXJlbnQgdXNpbmcgcG9zaXRpb246XCIke3BhcmVudC5wb3NpdGlvbn1cIi4gQ29uc2lkZXIgY2hhbmdpbmcgdGhlIHBhcmVudCBzdHlsZSB0byBwb3NpdGlvbjpcInJlbGF0aXZlXCIgd2l0aCBhIHdpZHRoIGFuZCBoZWlnaHQuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKGltZy5jb21wbGV0ZSkge1xuICAgICAgICAvLyBJZiB0aGUgcmVhbCBpbWFnZSBmYWlscyB0byBsb2FkLCB0aGlzIHdpbGwgc3RpbGwgcmVtb3ZlIHRoZSBwbGFjZWhvbGRlci5cbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3Igbm93LCBhbmQgd2lsbCBiZSByZXZpc2l0ZWQgd2hlbiBlcnJvclxuICAgICAgICAvLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuICAgICAgICBoYW5kbGVMb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW1nLm9ubG9hZCA9IGhhbmRsZUxvYWQ7XG4gICAgfVxufVxuZnVuY3Rpb24gSW1hZ2UxKF9wYXJhbSkge1xuICAgIHZhciB7IHNyYyAsIHNpemVzICwgdW5vcHRpbWl6ZWQgPWZhbHNlICwgcHJpb3JpdHkgPWZhbHNlICwgbG9hZGluZyAsIGxhenlCb3VuZGFyeSA9JzIwMHB4JyAsIGNsYXNzTmFtZSAsIHF1YWxpdHkgLCB3aWR0aCAsIGhlaWdodCAsIG9iamVjdEZpdCAsIG9iamVjdFBvc2l0aW9uICwgb25Mb2FkaW5nQ29tcGxldGUgLCBsb2FkZXIgPWRlZmF1bHRJbWFnZUxvYWRlciAsIHBsYWNlaG9sZGVyID0nZW1wdHknICwgYmx1ckRhdGFVUkwgIH0gPSBfcGFyYW0sIGFsbCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcGFyYW0sIFtcInNyY1wiLCBcInNpemVzXCIsIFwidW5vcHRpbWl6ZWRcIiwgXCJwcmlvcml0eVwiLCBcImxvYWRpbmdcIiwgXCJsYXp5Qm91bmRhcnlcIiwgXCJjbGFzc05hbWVcIiwgXCJxdWFsaXR5XCIsIFwid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJvYmplY3RGaXRcIiwgXCJvYmplY3RQb3NpdGlvblwiLCBcIm9uTG9hZGluZ0NvbXBsZXRlXCIsIFwibG9hZGVyXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJibHVyRGF0YVVSTFwiXSk7XG4gICAgbGV0IHJlc3QgPSBhbGw7XG4gICAgbGV0IGxheW91dCA9IHNpemVzID8gJ3Jlc3BvbnNpdmUnIDogJ2ludHJpbnNpYyc7XG4gICAgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbiAgICAgICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dDtcbiAgICAgICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgICAgICBkZWxldGUgcmVzdFsnbGF5b3V0J107XG4gICAgfVxuICAgIGxldCBzdGF0aWNTcmMgPSAnJztcbiAgICBpZiAoaXNTdGF0aWNJbXBvcnQoc3JjKSkge1xuICAgICAgICBjb25zdCBzdGF0aWNJbWFnZURhdGEgPSBpc1N0YXRpY1JlcXVpcmUoc3JjKSA/IHNyYy5kZWZhdWx0IDogc3JjO1xuICAgICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5zcmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBzcmMuIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBibHVyRGF0YVVSTCA9IGJsdXJEYXRhVVJMIHx8IHN0YXRpY0ltYWdlRGF0YS5ibHVyRGF0YVVSTDtcbiAgICAgICAgc3RhdGljU3JjID0gc3RhdGljSW1hZ2VEYXRhLnNyYztcbiAgICAgICAgaWYgKCFsYXlvdXQgfHwgbGF5b3V0ICE9PSAnZmlsbCcpIHtcbiAgICAgICAgICAgIGhlaWdodCA9IGhlaWdodCB8fCBzdGF0aWNJbWFnZURhdGEuaGVpZ2h0O1xuICAgICAgICAgICAgd2lkdGggPSB3aWR0aCB8fCBzdGF0aWNJbWFnZURhdGEud2lkdGg7XG4gICAgICAgICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5oZWlnaHQgfHwgIXN0YXRpY0ltYWdlRGF0YS53aWR0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBoZWlnaHQgYW5kIHdpZHRoLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3JjID0gdHlwZW9mIHNyYyA9PT0gJ3N0cmluZycgPyBzcmMgOiBzdGF0aWNTcmM7XG4gICAgY29uc3Qgd2lkdGhJbnQgPSBnZXRJbnQod2lkdGgpO1xuICAgIGNvbnN0IGhlaWdodEludCA9IGdldEludChoZWlnaHQpO1xuICAgIGNvbnN0IHF1YWxpdHlJbnQgPSBnZXRJbnQocXVhbGl0eSk7XG4gICAgbGV0IGlzTGF6eSA9ICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJyk7XG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCdkYXRhOicpIHx8IHNyYy5zdGFydHNXaXRoKCdibG9iOicpKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgICAgIHVub3B0aW1pemVkID0gdHJ1ZTtcbiAgICAgICAgaXNMYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBsb2FkZWRJbWFnZVVSTHMuaGFzKHNyYykpIHtcbiAgICAgICAgaXNMYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgICAgIH0pfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKHdpZHRoSW50KSB8fCB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTihoZWlnaHRJbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJ3aWR0aFwiIG9yIFwiaGVpZ2h0XCIgcHJvcGVydHkuIFRoZXNlIHNob3VsZCBiZSBudW1lcmljIHZhbHVlcy5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGF5b3V0ID09PSAnZmlsbCcgJiYgKHdpZHRoIHx8IGhlaWdodCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBhbmQgXCJsYXlvdXQ9J2ZpbGwnXCIgaGFzIHVudXNlZCBwcm9wZXJ0aWVzIGFzc2lnbmVkLiBQbGVhc2UgcmVtb3ZlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIi5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgICAgICAgaWYgKGxheW91dCAhPT0gJ2ZpbGwnICYmICh3aWR0aEludCB8fCAwKSAqIChoZWlnaHRJbnQgfHwgMCkgPCAxNjAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHNtYWxsZXIgdGhhbiA0MHg0MC4gQ29uc2lkZXIgcmVtb3ZpbmcgdGhlIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYmx1ckRhdGFVUkwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBWQUxJRF9CTFVSX0VYVCA9IFtcbiAgICAgICAgICAgICAgICAgICAgJ2pwZWcnLFxuICAgICAgICAgICAgICAgICAgICAncG5nJyxcbiAgICAgICAgICAgICAgICAgICAgJ3dlYnAnXG4gICAgICAgICAgICAgICAgXSAvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IGJ1dCBpcyBtaXNzaW5nIHRoZSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHkuXG4gICAgICAgICAgUG9zc2libGUgc29sdXRpb25zOlxuICAgICAgICAgICAgLSBBZGQgYSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHksIHRoZSBjb250ZW50cyBzaG91bGQgYmUgYSBzbWFsbCBEYXRhIFVSTCB0byByZXByZXNlbnQgdGhlIGltYWdlXG4gICAgICAgICAgICAtIENoYW5nZSB0aGUgXCJzcmNcIiBwcm9wZXJ0eSB0byBhIHN0YXRpYyBpbXBvcnQgd2l0aCBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmaWxlIHR5cGVzOiAke1ZBTElEX0JMVVJfRVhULmpvaW4oJywnKX1cbiAgICAgICAgICAgIC0gUmVtb3ZlIHRoZSBcInBsYWNlaG9sZGVyXCIgcHJvcGVydHksIGVmZmVjdGl2ZWx5IG5vIGJsdXIgZWZmZWN0XG4gICAgICAgICAgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wbGFjZWhvbGRlci1ibHVyLWRhdGEtdXJsYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdyZWYnIGluIHJlc3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyB1c2luZyB1bnN1cHBvcnRlZCBcInJlZlwiIHByb3BlcnR5LiBDb25zaWRlciB1c2luZyB0aGUgXCJvbkxvYWRpbmdDb21wbGV0ZVwiIHByb3BlcnR5IGluc3RlYWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdzdHlsZScgaW4gcmVzdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwic3R5bGVcIiBwcm9wZXJ0eS4gUGxlYXNlIHVzZSB0aGUgXCJjbGFzc05hbWVcIiBwcm9wZXJ0eSBpbnN0ZWFkLmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSArIDEwMDtcbiAgICAgICAgaWYgKCF1bm9wdGltaXplZCAmJiAhbG9hZGVyKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHdpZHRoOiByYW5kLFxuICAgICAgICAgICAgcXVhbGl0eTogNzVcbiAgICAgICAgfSkuaW5jbHVkZXMocmFuZC50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBhIFwibG9hZGVyXCIgcHJvcGVydHkgdGhhdCBkb2VzIG5vdCBpbXBsZW1lbnQgd2lkdGguIFBsZWFzZSBpbXBsZW1lbnQgaXQgb3IgdXNlIHRoZSBcInVub3B0aW1pemVkXCIgcHJvcGVydHkgaW5zdGVhZC5gICsgYFxcblJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS1taXNzaW5nLWxvYWRlci13aWR0aGApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46IGxhenlCb3VuZGFyeSxcbiAgICAgICAgZGlzYWJsZWQ6ICFpc0xhenlcbiAgICB9KTtcbiAgICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWQ7XG4gICAgbGV0IHdyYXBwZXJTdHlsZTtcbiAgICBsZXQgc2l6ZXJTdHlsZTtcbiAgICBsZXQgc2l6ZXJTdmc7XG4gICAgbGV0IGltZ1N0eWxlID0ge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG9iamVjdEZpdCxcbiAgICAgICAgb2JqZWN0UG9zaXRpb25cbiAgICB9O1xuICAgIGNvbnN0IGJsdXJTdHlsZSA9IHBsYWNlaG9sZGVyID09PSAnYmx1cicgPyB7XG4gICAgICAgIGZpbHRlcjogJ2JsdXIoMjBweCknLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogb2JqZWN0Rml0IHx8ICdjb3ZlcicsXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYCxcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBvYmplY3RQb3NpdGlvbiB8fCAnMCUgMCUnXG4gICAgfSA6IHtcbiAgICB9O1xuICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJykge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgICAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50O1xuICAgICAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWA7XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJSdcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gO1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodEludFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGltZ0F0dHJpYnV0ZXMgPSB7XG4gICAgICAgIHNyYzogJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gICAgICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgICAgICBzaXplczogdW5kZWZpbmVkXG4gICAgfTtcbiAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICAgIGltZ0F0dHJpYnV0ZXMgPSBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICAgICAgbGF5b3V0LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgICAgIHNpemVzLFxuICAgICAgICAgICAgbG9hZGVyXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgc3JjU3RyaW5nID0gc3JjO1xuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBzdHlsZTogd3JhcHBlclN0eWxlXG4gICAgfSwgc2l6ZXJTdHlsZSA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiBzaXplclN0eWxlXG4gICAgfSwgc2l6ZXJTdmcgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgIHBhZGRpbmc6IDBcbiAgICAgICAgfSxcbiAgICAgICAgYWx0OiBcIlwiLFxuICAgICAgICBcImFyaWEtaGlkZGVuXCI6IHRydWUsXG4gICAgICAgIHNyYzogYGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHsoMCwgX3RvQmFzZTY0KS50b0Jhc2U2NChzaXplclN2Zyl9YFxuICAgIH0pIDogbnVsbCkgOiBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcmVzdCwgaW1nQXR0cmlidXRlcywge1xuICAgICAgICBkZWNvZGluZzogXCJhc3luY1wiLFxuICAgICAgICBcImRhdGEtbmltZ1wiOiBsYXlvdXQsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICByZWY6IChpbWcpPT57XG4gICAgICAgICAgICBzZXRSZWYoaW1nKTtcbiAgICAgICAgICAgIGhhbmRsZUxvYWRpbmcoaW1nLCBzcmNTdHJpbmcsIGxheW91dCwgcGxhY2Vob2xkZXIsIG9uTG9hZGluZ0NvbXBsZXRlKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoe1xuICAgICAgICB9LCBpbWdTdHlsZSwgYmx1clN0eWxlKVxuICAgIH0pKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIiwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIH0sIHJlc3QsIGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICBzcmMsXG4gICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICBsYXlvdXQsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgc2l6ZXMsXG4gICAgICAgIGxvYWRlclxuICAgIH0pLCB7XG4gICAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICAgIFwiZGF0YS1uaW1nXCI6IGxheW91dCxcbiAgICAgICAgc3R5bGU6IGltZ1N0eWxlLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgbG9hZGluZzogbG9hZGluZyB8fCAnbGF6eSdcbiAgICB9KSkpLCBwcmlvcml0eSA/IC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbiAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgLy9cbiAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbiAgICAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgIGtleTogJ19fbmltZy0nICsgaW1nQXR0cmlidXRlcy5zcmMgKyBpbWdBdHRyaWJ1dGVzLnNyY1NldCArIGltZ0F0dHJpYnV0ZXMuc2l6ZXMsXG4gICAgICAgIHJlbDogXCJwcmVsb2FkXCIsXG4gICAgICAgIGFzOiBcImltYWdlXCIsXG4gICAgICAgIGhyZWY6IGltZ0F0dHJpYnV0ZXMuc3JjU2V0ID8gdW5kZWZpbmVkIDogaW1nQXR0cmlidXRlcy5zcmMsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlLlxuICAgICAgICBpbWFnZXNyY3NldDogaW1nQXR0cmlidXRlcy5zcmNTZXQsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgIGltYWdlc2l6ZXM6IGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICB9KSkgOiBudWxsKSk7XG59XG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjKSB7XG4gICAgcmV0dXJuIHNyY1swXSA9PT0gJy8nID8gc3JjLnNsaWNlKDEpIDogc3JjO1xufVxuZnVuY3Rpb24gaW1naXhMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgLy8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9hdXRvPWZvcm1hdCZmaXQ9bWF4Jnc9MzAwXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9YCk7XG4gICAgY29uc3QgcGFyYW1zID0gdXJsLnNlYXJjaFBhcmFtcztcbiAgICBwYXJhbXMuc2V0KCdhdXRvJywgcGFyYW1zLmdldCgnYXV0bycpIHx8ICdmb3JtYXQnKTtcbiAgICBwYXJhbXMuc2V0KCdmaXQnLCBwYXJhbXMuZ2V0KCdmaXQnKSB8fCAnbWF4Jyk7XG4gICAgcGFyYW1zLnNldCgndycsIHBhcmFtcy5nZXQoJ3cnKSB8fCB3aWR0aC50b1N0cmluZygpKTtcbiAgICBpZiAocXVhbGl0eSkge1xuICAgICAgICBwYXJhbXMuc2V0KCdxJywgcXVhbGl0eS50b1N0cmluZygpKTtcbiAgICB9XG4gICAgcmV0dXJuIHVybC5ocmVmO1xufVxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICB9KSB7XG4gICAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWA7XG59XG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gICAgY29uc3QgcGFyYW1zID0gW1xuICAgICAgICAnZl9hdXRvJyxcbiAgICAgICAgJ2NfbGltaXQnLFxuICAgICAgICAnd18nICsgd2lkdGgsXG4gICAgICAgICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXG4gICAgXTtcbiAgICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJztcbiAgICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWA7XG59XG5mdW5jdGlvbiBjdXN0b21Mb2FkZXIoeyBzcmMgIH0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgbWlzc2luZyBcImxvYWRlclwiIHByb3AuYCArIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXJgKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdO1xuICAgICAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICAgICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJyk7XG4gICAgICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKTtcbiAgICAgICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbignLCAnKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBxdWFsaXR5XG4gICAgICAgICAgICB9KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgICAgICAgIGxldCBwYXJzZWRTcmM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHBhcnNlZFNyYyA9IG5ldyBVUkwoc3JjKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmICFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmAgKyBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IGV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gdm9pZCAwO1xuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihjYikge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCAxKTtcbn07XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrO1xuY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihpZCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufTtcbmV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gY2FuY2VsSWRsZUNhbGxiYWNrO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVzZUludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbjtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oeyByb290TWFyZ2luICwgZGlzYWJsZWQgIH0pIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIGNvbnN0IHVub2JzZXJ2ZSA9ICgwLCBfcmVhY3QpLnVzZVJlZigpO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9ICgwLCBfcmVhY3QpLnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBzZXRSZWYgPSAoMCwgX3JlYWN0KS51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVybjtcbiAgICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShlbCwgKGlzVmlzaWJsZSk9PmlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSlcbiAgICAgICAgICAgICwge1xuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9ICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpPT4oMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLmNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgc2V0UmVmLFxuICAgICAgICB2aXNpYmxlXG4gICAgXTtcbn1cbmZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkICwgb2JzZXJ2ZXIgLCBlbGVtZW50cyAgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO1xuICAgIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgICAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgICAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xuICAgIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnO1xuICAgIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKT0+e1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KT0+e1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMDtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICBvYnNlcnZlcnMuc2V0KGlkLCBpbnN0YW5jZSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG9ic2VydmVyLFxuICAgICAgICBlbGVtZW50c1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9pbmRleC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlclwiO1xyXG5pbXBvcnQgTWFpbiBmcm9tIFwiLi4vY29tcG9uZW50cy9NYWluXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyL0hlYWRlclwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBJbmRleDogUmVhY3QuRkMgPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcblx0XHRcdDxIZWFkZXI+PC9IZWFkZXI+XHJcblx0XHRcdDxNYWluPjwvTWFpbj5cclxuXHRcdFx0PEZvb3Rlcj48L0Zvb3Rlcj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5cclxuY29uc3Qgc2VudENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpOyBcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZW50Q29udGV4dDtcclxuXHJcblxyXG5cclxuXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvb3RlclwiOiBcIkZvb3Rlcl9mb290ZXJfXzFLVzE3XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwiSGVhZGVyX3dyYXBwZXJfX0pSZ0pBXCIsXG5cdFwiX2NvbnRhaW5lclwiOiBcIkhlYWRlcl9fY29udGFpbmVyX18zRWlVLVwiLFxuXHRcImhlYWRlclwiOiBcIkhlYWRlcl9oZWFkZXJfXzItWFdYXCIsXG5cdFwiaGVhZGVyX19jb250YWluZXJcIjogXCJIZWFkZXJfaGVhZGVyX19jb250YWluZXJfXzQtWEpJXCIsXG5cdFwiaGVhZGVyX19sb2dvXCI6IFwiSGVhZGVyX2hlYWRlcl9fbG9nb19fRTF5bDFcIixcblx0XCJoZWFkZXJfX2xvZ29faWNvblwiOiBcIkhlYWRlcl9oZWFkZXJfX2xvZ29faWNvbl9fMjBVdEpcIixcblx0XCJoZWFkZXJfX2xvZ29faWNvbl9faW1nXCI6IFwiSGVhZGVyX2hlYWRlcl9fbG9nb19pY29uX19pbWdfX0hMT0hCXCIsXG5cdFwiaGVhZGVyX19sb2dvX3RleHRcIjogXCJIZWFkZXJfaGVhZGVyX19sb2dvX3RleHRfXzNTdTNhXCIsXG5cdFwiaGVhZGVyX19idXNrZXRcIjogXCJIZWFkZXJfaGVhZGVyX19idXNrZXRfXzJtbjhRXCIsXG5cdFwiaGVhZGVyX19idXNrZXRfdGV4dFwiOiBcIkhlYWRlcl9oZWFkZXJfX2J1c2tldF90ZXh0X18xeTJxSFwiLFxuXHRcImhlYWRlcl9fYnVza2V0X2ljb25cIjogXCJIZWFkZXJfaGVhZGVyX19idXNrZXRfaWNvbl9fTGl4QllcIixcblx0XCJoZWFkZXJfX2J1c2tldF9jb3VudFwiOiBcIkhlYWRlcl9oZWFkZXJfX2J1c2tldF9jb3VudF9fUG1yMjZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyYXBwZXJcIjogXCJNYWluX3dyYXBwZXJfXzJuSmxtXCIsXG5cdFwiX2NvbnRhaW5lclwiOiBcIk1haW5fX2NvbnRhaW5lcl9fM29RNjNcIixcblx0XCJwYWdlXCI6IFwiTWFpbl9wYWdlX18xYUFWVVwiLFxuXHRcInBhZ2VfX21haW5cIjogXCJNYWluX3BhZ2VfX21haW5fX0FyeF84XCIsXG5cdFwibWFpblwiOiBcIk1haW5fbWFpbl9fNkRQaURcIixcblx0XCJtYWluX19ib2R5XCI6IFwiTWFpbl9tYWluX19ib2R5X18yVzA2aVwiLFxuXHRcIm1haW5fX2JvZHlfX2NvbnRhaW5lclwiOiBcIk1haW5fbWFpbl9fYm9keV9fY29udGFpbmVyX19mQldiSlwiLFxuXHRcIm1haW5fX2Zvcm1cIjogXCJNYWluX21haW5fX2Zvcm1fXzF5T01lXCIsXG5cdFwibWFpbl9fZm9ybV9fdGFic1wiOiBcIk1haW5fbWFpbl9fZm9ybV9fdGFic19fM3M2RmRcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyYXBwZXJcIjogXCJPcmRlcl93cmFwcGVyX19POFhwaFwiLFxuXHRcIl9jb250YWluZXJcIjogXCJPcmRlcl9fY29udGFpbmVyX19UZnE3VVwiLFxuXHRcIm9yZGVyXCI6IFwiT3JkZXJfb3JkZXJfXzZ2dVAtXCIsXG5cdFwib3JkZXJfX3RpdGxlXCI6IFwiT3JkZXJfb3JkZXJfX3RpdGxlX19kZWNjd1wiLFxuXHRcIm9yZGVyX19udW1iZXJcIjogXCJPcmRlcl9vcmRlcl9fbnVtYmVyX18xV1duNFwiLFxuXHRcIm9yZGVyX190ZXh0XCI6IFwiT3JkZXJfb3JkZXJfX3RleHRfXzFlczZ4XCIsXG5cdFwib3JkZXJfX2VzdGltYXRlZFwiOiBcIk9yZGVyX29yZGVyX19lc3RpbWF0ZWRfX2c1MGctXCIsXG5cdFwib3JkZXJfX3ByaW50X3JlY2lwZVwiOiBcIk9yZGVyX29yZGVyX19wcmludF9yZWNpcGVfXzNUamZjXCIsXG5cdFwiYm9sZFwiOiBcIk9yZGVyX2JvbGRfX0RfOU9pXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwiUHJvZHVjdHNfd3JhcHBlcl9fMW5JM0NcIixcblx0XCJfY29udGFpbmVyXCI6IFwiUHJvZHVjdHNfX2NvbnRhaW5lcl9fMUhJLWFcIixcblx0XCJtYWluX19wcm9kdWN0c1wiOiBcIlByb2R1Y3RzX21haW5fX3Byb2R1Y3RzX190SkNZMlwiLFxuXHRcInByb2R1Y3RzXCI6IFwiUHJvZHVjdHNfcHJvZHVjdHNfXzJIdkdTXCIsXG5cdFwicHJvZHVjdHNfX3RleHRcIjogXCJQcm9kdWN0c19wcm9kdWN0c19fdGV4dF9fb0RFUTVcIixcblx0XCJwcm9kdWN0c19fdGV4dF90aXRsZVwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RzX190ZXh0X3RpdGxlX18yZTFZVFwiLFxuXHRcInByb2R1Y3RzX190ZXh0X2VkaXRcIjogXCJQcm9kdWN0c19wcm9kdWN0c19fdGV4dF9lZGl0X18xblY2alwiLFxuXHRcInByb2R1Y3RzX19wcm9kdWN0XCI6IFwiUHJvZHVjdHNfcHJvZHVjdHNfX3Byb2R1Y3RfXzJORlZaXCIsXG5cdFwicHJvZHVjdHNfX2Nvc3RcIjogXCJQcm9kdWN0c19wcm9kdWN0c19fY29zdF9fMTBKVnNcIixcblx0XCJwcm9kdWN0c19faW5mb3JtYXRpb25cIjogXCJQcm9kdWN0c19wcm9kdWN0c19faW5mb3JtYXRpb25fXzN4WkVCXCIsXG5cdFwicHJvZHVjdFwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RfX0VIVXlNXCIsXG5cdFwicHJvZHVjdF9faW1hZ2VcIjogXCJQcm9kdWN0c19wcm9kdWN0X19pbWFnZV9fMUNoWk5cIixcblx0XCJwcm9kdWN0X19jb250ZW50XCI6IFwiUHJvZHVjdHNfcHJvZHVjdF9fY29udGVudF9fM3B4UlVcIixcblx0XCJwcm9kdWN0X19jb250ZW50X25hbWVcIjogXCJQcm9kdWN0c19wcm9kdWN0X19jb250ZW50X25hbWVfXzNXdmNlXCIsXG5cdFwicHJvZHVjdF9fY29udGVudF9kZXNjcmlwdGlvblwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RfX2NvbnRlbnRfZGVzY3JpcHRpb25fXzJDanJSXCIsXG5cdFwicHJvZHVjdF9fY29udGVudF9xdWFudGl0eVwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RfX2NvbnRlbnRfcXVhbnRpdHlfX3FCWElRXCIsXG5cdFwicHJvZHVjdF9fcHJpY2VcIjogXCJQcm9kdWN0c19wcm9kdWN0X19wcmljZV9fMk42YzBcIixcblx0XCJjb3N0X19zdWJ0b3RhbFwiOiBcIlByb2R1Y3RzX2Nvc3RfX3N1YnRvdGFsX19GVmRHT1wiLFxuXHRcImNvc3RfX3NoaXBwaW5nXCI6IFwiUHJvZHVjdHNfY29zdF9fc2hpcHBpbmdfX3VkYlVmXCIsXG5cdFwiY29zdF9fdGF4ZXNcIjogXCJQcm9kdWN0c19jb3N0X190YXhlc19fXzhESzNcIixcblx0XCJjb3N0X190b3RhbFwiOiBcIlByb2R1Y3RzX2Nvc3RfX3RvdGFsX18xS05TSFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid3JhcHBlclwiOiBcInN0eWxlc193cmFwcGVyX18xQ3BST1wiLFxuXHRcIl9jb250YWluZXJcIjogXCJzdHlsZXNfX2NvbnRhaW5lcl9fMWh4RTJcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVtYWlsanMtY29tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pbnB1dC1tYXNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJGb290ZXIiLCJmb290ZXIiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiUHJvZHVjdHMiLCJUYWJzIiwic2VudENvbnRleHQiLCJlbWFpbGpzIiwiT3JkZXIiLCJ1c2VHZW9sb2NhdGlvbiIsIk1haW4iLCJzdGF0ZSIsInNldFN0YXRlIiwiZ2VvIiwic2V0VGltZW91dCIsInNlbmRFbWFpbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNlbmRGb3JtIiwidGFyZ2V0IiwidGhlbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwiZXJyb3IiLCJyZXNldCIsInByb2R1Y3RzIiwiaWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsInBhZ2UiLCJwYWdlX19tYWluIiwibWFpbiIsIm1haW5fX2NvbnRhaW5lciIsIl9jb250YWluZXIiLCJtYWluX19ib2R5IiwibWFpbl9fYm9keV9fY29udGFpbmVyIiwibWFpbl9fZm9ybSIsIkhlYWRlciIsImhlYWRlciIsImhlYWRlcl9fY29udGFpbmVyIiwiaGVhZGVyX19sb2dvIiwiaGVhZGVyX19sb2dvX2ljb24iLCJoZWFkZXJfX2xvZ29fdGV4dCIsImhlYWRlcl9fYnVza2V0IiwiaGVhZGVyX19idXNrZXRfdGV4dCIsImhlYWRlcl9fYnVza2V0X2ljb24iLCJoZWFkZXJfX2J1c2tldF9jb3VudCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJzZWxlY3RlZFByb2R1Y3RzIiwic2V0U2VsZWN0ZWRQcm9kdWN0cyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibWFpbl9fcHJvZHVjdHMiLCJwcm9kdWN0c19fdGV4dCIsInByb2R1Y3RzX190ZXh0X3RpdGxlIiwicHJvZHVjdHNfX3RleHRfZWRpdCIsInByb2R1Y3RzX19pdGVtcyIsIm1hcCIsInByb2R1Y3QiLCJwcm9kdWN0c19fcHJvZHVjdCIsInByb2R1Y3RfX2ltYWdlIiwicHJvZHVjdF9fY29udGVudCIsInByb2R1Y3RfX2NvbnRlbnRfbmFtZSIsInByb2R1Y3RfX2NvbnRlbnRfZGVzY3JpcHRpb24iLCJwcm9kdWN0X19jb250ZW50X3F1YW50aXR5IiwicHJvZHVjdF9fcHJpY2UiLCJwcm9kdWN0c19fY29zdCIsImNvc3RfX3N1YnRvdGFsIiwic3VidG90YWxfX3RleHQiLCJzdWJ0b3RhbF9fY291bnQiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJjb3N0X19zaGlwcGluZyIsInNoaXBwaW5nX190ZXh0Iiwic2hpcHBpbmdfX2NvdW50IiwiY29zdF9fdGF4ZXMiLCJ0YXhlc19fdGV4dCIsInRheGVzX19jb3VudCIsImNvc3RfX3RvdGFsIiwidG90YWxfX3RleHQiLCJ0b3RhbF9fY291bnQiLCJwcm9kdWN0c19faW5mb3JtYXRpb24iLCJvcmRlciIsIm9yZGVyX190aXRsZSIsIm9yZGVyX19udW1iZXIiLCJvcmRlcl9fdGV4dCIsIm9yZGVyX19lc3RpbWF0ZWQiLCJib2xkIiwib3JkZXJfX3ByaW50X3JlY2lwZSIsInVzZUlkZW50aWZpY2F0aW9uQ2FyZCIsInVzZUlucHV0IiwiSW5wdXRNYXNrIiwiZmFDcm9zc2hhaXJzIiwiRm9udEF3ZXNvbWVJY29uIiwiZ2VvbG9jYXRpb24iLCJ1bmRlZmluZWQiLCJ0b2dnbGVDbGFzcyIsInNldFRvZ2dsZUNsYXNzIiwiY2FyZFR5cGUiLCJzZXRDYXJkVHlwZSIsImZ1bGxfbmFtZSIsImlzRW1wdHkiLCJtaW5MZW5ndGgiLCJzdHJlZXQiLCJwaG9uZSIsImFwdCIsImNpdHkiLCJjb3VudHJ5IiwiemlwIiwiYiIsImNhcmQiLCJleHBpcmUiLCJzZWN1cml0eSIsImVtYWlsIiwiaXNFbWFpbCIsInZhbHVlIiwiaXNOZXh0IiwiaXNNaW5MZW5ndGhFcnJvciIsIm9uQ2hhbmdlIiwib25CbHVyIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsImZvbnRTaXplIiwiY3Vyc29yIiwiaW5wdXRWYWxpZCIsImlzRW1haWxFcnJvciIsIm5hdmlnYXRvciIsImdldEN1cnJlbnRQb3NpdGlvbiIsInN1Y2Nlc3NDYWxsYmFjayIsImVycm9yQ2FsbGJhY2siLCJzZXRDaXR5Iiwic2V0Q291bnRyeSIsInNldFppcCIsImZldGNoIiwiZCIsImpzb24iLCJyZXMiLCJjb3VudHJ5X25hbWUiLCJwb3N0YWwiLCJyZWdleCIsIlJlZ0V4cCIsIm1hdGNoIiwidGVzdCIsInVzZVZhbGlkYXRpb24iLCJpbml0aWFsVmFsdWUiLCJ2YWxpZGF0aW9ucyIsInNldFZhbHVlIiwiaXNEaXJ0eSIsInNldElzRGlydHkiLCJzZXRJc05leHQiLCJ2YWxpZCIsIm9uQ2xpY2siLCJzZXRJc0VtcHR5Iiwic2V0SXNFbWFpbEVycm9yIiwic2V0SXNNaW5MZW5ndGhFcnJvciIsInNldElucHV0VmFsaWQiLCJ2YWxpZGF0aW9uIiwibGVuZ3RoIiwicmUiLCJTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsImRlZmF1bHQiLCJJbWFnZTEiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9oZWFkIiwiX3RvQmFzZTY0IiwiX2ltYWdlQ29uZmlnIiwiX3VzZUludGVyc2VjdGlvbiIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl9fZXNNb2R1bGUiLCJfb2JqZWN0U3ByZWFkIiwiaSIsImFyZ3VtZW50cyIsInNvdXJjZSIsIm93bktleXMiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiY29uY2F0IiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZm9yRWFjaCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsImV4Y2x1ZGVkIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJzb3VyY2VTeW1ib2xLZXlzIiwiaW5kZXhPZiIsInByb3RvdHlwZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiY2FsbCIsInNvdXJjZUtleXMiLCJsb2FkZWRJbWFnZVVSTHMiLCJTZXQiLCJnbG9iYWwiLCJfX05FWFRfSU1BR0VfSU1QT1JURUQiLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsImxvYWRlcnMiLCJNYXAiLCJkZWZhdWx0TG9hZGVyIiwiaW1naXhMb2FkZXIiLCJjbG91ZGluYXJ5TG9hZGVyIiwiYWthbWFpTG9hZGVyIiwiY3VzdG9tTG9hZGVyIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImlzU3RhdGljUmVxdWlyZSIsInNyYyIsImlzU3RhdGljSW1hZ2VEYXRhIiwiaXNTdGF0aWNJbXBvcnQiLCJkZXZpY2VTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImNvbmZpZ0ltYWdlU2l6ZXMiLCJsb2FkZXIiLCJjb25maWdMb2FkZXIiLCJwYXRoIiwiY29uZmlnUGF0aCIsImRvbWFpbnMiLCJjb25maWdEb21haW5zIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9JTUFHRV9PUFRTIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJzb3J0IiwiYSIsImdldFdpZHRocyIsIndpZHRoIiwibGF5b3V0Iiwic2l6ZXMiLCJ2aWV3cG9ydFdpZHRoUmUiLCJwZXJjZW50U2l6ZXMiLCJleGVjIiwicHVzaCIsInBhcnNlSW50Iiwic21hbGxlc3RSYXRpbyIsIk1hdGgiLCJtaW4iLCJ3aWR0aHMiLCJzIiwia2luZCIsInciLCJmaW5kIiwicCIsImdlbmVyYXRlSW1nQXR0cnMiLCJ1bm9wdGltaXplZCIsInF1YWxpdHkiLCJzcmNTZXQiLCJsYXN0Iiwiam9pbiIsImdldEludCIsIngiLCJkZWZhdWx0SW1hZ2VMb2FkZXIiLCJsb2FkZXJQcm9wcyIsImxvYWQiLCJnZXQiLCJyb290IiwiRXJyb3IiLCJWQUxJRF9MT0FERVJTIiwiaGFuZGxlTG9hZGluZyIsImltZyIsInBsYWNlaG9sZGVyIiwib25Mb2FkaW5nQ29tcGxldGUiLCJoYW5kbGVMb2FkIiwic3RhcnRzV2l0aCIsImRlY29kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2F0Y2giLCJzdHlsZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEltYWdlIiwiYWRkIiwibmF0dXJhbFdpZHRoIiwibmF0dXJhbEhlaWdodCIsInJlZiIsInBhcmVudEVsZW1lbnQiLCJwYXJlbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZGlzcGxheSIsIndhcm4iLCJjb21wbGV0ZSIsIm9ubG9hZCIsIl9wYXJhbSIsInByaW9yaXR5IiwibGF6eUJvdW5kYXJ5IiwiY2xhc3NOYW1lIiwiaGVpZ2h0Iiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJibHVyRGF0YVVSTCIsImFsbCIsInJlc3QiLCJzdGF0aWNTcmMiLCJzdGF0aWNJbWFnZURhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwid2lkdGhJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaXNMYXp5IiwiaGFzIiwiaW5jbHVkZXMiLCJpc05hTiIsIlZBTElEX0JMVVJfRVhUIiwicmFuZCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJzZXRSZWYiLCJpc0ludGVyc2VjdGVkIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid3JhcHBlclN0eWxlIiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nU3R5bGUiLCJsZWZ0IiwiYm90dG9tIiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJibHVyU3R5bGUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJvdmVyZmxvdyIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsImltZ0F0dHJpYnV0ZXMiLCJzcmNTdHJpbmciLCJjcmVhdGVFbGVtZW50IiwiYWx0IiwidG9CYXNlNjQiLCJhc3NpZ24iLCJkZWNvZGluZyIsInJlbCIsImFzIiwiaHJlZiIsImltYWdlc3Jjc2V0IiwiaW1hZ2VzaXplcyIsIm5vcm1hbGl6ZVNyYyIsInNsaWNlIiwidXJsIiwiVVJMIiwicGFyYW1zIiwic2VhcmNoUGFyYW1zIiwic2V0IiwicGFyYW1zU3RyaW5nIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsImVyciIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVxdWVzdElkbGVDYWxsYmFjayIsImNhbmNlbElkbGVDYWxsYmFjayIsInNlbGYiLCJiaW5kIiwid2luZG93IiwiY2IiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImNsZWFyVGltZW91dCIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ1c2VSZWYiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZUNhbGxiYWNrIiwiZWwiLCJjdXJyZW50IiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvcHRpb25zIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJpbnN0YW5jZSIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJJbmRleCIsIndyYXBwZXIiLCJjcmVhdGVDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==