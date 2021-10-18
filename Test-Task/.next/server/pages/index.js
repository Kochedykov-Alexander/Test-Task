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
/* harmony import */ var _styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Main.module.scss */ "./styles/Main.module.scss");
/* harmony import */ var _styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products */ "./components/Products.tsx");
/* harmony import */ var _UI_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI/Tabs */ "./components/UI/Tabs.tsx");
/* harmony import */ var _shared_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/context */ "./shared/context.ts");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emailjs-com */ "emailjs-com");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UI_Order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UI/Order */ "./components/UI/Order.tsx");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mutations_order__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mutations/order */ "./mutations/order.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\front\\Test-Task\\Test-Task\\components\\Main.tsx";











const Main = () => {
  const {
    state,
    setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_shared_context__WEBPACK_IMPORTED_MODULE_3__.default);
  const [newOrder] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useMutation)(_mutations_order__WEBPACK_IMPORTED_MODULE_7__.CREATE_ORDER);
  const {
    0: order,
    1: setOrder
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (state == true) {
      setTimeout(() => setState(false), 10000);
    }
  }, [state]);

  function sendEmail(e) {
    e.preventDefault();
    const form = document.getElementById('form');
    const full_name = form.querySelector('[name="name"]')["value"];
    const email = form.querySelector('[name="email"]')["value"];
    const phone = form.querySelector('[name="phone"]')["value"];
    const street = form.querySelector('[name="street"]')["value"];
    const apt = form.querySelector('[name="apt"]')["value"];
    const city = form.querySelector('[name="city"]')["value"];
    const country = form.querySelector('[name="country"]')["value"];
    const zip = form.querySelector('[name="zip"]')["value"];
    const card_number = form.querySelector('[name="card_number"]')["value"];
    const expire_date = form.querySelector('[name="expire_date"]')["value"];
    const security_code = form.querySelector('[name="security_code"]')["value"];
    newOrder({
      variables: {
        input: {
          full_name,
          email,
          phone,
          street,
          apt,
          city,
          country,
          zip,
          card_number,
          expire_date,
          security_code
        }
      }
    }).then(({
      data
    }) => {
      console.log(data.createOrder);
      setOrder(data.createOrder.id);
    });
    setState(true);
    emailjs_com__WEBPACK_IMPORTED_MODULE_4___default().sendForm('service_owomoeu', 'template_x9ti2tv', e.target, 'user_CDqPOO792JWRicGOj2wWn').then(result => {
      console.log(result.text);
    }, error => {
      console.log(error.text);
    });
    e.target.reset;
  }

  ;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("main", {
    className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().page),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().page__main) + " " + (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().main),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().main__container) + " " + (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_9___default()._container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().main__body),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().main__body__container),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("form", {
              id: "form",
              className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().main__form),
              onSubmit: sendEmail,
              children: !state ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_UI_Tabs__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 18
              }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_UI_Order__WEBPACK_IMPORTED_MODULE_5__.default, {
                order: order
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 28
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 7
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Products__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 7
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 68,
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
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _query_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../query/product */ "./query/product.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\front\\Test-Task\\Test-Task\\components\\Navbar\\Header.tsx";






const Header = () => {
  const {
    0: selectedProducts,
    1: setSelectedProducts
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    data,
    loading,
    error,
    refetch
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(_query_product__WEBPACK_IMPORTED_MODULE_2__.GET_ALL_PRODUCTS, {
    pollInterval: 500
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!loading) {
      setSelectedProducts(data.getAllProducts);
    }
  }, [data]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("header", {
    className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header__container) + " " + (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default()._container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header__logo),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header__logo_icon),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
            src: "../../logo.png",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header__logo_text)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header__busket),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header__busket_text),
          children: "cart"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 5
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header__busket_icon),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
            src: "../../basket.png",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 6
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
            className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header__busket_count),
            children: selectedProducts ? selectedProducts.length : '0'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 6
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 5
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 4
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
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
/* harmony import */ var _styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Products.module.scss */ "./styles/Products.module.scss");
/* harmony import */ var _styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _query_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../query/product */ "./query/product.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\front\\Test-Task\\Test-Task\\components\\Products.tsx";







const Products = () => {
  const {
    0: selectedProducts,
    1: setSelectedProducts
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    data,
    loading,
    error,
    refetch
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_query_product__WEBPACK_IMPORTED_MODULE_3__.GET_ALL_PRODUCTS, {
    pollInterval: 500
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!loading) {
      setSelectedProducts(data.getAllProducts);
    }
  }, [data]);

  if (loading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 10
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().main__products),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().products__text),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().products__text_title),
        children: "Order summary"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
        className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().products__text_edit),
        children: "edit order"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
      className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().products__items),
      children: !loading && selectedProducts.map(product => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().products__product),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().product__image),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            src: "/../public/sumka.png",
            width: 45,
            height: 45,
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 8
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().product__content),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().product__content_name),
            children: product.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 8
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().product__content_description),
            children: product.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 8
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().product__content_quantity),
            children: "Quantity: 1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 8
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().product__price),
          children: ["$", product.price]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 8
        }, undefined)]
      }, product.id, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 6
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().products__cost),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().cost__subtotal),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().subtotal__text),
          children: "Subtotal"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().subtotal__count),
          children: ["$", !loading && selectedProducts.reduce((acc, cur) => {
            return acc + cur.price;
          }, 0)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 6
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().cost__shipping),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().shipping__text),
          children: "Shipping"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().shipping__count),
          children: "Free"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 6
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().cost__taxes),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().taxes__text),
          children: "Taxes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().taxes__count),
          children: !loading && selectedProducts.reduce((acc, cur) => acc + cur.price, 0) * 0.03
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 6
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().cost__total),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().total__text),
          children: "Total"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().total__count),
          children: ["$", !loading && selectedProducts.reduce((acc, cur) => acc + cur.price, 0) + selectedProducts.reduce((acc, cur) => acc + cur.price, 0) * 0.03]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 6
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("footer", {
      className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_5___default().products__information),
      children: "All purchases are subject to our Terms and Conditions."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
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
/* harmony import */ var _styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Order.module.scss */ "./styles/Order.module.scss");
/* harmony import */ var _styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _query_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../query/order */ "./query/order.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\front\\Test-Task\\Test-Task\\components\\UI\\Order.tsx";






const Order = ({
  order
}) => {
  const {
    0: selectedOrder,
    1: setSelectedOrder
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  console.log(order);
  const {
    data,
    loading,
    error,
    refetch
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(_query_order__WEBPACK_IMPORTED_MODULE_2__.GET_ORDER_BY_ID, {
    variables: {
      order
    },
    pollInterval: 500
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!loading) {
      setSelectedOrder(data.getOrderById);
    }
  }, [data]);

  if (loading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 10
    }, undefined);
  }

  const printRecipe = () => {
    window.print();
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: (_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_4___default().order),
    children: selectedOrder && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_4___default().order__title),
        children: [selectedOrder.full_name, ", Thank You for your order!"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 4
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_4___default().order__number),
        children: ["Order number is: ", selectedOrder.id]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 4
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_4___default().order__text),
        children: ["Your will recieve an email confirmation shortly to ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
          href: "",
          children: selectedOrder.email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 56
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 4
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_4___default().order__estimated),
        children: ["Estimated delivery Day is ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          className: (_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_4___default().bold),
          children: "Friday 1st April 2016"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 31
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 4
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
        className: (_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_4___default().order__print_recipe),
        onClick: printRecipe,
        children: "Print Recipe"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 4
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\front\\Test-Task\\Test-Task\\components\\UI\\Tabs.tsx";







 //import sentContext from '../../shared/context';
// interface TabsProps {
// 	children?: React.ReactChild | React.ReactNode,
// }



const Tabs = () => {
  const {
    0: toggleClass,
    1: setToggleClass
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const {
    0: cardType,
    1: setCardType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: isDetected,
    1: setIsDetected
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const geolocation = (0,_hooks_useGeolocation__WEBPACK_IMPORTED_MODULE_1__.useGeolocation)(isDetected);
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
  }, geolocation, 'city');
  const country = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.useInput)('', {
    isEmpty: true
  }, geolocation, 'country');
  const zip = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.useInput)('', {
    isEmpty: true
  }, geolocation, 'zip');
  const b = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.useInput)('', {});
  const card_number = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.useInput)('', {
    isEmpty: true
  });
  const expire_date = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.useInput)('', {
    isEmpty: true
  });
  const security_code = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.useInput)('', {
    isEmpty: true
  });
  const email = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.useInput)('', {
    isEmail: true
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    jquery__WEBPACK_IMPORTED_MODULE_7___default()('.select').focus(function () {
      jquery__WEBPACK_IMPORTED_MODULE_7___default()('.content__inputs__row_country').toggleClass('content__inputs__row_country_search');
      jquery__WEBPACK_IMPORTED_MODULE_7___default()('.content__inputs__row_country').removeClass('content__inputs__row_country_arrow');
    });
    jquery__WEBPACK_IMPORTED_MODULE_7___default()('.select').blur(function () {
      jquery__WEBPACK_IMPORTED_MODULE_7___default()('.content__inputs__row_country').removeClass('content__inputs__row_country_search');
      jquery__WEBPACK_IMPORTED_MODULE_7___default()('.content__inputs__row_country').toggleClass('content__inputs__row_country_arrow');
    });
  }, []);

  function getDetected() {
    setIsDetected(true);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    console.log(geolocation.city);
    console.log(city.value);
  }, [geolocation]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setCardType((0,_hooks_useIdentificationCard__WEBPACK_IMPORTED_MODULE_2__.useIdentificationCard)(card_number.value));
  }, [card_number.value]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: "main-block__form__tabs",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: toggleClass === 1 ? "tabs active-tabs" : "tabs",
        id: "tab1",
        onClick: () => setToggleClass(1),
        children: "Shipping"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: toggleClass === 2 ? "tabs active-tabs" : "tabs",
        onClick: () => setToggleClass(2),
        children: "Billing"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: toggleClass === 3 ? "tabs active-tabs" : "tabs",
        onClick: () => setToggleClass(3),
        children: "Payment"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: "main-block__form__tabs__content",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: toggleClass === 1 ? "content active-content" : "content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "content__title",
          children: "Shipping info"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "content__recipient",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "content__recipient_text",
            children: "Recipient"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "content__inputs",
          children: [(b.isNext && full_name.isEmpty || b.isNext && full_name.isMinLengthError) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "message",
            children: "Please enter recipient full name and min length = 3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 94
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
            type: "text",
            className: b.isNext && full_name.isEmpty || b.isNext && full_name.isMinLengthError ? "content__inputs_fullname focused" : "content__inputs_fullname",
            name: "name",
            placeholder: "Full Name",
            value: full_name.value,
            onChange: e => full_name.onChange(e),
            onBlur: e => full_name.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "content__inputs_daytime_container",
            children: [b.isNext && phone.isEmpty && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "message",
              children: "Please enter recipient phone in format +7 (000) 000 00 00"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 47
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_4___default()), {
              name: "phone",
              mask: "+7\\(999)999-99-99",
              type: "tel",
              className: b.isNext && phone.isEmpty ? "content__inputs_daytime focused" : "content__inputs_daytime",
              id: "phoneNumber",
              placeholder: "Datetime Phone",
              value: phone.value,
              onChange: e => phone.onChange(e),
              onBlur: e => phone.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 13
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("label", {
              htmlFor: "content__inputs_daytime_label",
              children: "For delivery questions only"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "content__address",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "content__address_text",
            children: "Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "content__inputs",
          children: [b.isNext && street.isEmpty && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "message",
            children: "Please enter recipient street"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 47
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
            type: "text",
            className: b.isNext && street.isEmpty ? "content__inputs_street focused" : "content__inputs_street",
            name: "street",
            placeholder: "Street Address",
            value: street.value,
            onChange: e => street.onChange(e),
            onBlur: e => street.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
            type: "text",
            className: "content__inputs_apt",
            name: "apt",
            placeholder: "Apt, Suite, Bldg, Gate Code. (optional)",
            value: apt.value,
            onChange: e => apt.onChange(e),
            onBlur: e => apt.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "content__inputs_icon",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
              type: "text",
              name: "city",
              className: b.isNext && city.isEmpty ? "content__inputs_city focused" : "content__inputs_city",
              value: city.value,
              placeholder: "City",
              onChange: e => {
                city.onChange(e);
              },
              onBlur: e => city.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 11
            }, undefined), !isDetected ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
              onClick: getDetected,
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
              lineNumber: 123,
              columnNumber: 27
            }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faCrosshairs,
              style: {
                position: 'absolute',
                opacity: '0.4',
                top: '40%',
                right: '10px',
                fontSize: '20px',
                cursor: 'pointer'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 185
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 10
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "content__inputs__row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "content__inputs__row_count",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                className: "content__inputs__row_country content__inputs__row_country_arrow",
                id: "editor",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
                  type: "text",
                  className: b.isNext && country.isEmpty ? "select focused" : "select",
                  name: "country",
                  placeholder: "Country",
                  list: "cityname",
                  value: country.value,
                  onChange: e => {
                    country.onChange(e);
                  },
                  onBlur: e => country.onBlur(e)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 12
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("datalist", {
                  id: "cityname",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                    value: "Russia"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 132,
                    columnNumber: 14
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                    value: "Ukraine"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 14
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                    value: "Belarus"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 14
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                    value: "USA"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 135,
                    columnNumber: 14
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                    value: "Germany"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                    columnNumber: 14
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                    value: "France"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 137,
                    columnNumber: 14
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 13
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 12
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 11
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
              type: "text",
              className: b.isNext && zip.isEmpty ? "content__inputs__row_zip focused" : "content__inputs__row_zip",
              name: "zip",
              placeholder: "ZIP",
              value: zip.value,
              onChange: e => {
                zip.onChange(e);
              },
              onBlur: e => zip.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 10
        }, undefined), full_name.inputValid && phone.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
          onClick: () => setToggleClass(2),
          className: "content__button",
          style: {
            cursor: 'pointer'
          },
          children: "Continue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, undefined), !(full_name.inputValid && phone.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
          className: "content__button",
          style: {
            cursor: 'pointer'
          },
          children: "Continue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: toggleClass === 2 ? "content active-content" : "content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "content__title",
          children: "Billing Information"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
          onClick: () => setToggleClass(1),
          className: "content__recipient_link",
          children: "Same as shipping"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "content__recipient",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "content__recipient_text",
            children: "Billing Contact"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "content__inputs",
          children: [(b.isNext && full_name.isEmpty || b.isNext && full_name.isMinLengthError) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "message",
            children: "Please enter recipient full name and min length = 3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 93
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
            type: "text",
            className: b.isNext && full_name.isEmpty || b.isNext && full_name.isMinLengthError ? "content__inputs_fullname focused" : "content__inputs_fullname",
            name: "name",
            placeholder: "Full Name",
            value: full_name.value,
            onChange: e => full_name.onChange(e),
            onBlur: e => full_name.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 11
          }, undefined), b.isNext && email.isEmailError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "message",
            children: "Please enter correct email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 48
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
            type: "text",
            className: b.isNext && email.isEmailError ? "content__inputs_email focused" : "content__inputs_email",
            name: "email",
            placeholder: "Email Address",
            value: email.value,
            onChange: e => email.onChange(e),
            onBlur: e => email.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "content__address",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "content__address_text",
            children: "Billing Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "content__inputs",
          children: [b.isNext && street.isEmpty && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "message",
            children: "Please enter recipient street"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 46
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
            type: "text",
            className: b.isNext && street.isEmpty ? "content__inputs_street focused" : "content__inputs_street",
            name: "street",
            placeholder: "Street Address",
            value: street.value,
            onChange: e => street.onChange(e),
            onBlur: e => street.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
            type: "text",
            className: "content__inputs_apt",
            placeholder: "Apt, Suite, Bldg, Gate Code. (optional)",
            name: "apt",
            value: apt.value,
            onChange: e => apt.onChange(e),
            onBlur: e => apt.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 12
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "content__inputs_icon",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
              type: "text",
              name: "city",
              className: b.isNext && city.isEmpty ? "content__inputs_city focused" : "content__inputs_city",
              placeholder: "City",
              value: geolocation.city ? geolocation.city : city.value,
              onChange: e => {
                city.onChange(e);
              },
              onBlur: e => city.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 11
            }, undefined), !isDetected ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
              onClick: getDetected,
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
              lineNumber: 190,
              columnNumber: 26
            }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faCrosshairs,
              style: {
                position: 'absolute',
                opacity: '0.4',
                top: '40%',
                right: '10px',
                fontSize: '20px',
                cursor: 'pointer'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 184
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "content__inputs__row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "content__inputs__row_count",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                className: "content__inputs__row_country",
                id: "editor",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
                  type: "text",
                  className: "select",
                  name: "country",
                  placeholder: "Country",
                  list: "cityname",
                  value: geolocation.country ? geolocation.country : country.value,
                  onChange: e => {
                    country.onChange(e);
                  },
                  onBlur: e => country.onBlur(e)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 197,
                  columnNumber: 12
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("datalist", {
                  id: "cityname",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                    value: "Russia"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 199,
                    columnNumber: 14
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                    value: "Ukraine"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 200,
                    columnNumber: 14
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                    value: "Belarus"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 201,
                    columnNumber: 14
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                    value: "USA"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 202,
                    columnNumber: 14
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                    value: "Germany"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 203,
                    columnNumber: 14
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                    value: "France"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 204,
                    columnNumber: 14
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 198,
                  columnNumber: 13
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 12
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 11
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
              type: "text",
              className: b.isNext && zip.isEmpty ? "content__inputs__row_zip focused" : "content__inputs__row_zip",
              name: "zip",
              placeholder: "ZIP",
              value: geolocation.zip ? geolocation.zip : zip.value,
              onChange: e => {
                zip.onChange(e);
              },
              onBlur: e => zip.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 10
        }, undefined), full_name.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
          onClick: () => setToggleClass(3),
          className: "content__button",
          style: {
            cursor: 'pointer'
          },
          children: "Continue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 11
        }, undefined), !(full_name.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
          className: "content__button",
          style: {
            cursor: 'pointer'
          },
          children: "Continue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: toggleClass === 3 ? "content active-content" : "content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "content__title",
          children: "Payment"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "content__ssl",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "content__ssl_logo",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
              src: "../../lock.png",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 12
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "content__ssl_text",
            children: "This is a secure 128-bit SSL encrypted payment"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "content__recipient",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "content__recipient_text",
            children: "Cardholder Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "content__inputs",
          children: [(b.isNext && full_name.isEmpty || b.isNext && full_name.isMinLengthError) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "message",
            children: "Please enter recipient full name and min length = 3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 93
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
            type: "text",
            className: b.isNext && full_name.isEmpty || b.isNext && full_name.isMinLengthError ? "content__inputs_fullname focused" : "content__inputs_fullname",
            name: "name",
            placeholder: "Name as it appears on your card",
            value: full_name.value,
            onChange: e => full_name.onChange(e),
            onBlur: e => full_name.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "content__address",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "content__address_text",
            children: "Card Number"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "content__inputs input_card",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_4___default()), {
            mask: "9999 9999 9999 9999",
            name: "card_number",
            type: "text",
            className: "content__inputs_card",
            placeholder: "XXXX XXXX XXXX XXXX XXXX",
            value: card_number.value,
            onChange: e => card_number.onChange(e),
            onBlur: e => card_number.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 246,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
            src: cardType,
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 247,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "content__cards__info",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "content__cards__info__expire",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "content__cards_info__expire_text",
              children: "Expire Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 12
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_4___default()), {
              mask: "99 / 99",
              placeholder: "MM / YY",
              type: "text",
              className: "content__cards_info__expire_input",
              name: "expire_date",
              value: expire_date.value,
              onChange: e => expire_date.onChange(e),
              onBlur: e => expire_date.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 253,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "content__cards__info__security",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "content__cards_info__security_text",
              children: "Security Code"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 256,
              columnNumber: 12
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_4___default()), {
              mask: "999",
              type: "text",
              placeholder: "XXX",
              className: "content__cards_info__security_input",
              name: "security_code",
              value: security_code.value,
              onChange: e => security_code.onChange(e),
              onBlur: e => security_code.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 257,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 10
        }, undefined), full_name.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid && card_number.inputValid && security_code.inputValid && expire_date.inputValid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("button", {
          className: "content__button",
          type: "submit",
          children: "Pay Securely"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 10
        }, undefined), !(full_name.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid && card_number.inputValid && security_code.inputValid && expire_date.inputValid) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("button", {
          className: "content__button disabled",
          disabled: true,
          children: "Pay Securely"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 10
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 8
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 76,
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

const useGeolocation = isDetected => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    console.log(isDetected);

    if (isDetected) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
  }, [isDetected]);
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
  if (value.match(regex) != null) return "/../../visa.png"; // Mastercard 
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



const useInput = (initialValue, validations, geolocation, type) => {
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (geolocation && geolocation.city && type === 'city') {
      setValue(geolocation.city);
    }

    if (geolocation && geolocation.country && type === 'country') {
      setValue(geolocation.country);
    }

    if (geolocation && geolocation.zip && type === 'zip') {
      setValue(geolocation.zip);
    }
  }, [geolocation]);

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
    if (isMinLengthError || isEmpty || isEmailError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, isMinLengthError, isEmailError]);
  return {
    isEmpty,
    isMinLengthError,
    inputValid,
    isEmailError
  };
};

/***/ }),

/***/ "./mutations/order.ts":
/*!****************************!*\
  !*** ./mutations/order.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CREATE_ORDER": () => (/* binding */ CREATE_ORDER)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const CREATE_ORDER = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`

	mutation createOrder($input: OrderInput) {
		createOrder(input: $input) {
			id, full_name, email, city, phone
		}
	}
	
`;

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

/***/ "./query/order.ts":
/*!************************!*\
  !*** ./query/order.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_ORDER_BY_ID": () => (/* binding */ GET_ORDER_BY_ID)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const GET_ORDER_BY_ID = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`

	query getOrderById($order: ID!) {
			getOrderById(id: $order) {
				id, full_name, email
			}
	}
	
`;

/***/ }),

/***/ "./query/product.ts":
/*!**************************!*\
  !*** ./query/product.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_ALL_PRODUCTS": () => (/* binding */ GET_ALL_PRODUCTS)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const GET_ALL_PRODUCTS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`

	query {
		getAllProducts {
			id, name, description, price
		}
	}
	
`;

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

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

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

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("jquery");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQSwyR0FBK0M7Ozs7Ozs7Ozs7OztBQ0EvQzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL05leHQvLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIudHN4Iiwid2VicGFjazovL05leHQvLi9jb21wb25lbnRzL01haW4udHN4Iiwid2VicGFjazovL05leHQvLi9jb21wb25lbnRzL05hdmJhci9IZWFkZXIudHN4Iiwid2VicGFjazovL05leHQvLi9jb21wb25lbnRzL1Byb2R1Y3RzLnRzeCIsIndlYnBhY2s6Ly9OZXh0Ly4vY29tcG9uZW50cy9VSS9PcmRlci50c3giLCJ3ZWJwYWNrOi8vTmV4dC8uL2NvbXBvbmVudHMvVUkvVGFicy50c3giLCJ3ZWJwYWNrOi8vTmV4dC8uL2hvb2tzL3VzZUdlb2xvY2F0aW9uLnRzIiwid2VicGFjazovL05leHQvLi9ob29rcy91c2VJZGVudGlmaWNhdGlvbkNhcmQudHMiLCJ3ZWJwYWNrOi8vTmV4dC8uL2hvb2tzL3VzZUlucHV0LnRzIiwid2VicGFjazovL05leHQvLi9ob29rcy91c2VWYWxpZGF0aW9uLnRzIiwid2VicGFjazovL05leHQvLi9tdXRhdGlvbnMvb3JkZXIudHMiLCJ3ZWJwYWNrOi8vTmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2ltYWdlLmpzIiwid2VicGFjazovL05leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vTmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vTmV4dC8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9OZXh0Ly4vcXVlcnkvb3JkZXIudHMiLCJ3ZWJwYWNrOi8vTmV4dC8uL3F1ZXJ5L3Byb2R1Y3QudHMiLCJ3ZWJwYWNrOi8vTmV4dC8uL3NoYXJlZC9jb250ZXh0LnRzIiwid2VicGFjazovL05leHQvLi9zdHlsZXMvRm9vdGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL05leHQvLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL05leHQvLi9zdHlsZXMvTWFpbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9OZXh0Ly4vc3R5bGVzL09yZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL05leHQvLi9zdHlsZXMvUHJvZHVjdHMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vTmV4dC8uL3N0eWxlcy9pbmRleC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9OZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vTmV4dC9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50XCIiLCJ3ZWJwYWNrOi8vTmV4dC9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiIiwid2VicGFjazovL05leHQvZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIiIsIndlYnBhY2s6Ly9OZXh0L2V4dGVybmFsIFwiZW1haWxqcy1jb21cIiIsIndlYnBhY2s6Ly9OZXh0L2V4dGVybmFsIFwianF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vTmV4dC9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vTmV4dC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly9OZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL05leHQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL05leHQvZXh0ZXJuYWwgXCJyZWFjdC1pbnB1dC1tYXNrXCIiLCJ3ZWJwYWNrOi8vTmV4dC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvRm9vdGVyLm1vZHVsZS5zY3NzJ1xyXG5cclxuY29uc3QgRm9vdGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG5cdFx0XHRcclxuXHRcdDwvZm9vdGVyPlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9NYWluLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgUHJvZHVjdHMgZnJvbSAnLi9Qcm9kdWN0cydcclxuaW1wb3J0IFRhYnMgZnJvbSAnLi9VSS9UYWJzJ1xyXG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gXCIuLi90eXBlcy9JUHJvZHVjdFwiO1xyXG5pbXBvcnQgc2VudENvbnRleHQgZnJvbSAnLi4vc2hhcmVkL2NvbnRleHQnO1xyXG5pbXBvcnQgZW1haWxqcyBmcm9tICdlbWFpbGpzLWNvbSc7XHJcbmltcG9ydCBPcmRlciBmcm9tICcuL1VJL09yZGVyJztcclxuaW1wb3J0IHsgdXNlR2VvbG9jYXRpb24gfSBmcm9tICcuLi9ob29rcy91c2VHZW9sb2NhdGlvbic7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgeyBDUkVBVEVfT1JERVIgfSBmcm9tICcuLi9tdXRhdGlvbnMvb3JkZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVSb3V0ZUxvYWRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyJztcclxuXHJcblxyXG5jb25zdCBNYWluOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuXHJcblx0Y29uc3Qge3N0YXRlLCBzZXRTdGF0ZX0gPSB1c2VDb250ZXh0KHNlbnRDb250ZXh0KTtcclxuXHRjb25zdCBbbmV3T3JkZXJdID0gdXNlTXV0YXRpb24oQ1JFQVRFX09SREVSKTtcclxuXHRjb25zdCBbb3JkZXIsIHNldE9yZGVyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdFxyXG5cdFxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZihzdGF0ZSA9PSB0cnVlKSB7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4gc2V0U3RhdGUoZmFsc2UpLCAxMDAwMClcclxuXHRcdH1cclxuXHR9LCBbc3RhdGVdKVxyXG5cclxuXHRmdW5jdGlvbiBzZW5kRW1haWwoZSkge1xyXG5cdFx0XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJyk7XHJcblx0XHRjb25zdCBmdWxsX25hbWUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwibmFtZVwiXScpW1widmFsdWVcIl1cclxuXHRcdGNvbnN0IGVtYWlsID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImVtYWlsXCJdJylbXCJ2YWx1ZVwiXVxyXG5cdFx0Y29uc3QgcGhvbmUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwicGhvbmVcIl0nKVtcInZhbHVlXCJdXHJcblx0XHRjb25zdCBzdHJlZXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwic3RyZWV0XCJdJylbXCJ2YWx1ZVwiXVxyXG5cdFx0Y29uc3QgYXB0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImFwdFwiXScpW1widmFsdWVcIl1cclxuXHRcdGNvbnN0IGNpdHkgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiY2l0eVwiXScpW1widmFsdWVcIl1cclxuXHRcdGNvbnN0IGNvdW50cnkgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiY291bnRyeVwiXScpW1widmFsdWVcIl1cclxuXHRcdGNvbnN0IHppcCA9IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJ6aXBcIl0nKVtcInZhbHVlXCJdXHJcblx0XHRjb25zdCBjYXJkX251bWJlciA9IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJjYXJkX251bWJlclwiXScpW1widmFsdWVcIl1cclxuXHRcdGNvbnN0IGV4cGlyZV9kYXRlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImV4cGlyZV9kYXRlXCJdJylbXCJ2YWx1ZVwiXVxyXG5cdFx0Y29uc3Qgc2VjdXJpdHlfY29kZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJzZWN1cml0eV9jb2RlXCJdJylbXCJ2YWx1ZVwiXVxyXG5cdFx0XHJcblx0XHRuZXdPcmRlcih7XHJcblx0XHRcdHZhcmlhYmxlczoge1xyXG5cdFx0XHRcdGlucHV0OiB7XHJcblx0XHRcdFx0XHRmdWxsX25hbWUsIGVtYWlsLCBwaG9uZSwgc3RyZWV0LCBhcHQsIGNpdHksIGNvdW50cnksIHppcCwgY2FyZF9udW1iZXIsIGV4cGlyZV9kYXRlLCBzZWN1cml0eV9jb2RlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KS50aGVuKCh7ZGF0YX0pID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coZGF0YS5jcmVhdGVPcmRlcilcclxuXHRcdFx0c2V0T3JkZXIoZGF0YS5jcmVhdGVPcmRlci5pZClcdFxyXG5cdFx0fSlcclxuXHRcdHNldFN0YXRlKHRydWUpXHJcblx0XHRlbWFpbGpzLnNlbmRGb3JtKCdzZXJ2aWNlX293b21vZXUnLCAndGVtcGxhdGVfeDl0aTJ0dicsIGUudGFyZ2V0LCAndXNlcl9DRHFQT083OTJKV1JpY0dPajJ3V24nKVxyXG5cdFx0ICAudGhlbigocmVzdWx0KSA9PiB7IFxyXG5cdFx0XHQgIGNvbnNvbGUubG9nKHJlc3VsdC50ZXh0KTtcclxuXHJcblx0XHQgIH0sIChlcnJvcikgPT4ge1xyXG5cdFx0XHQgIGNvbnNvbGUubG9nKGVycm9yLnRleHQpO1xyXG5cdFx0ICB9KTtcclxuXHRcdCAgZS50YXJnZXQucmVzZXQ7XHJcblx0XHQgXHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLnBhZ2V9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2VfX21haW4gKyBcIiBcIiArIHN0eWxlcy5tYWlufT5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5fX2NvbnRhaW5lciArIFwiIFwiICsgc3R5bGVzLl9jb250YWluZXJ9PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluX19ib2R5fT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluX19ib2R5X19jb250YWluZXJ9PlxyXG5cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDxmb3JtIGlkPVwiZm9ybVwiIGNsYXNzTmFtZT17c3R5bGVzLm1haW5fX2Zvcm19IG9uU3VibWl0PXtzZW5kRW1haWx9PlxyXG5cdFx0XHRcdFx0XHRcdHshc3RhdGUgPyA8VGFicy8+IDogPE9yZGVyIG9yZGVyPXtvcmRlcn0vPn1cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHRcdFx0XHQ8UHJvZHVjdHMvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvbWFpbj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW47XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tICcuLi8uLi90eXBlcy9JUHJvZHVjdCc7XHJcbmltcG9ydCB7IEdFVF9BTExfUFJPRFVDVFMgfSBmcm9tICcuLi8uLi9xdWVyeS9wcm9kdWN0JztcclxuXHJcblxyXG5cclxuY29uc3QgSGVhZGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuXHJcblx0Y29uc3QgW3NlbGVjdGVkUHJvZHVjdHMsIHNldFNlbGVjdGVkUHJvZHVjdHNdID0gdXNlU3RhdGU8SVByb2R1Y3RbXT4oW10pXHJcblx0Y29uc3Qge2RhdGEsIGxvYWRpbmcsIGVycm9yLCByZWZldGNofSA9IHVzZVF1ZXJ5KEdFVF9BTExfUFJPRFVDVFMsIHtwb2xsSW50ZXJ2YWw6IDUwMH0pO1xyXG5cdFxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKCFsb2FkaW5nKSB7XHJcblx0XHRcdHNldFNlbGVjdGVkUHJvZHVjdHMoZGF0YS5nZXRBbGxQcm9kdWN0cylcclxuXHRcdH1cdFxyXG5cdH0sIFtkYXRhXSlcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfX2NvbnRhaW5lciArIFwiIFwiICsgc3R5bGVzLl9jb250YWluZXJ9ID5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fbG9nb30+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fbG9nb19pY29ufT5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9Jy4uLy4uL2xvZ28ucG5nJyBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSB7c3R5bGVzLmhlYWRlcl9fbG9nb190ZXh0fT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fYnVza2V0fT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fYnVza2V0X3RleHR9PlxyXG5cdFx0XHRcdFx0Y2FydFxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX19idXNrZXRfaWNvbn0+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz0nLi4vLi4vYmFza2V0LnBuZycgYWx0PVwiXCIvPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX19idXNrZXRfY291bnR9PntzZWxlY3RlZFByb2R1Y3RzID8gc2VsZWN0ZWRQcm9kdWN0cy5sZW5ndGggOiAnMCd9PC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHRcclxuXHRcdDwvaGVhZGVyPlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1Byb2R1Y3RzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJy4uL3R5cGVzL0lQcm9kdWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgR0VUX0FMTF9QUk9EVUNUUyB9IGZyb20gJy4uL3F1ZXJ5L3Byb2R1Y3QnO1xyXG5cclxuXHJcblxyXG5jb25zdCBQcm9kdWN0czogUmVhY3QuRkMgPSAoKSA9PiB7XHJcblxyXG5cdGNvbnN0IFtzZWxlY3RlZFByb2R1Y3RzLCBzZXRTZWxlY3RlZFByb2R1Y3RzXSA9IHVzZVN0YXRlPElQcm9kdWN0W10+KFtdKVxyXG5cdGNvbnN0IHtkYXRhLCBsb2FkaW5nLCBlcnJvciwgcmVmZXRjaH0gPSB1c2VRdWVyeShHRVRfQUxMX1BST0RVQ1RTLCB7cG9sbEludGVydmFsOiA1MDB9KTtcclxuXHRcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmICghbG9hZGluZykge1xyXG5cdFx0XHRzZXRTZWxlY3RlZFByb2R1Y3RzKGRhdGEuZ2V0QWxsUHJvZHVjdHMpXHJcblx0XHR9XHRcclxuXHR9LCBbZGF0YV0pXHJcblx0XHJcblx0aWYgKGxvYWRpbmcpIHtcclxuXHRcdHJldHVybiA8aDE+TG9hZGluZy4uLjwvaDE+XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbl9fcHJvZHVjdHN9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RzX190ZXh0fT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RzX190ZXh0X3RpdGxlfT5cclxuXHRcdFx0XHRcdE9yZGVyIHN1bW1hcnlcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8YSBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0c19fdGV4dF9lZGl0fT5cclxuXHRcdFx0XHRcdGVkaXQgb3JkZXJcclxuXHRcdFx0XHQ8L2E+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8dWwgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdHNfX2l0ZW1zfT5cclxuXHRcdFx0XHR7IWxvYWRpbmcgJiYgIHNlbGVjdGVkUHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gXHJcblx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdHNfX3Byb2R1Y3R9IGtleT17cHJvZHVjdC5pZH0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdF9faW1hZ2V9PlxyXG5cdFx0XHRcdFx0XHRcdDxJbWFnZSBzcmM9ICcvLi4vcHVibGljL3N1bWthLnBuZycgd2lkdGg9ezQ1fSBoZWlnaHQ9ezQ1fSBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RfX2NvbnRlbnR9PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdF9fY29udGVudF9uYW1lfT5cclxuXHRcdFx0XHRcdFx0XHRcdHtwcm9kdWN0Lm5hbWV9XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0X19jb250ZW50X2Rlc2NyaXB0aW9ufT5cclxuXHRcdFx0XHRcdFx0XHRcdHtwcm9kdWN0LmRlc2NyaXB0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdF9fY29udGVudF9xdWFudGl0eX0+XHJcblx0XHRcdFx0XHRcdFx0XHRRdWFudGl0eTogMVxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RfX3ByaWNlfT5cclxuXHRcdFx0XHRcdFx0XHRcdCR7cHJvZHVjdC5wcmljZX1cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHJcblx0XHRcdFx0KX1cclxuXHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RzX19jb3N0fT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29zdF9fc3VidG90YWx9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1YnRvdGFsX190ZXh0fT5cclxuXHRcdFx0XHRcdFx0XHRTdWJ0b3RhbFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0b3RhbF9fY291bnR9PlxyXG5cdFx0XHRcdFx0XHRcdCR7IWxvYWRpbmcgJiYgc2VsZWN0ZWRQcm9kdWN0cy5yZWR1Y2UoKGFjYywgY3VyKSA9PiB7IHJldHVybiBhY2MgKyBjdXIucHJpY2UgfSwgMCl9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvc3RfX3NoaXBwaW5nfT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaGlwcGluZ19fdGV4dH0+XHJcblx0XHRcdFx0XHRcdFx0U2hpcHBpbmdcclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2hpcHBpbmdfX2NvdW50fT5cclxuXHRcdFx0XHRcdFx0XHRGcmVlXHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvc3RfX3RheGVzfT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YXhlc19fdGV4dH0+XHJcblx0XHRcdFx0XHRcdFx0VGF4ZXNcclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGF4ZXNfX2NvdW50fT5cclxuXHRcdFx0XHRcdFx0XHR7IWxvYWRpbmcgJiYgc2VsZWN0ZWRQcm9kdWN0cy5yZWR1Y2UoKGFjYywgY3VyKSA9PiBhY2MgKyBjdXIucHJpY2UsIDApKjAuMDN9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvc3RfX3RvdGFsfT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3RhbF9fdGV4dH0+XHJcblx0XHRcdFx0XHRcdFx0VG90YWxcclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG90YWxfX2NvdW50fT5cclxuXHRcdFx0XHRcdFx0XHQkeyFsb2FkaW5nICYmIHNlbGVjdGVkUHJvZHVjdHMucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjICsgY3VyLnByaWNlLCAwKSArIHNlbGVjdGVkUHJvZHVjdHMucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjICsgY3VyLnByaWNlLCAwKSowLjAzfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdHNfX2luZm9ybWF0aW9ufT5cclxuXHRcdFx0XHRcdEFsbCBwdXJjaGFzZXMgYXJlIHN1YmplY3QgdG8gb3VyIFRlcm1zIGFuZCBDb25kaXRpb25zLlxyXG5cdFx0XHRcdDwvZm9vdGVyPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0cztcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL09yZGVyLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgR0VUX09SREVSX0JZX0lEIH0gZnJvbSAnLi4vLi4vcXVlcnkvb3JkZXInO1xyXG5cclxuaW50ZXJmYWNlIE9yZGVyU3RhdGUge1xyXG5cdG9yZGVyOiBudW1iZXI7XHJcblx0Ly8gaWQ6IG51bWJlcjtcclxuXHQvLyBmdWxsX25hbWU6IHN0cmluZztcclxuICAgIC8vIHBob25lOiBzdHJpbmc7XHJcbiAgICAvLyBlbWFpbDogc3RyaW5nO1xyXG4gICAgLy8gY2l0eTogc3RyaW5nO1xyXG5cdC8vIGRhdGE6IE9iamVjdFxyXG5cdC8vIHN0cmVldDogc3RyaW5nO1xyXG4gICAgLy8gYXB0OiBzdHJpbmc7XHJcblx0Ly8gemlwOiBzdHJpbmc7XHJcblx0Ly8gY2FyZF9udW1iZXI6IHN0cmluZztcclxuXHQvLyBleHBpcmVfZGF0ZTogc3RyaW5nO1xyXG5cdC8vIHNlY3VyaXR5X2NvZGU6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgT3JkZXI6IFJlYWN0LkZDPE9yZGVyU3RhdGU+ID0gKHtvcmRlcn0pID0+IHtcclxuXHJcblx0XHJcblx0Y29uc3QgW3NlbGVjdGVkT3JkZXIsIHNldFNlbGVjdGVkT3JkZXJdID0gdXNlU3RhdGUoKTtcclxuXHRjb25zb2xlLmxvZyhvcmRlcilcclxuXHRjb25zdCB7ZGF0YSwgbG9hZGluZywgZXJyb3IsIHJlZmV0Y2h9ID0gdXNlUXVlcnkoR0VUX09SREVSX0JZX0lELCB7XHJcblx0XHR2YXJpYWJsZXM6IHtcclxuXHRcdFx0b3JkZXJcclxuXHRcdH0sXHJcblx0XHRwb2xsSW50ZXJ2YWw6IDUwMCxcclxuXHR9KTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmICghbG9hZGluZykge1xyXG5cdFx0XHRzZXRTZWxlY3RlZE9yZGVyKGRhdGEuZ2V0T3JkZXJCeUlkKVxyXG5cdFx0fVx0XHJcblx0fSwgW2RhdGFdKVxyXG5cdFxyXG5cdGlmIChsb2FkaW5nKSB7XHJcblx0XHRyZXR1cm4gPGgxPkxvYWRpbmcuLi48L2gxPlxyXG5cdH1cclxuXHJcblx0Y29uc3QgcHJpbnRSZWNpcGUgPSAoKSA9PiB7XHJcblx0XHR3aW5kb3cucHJpbnQoKVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vcmRlcn0+XHJcblx0XHRcdHtzZWxlY3RlZE9yZGVyICYmIChcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vcmRlcl9fdGl0bGV9PlxyXG5cdFx0XHRcdHtzZWxlY3RlZE9yZGVyLmZ1bGxfbmFtZX0sIFRoYW5rIFlvdSBmb3IgeW91ciBvcmRlciFcclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3JkZXJfX251bWJlcn0+XHJcblx0XHRcdFx0T3JkZXIgbnVtYmVyIGlzOiB7c2VsZWN0ZWRPcmRlci5pZH1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3JkZXJfX3RleHR9PlxyXG5cdFx0XHRcdFlvdXIgd2lsbCByZWNpZXZlIGFuIGVtYWlsIGNvbmZpcm1hdGlvbiBzaG9ydGx5IHRvIDxhIGhyZWY9XCJcIj57c2VsZWN0ZWRPcmRlci5lbWFpbH08L2E+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9yZGVyX19lc3RpbWF0ZWR9PlxyXG5cdFx0XHRcdEVzdGltYXRlZCBkZWxpdmVyeSBEYXkgaXMgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYm9sZH0+RnJpZGF5IDFzdCBBcHJpbCAyMDE2PC9wPlxyXG5cdFx0XHQ8L2Rpdj5cdFxyXG5cdFx0XHQ8YSBjbGFzc05hbWU9e3N0eWxlcy5vcmRlcl9fcHJpbnRfcmVjaXBlfSBvbkNsaWNrPXtwcmludFJlY2lwZX0+UHJpbnQgUmVjaXBlPC9hPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KX1cclxuXHRcdDwvZGl2PlxyXG5cdFx0XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcmRlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzZW50Q29udGV4dCBmcm9tICcuLi8uLi9zaGFyZWQvY29udGV4dCc7XHJcbmltcG9ydCB7IHVzZUdlb2xvY2F0aW9uIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlR2VvbG9jYXRpb24nO1xyXG5pbXBvcnQgeyB1c2VJZGVudGlmaWNhdGlvbkNhcmQgfSBmcm9tICcuLi8uLi9ob29rcy91c2VJZGVudGlmaWNhdGlvbkNhcmQnO1xyXG5pbXBvcnQgeyB1c2VJbnB1dCB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUlucHV0JztcclxuaW1wb3J0IElucHV0TWFzayBmcm9tIFwicmVhY3QtaW5wdXQtbWFza1wiO1xyXG5pbXBvcnQgeyBmYUNyb3NzaGFpcnMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcclxuXHJcblxyXG5cclxuLy9pbXBvcnQgc2VudENvbnRleHQgZnJvbSAnLi4vLi4vc2hhcmVkL2NvbnRleHQnO1xyXG5cclxuLy8gaW50ZXJmYWNlIFRhYnNQcm9wcyB7XHJcbi8vIFx0Y2hpbGRyZW4/OiBSZWFjdC5SZWFjdENoaWxkIHwgUmVhY3QuUmVhY3ROb2RlLFxyXG5cdFxyXG4vLyB9XHJcblxyXG5jb25zdCBUYWJzOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuXHJcblx0XHJcblx0XHJcblx0Y29uc3QgW3RvZ2dsZUNsYXNzLCBzZXRUb2dnbGVDbGFzc10gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xyXG5cdGNvbnN0IFtjYXJkVHlwZSwgc2V0Q2FyZFR5cGVdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcblx0Y29uc3QgW2lzRGV0ZWN0ZWQsIHNldElzRGV0ZWN0ZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cdFxyXG5cdGNvbnN0IGdlb2xvY2F0aW9uID0gdXNlR2VvbG9jYXRpb24oaXNEZXRlY3RlZCk7XHJcblxyXG5cdGNvbnN0IGZ1bGxfbmFtZSA9IHVzZUlucHV0KCcnLCB7aXNFbXB0eTogdHJ1ZSwgbWluTGVuZ3RoOiAzfSk7XHJcblx0Y29uc3Qgc3RyZWV0ID0gdXNlSW5wdXQoJycsIHtpc0VtcHR5OiB0cnVlfSk7XHJcblx0Y29uc3QgcGhvbmUgPSB1c2VJbnB1dCgnJywge2lzRW1wdHk6IHRydWV9KTtcclxuXHRjb25zdCBhcHQgPSB1c2VJbnB1dCgnJywge30pO1xyXG5cdGNvbnN0IGNpdHkgPSB1c2VJbnB1dCgnJywge2lzRW1wdHk6IHRydWV9LCBnZW9sb2NhdGlvbiwgJ2NpdHknKTtcclxuXHRjb25zdCBjb3VudHJ5ID0gdXNlSW5wdXQoJycsIHtpc0VtcHR5OiB0cnVlfSwgZ2VvbG9jYXRpb24sICdjb3VudHJ5Jyk7XHJcblx0Y29uc3QgemlwID0gdXNlSW5wdXQoJycsIHtpc0VtcHR5OiB0cnVlfSwgZ2VvbG9jYXRpb24sICd6aXAnKTtcclxuIFx0Y29uc3QgYiA9IHVzZUlucHV0KCcnLCB7fSk7XHJcblx0Y29uc3QgY2FyZF9udW1iZXIgPSB1c2VJbnB1dCgnJywge2lzRW1wdHk6IHRydWV9KTtcclxuXHRjb25zdCBleHBpcmVfZGF0ZSA9IHVzZUlucHV0KCcnLCB7aXNFbXB0eTogdHJ1ZX0pO1xyXG5cdGNvbnN0IHNlY3VyaXR5X2NvZGUgPSB1c2VJbnB1dCgnJywge2lzRW1wdHk6IHRydWV9KTtcclxuXHRjb25zdCBlbWFpbCA9IHVzZUlucHV0KCcnLCB7aXNFbWFpbDogdHJ1ZX0pO1xyXG5cdFxyXG5cdFxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHQkKCcuc2VsZWN0JykuZm9jdXMoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JCgnLmNvbnRlbnRfX2lucHV0c19fcm93X2NvdW50cnknKS50b2dnbGVDbGFzcygnY29udGVudF9faW5wdXRzX19yb3dfY291bnRyeV9zZWFyY2gnKVxyXG5cdFx0XHRcdCQoJy5jb250ZW50X19pbnB1dHNfX3Jvd19jb3VudHJ5JykucmVtb3ZlQ2xhc3MoJ2NvbnRlbnRfX2lucHV0c19fcm93X2NvdW50cnlfYXJyb3cnKVxyXG5cdFx0fSk7XHJcblx0XHQkKCcuc2VsZWN0JykuYmx1cihmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnLmNvbnRlbnRfX2lucHV0c19fcm93X2NvdW50cnknKS5yZW1vdmVDbGFzcygnY29udGVudF9faW5wdXRzX19yb3dfY291bnRyeV9zZWFyY2gnKVxyXG5cdFx0XHQkKCcuY29udGVudF9faW5wdXRzX19yb3dfY291bnRyeScpLnRvZ2dsZUNsYXNzKCdjb250ZW50X19pbnB1dHNfX3Jvd19jb3VudHJ5X2Fycm93JylcclxuXHR9KTtcclxuXHJcblx0fSwgW10pXHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblxyXG5cdGZ1bmN0aW9uIGdldERldGVjdGVkKCl7XHJcblx0XHRzZXRJc0RldGVjdGVkKHRydWUpXHRcdFxyXG5cdH1cclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGdlb2xvY2F0aW9uLmNpdHkpXHJcblx0XHRjb25zb2xlLmxvZyhjaXR5LnZhbHVlKVxyXG5cdH0sIFtnZW9sb2NhdGlvbl0pXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZXRDYXJkVHlwZSh1c2VJZGVudGlmaWNhdGlvbkNhcmQoY2FyZF9udW1iZXIudmFsdWUpKTtcclxuXHR9LCBbY2FyZF9udW1iZXIudmFsdWVdKVxyXG5cclxuXHJcblx0cmV0dXJuIChcclxuXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYmxvY2tfX2Zvcm1fX3RhYnNcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dG9nZ2xlQ2xhc3MgPT09IDEgPyBcInRhYnMgYWN0aXZlLXRhYnNcIiA6IFwidGFic1wifSBpZD1cInRhYjFcIiBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGVDbGFzcygxKX0+U2hpcHBpbmc8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dG9nZ2xlQ2xhc3MgPT09IDIgPyBcInRhYnMgYWN0aXZlLXRhYnNcIiA6IFwidGFic1wifSBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGVDbGFzcygyKX0+QmlsbGluZzwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXt0b2dnbGVDbGFzcyA9PT0gMyA/IFwidGFicyBhY3RpdmUtdGFic1wiIDogXCJ0YWJzXCJ9IG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZUNsYXNzKDMpfT5QYXltZW50PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYmxvY2tfX2Zvcm1fX3RhYnNfX2NvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXt0b2dnbGVDbGFzcyA9PT0gMSA/IFwiY29udGVudCBhY3RpdmUtY29udGVudFwiIDogXCJjb250ZW50XCJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3RpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0U2hpcHBpbmcgaW5mb1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fcmVjaXBpZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19yZWNpcGllbnRfdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0UmVjaXBpZW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c1wiPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7KChiLmlzTmV4dCAmJiBmdWxsX25hbWUuaXNFbXB0eSkgfHwgKGIuaXNOZXh0ICYmIGZ1bGxfbmFtZS5pc01pbkxlbmd0aEVycm9yKSkgJiYgKDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlJz5QbGVhc2UgZW50ZXIgcmVjaXBpZW50IGZ1bGwgbmFtZSBhbmQgbWluIGxlbmd0aCA9IDM8L2Rpdj4pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17KChiLmlzTmV4dCAmJiBmdWxsX25hbWUuaXNFbXB0eSkgfHwgKGIuaXNOZXh0ICYmIGZ1bGxfbmFtZS5pc01pbkxlbmd0aEVycm9yKSkgPyBcImNvbnRlbnRfX2lucHV0c19mdWxsbmFtZSBmb2N1c2VkXCIgOiBcImNvbnRlbnRfX2lucHV0c19mdWxsbmFtZVwifSBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiRnVsbCBOYW1lXCIgdmFsdWU9e2Z1bGxfbmFtZS52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBmdWxsX25hbWUub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IGZ1bGxfbmFtZS5vbkJsdXIoZSl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19kYXl0aW1lX2NvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0eygoYi5pc05leHQgJiYgcGhvbmUuaXNFbXB0eSkpICYmICg8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZSc+UGxlYXNlIGVudGVyIHJlY2lwaWVudCBwaG9uZSBpbiBmb3JtYXQgKzcgKDAwMCkgMDAwIDAwIDAwPC9kaXY+KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PElucHV0TWFzayBuYW1lPVwicGhvbmVcIiBtYXNrPVwiKzdcXCg5OTkpOTk5LTk5LTk5XCIgdHlwZT1cInRlbFwiIGNsYXNzTmFtZT17KChiLmlzTmV4dCAmJiBwaG9uZS5pc0VtcHR5KSkgPyBcImNvbnRlbnRfX2lucHV0c19kYXl0aW1lIGZvY3VzZWRcIiA6IFwiY29udGVudF9faW5wdXRzX2RheXRpbWVcIn0gaWQ9XCJwaG9uZU51bWJlclwiIHBsYWNlaG9sZGVyPVwiRGF0ZXRpbWUgUGhvbmVcIiB2YWx1ZT17cGhvbmUudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gcGhvbmUub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IHBob25lLm9uQmx1cihlKX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3IgPVwiY29udGVudF9faW5wdXRzX2RheXRpbWVfbGFiZWxcIj5Gb3IgZGVsaXZlcnkgcXVlc3Rpb25zIG9ubHk8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2FkZHJlc3NcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2FkZHJlc3NfdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QWRkcmVzc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNcIj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eygoYi5pc05leHQgJiYgc3RyZWV0LmlzRW1wdHkpKSAmJiAoPGRpdiBjbGFzc05hbWU9J21lc3NhZ2UnPlBsZWFzZSBlbnRlciByZWNpcGllbnQgc3RyZWV0PC9kaXY+KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9eygoYi5pc05leHQgJiYgc3RyZWV0LmlzRW1wdHkpKSA/IFwiY29udGVudF9faW5wdXRzX3N0cmVldCBmb2N1c2VkXCIgOiBcImNvbnRlbnRfX2lucHV0c19zdHJlZXRcIn0gbmFtZT1cInN0cmVldFwiIHBsYWNlaG9sZGVyPVwiU3RyZWV0IEFkZHJlc3NcIiB2YWx1ZT17c3RyZWV0LnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHN0cmVldC5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gc3RyZWV0Lm9uQmx1cihlKX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19hcHRcIiBuYW1lPVwiYXB0XCIgcGxhY2Vob2xkZXI9XCJBcHQsIFN1aXRlLCBCbGRnLCBHYXRlIENvZGUuIChvcHRpb25hbClcIiB2YWx1ZT17YXB0LnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IGFwdC5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gYXB0Lm9uQmx1cihlKX0vPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfaWNvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjaXR5XCIgY2xhc3NOYW1lPXsoKGIuaXNOZXh0ICYmIGNpdHkuaXNFbXB0eSkpID8gXCJjb250ZW50X19pbnB1dHNfY2l0eSBmb2N1c2VkXCIgOiBcImNvbnRlbnRfX2lucHV0c19jaXR5XCJ9IHZhbHVlPXtjaXR5LnZhbHVlfSBwbGFjZWhvbGRlcj1cIkNpdHlcIiBvbkNoYW5nZT17KGUpID0+IHtjaXR5Lm9uQ2hhbmdlKGUpfX0gb25CbHVyPXsoZSkgPT4gY2l0eS5vbkJsdXIoZSl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHshaXNEZXRlY3RlZCA/IDxGb250QXdlc29tZUljb24gb25DbGljaz17Z2V0RGV0ZWN0ZWR9IGljb249e2ZhQ3Jvc3NoYWlyc30gc3R5bGU9e3twb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAnNDAlJywgcmlnaHQ6ICcxMHB4JywgZm9udFNpemU6ICcyMHB4JywgY3Vyc29yOiAncG9pbnRlcid9fS8+IDogPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNyb3NzaGFpcnN9IHN0eWxlPXt7cG9zaXRpb246ICdhYnNvbHV0ZScsIG9wYWNpdHk6ICcwLjQnLCB0b3A6ICc0MCUnLCByaWdodDogJzEwcHgnLCBmb250U2l6ZTogJzIwcHgnLCBjdXJzb3I6ICdwb2ludGVyJ319Lz59XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfX3Jvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzX19yb3dfY291bnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzX19yb3dfY291bnRyeSBjb250ZW50X19pbnB1dHNfX3Jvd19jb3VudHJ5X2Fycm93XCIgaWQ9XCJlZGl0b3JcIj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9eygoYi5pc05leHQgJiYgY291bnRyeS5pc0VtcHR5KSkgPyBcInNlbGVjdCBmb2N1c2VkXCIgOiBcInNlbGVjdFwifSBuYW1lPVwiY291bnRyeVwiIHBsYWNlaG9sZGVyPVwiQ291bnRyeVwiIGxpc3Q9XCJjaXR5bmFtZVwiIHZhbHVlPXtjb3VudHJ5LnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHtjb3VudHJ5Lm9uQ2hhbmdlKGUpfX0gb25CbHVyPXsoZSkgPT4gY291bnRyeS5vbkJsdXIoZSl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRhdGFsaXN0IGlkPVwiY2l0eW5hbWVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiUnVzc2lhXCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJVa3JhaW5lXCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJCZWxhcnVzXCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJVU0FcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkdlcm1hbnlcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkZyYW5jZVwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kYXRhbGlzdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17KChiLmlzTmV4dCAmJiB6aXAuaXNFbXB0eSkpID8gXCJjb250ZW50X19pbnB1dHNfX3Jvd196aXAgZm9jdXNlZFwiIDogXCJjb250ZW50X19pbnB1dHNfX3Jvd196aXBcIn0gbmFtZT1cInppcFwiIHBsYWNlaG9sZGVyPVwiWklQXCIgdmFsdWU9e3ppcC52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiB7emlwLm9uQ2hhbmdlKGUpfX0gb25CbHVyPXsoZSkgPT4gemlwLm9uQmx1cihlKX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0eyhmdWxsX25hbWUuaW5wdXRWYWxpZCAmJiBwaG9uZS5pbnB1dFZhbGlkICYmIHN0cmVldC5pbnB1dFZhbGlkICYmIGNpdHkuaW5wdXRWYWxpZCAmJiBjb3VudHJ5LmlucHV0VmFsaWQgJiYgemlwLmlucHV0VmFsaWQpICYmIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZUNsYXNzKDIpfSBjbGFzc05hbWU9XCJjb250ZW50X19idXR0b25cIiBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX0+Q29udGludWU8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0eyEoZnVsbF9uYW1lLmlucHV0VmFsaWQgJiYgcGhvbmUuaW5wdXRWYWxpZCAmJiBzdHJlZXQuaW5wdXRWYWxpZCAmJiBjaXR5LmlucHV0VmFsaWQgJiYgY291bnRyeS5pbnB1dFZhbGlkICYmIHppcC5pbnB1dFZhbGlkKSAmJiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJjb250ZW50X19idXR0b25cIiBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX0+Q29udGludWU8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXt0b2dnbGVDbGFzcyA9PT0gMiA/IFwiY29udGVudCBhY3RpdmUtY29udGVudFwiIDogXCJjb250ZW50XCJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3RpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0QmlsbGluZyBJbmZvcm1hdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlQ2xhc3MoMSl9IGNsYXNzTmFtZT1cImNvbnRlbnRfX3JlY2lwaWVudF9saW5rXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTYW1lIGFzIHNoaXBwaW5nXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19yZWNpcGllbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3JlY2lwaWVudF90ZXh0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRCaWxsaW5nIENvbnRhY3RcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzXCI+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7KChiLmlzTmV4dCAmJiBmdWxsX25hbWUuaXNFbXB0eSkgfHwgKGIuaXNOZXh0ICYmIGZ1bGxfbmFtZS5pc01pbkxlbmd0aEVycm9yKSkgJiYgKDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlJz5QbGVhc2UgZW50ZXIgcmVjaXBpZW50IGZ1bGwgbmFtZSBhbmQgbWluIGxlbmd0aCA9IDM8L2Rpdj4pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17KChiLmlzTmV4dCAmJiBmdWxsX25hbWUuaXNFbXB0eSkgfHwgKGIuaXNOZXh0ICYmIGZ1bGxfbmFtZS5pc01pbkxlbmd0aEVycm9yKSkgPyBcImNvbnRlbnRfX2lucHV0c19mdWxsbmFtZSBmb2N1c2VkXCIgOiBcImNvbnRlbnRfX2lucHV0c19mdWxsbmFtZVwifSBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiRnVsbCBOYW1lXCIgdmFsdWU9e2Z1bGxfbmFtZS52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBmdWxsX25hbWUub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IGZ1bGxfbmFtZS5vbkJsdXIoZSl9Lz5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHsoYi5pc05leHQgJiYgZW1haWwuaXNFbWFpbEVycm9yKSAmJiAoPGRpdiBjbGFzc05hbWU9J21lc3NhZ2UnPlBsZWFzZSBlbnRlciBjb3JyZWN0IGVtYWlsPC9kaXY+KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9eygoYi5pc05leHQgJiYgZW1haWwuaXNFbWFpbEVycm9yKSkgPyBcImNvbnRlbnRfX2lucHV0c19lbWFpbCBmb2N1c2VkXCIgOiBcImNvbnRlbnRfX2lucHV0c19lbWFpbFwifSBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3NcIiB2YWx1ZT17ZW1haWwudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gZW1haWwub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IGVtYWlsLm9uQmx1cihlKX0gLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2FkZHJlc3NcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2FkZHJlc3NfdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QmlsbGluZyBBZGRyZXNzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7KChiLmlzTmV4dCAmJiBzdHJlZXQuaXNFbXB0eSkpICYmICg8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZSc+UGxlYXNlIGVudGVyIHJlY2lwaWVudCBzdHJlZXQ8L2Rpdj4pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17KChiLmlzTmV4dCAmJiBzdHJlZXQuaXNFbXB0eSkpID8gXCJjb250ZW50X19pbnB1dHNfc3RyZWV0IGZvY3VzZWRcIiA6IFwiY29udGVudF9faW5wdXRzX3N0cmVldFwifSBuYW1lPVwic3RyZWV0XCIgcGxhY2Vob2xkZXI9XCJTdHJlZXQgQWRkcmVzc1wiIHZhbHVlPXtzdHJlZXQudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gc3RyZWV0Lm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBzdHJlZXQub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfYXB0XCIgcGxhY2Vob2xkZXI9XCJBcHQsIFN1aXRlLCBCbGRnLCBHYXRlIENvZGUuIChvcHRpb25hbClcIiBuYW1lPVwiYXB0XCIgdmFsdWU9e2FwdC52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBhcHQub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IGFwdC5vbkJsdXIoZSl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19pY29uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNpdHlcIiBjbGFzc05hbWU9eygoYi5pc05leHQgJiYgY2l0eS5pc0VtcHR5KSkgPyBcImNvbnRlbnRfX2lucHV0c19jaXR5IGZvY3VzZWRcIiA6IFwiY29udGVudF9faW5wdXRzX2NpdHlcIn0gcGxhY2Vob2xkZXI9XCJDaXR5XCIgdmFsdWU9e2dlb2xvY2F0aW9uLmNpdHkgPyBnZW9sb2NhdGlvbi5jaXR5IDogY2l0eS52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiB7Y2l0eS5vbkNoYW5nZShlKX19IG9uQmx1cj17KGUpID0+IGNpdHkub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyFpc0RldGVjdGVkID8gPEZvbnRBd2Vzb21lSWNvbiBvbkNsaWNrPXtnZXREZXRlY3RlZH0gaWNvbj17ZmFDcm9zc2hhaXJzfSBzdHlsZT17e3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICc0MCUnLCByaWdodDogJzEwcHgnLCBmb250U2l6ZTogJzIwcHgnLCBjdXJzb3I6ICdwb2ludGVyJ319Lz4gOiA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ3Jvc3NoYWlyc30gc3R5bGU9e3twb3NpdGlvbjogJ2Fic29sdXRlJywgb3BhY2l0eTogJzAuNCcsIHRvcDogJzQwJScsIHJpZ2h0OiAnMTBweCcsIGZvbnRTaXplOiAnMjBweCcsIGN1cnNvcjogJ3BvaW50ZXInfX0vPn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19fcm93XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfX3Jvd19jb3VudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfX3Jvd19jb3VudHJ5XCIgaWQ9XCJlZGl0b3JcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInNlbGVjdFwiIG5hbWU9XCJjb3VudHJ5XCIgcGxhY2Vob2xkZXI9XCJDb3VudHJ5XCIgbGlzdD1cImNpdHluYW1lXCIgdmFsdWU9e2dlb2xvY2F0aW9uLmNvdW50cnkgPyBnZW9sb2NhdGlvbi5jb3VudHJ5IDogY291bnRyeS52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiB7Y291bnRyeS5vbkNoYW5nZShlKX19IG9uQmx1cj17KGUpID0+IGNvdW50cnkub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkYXRhbGlzdCBpZD1cImNpdHluYW1lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlJ1c3NpYVwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiVWtyYWluZVwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiQmVsYXJ1c1wiLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiVVNBXCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJHZXJtYW55XCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJGcmFuY2VcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGF0YWxpc3Q+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9eygoYi5pc05leHQgJiYgemlwLmlzRW1wdHkpKSA/IFwiY29udGVudF9faW5wdXRzX19yb3dfemlwIGZvY3VzZWRcIiA6IFwiY29udGVudF9faW5wdXRzX19yb3dfemlwXCJ9IG5hbWU9XCJ6aXBcIiBwbGFjZWhvbGRlcj1cIlpJUFwiIHZhbHVlPXtnZW9sb2NhdGlvbi56aXAgPyBnZW9sb2NhdGlvbi56aXAgOiB6aXAudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4ge3ppcC5vbkNoYW5nZShlKX19IG9uQmx1cj17KGUpID0+IHppcC5vbkJsdXIoZSl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHsoZnVsbF9uYW1lLmlucHV0VmFsaWQgJiYgIHN0cmVldC5pbnB1dFZhbGlkICYmIGNpdHkuaW5wdXRWYWxpZCAmJiBjb3VudHJ5LmlucHV0VmFsaWQgJiYgemlwLmlucHV0VmFsaWQpICYmIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZUNsYXNzKDMpfSBjbGFzc05hbWU9XCJjb250ZW50X19idXR0b25cIiBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX0+Q29udGludWU8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0eyEoZnVsbF9uYW1lLmlucHV0VmFsaWQgICYmIHN0cmVldC5pbnB1dFZhbGlkICYmIGNpdHkuaW5wdXRWYWxpZCAmJiBjb3VudHJ5LmlucHV0VmFsaWQgJiYgemlwLmlucHV0VmFsaWQpICYmIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImNvbnRlbnRfX2J1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcid9fT5Db250aW51ZTwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3RvZ2dsZUNsYXNzID09PSAzID8gXCJjb250ZW50IGFjdGl2ZS1jb250ZW50XCIgOiBcImNvbnRlbnRcIn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fdGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRQYXltZW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3NzbFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fc3NsX2xvZ29cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPScuLi8uLi9sb2NrLnBuZycgYWx0PVwiXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3NzbF90ZXh0XCI+VGhpcyBpcyBhIHNlY3VyZSAxMjgtYml0IFNTTCBlbmNyeXB0ZWQgcGF5bWVudDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19yZWNpcGllbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3JlY2lwaWVudF90ZXh0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRDYXJkaG9sZGVyIE5hbWVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHsoKGIuaXNOZXh0ICYmIGZ1bGxfbmFtZS5pc0VtcHR5KSB8fCAoYi5pc05leHQgJiYgZnVsbF9uYW1lLmlzTWluTGVuZ3RoRXJyb3IpKSAmJiAoPGRpdiBjbGFzc05hbWU9J21lc3NhZ2UnPlBsZWFzZSBlbnRlciByZWNpcGllbnQgZnVsbCBuYW1lIGFuZCBtaW4gbGVuZ3RoID0gMzwvZGl2Pil9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXsoKGIuaXNOZXh0ICYmIGZ1bGxfbmFtZS5pc0VtcHR5KSB8fCAoYi5pc05leHQgJiYgZnVsbF9uYW1lLmlzTWluTGVuZ3RoRXJyb3IpKSA/IFwiY29udGVudF9faW5wdXRzX2Z1bGxuYW1lIGZvY3VzZWRcIiA6IFwiY29udGVudF9faW5wdXRzX2Z1bGxuYW1lXCJ9IG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOYW1lIGFzIGl0IGFwcGVhcnMgb24geW91ciBjYXJkXCIgdmFsdWU9e2Z1bGxfbmFtZS52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBmdWxsX25hbWUub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IGZ1bGxfbmFtZS5vbkJsdXIoZSl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2FkZHJlc3NcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2FkZHJlc3NfdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Q2FyZCBOdW1iZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzIGlucHV0X2NhcmRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRNYXNrIG1hc2s9XCI5OTk5IDk5OTkgOTk5OSA5OTk5XCIgbmFtZT1cImNhcmRfbnVtYmVyXCIgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfY2FyZFwiIHBsYWNlaG9sZGVyPVwiWFhYWCBYWFhYIFhYWFggWFhYWCBYWFhYXCIgdmFsdWU9e2NhcmRfbnVtYmVyLnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IGNhcmRfbnVtYmVyLm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBjYXJkX251bWJlci5vbkJsdXIoZSl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17Y2FyZFR5cGV9IGFsdD1cIlwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19jYXJkc19faW5mb1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fY2FyZHNfX2luZm9fX2V4cGlyZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19jYXJkc19pbmZvX19leHBpcmVfdGV4dFwiPkV4cGlyZSBEYXRlPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRNYXNrIG1hc2s9XCI5OSAvIDk5XCIgcGxhY2Vob2xkZXI9XCJNTSAvIFlZXCIgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjb250ZW50X19jYXJkc19pbmZvX19leHBpcmVfaW5wdXRcIiBuYW1lPVwiZXhwaXJlX2RhdGVcIiB2YWx1ZT17ZXhwaXJlX2RhdGUudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gZXhwaXJlX2RhdGUub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IGV4cGlyZV9kYXRlLm9uQmx1cihlKX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fY2FyZHNfX2luZm9fX3NlY3VyaXR5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2NhcmRzX2luZm9fX3NlY3VyaXR5X3RleHRcIj5TZWN1cml0eSBDb2RlPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRNYXNrIG1hc2s9XCI5OTlcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWFhYXCIgY2xhc3NOYW1lPVwiY29udGVudF9fY2FyZHNfaW5mb19fc2VjdXJpdHlfaW5wdXRcIiBuYW1lPVwic2VjdXJpdHlfY29kZVwiIHZhbHVlPXtzZWN1cml0eV9jb2RlLnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHNlY3VyaXR5X2NvZGUub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IHNlY3VyaXR5X2NvZGUub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7KGZ1bGxfbmFtZS5pbnB1dFZhbGlkICYmIHN0cmVldC5pbnB1dFZhbGlkICYmIGNpdHkuaW5wdXRWYWxpZCAmJiBjb3VudHJ5LmlucHV0VmFsaWQgJiYgemlwLmlucHV0VmFsaWQgJiYgY2FyZF9udW1iZXIuaW5wdXRWYWxpZCAmJiBzZWN1cml0eV9jb2RlLmlucHV0VmFsaWQgJiYgZXhwaXJlX2RhdGUuaW5wdXRWYWxpZCkgJiYgXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiY29udGVudF9fYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFBheSBTZWN1cmVseVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7IShmdWxsX25hbWUuaW5wdXRWYWxpZCAgJiYgc3RyZWV0LmlucHV0VmFsaWQgJiYgY2l0eS5pbnB1dFZhbGlkICYmIGNvdW50cnkuaW5wdXRWYWxpZCAmJiB6aXAuaW5wdXRWYWxpZCAmJiBjYXJkX251bWJlci5pbnB1dFZhbGlkICYmIHNlY3VyaXR5X2NvZGUuaW5wdXRWYWxpZCAmJiBleHBpcmVfZGF0ZS5pbnB1dFZhbGlkKSAmJiBcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImNvbnRlbnRfX2J1dHRvbiBkaXNhYmxlZFwiIGRpc2FibGVkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFBheSBTZWN1cmVseVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsICB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgdXNlR2VvbG9jYXRpb24gPSAoaXNEZXRlY3RlZCA6IGJvb2xlYW4pID0+IHtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGlzRGV0ZWN0ZWQpXHJcblx0XHRpZiAoaXNEZXRlY3RlZCkge1xyXG5cdFx0XHRuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcblx0XHR9XHRcclxuXHR9LCBbaXNEZXRlY3RlZF0pXHJcblxyXG5cdGNvbnN0IFtjaXR5LCBzZXRDaXR5XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cdGNvbnN0IFtjb3VudHJ5LCBzZXRDb3VudHJ5XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cdGNvbnN0IFt6aXAsIHNldFppcF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuXHJcblx0Y29uc3Qgc3VjY2Vzc0NhbGxiYWNrID0gYXN5bmMgKCk6IFByb21pc2U8YW55PiA9PiB7XHJcblx0XHRhd2FpdCBmZXRjaCgnaHR0cHM6Ly9pcGFwaS5jby9qc29uLycpXHJcbiAgXHRcdFx0LnRoZW4oZCA9PiBkLmpzb24oKSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRzZXRDaXR5KHJlcy5jaXR5KTtcclxuXHRcdFx0XHRzZXRDb3VudHJ5KHJlcy5jb3VudHJ5X25hbWUpO1xyXG5cdFx0XHRcdHNldFppcChyZXMucG9zdGFsKTtcclxuXHRcdFx0fSlcclxuXHQgIH1cclxuXHJcblx0ICBjb25zdCBlcnJvckNhbGxiYWNrID0gKGVycm9yOiBhbnkpOiB2b2lkID0+IHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcblx0ICB9XHJcblxyXG5cdCAgcmV0dXJuIHtcclxuXHRcdGNpdHksXHJcblx0XHRjb3VudHJ5LFxyXG5cdFx0emlwXHJcblx0fVxyXG5cdFxyXG5cdFx0XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHVzZUlkZW50aWZpY2F0aW9uQ2FyZCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIFxyXG57XHJcbiAgICAvLyB2aXNhXHJcbiAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiXjRcIik7XHJcbiAgICBpZiAodmFsdWUubWF0Y2gocmVnZXgpICE9IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIFwiLy4uLy4uL3Zpc2EucG5nXCI7XHJcblxyXG4gICAgLy8gTWFzdGVyY2FyZCBcclxuICAgIC8vIFVwZGF0ZWQgZm9yIE1hc3RlcmNhcmQgMjAxNyBCSU5zIGV4cGFuc2lvblxyXG4gICAgIGlmICgvXig1WzEtNV1bMC05XXsxNH18MigyMlsxLTldWzAtOV17MTJ9fDJbMy05XVswLTldezEzfXxbMy02XVswLTldezE0fXw3WzAtMV1bMC05XXsxM318NzIwWzAtOV17MTJ9KSkkLy50ZXN0KHZhbHVlKSkgXHJcbiAgICAgICAgcmV0dXJuIFwiTWFzdGVyY2FyZFwiO1xyXG5cclxuICAgIC8vIC8vIEFNRVhcclxuICAgIC8vIHJlID0gbmV3IFJlZ0V4cChcIl4zWzQ3XVwiKTtcclxuICAgIC8vIGlmIChudW1iZXIubWF0Y2gocmUpICE9IG51bGwpXHJcbiAgICAvLyAgICAgcmV0dXJuIFwiQU1FWFwiO1xyXG5cclxuICAgIC8vIC8vIERpc2NvdmVyXHJcbiAgICAvLyByZSA9IG5ldyBSZWdFeHAoXCJeKDYwMTF8NjIyKDEyWzYtOV18MVszLTldWzAtOV18WzItOF1bMC05XXsyfXw5WzAtMV1bMC05XXw5MlswLTVdfDY0WzQtOV0pfDY1KVwiKTtcclxuICAgIC8vIGlmIChudW1iZXIubWF0Y2gocmUpICE9IG51bGwpXHJcbiAgICAvLyAgICAgcmV0dXJuIFwiRGlzY292ZXJcIjtcclxuXHJcbiAgICAvLyAvLyBEaW5lcnNcclxuICAgIC8vIHJlID0gbmV3IFJlZ0V4cChcIl4zNlwiKTtcclxuICAgIC8vIGlmIChudW1iZXIubWF0Y2gocmUpICE9IG51bGwpXHJcbiAgICAvLyAgICAgcmV0dXJuIFwiRGluZXJzXCI7XHJcblxyXG4gICAgLy8gLy8gRGluZXJzIC0gQ2FydGUgQmxhbmNoZVxyXG4gICAgLy8gcmUgPSBuZXcgUmVnRXhwKFwiXjMwWzAtNV1cIik7XHJcbiAgICAvLyBpZiAobnVtYmVyLm1hdGNoKHJlKSAhPSBudWxsKVxyXG4gICAgLy8gICAgIHJldHVybiBcIkRpbmVycyAtIENhcnRlIEJsYW5jaGVcIjtcclxuXHJcbiAgICAvLyAvLyBKQ0JcclxuICAgIC8vIHJlID0gbmV3IFJlZ0V4cChcIl4zNSgyWzg5XXxbMy04XVswLTldKVwiKTtcclxuICAgIC8vIGlmIChudW1iZXIubWF0Y2gocmUpICE9IG51bGwpXHJcbiAgICAvLyAgICAgcmV0dXJuIFwiSkNCXCI7XHJcblxyXG4gICAgLy8gLy8gVmlzYSBFbGVjdHJvblxyXG4gICAgLy8gcmUgPSBuZXcgUmVnRXhwKFwiXig0MDI2fDQxNzUwMHw0NTA4fDQ4NDR8NDkxKDN8NykpXCIpO1xyXG4gICAgLy8gaWYgKG51bWJlci5tYXRjaChyZSkgIT0gbnVsbClcclxuICAgIC8vICAgICByZXR1cm4gXCJWaXNhIEVsZWN0cm9uXCI7XHJcblxyXG4gICAgcmV0dXJuIFwibnVsbFwiO1xyXG59IiwiaW1wb3J0IFJlYWN0LCB7Rm9ybUV2ZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVZhbGlkYXRpb24gfSBmcm9tICcuL3VzZVZhbGlkYXRpb24nO1xyXG5cclxuaW50ZXJmYWNlIEdlb2xvY2F0aW9uT2JqZWN0IHtcclxuXHRjaXR5OiBzdHJpbmcsXHJcblx0Y291bnRyeTogc3RyaW5nLFxyXG5cdHppcDogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VJbnB1dCA9IChpbml0aWFsVmFsdWU6IHN0cmluZywgdmFsaWRhdGlvbnM6IE9iamVjdCwgZ2VvbG9jYXRpb24/OiBHZW9sb2NhdGlvbk9iamVjdCwgdHlwZT86IHN0cmluZykgPT4ge1xyXG5cclxuXHRjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oaW5pdGlhbFZhbHVlKTtcclxuXHRjb25zdCBbaXNEaXJ0eSwgc2V0SXNEaXJ0eV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblx0Y29uc3QgW2lzTmV4dCwgc2V0SXNOZXh0XSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG5cdGNvbnN0IHZhbGlkID0gdXNlVmFsaWRhdGlvbih2YWx1ZSwgdmFsaWRhdGlvbnMpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKGdlb2xvY2F0aW9uICYmIGdlb2xvY2F0aW9uLmNpdHkgJiYgdHlwZSA9PT0gJ2NpdHknKSB7XHJcblx0XHRcdHNldFZhbHVlKGdlb2xvY2F0aW9uLmNpdHkpXHJcblx0XHR9XHJcblx0XHRpZiAoZ2VvbG9jYXRpb24gJiYgZ2VvbG9jYXRpb24uY291bnRyeSAmJiB0eXBlID09PSAnY291bnRyeScpIHtcclxuXHRcdFx0c2V0VmFsdWUoZ2VvbG9jYXRpb24uY291bnRyeSlcclxuXHRcdH1cclxuXHRcdGlmIChnZW9sb2NhdGlvbiAmJiBnZW9sb2NhdGlvbi56aXAgJiYgdHlwZSA9PT0gJ3ppcCcpIHtcclxuXHRcdFx0c2V0VmFsdWUoZ2VvbG9jYXRpb24uemlwKVxyXG5cdFx0fVxyXG5cdH0sIFtnZW9sb2NhdGlvbl0pXHJcblxyXG5cdGNvbnN0IG9uQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MU2VsZWN0RWxlbWVudD4pOiB2b2lkID0+IHtcclxuXHRcdHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG9uQmx1ciA9IChlOiBSZWFjdC5Gb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MU2VsZWN0RWxlbWVudD4pOiB2b2lkID0+IHtcclxuXHRcdHNldElzRGlydHkodHJ1ZSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBvbkNsaWNrID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pOiB2b2lkID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHNldElzTmV4dCh0cnVlKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHR2YWx1ZSxcclxuXHRcdGlzTmV4dCxcclxuXHRcdG9uQ2xpY2ssXHJcblx0XHRvbkNoYW5nZSxcclxuXHRcdG9uQmx1cixcclxuXHRcdGlzRGlydHksXHJcblx0XHQuLi52YWxpZFxyXG5cdH1cclxufSIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VWYWxpZGF0aW9uID0gKHZhbHVlOiBzdHJpbmcsIHZhbGlkYXRpb25zOiBPYmplY3QpID0+IHtcclxuXHJcblx0Y29uc3QgW2lzRW1wdHksIHNldElzRW1wdHldID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcblx0Y29uc3QgW2lzRW1haWxFcnJvciwgc2V0SXNFbWFpbEVycm9yXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHRjb25zdCBbaXNNaW5MZW5ndGhFcnJvciwgc2V0SXNNaW5MZW5ndGhFcnJvcl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblx0Y29uc3QgW2lucHV0VmFsaWQsIHNldElucHV0VmFsaWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Zm9yIChjb25zdCB2YWxpZGF0aW9uIGluIHZhbGlkYXRpb25zKSB7XHJcblx0XHRcdHN3aXRjaCAodmFsaWRhdGlvbikge1xyXG5cdFx0XHRcdGNhc2UgJ21pbkxlbmd0aCc6XHJcblx0XHRcdFx0XHR2YWx1ZS5sZW5ndGggPCB2YWxpZGF0aW9uc1t2YWxpZGF0aW9uXSA/IHNldElzTWluTGVuZ3RoRXJyb3IodHJ1ZSkgOiBzZXRJc01pbkxlbmd0aEVycm9yKGZhbHNlKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ2lzRW1wdHknOlxyXG5cdFx0XHRcdFx0dmFsdWUgPyBzZXRJc0VtcHR5KGZhbHNlKSA6IHNldElzRW1wdHkodHJ1ZSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICdpc1Bob25lJzpcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ2lzRW1haWwnOlxyXG5cdFx0XHRcdFx0Y29uc3QgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcbiAgICBcdFx0XHRcdChyZS50ZXN0KFN0cmluZyh2YWx1ZSkudG9Mb3dlckNhc2UoKSkpID8gc2V0SXNFbWFpbEVycm9yKGZhbHNlKSA6IHNldElzRW1haWxFcnJvcih0cnVlKVxyXG5cdFx0XHRcdFx0YnJlYWtcclxuXHRcdFx0fVx0XHJcblx0XHR9XHJcblx0fSwgW3ZhbHVlXSlcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmIChpc01pbkxlbmd0aEVycm9yIHx8IGlzRW1wdHkgfHwgaXNFbWFpbEVycm9yKSB7XHJcblx0XHRcdHNldElucHV0VmFsaWQoZmFsc2UpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHNldElucHV0VmFsaWQodHJ1ZSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9LCBbaXNFbXB0eSwgaXNNaW5MZW5ndGhFcnJvciwgaXNFbWFpbEVycm9yXSlcclxuXHJcblx0XHJcblx0XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRpc0VtcHR5LFxyXG5cdFx0aXNNaW5MZW5ndGhFcnJvcixcclxuXHRcdGlucHV0VmFsaWQsXHJcblx0XHRpc0VtYWlsRXJyb3JcclxuXHR9XHJcbn0iLCJpbXBvcnQge2dxbH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENSRUFURV9PUkRFUiA9IGdxbCBgXHJcblxyXG5cdG11dGF0aW9uIGNyZWF0ZU9yZGVyKCRpbnB1dDogT3JkZXJJbnB1dCkge1xyXG5cdFx0Y3JlYXRlT3JkZXIoaW5wdXQ6ICRpbnB1dCkge1xyXG5cdFx0XHRpZCwgZnVsbF9uYW1lLCBlbWFpbCwgY2l0eSwgcGhvbmVcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcbmAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IEltYWdlMTtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX2hlYWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2hlYWRcIikpO1xudmFyIF90b0Jhc2U2NCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3RvLWJhc2UtNjRcIik7XG52YXIgX2ltYWdlQ29uZmlnID0gcmVxdWlyZShcIi4uL3NlcnZlci9pbWFnZS1jb25maWdcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gICAgZm9yKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24oc3ltKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xuICAgIH07XG4gICAgdmFyIHRhcmdldCA9IHtcbiAgICB9O1xuICAgIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuY29uc3QgbG9hZGVkSW1hZ2VVUkxzID0gbmV3IFNldCgpO1xuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZ2xvYmFsLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWU7XG59XG5jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUyA9IFtcbiAgICAnbGF6eScsXG4gICAgJ2VhZ2VyJyxcbiAgICB1bmRlZmluZWRcbl07XG5jb25zdCBsb2FkZXJzID0gbmV3IE1hcChbXG4gICAgW1xuICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgIGRlZmF1bHRMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2ltZ2l4JyxcbiAgICAgICAgaW1naXhMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2Nsb3VkaW5hcnknLFxuICAgICAgICBjbG91ZGluYXJ5TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdha2FtYWknLFxuICAgICAgICBha2FtYWlMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2N1c3RvbScsXG4gICAgICAgIGN1c3RvbUxvYWRlclxuICAgIF0sIFxuXSk7XG5jb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTID0gW1xuICAgICdmaWxsJyxcbiAgICAnZml4ZWQnLFxuICAgICdpbnRyaW5zaWMnLFxuICAgICdyZXNwb25zaXZlJyxcbiAgICB1bmRlZmluZWQsIFxuXTtcbmZ1bmN0aW9uIGlzU3RhdGljUmVxdWlyZShzcmMpIHtcbiAgICByZXR1cm4gc3JjLmRlZmF1bHQgIT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzU3RhdGljSW1hZ2VEYXRhKHNyYykge1xuICAgIHJldHVybiBzcmMuc3JjICE9PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc1N0YXRpY0ltcG9ydChzcmMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHNyYyA9PT0gJ29iamVjdCcgJiYgKGlzU3RhdGljUmVxdWlyZShzcmMpIHx8IGlzU3RhdGljSW1hZ2VEYXRhKHNyYykpO1xufVxuY29uc3QgeyBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMgLCBpbWFnZVNpemVzOiBjb25maWdJbWFnZVNpemVzICwgbG9hZGVyOiBjb25maWdMb2FkZXIgLCBwYXRoOiBjb25maWdQYXRoICwgZG9tYWluczogY29uZmlnRG9tYWlucyAsICB9ID0gcHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFMgfHwgX2ltYWdlQ29uZmlnLmltYWdlQ29uZmlnRGVmYXVsdDtcbi8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXMgPSBbXG4gICAgLi4uY29uZmlnRGV2aWNlU2l6ZXMsXG4gICAgLi4uY29uZmlnSW1hZ2VTaXplc1xuXTtcbmNvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsIGIpPT5hIC0gYlxuKTtcbmFsbFNpemVzLnNvcnQoKGEsIGIpPT5hIC0gYlxuKTtcbmZ1bmN0aW9uIGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcykge1xuICAgIGlmIChzaXplcyAmJiAobGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpKSB7XG4gICAgICAgIC8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0V2lkdGhSZSA9IC8oXnxcXHMpKDE/XFxkP1xcZCl2dy9nO1xuICAgICAgICBjb25zdCBwZXJjZW50U2l6ZXMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBtYXRjaDsgbWF0Y2ggPSB2aWV3cG9ydFdpZHRoUmUuZXhlYyhzaXplcyk7IG1hdGNoKXtcbiAgICAgICAgICAgIHBlcmNlbnRTaXplcy5wdXNoKHBhcnNlSW50KG1hdGNoWzJdKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBlcmNlbnRTaXplcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHNtYWxsZXN0UmF0aW8gPSBNYXRoLm1pbiguLi5wZXJjZW50U2l6ZXMpICogMC4wMTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd2lkdGhzOiBhbGxTaXplcy5maWx0ZXIoKHMpPT5zID49IGNvbmZpZ0RldmljZVNpemVzWzBdICogc21hbGxlc3RSYXRpb1xuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aHM6IGFsbFNpemVzLFxuICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInIHx8IGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aHM6IGNvbmZpZ0RldmljZVNpemVzLFxuICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHdpZHRocyA9IFtcbiAgICAgICAgLi4ubmV3IFNldCgvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuICAgICAgICAvLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbiAgICAgICAgLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4gICAgICAgIC8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4gICAgICAgIC8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4gICAgICAgIC8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbiAgICAgICAgLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4gICAgICAgIC8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcbiAgICAgICAgW1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICB3aWR0aCAqIDIgLyosIHdpZHRoICogMyovIFxuICAgICAgICBdLm1hcCgodyk9PmFsbFNpemVzLmZpbmQoKHApPT5wID49IHdcbiAgICAgICAgICAgICkgfHwgYWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoIC0gMV1cbiAgICAgICAgKSksIFxuICAgIF07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGhzLFxuICAgICAgICBraW5kOiAneCdcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7IHNyYyAsIHVub3B0aW1pemVkICwgbGF5b3V0ICwgd2lkdGggLCBxdWFsaXR5ICwgc2l6ZXMgLCBsb2FkZXIgIH0pIHtcbiAgICBpZiAodW5vcHRpbWl6ZWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgc2l6ZXM6IHVuZGVmaW5lZFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB7IHdpZHRocyAsIGtpbmQgIH0gPSBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpO1xuICAgIGNvbnN0IGxhc3QgPSB3aWR0aHMubGVuZ3RoIC0gMTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzaXplczogIXNpemVzICYmIGtpbmQgPT09ICd3JyA/ICcxMDB2dycgOiBzaXplcyxcbiAgICAgICAgc3JjU2V0OiB3aWR0aHMubWFwKCh3LCBpKT0+YCR7bG9hZGVyKHtcbiAgICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgICAgcXVhbGl0eSxcbiAgICAgICAgICAgICAgICB3aWR0aDogd1xuICAgICAgICAgICAgfSl9ICR7a2luZCA9PT0gJ3cnID8gdyA6IGkgKyAxfSR7a2luZH1gXG4gICAgICAgICkuam9pbignLCAnKSxcbiAgICAgICAgLy8gSXQncyBpbnRlbmRlZCB0byBrZWVwIGBzcmNgIHRoZSBsYXN0IGF0dHJpYnV0ZSBiZWNhdXNlIFJlYWN0IHVwZGF0ZXNcbiAgICAgICAgLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuICAgICAgICAvLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4gICAgICAgIC8vIHVwZGF0ZWQgYnkgUmVhY3QuIFRoYXQgY2F1c2VzIG11bHRpcGxlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIGlmIGBzcmNTZXRgXG4gICAgICAgIC8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuICAgICAgICAvLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbiAgICAgICAgc3JjOiBsb2FkZXIoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgcXVhbGl0eSxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aHNbbGFzdF1cbiAgICAgICAgfSlcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2V0SW50KHgpIHtcbiAgICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh4LCAxMCk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHMpIHtcbiAgICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKTtcbiAgICBpZiAobG9hZCkge1xuICAgICAgICByZXR1cm4gbG9hZChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgIHJvb3Q6IGNvbmZpZ1BhdGhcbiAgICAgICAgfSwgbG9hZGVyUHJvcHMpKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtfaW1hZ2VDb25maWcuVkFMSURfTE9BREVSUy5qb2luKCcsICcpfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWApO1xufVxuLy8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8zOTc3NzgzMy8yNjY1MzUgZm9yIHdoeSB3ZSB1c2UgdGhpcyByZWZcbi8vIGhhbmRsZXIgaW5zdGVhZCBvZiB0aGUgaW1nJ3Mgb25Mb2FkIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIGhhbmRsZUxvYWRpbmcoaW1nLCBzcmMsIGxheW91dCwgcGxhY2Vob2xkZXIsIG9uTG9hZGluZ0NvbXBsZXRlKSB7XG4gICAgaWYgKCFpbWcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBoYW5kbGVMb2FkID0gKCk9PntcbiAgICAgICAgaWYgKCFpbWcuc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSAnZGVjb2RlJyBpbiBpbWcgPyBpbWcuZGVjb2RlKCkgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIHAuY2F0Y2goKCk9PntcbiAgICAgICAgICAgIH0pLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuZmlsdGVyID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxvYWRlZEltYWdlVVJMcy5hZGQoc3JjKTtcbiAgICAgICAgICAgICAgICBpZiAob25Mb2FkaW5nQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBuYXR1cmFsV2lkdGggLCBuYXR1cmFsSGVpZ2h0ICB9ID0gaW1nO1xuICAgICAgICAgICAgICAgICAgICAvLyBQYXNzIGJhY2sgcmVhZC1vbmx5IHByaW1pdGl2ZSB2YWx1ZXMgYnV0IG5vdCB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5kZXJseWluZyBET00gZWxlbWVudCBiZWNhdXNlIGl0IGNvdWxkIGJlIG1pc3VzZWQuXG4gICAgICAgICAgICAgICAgICAgIG9uTG9hZGluZ0NvbXBsZXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdHVyYWxXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdHVyYWxIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICAgICAgICAgIGlmICgocmVmID0gaW1nLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGdldENvbXB1dGVkU3R5bGUoaW1nLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScgJiYgcGFyZW50LmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtYXkgbm90IHJlbmRlciBwcm9wZXJseSBhcyBhIGNoaWxkIG9mIGEgZmxleCBjb250YWluZXIuIENvbnNpZGVyIHdyYXBwaW5nIHRoZSBpbWFnZSB3aXRoIGEgZGl2IHRvIGNvbmZpZ3VyZSB0aGUgd2lkdGguYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpbGwnICYmIHBhcmVudC5wb3NpdGlvbiAhPT0gJ3JlbGF0aXZlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtYXkgbm90IHJlbmRlciBwcm9wZXJseSB3aXRoIGEgcGFyZW50IHVzaW5nIHBvc2l0aW9uOlwiJHtwYXJlbnQucG9zaXRpb259XCIuIENvbnNpZGVyIGNoYW5naW5nIHRoZSBwYXJlbnQgc3R5bGUgdG8gcG9zaXRpb246XCJyZWxhdGl2ZVwiIHdpdGggYSB3aWR0aCBhbmQgaGVpZ2h0LmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmIChpbWcuY29tcGxldGUpIHtcbiAgICAgICAgLy8gSWYgdGhlIHJlYWwgaW1hZ2UgZmFpbHMgdG8gbG9hZCwgdGhpcyB3aWxsIHN0aWxsIHJlbW92ZSB0aGUgcGxhY2Vob2xkZXIuXG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIGRlc2lyZWQgYmVoYXZpb3IgZm9yIG5vdywgYW5kIHdpbGwgYmUgcmV2aXNpdGVkIHdoZW4gZXJyb3JcbiAgICAgICAgLy8gaGFuZGxpbmcgaXMgd29ya2VkIG9uIGZvciB0aGUgaW1hZ2UgY29tcG9uZW50IGl0c2VsZi5cbiAgICAgICAgaGFuZGxlTG9hZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGltZy5vbmxvYWQgPSBoYW5kbGVMb2FkO1xuICAgIH1cbn1cbmZ1bmN0aW9uIEltYWdlMShfcGFyYW0pIHtcbiAgICB2YXIgeyBzcmMgLCBzaXplcyAsIHVub3B0aW1pemVkID1mYWxzZSAsIHByaW9yaXR5ID1mYWxzZSAsIGxvYWRpbmcgLCBsYXp5Qm91bmRhcnkgPScyMDBweCcgLCBjbGFzc05hbWUgLCBxdWFsaXR5ICwgd2lkdGggLCBoZWlnaHQgLCBvYmplY3RGaXQgLCBvYmplY3RQb3NpdGlvbiAsIG9uTG9hZGluZ0NvbXBsZXRlICwgbG9hZGVyID1kZWZhdWx0SW1hZ2VMb2FkZXIgLCBwbGFjZWhvbGRlciA9J2VtcHR5JyAsIGJsdXJEYXRhVVJMICB9ID0gX3BhcmFtLCBhbGwgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3BhcmFtLCBbXCJzcmNcIiwgXCJzaXplc1wiLCBcInVub3B0aW1pemVkXCIsIFwicHJpb3JpdHlcIiwgXCJsb2FkaW5nXCIsIFwibGF6eUJvdW5kYXJ5XCIsIFwiY2xhc3NOYW1lXCIsIFwicXVhbGl0eVwiLCBcIndpZHRoXCIsIFwiaGVpZ2h0XCIsIFwib2JqZWN0Rml0XCIsIFwib2JqZWN0UG9zaXRpb25cIiwgXCJvbkxvYWRpbmdDb21wbGV0ZVwiLCBcImxvYWRlclwiLCBcInBsYWNlaG9sZGVyXCIsIFwiYmx1ckRhdGFVUkxcIl0pO1xuICAgIGxldCByZXN0ID0gYWxsO1xuICAgIGxldCBsYXlvdXQgPSBzaXplcyA/ICdyZXNwb25zaXZlJyA6ICdpbnRyaW5zaWMnO1xuICAgIGlmICgnbGF5b3V0JyBpbiByZXN0KSB7XG4gICAgICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG4gICAgICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXQ7XG4gICAgICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICAgICAgZGVsZXRlIHJlc3RbJ2xheW91dCddO1xuICAgIH1cbiAgICBsZXQgc3RhdGljU3JjID0gJyc7XG4gICAgaWYgKGlzU3RhdGljSW1wb3J0KHNyYykpIHtcbiAgICAgICAgY29uc3Qgc3RhdGljSW1hZ2VEYXRhID0gaXNTdGF0aWNSZXF1aXJlKHNyYykgPyBzcmMuZGVmYXVsdCA6IHNyYztcbiAgICAgICAgaWYgKCFzdGF0aWNJbWFnZURhdGEuc3JjKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgc3JjLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgYmx1ckRhdGFVUkwgPSBibHVyRGF0YVVSTCB8fCBzdGF0aWNJbWFnZURhdGEuYmx1ckRhdGFVUkw7XG4gICAgICAgIHN0YXRpY1NyYyA9IHN0YXRpY0ltYWdlRGF0YS5zcmM7XG4gICAgICAgIGlmICghbGF5b3V0IHx8IGxheW91dCAhPT0gJ2ZpbGwnKSB7XG4gICAgICAgICAgICBoZWlnaHQgPSBoZWlnaHQgfHwgc3RhdGljSW1hZ2VEYXRhLmhlaWdodDtcbiAgICAgICAgICAgIHdpZHRoID0gd2lkdGggfHwgc3RhdGljSW1hZ2VEYXRhLndpZHRoO1xuICAgICAgICAgICAgaWYgKCFzdGF0aWNJbWFnZURhdGEuaGVpZ2h0IHx8ICFzdGF0aWNJbWFnZURhdGEud2lkdGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgaGVpZ2h0IGFuZCB3aWR0aC4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHNyYyA9IHR5cGVvZiBzcmMgPT09ICdzdHJpbmcnID8gc3JjIDogc3RhdGljU3JjO1xuICAgIGNvbnN0IHdpZHRoSW50ID0gZ2V0SW50KHdpZHRoKTtcbiAgICBjb25zdCBoZWlnaHRJbnQgPSBnZXRJbnQoaGVpZ2h0KTtcbiAgICBjb25zdCBxdWFsaXR5SW50ID0gZ2V0SW50KHF1YWxpdHkpO1xuICAgIGxldCBpc0xhenkgPSAhcHJpb3JpdHkgJiYgKGxvYWRpbmcgPT09ICdsYXp5JyB8fCB0eXBlb2YgbG9hZGluZyA9PT0gJ3VuZGVmaW5lZCcpO1xuICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSB8fCBzcmMuc3RhcnRzV2l0aCgnYmxvYjonKSkge1xuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xuICAgICAgICB1bm9wdGltaXplZCA9IHRydWU7XG4gICAgICAgIGlzTGF6eSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9hZGVkSW1hZ2VVUkxzLmhhcyhzcmMpKSB7XG4gICAgICAgIGlzTGF6eSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgICAgICBxdWFsaXR5XG4gICAgICAgICAgICB9KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTih3aWR0aEludCkgfHwgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYU4oaGVpZ2h0SW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwid2lkdGhcIiBvciBcImhlaWdodFwiIHByb3BlcnR5LiBUaGVzZSBzaG91bGQgYmUgbnVtZXJpYyB2YWx1ZXMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnICYmICh3aWR0aCB8fCBoZWlnaHQpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgYW5kIFwibGF5b3V0PSdmaWxsJ1wiIGhhcyB1bnVzZWQgcHJvcGVydGllcyBhc3NpZ25lZC4gUGxlYXNlIHJlbW92ZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJpb3JpdHkgJiYgbG9hZGluZyA9PT0gJ2xhenknKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYWNlaG9sZGVyID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgIGlmIChsYXlvdXQgIT09ICdmaWxsJyAmJiAod2lkdGhJbnQgfHwgMCkgKiAoaGVpZ2h0SW50IHx8IDApIDwgMTYwMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBzbWFsbGVyIHRoYW4gNDB4NDAuIENvbnNpZGVyIHJlbW92aW5nIHRoZSBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IHRvIGltcHJvdmUgcGVyZm9ybWFuY2UuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWJsdXJEYXRhVVJMKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgVkFMSURfQkxVUl9FWFQgPSBbXG4gICAgICAgICAgICAgICAgICAgICdqcGVnJyxcbiAgICAgICAgICAgICAgICAgICAgJ3BuZycsXG4gICAgICAgICAgICAgICAgICAgICd3ZWJwJ1xuICAgICAgICAgICAgICAgIF0gLy8gc2hvdWxkIG1hdGNoIG5leHQtaW1hZ2UtbG9hZGVyXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSBidXQgaXMgbWlzc2luZyB0aGUgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LlxuICAgICAgICAgIFBvc3NpYmxlIHNvbHV0aW9uczpcbiAgICAgICAgICAgIC0gQWRkIGEgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LCB0aGUgY29udGVudHMgc2hvdWxkIGJlIGEgc21hbGwgRGF0YSBVUkwgdG8gcmVwcmVzZW50IHRoZSBpbWFnZVxuICAgICAgICAgICAgLSBDaGFuZ2UgdGhlIFwic3JjXCIgcHJvcGVydHkgdG8gYSBzdGF0aWMgaW1wb3J0IHdpdGggb25lIG9mIHRoZSBzdXBwb3J0ZWQgZmlsZSB0eXBlczogJHtWQUxJRF9CTFVSX0VYVC5qb2luKCcsJyl9XG4gICAgICAgICAgICAtIFJlbW92ZSB0aGUgXCJwbGFjZWhvbGRlclwiIHByb3BlcnR5LCBlZmZlY3RpdmVseSBubyBibHVyIGVmZmVjdFxuICAgICAgICAgIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcGxhY2Vob2xkZXItYmx1ci1kYXRhLXVybGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgncmVmJyBpbiByZXN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJyZWZcIiBwcm9wZXJ0eS4gQ29uc2lkZXIgdXNpbmcgdGhlIFwib25Mb2FkaW5nQ29tcGxldGVcIiBwcm9wZXJ0eSBpbnN0ZWFkLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICgnc3R5bGUnIGluIHJlc3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyB1c2luZyB1bnN1cHBvcnRlZCBcInN0eWxlXCIgcHJvcGVydHkuIFBsZWFzZSB1c2UgdGhlIFwiY2xhc3NOYW1lXCIgcHJvcGVydHkgaW5zdGVhZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCkgKyAxMDA7XG4gICAgICAgIGlmICghdW5vcHRpbWl6ZWQgJiYgIWxvYWRlcih7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICB3aWR0aDogcmFuZCxcbiAgICAgICAgICAgIHF1YWxpdHk6IDc1XG4gICAgICAgIH0pLmluY2x1ZGVzKHJhbmQudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYSBcImxvYWRlclwiIHByb3BlcnR5IHRoYXQgZG9lcyBub3QgaW1wbGVtZW50IHdpZHRoLiBQbGVhc2UgaW1wbGVtZW50IGl0IG9yIHVzZSB0aGUgXCJ1bm9wdGltaXplZFwiIHByb3BlcnR5IGluc3RlYWQuYCArIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXItd2lkdGhgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBbc2V0UmVmLCBpc0ludGVyc2VjdGVkXSA9ICgwLCBfdXNlSW50ZXJzZWN0aW9uKS51c2VJbnRlcnNlY3Rpb24oe1xuICAgICAgICByb290TWFyZ2luOiBsYXp5Qm91bmRhcnksXG4gICAgICAgIGRpc2FibGVkOiAhaXNMYXp5XG4gICAgfSk7XG4gICAgY29uc3QgaXNWaXNpYmxlID0gIWlzTGF6eSB8fCBpc0ludGVyc2VjdGVkO1xuICAgIGxldCB3cmFwcGVyU3R5bGU7XG4gICAgbGV0IHNpemVyU3R5bGU7XG4gICAgbGV0IHNpemVyU3ZnO1xuICAgIGxldCBpbWdTdHlsZSA9IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG1heEhlaWdodDogJzEwMCUnLFxuICAgICAgICBvYmplY3RGaXQsXG4gICAgICAgIG9iamVjdFBvc2l0aW9uXG4gICAgfTtcbiAgICBjb25zdCBibHVyU3R5bGUgPSBwbGFjZWhvbGRlciA9PT0gJ2JsdXInID8ge1xuICAgICAgICBmaWx0ZXI6ICdibHVyKDIwcHgpJyxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IG9iamVjdEZpdCB8fCAnY292ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke2JsdXJEYXRhVVJMfVwiKWAsXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogb2JqZWN0UG9zaXRpb24gfHwgJzAlIDAlJ1xuICAgIH0gOiB7XG4gICAgfTtcbiAgICBpZiAobGF5b3V0ID09PSAnZmlsbCcpIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbiAgICAgICAgY29uc3QgcXVvdGllbnQgPSBoZWlnaHRJbnQgLyB3aWR0aEludDtcbiAgICAgICAgY29uc3QgcGFkZGluZ1RvcCA9IGlzTmFOKHF1b3RpZW50KSA/ICcxMDAlJyA6IGAke3F1b3RpZW50ICogMTAwfSVgO1xuICAgICAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnaW50cmluc2ljJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdmcgPSBgPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YDtcbiAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaXhlZCcpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRJbnRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBpbWdBdHRyaWJ1dGVzID0ge1xuICAgICAgICBzcmM6ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLFxuICAgICAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgc2l6ZXM6IHVuZGVmaW5lZFxuICAgIH07XG4gICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgICBpbWdBdHRyaWJ1dGVzID0gZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgICAgICBzaXplcyxcbiAgICAgICAgICAgIGxvYWRlclxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGV0IHNyY1N0cmluZyA9IHNyYztcbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHdyYXBwZXJTdHlsZVxuICAgIH0sIHNpemVyU3R5bGUgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBzdHlsZTogc2l6ZXJTdHlsZVxuICAgIH0sIHNpemVyU3ZnID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICBwYWRkaW5nOiAwXG4gICAgICAgIH0sXG4gICAgICAgIGFsdDogXCJcIixcbiAgICAgICAgXCJhcmlhLWhpZGRlblwiOiB0cnVlLFxuICAgICAgICBzcmM6IGBkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7KDAsIF90b0Jhc2U2NCkudG9CYXNlNjQoc2l6ZXJTdmcpfWBcbiAgICB9KSA6IG51bGwpIDogbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIH0sIHJlc3QsIGltZ0F0dHJpYnV0ZXMsIHtcbiAgICAgICAgZGVjb2Rpbmc6IFwiYXN5bmNcIixcbiAgICAgICAgXCJkYXRhLW5pbWdcIjogbGF5b3V0LFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgcmVmOiAoaW1nKT0+e1xuICAgICAgICAgICAgc2V0UmVmKGltZyk7XG4gICAgICAgICAgICBoYW5kbGVMb2FkaW5nKGltZywgc3JjU3RyaW5nLCBsYXlvdXQsIHBsYWNlaG9sZGVyLCBvbkxvYWRpbmdDb21wbGV0ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgfSwgaW1nU3R5bGUsIGJsdXJTdHlsZSlcbiAgICB9KSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCBPYmplY3QuYXNzaWduKHtcbiAgICB9LCByZXN0LCBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgc3JjLFxuICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgbGF5b3V0LFxuICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgIHNpemVzLFxuICAgICAgICBsb2FkZXJcbiAgICB9KSwge1xuICAgICAgICBkZWNvZGluZzogXCJhc3luY1wiLFxuICAgICAgICBcImRhdGEtbmltZ1wiOiBsYXlvdXQsXG4gICAgICAgIHN0eWxlOiBpbWdTdHlsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIGxvYWRpbmc6IGxvYWRpbmcgfHwgJ2xhenknXG4gICAgfSkpKSwgcHJpb3JpdHkgPyAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4gICAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4gICAgLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuICAgIC8vXG4gICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG4gICAgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICBrZXk6ICdfX25pbWctJyArIGltZ0F0dHJpYnV0ZXMuc3JjICsgaW1nQXR0cmlidXRlcy5zcmNTZXQgKyBpbWdBdHRyaWJ1dGVzLnNpemVzLFxuICAgICAgICByZWw6IFwicHJlbG9hZFwiLFxuICAgICAgICBhczogXCJpbWFnZVwiLFxuICAgICAgICBocmVmOiBpbWdBdHRyaWJ1dGVzLnNyY1NldCA/IHVuZGVmaW5lZCA6IGltZ0F0dHJpYnV0ZXMuc3JjLFxuICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZS5cbiAgICAgICAgaW1hZ2VzcmNzZXQ6IGltZ0F0dHJpYnV0ZXMuc3JjU2V0LFxuICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlLlxuICAgICAgICBpbWFnZXNpemVzOiBpbWdBdHRyaWJ1dGVzLnNpemVzXG4gICAgfSkpIDogbnVsbCkpO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYykge1xuICAgIHJldHVybiBzcmNbMF0gPT09ICcvJyA/IHNyYy5zbGljZSgxKSA6IHNyYztcbn1cbmZ1bmN0aW9uIGltZ2l4TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/YXV0bz1mb3JtYXQmZml0PW1heCZ3PTMwMFxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfWApO1xuICAgIGNvbnN0IHBhcmFtcyA9IHVybC5zZWFyY2hQYXJhbXM7XG4gICAgcGFyYW1zLnNldCgnYXV0bycsIHBhcmFtcy5nZXQoJ2F1dG8nKSB8fCAnZm9ybWF0Jyk7XG4gICAgcGFyYW1zLnNldCgnZml0JywgcGFyYW1zLmdldCgnZml0JykgfHwgJ21heCcpO1xuICAgIHBhcmFtcy5zZXQoJ3cnLCBwYXJhbXMuZ2V0KCd3JykgfHwgd2lkdGgudG9TdHJpbmcoKSk7XG4gICAgaWYgKHF1YWxpdHkpIHtcbiAgICAgICAgcGFyYW1zLnNldCgncScsIHF1YWxpdHkudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIHJldHVybiB1cmwuaHJlZjtcbn1cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAgfSkge1xuICAgIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gO1xufVxuZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICAvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuICAgIGNvbnN0IHBhcmFtcyA9IFtcbiAgICAgICAgJ2ZfYXV0bycsXG4gICAgICAgICdjX2xpbWl0JyxcbiAgICAgICAgJ3dfJyArIHdpZHRoLFxuICAgICAgICAncV8nICsgKHF1YWxpdHkgfHwgJ2F1dG8nKVxuICAgIF07XG4gICAgbGV0IHBhcmFtc1N0cmluZyA9IHBhcmFtcy5qb2luKCcsJykgKyAnLyc7XG4gICAgcmV0dXJuIGAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gO1xufVxuZnVuY3Rpb24gY3VzdG9tTG9hZGVyKHsgc3JjICB9KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIG1pc3NpbmcgXCJsb2FkZXJcIiBwcm9wLmAgKyBgXFxuUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLW1pc3NpbmctbG9hZGVyYCk7XG59XG5mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdWYWx1ZXMgPSBbXTtcbiAgICAgICAgLy8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG4gICAgICAgIGlmICghc3JjKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpO1xuICAgICAgICBpZiAoIXdpZHRoKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJyk7XG4gICAgICAgIGlmIChtaXNzaW5nVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oJywgJyl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgcXVhbGl0eVxuICAgICAgICAgICAgfSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNyYy5zdGFydHNXaXRoKCcvLycpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc3JjLnN0YXJ0c1dpdGgoJy8nKSAmJiBjb25maWdEb21haW5zKSB7XG4gICAgICAgICAgICBsZXQgcGFyc2VkU3JjO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJiAhY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gICsgYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YDtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oY2IpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYih7XG4gICAgICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgMSk7XG59O1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcbmNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn07XG5leHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IGNhbmNlbElkbGVDYWxsYmFjaztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VJbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb247XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHsgcm9vdE1hcmdpbiAsIGRpc2FibGVkICB9KSB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICBjb25zdCB1bm9ic2VydmUgPSAoMCwgX3JlYWN0KS51c2VSZWYoKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSAoMCwgX3JlYWN0KS51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2V0UmVmID0gKDAsIF9yZWFjdCkudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KCk7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm47XG4gICAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoZWwsIChpc1Zpc2libGUpPT5pc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpXG4gICAgICAgICAgICAsIHtcbiAgICAgICAgICAgICAgICByb290TWFyZ2luXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgaXNEaXNhYmxlZCxcbiAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKT0+KDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5jYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgIHJldHVybiBbXG4gICAgICAgIHNldFJlZixcbiAgICAgICAgdmlzaWJsZVxuICAgIF07XG59XG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpZCAsIG9ic2VydmVyICwgZWxlbWVudHMgIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKTtcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICAgICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJztcbiAgICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcyk9PntcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSk9PntcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgb2JzZXJ2ZXJzLnNldChpZCwgaW5zdGFuY2UgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBvYnNlcnZlcixcbiAgICAgICAgZWxlbWVudHNcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvaW5kZXgubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXJcIjtcclxuaW1wb3J0IE1haW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFpblwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhci9IZWFkZXJcIjtcclxuXHJcblxyXG5cclxuY29uc3QgSW5kZXg6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG5cdFx0XHQ8SGVhZGVyPjwvSGVhZGVyPlxyXG5cdFx0XHQ8TWFpbj48L01haW4+XHJcblx0XHRcdDxGb290ZXI+PC9Gb290ZXI+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCJpbXBvcnQge2dxbH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9PUkRFUl9CWV9JRCA9IGdxbCBgXHJcblxyXG5cdHF1ZXJ5IGdldE9yZGVyQnlJZCgkb3JkZXI6IElEISkge1xyXG5cdFx0XHRnZXRPcmRlckJ5SWQoaWQ6ICRvcmRlcikge1xyXG5cdFx0XHRcdGlkLCBmdWxsX25hbWUsIGVtYWlsXHJcblx0XHRcdH1cclxuXHR9XHJcblx0XHJcbmAiLCJpbXBvcnQge2dxbH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9BTExfUFJPRFVDVFMgPSBncWwgYFxyXG5cclxuXHRxdWVyeSB7XHJcblx0XHRnZXRBbGxQcm9kdWN0cyB7XHJcblx0XHRcdGlkLCBuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2VcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcbmAiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuXHJcbmNvbnN0IHNlbnRDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTsgXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VudENvbnRleHQ7XHJcblxyXG5cclxuXHJcblxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb290ZXJcIjogXCJGb290ZXJfZm9vdGVyX18xS1cxN1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid3JhcHBlclwiOiBcIkhlYWRlcl93cmFwcGVyX19KUmdKQVwiLFxuXHRcIl9jb250YWluZXJcIjogXCJIZWFkZXJfX2NvbnRhaW5lcl9fM0VpVS1cIixcblx0XCJoZWFkZXJcIjogXCJIZWFkZXJfaGVhZGVyX18yLVhXWFwiLFxuXHRcImhlYWRlcl9fY29udGFpbmVyXCI6IFwiSGVhZGVyX2hlYWRlcl9fY29udGFpbmVyX180LVhKSVwiLFxuXHRcImhlYWRlcl9fbG9nb1wiOiBcIkhlYWRlcl9oZWFkZXJfX2xvZ29fX0UxeWwxXCIsXG5cdFwiaGVhZGVyX19sb2dvX2ljb25cIjogXCJIZWFkZXJfaGVhZGVyX19sb2dvX2ljb25fXzIwVXRKXCIsXG5cdFwiaGVhZGVyX19sb2dvX2ljb25fX2ltZ1wiOiBcIkhlYWRlcl9oZWFkZXJfX2xvZ29faWNvbl9faW1nX19ITE9IQlwiLFxuXHRcImhlYWRlcl9fbG9nb190ZXh0XCI6IFwiSGVhZGVyX2hlYWRlcl9fbG9nb190ZXh0X18zU3UzYVwiLFxuXHRcImhlYWRlcl9fYnVza2V0XCI6IFwiSGVhZGVyX2hlYWRlcl9fYnVza2V0X18ybW44UVwiLFxuXHRcImhlYWRlcl9fYnVza2V0X3RleHRcIjogXCJIZWFkZXJfaGVhZGVyX19idXNrZXRfdGV4dF9fMXkycUhcIixcblx0XCJoZWFkZXJfX2J1c2tldF9pY29uXCI6IFwiSGVhZGVyX2hlYWRlcl9fYnVza2V0X2ljb25fX0xpeEJZXCIsXG5cdFwiaGVhZGVyX19idXNrZXRfY291bnRcIjogXCJIZWFkZXJfaGVhZGVyX19idXNrZXRfY291bnRfX1BtcjI2XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwiTWFpbl93cmFwcGVyX18ybkpsbVwiLFxuXHRcIl9jb250YWluZXJcIjogXCJNYWluX19jb250YWluZXJfXzNvUTYzXCIsXG5cdFwicGFnZVwiOiBcIk1haW5fcGFnZV9fMWFBVlVcIixcblx0XCJwYWdlX19tYWluXCI6IFwiTWFpbl9wYWdlX19tYWluX19BcnhfOFwiLFxuXHRcIm1haW5cIjogXCJNYWluX21haW5fXzZEUGlEXCIsXG5cdFwibWFpbl9fYm9keVwiOiBcIk1haW5fbWFpbl9fYm9keV9fMlcwNmlcIixcblx0XCJtYWluX19ib2R5X19jb250YWluZXJcIjogXCJNYWluX21haW5fX2JvZHlfX2NvbnRhaW5lcl9fZkJXYkpcIixcblx0XCJtYWluX19mb3JtXCI6IFwiTWFpbl9tYWluX19mb3JtX18xeU9NZVwiLFxuXHRcIm1haW5fX2Zvcm1fX3RhYnNcIjogXCJNYWluX21haW5fX2Zvcm1fX3RhYnNfXzNzNkZkXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwiT3JkZXJfd3JhcHBlcl9fTzhYcGhcIixcblx0XCJfY29udGFpbmVyXCI6IFwiT3JkZXJfX2NvbnRhaW5lcl9fVGZxN1VcIixcblx0XCJvcmRlclwiOiBcIk9yZGVyX29yZGVyX182dnVQLVwiLFxuXHRcIm9yZGVyX190aXRsZVwiOiBcIk9yZGVyX29yZGVyX190aXRsZV9fZGVjY3dcIixcblx0XCJvcmRlcl9fbnVtYmVyXCI6IFwiT3JkZXJfb3JkZXJfX251bWJlcl9fMVdXbjRcIixcblx0XCJvcmRlcl9fdGV4dFwiOiBcIk9yZGVyX29yZGVyX190ZXh0X18xZXM2eFwiLFxuXHRcIm9yZGVyX19lc3RpbWF0ZWRcIjogXCJPcmRlcl9vcmRlcl9fZXN0aW1hdGVkX19nNTBnLVwiLFxuXHRcIm9yZGVyX19wcmludF9yZWNpcGVcIjogXCJPcmRlcl9vcmRlcl9fcHJpbnRfcmVjaXBlX18zVGpmY1wiLFxuXHRcImJvbGRcIjogXCJPcmRlcl9ib2xkX19EXzlPaVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid3JhcHBlclwiOiBcIlByb2R1Y3RzX3dyYXBwZXJfXzFuSTNDXCIsXG5cdFwiX2NvbnRhaW5lclwiOiBcIlByb2R1Y3RzX19jb250YWluZXJfXzFISS1hXCIsXG5cdFwibWFpbl9fcHJvZHVjdHNcIjogXCJQcm9kdWN0c19tYWluX19wcm9kdWN0c19fdEpDWTJcIixcblx0XCJwcm9kdWN0c1wiOiBcIlByb2R1Y3RzX3Byb2R1Y3RzX18ySHZHU1wiLFxuXHRcInByb2R1Y3RzX190ZXh0XCI6IFwiUHJvZHVjdHNfcHJvZHVjdHNfX3RleHRfX29ERVE1XCIsXG5cdFwicHJvZHVjdHNfX3RleHRfdGl0bGVcIjogXCJQcm9kdWN0c19wcm9kdWN0c19fdGV4dF90aXRsZV9fMmUxWVRcIixcblx0XCJwcm9kdWN0c19fdGV4dF9lZGl0XCI6IFwiUHJvZHVjdHNfcHJvZHVjdHNfX3RleHRfZWRpdF9fMW5WNmpcIixcblx0XCJwcm9kdWN0c19fcHJvZHVjdFwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RzX19wcm9kdWN0X18yTkZWWlwiLFxuXHRcInByb2R1Y3RzX19jb3N0XCI6IFwiUHJvZHVjdHNfcHJvZHVjdHNfX2Nvc3RfXzEwSlZzXCIsXG5cdFwicHJvZHVjdHNfX2luZm9ybWF0aW9uXCI6IFwiUHJvZHVjdHNfcHJvZHVjdHNfX2luZm9ybWF0aW9uX18zeFpFQlwiLFxuXHRcInByb2R1Y3RcIjogXCJQcm9kdWN0c19wcm9kdWN0X19FSFV5TVwiLFxuXHRcInByb2R1Y3RfX2ltYWdlXCI6IFwiUHJvZHVjdHNfcHJvZHVjdF9faW1hZ2VfXzFDaFpOXCIsXG5cdFwicHJvZHVjdF9fY29udGVudFwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RfX2NvbnRlbnRfXzNweFJVXCIsXG5cdFwicHJvZHVjdF9fY29udGVudF9uYW1lXCI6IFwiUHJvZHVjdHNfcHJvZHVjdF9fY29udGVudF9uYW1lX18zV3ZjZVwiLFxuXHRcInByb2R1Y3RfX2NvbnRlbnRfZGVzY3JpcHRpb25cIjogXCJQcm9kdWN0c19wcm9kdWN0X19jb250ZW50X2Rlc2NyaXB0aW9uX18yQ2pyUlwiLFxuXHRcInByb2R1Y3RfX2NvbnRlbnRfcXVhbnRpdHlcIjogXCJQcm9kdWN0c19wcm9kdWN0X19jb250ZW50X3F1YW50aXR5X19xQlhJUVwiLFxuXHRcInByb2R1Y3RfX3ByaWNlXCI6IFwiUHJvZHVjdHNfcHJvZHVjdF9fcHJpY2VfXzJONmMwXCIsXG5cdFwiY29zdF9fc3VidG90YWxcIjogXCJQcm9kdWN0c19jb3N0X19zdWJ0b3RhbF9fRlZkR09cIixcblx0XCJjb3N0X19zaGlwcGluZ1wiOiBcIlByb2R1Y3RzX2Nvc3RfX3NoaXBwaW5nX191ZGJVZlwiLFxuXHRcImNvc3RfX3RheGVzXCI6IFwiUHJvZHVjdHNfY29zdF9fdGF4ZXNfX184REszXCIsXG5cdFwiY29zdF9fdG90YWxcIjogXCJQcm9kdWN0c19jb3N0X190b3RhbF9fMUtOU0hcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyYXBwZXJcIjogXCJzdHlsZXNfd3JhcHBlcl9fMUNwUk9cIixcblx0XCJfY29udGFpbmVyXCI6IFwic3R5bGVzX19jb250YWluZXJfXzFoeEUyXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbWFpbGpzLWNvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcXVlcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlucHV0LW1hc2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIkZvb3RlciIsImZvb3RlciIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByb2R1Y3RzIiwiVGFicyIsInNlbnRDb250ZXh0IiwiZW1haWxqcyIsIk9yZGVyIiwidXNlTXV0YXRpb24iLCJDUkVBVEVfT1JERVIiLCJNYWluIiwic3RhdGUiLCJzZXRTdGF0ZSIsIm5ld09yZGVyIiwib3JkZXIiLCJzZXRPcmRlciIsInNldFRpbWVvdXQiLCJzZW5kRW1haWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZ1bGxfbmFtZSIsInF1ZXJ5U2VsZWN0b3IiLCJlbWFpbCIsInBob25lIiwic3RyZWV0IiwiYXB0IiwiY2l0eSIsImNvdW50cnkiLCJ6aXAiLCJjYXJkX251bWJlciIsImV4cGlyZV9kYXRlIiwic2VjdXJpdHlfY29kZSIsInZhcmlhYmxlcyIsImlucHV0IiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlT3JkZXIiLCJpZCIsInNlbmRGb3JtIiwidGFyZ2V0IiwicmVzdWx0IiwidGV4dCIsImVycm9yIiwicmVzZXQiLCJwYWdlIiwicGFnZV9fbWFpbiIsIm1haW4iLCJtYWluX19jb250YWluZXIiLCJfY29udGFpbmVyIiwibWFpbl9fYm9keSIsIm1haW5fX2JvZHlfX2NvbnRhaW5lciIsIm1haW5fX2Zvcm0iLCJ1c2VRdWVyeSIsIkdFVF9BTExfUFJPRFVDVFMiLCJIZWFkZXIiLCJzZWxlY3RlZFByb2R1Y3RzIiwic2V0U2VsZWN0ZWRQcm9kdWN0cyIsImxvYWRpbmciLCJyZWZldGNoIiwicG9sbEludGVydmFsIiwiZ2V0QWxsUHJvZHVjdHMiLCJoZWFkZXIiLCJoZWFkZXJfX2NvbnRhaW5lciIsImhlYWRlcl9fbG9nbyIsImhlYWRlcl9fbG9nb19pY29uIiwiaGVhZGVyX19sb2dvX3RleHQiLCJoZWFkZXJfX2J1c2tldCIsImhlYWRlcl9fYnVza2V0X3RleHQiLCJoZWFkZXJfX2J1c2tldF9pY29uIiwiaGVhZGVyX19idXNrZXRfY291bnQiLCJsZW5ndGgiLCJJbWFnZSIsIm1haW5fX3Byb2R1Y3RzIiwicHJvZHVjdHNfX3RleHQiLCJwcm9kdWN0c19fdGV4dF90aXRsZSIsInByb2R1Y3RzX190ZXh0X2VkaXQiLCJwcm9kdWN0c19faXRlbXMiLCJtYXAiLCJwcm9kdWN0IiwicHJvZHVjdHNfX3Byb2R1Y3QiLCJwcm9kdWN0X19pbWFnZSIsInByb2R1Y3RfX2NvbnRlbnQiLCJwcm9kdWN0X19jb250ZW50X25hbWUiLCJuYW1lIiwicHJvZHVjdF9fY29udGVudF9kZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwicHJvZHVjdF9fY29udGVudF9xdWFudGl0eSIsInByb2R1Y3RfX3ByaWNlIiwicHJpY2UiLCJwcm9kdWN0c19fY29zdCIsImNvc3RfX3N1YnRvdGFsIiwic3VidG90YWxfX3RleHQiLCJzdWJ0b3RhbF9fY291bnQiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJjb3N0X19zaGlwcGluZyIsInNoaXBwaW5nX190ZXh0Iiwic2hpcHBpbmdfX2NvdW50IiwiY29zdF9fdGF4ZXMiLCJ0YXhlc19fdGV4dCIsInRheGVzX19jb3VudCIsImNvc3RfX3RvdGFsIiwidG90YWxfX3RleHQiLCJ0b3RhbF9fY291bnQiLCJwcm9kdWN0c19faW5mb3JtYXRpb24iLCJHRVRfT1JERVJfQllfSUQiLCJzZWxlY3RlZE9yZGVyIiwic2V0U2VsZWN0ZWRPcmRlciIsImdldE9yZGVyQnlJZCIsInByaW50UmVjaXBlIiwid2luZG93IiwicHJpbnQiLCJvcmRlcl9fdGl0bGUiLCJvcmRlcl9fbnVtYmVyIiwib3JkZXJfX3RleHQiLCJvcmRlcl9fZXN0aW1hdGVkIiwiYm9sZCIsIm9yZGVyX19wcmludF9yZWNpcGUiLCJ1c2VHZW9sb2NhdGlvbiIsInVzZUlkZW50aWZpY2F0aW9uQ2FyZCIsInVzZUlucHV0IiwiSW5wdXRNYXNrIiwiZmFDcm9zc2hhaXJzIiwiRm9udEF3ZXNvbWVJY29uIiwiJCIsInRvZ2dsZUNsYXNzIiwic2V0VG9nZ2xlQ2xhc3MiLCJjYXJkVHlwZSIsInNldENhcmRUeXBlIiwiaXNEZXRlY3RlZCIsInNldElzRGV0ZWN0ZWQiLCJnZW9sb2NhdGlvbiIsImlzRW1wdHkiLCJtaW5MZW5ndGgiLCJiIiwiaXNFbWFpbCIsImZvY3VzIiwicmVtb3ZlQ2xhc3MiLCJibHVyIiwiZ2V0RGV0ZWN0ZWQiLCJ2YWx1ZSIsImlzTmV4dCIsImlzTWluTGVuZ3RoRXJyb3IiLCJvbkNoYW5nZSIsIm9uQmx1ciIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJmb250U2l6ZSIsImN1cnNvciIsIm9wYWNpdHkiLCJpbnB1dFZhbGlkIiwiaXNFbWFpbEVycm9yIiwibmF2aWdhdG9yIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwic3VjY2Vzc0NhbGxiYWNrIiwiZXJyb3JDYWxsYmFjayIsInNldENpdHkiLCJzZXRDb3VudHJ5Iiwic2V0WmlwIiwiZmV0Y2giLCJkIiwianNvbiIsInJlcyIsImNvdW50cnlfbmFtZSIsInBvc3RhbCIsInJlZ2V4IiwiUmVnRXhwIiwibWF0Y2giLCJ0ZXN0IiwidXNlVmFsaWRhdGlvbiIsImluaXRpYWxWYWx1ZSIsInZhbGlkYXRpb25zIiwidHlwZSIsInNldFZhbHVlIiwiaXNEaXJ0eSIsInNldElzRGlydHkiLCJzZXRJc05leHQiLCJ2YWxpZCIsIm9uQ2xpY2siLCJzZXRJc0VtcHR5Iiwic2V0SXNFbWFpbEVycm9yIiwic2V0SXNNaW5MZW5ndGhFcnJvciIsInNldElucHV0VmFsaWQiLCJ2YWxpZGF0aW9uIiwicmUiLCJTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsImdxbCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsImRlZmF1bHQiLCJJbWFnZTEiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9oZWFkIiwiX3RvQmFzZTY0IiwiX2ltYWdlQ29uZmlnIiwiX3VzZUludGVyc2VjdGlvbiIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl9fZXNNb2R1bGUiLCJfb2JqZWN0U3ByZWFkIiwiaSIsImFyZ3VtZW50cyIsInNvdXJjZSIsIm93bktleXMiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiY29uY2F0IiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZm9yRWFjaCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsImV4Y2x1ZGVkIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJzb3VyY2VTeW1ib2xLZXlzIiwiaW5kZXhPZiIsInByb3RvdHlwZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiY2FsbCIsInNvdXJjZUtleXMiLCJsb2FkZWRJbWFnZVVSTHMiLCJTZXQiLCJnbG9iYWwiLCJfX05FWFRfSU1BR0VfSU1QT1JURUQiLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsInVuZGVmaW5lZCIsImxvYWRlcnMiLCJNYXAiLCJkZWZhdWx0TG9hZGVyIiwiaW1naXhMb2FkZXIiLCJjbG91ZGluYXJ5TG9hZGVyIiwiYWthbWFpTG9hZGVyIiwiY3VzdG9tTG9hZGVyIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImlzU3RhdGljUmVxdWlyZSIsInNyYyIsImlzU3RhdGljSW1hZ2VEYXRhIiwiaXNTdGF0aWNJbXBvcnQiLCJkZXZpY2VTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImNvbmZpZ0ltYWdlU2l6ZXMiLCJsb2FkZXIiLCJjb25maWdMb2FkZXIiLCJwYXRoIiwiY29uZmlnUGF0aCIsImRvbWFpbnMiLCJjb25maWdEb21haW5zIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9JTUFHRV9PUFRTIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJzb3J0IiwiYSIsImdldFdpZHRocyIsIndpZHRoIiwibGF5b3V0Iiwic2l6ZXMiLCJ2aWV3cG9ydFdpZHRoUmUiLCJwZXJjZW50U2l6ZXMiLCJleGVjIiwicHVzaCIsInBhcnNlSW50Iiwic21hbGxlc3RSYXRpbyIsIk1hdGgiLCJtaW4iLCJ3aWR0aHMiLCJzIiwia2luZCIsInciLCJmaW5kIiwicCIsImdlbmVyYXRlSW1nQXR0cnMiLCJ1bm9wdGltaXplZCIsInF1YWxpdHkiLCJzcmNTZXQiLCJsYXN0Iiwiam9pbiIsImdldEludCIsIngiLCJkZWZhdWx0SW1hZ2VMb2FkZXIiLCJsb2FkZXJQcm9wcyIsImxvYWQiLCJnZXQiLCJyb290IiwiRXJyb3IiLCJWQUxJRF9MT0FERVJTIiwiaGFuZGxlTG9hZGluZyIsImltZyIsInBsYWNlaG9sZGVyIiwib25Mb2FkaW5nQ29tcGxldGUiLCJoYW5kbGVMb2FkIiwic3RhcnRzV2l0aCIsImRlY29kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2F0Y2giLCJzdHlsZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEltYWdlIiwiYWRkIiwibmF0dXJhbFdpZHRoIiwibmF0dXJhbEhlaWdodCIsInJlZiIsInBhcmVudEVsZW1lbnQiLCJwYXJlbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZGlzcGxheSIsIndhcm4iLCJjb21wbGV0ZSIsIm9ubG9hZCIsIl9wYXJhbSIsInByaW9yaXR5IiwibGF6eUJvdW5kYXJ5IiwiY2xhc3NOYW1lIiwiaGVpZ2h0Iiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJibHVyRGF0YVVSTCIsImFsbCIsInJlc3QiLCJzdGF0aWNTcmMiLCJzdGF0aWNJbWFnZURhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwid2lkdGhJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaXNMYXp5IiwiaGFzIiwiaW5jbHVkZXMiLCJpc05hTiIsIlZBTElEX0JMVVJfRVhUIiwicmFuZCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJzZXRSZWYiLCJpc0ludGVyc2VjdGVkIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid3JhcHBlclN0eWxlIiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nU3R5bGUiLCJsZWZ0IiwiYm90dG9tIiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJibHVyU3R5bGUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJvdmVyZmxvdyIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsImltZ0F0dHJpYnV0ZXMiLCJzcmNTdHJpbmciLCJjcmVhdGVFbGVtZW50IiwiYWx0IiwidG9CYXNlNjQiLCJhc3NpZ24iLCJkZWNvZGluZyIsInJlbCIsImFzIiwiaHJlZiIsImltYWdlc3Jjc2V0IiwiaW1hZ2VzaXplcyIsIm5vcm1hbGl6ZVNyYyIsInNsaWNlIiwidXJsIiwiVVJMIiwicGFyYW1zIiwic2VhcmNoUGFyYW1zIiwic2V0IiwicGFyYW1zU3RyaW5nIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsImVyciIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVxdWVzdElkbGVDYWxsYmFjayIsImNhbmNlbElkbGVDYWxsYmFjayIsInNlbGYiLCJiaW5kIiwiY2IiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImNsZWFyVGltZW91dCIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ1c2VSZWYiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZUNhbGxiYWNrIiwiZWwiLCJjdXJyZW50IiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvcHRpb25zIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJpbnN0YW5jZSIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJJbmRleCIsIndyYXBwZXIiLCJjcmVhdGVDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==