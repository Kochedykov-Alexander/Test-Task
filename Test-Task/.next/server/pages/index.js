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

  const moment = __webpack_require__(/*! moment */ "moment");

  const now = moment();
  now.subtract('seconds', 7); // takes 7 seconds of the current time

  console.log(now.subtract('days', 7)); // takes 7 days of the current date

  now.subtract('months', 7); // takes 7 months of the current date

  now.subtract('years', 7);

  function sendEmail(e) {
    e.preventDefault();
    const form = document.getElementById('form');
    const full_name = form.querySelector('[name="name"]').value;
    const email = form.querySelector('[name="email"]').value;
    const phone = form.querySelector('[name="phone"]').value;
    const street = form.querySelector('[name="street"]').value;
    const apt = form.querySelector('[name="name"]').value;
    const city = form.querySelector('[name="city"]').value;
    const zip = form.querySelector('[name="zip"]').value;
    const card_number = form.querySelector('[name="card_number"]').value;
    const expire_date = form.querySelector('[name="expire_date"]').value;
    const security_code = form.querySelector('[name="security_code"]').value;
    newOrder({
      variables: {
        input: {
          full_name,
          email,
          phone,
          street,
          apt,
          city,
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
                lineNumber: 89,
                columnNumber: 18
              }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_UI_Order__WEBPACK_IMPORTED_MODULE_5__.default, {
                order: order
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 28
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 7
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Products__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 7
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 80,
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: (_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_4___default().order),
    children: selectedOrder && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_4___default().order__title),
        children: [selectedOrder.full_name, ", Thank You for your order!"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 4
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_4___default().order__number),
        children: ["Order number is: ", selectedOrder.id]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 4
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_4___default().order__text),
        children: ["Your will recieve an email confirmation shortly to ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
          href: "",
          children: selectedOrder.email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 56
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 4
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_4___default().order__estimated),
        children: ["Estimated delivery Day is ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          className: (_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_4___default().bold),
          children: "Friday 1st April 2016"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 31
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 4
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
        className: (_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_4___default().order__print_recipe),
        children: "Print Recipe"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 4
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
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
    0: detected,
    1: setDetected
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
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
  var geolocation = (0,_hooks_useGeolocation__WEBPACK_IMPORTED_MODULE_1__.useGeolocation)();

  function getDetection() {
    setDetected(true);
  } // if (detected) {
  // 	return useGeolocation();
  // }


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setCardType((0,_hooks_useIdentificationCard__WEBPACK_IMPORTED_MODULE_2__.useIdentificationCard)(card_number.value));
  }, [card_number.value]);
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
        lineNumber: 58,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: toggleClass === 2 ? "tabs active-tabs" : "tabs",
        onClick: () => setToggleClass(2),
        children: "Billing"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: toggleClass === 3 ? "tabs active-tabs" : "tabs",
        onClick: () => setToggleClass(3),
        children: "Payment"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
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
          lineNumber: 65,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__recipient",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__recipient_text",
            children: "Recipient"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__inputs",
          children: [(b.isNext && full_name.isEmpty || b.isNext && full_name.isMinLengthError) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "message",
            children: "Please enter recipient full name and min length = 3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 94
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
            lineNumber: 77,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__inputs_daytime_container",
            children: [b.isNext && phone.isEmpty && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              className: "message",
              children: "Please enter recipient phone in format +7 (000) 000 00 00"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
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
              lineNumber: 82,
              columnNumber: 13
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
              htmlFor: "content__inputs_daytime_label",
              children: "For delivery questions only"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__address",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__address_text",
            children: "Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__inputs",
          children: [b.isNext && street.isEmpty && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "message",
            children: "Please enter recipient street"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 47
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
            type: "text",
            className: b.isNext && street.isEmpty ? "content__inputs_street focused" : "content__inputs_street",
            name: "street",
            placeholder: "Street Address",
            value: street.value,
            onChange: e => street.onChange(e),
            onBlur: e => street.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
            type: "text",
            className: "content__inputs_apt",
            name: "apt",
            placeholder: "Apt, Suite, Bldg, Gate Code. (optional)",
            value: apt.value,
            onChange: e => apt.onChange(e),
            onBlur: e => apt.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__inputs_icon",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
              type: "text",
              name: "city",
              className: b.isNext && city.isEmpty ? "content__inputs_city focused" : "content__inputs_city",
              placeholder: "City",
              value: geolocation == undefined ? city.value : geolocation.city,
              onChange: e => city.onChange(e),
              onBlur: e => city.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 11
            }, undefined), !geolocation ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
              onClick: getDetection,
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
              lineNumber: 103,
              columnNumber: 28
            }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faCrosshairs,
              style: {
                position: 'absolute',
                top: '40%',
                right: '10px',
                color: 'red',
                fontSize: '20px',
                cursor: 'pointer'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 187
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
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
                  value: geolocation == undefined ? "" : geolocation.country,
                  list: "cityname",
                  onChange: e => country.onChange(e),
                  onBlur: e => country.onBlur(e)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 12
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("datalist", {
                  id: "cityname",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                    value: "Boston"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 113,
                    columnNumber: 14
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                    value: "Cambridge"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 114,
                    columnNumber: 14
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 13
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 12
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 11
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
              type: "text",
              className: b.isNext && zip.isEmpty ? "content__inputs__row_zip focused" : "content__inputs__row_zip",
              name: "zip",
              placeholder: "ZIP",
              value: geolocation == undefined ? zip.value : geolocation.zip,
              onChange: e => zip.onChange(e),
              onBlur: e => zip.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
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
          lineNumber: 123,
          columnNumber: 11
        }, undefined), !(full_name.inputValid && phone.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
          className: "content__button",
          style: {
            cursor: 'pointer'
          },
          children: "Continue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: toggleClass === 2 ? "content active-content" : "content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__title",
          children: "Billing Information"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
          onClick: () => setToggleClass(1),
          className: "content__recipient_link",
          children: "Same as shipping"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__recipient",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__recipient_text",
            children: "Billing Contact"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__inputs",
          children: [(b.isNext && full_name.isEmpty || b.isNext && full_name.isMinLengthError) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "message",
            children: "Please enter recipient full name and min length = 3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
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
            lineNumber: 146,
            columnNumber: 11
          }, undefined), b.isNext && email.isEmailError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "message",
            children: "Please enter correct email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 48
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
            type: "text",
            className: b.isNext && email.isEmailError ? "content__inputs_email focused" : "content__inputs_email",
            name: "email",
            placeholder: "Email Address",
            value: email.value,
            onChange: e => email.onChange(e),
            onBlur: e => email.onBlur(e),
            name: "email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__address",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__address_text",
            children: "Billing Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__inputs",
          children: [b.isNext && street.isEmpty && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "message",
            children: "Please enter recipient street"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 46
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
            type: "text",
            className: b.isNext && street.isEmpty ? "content__inputs_street focused" : "content__inputs_street",
            name: "street",
            placeholder: "Street Address",
            value: street.value,
            onChange: e => street.onChange(e),
            onBlur: e => street.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
            type: "text",
            className: "content__inputs_apt",
            placeholder: "Apt, Suite, Bldg, Gate Code. (optional)",
            name: "apt",
            value: apt.value,
            onChange: e => apt.onChange(e),
            onBlur: e => apt.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 12
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__inputs_icon",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
              type: "text",
              name: "city",
              className: b.isNext && city.isEmpty ? "content__inputs_city focused" : "content__inputs_city",
              placeholder: "City",
              value: geolocation == undefined ? city.value : geolocation.city,
              onChange: e => city.onChange(e),
              onBlur: e => city.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
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
              lineNumber: 167,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 165,
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
                  value: geolocation == undefined ? "" : geolocation.country,
                  list: "cityname",
                  onBlur: e => country.onBlur(e)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 12
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("datalist", {
                  id: "cityname",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                    value: "Boston"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 176,
                    columnNumber: 14
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                    value: "Cambridge"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 177,
                    columnNumber: 14
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 175,
                  columnNumber: 13
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 12
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 11
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
              type: "text",
              className: b.isNext && zip.isEmpty ? "content__inputs__row_zip focused" : "content__inputs__row_zip",
              name: "zip",
              placeholder: "ZIP",
              value: geolocation == undefined ? zip.value : geolocation.zip,
              onChange: e => zip.onChange(e),
              onBlur: e => zip.onBlur(e)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 159,
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
          lineNumber: 186,
          columnNumber: 11
        }, undefined), !(full_name.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
          className: "content__button",
          style: {
            cursor: 'pointer'
          },
          children: "Continue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: toggleClass === 3 ? "content active-content" : "content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__title",
          children: "Payment"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
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
              lineNumber: 199,
              columnNumber: 12
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__ssl_text",
            children: "This is a secure 128-bit SSL encrypted payment"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__recipient",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__recipient_text",
            children: "Cardholder Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__inputs",
          children: [(b.isNext && full_name.isEmpty || b.isNext && full_name.isMinLengthError) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "message",
            children: "Please enter recipient full name and min length = 3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 93
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
            type: "text",
            className: b.isNext && full_name.isEmpty || b.isNext && full_name.isMinLengthError ? "content__inputs_fullname focused" : "content__inputs_fullname",
            name: "name",
            placeholder: "Name as it appears on your card",
            value: full_name.value,
            onChange: e => full_name.onChange(e),
            onBlur: e => full_name.onBlur(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__address",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__address_text",
            children: "Card Number"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "content__inputs input_card",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_4___default()), {
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
            lineNumber: 219,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
            src: cardType,
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
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
              lineNumber: 225,
              columnNumber: 12
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_4___default()), {
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
              lineNumber: 226,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "content__cards__info__security",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              className: "content__cards_info__security_text",
              children: "Security Code"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 12
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_4___default()), {
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
              lineNumber: 230,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 10
        }, undefined), full_name.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid && card_number.inputValid && security_code.inputValid && expire_date.inputValid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
          className: "content__button",
          type: "submit",
          children: "Pay Securely"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 10
        }, undefined), !(full_name.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid && card_number.inputValid && security_code.inputValid && expire_date.inputValid) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
          className: "content__button disabled",
          disabled: true,
          children: "Pay Securely"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 10
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 8
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
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

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);
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

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("moment");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsTUFBTUUsTUFBZ0IsR0FBRyxNQUFNO0FBQzlCLHNCQUNDO0FBQVEsYUFBUyxFQUFFRCwwRUFBYUU7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUREO0FBS0EsQ0FORDs7QUFRQSxpRUFBZUQsTUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBSUEsTUFBTVksSUFBYyxHQUFHLE1BQU07QUFFNUIsUUFBTTtBQUFDQyxJQUFBQSxLQUFEO0FBQVFDLElBQUFBO0FBQVIsTUFBb0JaLGlEQUFVLENBQUNLLG9EQUFELENBQXBDO0FBQ0EsUUFBTSxDQUFDUSxRQUFELElBQWFMLDJEQUFXLENBQUNDLDBEQUFELENBQTlCO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CYiwrQ0FBUSxDQUFDLElBQUQsQ0FBbEM7QUFHQUQsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2YsUUFBR1UsS0FBSyxJQUFJLElBQVosRUFBa0I7QUFDakJLLE1BQUFBLFVBQVUsQ0FBQyxNQUFNSixRQUFRLENBQUMsS0FBRCxDQUFmLEVBQXdCLEtBQXhCLENBQVY7QUFDQTtBQUNELEdBSlEsRUFJTixDQUFDRCxLQUFELENBSk0sQ0FBVDs7QUFNQSxRQUFNTSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsc0JBQUQsQ0FBdEI7O0FBRUEsUUFBTUMsR0FBRyxHQUFHRixNQUFNLEVBQWxCO0FBRUFFLEVBQUFBLEdBQUcsQ0FBQ0MsUUFBSixDQUFhLFNBQWIsRUFBd0IsQ0FBeEIsRUFqQjRCLENBaUJBOztBQUM1QkMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILEdBQUcsQ0FBQ0MsUUFBSixDQUFhLE1BQWIsRUFBcUIsQ0FBckIsQ0FBWixFQWxCNEIsQ0FrQmE7O0FBQ3pDRCxFQUFBQSxHQUFHLENBQUNDLFFBQUosQ0FBYSxRQUFiLEVBQXVCLENBQXZCLEVBbkI0QixDQW1CQTs7QUFDNUJELEVBQUFBLEdBQUcsQ0FBQ0MsUUFBSixDQUFhLE9BQWIsRUFBc0IsQ0FBdEI7O0FBTUEsV0FBU0csU0FBVCxDQUFtQkMsQ0FBbkIsRUFBc0I7QUFFckJBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUVBLFVBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQWI7QUFDQSxVQUFNQyxTQUFTLEdBQUdILElBQUksQ0FBQ0ksYUFBTCxDQUFtQixlQUFuQixFQUFvQ0MsS0FBdEQ7QUFDQSxVQUFNQyxLQUFLLEdBQUdOLElBQUksQ0FBQ0ksYUFBTCxDQUFtQixnQkFBbkIsRUFBcUNDLEtBQW5EO0FBQ0EsVUFBTUUsS0FBSyxHQUFHUCxJQUFJLENBQUNJLGFBQUwsQ0FBbUIsZ0JBQW5CLEVBQXFDQyxLQUFuRDtBQUNBLFVBQU1HLE1BQU0sR0FBR1IsSUFBSSxDQUFDSSxhQUFMLENBQW1CLGlCQUFuQixFQUFzQ0MsS0FBckQ7QUFDQSxVQUFNSSxHQUFHLEdBQUdULElBQUksQ0FBQ0ksYUFBTCxDQUFtQixlQUFuQixFQUFvQ0MsS0FBaEQ7QUFDQSxVQUFNSyxJQUFJLEdBQUdWLElBQUksQ0FBQ0ksYUFBTCxDQUFtQixlQUFuQixFQUFvQ0MsS0FBakQ7QUFDQSxVQUFNTSxHQUFHLEdBQUdYLElBQUksQ0FBQ0ksYUFBTCxDQUFtQixjQUFuQixFQUFtQ0MsS0FBL0M7QUFDQSxVQUFNTyxXQUFXLEdBQUdaLElBQUksQ0FBQ0ksYUFBTCxDQUFtQixzQkFBbkIsRUFBMkNDLEtBQS9EO0FBQ0EsVUFBTVEsV0FBVyxHQUFHYixJQUFJLENBQUNJLGFBQUwsQ0FBbUIsc0JBQW5CLEVBQTJDQyxLQUEvRDtBQUNBLFVBQU1TLGFBQWEsR0FBR2QsSUFBSSxDQUFDSSxhQUFMLENBQW1CLHdCQUFuQixFQUE2Q0MsS0FBbkU7QUFFQWxCLElBQUFBLFFBQVEsQ0FBQztBQUNSNEIsTUFBQUEsU0FBUyxFQUFFO0FBQ1ZDLFFBQUFBLEtBQUssRUFBRTtBQUNOYixVQUFBQSxTQURNO0FBQ0tHLFVBQUFBLEtBREw7QUFDWUMsVUFBQUEsS0FEWjtBQUNtQkMsVUFBQUEsTUFEbkI7QUFDMkJDLFVBQUFBLEdBRDNCO0FBQ2dDQyxVQUFBQSxJQURoQztBQUNzQ0MsVUFBQUEsR0FEdEM7QUFDMkNDLFVBQUFBLFdBRDNDO0FBQ3dEQyxVQUFBQSxXQUR4RDtBQUNxRUMsVUFBQUE7QUFEckU7QUFERztBQURILEtBQUQsQ0FBUixDQU1HRyxJQU5ILENBTVEsQ0FBQztBQUFDQyxNQUFBQTtBQUFELEtBQUQsS0FBWTtBQUNuQnZCLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZc0IsSUFBSSxDQUFDQyxXQUFqQjtBQUNBOUIsTUFBQUEsUUFBUSxDQUFDNkIsSUFBSSxDQUFDQyxXQUFMLENBQWlCQyxFQUFsQixDQUFSO0FBQ0EsS0FURDtBQVVBbEMsSUFBQUEsUUFBUSxDQUFDLElBQUQsQ0FBUjtBQUNBTixJQUFBQSwyREFBQSxDQUFpQixpQkFBakIsRUFBb0Msa0JBQXBDLEVBQXdEa0IsQ0FBQyxDQUFDd0IsTUFBMUQsRUFBa0UsNEJBQWxFLEVBQ0dMLElBREgsQ0FDU00sTUFBRCxJQUFZO0FBQ2pCNUIsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkyQixNQUFNLENBQUNDLElBQW5CO0FBRUEsS0FKSCxFQUlNQyxLQUFELElBQVc7QUFDYjlCLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZNkIsS0FBSyxDQUFDRCxJQUFsQjtBQUNBLEtBTkg7QUFPRTFCLElBQUFBLENBQUMsQ0FBQ3dCLE1BQUYsQ0FBU0ksS0FBVDtBQUVGOztBQUFBO0FBRUQsc0JBQ0M7QUFBTSxhQUFTLEVBQUV2RCxzRUFBakI7QUFBQSwyQkFDQztBQUFLLGVBQVMsRUFBRUEsNEVBQUEsR0FBb0IsR0FBcEIsR0FBMEJBLHNFQUExQztBQUFBLDZCQUVDO0FBQUssaUJBQVMsRUFBRUEsaUZBQUEsR0FBeUIsR0FBekIsR0FBK0JBLDRFQUEvQztBQUFBLCtCQUNDO0FBQUssbUJBQVMsRUFBRUEsNEVBQWhCO0FBQUEsaUNBQ0M7QUFBSyxxQkFBUyxFQUFFQSx1RkFBaEI7QUFBQSxvQ0FHQTtBQUFNLGdCQUFFLEVBQUMsTUFBVDtBQUFnQix1QkFBUyxFQUFFQSw0RUFBM0I7QUFBOEMsc0JBQVEsRUFBRTBCLFNBQXhEO0FBQUEsd0JBQ0UsQ0FBQ1osS0FBRCxnQkFBUyw4REFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFULGdCQUFtQiw4REFBQyw4Q0FBRDtBQUFPLHFCQUFLLEVBQUVHO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhBLGVBT0EsOERBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQ7QUFvQkEsQ0FwRkQ7O0FBc0ZBLGlFQUFlSixJQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEdBO0FBQ0E7QUFDQTtBQUVBOzs7QUFJQSxNQUFNcUQsTUFBZ0IsR0FBRyxNQUFNO0FBRTlCLFFBQU07QUFBQSxPQUFDQyxnQkFBRDtBQUFBLE9BQW1CQztBQUFuQixNQUEwQy9ELCtDQUFRLENBQWEsRUFBYixDQUF4RDtBQUNBLFFBQU07QUFBQzBDLElBQUFBLElBQUQ7QUFBT3NCLElBQUFBLE9BQVA7QUFBZ0JmLElBQUFBLEtBQWhCO0FBQXVCZ0IsSUFBQUE7QUFBdkIsTUFBa0NOLHdEQUFRLENBQUNDLDREQUFELEVBQW1CO0FBQUNNLElBQUFBLFlBQVksRUFBRTtBQUFmLEdBQW5CLENBQWhEO0FBR0FuRSxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZixRQUFJLENBQUNpRSxPQUFMLEVBQWM7QUFDYkQsTUFBQUEsbUJBQW1CLENBQUNyQixJQUFJLENBQUN5QixjQUFOLENBQW5CO0FBQ0E7QUFDRCxHQUpRLEVBSU4sQ0FBQ3pCLElBQUQsQ0FKTSxDQUFUO0FBTUEsc0JBQ0M7QUFBUSxhQUFTLEVBQUUvQywwRUFBbkI7QUFBQSwyQkFDQztBQUFLLGVBQVMsRUFBRUEscUZBQUEsR0FBMkIsR0FBM0IsR0FBaUNBLDhFQUFqRDtBQUFBLDhCQUNDO0FBQUssaUJBQVMsRUFBRUEsZ0ZBQWhCO0FBQUEsZ0NBQ0M7QUFBSyxtQkFBUyxFQUFFQSxxRkFBaEI7QUFBQSxpQ0FDQztBQUFLLGVBQUcsRUFBQyxnQkFBVDtBQUEwQixlQUFHLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFJQztBQUFLLG1CQUFTLEVBQUdBLHFGQUF3QjZFO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBUUE7QUFBSyxpQkFBUyxFQUFFN0Usa0ZBQWhCO0FBQUEsZ0NBQ0M7QUFBSyxtQkFBUyxFQUFFQSx1RkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFJQztBQUFLLG1CQUFTLEVBQUVBLHVGQUFoQjtBQUFBLGtDQUNDO0FBQUssZUFBRyxFQUFDLGtCQUFUO0FBQTRCLGVBQUcsRUFBQztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURELGVBRUM7QUFBTSxxQkFBUyxFQUFFQSx3RkFBakI7QUFBQSxzQkFBK0NtRSxnQkFBZ0IsR0FBR0EsZ0JBQWdCLENBQUNlLE1BQXBCLEdBQTZCO0FBQTVGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQ7QUFzQkEsQ0FsQ0Q7O0FBb0NBLGlFQUFlaEIsTUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUlBLE1BQU01RCxRQUFrQixHQUFHLE1BQU07QUFFaEMsUUFBTTtBQUFBLE9BQUM2RCxnQkFBRDtBQUFBLE9BQW1CQztBQUFuQixNQUEwQy9ELCtDQUFRLENBQWEsRUFBYixDQUF4RDtBQUNBLFFBQU07QUFBQzBDLElBQUFBLElBQUQ7QUFBT3NCLElBQUFBLE9BQVA7QUFBZ0JmLElBQUFBLEtBQWhCO0FBQXVCZ0IsSUFBQUE7QUFBdkIsTUFBa0NOLHdEQUFRLENBQUNDLDREQUFELEVBQW1CO0FBQUNNLElBQUFBLFlBQVksRUFBRTtBQUFmLEdBQW5CLENBQWhEO0FBR0FuRSxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZixRQUFJLENBQUNpRSxPQUFMLEVBQWM7QUFDYkQsTUFBQUEsbUJBQW1CLENBQUNyQixJQUFJLENBQUN5QixjQUFOLENBQW5CO0FBQ0E7QUFDRCxHQUpRLEVBSU4sQ0FBQ3pCLElBQUQsQ0FKTSxDQUFUOztBQU1BLE1BQUlzQixPQUFKLEVBQWE7QUFDWix3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNBOztBQUVELHNCQUVDO0FBQUssYUFBUyxFQUFFckUsb0ZBQWhCO0FBQUEsNEJBQ0M7QUFBSyxlQUFTLEVBQUVBLG9GQUFoQjtBQUFBLDhCQUNDO0FBQUssaUJBQVMsRUFBRUEsMEZBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBSUM7QUFBRyxpQkFBUyxFQUFFQSx5RkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFTQztBQUFJLGVBQVMsRUFBRUEscUZBQWY7QUFBQSxnQkFDRSxDQUFDcUUsT0FBRCxJQUFhRixnQkFBZ0IsQ0FBQ3NCLEdBQWpCLENBQXFCQyxPQUFPLGlCQUN6QztBQUFJLGlCQUFTLEVBQUUxRix1RkFBZjtBQUFBLGdDQUNDO0FBQUssbUJBQVMsRUFBRUEsb0ZBQWhCO0FBQUEsaUNBQ0MsOERBQUMsbURBQUQ7QUFBTyxlQUFHLEVBQUUsc0JBQVo7QUFBbUMsaUJBQUssRUFBRSxFQUExQztBQUE4QyxrQkFBTSxFQUFFLEVBQXREO0FBQTBELGVBQUcsRUFBQztBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUlDO0FBQUssbUJBQVMsRUFBRUEsc0ZBQWhCO0FBQUEsa0NBQ0M7QUFBSyxxQkFBUyxFQUFFQSwyRkFBaEI7QUFBQSxzQkFDRTBGLE9BQU8sQ0FBQ0s7QUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURELGVBSUM7QUFBSyxxQkFBUyxFQUFFL0Ysa0dBQWhCO0FBQUEsc0JBQ0UwRixPQUFPLENBQUNPO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRCxlQU9DO0FBQUsscUJBQVMsRUFBRWpHLCtGQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkQsZUFlRTtBQUFLLG1CQUFTLEVBQUVBLG9GQUFoQjtBQUFBLDBCQUNHMEYsT0FBTyxDQUFDVSxLQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFmRjtBQUFBLFNBQThDVixPQUFPLENBQUN6QyxFQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURhO0FBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURCxlQWtDRTtBQUFLLGVBQVMsRUFBRWpELG9GQUFoQjtBQUFBLDhCQUNDO0FBQUssaUJBQVMsRUFBRUEsb0ZBQWhCO0FBQUEsZ0NBQ0M7QUFBSyxtQkFBUyxFQUFFQSxvRkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFJQztBQUFLLG1CQUFTLEVBQUVBLHFGQUFoQjtBQUFBLDBCQUNHLENBQUNxRSxPQUFELElBQVlGLGdCQUFnQixDQUFDc0MsTUFBakIsQ0FBd0IsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFBRSxtQkFBT0QsR0FBRyxHQUFHQyxHQUFHLENBQUNQLEtBQWpCO0FBQXdCLFdBQWhFLEVBQWtFLENBQWxFLENBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxlQVNDO0FBQUssaUJBQVMsRUFBRXBHLG9GQUFoQjtBQUFBLGdDQUNDO0FBQUssbUJBQVMsRUFBRUEsb0ZBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGVBSUM7QUFBSyxtQkFBUyxFQUFFQSxxRkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRELGVBaUJDO0FBQUssaUJBQVMsRUFBRUEsaUZBQWhCO0FBQUEsZ0NBQ0M7QUFBSyxtQkFBUyxFQUFFQSxpRkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFJQztBQUFLLG1CQUFTLEVBQUVBLGtGQUFoQjtBQUFBLG9CQUNFLENBQUNxRSxPQUFELElBQVlGLGdCQUFnQixDQUFDc0MsTUFBakIsQ0FBd0IsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQWNELEdBQUcsR0FBR0MsR0FBRyxDQUFDUCxLQUFoRCxFQUF1RCxDQUF2RCxJQUEwRDtBQUR4RTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFqQkQsZUF5QkM7QUFBSyxpQkFBUyxFQUFFcEcsaUZBQWhCO0FBQUEsZ0NBQ0M7QUFBSyxtQkFBUyxFQUFFQSxpRkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFJQztBQUFLLG1CQUFTLEVBQUVBLGtGQUFoQjtBQUFBLDBCQUNHLENBQUNxRSxPQUFELElBQVlGLGdCQUFnQixDQUFDc0MsTUFBakIsQ0FBd0IsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQWNELEdBQUcsR0FBR0MsR0FBRyxDQUFDUCxLQUFoRCxFQUF1RCxDQUF2RCxJQUE0RGpDLGdCQUFnQixDQUFDc0MsTUFBakIsQ0FBd0IsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQWNELEdBQUcsR0FBR0MsR0FBRyxDQUFDUCxLQUFoRCxFQUF1RCxDQUF2RCxJQUEwRCxJQURySTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXpCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbENGLGVBb0VFO0FBQVEsZUFBUyxFQUFFcEcsMkZBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRDtBQTJFQSxDQTNGRDs7QUE2RkEsaUVBQWVNLFFBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0R0E7QUFDQTtBQUNBO0FBQ0E7OztBQWtCQSxNQUFNSSxLQUEyQixHQUFHLENBQUM7QUFBQ08sRUFBQUE7QUFBRCxDQUFELEtBQWE7QUFHaEQsUUFBTTtBQUFBLE9BQUNzRyxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DbkgsK0NBQVEsRUFBbEQ7QUFDQW1CLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUixLQUFaO0FBQ0EsUUFBTTtBQUFDOEIsSUFBQUEsSUFBRDtBQUFPc0IsSUFBQUEsT0FBUDtBQUFnQmYsSUFBQUEsS0FBaEI7QUFBdUJnQixJQUFBQTtBQUF2QixNQUFrQ04sd0RBQVEsQ0FBQ3NELHlEQUFELEVBQWtCO0FBQ2pFMUUsSUFBQUEsU0FBUyxFQUFFO0FBQ1YzQixNQUFBQTtBQURVLEtBRHNEO0FBSWpFc0QsSUFBQUEsWUFBWSxFQUFFO0FBSm1ELEdBQWxCLENBQWhEO0FBT0FuRSxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZixRQUFJLENBQUNpRSxPQUFMLEVBQWM7QUFDYm1ELE1BQUFBLGdCQUFnQixDQUFDekUsSUFBSSxDQUFDMEUsWUFBTixDQUFoQjtBQUNBO0FBQ0QsR0FKUSxFQUlOLENBQUMxRSxJQUFELENBSk0sQ0FBVDs7QUFNQSxNQUFJc0IsT0FBSixFQUFhO0FBQ1osd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDQTs7QUFFRCxzQkFFQztBQUFLLGFBQVMsRUFBRXJFLHdFQUFoQjtBQUFBLGNBQ0V1SCxhQUFhLGlCQUNkO0FBQUEsOEJBQ0E7QUFBSyxpQkFBUyxFQUFFdkgsK0VBQWhCO0FBQUEsbUJBQ0V1SCxhQUFhLENBQUN2RixTQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREEsZUFJQTtBQUFLLGlCQUFTLEVBQUVoQyxnRkFBaEI7QUFBQSx3Q0FDbUJ1SCxhQUFhLENBQUN0RSxFQURqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkEsZUFPQTtBQUFLLGlCQUFTLEVBQUVqRCw4RUFBaEI7QUFBQSx1RkFDb0Q7QUFBRyxjQUFJLEVBQUMsRUFBUjtBQUFBLG9CQUFZdUgsYUFBYSxDQUFDcEY7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBBLGVBVUE7QUFBSyxpQkFBUyxFQUFFbkMsbUZBQWhCO0FBQUEsOERBQzJCO0FBQUcsbUJBQVMsRUFBRUEsdUVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWQSxlQWFBO0FBQUcsaUJBQVMsRUFBRUEsc0ZBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZEO0FBdUJBLENBN0NEOztBQStDQSxpRUFBZVUsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7QUFFQTtBQUNBO0FBRUE7Ozs7QUFFQSxNQUFNSCxJQUFjLEdBQUcsTUFBTTtBQUk1QixRQUFNO0FBQUEsT0FBQytILFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDbEksK0NBQVEsQ0FBUyxDQUFULENBQTlDO0FBQ0EsUUFBTTtBQUFBLE9BQUNtSSxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQnBJLCtDQUFRLENBQVMsRUFBVCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDcUksUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJ0SSwrQ0FBUSxDQUFVLEtBQVYsQ0FBeEM7QUFHQSxRQUFNMkIsU0FBUyxHQUFHa0cseURBQVEsQ0FBQyxFQUFELEVBQUs7QUFBQ1UsSUFBQUEsT0FBTyxFQUFFLElBQVY7QUFBZ0JDLElBQUFBLFNBQVMsRUFBRTtBQUEzQixHQUFMLENBQTFCO0FBQ0EsUUFBTXhHLE1BQU0sR0FBRzZGLHlEQUFRLENBQUMsRUFBRCxFQUFLO0FBQUNVLElBQUFBLE9BQU8sRUFBRTtBQUFWLEdBQUwsQ0FBdkI7QUFDQSxRQUFNeEcsS0FBSyxHQUFHOEYseURBQVEsQ0FBQyxFQUFELEVBQUs7QUFBQ1UsSUFBQUEsT0FBTyxFQUFFO0FBQVYsR0FBTCxDQUF0QjtBQUNBLFFBQU10RyxHQUFHLEdBQUc0Rix5REFBUSxDQUFDLEVBQUQsRUFBSyxFQUFMLENBQXBCO0FBQ0EsUUFBTTNGLElBQUksR0FBRzJGLHlEQUFRLENBQUMsRUFBRCxFQUFLO0FBQUNVLElBQUFBLE9BQU8sRUFBRTtBQUFWLEdBQUwsQ0FBckI7QUFDQSxRQUFNRSxPQUFPLEdBQUdaLHlEQUFRLENBQUMsU0FBRCxFQUFZO0FBQUNVLElBQUFBLE9BQU8sRUFBRTtBQUFWLEdBQVosQ0FBeEI7QUFDQSxRQUFNcEcsR0FBRyxHQUFHMEYseURBQVEsQ0FBQyxFQUFELEVBQUs7QUFBQ1UsSUFBQUEsT0FBTyxFQUFFO0FBQVYsR0FBTCxDQUFwQjtBQUNDLFFBQU1HLENBQUMsR0FBR2IseURBQVEsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUFsQjtBQUNELFFBQU16RixXQUFXLEdBQUd5Rix5REFBUSxDQUFDLEVBQUQsRUFBSztBQUFDVSxJQUFBQSxPQUFPLEVBQUU7QUFBVixHQUFMLENBQTVCO0FBQ0EsUUFBTWxHLFdBQVcsR0FBR3dGLHlEQUFRLENBQUMsRUFBRCxFQUFLO0FBQUNVLElBQUFBLE9BQU8sRUFBRTtBQUFWLEdBQUwsQ0FBNUI7QUFDQSxRQUFNakcsYUFBYSxHQUFHdUYseURBQVEsQ0FBQyxFQUFELEVBQUs7QUFBQ1UsSUFBQUEsT0FBTyxFQUFFO0FBQVYsR0FBTCxDQUE5QjtBQUNBLFFBQU16RyxLQUFLLEdBQUcrRix5REFBUSxDQUFDLEVBQUQsRUFBSztBQUFDYyxJQUFBQSxPQUFPLEVBQUU7QUFBVixHQUFMLENBQXRCO0FBQ0EsTUFBSUMsV0FBVyxHQUFHakIscUVBQWMsRUFBaEM7O0FBRUEsV0FBU2tCLFlBQVQsR0FBdUI7QUFDdEJQLElBQUFBLFdBQVcsQ0FBQyxJQUFELENBQVg7QUFDQSxHQXpCMkIsQ0EyQjVCO0FBQ0E7QUFDQTs7O0FBRUF2SSxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZnFJLElBQUFBLFdBQVcsQ0FBQ1IsbUZBQXFCLENBQUN4RixXQUFXLENBQUNQLEtBQWIsQ0FBdEIsQ0FBWDtBQUNBLEdBRlEsRUFFTixDQUFDTyxXQUFXLENBQUNQLEtBQWIsQ0FGTSxDQUFUO0FBS0Esc0JBRUM7QUFBQSw0QkFDQztBQUFLLGVBQVMsRUFBQyx3QkFBZjtBQUFBLDhCQUNDO0FBQUssaUJBQVMsRUFBRW9HLFdBQVcsS0FBSyxDQUFoQixHQUFvQixrQkFBcEIsR0FBeUMsTUFBekQ7QUFBaUUsVUFBRSxFQUFDLE1BQXBFO0FBQTJFLGVBQU8sRUFBRSxNQUFNQyxjQUFjLENBQUMsQ0FBRCxDQUF4RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxlQUVDO0FBQUssaUJBQVMsRUFBRUQsV0FBVyxLQUFLLENBQWhCLEdBQW9CLGtCQUFwQixHQUF5QyxNQUF6RDtBQUFpRSxlQUFPLEVBQUUsTUFBTUMsY0FBYyxDQUFDLENBQUQsQ0FBOUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkQsZUFHQztBQUFLLGlCQUFTLEVBQUVELFdBQVcsS0FBSyxDQUFoQixHQUFvQixrQkFBcEIsR0FBeUMsTUFBekQ7QUFBaUUsZUFBTyxFQUFFLE1BQU1DLGNBQWMsQ0FBQyxDQUFELENBQTlGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQU9LO0FBQUssZUFBUyxFQUFDLGlDQUFmO0FBQUEsOEJBQ0M7QUFBSyxpQkFBUyxFQUFFRCxXQUFXLEtBQUssQ0FBaEIsR0FBb0Isd0JBQXBCLEdBQStDLFNBQS9EO0FBQUEsZ0NBQ0M7QUFBSyxtQkFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGVBS0M7QUFBSyxtQkFBUyxFQUFDLG9CQUFmO0FBQUEsaUNBQ0M7QUFBSyxxQkFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMRCxlQVVDO0FBQUssbUJBQVMsRUFBQyxpQkFBZjtBQUFBLHFCQUVFLENBQUVTLENBQUMsQ0FBQ0ksTUFBRixJQUFZbkgsU0FBUyxDQUFDNEcsT0FBdkIsSUFBb0NHLENBQUMsQ0FBQ0ksTUFBRixJQUFZbkgsU0FBUyxDQUFDb0gsZ0JBQTNELGtCQUFrRjtBQUFLLHFCQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGcEYsZUFHQztBQUFPLGdCQUFJLEVBQUMsTUFBWjtBQUFtQixxQkFBUyxFQUFJTCxDQUFDLENBQUNJLE1BQUYsSUFBWW5ILFNBQVMsQ0FBQzRHLE9BQXZCLElBQW9DRyxDQUFDLENBQUNJLE1BQUYsSUFBWW5ILFNBQVMsQ0FBQ29ILGdCQUEzRCxHQUFnRixrQ0FBaEYsR0FBcUgsMEJBQW5KO0FBQStLLGdCQUFJLEVBQUMsTUFBcEw7QUFBMkwsdUJBQVcsRUFBQyxXQUF2TTtBQUFtTixpQkFBSyxFQUFFcEgsU0FBUyxDQUFDRSxLQUFwTztBQUEyTyxvQkFBUSxFQUFHUCxDQUFELElBQU9LLFNBQVMsQ0FBQ3FILFFBQVYsQ0FBbUIxSCxDQUFuQixDQUE1UDtBQUFtUixrQkFBTSxFQUFHQSxDQUFELElBQU9LLFNBQVMsQ0FBQ3NILE1BQVYsQ0FBaUIzSCxDQUFqQjtBQUFsUztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhELGVBTUM7QUFBSyxxQkFBUyxFQUFDLG1DQUFmO0FBQUEsdUJBQ0lvSCxDQUFDLENBQUNJLE1BQUYsSUFBWS9HLEtBQUssQ0FBQ3dHLE9BQXBCLGlCQUFrQztBQUFLLHVCQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEcEMsZUFFRSw4REFBQyx5REFBRDtBQUFXLGtCQUFJLEVBQUMsT0FBaEI7QUFBd0Isa0JBQUksRUFBQyxxQkFBN0I7QUFBa0Qsa0JBQUksRUFBQyxLQUF2RDtBQUE2RCx1QkFBUyxFQUFJRyxDQUFDLENBQUNJLE1BQUYsSUFBWS9HLEtBQUssQ0FBQ3dHLE9BQXBCLEdBQWdDLGlDQUFoQyxHQUFvRSx5QkFBNUk7QUFBdUssZ0JBQUUsRUFBQyxhQUExSztBQUF3TCx5QkFBVyxFQUFDLGdCQUFwTTtBQUFxTixtQkFBSyxFQUFFeEcsS0FBSyxDQUFDRixLQUFsTztBQUF5TyxzQkFBUSxFQUFHUCxDQUFELElBQU9TLEtBQUssQ0FBQ2lILFFBQU4sQ0FBZTFILENBQWYsQ0FBMVA7QUFBNlEsb0JBQU0sRUFBR0EsQ0FBRCxJQUFPUyxLQUFLLENBQUNrSCxNQUFOLENBQWEzSCxDQUFiO0FBQTVSO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkYsZUFHQztBQUFPLHFCQUFPLEVBQUUsK0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFORDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVkQsZUF3QkM7QUFBSyxtQkFBUyxFQUFDLGtCQUFmO0FBQUEsaUNBQ0M7QUFBSyxxQkFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF4QkQsZUE2QkM7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEscUJBRUlvSCxDQUFDLENBQUNJLE1BQUYsSUFBWTlHLE1BQU0sQ0FBQ3VHLE9BQXJCLGlCQUFtQztBQUFLLHFCQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGckMsZUFHQztBQUFPLGdCQUFJLEVBQUMsTUFBWjtBQUFtQixxQkFBUyxFQUFJRyxDQUFDLENBQUNJLE1BQUYsSUFBWTlHLE1BQU0sQ0FBQ3VHLE9BQXJCLEdBQWlDLGdDQUFqQyxHQUFvRSx3QkFBbEc7QUFBNEgsZ0JBQUksRUFBQyxRQUFqSTtBQUEwSSx1QkFBVyxFQUFDLGdCQUF0SjtBQUF1SyxpQkFBSyxFQUFFdkcsTUFBTSxDQUFDSCxLQUFyTDtBQUE0TCxvQkFBUSxFQUFHUCxDQUFELElBQU9VLE1BQU0sQ0FBQ2dILFFBQVAsQ0FBZ0IxSCxDQUFoQixDQUE3TTtBQUFpTyxrQkFBTSxFQUFHQSxDQUFELElBQU9VLE1BQU0sQ0FBQ2lILE1BQVAsQ0FBYzNILENBQWQ7QUFBaFA7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFIRCxlQUtDO0FBQU8sZ0JBQUksRUFBQyxNQUFaO0FBQW1CLHFCQUFTLEVBQUMscUJBQTdCO0FBQW1ELGdCQUFJLEVBQUMsS0FBeEQ7QUFBOEQsdUJBQVcsRUFBQyx5Q0FBMUU7QUFBb0gsaUJBQUssRUFBRVcsR0FBRyxDQUFDSixLQUEvSDtBQUFzSSxvQkFBUSxFQUFHUCxDQUFELElBQU9XLEdBQUcsQ0FBQytHLFFBQUosQ0FBYTFILENBQWIsQ0FBdko7QUFBd0ssa0JBQU0sRUFBR0EsQ0FBRCxJQUFPVyxHQUFHLENBQUNnSCxNQUFKLENBQVczSCxDQUFYO0FBQXZMO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEQsZUFPQTtBQUFLLHFCQUFTLEVBQUMsc0JBQWY7QUFBQSxvQ0FFQztBQUFPLGtCQUFJLEVBQUMsTUFBWjtBQUFtQixrQkFBSSxFQUFDLE1BQXhCO0FBQStCLHVCQUFTLEVBQUlvSCxDQUFDLENBQUNJLE1BQUYsSUFBWTVHLElBQUksQ0FBQ3FHLE9BQW5CLEdBQStCLDhCQUEvQixHQUFnRSxzQkFBMUc7QUFBa0kseUJBQVcsRUFBQyxNQUE5STtBQUFxSixtQkFBSyxFQUFFSyxXQUFXLElBQUlNLFNBQWYsR0FBMkJoSCxJQUFJLENBQUNMLEtBQWhDLEdBQXdDK0csV0FBVyxDQUFDMUcsSUFBaE47QUFBc04sc0JBQVEsRUFBR1osQ0FBRCxJQUFPWSxJQUFJLENBQUM4RyxRQUFMLENBQWMxSCxDQUFkLENBQXZPO0FBQXlQLG9CQUFNLEVBQUdBLENBQUQsSUFBT1ksSUFBSSxDQUFDK0csTUFBTCxDQUFZM0gsQ0FBWjtBQUF4UTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZELEVBR0csQ0FBQ3NILFdBQUQsZ0JBQWUsOERBQUMsMkVBQUQ7QUFBaUIscUJBQU8sRUFBRUMsWUFBMUI7QUFBd0Msa0JBQUksRUFBRWQsMkVBQTlDO0FBQTRELG1CQUFLLEVBQUU7QUFBQ29CLGdCQUFBQSxRQUFRLEVBQUUsVUFBWDtBQUF1QkMsZ0JBQUFBLEdBQUcsRUFBRSxLQUE1QjtBQUFtQ0MsZ0JBQUFBLEtBQUssRUFBRSxNQUExQztBQUFrREMsZ0JBQUFBLFFBQVEsRUFBRSxNQUE1RDtBQUFvRUMsZ0JBQUFBLE1BQU0sRUFBRTtBQUE1RTtBQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFmLGdCQUE4Syw4REFBQywyRUFBRDtBQUFpQixrQkFBSSxFQUFFeEIsMkVBQXZCO0FBQXFDLG1CQUFLLEVBQUU7QUFBQ29CLGdCQUFBQSxRQUFRLEVBQUUsVUFBWDtBQUF1QkMsZ0JBQUFBLEdBQUcsRUFBRSxLQUE1QjtBQUFtQ0MsZ0JBQUFBLEtBQUssRUFBRSxNQUExQztBQUFrREcsZ0JBQUFBLEtBQUssRUFBRSxLQUF6RDtBQUFnRUYsZ0JBQUFBLFFBQVEsRUFBRSxNQUExRTtBQUFrRkMsZ0JBQUFBLE1BQU0sRUFBRTtBQUExRjtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhqTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUEEsZUFhQztBQUFLLHFCQUFTLEVBQUMsc0JBQWY7QUFBQSxvQ0FDQTtBQUFLLHVCQUFTLEVBQUMsNEJBQWY7QUFBQSxxQ0FDQztBQUFLLHlCQUFTLEVBQUMsOEJBQWY7QUFBOEMsa0JBQUUsRUFBQyxRQUFqRDtBQUFBLHdDQUdBO0FBQU8sc0JBQUksRUFBQyxNQUFaO0FBQW1CLDJCQUFTLEVBQUMsUUFBN0I7QUFBc0MsNkJBQVcsRUFBQyxTQUFsRDtBQUE0RCx1QkFBSyxFQUFFWCxXQUFXLElBQUlNLFNBQWYsR0FBMkIsRUFBM0IsR0FBZ0NOLFdBQVcsQ0FBQ0gsT0FBL0c7QUFBd0gsc0JBQUksRUFBQyxVQUE3SDtBQUF3SSwwQkFBUSxFQUFHbkgsQ0FBRCxJQUFPbUgsT0FBTyxDQUFDTyxRQUFSLENBQWlCMUgsQ0FBakIsQ0FBeko7QUFBOEssd0JBQU0sRUFBR0EsQ0FBRCxJQUFPbUgsT0FBTyxDQUFDUSxNQUFSLENBQWUzSCxDQUFmO0FBQTdMO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBSEEsZUFJQztBQUFVLG9CQUFFLEVBQUMsVUFBYjtBQUFBLDBDQUNDO0FBQVEseUJBQUssRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREQsZUFFQztBQUFRLHlCQUFLLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURBLGVBYUM7QUFBTyxrQkFBSSxFQUFDLE1BQVo7QUFBbUIsdUJBQVMsRUFBSW9ILENBQUMsQ0FBQ0ksTUFBRixJQUFZM0csR0FBRyxDQUFDb0csT0FBbEIsR0FBOEIsa0NBQTlCLEdBQW1FLDBCQUFqRztBQUE2SCxrQkFBSSxFQUFDLEtBQWxJO0FBQXdJLHlCQUFXLEVBQUMsS0FBcEo7QUFBMEosbUJBQUssRUFBRUssV0FBVyxJQUFJTSxTQUFmLEdBQTJCL0csR0FBRyxDQUFDTixLQUEvQixHQUF3QytHLFdBQVcsQ0FBQ3pHLEdBQXJOO0FBQTBOLHNCQUFRLEVBQUdiLENBQUQsSUFBT2EsR0FBRyxDQUFDNkcsUUFBSixDQUFhMUgsQ0FBYixDQUEzTztBQUE0UCxvQkFBTSxFQUFHQSxDQUFELElBQU9hLEdBQUcsQ0FBQzhHLE1BQUosQ0FBVzNILENBQVg7QUFBM1E7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFiRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBYkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTdCRCxFQTBER0ssU0FBUyxDQUFDOEgsVUFBVixJQUF3QjFILEtBQUssQ0FBQzBILFVBQTlCLElBQTRDekgsTUFBTSxDQUFDeUgsVUFBbkQsSUFBaUV2SCxJQUFJLENBQUN1SCxVQUF0RSxJQUFvRmhCLE9BQU8sQ0FBQ2dCLFVBQTVGLElBQTBHdEgsR0FBRyxDQUFDc0gsVUFBL0csaUJBQ0E7QUFBRyxpQkFBTyxFQUFFLE1BQU12QixjQUFjLENBQUMsQ0FBRCxDQUFoQztBQUFxQyxtQkFBUyxFQUFDLGlCQUEvQztBQUFpRSxlQUFLLEVBQUU7QUFBQ3FCLFlBQUFBLE1BQU0sRUFBRTtBQUFULFdBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTNERixFQTZERSxFQUFFNUgsU0FBUyxDQUFDOEgsVUFBVixJQUF3QjFILEtBQUssQ0FBQzBILFVBQTlCLElBQTRDekgsTUFBTSxDQUFDeUgsVUFBbkQsSUFBaUV2SCxJQUFJLENBQUN1SCxVQUF0RSxJQUFvRmhCLE9BQU8sQ0FBQ2dCLFVBQTVGLElBQTBHdEgsR0FBRyxDQUFDc0gsVUFBaEgsa0JBQ0E7QUFBRyxtQkFBUyxFQUFDLGlCQUFiO0FBQStCLGVBQUssRUFBRTtBQUFDRixZQUFBQSxNQUFNLEVBQUU7QUFBVCxXQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkE5REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBbUVDO0FBQUssaUJBQVMsRUFBRXRCLFdBQVcsS0FBSyxDQUFoQixHQUFvQix3QkFBcEIsR0FBK0MsU0FBL0Q7QUFBQSxnQ0FDQztBQUFLLG1CQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFJQztBQUFHLGlCQUFPLEVBQUUsTUFBTUMsY0FBYyxDQUFDLENBQUQsQ0FBaEM7QUFBcUMsbUJBQVMsRUFBQyx5QkFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkQsZUFPQztBQUFLLG1CQUFTLEVBQUMsb0JBQWY7QUFBQSxpQ0FDQztBQUFLLHFCQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBELGVBYUM7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEscUJBRUMsQ0FBRVEsQ0FBQyxDQUFDSSxNQUFGLElBQVluSCxTQUFTLENBQUM0RyxPQUF2QixJQUFvQ0csQ0FBQyxDQUFDSSxNQUFGLElBQVluSCxTQUFTLENBQUNvSCxnQkFBM0Qsa0JBQWtGO0FBQUsscUJBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZuRixlQUdDO0FBQU8sZ0JBQUksRUFBQyxNQUFaO0FBQW1CLHFCQUFTLEVBQUlMLENBQUMsQ0FBQ0ksTUFBRixJQUFZbkgsU0FBUyxDQUFDNEcsT0FBdkIsSUFBb0NHLENBQUMsQ0FBQ0ksTUFBRixJQUFZbkgsU0FBUyxDQUFDb0gsZ0JBQTNELEdBQWdGLGtDQUFoRixHQUFxSCwwQkFBbko7QUFBK0ssZ0JBQUksRUFBQyxNQUFwTDtBQUEyTCx1QkFBVyxFQUFDLFdBQXZNO0FBQW1OLGlCQUFLLEVBQUVwSCxTQUFTLENBQUNFLEtBQXBPO0FBQTJPLG9CQUFRLEVBQUdQLENBQUQsSUFBT0ssU0FBUyxDQUFDcUgsUUFBVixDQUFtQjFILENBQW5CLENBQTVQO0FBQW1SLGtCQUFNLEVBQUdBLENBQUQsSUFBT0ssU0FBUyxDQUFDc0gsTUFBVixDQUFpQjNILENBQWpCO0FBQWxTO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEQsRUFLRW9ILENBQUMsQ0FBQ0ksTUFBRixJQUFZaEgsS0FBSyxDQUFDNEgsWUFBbkIsaUJBQXFDO0FBQUsscUJBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUx0QyxlQU1DO0FBQU8sZ0JBQUksRUFBQyxNQUFaO0FBQW1CLHFCQUFTLEVBQUloQixDQUFDLENBQUNJLE1BQUYsSUFBWWhILEtBQUssQ0FBQzRILFlBQXBCLEdBQXFDLCtCQUFyQyxHQUF1RSx1QkFBckc7QUFBOEgsZ0JBQUksRUFBQyxPQUFuSTtBQUEySSx1QkFBVyxFQUFDLGVBQXZKO0FBQXVLLGlCQUFLLEVBQUU1SCxLQUFLLENBQUNELEtBQXBMO0FBQTJMLG9CQUFRLEVBQUdQLENBQUQsSUFBT1EsS0FBSyxDQUFDa0gsUUFBTixDQUFlMUgsQ0FBZixDQUE1TTtBQUErTixrQkFBTSxFQUFHQSxDQUFELElBQU9RLEtBQUssQ0FBQ21ILE1BQU4sQ0FBYTNILENBQWIsQ0FBOU87QUFBK1AsZ0JBQUksRUFBQztBQUFwUTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFiRCxlQXdCQztBQUFLLG1CQUFTLEVBQUMsa0JBQWY7QUFBQSxpQ0FDQztBQUFLLHFCQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXhCRCxlQTZCQztBQUFLLG1CQUFTLEVBQUMsaUJBQWY7QUFBQSxxQkFDR29ILENBQUMsQ0FBQ0ksTUFBRixJQUFZOUcsTUFBTSxDQUFDdUcsT0FBckIsaUJBQW1DO0FBQUsscUJBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURwQyxlQUVDO0FBQU8sZ0JBQUksRUFBQyxNQUFaO0FBQW1CLHFCQUFTLEVBQUlHLENBQUMsQ0FBQ0ksTUFBRixJQUFZOUcsTUFBTSxDQUFDdUcsT0FBckIsR0FBaUMsZ0NBQWpDLEdBQW9FLHdCQUFsRztBQUE0SCxnQkFBSSxFQUFDLFFBQWpJO0FBQTBJLHVCQUFXLEVBQUMsZ0JBQXRKO0FBQXVLLGlCQUFLLEVBQUV2RyxNQUFNLENBQUNILEtBQXJMO0FBQTRMLG9CQUFRLEVBQUdQLENBQUQsSUFBT1UsTUFBTSxDQUFDZ0gsUUFBUCxDQUFnQjFILENBQWhCLENBQTdNO0FBQWlPLGtCQUFNLEVBQUdBLENBQUQsSUFBT1UsTUFBTSxDQUFDaUgsTUFBUCxDQUFjM0gsQ0FBZDtBQUFoUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZELGVBSUU7QUFBTyxnQkFBSSxFQUFDLE1BQVo7QUFBbUIscUJBQVMsRUFBQyxxQkFBN0I7QUFBbUQsdUJBQVcsRUFBQyx5Q0FBL0Q7QUFBeUcsZ0JBQUksRUFBQyxLQUE5RztBQUFvSCxpQkFBSyxFQUFFVyxHQUFHLENBQUNKLEtBQS9IO0FBQXNJLG9CQUFRLEVBQUdQLENBQUQsSUFBT1csR0FBRyxDQUFDK0csUUFBSixDQUFhMUgsQ0FBYixDQUF2SjtBQUF3SyxrQkFBTSxFQUFHQSxDQUFELElBQU9XLEdBQUcsQ0FBQ2dILE1BQUosQ0FBVzNILENBQVg7QUFBdkw7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRixlQU1DO0FBQUsscUJBQVMsRUFBQyxzQkFBZjtBQUFBLG9DQUNBO0FBQU8sa0JBQUksRUFBQyxNQUFaO0FBQW1CLGtCQUFJLEVBQUMsTUFBeEI7QUFBK0IsdUJBQVMsRUFBSW9ILENBQUMsQ0FBQ0ksTUFBRixJQUFZNUcsSUFBSSxDQUFDcUcsT0FBbkIsR0FBK0IsOEJBQS9CLEdBQWdFLHNCQUExRztBQUFrSSx5QkFBVyxFQUFDLE1BQTlJO0FBQXFKLG1CQUFLLEVBQUVLLFdBQVcsSUFBSU0sU0FBZixHQUEyQmhILElBQUksQ0FBQ0wsS0FBaEMsR0FBd0MrRyxXQUFXLENBQUMxRyxJQUFoTjtBQUFzTixzQkFBUSxFQUFHWixDQUFELElBQU9ZLElBQUksQ0FBQzhHLFFBQUwsQ0FBYzFILENBQWQsQ0FBdk87QUFBeVAsb0JBQU0sRUFBR0EsQ0FBRCxJQUFPWSxJQUFJLENBQUMrRyxNQUFMLENBQVkzSCxDQUFaO0FBQXhRO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREEsZUFFQyw4REFBQywyRUFBRDtBQUFpQixrQkFBSSxFQUFFeUcsMkVBQXZCO0FBQXFDLG1CQUFLLEVBQUU7QUFBQ29CLGdCQUFBQSxRQUFRLEVBQUUsVUFBWDtBQUF1QkMsZ0JBQUFBLEdBQUcsRUFBRSxLQUE1QjtBQUFtQ0MsZ0JBQUFBLEtBQUssRUFBRSxNQUExQztBQUFrREMsZ0JBQUFBLFFBQVEsRUFBRSxNQUE1RDtBQUFvRUMsZ0JBQUFBLE1BQU0sRUFBRTtBQUE1RTtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFORCxlQVVDO0FBQUsscUJBQVMsRUFBQyxzQkFBZjtBQUFBLG9DQUNBO0FBQUssdUJBQVMsRUFBQyw0QkFBZjtBQUFBLHFDQUNDO0FBQUsseUJBQVMsRUFBQyw4QkFBZjtBQUE4QyxrQkFBRSxFQUFDLFFBQWpEO0FBQUEsd0NBR0E7QUFBTyxzQkFBSSxFQUFDLE1BQVo7QUFBbUIsMkJBQVMsRUFBQyxRQUE3QjtBQUFzQyw2QkFBVyxFQUFDLFNBQWxEO0FBQTRELHVCQUFLLEVBQUVYLFdBQVcsSUFBSU0sU0FBZixHQUEyQixFQUEzQixHQUFnQ04sV0FBVyxDQUFDSCxPQUEvRztBQUF3SCxzQkFBSSxFQUFDLFVBQTdIO0FBQXdJLHdCQUFNLEVBQUduSCxDQUFELElBQU9tSCxPQUFPLENBQUNRLE1BQVIsQ0FBZTNILENBQWY7QUFBdko7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFIQSxlQUlDO0FBQVUsb0JBQUUsRUFBQyxVQUFiO0FBQUEsMENBQ0M7QUFBUSx5QkFBSyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFERCxlQUVDO0FBQVEseUJBQUssRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREEsZUFhQztBQUFPLGtCQUFJLEVBQUMsTUFBWjtBQUFtQix1QkFBUyxFQUFJb0gsQ0FBQyxDQUFDSSxNQUFGLElBQVkzRyxHQUFHLENBQUNvRyxPQUFsQixHQUE4QixrQ0FBOUIsR0FBbUUsMEJBQWpHO0FBQTZILGtCQUFJLEVBQUMsS0FBbEk7QUFBd0kseUJBQVcsRUFBQyxLQUFwSjtBQUEwSixtQkFBSyxFQUFFSyxXQUFXLElBQUlNLFNBQWYsR0FBMkIvRyxHQUFHLENBQUNOLEtBQS9CLEdBQXdDK0csV0FBVyxDQUFDekcsR0FBck47QUFBME4sc0JBQVEsRUFBR2IsQ0FBRCxJQUFPYSxHQUFHLENBQUM2RyxRQUFKLENBQWExSCxDQUFiLENBQTNPO0FBQTRQLG9CQUFNLEVBQUdBLENBQUQsSUFBT2EsR0FBRyxDQUFDOEcsTUFBSixDQUFXM0gsQ0FBWDtBQUEzUTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFWRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBN0JELEVBdURHSyxTQUFTLENBQUM4SCxVQUFWLElBQXlCekgsTUFBTSxDQUFDeUgsVUFBaEMsSUFBOEN2SCxJQUFJLENBQUN1SCxVQUFuRCxJQUFpRWhCLE9BQU8sQ0FBQ2dCLFVBQXpFLElBQXVGdEgsR0FBRyxDQUFDc0gsVUFBNUYsaUJBQ0E7QUFBRyxpQkFBTyxFQUFFLE1BQU12QixjQUFjLENBQUMsQ0FBRCxDQUFoQztBQUFxQyxtQkFBUyxFQUFDLGlCQUEvQztBQUFpRSxlQUFLLEVBQUU7QUFBQ3FCLFlBQUFBLE1BQU0sRUFBRTtBQUFULFdBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXhERixFQTBERSxFQUFFNUgsU0FBUyxDQUFDOEgsVUFBVixJQUF5QnpILE1BQU0sQ0FBQ3lILFVBQWhDLElBQThDdkgsSUFBSSxDQUFDdUgsVUFBbkQsSUFBaUVoQixPQUFPLENBQUNnQixVQUF6RSxJQUF1RnRILEdBQUcsQ0FBQ3NILFVBQTdGLGtCQUNBO0FBQUcsbUJBQVMsRUFBQyxpQkFBYjtBQUErQixlQUFLLEVBQUU7QUFBQ0YsWUFBQUEsTUFBTSxFQUFFO0FBQVQsV0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBM0RGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFuRUQsZUFrSUM7QUFBSyxpQkFBUyxFQUFFdEIsV0FBVyxLQUFLLENBQWhCLEdBQW9CLHdCQUFwQixHQUErQyxTQUEvRDtBQUFBLGdDQUNDO0FBQUssbUJBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUlDO0FBQUssbUJBQVMsRUFBQyxjQUFmO0FBQUEsa0NBQ0M7QUFBSyxxQkFBUyxFQUFDLG1CQUFmO0FBQUEsbUNBQ0M7QUFBSyxpQkFBRyxFQUFDLGdCQUFUO0FBQTBCLGlCQUFHLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREQsZUFJQztBQUFLLHFCQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpELGVBVUM7QUFBSyxtQkFBUyxFQUFDLG9CQUFmO0FBQUEsaUNBQ0M7QUFBSyxxQkFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWRCxlQWVDO0FBQUssbUJBQVMsRUFBQyxpQkFBZjtBQUFBLHFCQUNDLENBQUVTLENBQUMsQ0FBQ0ksTUFBRixJQUFZbkgsU0FBUyxDQUFDNEcsT0FBdkIsSUFBb0NHLENBQUMsQ0FBQ0ksTUFBRixJQUFZbkgsU0FBUyxDQUFDb0gsZ0JBQTNELGtCQUFrRjtBQUFLLHFCQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEbkYsZUFFQztBQUFPLGdCQUFJLEVBQUMsTUFBWjtBQUFtQixxQkFBUyxFQUFJTCxDQUFDLENBQUNJLE1BQUYsSUFBWW5ILFNBQVMsQ0FBQzRHLE9BQXZCLElBQW9DRyxDQUFDLENBQUNJLE1BQUYsSUFBWW5ILFNBQVMsQ0FBQ29ILGdCQUEzRCxHQUFnRixrQ0FBaEYsR0FBcUgsMEJBQW5KO0FBQStLLGdCQUFJLEVBQUMsTUFBcEw7QUFBMkwsdUJBQVcsRUFBQyxpQ0FBdk07QUFBeU8saUJBQUssRUFBRXBILFNBQVMsQ0FBQ0UsS0FBMVA7QUFBaVEsb0JBQVEsRUFBR1AsQ0FBRCxJQUFPSyxTQUFTLENBQUNxSCxRQUFWLENBQW1CMUgsQ0FBbkIsQ0FBbFI7QUFBeVMsa0JBQU0sRUFBR0EsQ0FBRCxJQUFPSyxTQUFTLENBQUNzSCxNQUFWLENBQWlCM0gsQ0FBakI7QUFBeFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBZkQsZUFvQkM7QUFBSyxtQkFBUyxFQUFDLGtCQUFmO0FBQUEsaUNBQ0M7QUFBSyxxQkFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFwQkQsZUF5QkM7QUFBSyxtQkFBUyxFQUFDLDRCQUFmO0FBQUEsa0NBQ0MsOERBQUMseURBQUQ7QUFBVyxnQkFBSSxFQUFDLHFCQUFoQjtBQUFzQyxnQkFBSSxFQUFDLGFBQTNDO0FBQXlELGdCQUFJLEVBQUMsTUFBOUQ7QUFBcUUscUJBQVMsRUFBQyxzQkFBL0U7QUFBc0csdUJBQVcsRUFBQywwQkFBbEg7QUFBNkksaUJBQUssRUFBRWMsV0FBVyxDQUFDUCxLQUFoSztBQUF1SyxvQkFBUSxFQUFHUCxDQUFELElBQU9jLFdBQVcsQ0FBQzRHLFFBQVosQ0FBcUIxSCxDQUFyQixDQUF4TDtBQUFpTixrQkFBTSxFQUFHQSxDQUFELElBQU9jLFdBQVcsQ0FBQzZHLE1BQVosQ0FBbUIzSCxDQUFuQjtBQUFoTztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURELGVBRUM7QUFBSyxlQUFHLEVBQUU2RyxRQUFWO0FBQW9CLGVBQUcsRUFBQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF6QkQsZUE4QkM7QUFBSyxtQkFBUyxFQUFDLHNCQUFmO0FBQUEsa0NBQ0M7QUFBSyxxQkFBUyxFQUFDLDhCQUFmO0FBQUEsb0NBQ0M7QUFBSyx1QkFBUyxFQUFDLGtDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURELGVBRUMsOERBQUMseURBQUQ7QUFBVyxrQkFBSSxFQUFDLFNBQWhCO0FBQTBCLHlCQUFXLEVBQUMsU0FBdEM7QUFBZ0Qsa0JBQUksRUFBQyxNQUFyRDtBQUE0RCx1QkFBUyxFQUFDLG1DQUF0RTtBQUEwRyxrQkFBSSxFQUFDLGFBQS9HO0FBQTZILG1CQUFLLEVBQUU5RixXQUFXLENBQUNSLEtBQWhKO0FBQXVKLHNCQUFRLEVBQUdQLENBQUQsSUFBT2UsV0FBVyxDQUFDMkcsUUFBWixDQUFxQjFILENBQXJCLENBQXhLO0FBQWlNLG9CQUFNLEVBQUdBLENBQUQsSUFBT2UsV0FBVyxDQUFDNEcsTUFBWixDQUFtQjNILENBQW5CO0FBQWhOO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURELGVBS0M7QUFBSyxxQkFBUyxFQUFDLGdDQUFmO0FBQUEsb0NBQ0M7QUFBSyx1QkFBUyxFQUFDLG9DQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURELGVBRUMsOERBQUMseURBQUQ7QUFBVyxrQkFBSSxFQUFDLEtBQWhCO0FBQXNCLGtCQUFJLEVBQUMsTUFBM0I7QUFBa0MseUJBQVcsRUFBQyxLQUE5QztBQUFvRCx1QkFBUyxFQUFDLHFDQUE5RDtBQUFvRyxrQkFBSSxFQUFDLGVBQXpHO0FBQXlILG1CQUFLLEVBQUVnQixhQUFhLENBQUNULEtBQTlJO0FBQXFKLHNCQUFRLEVBQUdQLENBQUQsSUFBT2dCLGFBQWEsQ0FBQzBHLFFBQWQsQ0FBdUIxSCxDQUF2QixDQUF0SztBQUFpTSxvQkFBTSxFQUFHQSxDQUFELElBQU9nQixhQUFhLENBQUMyRyxNQUFkLENBQXFCM0gsQ0FBckI7QUFBaE47QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTlCRCxFQXdDR0ssU0FBUyxDQUFDOEgsVUFBVixJQUF3QnpILE1BQU0sQ0FBQ3lILFVBQS9CLElBQTZDdkgsSUFBSSxDQUFDdUgsVUFBbEQsSUFBZ0VoQixPQUFPLENBQUNnQixVQUF4RSxJQUFzRnRILEdBQUcsQ0FBQ3NILFVBQTFGLElBQXdHckgsV0FBVyxDQUFDcUgsVUFBcEgsSUFBa0luSCxhQUFhLENBQUNtSCxVQUFoSixJQUE4SnBILFdBQVcsQ0FBQ29ILFVBQTNLLGlCQUNEO0FBQVEsbUJBQVMsRUFBQyxpQkFBbEI7QUFBb0MsY0FBSSxFQUFDLFFBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXpDRCxFQTZDRSxFQUFFOUgsU0FBUyxDQUFDOEgsVUFBVixJQUF5QnpILE1BQU0sQ0FBQ3lILFVBQWhDLElBQThDdkgsSUFBSSxDQUFDdUgsVUFBbkQsSUFBaUVoQixPQUFPLENBQUNnQixVQUF6RSxJQUF1RnRILEdBQUcsQ0FBQ3NILFVBQTNGLElBQXlHckgsV0FBVyxDQUFDcUgsVUFBckgsSUFBbUluSCxhQUFhLENBQUNtSCxVQUFqSixJQUErSnBILFdBQVcsQ0FBQ29ILFVBQTdLLGtCQUNEO0FBQVEsbUJBQVMsRUFBQywwQkFBbEI7QUFBNkMsa0JBQVEsTUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBOUNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFsSUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZEO0FBbU1BLENBdk9EOztBQXlPQSxpRUFBZXZKLElBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMVBBO0FBR08sTUFBTXlILGNBQWMsR0FBRyxNQUFNO0FBSW5DLFFBQU07QUFBQSxPQUFDekYsSUFBRDtBQUFBLE9BQU95SDtBQUFQLE1BQWtCM0osK0NBQVEsQ0FBUyxFQUFULENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUN5SSxPQUFEO0FBQUEsT0FBVW1CO0FBQVYsTUFBd0I1SiwrQ0FBUSxDQUFTLEVBQVQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ21DLEdBQUQ7QUFBQSxPQUFNMEg7QUFBTixNQUFnQjdKLCtDQUFRLENBQVMsRUFBVCxDQUE5Qjs7QUFFQSxRQUFNOEosZUFBZSxHQUFHLFlBQTBCO0FBQ2pELFVBQU1DLEtBQUssQ0FBQyx3QkFBRCxDQUFMLENBQ0Z0SCxJQURFLENBQ0d1SCxDQUFDLElBQUlBLENBQUMsQ0FBQ0MsSUFBRixFQURSLEVBRUp4SCxJQUZJLENBRUN5SCxHQUFHLElBQUk7QUFDWlAsTUFBQUEsT0FBTyxDQUFDTyxHQUFHLENBQUNoSSxJQUFMLENBQVA7QUFDQTBILE1BQUFBLFVBQVUsQ0FBQ00sR0FBRyxDQUFDQyxZQUFMLENBQVY7QUFDQU4sTUFBQUEsTUFBTSxDQUFDSyxHQUFHLENBQUNFLE1BQUwsQ0FBTjtBQUNBLEtBTkksQ0FBTjtBQU9FLEdBUkg7O0FBVUUsUUFBTUMsYUFBYSxHQUFJcEgsS0FBRCxJQUFzQjtBQUM3QzlCLElBQUFBLE9BQU8sQ0FBQzhCLEtBQVIsQ0FBY0EsS0FBZDtBQUNFLEdBRkQ7O0FBSUZsRCxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZnVLLElBQUFBLFNBQVMsQ0FBQzFCLFdBQVYsQ0FBc0IyQixrQkFBdEIsQ0FBeUNULGVBQXpDLEVBQTBETyxhQUExRDtBQUNBLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFLRSxTQUFPO0FBQ1JuSSxJQUFBQSxJQURRO0FBRVJ1RyxJQUFBQSxPQUZRO0FBR1J0RyxJQUFBQTtBQUhRLEdBQVA7QUFPRixDQWxDTTs7Ozs7Ozs7Ozs7Ozs7O0FDSEEsU0FBU3lGLHFCQUFULENBQStCL0YsS0FBL0IsRUFDUDtBQUNJO0FBQ0EsTUFBSTJJLEtBQUssR0FBRyxJQUFJQyxNQUFKLENBQVcsSUFBWCxDQUFaO0FBQ0EsTUFBSTVJLEtBQUssQ0FBQzZJLEtBQU4sQ0FBWUYsS0FBWixLQUFzQixJQUExQixFQUNJLE9BQU8saUJBQVAsQ0FKUixDQU1JO0FBQ0E7O0FBQ0MsTUFBSSxzR0FBc0dHLElBQXRHLENBQTJHOUksS0FBM0csQ0FBSixFQUNHLE9BQU8sWUFBUCxDQVRSLENBV0k7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQU8sTUFBUDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0Q7QUFDQTtBQUVPLE1BQU1nRyxRQUFRLEdBQUcsQ0FBQ2dELFlBQUQsRUFBdUJDLFdBQXZCLEtBQStDO0FBRXRFLFFBQU07QUFBQSxPQUFDakosS0FBRDtBQUFBLE9BQVFrSjtBQUFSLE1BQW9CL0ssK0NBQVEsQ0FBUzZLLFlBQVQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JqTCwrQ0FBUSxDQUFVLEtBQVYsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQzhJLE1BQUQ7QUFBQSxPQUFTb0M7QUFBVCxNQUFzQmxMLCtDQUFRLENBQVUsSUFBVixDQUFwQztBQUNBLFFBQU1tTCxLQUFLLEdBQUdQLDZEQUFhLENBQUMvSSxLQUFELEVBQVFpSixXQUFSLENBQTNCOztBQUdBLFFBQU05QixRQUFRLEdBQUkxSCxDQUFELElBQXNFO0FBQ3RGeUosSUFBQUEsUUFBUSxDQUFDekosQ0FBQyxDQUFDd0IsTUFBRixDQUFTakIsS0FBVixDQUFSO0FBQ0EsR0FGRDs7QUFJQSxRQUFNb0gsTUFBTSxHQUFJM0gsQ0FBRCxJQUFxRTtBQUNuRjJKLElBQUFBLFVBQVUsQ0FBQyxJQUFELENBQVY7QUFDQSxHQUZEOztBQUlBLFFBQU1HLE9BQU8sR0FBSTlKLENBQUQsSUFBaUQ7QUFDaEVBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBMkosSUFBQUEsU0FBUyxDQUFDLElBQUQsQ0FBVDtBQUNBLEdBSEQ7O0FBS0E7QUFDQ3JKLElBQUFBLEtBREQ7QUFFQ2lILElBQUFBLE1BRkQ7QUFHQ3NDLElBQUFBLE9BSEQ7QUFJQ3BDLElBQUFBLFFBSkQ7QUFLQ0MsSUFBQUEsTUFMRDtBQU1DK0IsSUFBQUE7QUFORCxLQU9JRyxLQVBKO0FBU0EsQ0E5Qk07Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSFA7QUFFTyxNQUFNUCxhQUFhLEdBQUcsQ0FBQy9JLEtBQUQsRUFBZ0JpSixXQUFoQixLQUF3QztBQUVwRSxRQUFNO0FBQUEsT0FBQ3ZDLE9BQUQ7QUFBQSxPQUFVOEM7QUFBVixNQUF3QnJMLCtDQUFRLENBQVUsSUFBVixDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDMEosWUFBRDtBQUFBLE9BQWU0QjtBQUFmLE1BQWtDdEwsK0NBQVEsQ0FBVSxLQUFWLENBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUMrSSxnQkFBRDtBQUFBLE9BQW1Cd0M7QUFBbkIsTUFBMEN2TCwrQ0FBUSxDQUFVLEtBQVYsQ0FBeEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ3lKLFVBQUQ7QUFBQSxPQUFhK0I7QUFBYixNQUE4QnhMLCtDQUFRLENBQVUsS0FBVixDQUE1QztBQUVBRCxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZixTQUFLLE1BQU0wTCxVQUFYLElBQXlCWCxXQUF6QixFQUFzQztBQUNyQyxjQUFRVyxVQUFSO0FBQ0MsYUFBSyxXQUFMO0FBQ0M1SixVQUFBQSxLQUFLLENBQUNnRCxNQUFOLEdBQWVpRyxXQUFXLENBQUNXLFVBQUQsQ0FBMUIsR0FBeUNGLG1CQUFtQixDQUFDLElBQUQsQ0FBNUQsR0FBcUVBLG1CQUFtQixDQUFDLEtBQUQsQ0FBeEY7QUFDQTs7QUFDRCxhQUFLLFNBQUw7QUFDQzFKLFVBQUFBLEtBQUssR0FBR3dKLFVBQVUsQ0FBQyxLQUFELENBQWIsR0FBdUJBLFVBQVUsQ0FBQyxJQUFELENBQXRDO0FBQ0E7O0FBQ0QsYUFBSyxTQUFMO0FBQ0M7O0FBQ0QsYUFBSyxTQUFMO0FBQ0MsZ0JBQU1LLEVBQUUsR0FBRyx1SkFBWDtBQUNJQSxVQUFBQSxFQUFFLENBQUNmLElBQUgsQ0FBUWdCLE1BQU0sQ0FBQzlKLEtBQUQsQ0FBTixDQUFjK0osV0FBZCxFQUFSLENBQUQsR0FBeUNOLGVBQWUsQ0FBQyxLQUFELENBQXhELEdBQWtFQSxlQUFlLENBQUMsSUFBRCxDQUFqRjtBQUNIO0FBWkY7QUFjQTtBQUNELEdBakJRLEVBaUJOLENBQUN6SixLQUFELENBakJNLENBQVQ7QUFtQkE5QixFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZixRQUFJZ0osZ0JBQWdCLElBQUlSLE9BQXBCLElBQStCbUIsWUFBbkMsRUFBaUQ7QUFDaEQ4QixNQUFBQSxhQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0EsS0FGRCxNQUdLO0FBQ0pBLE1BQUFBLGFBQWEsQ0FBQyxJQUFELENBQWI7QUFDQTtBQUVELEdBUlEsRUFRTixDQUFDakQsT0FBRCxFQUFVUSxnQkFBVixFQUE0QlcsWUFBNUIsQ0FSTSxDQUFUO0FBYUEsU0FBTztBQUNObkIsSUFBQUEsT0FETTtBQUVOUSxJQUFBQSxnQkFGTTtBQUdOVSxJQUFBQSxVQUhNO0FBSU5DLElBQUFBO0FBSk0sR0FBUDtBQU1BLENBN0NNOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZQO0FBR08sTUFBTW5KLFlBQVksR0FBR3NMLCtDQUFLO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FSTzs7Ozs7Ozs7Ozs7QUNITTs7QUFDYkMsOENBQTZDO0FBQ3pDakssRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FtSyxlQUFBLEdBQWtCRSxNQUFsQjs7QUFDQSxJQUFJQyxNQUFNLEdBQUdDLHNCQUFzQixDQUFDcEwsbUJBQU8sQ0FBQyxvQkFBRCxDQUFSLENBQW5DOztBQUNBLElBQUlxTCxLQUFLLEdBQUdELHNCQUFzQixDQUFDcEwsbUJBQU8sQ0FBQyw4Q0FBRCxDQUFSLENBQWxDOztBQUNBLElBQUlzTCxTQUFTLEdBQUd0TCxtQkFBTyxDQUFDLDBEQUFELENBQXZCOztBQUNBLElBQUl1TCxZQUFZLEdBQUd2TCxtQkFBTyxDQUFDLHNEQUFELENBQTFCOztBQUNBLElBQUl3TCxnQkFBZ0IsR0FBR3hMLG1CQUFPLENBQUMsK0VBQUQsQ0FBOUI7O0FBQ0EsU0FBU3lMLGVBQVQsQ0FBeUJDLEdBQXpCLEVBQThCQyxHQUE5QixFQUFtQzlLLEtBQW5DLEVBQTBDO0FBQ3RDLE1BQUk4SyxHQUFHLElBQUlELEdBQVgsRUFBZ0I7QUFDWlosSUFBQUEsTUFBTSxDQUFDQyxjQUFQLENBQXNCVyxHQUF0QixFQUEyQkMsR0FBM0IsRUFBZ0M7QUFDNUI5SyxNQUFBQSxLQUFLLEVBQUVBLEtBRHFCO0FBRTVCK0ssTUFBQUEsVUFBVSxFQUFFLElBRmdCO0FBRzVCQyxNQUFBQSxZQUFZLEVBQUUsSUFIYztBQUk1QkMsTUFBQUEsUUFBUSxFQUFFO0FBSmtCLEtBQWhDO0FBTUgsR0FQRCxNQU9PO0FBQ0hKLElBQUFBLEdBQUcsQ0FBQ0MsR0FBRCxDQUFILEdBQVc5SyxLQUFYO0FBQ0g7O0FBQ0QsU0FBTzZLLEdBQVA7QUFDSDs7QUFDRCxTQUFTTixzQkFBVCxDQUFnQ00sR0FBaEMsRUFBcUM7QUFDakMsU0FBT0EsR0FBRyxJQUFJQSxHQUFHLENBQUNLLFVBQVgsR0FBd0JMLEdBQXhCLEdBQThCO0FBQ2pDVCxJQUFBQSxPQUFPLEVBQUVTO0FBRHdCLEdBQXJDO0FBR0g7O0FBQ0QsU0FBU00sYUFBVCxDQUF1QmxLLE1BQXZCLEVBQStCO0FBQzNCLE9BQUksSUFBSW1LLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR0MsU0FBUyxDQUFDckksTUFBN0IsRUFBcUNvSSxDQUFDLEVBQXRDLEVBQXlDO0FBQ3JDLFFBQUlFLE1BQU0sR0FBR0QsU0FBUyxDQUFDRCxDQUFELENBQVQsSUFBZ0IsSUFBaEIsR0FBdUJDLFNBQVMsQ0FBQ0QsQ0FBRCxDQUFoQyxHQUFzQyxFQUFuRDtBQUVBLFFBQUlHLE9BQU8sR0FBR3RCLE1BQU0sQ0FBQ3VCLElBQVAsQ0FBWUYsTUFBWixDQUFkOztBQUNBLFFBQUksT0FBT3JCLE1BQU0sQ0FBQ3dCLHFCQUFkLEtBQXdDLFVBQTVDLEVBQXdEO0FBQ3BERixNQUFBQSxPQUFPLEdBQUdBLE9BQU8sQ0FBQ0csTUFBUixDQUFlekIsTUFBTSxDQUFDd0IscUJBQVAsQ0FBNkJILE1BQTdCLEVBQXFDSyxNQUFyQyxDQUE0QyxVQUFTQyxHQUFULEVBQWM7QUFDL0UsZUFBTzNCLE1BQU0sQ0FBQzRCLHdCQUFQLENBQWdDUCxNQUFoQyxFQUF3Q00sR0FBeEMsRUFBNkNiLFVBQXBEO0FBQ0gsT0FGd0IsQ0FBZixDQUFWO0FBR0g7O0FBQ0RRLElBQUFBLE9BQU8sQ0FBQ08sT0FBUixDQUFnQixVQUFTaEIsR0FBVCxFQUFjO0FBQzFCRixNQUFBQSxlQUFlLENBQUMzSixNQUFELEVBQVM2SixHQUFULEVBQWNRLE1BQU0sQ0FBQ1IsR0FBRCxDQUFwQixDQUFmO0FBQ0gsS0FGRDtBQUdIOztBQUNELFNBQU83SixNQUFQO0FBQ0g7O0FBQ0QsU0FBUzhLLHdCQUFULENBQWtDVCxNQUFsQyxFQUEwQ1UsUUFBMUMsRUFBb0Q7QUFDaEQsTUFBSVYsTUFBTSxJQUFJLElBQWQsRUFBb0IsT0FBTyxFQUFQOztBQUVwQixNQUFJckssTUFBTSxHQUFHZ0wsNkJBQTZCLENBQUNYLE1BQUQsRUFBU1UsUUFBVCxDQUExQzs7QUFDQSxNQUFJbEIsR0FBSixFQUFTTSxDQUFUOztBQUNBLE1BQUluQixNQUFNLENBQUN3QixxQkFBWCxFQUFrQztBQUM5QixRQUFJUyxnQkFBZ0IsR0FBR2pDLE1BQU0sQ0FBQ3dCLHFCQUFQLENBQTZCSCxNQUE3QixDQUF2Qjs7QUFDQSxTQUFJRixDQUFDLEdBQUcsQ0FBUixFQUFXQSxDQUFDLEdBQUdjLGdCQUFnQixDQUFDbEosTUFBaEMsRUFBd0NvSSxDQUFDLEVBQXpDLEVBQTRDO0FBQ3hDTixNQUFBQSxHQUFHLEdBQUdvQixnQkFBZ0IsQ0FBQ2QsQ0FBRCxDQUF0QjtBQUNBLFVBQUlZLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQnJCLEdBQWpCLEtBQXlCLENBQTdCLEVBQWdDO0FBQ2hDLFVBQUksQ0FBQ2IsTUFBTSxDQUFDbUMsU0FBUCxDQUFpQkMsb0JBQWpCLENBQXNDQyxJQUF0QyxDQUEyQ2hCLE1BQTNDLEVBQW1EUixHQUFuRCxDQUFMLEVBQThEO0FBQzlEN0osTUFBQUEsTUFBTSxDQUFDNkosR0FBRCxDQUFOLEdBQWNRLE1BQU0sQ0FBQ1IsR0FBRCxDQUFwQjtBQUNIO0FBQ0o7O0FBQ0QsU0FBTzdKLE1BQVA7QUFDSDs7QUFDRCxTQUFTZ0wsNkJBQVQsQ0FBdUNYLE1BQXZDLEVBQStDVSxRQUEvQyxFQUF5RDtBQUNyRCxNQUFJVixNQUFNLElBQUksSUFBZCxFQUFvQixPQUFPLEVBQVA7QUFFcEIsTUFBSXJLLE1BQU0sR0FBRyxFQUFiO0FBRUEsTUFBSXNMLFVBQVUsR0FBR3RDLE1BQU0sQ0FBQ3VCLElBQVAsQ0FBWUYsTUFBWixDQUFqQjtBQUNBLE1BQUlSLEdBQUosRUFBU00sQ0FBVDs7QUFDQSxPQUFJQSxDQUFDLEdBQUcsQ0FBUixFQUFXQSxDQUFDLEdBQUdtQixVQUFVLENBQUN2SixNQUExQixFQUFrQ29JLENBQUMsRUFBbkMsRUFBc0M7QUFDbENOLElBQUFBLEdBQUcsR0FBR3lCLFVBQVUsQ0FBQ25CLENBQUQsQ0FBaEI7QUFDQSxRQUFJWSxRQUFRLENBQUNHLE9BQVQsQ0FBaUJyQixHQUFqQixLQUF5QixDQUE3QixFQUFnQztBQUNoQzdKLElBQUFBLE1BQU0sQ0FBQzZKLEdBQUQsQ0FBTixHQUFjUSxNQUFNLENBQUNSLEdBQUQsQ0FBcEI7QUFDSDs7QUFDRCxTQUFPN0osTUFBUDtBQUNIOztBQUNELE1BQU11TCxlQUFlLEdBQUcsSUFBSUMsR0FBSixFQUF4Qjs7QUFDQSxJQUFJLE1BQStCO0FBQy9CQyxFQUFBQSxNQUFNLENBQUNDLHFCQUFQLEdBQStCLElBQS9CO0FBQ0g7O0FBQ0QsTUFBTUMsb0JBQW9CLEdBQUcsQ0FDekIsTUFEeUIsRUFFekIsT0FGeUIsRUFHekJ2RixTQUh5QixDQUE3QjtBQUtBLE1BQU13RixPQUFPLEdBQUcsSUFBSUMsR0FBSixDQUFRLENBQ3BCLENBQ0ksU0FESixFQUVJQyxhQUZKLENBRG9CLEVBS3BCLENBQ0ksT0FESixFQUVJQyxXQUZKLENBTG9CLEVBU3BCLENBQ0ksWUFESixFQUVJQyxnQkFGSixDQVRvQixFQWFwQixDQUNJLFFBREosRUFFSUMsWUFGSixDQWJvQixFQWlCcEIsQ0FDSSxRQURKLEVBRUlDLFlBRkosQ0FqQm9CLENBQVIsQ0FBaEI7QUFzQkEsTUFBTUMsbUJBQW1CLEdBQUcsQ0FDeEIsTUFEd0IsRUFFeEIsT0FGd0IsRUFHeEIsV0FId0IsRUFJeEIsWUFKd0IsRUFLeEIvRixTQUx3QixDQUE1Qjs7QUFPQSxTQUFTZ0csZUFBVCxDQUF5QkMsR0FBekIsRUFBOEI7QUFDMUIsU0FBT0EsR0FBRyxDQUFDbEQsT0FBSixLQUFnQi9DLFNBQXZCO0FBQ0g7O0FBQ0QsU0FBU2tHLGlCQUFULENBQTJCRCxHQUEzQixFQUFnQztBQUM1QixTQUFPQSxHQUFHLENBQUNBLEdBQUosS0FBWWpHLFNBQW5CO0FBQ0g7O0FBQ0QsU0FBU21HLGNBQVQsQ0FBd0JGLEdBQXhCLEVBQTZCO0FBQ3pCLFNBQU8sT0FBT0EsR0FBUCxLQUFlLFFBQWYsS0FBNEJELGVBQWUsQ0FBQ0MsR0FBRCxDQUFmLElBQXdCQyxpQkFBaUIsQ0FBQ0QsR0FBRCxDQUFyRSxDQUFQO0FBQ0g7O0FBQ0QsTUFBTTtBQUFFRyxFQUFBQSxXQUFXLEVBQUVDLGlCQUFmO0FBQW1DQyxFQUFBQSxVQUFVLEVBQUVDLGdCQUEvQztBQUFrRUMsRUFBQUEsTUFBTSxFQUFFQyxZQUExRTtBQUF5RkMsRUFBQUEsSUFBSSxFQUFFQyxVQUEvRjtBQUE0R0MsRUFBQUEsT0FBTyxFQUFFQztBQUFySCxJQUEwSUMsc0pBQUEsSUFBaUN6RCxZQUFZLENBQUM0RCxrQkFBOUwsRUFDQTs7QUFDQSxNQUFNQyxRQUFRLEdBQUcsQ0FDYixHQUFHYixpQkFEVSxFQUViLEdBQUdFLGdCQUZVLENBQWpCO0FBSUFGLGlCQUFpQixDQUFDYyxJQUFsQixDQUF1QixDQUFDQyxDQUFELEVBQUk1SCxDQUFKLEtBQVE0SCxDQUFDLEdBQUc1SCxDQUFuQztBQUVBMEgsUUFBUSxDQUFDQyxJQUFULENBQWMsQ0FBQ0MsQ0FBRCxFQUFJNUgsQ0FBSixLQUFRNEgsQ0FBQyxHQUFHNUgsQ0FBMUI7O0FBRUEsU0FBUzZILFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCQyxNQUExQixFQUFrQ0MsS0FBbEMsRUFBeUM7QUFDckMsTUFBSUEsS0FBSyxLQUFLRCxNQUFNLEtBQUssTUFBWCxJQUFxQkEsTUFBTSxLQUFLLFlBQXJDLENBQVQsRUFBNkQ7QUFDekQ7QUFDQSxVQUFNRSxlQUFlLEdBQUcsb0JBQXhCO0FBQ0EsVUFBTUMsWUFBWSxHQUFHLEVBQXJCOztBQUNBLFNBQUksSUFBSWxHLEtBQVIsRUFBZUEsS0FBSyxHQUFHaUcsZUFBZSxDQUFDRSxJQUFoQixDQUFxQkgsS0FBckIsQ0FBdkIsRUFBb0RoRyxLQUFwRCxFQUEwRDtBQUN0RGtHLE1BQUFBLFlBQVksQ0FBQ0UsSUFBYixDQUFrQkMsUUFBUSxDQUFDckcsS0FBSyxDQUFDLENBQUQsQ0FBTixDQUExQjtBQUNIOztBQUNELFFBQUlrRyxZQUFZLENBQUMvTCxNQUFqQixFQUF5QjtBQUNyQixZQUFNbU0sYUFBYSxHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxHQUFHTixZQUFaLElBQTRCLElBQWxEO0FBQ0EsYUFBTztBQUNITyxRQUFBQSxNQUFNLEVBQUVmLFFBQVEsQ0FBQzVDLE1BQVQsQ0FBaUI0RCxDQUFELElBQUtBLENBQUMsSUFBSTdCLGlCQUFpQixDQUFDLENBQUQsQ0FBakIsR0FBdUJ5QixhQUFqRCxDQURMO0FBR0hLLFFBQUFBLElBQUksRUFBRTtBQUhILE9BQVA7QUFLSDs7QUFDRCxXQUFPO0FBQ0hGLE1BQUFBLE1BQU0sRUFBRWYsUUFETDtBQUVIaUIsTUFBQUEsSUFBSSxFQUFFO0FBRkgsS0FBUDtBQUlIOztBQUNELE1BQUksT0FBT2IsS0FBUCxLQUFpQixRQUFqQixJQUE2QkMsTUFBTSxLQUFLLE1BQXhDLElBQWtEQSxNQUFNLEtBQUssWUFBakUsRUFBK0U7QUFDM0UsV0FBTztBQUNIVSxNQUFBQSxNQUFNLEVBQUU1QixpQkFETDtBQUVIOEIsTUFBQUEsSUFBSSxFQUFFO0FBRkgsS0FBUDtBQUlIOztBQUNELFFBQU1GLE1BQU0sR0FBRyxDQUNYLEdBQUcsSUFBSTdDLEdBQUosRUFBUTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDSWtDLEtBREosRUFFSUEsS0FBSyxHQUFHO0FBQUU7QUFGZCxJQUdFcEwsR0FIRixDQUdPa00sQ0FBRCxJQUFLbEIsUUFBUSxDQUFDbUIsSUFBVCxDQUFlQyxDQUFELElBQUtBLENBQUMsSUFBSUYsQ0FBeEIsS0FDRmxCLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDdkwsTUFBVCxHQUFrQixDQUFuQixDQUpqQixDQVJHLENBRFEsQ0FBZjtBQWdCQSxTQUFPO0FBQ0hzTSxJQUFBQSxNQURHO0FBRUhFLElBQUFBLElBQUksRUFBRTtBQUZILEdBQVA7QUFJSDs7QUFDRCxTQUFTSSxnQkFBVCxDQUEwQjtBQUFFdEMsRUFBQUEsR0FBRjtBQUFRdUMsRUFBQUEsV0FBUjtBQUFzQmpCLEVBQUFBLE1BQXRCO0FBQStCRCxFQUFBQSxLQUEvQjtBQUF1Q21CLEVBQUFBLE9BQXZDO0FBQWlEakIsRUFBQUEsS0FBakQ7QUFBeURoQixFQUFBQTtBQUF6RCxDQUExQixFQUE4RjtBQUMxRixNQUFJZ0MsV0FBSixFQUFpQjtBQUNiLFdBQU87QUFDSHZDLE1BQUFBLEdBREc7QUFFSHlDLE1BQUFBLE1BQU0sRUFBRTFJLFNBRkw7QUFHSHdILE1BQUFBLEtBQUssRUFBRXhIO0FBSEosS0FBUDtBQUtIOztBQUNELFFBQU07QUFBRWlJLElBQUFBLE1BQUY7QUFBV0UsSUFBQUE7QUFBWCxNQUFxQmQsU0FBUyxDQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBZ0JDLEtBQWhCLENBQXBDO0FBQ0EsUUFBTW1CLElBQUksR0FBR1YsTUFBTSxDQUFDdE0sTUFBUCxHQUFnQixDQUE3QjtBQUNBLFNBQU87QUFDSDZMLElBQUFBLEtBQUssRUFBRSxDQUFDQSxLQUFELElBQVVXLElBQUksS0FBSyxHQUFuQixHQUF5QixPQUF6QixHQUFtQ1gsS0FEdkM7QUFFSGtCLElBQUFBLE1BQU0sRUFBRVQsTUFBTSxDQUFDL0wsR0FBUCxDQUFXLENBQUNrTSxDQUFELEVBQUlyRSxDQUFKLEtBQVMsR0FBRXlDLE1BQU0sQ0FBQztBQUM3QlAsTUFBQUEsR0FENkI7QUFFN0J3QyxNQUFBQSxPQUY2QjtBQUc3Qm5CLE1BQUFBLEtBQUssRUFBRWM7QUFIc0IsS0FBRCxDQUk3QixJQUFHRCxJQUFJLEtBQUssR0FBVCxHQUFlQyxDQUFmLEdBQW1CckUsQ0FBQyxHQUFHLENBQUUsR0FBRW9FLElBQUssRUFKbEMsRUFLTlMsSUFMTSxDQUtELElBTEMsQ0FGTDtBQVFIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBM0MsSUFBQUEsR0FBRyxFQUFFTyxNQUFNLENBQUM7QUFDUlAsTUFBQUEsR0FEUTtBQUVSd0MsTUFBQUEsT0FGUTtBQUdSbkIsTUFBQUEsS0FBSyxFQUFFVyxNQUFNLENBQUNVLElBQUQ7QUFITCxLQUFEO0FBZFIsR0FBUDtBQW9CSDs7QUFDRCxTQUFTRSxNQUFULENBQWdCQyxDQUFoQixFQUFtQjtBQUNmLE1BQUksT0FBT0EsQ0FBUCxLQUFhLFFBQWpCLEVBQTJCO0FBQ3ZCLFdBQU9BLENBQVA7QUFDSDs7QUFDRCxNQUFJLE9BQU9BLENBQVAsS0FBYSxRQUFqQixFQUEyQjtBQUN2QixXQUFPakIsUUFBUSxDQUFDaUIsQ0FBRCxFQUFJLEVBQUosQ0FBZjtBQUNIOztBQUNELFNBQU85SSxTQUFQO0FBQ0g7O0FBQ0QsU0FBUytJLGtCQUFULENBQTRCQyxXQUE1QixFQUF5QztBQUNyQyxRQUFNQyxJQUFJLEdBQUd6RCxPQUFPLENBQUMwRCxHQUFSLENBQVl6QyxZQUFaLENBQWI7O0FBQ0EsTUFBSXdDLElBQUosRUFBVTtBQUNOLFdBQU9BLElBQUksQ0FBQ25GLGFBQWEsQ0FBQztBQUN0QnFGLE1BQUFBLElBQUksRUFBRXhDO0FBRGdCLEtBQUQsRUFFdEJxQyxXQUZzQixDQUFkLENBQVg7QUFHSDs7QUFDRCxRQUFNLElBQUlJLEtBQUosQ0FBVyx5REFBd0QvRixZQUFZLENBQUNnRyxhQUFiLENBQTJCVCxJQUEzQixDQUFnQyxJQUFoQyxDQUFzQyxlQUFjbkMsWUFBYSxFQUFwSSxDQUFOO0FBQ0gsRUFDRDtBQUNBOzs7QUFDQSxTQUFTNkMsYUFBVCxDQUF1QkMsR0FBdkIsRUFBNEJ0RCxHQUE1QixFQUFpQ3NCLE1BQWpDLEVBQXlDaUMsV0FBekMsRUFBc0RDLGlCQUF0RCxFQUF5RTtBQUNyRSxNQUFJLENBQUNGLEdBQUwsRUFBVTtBQUNOO0FBQ0g7O0FBQ0QsUUFBTUcsVUFBVSxHQUFHLE1BQUk7QUFDbkIsUUFBSSxDQUFDSCxHQUFHLENBQUN0RCxHQUFKLENBQVEwRCxVQUFSLENBQW1CLE9BQW5CLENBQUwsRUFBa0M7QUFDOUIsWUFBTXJCLENBQUMsR0FBRyxZQUFZaUIsR0FBWixHQUFrQkEsR0FBRyxDQUFDSyxNQUFKLEVBQWxCLEdBQWlDQyxPQUFPLENBQUNDLE9BQVIsRUFBM0M7QUFDQXhCLE1BQUFBLENBQUMsQ0FBQ3lCLEtBQUYsQ0FBUSxNQUFJLENBQ1gsQ0FERCxFQUNHeFEsSUFESCxDQUNRLE1BQUk7QUFDUixZQUFJaVEsV0FBVyxLQUFLLE1BQXBCLEVBQTRCO0FBQ3hCRCxVQUFBQSxHQUFHLENBQUNTLEtBQUosQ0FBVTFGLE1BQVYsR0FBbUIsTUFBbkI7QUFDQWlGLFVBQUFBLEdBQUcsQ0FBQ1MsS0FBSixDQUFVQyxjQUFWLEdBQTJCLE1BQTNCO0FBQ0FWLFVBQUFBLEdBQUcsQ0FBQ1MsS0FBSixDQUFVRSxlQUFWLEdBQTRCLE1BQTVCO0FBQ0g7O0FBQ0QvRSxRQUFBQSxlQUFlLENBQUNnRixHQUFoQixDQUFvQmxFLEdBQXBCOztBQUNBLFlBQUl3RCxpQkFBSixFQUF1QjtBQUNuQixnQkFBTTtBQUFFVyxZQUFBQSxZQUFGO0FBQWlCQyxZQUFBQTtBQUFqQixjQUFvQ2QsR0FBMUMsQ0FEbUIsQ0FFbkI7QUFDQTs7QUFDQUUsVUFBQUEsaUJBQWlCLENBQUM7QUFDZFcsWUFBQUEsWUFEYztBQUVkQyxZQUFBQTtBQUZjLFdBQUQsQ0FBakI7QUFJSDs7QUFDRCxrQkFBMkM7QUFDdkMsY0FBSUMsR0FBSjs7QUFDQSxjQUFJLENBQUNBLEdBQUcsR0FBR2YsR0FBRyxDQUFDZ0IsYUFBWCxNQUE4QixJQUE5QixJQUFzQ0QsR0FBRyxLQUFLLEtBQUssQ0FBbkQsR0FBdUQsS0FBSyxDQUE1RCxHQUFnRUEsR0FBRyxDQUFDQyxhQUF4RSxFQUF1RjtBQUNuRixrQkFBTUMsTUFBTSxHQUFHQyxnQkFBZ0IsQ0FBQ2xCLEdBQUcsQ0FBQ2dCLGFBQUosQ0FBa0JBLGFBQW5CLENBQS9COztBQUNBLGdCQUFJaEQsTUFBTSxLQUFLLFlBQVgsSUFBMkJpRCxNQUFNLENBQUNFLE9BQVAsS0FBbUIsTUFBbEQsRUFBMEQ7QUFDdER6UyxjQUFBQSxPQUFPLENBQUMwUyxJQUFSLENBQWMsbUJBQWtCMUUsR0FBSSwwSEFBcEM7QUFDSCxhQUZELE1BRU8sSUFBSXNCLE1BQU0sS0FBSyxNQUFYLElBQXFCaUQsTUFBTSxDQUFDdkssUUFBUCxLQUFvQixVQUE3QyxFQUF5RDtBQUM1RGhJLGNBQUFBLE9BQU8sQ0FBQzBTLElBQVIsQ0FBYyxtQkFBa0IxRSxHQUFJLDJEQUEwRHVFLE1BQU0sQ0FBQ3ZLLFFBQVMsdUZBQTlHO0FBQ0g7QUFDSjtBQUNKO0FBQ0osT0E1QkQ7QUE2Qkg7QUFDSixHQWpDRDs7QUFrQ0EsTUFBSXNKLEdBQUcsQ0FBQ3FCLFFBQVIsRUFBa0I7QUFDZDtBQUNBO0FBQ0E7QUFDQWxCLElBQUFBLFVBQVU7QUFDYixHQUxELE1BS087QUFDSEgsSUFBQUEsR0FBRyxDQUFDc0IsTUFBSixHQUFhbkIsVUFBYjtBQUNIO0FBQ0o7O0FBQ0QsU0FBUzFHLE1BQVQsQ0FBZ0I4SCxNQUFoQixFQUF3QjtBQUNwQixNQUFJO0FBQUU3RSxJQUFBQSxHQUFGO0FBQVF1QixJQUFBQSxLQUFSO0FBQWdCZ0IsSUFBQUEsV0FBVyxHQUFFLEtBQTdCO0FBQXFDdUMsSUFBQUEsUUFBUSxHQUFFLEtBQS9DO0FBQXVEalEsSUFBQUEsT0FBdkQ7QUFBaUVrUSxJQUFBQSxZQUFZLEdBQUUsT0FBL0U7QUFBeUZDLElBQUFBLFNBQXpGO0FBQXFHeEMsSUFBQUEsT0FBckc7QUFBK0duQixJQUFBQSxLQUEvRztBQUF1SDRELElBQUFBLE1BQXZIO0FBQWdJQyxJQUFBQSxTQUFoSTtBQUE0SUMsSUFBQUEsY0FBNUk7QUFBNkozQixJQUFBQSxpQkFBN0o7QUFBaUxqRCxJQUFBQSxNQUFNLEdBQUV1QyxrQkFBekw7QUFBOE1TLElBQUFBLFdBQVcsR0FBRSxPQUEzTjtBQUFxTzZCLElBQUFBO0FBQXJPLE1BQXNQUCxNQUExUDtBQUFBLE1BQWtRUSxHQUFHLEdBQUc1Ryx3QkFBd0IsQ0FBQ29HLE1BQUQsRUFBUyxDQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLGFBQWpCLEVBQWdDLFVBQWhDLEVBQTRDLFNBQTVDLEVBQXVELGNBQXZELEVBQXVFLFdBQXZFLEVBQW9GLFNBQXBGLEVBQStGLE9BQS9GLEVBQXdHLFFBQXhHLEVBQWtILFdBQWxILEVBQStILGdCQUEvSCxFQUFpSixtQkFBakosRUFBc0ssUUFBdEssRUFBZ0wsYUFBaEwsRUFBK0wsYUFBL0wsQ0FBVCxDQUFoUzs7QUFDQSxNQUFJUyxJQUFJLEdBQUdELEdBQVg7QUFDQSxNQUFJL0QsTUFBTSxHQUFHQyxLQUFLLEdBQUcsWUFBSCxHQUFrQixXQUFwQzs7QUFDQSxNQUFJLFlBQVkrRCxJQUFoQixFQUFzQjtBQUNsQjtBQUNBLFFBQUlBLElBQUksQ0FBQ2hFLE1BQVQsRUFBaUJBLE1BQU0sR0FBR2dFLElBQUksQ0FBQ2hFLE1BQWQsQ0FGQyxDQUdsQjs7QUFDQSxXQUFPZ0UsSUFBSSxDQUFDLFFBQUQsQ0FBWDtBQUNIOztBQUNELE1BQUlDLFNBQVMsR0FBRyxFQUFoQjs7QUFDQSxNQUFJckYsY0FBYyxDQUFDRixHQUFELENBQWxCLEVBQXlCO0FBQ3JCLFVBQU13RixlQUFlLEdBQUd6RixlQUFlLENBQUNDLEdBQUQsQ0FBZixHQUF1QkEsR0FBRyxDQUFDbEQsT0FBM0IsR0FBcUNrRCxHQUE3RDs7QUFDQSxRQUFJLENBQUN3RixlQUFlLENBQUN4RixHQUFyQixFQUEwQjtBQUN0QixZQUFNLElBQUltRCxLQUFKLENBQVcsOElBQTZJc0MsSUFBSSxDQUFDQyxTQUFMLENBQWVGLGVBQWYsQ0FBZ0MsRUFBeEwsQ0FBTjtBQUNIOztBQUNESixJQUFBQSxXQUFXLEdBQUdBLFdBQVcsSUFBSUksZUFBZSxDQUFDSixXQUE3QztBQUNBRyxJQUFBQSxTQUFTLEdBQUdDLGVBQWUsQ0FBQ3hGLEdBQTVCOztBQUNBLFFBQUksQ0FBQ3NCLE1BQUQsSUFBV0EsTUFBTSxLQUFLLE1BQTFCLEVBQWtDO0FBQzlCMkQsTUFBQUEsTUFBTSxHQUFHQSxNQUFNLElBQUlPLGVBQWUsQ0FBQ1AsTUFBbkM7QUFDQTVELE1BQUFBLEtBQUssR0FBR0EsS0FBSyxJQUFJbUUsZUFBZSxDQUFDbkUsS0FBakM7O0FBQ0EsVUFBSSxDQUFDbUUsZUFBZSxDQUFDUCxNQUFqQixJQUEyQixDQUFDTyxlQUFlLENBQUNuRSxLQUFoRCxFQUF1RDtBQUNuRCxjQUFNLElBQUk4QixLQUFKLENBQVcsMkpBQTBKc0MsSUFBSSxDQUFDQyxTQUFMLENBQWVGLGVBQWYsQ0FBZ0MsRUFBck0sQ0FBTjtBQUNIO0FBQ0o7QUFDSjs7QUFDRHhGLEVBQUFBLEdBQUcsR0FBRyxPQUFPQSxHQUFQLEtBQWUsUUFBZixHQUEwQkEsR0FBMUIsR0FBZ0N1RixTQUF0QztBQUNBLFFBQU1JLFFBQVEsR0FBRy9DLE1BQU0sQ0FBQ3ZCLEtBQUQsQ0FBdkI7QUFDQSxRQUFNdUUsU0FBUyxHQUFHaEQsTUFBTSxDQUFDcUMsTUFBRCxDQUF4QjtBQUNBLFFBQU1ZLFVBQVUsR0FBR2pELE1BQU0sQ0FBQ0osT0FBRCxDQUF6QjtBQUNBLE1BQUlzRCxNQUFNLEdBQUcsQ0FBQ2hCLFFBQUQsS0FBY2pRLE9BQU8sS0FBSyxNQUFaLElBQXNCLE9BQU9BLE9BQVAsS0FBbUIsV0FBdkQsQ0FBYjs7QUFDQSxNQUFJbUwsR0FBRyxDQUFDMEQsVUFBSixDQUFlLE9BQWYsS0FBMkIxRCxHQUFHLENBQUMwRCxVQUFKLENBQWUsT0FBZixDQUEvQixFQUF3RDtBQUNwRDtBQUNBbkIsSUFBQUEsV0FBVyxHQUFHLElBQWQ7QUFDQXVELElBQUFBLE1BQU0sR0FBRyxLQUFUO0FBQ0g7O0FBQ0QsTUFBSSxLQUFKLEVBQStELEVBRTlEOztBQUNELFlBQTJDO0FBQ3ZDLFFBQUksQ0FBQzlGLEdBQUwsRUFBVTtBQUNOLFlBQU0sSUFBSW1ELEtBQUosQ0FBVywwSEFBeUhzQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNySnJFLFFBQUFBLEtBRHFKO0FBRXJKNEQsUUFBQUEsTUFGcUo7QUFHckp6QyxRQUFBQTtBQUhxSixPQUFmLENBSXZJLEVBSkcsQ0FBTjtBQUtIOztBQUNELFFBQUksQ0FBQzFDLG1CQUFtQixDQUFDa0csUUFBcEIsQ0FBNkIxRSxNQUE3QixDQUFMLEVBQTJDO0FBQ3ZDLFlBQU0sSUFBSTZCLEtBQUosQ0FBVyxtQkFBa0JuRCxHQUFJLDhDQUE2Q3NCLE1BQU8sc0JBQXFCeEIsbUJBQW1CLENBQUM3SixHQUFwQixDQUF3QnVHLE1BQXhCLEVBQWdDbUcsSUFBaEMsQ0FBcUMsR0FBckMsQ0FBMEMsR0FBcEosQ0FBTjtBQUNIOztBQUNELFFBQUksT0FBT2dELFFBQVAsS0FBb0IsV0FBcEIsSUFBbUNNLEtBQUssQ0FBQ04sUUFBRCxDQUF4QyxJQUFzRCxPQUFPQyxTQUFQLEtBQXFCLFdBQXJCLElBQW9DSyxLQUFLLENBQUNMLFNBQUQsQ0FBbkcsRUFBZ0g7QUFDNUcsWUFBTSxJQUFJekMsS0FBSixDQUFXLG1CQUFrQm5ELEdBQUksNkVBQWpDLENBQU47QUFDSDs7QUFDRCxRQUFJc0IsTUFBTSxLQUFLLE1BQVgsS0FBc0JELEtBQUssSUFBSTRELE1BQS9CLENBQUosRUFBNEM7QUFDeENqVCxNQUFBQSxPQUFPLENBQUMwUyxJQUFSLENBQWMsbUJBQWtCMUUsR0FBSSwyRkFBcEM7QUFDSDs7QUFDRCxRQUFJLENBQUNWLG9CQUFvQixDQUFDMEcsUUFBckIsQ0FBOEJuUixPQUE5QixDQUFMLEVBQTZDO0FBQ3pDLFlBQU0sSUFBSXNPLEtBQUosQ0FBVyxtQkFBa0JuRCxHQUFJLCtDQUE4Q25MLE9BQVEsc0JBQXFCeUssb0JBQW9CLENBQUNySixHQUFyQixDQUF5QnVHLE1BQXpCLEVBQWlDbUcsSUFBakMsQ0FBc0MsR0FBdEMsQ0FBMkMsR0FBdkosQ0FBTjtBQUNIOztBQUNELFFBQUltQyxRQUFRLElBQUlqUSxPQUFPLEtBQUssTUFBNUIsRUFBb0M7QUFDaEMsWUFBTSxJQUFJc08sS0FBSixDQUFXLG1CQUFrQm5ELEdBQUksaUZBQWpDLENBQU47QUFDSDs7QUFDRCxRQUFJdUQsV0FBVyxLQUFLLE1BQXBCLEVBQTRCO0FBQ3hCLFVBQUlqQyxNQUFNLEtBQUssTUFBWCxJQUFxQixDQUFDcUUsUUFBUSxJQUFJLENBQWIsS0FBbUJDLFNBQVMsSUFBSSxDQUFoQyxJQUFxQyxJQUE5RCxFQUFvRTtBQUNoRTVULFFBQUFBLE9BQU8sQ0FBQzBTLElBQVIsQ0FBYyxtQkFBa0IxRSxHQUFJLHNHQUFwQztBQUNIOztBQUNELFVBQUksQ0FBQ29GLFdBQUwsRUFBa0I7QUFDZCxjQUFNYyxjQUFjLEdBQUcsQ0FDbkIsTUFEbUIsRUFFbkIsS0FGbUIsRUFHbkIsTUFIbUIsQ0FBdkIsQ0FJRTtBQUpGO0FBTUEsY0FBTSxJQUFJL0MsS0FBSixDQUFXLG1CQUFrQm5ELEdBQUk7QUFDdkQ7QUFDQTtBQUNBLG1HQUFtR2tHLGNBQWMsQ0FBQ3ZELElBQWYsQ0FBb0IsR0FBcEIsQ0FBeUI7QUFDNUg7QUFDQSxnRkFMc0IsQ0FBTjtBQU1IO0FBQ0o7O0FBQ0QsUUFBSSxTQUFTMkMsSUFBYixFQUFtQjtBQUNmdFQsTUFBQUEsT0FBTyxDQUFDMFMsSUFBUixDQUFjLG1CQUFrQjFFLEdBQUksaUdBQXBDO0FBQ0g7O0FBQ0QsUUFBSSxXQUFXc0YsSUFBZixFQUFxQjtBQUNqQnRULE1BQUFBLE9BQU8sQ0FBQzBTLElBQVIsQ0FBYyxtQkFBa0IxRSxHQUFJLHVGQUFwQztBQUNIOztBQUNELFVBQU1tRyxJQUFJLEdBQUdyRSxJQUFJLENBQUNzRSxLQUFMLENBQVd0RSxJQUFJLENBQUN1RSxNQUFMLEtBQWdCLElBQTNCLElBQW1DLEdBQWhEOztBQUNBLFFBQUksQ0FBQzlELFdBQUQsSUFBZ0IsQ0FBQ2hDLE1BQU0sQ0FBQztBQUN4QlAsTUFBQUEsR0FEd0I7QUFFeEJxQixNQUFBQSxLQUFLLEVBQUU4RSxJQUZpQjtBQUd4QjNELE1BQUFBLE9BQU8sRUFBRTtBQUhlLEtBQUQsQ0FBTixDQUlsQndELFFBSmtCLENBSVRHLElBQUksQ0FBQ0csUUFBTCxFQUpTLENBQXJCLEVBSThCO0FBQzFCdFUsTUFBQUEsT0FBTyxDQUFDMFMsSUFBUixDQUFjLG1CQUFrQjFFLEdBQUkseUhBQXZCLEdBQW1KLCtFQUFoSztBQUNIO0FBQ0o7O0FBQ0QsUUFBTSxDQUFDdUcsTUFBRCxFQUFTQyxhQUFULElBQTBCLENBQUMsR0FBR25KLGdCQUFKLEVBQXNCb0osZUFBdEIsQ0FBc0M7QUFDbEVDLElBQUFBLFVBQVUsRUFBRTNCLFlBRHNEO0FBRWxFNEIsSUFBQUEsUUFBUSxFQUFFLENBQUNiO0FBRnVELEdBQXRDLENBQWhDO0FBSUEsUUFBTWMsU0FBUyxHQUFHLENBQUNkLE1BQUQsSUFBV1UsYUFBN0I7QUFDQSxNQUFJSyxZQUFKO0FBQ0EsTUFBSUMsVUFBSjtBQUNBLE1BQUlDLFFBQUo7QUFDQSxNQUFJQyxRQUFRLEdBQUc7QUFDWGhOLElBQUFBLFFBQVEsRUFBRSxVQURDO0FBRVhDLElBQUFBLEdBQUcsRUFBRSxDQUZNO0FBR1hnTixJQUFBQSxJQUFJLEVBQUUsQ0FISztBQUlYQyxJQUFBQSxNQUFNLEVBQUUsQ0FKRztBQUtYaE4sSUFBQUEsS0FBSyxFQUFFLENBTEk7QUFNWGlOLElBQUFBLFNBQVMsRUFBRSxZQU5BO0FBT1hDLElBQUFBLE9BQU8sRUFBRSxDQVBFO0FBUVhDLElBQUFBLE1BQU0sRUFBRSxNQVJHO0FBU1hDLElBQUFBLE1BQU0sRUFBRSxNQVRHO0FBVVg3QyxJQUFBQSxPQUFPLEVBQUUsT0FWRTtBQVdYcEQsSUFBQUEsS0FBSyxFQUFFLENBWEk7QUFZWDRELElBQUFBLE1BQU0sRUFBRSxDQVpHO0FBYVhzQyxJQUFBQSxRQUFRLEVBQUUsTUFiQztBQWNYQyxJQUFBQSxRQUFRLEVBQUUsTUFkQztBQWVYQyxJQUFBQSxTQUFTLEVBQUUsTUFmQTtBQWdCWEMsSUFBQUEsU0FBUyxFQUFFLE1BaEJBO0FBaUJYeEMsSUFBQUEsU0FqQlc7QUFrQlhDLElBQUFBO0FBbEJXLEdBQWY7QUFvQkEsUUFBTXdDLFNBQVMsR0FBR3BFLFdBQVcsS0FBSyxNQUFoQixHQUF5QjtBQUN2Q2xGLElBQUFBLE1BQU0sRUFBRSxZQUQrQjtBQUV2QzJGLElBQUFBLGNBQWMsRUFBRWtCLFNBQVMsSUFBSSxPQUZVO0FBR3ZDakIsSUFBQUEsZUFBZSxFQUFHLFFBQU9tQixXQUFZLElBSEU7QUFJdkN3QyxJQUFBQSxrQkFBa0IsRUFBRXpDLGNBQWMsSUFBSTtBQUpDLEdBQXpCLEdBS2QsRUFMSjs7QUFPQSxNQUFJN0QsTUFBTSxLQUFLLE1BQWYsRUFBdUI7QUFDbkI7QUFDQXVGLElBQUFBLFlBQVksR0FBRztBQUNYcEMsTUFBQUEsT0FBTyxFQUFFLE9BREU7QUFFWG9ELE1BQUFBLFFBQVEsRUFBRSxRQUZDO0FBR1g3TixNQUFBQSxRQUFRLEVBQUUsVUFIQztBQUlYQyxNQUFBQSxHQUFHLEVBQUUsQ0FKTTtBQUtYZ04sTUFBQUEsSUFBSSxFQUFFLENBTEs7QUFNWEMsTUFBQUEsTUFBTSxFQUFFLENBTkc7QUFPWGhOLE1BQUFBLEtBQUssRUFBRSxDQVBJO0FBUVhpTixNQUFBQSxTQUFTLEVBQUUsWUFSQTtBQVNYRyxNQUFBQSxNQUFNLEVBQUU7QUFURyxLQUFmO0FBV0gsR0FiRCxNQWFPLElBQUksT0FBTzNCLFFBQVAsS0FBb0IsV0FBcEIsSUFBbUMsT0FBT0MsU0FBUCxLQUFxQixXQUE1RCxFQUF5RTtBQUM1RTtBQUNBLFVBQU1rQyxRQUFRLEdBQUdsQyxTQUFTLEdBQUdELFFBQTdCO0FBQ0EsVUFBTW9DLFVBQVUsR0FBRzlCLEtBQUssQ0FBQzZCLFFBQUQsQ0FBTCxHQUFrQixNQUFsQixHQUE0QixHQUFFQSxRQUFRLEdBQUcsR0FBSSxHQUFoRTs7QUFDQSxRQUFJeEcsTUFBTSxLQUFLLFlBQWYsRUFBNkI7QUFDekI7QUFDQXVGLE1BQUFBLFlBQVksR0FBRztBQUNYcEMsUUFBQUEsT0FBTyxFQUFFLE9BREU7QUFFWG9ELFFBQUFBLFFBQVEsRUFBRSxRQUZDO0FBR1g3TixRQUFBQSxRQUFRLEVBQUUsVUFIQztBQUlYbU4sUUFBQUEsU0FBUyxFQUFFLFlBSkE7QUFLWEcsUUFBQUEsTUFBTSxFQUFFO0FBTEcsT0FBZjtBQU9BUixNQUFBQSxVQUFVLEdBQUc7QUFDVHJDLFFBQUFBLE9BQU8sRUFBRSxPQURBO0FBRVQwQyxRQUFBQSxTQUFTLEVBQUUsWUFGRjtBQUdUWSxRQUFBQTtBQUhTLE9BQWI7QUFLSCxLQWRELE1BY08sSUFBSXpHLE1BQU0sS0FBSyxXQUFmLEVBQTRCO0FBQy9CO0FBQ0F1RixNQUFBQSxZQUFZLEdBQUc7QUFDWHBDLFFBQUFBLE9BQU8sRUFBRSxjQURFO0FBRVgrQyxRQUFBQSxRQUFRLEVBQUUsTUFGQztBQUdYSyxRQUFBQSxRQUFRLEVBQUUsUUFIQztBQUlYN04sUUFBQUEsUUFBUSxFQUFFLFVBSkM7QUFLWG1OLFFBQUFBLFNBQVMsRUFBRSxZQUxBO0FBTVhHLFFBQUFBLE1BQU0sRUFBRTtBQU5HLE9BQWY7QUFRQVIsTUFBQUEsVUFBVSxHQUFHO0FBQ1RLLFFBQUFBLFNBQVMsRUFBRSxZQURGO0FBRVQxQyxRQUFBQSxPQUFPLEVBQUUsT0FGQTtBQUdUK0MsUUFBQUEsUUFBUSxFQUFFO0FBSEQsT0FBYjtBQUtBVCxNQUFBQSxRQUFRLEdBQUksZUFBY3BCLFFBQVMsYUFBWUMsU0FBVSxzREFBekQ7QUFDSCxLQWhCTSxNQWdCQSxJQUFJdEUsTUFBTSxLQUFLLE9BQWYsRUFBd0I7QUFDM0I7QUFDQXVGLE1BQUFBLFlBQVksR0FBRztBQUNYZ0IsUUFBQUEsUUFBUSxFQUFFLFFBREM7QUFFWFYsUUFBQUEsU0FBUyxFQUFFLFlBRkE7QUFHWDFDLFFBQUFBLE9BQU8sRUFBRSxjQUhFO0FBSVh6SyxRQUFBQSxRQUFRLEVBQUUsVUFKQztBQUtYcUgsUUFBQUEsS0FBSyxFQUFFc0UsUUFMSTtBQU1YVixRQUFBQSxNQUFNLEVBQUVXO0FBTkcsT0FBZjtBQVFIO0FBQ0osR0E3Q00sTUE2Q0E7QUFDSDtBQUNBLGNBQTJDO0FBQ3ZDLFlBQU0sSUFBSXpDLEtBQUosQ0FBVyxtQkFBa0JuRCxHQUFJLHlFQUFqQyxDQUFOO0FBQ0g7QUFDSjs7QUFDRCxNQUFJZ0ksYUFBYSxHQUFHO0FBQ2hCaEksSUFBQUEsR0FBRyxFQUFFLGdGQURXO0FBRWhCeUMsSUFBQUEsTUFBTSxFQUFFMUksU0FGUTtBQUdoQndILElBQUFBLEtBQUssRUFBRXhIO0FBSFMsR0FBcEI7O0FBS0EsTUFBSTZNLFNBQUosRUFBZTtBQUNYb0IsSUFBQUEsYUFBYSxHQUFHMUYsZ0JBQWdCLENBQUM7QUFDN0J0QyxNQUFBQSxHQUQ2QjtBQUU3QnVDLE1BQUFBLFdBRjZCO0FBRzdCakIsTUFBQUEsTUFINkI7QUFJN0JELE1BQUFBLEtBQUssRUFBRXNFLFFBSnNCO0FBSzdCbkQsTUFBQUEsT0FBTyxFQUFFcUQsVUFMb0I7QUFNN0J0RSxNQUFBQSxLQU42QjtBQU83QmhCLE1BQUFBO0FBUDZCLEtBQUQsQ0FBaEM7QUFTSDs7QUFDRCxNQUFJMEgsU0FBUyxHQUFHakksR0FBaEI7QUFDQSxTQUFPLGFBQWNoRCxNQUFNLENBQUNGLE9BQVAsQ0FBZW9MLGFBQWYsQ0FBNkIsS0FBN0IsRUFBb0M7QUFDckRuRSxJQUFBQSxLQUFLLEVBQUU4QztBQUQ4QyxHQUFwQyxFQUVsQkMsVUFBVSxHQUFHLGFBQWM5SixNQUFNLENBQUNGLE9BQVAsQ0FBZW9MLGFBQWYsQ0FBNkIsS0FBN0IsRUFBb0M7QUFDOURuRSxJQUFBQSxLQUFLLEVBQUUrQztBQUR1RCxHQUFwQyxFQUUzQkMsUUFBUSxHQUFHLGFBQWMvSixNQUFNLENBQUNGLE9BQVAsQ0FBZW9MLGFBQWYsQ0FBNkIsS0FBN0IsRUFBb0M7QUFDNURuRSxJQUFBQSxLQUFLLEVBQUU7QUFDSHlELE1BQUFBLFFBQVEsRUFBRSxNQURQO0FBRUgvQyxNQUFBQSxPQUFPLEVBQUUsT0FGTjtBQUdINkMsTUFBQUEsTUFBTSxFQUFFLENBSEw7QUFJSEQsTUFBQUEsTUFBTSxFQUFFLE1BSkw7QUFLSEQsTUFBQUEsT0FBTyxFQUFFO0FBTE4sS0FEcUQ7QUFRNURlLElBQUFBLEdBQUcsRUFBRSxFQVJ1RDtBQVM1RCxtQkFBZSxJQVQ2QztBQVU1RG5JLElBQUFBLEdBQUcsRUFBRyw2QkFBNEIsQ0FBQyxHQUFHN0MsU0FBSixFQUFlaUwsUUFBZixDQUF3QnJCLFFBQXhCLENBQWtDO0FBVlIsR0FBcEMsQ0FBakIsR0FXTixJQWJ5QixDQUFqQixHQWFBLElBZlEsRUFlRixhQUFjL0osTUFBTSxDQUFDRixPQUFQLENBQWVvTCxhQUFmLENBQTZCLEtBQTdCLEVBQW9DdkwsTUFBTSxDQUFDMEwsTUFBUCxDQUFjLEVBQWQsRUFDbEUvQyxJQURrRSxFQUM1RDBDLGFBRDRELEVBQzdDO0FBQ3BCTSxJQUFBQSxRQUFRLEVBQUUsT0FEVTtBQUVwQixpQkFBYWhILE1BRk87QUFHcEIwRCxJQUFBQSxTQUFTLEVBQUVBLFNBSFM7QUFJcEJYLElBQUFBLEdBQUcsRUFBR2YsR0FBRCxJQUFPO0FBQ1JpRCxNQUFBQSxNQUFNLENBQUNqRCxHQUFELENBQU47QUFDQUQsTUFBQUEsYUFBYSxDQUFDQyxHQUFELEVBQU0yRSxTQUFOLEVBQWlCM0csTUFBakIsRUFBeUJpQyxXQUF6QixFQUFzQ0MsaUJBQXRDLENBQWI7QUFDSCxLQVBtQjtBQVFwQk8sSUFBQUEsS0FBSyxFQUFFbEcsYUFBYSxDQUFDLEVBQUQsRUFDakJtSixRQURpQixFQUNQVyxTQURPO0FBUkEsR0FENkMsQ0FBcEMsQ0FmWixFQTBCaEIsYUFBYzNLLE1BQU0sQ0FBQ0YsT0FBUCxDQUFlb0wsYUFBZixDQUE2QixVQUE3QixFQUF5QyxJQUF6QyxFQUErQyxhQUFjbEwsTUFBTSxDQUFDRixPQUFQLENBQWVvTCxhQUFmLENBQTZCLEtBQTdCLEVBQW9DdkwsTUFBTSxDQUFDMEwsTUFBUCxDQUFjLEVBQWQsRUFDakgvQyxJQURpSCxFQUMzR2hELGdCQUFnQixDQUFDO0FBQ3RCdEMsSUFBQUEsR0FEc0I7QUFFdEJ1QyxJQUFBQSxXQUZzQjtBQUd0QmpCLElBQUFBLE1BSHNCO0FBSXRCRCxJQUFBQSxLQUFLLEVBQUVzRSxRQUplO0FBS3RCbkQsSUFBQUEsT0FBTyxFQUFFcUQsVUFMYTtBQU10QnRFLElBQUFBLEtBTnNCO0FBT3RCaEIsSUFBQUE7QUFQc0IsR0FBRCxDQUQyRixFQVNoSDtBQUNBK0gsSUFBQUEsUUFBUSxFQUFFLE9BRFY7QUFFQSxpQkFBYWhILE1BRmI7QUFHQXlDLElBQUFBLEtBQUssRUFBRWlELFFBSFA7QUFJQWhDLElBQUFBLFNBQVMsRUFBRUEsU0FKWDtBQUtBblEsSUFBQUEsT0FBTyxFQUFFQSxPQUFPLElBQUk7QUFMcEIsR0FUZ0gsQ0FBcEMsQ0FBN0QsQ0ExQkUsRUF5Q2ZpUSxRQUFRLEdBQUc7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBYzlILEVBQUFBLE1BQU0sQ0FBQ0YsT0FBUCxDQUFlb0wsYUFBZixDQUE2QmhMLEtBQUssQ0FBQ0osT0FBbkMsRUFBNEMsSUFBNUMsRUFBa0QsYUFBY0UsTUFBTSxDQUFDRixPQUFQLENBQWVvTCxhQUFmLENBQTZCLE1BQTdCLEVBQXFDO0FBQy9HMUssSUFBQUEsR0FBRyxFQUFFLFlBQVl3SyxhQUFhLENBQUNoSSxHQUExQixHQUFnQ2dJLGFBQWEsQ0FBQ3ZGLE1BQTlDLEdBQXVEdUYsYUFBYSxDQUFDekcsS0FEcUM7QUFFL0dnSCxJQUFBQSxHQUFHLEVBQUUsU0FGMEc7QUFHL0dDLElBQUFBLEVBQUUsRUFBRSxPQUgyRztBQUkvR0MsSUFBQUEsSUFBSSxFQUFFVCxhQUFhLENBQUN2RixNQUFkLEdBQXVCMUksU0FBdkIsR0FBbUNpTyxhQUFhLENBQUNoSSxHQUp3RDtBQUsvRztBQUNBMEksSUFBQUEsV0FBVyxFQUFFVixhQUFhLENBQUN2RixNQU5vRjtBQU8vRztBQUNBa0csSUFBQUEsVUFBVSxFQUFFWCxhQUFhLENBQUN6RztBQVJxRixHQUFyQyxDQUFoRSxDQUxBLEdBY1IsSUF2RGUsQ0FBckI7QUF3REg7O0FBQ0QsU0FBU3FILFlBQVQsQ0FBc0I1SSxHQUF0QixFQUEyQjtBQUN2QixTQUFPQSxHQUFHLENBQUMsQ0FBRCxDQUFILEtBQVcsR0FBWCxHQUFpQkEsR0FBRyxDQUFDNkksS0FBSixDQUFVLENBQVYsQ0FBakIsR0FBZ0M3SSxHQUF2QztBQUNIOztBQUNELFNBQVNOLFdBQVQsQ0FBcUI7QUFBRXdELEVBQUFBLElBQUY7QUFBU2xELEVBQUFBLEdBQVQ7QUFBZXFCLEVBQUFBLEtBQWY7QUFBdUJtQixFQUFBQTtBQUF2QixDQUFyQixFQUF3RDtBQUNwRDtBQUNBLFFBQU1zRyxHQUFHLEdBQUcsSUFBSUMsR0FBSixDQUFTLEdBQUU3RixJQUFLLEdBQUUwRixZQUFZLENBQUM1SSxHQUFELENBQU0sRUFBcEMsQ0FBWjtBQUNBLFFBQU1nSixNQUFNLEdBQUdGLEdBQUcsQ0FBQ0csWUFBbkI7QUFDQUQsRUFBQUEsTUFBTSxDQUFDRSxHQUFQLENBQVcsTUFBWCxFQUFtQkYsTUFBTSxDQUFDL0YsR0FBUCxDQUFXLE1BQVgsS0FBc0IsUUFBekM7QUFDQStGLEVBQUFBLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLEtBQVgsRUFBa0JGLE1BQU0sQ0FBQy9GLEdBQVAsQ0FBVyxLQUFYLEtBQXFCLEtBQXZDO0FBQ0ErRixFQUFBQSxNQUFNLENBQUNFLEdBQVAsQ0FBVyxHQUFYLEVBQWdCRixNQUFNLENBQUMvRixHQUFQLENBQVcsR0FBWCxLQUFtQjVCLEtBQUssQ0FBQ2lGLFFBQU4sRUFBbkM7O0FBQ0EsTUFBSTlELE9BQUosRUFBYTtBQUNUd0csSUFBQUEsTUFBTSxDQUFDRSxHQUFQLENBQVcsR0FBWCxFQUFnQjFHLE9BQU8sQ0FBQzhELFFBQVIsRUFBaEI7QUFDSDs7QUFDRCxTQUFPd0MsR0FBRyxDQUFDTCxJQUFYO0FBQ0g7O0FBQ0QsU0FBUzdJLFlBQVQsQ0FBc0I7QUFBRXNELEVBQUFBLElBQUY7QUFBU2xELEVBQUFBLEdBQVQ7QUFBZXFCLEVBQUFBO0FBQWYsQ0FBdEIsRUFBK0M7QUFDM0MsU0FBUSxHQUFFNkIsSUFBSyxHQUFFMEYsWUFBWSxDQUFDNUksR0FBRCxDQUFNLFlBQVdxQixLQUFNLEVBQXBEO0FBQ0g7O0FBQ0QsU0FBUzFCLGdCQUFULENBQTBCO0FBQUV1RCxFQUFBQSxJQUFGO0FBQVNsRCxFQUFBQSxHQUFUO0FBQWVxQixFQUFBQSxLQUFmO0FBQXVCbUIsRUFBQUE7QUFBdkIsQ0FBMUIsRUFBNkQ7QUFDekQ7QUFDQSxRQUFNd0csTUFBTSxHQUFHLENBQ1gsUUFEVyxFQUVYLFNBRlcsRUFHWCxPQUFPM0gsS0FISSxFQUlYLFFBQVFtQixPQUFPLElBQUksTUFBbkIsQ0FKVyxDQUFmO0FBTUEsTUFBSTJHLFlBQVksR0FBR0gsTUFBTSxDQUFDckcsSUFBUCxDQUFZLEdBQVosSUFBbUIsR0FBdEM7QUFDQSxTQUFRLEdBQUVPLElBQUssR0FBRWlHLFlBQWEsR0FBRVAsWUFBWSxDQUFDNUksR0FBRCxDQUFNLEVBQWxEO0FBQ0g7O0FBQ0QsU0FBU0gsWUFBVCxDQUFzQjtBQUFFRyxFQUFBQTtBQUFGLENBQXRCLEVBQWdDO0FBQzVCLFFBQU0sSUFBSW1ELEtBQUosQ0FBVyxtQkFBa0JuRCxHQUFJLDZCQUF2QixHQUF1RCx5RUFBakUsQ0FBTjtBQUNIOztBQUNELFNBQVNQLGFBQVQsQ0FBdUI7QUFBRXlELEVBQUFBLElBQUY7QUFBU2xELEVBQUFBLEdBQVQ7QUFBZXFCLEVBQUFBLEtBQWY7QUFBdUJtQixFQUFBQTtBQUF2QixDQUF2QixFQUEwRDtBQUN0RCxZQUEyQztBQUN2QyxVQUFNNEcsYUFBYSxHQUFHLEVBQXRCLENBRHVDLENBRXZDOztBQUNBLFFBQUksQ0FBQ3BKLEdBQUwsRUFBVW9KLGFBQWEsQ0FBQ3pILElBQWQsQ0FBbUIsS0FBbkI7QUFDVixRQUFJLENBQUNOLEtBQUwsRUFBWStILGFBQWEsQ0FBQ3pILElBQWQsQ0FBbUIsT0FBbkI7O0FBQ1osUUFBSXlILGFBQWEsQ0FBQzFULE1BQWQsR0FBdUIsQ0FBM0IsRUFBOEI7QUFDMUIsWUFBTSxJQUFJeU4sS0FBSixDQUFXLG9DQUFtQ2lHLGFBQWEsQ0FBQ3pHLElBQWQsQ0FBbUIsSUFBbkIsQ0FBeUIsZ0dBQStGOEMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDdkwxRixRQUFBQSxHQUR1TDtBQUV2THFCLFFBQUFBLEtBRnVMO0FBR3ZMbUIsUUFBQUE7QUFIdUwsT0FBZixDQUl6SyxFQUpHLENBQU47QUFLSDs7QUFDRCxRQUFJeEMsR0FBRyxDQUFDMEQsVUFBSixDQUFlLElBQWYsQ0FBSixFQUEwQjtBQUN0QixZQUFNLElBQUlQLEtBQUosQ0FBVyx3QkFBdUJuRCxHQUFJLDBHQUF0QyxDQUFOO0FBQ0g7O0FBQ0QsUUFBSSxDQUFDQSxHQUFHLENBQUMwRCxVQUFKLENBQWUsR0FBZixDQUFELElBQXdCOUMsYUFBNUIsRUFBMkM7QUFDdkMsVUFBSXlJLFNBQUo7O0FBQ0EsVUFBSTtBQUNBQSxRQUFBQSxTQUFTLEdBQUcsSUFBSU4sR0FBSixDQUFRL0ksR0FBUixDQUFaO0FBQ0gsT0FGRCxDQUVFLE9BQU9zSixHQUFQLEVBQVk7QUFDVnRYLFFBQUFBLE9BQU8sQ0FBQzhCLEtBQVIsQ0FBY3dWLEdBQWQ7QUFDQSxjQUFNLElBQUluRyxLQUFKLENBQVcsd0JBQXVCbkQsR0FBSSxpSUFBdEMsQ0FBTjtBQUNIOztBQUNELFVBQUksU0FBbUMsQ0FBQ1ksYUFBYSxDQUFDb0YsUUFBZCxDQUF1QnFELFNBQVMsQ0FBQ0UsUUFBakMsQ0FBeEMsRUFBb0Y7QUFDaEYsY0FBTSxJQUFJcEcsS0FBSixDQUFXLHFCQUFvQm5ELEdBQUksa0NBQWlDcUosU0FBUyxDQUFDRSxRQUFTLCtEQUE3RSxHQUErSSw4RUFBekosQ0FBTjtBQUNIO0FBQ0o7QUFDSjs7QUFDRCxTQUFRLEdBQUVyRyxJQUFLLFFBQU9zRyxrQkFBa0IsQ0FBQ3hKLEdBQUQsQ0FBTSxNQUFLcUIsS0FBTSxNQUFLbUIsT0FBTyxJQUFJLEVBQUcsRUFBNUU7QUFDSDs7Ozs7Ozs7Ozs7QUNobUJZOztBQUNiN0YsOENBQTZDO0FBQ3pDakssRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FtSywyQkFBQSxHQUE4QkEsMEJBQUEsR0FBNkIsS0FBSyxDQUFoRTs7QUFDQSxNQUFNNE0sbUJBQW1CLEdBQUcsT0FBT0UsSUFBUCxLQUFnQixXQUFoQixJQUErQkEsSUFBSSxDQUFDRixtQkFBcEMsSUFBMkRFLElBQUksQ0FBQ0YsbUJBQUwsQ0FBeUJHLElBQXpCLENBQThCQyxNQUE5QixDQUEzRCxJQUFvRyxVQUFTQyxFQUFULEVBQWE7QUFDekksTUFBSUMsS0FBSyxHQUFHQyxJQUFJLENBQUNsWSxHQUFMLEVBQVo7QUFDQSxTQUFPSCxVQUFVLENBQUMsWUFBVztBQUN6Qm1ZLElBQUFBLEVBQUUsQ0FBQztBQUNDRyxNQUFBQSxVQUFVLEVBQUUsS0FEYjtBQUVDQyxNQUFBQSxhQUFhLEVBQUUsWUFBVztBQUN0QixlQUFPcEksSUFBSSxDQUFDcUksR0FBTCxDQUFTLENBQVQsRUFBWSxNQUFNSCxJQUFJLENBQUNsWSxHQUFMLEtBQWFpWSxLQUFuQixDQUFaLENBQVA7QUFDSDtBQUpGLEtBQUQsQ0FBRjtBQU1ILEdBUGdCLEVBT2QsQ0FQYyxDQUFqQjtBQVFILENBVkQ7O0FBV0FsTiwyQkFBQSxHQUE4QjRNLG1CQUE5Qjs7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxPQUFPQyxJQUFQLEtBQWdCLFdBQWhCLElBQStCQSxJQUFJLENBQUNELGtCQUFwQyxJQUEwREMsSUFBSSxDQUFDRCxrQkFBTCxDQUF3QkUsSUFBeEIsQ0FBNkJDLE1BQTdCLENBQTFELElBQWtHLFVBQVNwVyxFQUFULEVBQWE7QUFDdEksU0FBTzJXLFlBQVksQ0FBQzNXLEVBQUQsQ0FBbkI7QUFDSCxDQUZEOztBQUdBb0osMEJBQUEsR0FBNkI2TSxrQkFBN0I7Ozs7Ozs7Ozs7O0FDcEJhOztBQUNiL00sOENBQTZDO0FBQ3pDakssRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FtSyx1QkFBQSxHQUEwQjRKLGVBQTFCOztBQUNBLElBQUl6SixNQUFNLEdBQUduTCxtQkFBTyxDQUFDLG9CQUFELENBQXBCOztBQUNBLElBQUl3WSxvQkFBb0IsR0FBR3hZLG1CQUFPLENBQUMseUZBQUQsQ0FBbEM7O0FBQ0EsTUFBTXlZLHVCQUF1QixHQUFHLE9BQU9DLG9CQUFQLEtBQWdDLFdBQWhFOztBQUNBLFNBQVM5RCxlQUFULENBQXlCO0FBQUVDLEVBQUFBLFVBQUY7QUFBZUMsRUFBQUE7QUFBZixDQUF6QixFQUFxRDtBQUNqRCxRQUFNNkQsVUFBVSxHQUFHN0QsUUFBUSxJQUFJLENBQUMyRCx1QkFBaEM7QUFDQSxRQUFNRyxTQUFTLEdBQUcsQ0FBQyxHQUFHek4sTUFBSixFQUFZME4sTUFBWixFQUFsQjtBQUNBLFFBQU0sQ0FBQ0MsT0FBRCxFQUFVQyxVQUFWLElBQXdCLENBQUMsR0FBRzVOLE1BQUosRUFBWW5NLFFBQVosQ0FBcUIsS0FBckIsQ0FBOUI7QUFDQSxRQUFNMFYsTUFBTSxHQUFHLENBQUMsR0FBR3ZKLE1BQUosRUFBWTZOLFdBQVosQ0FBeUJDLEVBQUQsSUFBTTtBQUN6QyxRQUFJTCxTQUFTLENBQUNNLE9BQWQsRUFBdUI7QUFDbkJOLE1BQUFBLFNBQVMsQ0FBQ00sT0FBVjtBQUNBTixNQUFBQSxTQUFTLENBQUNNLE9BQVYsR0FBb0JoUixTQUFwQjtBQUNIOztBQUNELFFBQUl5USxVQUFVLElBQUlHLE9BQWxCLEVBQTJCOztBQUMzQixRQUFJRyxFQUFFLElBQUlBLEVBQUUsQ0FBQ0UsT0FBYixFQUFzQjtBQUNsQlAsTUFBQUEsU0FBUyxDQUFDTSxPQUFWLEdBQW9CRSxPQUFPLENBQUNILEVBQUQsRUFBTWxFLFNBQUQsSUFBYUEsU0FBUyxJQUFJZ0UsVUFBVSxDQUFDaEUsU0FBRCxDQUF6QyxFQUN6QjtBQUNFRixRQUFBQTtBQURGLE9BRHlCLENBQTNCO0FBSUg7QUFDSixHQVpjLEVBWVosQ0FDQzhELFVBREQsRUFFQzlELFVBRkQsRUFHQ2lFLE9BSEQsQ0FaWSxDQUFmO0FBaUJBLEdBQUMsR0FBRzNOLE1BQUosRUFBWXBNLFNBQVosQ0FBc0IsTUFBSTtBQUN0QixRQUFJLENBQUMwWix1QkFBTCxFQUE4QjtBQUMxQixVQUFJLENBQUNLLE9BQUwsRUFBYztBQUNWLGNBQU1PLFlBQVksR0FBRyxDQUFDLEdBQUdiLG9CQUFKLEVBQTBCWixtQkFBMUIsQ0FBOEMsTUFBSW1CLFVBQVUsQ0FBQyxJQUFELENBQTVELENBQXJCO0FBRUEsZUFBTyxNQUFJLENBQUMsR0FBR1Asb0JBQUosRUFBMEJYLGtCQUExQixDQUE2Q3dCLFlBQTdDLENBQVg7QUFFSDtBQUNKO0FBQ0osR0FURCxFQVNHLENBQ0NQLE9BREQsQ0FUSDtBQVlBLFNBQU8sQ0FDSHBFLE1BREcsRUFFSG9FLE9BRkcsQ0FBUDtBQUlIOztBQUNELFNBQVNNLE9BQVQsQ0FBaUJFLE9BQWpCLEVBQTBCQyxRQUExQixFQUFvQ0MsT0FBcEMsRUFBNkM7QUFDekMsUUFBTTtBQUFFNVgsSUFBQUEsRUFBRjtBQUFPNlgsSUFBQUEsUUFBUDtBQUFrQkMsSUFBQUE7QUFBbEIsTUFBZ0NDLGNBQWMsQ0FBQ0gsT0FBRCxDQUFwRDtBQUNBRSxFQUFBQSxRQUFRLENBQUNyQyxHQUFULENBQWFpQyxPQUFiLEVBQXNCQyxRQUF0QjtBQUNBRSxFQUFBQSxRQUFRLENBQUNMLE9BQVQsQ0FBaUJFLE9BQWpCO0FBQ0EsU0FBTyxTQUFTVixTQUFULEdBQXFCO0FBQ3hCYyxJQUFBQSxRQUFRLENBQUNFLE1BQVQsQ0FBZ0JOLE9BQWhCO0FBQ0FHLElBQUFBLFFBQVEsQ0FBQ2IsU0FBVCxDQUFtQlUsT0FBbkIsRUFGd0IsQ0FHeEI7O0FBQ0EsUUFBSUksUUFBUSxDQUFDRyxJQUFULEtBQWtCLENBQXRCLEVBQXlCO0FBQ3JCSixNQUFBQSxRQUFRLENBQUNLLFVBQVQ7QUFDQUMsTUFBQUEsU0FBUyxDQUFDSCxNQUFWLENBQWlCaFksRUFBakI7QUFDSDtBQUNKLEdBUkQ7QUFTSDs7QUFDRCxNQUFNbVksU0FBUyxHQUFHLElBQUlwTSxHQUFKLEVBQWxCOztBQUNBLFNBQVNnTSxjQUFULENBQXdCSCxPQUF4QixFQUFpQztBQUM3QixRQUFNNVgsRUFBRSxHQUFHNFgsT0FBTyxDQUFDM0UsVUFBUixJQUFzQixFQUFqQztBQUNBLE1BQUltRixRQUFRLEdBQUdELFNBQVMsQ0FBQzNJLEdBQVYsQ0FBY3hQLEVBQWQsQ0FBZjs7QUFDQSxNQUFJb1ksUUFBSixFQUFjO0FBQ1YsV0FBT0EsUUFBUDtBQUNIOztBQUNELFFBQU1OLFFBQVEsR0FBRyxJQUFJL0wsR0FBSixFQUFqQjtBQUNBLFFBQU04TCxRQUFRLEdBQUcsSUFBSWYsb0JBQUosQ0FBMEJ1QixPQUFELElBQVc7QUFDakRBLElBQUFBLE9BQU8sQ0FBQ3ROLE9BQVIsQ0FBaUJ1TixLQUFELElBQVM7QUFDckIsWUFBTVgsUUFBUSxHQUFHRyxRQUFRLENBQUN0SSxHQUFULENBQWE4SSxLQUFLLENBQUNwWSxNQUFuQixDQUFqQjtBQUNBLFlBQU1pVCxTQUFTLEdBQUdtRixLQUFLLENBQUNDLGNBQU4sSUFBd0JELEtBQUssQ0FBQ0UsaUJBQU4sR0FBMEIsQ0FBcEU7O0FBQ0EsVUFBSWIsUUFBUSxJQUFJeEUsU0FBaEIsRUFBMkI7QUFDdkJ3RSxRQUFBQSxRQUFRLENBQUN4RSxTQUFELENBQVI7QUFDSDtBQUNKLEtBTkQ7QUFPSCxHQVJnQixFQVFkeUUsT0FSYyxDQUFqQjtBQVNBTyxFQUFBQSxTQUFTLENBQUMxQyxHQUFWLENBQWN6VixFQUFkLEVBQWtCb1ksUUFBUSxHQUFHO0FBQ3pCcFksSUFBQUEsRUFEeUI7QUFFekI2WCxJQUFBQSxRQUZ5QjtBQUd6QkMsSUFBQUE7QUFIeUIsR0FBN0I7QUFLQSxTQUFPTSxRQUFQO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBSUEsTUFBTUssS0FBZSxHQUFHLE1BQU07QUFDN0Isc0JBQ0M7QUFBSyxhQUFTLEVBQUUxYiwwRUFBaEI7QUFBQSw0QkFDQyw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBRUMsOERBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRCxlQUdDLDhEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQ7QUFPQSxDQVJEOztBQVVBLGlFQUFlMGIsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFHTyxNQUFNcFUsZUFBZSxHQUFHNEUsK0NBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVJPOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0hQO0FBR08sTUFBTWpJLGdCQUFnQixHQUFHaUksK0NBQUs7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVJPOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0hQO0FBRUEsTUFBTTFMLFdBQVcsZ0JBQUdULDBEQUFBLENBQW9CLElBQXBCLENBQXBCO0FBR0EsaUVBQWVTLFdBQWY7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkEsMkdBQStDOzs7Ozs7Ozs7Ozs7QUNBL0M7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OZXh0Ly4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLnRzeCIsIndlYnBhY2s6Ly9OZXh0Ly4vY29tcG9uZW50cy9NYWluLnRzeCIsIndlYnBhY2s6Ly9OZXh0Ly4vY29tcG9uZW50cy9OYXZiYXIvSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly9OZXh0Ly4vY29tcG9uZW50cy9Qcm9kdWN0cy50c3giLCJ3ZWJwYWNrOi8vTmV4dC8uL2NvbXBvbmVudHMvVUkvT3JkZXIudHN4Iiwid2VicGFjazovL05leHQvLi9jb21wb25lbnRzL1VJL1RhYnMudHN4Iiwid2VicGFjazovL05leHQvLi9ob29rcy91c2VHZW9sb2NhdGlvbi50cyIsIndlYnBhY2s6Ly9OZXh0Ly4vaG9va3MvdXNlSWRlbnRpZmljYXRpb25DYXJkLnRzIiwid2VicGFjazovL05leHQvLi9ob29rcy91c2VJbnB1dC50cyIsIndlYnBhY2s6Ly9OZXh0Ly4vaG9va3MvdXNlVmFsaWRhdGlvbi50cyIsIndlYnBhY2s6Ly9OZXh0Ly4vbXV0YXRpb25zL29yZGVyLnRzIiwid2VicGFjazovL05leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9OZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL05leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL05leHQvLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vTmV4dC8uL3F1ZXJ5L29yZGVyLnRzIiwid2VicGFjazovL05leHQvLi9xdWVyeS9wcm9kdWN0LnRzIiwid2VicGFjazovL05leHQvLi9zaGFyZWQvY29udGV4dC50cyIsIndlYnBhY2s6Ly9OZXh0Ly4vc3R5bGVzL0Zvb3Rlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9OZXh0Ly4vc3R5bGVzL0hlYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9OZXh0Ly4vc3R5bGVzL01haW4ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vTmV4dC8uL3N0eWxlcy9PcmRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9OZXh0Ly4vc3R5bGVzL1Byb2R1Y3RzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL05leHQvLi9zdHlsZXMvaW5kZXgubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vTmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovL05leHQvZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovL05leHQvZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIiIsIndlYnBhY2s6Ly9OZXh0L2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIiLCJ3ZWJwYWNrOi8vTmV4dC9leHRlcm5hbCBcImVtYWlsanMtY29tXCIiLCJ3ZWJwYWNrOi8vTmV4dC9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovL05leHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL05leHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vTmV4dC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9OZXh0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9OZXh0L2V4dGVybmFsIFwicmVhY3QtaW5wdXQtbWFza1wiIiwid2VicGFjazovL05leHQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0Zvb3Rlci5tb2R1bGUuc2NzcydcclxuXHJcbmNvbnN0IEZvb3RlcjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuXHRcdFx0XHJcblx0XHQ8L2Zvb3Rlcj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvTWFpbi5tb2R1bGUuc2NzcydcclxuaW1wb3J0IFByb2R1Y3RzIGZyb20gJy4vUHJvZHVjdHMnXHJcbmltcG9ydCBUYWJzIGZyb20gJy4vVUkvVGFicydcclxuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tIFwiLi4vdHlwZXMvSVByb2R1Y3RcIjtcclxuaW1wb3J0IHNlbnRDb250ZXh0IGZyb20gJy4uL3NoYXJlZC9jb250ZXh0JztcclxuaW1wb3J0IGVtYWlsanMgZnJvbSAnZW1haWxqcy1jb20nO1xyXG5pbXBvcnQgT3JkZXIgZnJvbSAnLi9VSS9PcmRlcic7XHJcbmltcG9ydCB7IHVzZUdlb2xvY2F0aW9uIH0gZnJvbSAnLi4vaG9va3MvdXNlR2VvbG9jYXRpb24nO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgQ1JFQVRFX09SREVSIH0gZnJvbSAnLi4vbXV0YXRpb25zL29yZGVyJztcclxuaW1wb3J0IHsgY3JlYXRlUm91dGVMb2FkZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlcic7XHJcblxyXG5cclxuY29uc3QgTWFpbjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcblxyXG5cdGNvbnN0IHtzdGF0ZSwgc2V0U3RhdGV9ID0gdXNlQ29udGV4dChzZW50Q29udGV4dCk7XHJcblx0Y29uc3QgW25ld09yZGVyXSA9IHVzZU11dGF0aW9uKENSRUFURV9PUkRFUik7XHJcblx0Y29uc3QgW29yZGVyLCBzZXRPcmRlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHRcclxuXHRcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYoc3RhdGUgPT0gdHJ1ZSkge1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHNldFN0YXRlKGZhbHNlKSwgMTAwMDApXHJcblx0XHR9XHJcblx0fSwgW3N0YXRlXSlcclxuXHJcblx0Y29uc3QgbW9tZW50ID0gcmVxdWlyZSgnbW9tZW50Jyk7XHJcblxyXG5cdGNvbnN0IG5vdyA9IG1vbWVudCgpO1xyXG5cclxuXHRub3cuc3VidHJhY3QoJ3NlY29uZHMnLCA3KTsgLy8gdGFrZXMgNyBzZWNvbmRzIG9mIHRoZSBjdXJyZW50IHRpbWVcclxuXHRjb25zb2xlLmxvZyhub3cuc3VidHJhY3QoJ2RheXMnLCA3KSk7ICAgIC8vIHRha2VzIDcgZGF5cyBvZiB0aGUgY3VycmVudCBkYXRlXHJcblx0bm93LnN1YnRyYWN0KCdtb250aHMnLCA3KTsgIC8vIHRha2VzIDcgbW9udGhzIG9mIHRoZSBjdXJyZW50IGRhdGVcclxuXHRub3cuc3VidHJhY3QoJ3llYXJzJywgNyk7IFxyXG5cclxuXHJcblxyXG5cdFxyXG5cclxuXHRmdW5jdGlvbiBzZW5kRW1haWwoZSkge1xyXG5cdFx0XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJyk7XHJcblx0XHRjb25zdCBmdWxsX25hbWUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwibmFtZVwiXScpLnZhbHVlXHJcblx0XHRjb25zdCBlbWFpbCA9IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJlbWFpbFwiXScpLnZhbHVlXHJcblx0XHRjb25zdCBwaG9uZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJwaG9uZVwiXScpLnZhbHVlXHJcblx0XHRjb25zdCBzdHJlZXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwic3RyZWV0XCJdJykudmFsdWVcclxuXHRcdGNvbnN0IGFwdCA9IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJuYW1lXCJdJykudmFsdWVcclxuXHRcdGNvbnN0IGNpdHkgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiY2l0eVwiXScpLnZhbHVlXHJcblx0XHRjb25zdCB6aXAgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiemlwXCJdJykudmFsdWVcclxuXHRcdGNvbnN0IGNhcmRfbnVtYmVyID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImNhcmRfbnVtYmVyXCJdJykudmFsdWVcclxuXHRcdGNvbnN0IGV4cGlyZV9kYXRlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImV4cGlyZV9kYXRlXCJdJykudmFsdWVcclxuXHRcdGNvbnN0IHNlY3VyaXR5X2NvZGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwic2VjdXJpdHlfY29kZVwiXScpLnZhbHVlXHJcblx0XHRcclxuXHRcdG5ld09yZGVyKHtcclxuXHRcdFx0dmFyaWFibGVzOiB7XHJcblx0XHRcdFx0aW5wdXQ6IHtcclxuXHRcdFx0XHRcdGZ1bGxfbmFtZSwgZW1haWwsIHBob25lLCBzdHJlZXQsIGFwdCwgY2l0eSwgemlwLCBjYXJkX251bWJlciwgZXhwaXJlX2RhdGUsIHNlY3VyaXR5X2NvZGVcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pLnRoZW4oKHtkYXRhfSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhkYXRhLmNyZWF0ZU9yZGVyKVxyXG5cdFx0XHRzZXRPcmRlcihkYXRhLmNyZWF0ZU9yZGVyLmlkKVx0XHJcblx0XHR9KVxyXG5cdFx0c2V0U3RhdGUodHJ1ZSlcclxuXHRcdGVtYWlsanMuc2VuZEZvcm0oJ3NlcnZpY2Vfb3dvbW9ldScsICd0ZW1wbGF0ZV94OXRpMnR2JywgZS50YXJnZXQsICd1c2VyX0NEcVBPTzc5MkpXUmljR09qMndXbicpXHJcblx0XHQgIC50aGVuKChyZXN1bHQpID0+IHsgXHJcblx0XHRcdCAgY29uc29sZS5sb2cocmVzdWx0LnRleHQpO1xyXG5cclxuXHRcdCAgfSwgKGVycm9yKSA9PiB7XHJcblx0XHRcdCAgY29uc29sZS5sb2coZXJyb3IudGV4dCk7XHJcblx0XHQgIH0pO1xyXG5cdFx0ICBlLnRhcmdldC5yZXNldDtcclxuXHRcdCBcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PG1haW4gY2xhc3NOYW1lPXtzdHlsZXMucGFnZX0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZV9fbWFpbiArIFwiIFwiICsgc3R5bGVzLm1haW59PlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbl9fY29udGFpbmVyICsgXCIgXCIgKyBzdHlsZXMuX2NvbnRhaW5lcn0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5fX2JvZHl9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5fX2JvZHlfX2NvbnRhaW5lcn0+XHJcblxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PGZvcm0gaWQ9XCJmb3JtXCIgY2xhc3NOYW1lPXtzdHlsZXMubWFpbl9fZm9ybX0gb25TdWJtaXQ9e3NlbmRFbWFpbH0+XHJcblx0XHRcdFx0XHRcdFx0eyFzdGF0ZSA/IDxUYWJzLz4gOiA8T3JkZXIgb3JkZXI9e29yZGVyfS8+fVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdFx0XHRcdDxQcm9kdWN0cy8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9tYWluPlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9IZWFkZXIubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJy4uLy4uL3R5cGVzL0lQcm9kdWN0JztcclxuaW1wb3J0IHsgR0VUX0FMTF9QUk9EVUNUUyB9IGZyb20gJy4uLy4uL3F1ZXJ5L3Byb2R1Y3QnO1xyXG5cclxuXHJcblxyXG5jb25zdCBIZWFkZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG5cclxuXHRjb25zdCBbc2VsZWN0ZWRQcm9kdWN0cywgc2V0U2VsZWN0ZWRQcm9kdWN0c10gPSB1c2VTdGF0ZTxJUHJvZHVjdFtdPihbXSlcclxuXHRjb25zdCB7ZGF0YSwgbG9hZGluZywgZXJyb3IsIHJlZmV0Y2h9ID0gdXNlUXVlcnkoR0VUX0FMTF9QUk9EVUNUUywge3BvbGxJbnRlcnZhbDogNTAwfSk7XHJcblx0XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAoIWxvYWRpbmcpIHtcclxuXHRcdFx0c2V0U2VsZWN0ZWRQcm9kdWN0cyhkYXRhLmdldEFsbFByb2R1Y3RzKVxyXG5cdFx0fVx0XHJcblx0fSwgW2RhdGFdKVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fY29udGFpbmVyICsgXCIgXCIgKyBzdHlsZXMuX2NvbnRhaW5lcn0gPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX19sb2dvfT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX19sb2dvX2ljb259PlxyXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz0nLi4vLi4vbG9nby5wbmcnIGFsdD1cIlwiLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9IHtzdHlsZXMuaGVhZGVyX19sb2dvX3RleHR9PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX19idXNrZXR9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX19idXNrZXRfdGV4dH0+XHJcblx0XHRcdFx0XHRjYXJ0XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfX2J1c2tldF9pY29ufT5cclxuXHRcdFx0XHRcdDxpbWcgc3JjPScuLi8uLi9iYXNrZXQucG5nJyBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfX2J1c2tldF9jb3VudH0+e3NlbGVjdGVkUHJvZHVjdHMgPyBzZWxlY3RlZFByb2R1Y3RzLmxlbmd0aCA6ICcwJ308L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cdFxyXG5cdFx0PC9oZWFkZXI+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvUHJvZHVjdHMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IElQcm9kdWN0IH0gZnJvbSAnLi4vdHlwZXMvSVByb2R1Y3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgeyBHRVRfQUxMX1BST0RVQ1RTIH0gZnJvbSAnLi4vcXVlcnkvcHJvZHVjdCc7XHJcblxyXG5cclxuXHJcbmNvbnN0IFByb2R1Y3RzOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuXHJcblx0Y29uc3QgW3NlbGVjdGVkUHJvZHVjdHMsIHNldFNlbGVjdGVkUHJvZHVjdHNdID0gdXNlU3RhdGU8SVByb2R1Y3RbXT4oW10pXHJcblx0Y29uc3Qge2RhdGEsIGxvYWRpbmcsIGVycm9yLCByZWZldGNofSA9IHVzZVF1ZXJ5KEdFVF9BTExfUFJPRFVDVFMsIHtwb2xsSW50ZXJ2YWw6IDUwMH0pO1xyXG5cdFxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKCFsb2FkaW5nKSB7XHJcblx0XHRcdHNldFNlbGVjdGVkUHJvZHVjdHMoZGF0YS5nZXRBbGxQcm9kdWN0cylcclxuXHRcdH1cdFxyXG5cdH0sIFtkYXRhXSlcclxuXHRcclxuXHRpZiAobG9hZGluZykge1xyXG5cdFx0cmV0dXJuIDxoMT5Mb2FkaW5nLi4uPC9oMT5cclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluX19wcm9kdWN0c30+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdHNfX3RleHR9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdHNfX3RleHRfdGl0bGV9PlxyXG5cdFx0XHRcdFx0T3JkZXIgc3VtbWFyeVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxhIGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RzX190ZXh0X2VkaXR9PlxyXG5cdFx0XHRcdFx0ZWRpdCBvcmRlclxyXG5cdFx0XHRcdDwvYT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDx1bCBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0c19faXRlbXN9PlxyXG5cdFx0XHRcdHshbG9hZGluZyAmJiAgc2VsZWN0ZWRQcm9kdWN0cy5tYXAocHJvZHVjdCA9PiBcclxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0c19fcHJvZHVjdH0ga2V5PXtwcm9kdWN0LmlkfT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0X19pbWFnZX0+XHJcblx0XHRcdFx0XHRcdFx0PEltYWdlIHNyYz0gJy8uLi9wdWJsaWMvc3Vta2EucG5nJyB3aWR0aD17NDV9IGhlaWdodD17NDV9IGFsdD1cIlwiLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdF9fY29udGVudH0+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0X19jb250ZW50X25hbWV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0e3Byb2R1Y3QubmFtZX1cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RfX2NvbnRlbnRfZGVzY3JpcHRpb259PlxyXG5cdFx0XHRcdFx0XHRcdFx0e3Byb2R1Y3QuZGVzY3JpcHRpb259XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0X19jb250ZW50X3F1YW50aXR5fT5cclxuXHRcdFx0XHRcdFx0XHRcdFF1YW50aXR5OiAxXHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdF9fcHJpY2V9PlxyXG5cdFx0XHRcdFx0XHRcdFx0JHtwcm9kdWN0LnByaWNlfVxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8L2xpPlxyXG5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdHNfX2Nvc3R9PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3N0X19zdWJ0b3RhbH0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VidG90YWxfX3RleHR9PlxyXG5cdFx0XHRcdFx0XHRcdFN1YnRvdGFsXHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1YnRvdGFsX19jb3VudH0+XHJcblx0XHRcdFx0XHRcdFx0JHshbG9hZGluZyAmJiBzZWxlY3RlZFByb2R1Y3RzLnJlZHVjZSgoYWNjLCBjdXIpID0+IHsgcmV0dXJuIGFjYyArIGN1ci5wcmljZSB9LCAwKX1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29zdF9fc2hpcHBpbmd9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNoaXBwaW5nX190ZXh0fT5cclxuXHRcdFx0XHRcdFx0XHRTaGlwcGluZ1xyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaGlwcGluZ19fY291bnR9PlxyXG5cdFx0XHRcdFx0XHRcdEZyZWVcclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29zdF9fdGF4ZXN9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRheGVzX190ZXh0fT5cclxuXHRcdFx0XHRcdFx0XHRUYXhlc1xyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YXhlc19fY291bnR9PlxyXG5cdFx0XHRcdFx0XHRcdHshbG9hZGluZyAmJiBzZWxlY3RlZFByb2R1Y3RzLnJlZHVjZSgoYWNjLCBjdXIpID0+IGFjYyArIGN1ci5wcmljZSwgMCkqMC4wM31cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29zdF9fdG90YWx9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvdGFsX190ZXh0fT5cclxuXHRcdFx0XHRcdFx0XHRUb3RhbFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3RhbF9fY291bnR9PlxyXG5cdFx0XHRcdFx0XHRcdCR7IWxvYWRpbmcgJiYgc2VsZWN0ZWRQcm9kdWN0cy5yZWR1Y2UoKGFjYywgY3VyKSA9PiBhY2MgKyBjdXIucHJpY2UsIDApICsgc2VsZWN0ZWRQcm9kdWN0cy5yZWR1Y2UoKGFjYywgY3VyKSA9PiBhY2MgKyBjdXIucHJpY2UsIDApKjAuMDN9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0c19faW5mb3JtYXRpb259PlxyXG5cdFx0XHRcdFx0QWxsIHB1cmNoYXNlcyBhcmUgc3ViamVjdCB0byBvdXIgVGVybXMgYW5kIENvbmRpdGlvbnMuXHJcblx0XHRcdFx0PC9mb290ZXI+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvT3JkZXIubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgeyBHRVRfT1JERVJfQllfSUQgfSBmcm9tICcuLi8uLi9xdWVyeS9vcmRlcic7XHJcblxyXG5pbnRlcmZhY2UgT3JkZXJTdGF0ZSB7XHJcblx0b3JkZXI6IG51bWJlcjtcclxuXHQvLyBpZDogbnVtYmVyO1xyXG5cdC8vIGZ1bGxfbmFtZTogc3RyaW5nO1xyXG4gICAgLy8gcGhvbmU6IHN0cmluZztcclxuICAgIC8vIGVtYWlsOiBzdHJpbmc7XHJcbiAgICAvLyBjaXR5OiBzdHJpbmc7XHJcblx0Ly8gZGF0YTogT2JqZWN0XHJcblx0Ly8gc3RyZWV0OiBzdHJpbmc7XHJcbiAgICAvLyBhcHQ6IHN0cmluZztcclxuXHQvLyB6aXA6IHN0cmluZztcclxuXHQvLyBjYXJkX251bWJlcjogc3RyaW5nO1xyXG5cdC8vIGV4cGlyZV9kYXRlOiBzdHJpbmc7XHJcblx0Ly8gc2VjdXJpdHlfY29kZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBPcmRlcjogUmVhY3QuRkM8T3JkZXJTdGF0ZT4gPSAoe29yZGVyfSkgPT4ge1xyXG5cclxuXHRcclxuXHRjb25zdCBbc2VsZWN0ZWRPcmRlciwgc2V0U2VsZWN0ZWRPcmRlcl0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnNvbGUubG9nKG9yZGVyKVxyXG5cdGNvbnN0IHtkYXRhLCBsb2FkaW5nLCBlcnJvciwgcmVmZXRjaH0gPSB1c2VRdWVyeShHRVRfT1JERVJfQllfSUQsIHtcclxuXHRcdHZhcmlhYmxlczoge1xyXG5cdFx0XHRvcmRlclxyXG5cdFx0fSxcclxuXHRcdHBvbGxJbnRlcnZhbDogNTAwLFxyXG5cdH0pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKCFsb2FkaW5nKSB7XHJcblx0XHRcdHNldFNlbGVjdGVkT3JkZXIoZGF0YS5nZXRPcmRlckJ5SWQpXHJcblx0XHR9XHRcclxuXHR9LCBbZGF0YV0pXHJcblx0XHJcblx0aWYgKGxvYWRpbmcpIHtcclxuXHRcdHJldHVybiA8aDE+TG9hZGluZy4uLjwvaDE+XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9yZGVyfT5cclxuXHRcdFx0e3NlbGVjdGVkT3JkZXIgJiYgKFxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9yZGVyX190aXRsZX0+XHJcblx0XHRcdFx0e3NlbGVjdGVkT3JkZXIuZnVsbF9uYW1lfSwgVGhhbmsgWW91IGZvciB5b3VyIG9yZGVyIVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vcmRlcl9fbnVtYmVyfT5cclxuXHRcdFx0XHRPcmRlciBudW1iZXIgaXM6IHtzZWxlY3RlZE9yZGVyLmlkfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vcmRlcl9fdGV4dH0+XHJcblx0XHRcdFx0WW91ciB3aWxsIHJlY2lldmUgYW4gZW1haWwgY29uZmlybWF0aW9uIHNob3J0bHkgdG8gPGEgaHJlZj1cIlwiPntzZWxlY3RlZE9yZGVyLmVtYWlsfTwvYT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3JkZXJfX2VzdGltYXRlZH0+XHJcblx0XHRcdFx0RXN0aW1hdGVkIGRlbGl2ZXJ5IERheSBpcyA8cCBjbGFzc05hbWU9e3N0eWxlcy5ib2xkfT5GcmlkYXkgMXN0IEFwcmlsIDIwMTY8L3A+XHJcblx0XHRcdDwvZGl2Plx0XHJcblx0XHRcdDxhIGNsYXNzTmFtZT17c3R5bGVzLm9yZGVyX19wcmludF9yZWNpcGV9PlByaW50IFJlY2lwZTwvYT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdCl9XHJcblx0XHQ8L2Rpdj5cclxuXHRcdFxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3JkZXI7XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc2VudENvbnRleHQgZnJvbSAnLi4vLi4vc2hhcmVkL2NvbnRleHQnO1xyXG5pbXBvcnQgeyB1c2VHZW9sb2NhdGlvbiB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUdlb2xvY2F0aW9uJztcclxuaW1wb3J0IHsgdXNlSWRlbnRpZmljYXRpb25DYXJkIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlSWRlbnRpZmljYXRpb25DYXJkJztcclxuaW1wb3J0IHsgdXNlSW5wdXQgfSBmcm9tICcuLi8uLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCBJbnB1dE1hc2sgZnJvbSBcInJlYWN0LWlucHV0LW1hc2tcIjtcclxuaW1wb3J0IHsgZmFDcm9zc2hhaXJzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5cclxuXHJcbi8vaW1wb3J0IHNlbnRDb250ZXh0IGZyb20gJy4uLy4uL3NoYXJlZC9jb250ZXh0JztcclxuXHJcbi8vIGludGVyZmFjZSBUYWJzUHJvcHMge1xyXG4vLyBcdGNoaWxkcmVuPzogUmVhY3QuUmVhY3RDaGlsZCB8IFJlYWN0LlJlYWN0Tm9kZSxcclxuXHRcclxuLy8gfVxyXG5cclxuY29uc3QgVGFiczogUmVhY3QuRkMgPSAoKSA9PiB7XHJcblxyXG5cdFxyXG5cdFxyXG5cdGNvbnN0IFt0b2dnbGVDbGFzcywgc2V0VG9nZ2xlQ2xhc3NdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcclxuXHRjb25zdCBbY2FyZFR5cGUsIHNldENhcmRUeXBlXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cdGNvbnN0IFtkZXRlY3RlZCwgc2V0RGV0ZWN0ZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cdFxyXG5cclxuXHRjb25zdCBmdWxsX25hbWUgPSB1c2VJbnB1dCgnJywge2lzRW1wdHk6IHRydWUsIG1pbkxlbmd0aDogM30pO1xyXG5cdGNvbnN0IHN0cmVldCA9IHVzZUlucHV0KCcnLCB7aXNFbXB0eTogdHJ1ZX0pO1xyXG5cdGNvbnN0IHBob25lID0gdXNlSW5wdXQoJycsIHtpc0VtcHR5OiB0cnVlfSk7XHJcblx0Y29uc3QgYXB0ID0gdXNlSW5wdXQoJycsIHt9KTtcclxuXHRjb25zdCBjaXR5ID0gdXNlSW5wdXQoJycsIHtpc0VtcHR5OiB0cnVlfSk7XHJcblx0Y29uc3QgY291bnRyeSA9IHVzZUlucHV0KCdDb3VudHJ5Jywge2lzRW1wdHk6IHRydWV9KTtcclxuXHRjb25zdCB6aXAgPSB1c2VJbnB1dCgnJywge2lzRW1wdHk6IHRydWV9KTtcclxuIFx0Y29uc3QgYiA9IHVzZUlucHV0KCcnLCB7fSk7XHJcblx0Y29uc3QgY2FyZF9udW1iZXIgPSB1c2VJbnB1dCgnJywge2lzRW1wdHk6IHRydWV9KTtcclxuXHRjb25zdCBleHBpcmVfZGF0ZSA9IHVzZUlucHV0KCcnLCB7aXNFbXB0eTogdHJ1ZX0pO1xyXG5cdGNvbnN0IHNlY3VyaXR5X2NvZGUgPSB1c2VJbnB1dCgnJywge2lzRW1wdHk6IHRydWV9KTtcclxuXHRjb25zdCBlbWFpbCA9IHVzZUlucHV0KCcnLCB7aXNFbWFpbDogdHJ1ZX0pO1xyXG5cdHZhciBnZW9sb2NhdGlvbiA9IHVzZUdlb2xvY2F0aW9uKCk7XHJcblxyXG5cdGZ1bmN0aW9uIGdldERldGVjdGlvbigpe1xyXG5cdFx0c2V0RGV0ZWN0ZWQodHJ1ZSlcclxuXHR9XHJcblxyXG5cdC8vIGlmIChkZXRlY3RlZCkge1xyXG5cdC8vIFx0cmV0dXJuIHVzZUdlb2xvY2F0aW9uKCk7XHJcblx0Ly8gfVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0c2V0Q2FyZFR5cGUodXNlSWRlbnRpZmljYXRpb25DYXJkKGNhcmRfbnVtYmVyLnZhbHVlKSk7XHJcblx0fSwgW2NhcmRfbnVtYmVyLnZhbHVlXSlcclxuXHJcblxyXG5cdHJldHVybiAoXHJcblxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluLWJsb2NrX19mb3JtX190YWJzXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3RvZ2dsZUNsYXNzID09PSAxID8gXCJ0YWJzIGFjdGl2ZS10YWJzXCIgOiBcInRhYnNcIn0gaWQ9XCJ0YWIxXCIgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlQ2xhc3MoMSl9PlNoaXBwaW5nPC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3RvZ2dsZUNsYXNzID09PSAyID8gXCJ0YWJzIGFjdGl2ZS10YWJzXCIgOiBcInRhYnNcIn0gb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlQ2xhc3MoMil9PkJpbGxpbmc8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dG9nZ2xlQ2xhc3MgPT09IDMgPyBcInRhYnMgYWN0aXZlLXRhYnNcIiA6IFwidGFic1wifSBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGVDbGFzcygzKX0+UGF5bWVudDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluLWJsb2NrX19mb3JtX190YWJzX19jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dG9nZ2xlQ2xhc3MgPT09IDEgPyBcImNvbnRlbnQgYWN0aXZlLWNvbnRlbnRcIiA6IFwiY29udGVudFwifT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X190aXRsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFNoaXBwaW5nIGluZm9cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3JlY2lwaWVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fcmVjaXBpZW50X3RleHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFJlY2lwaWVudFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNcIj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eygoYi5pc05leHQgJiYgZnVsbF9uYW1lLmlzRW1wdHkpIHx8IChiLmlzTmV4dCAmJiBmdWxsX25hbWUuaXNNaW5MZW5ndGhFcnJvcikpICYmICg8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZSc+UGxlYXNlIGVudGVyIHJlY2lwaWVudCBmdWxsIG5hbWUgYW5kIG1pbiBsZW5ndGggPSAzPC9kaXY+KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9eygoYi5pc05leHQgJiYgZnVsbF9uYW1lLmlzRW1wdHkpIHx8IChiLmlzTmV4dCAmJiBmdWxsX25hbWUuaXNNaW5MZW5ndGhFcnJvcikpID8gXCJjb250ZW50X19pbnB1dHNfZnVsbG5hbWUgZm9jdXNlZFwiIDogXCJjb250ZW50X19pbnB1dHNfZnVsbG5hbWVcIn0gbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkZ1bGwgTmFtZVwiIHZhbHVlPXtmdWxsX25hbWUudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gZnVsbF9uYW1lLm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBmdWxsX25hbWUub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfZGF5dGltZV9jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsoKGIuaXNOZXh0ICYmIHBob25lLmlzRW1wdHkpKSAmJiAoPGRpdiBjbGFzc05hbWU9J21lc3NhZ2UnPlBsZWFzZSBlbnRlciByZWNpcGllbnQgcGhvbmUgaW4gZm9ybWF0ICs3ICgwMDApIDAwMCAwMCAwMDwvZGl2Pil9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dE1hc2sgbmFtZT1cInBob25lXCIgbWFzaz1cIis3XFwoOTk5KSA5OTktOTktOTlcIiB0eXBlPVwidGVsXCIgY2xhc3NOYW1lPXsoKGIuaXNOZXh0ICYmIHBob25lLmlzRW1wdHkpKSA/IFwiY29udGVudF9faW5wdXRzX2RheXRpbWUgZm9jdXNlZFwiIDogXCJjb250ZW50X19pbnB1dHNfZGF5dGltZVwifSBpZD1cInBob25lTnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJEYXRldGltZSBQaG9uZVwiIHZhbHVlPXtwaG9uZS52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBwaG9uZS5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gcGhvbmUub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvciA9XCJjb250ZW50X19pbnB1dHNfZGF5dGltZV9sYWJlbFwiPkZvciBkZWxpdmVyeSBxdWVzdGlvbnMgb25seTwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fYWRkcmVzc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fYWRkcmVzc190ZXh0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBZGRyZXNzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c1wiPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7KChiLmlzTmV4dCAmJiBzdHJlZXQuaXNFbXB0eSkpICYmICg8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZSc+UGxlYXNlIGVudGVyIHJlY2lwaWVudCBzdHJlZXQ8L2Rpdj4pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17KChiLmlzTmV4dCAmJiBzdHJlZXQuaXNFbXB0eSkpID8gXCJjb250ZW50X19pbnB1dHNfc3RyZWV0IGZvY3VzZWRcIiA6IFwiY29udGVudF9faW5wdXRzX3N0cmVldFwifSBuYW1lPVwic3RyZWV0XCIgcGxhY2Vob2xkZXI9XCJTdHJlZXQgQWRkcmVzc1wiIHZhbHVlPXtzdHJlZXQudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gc3RyZWV0Lm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBzdHJlZXQub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzX2FwdFwiIG5hbWU9XCJhcHRcIiBwbGFjZWhvbGRlcj1cIkFwdCwgU3VpdGUsIEJsZGcsIEdhdGUgQ29kZS4gKG9wdGlvbmFsKVwiIHZhbHVlPXthcHQudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gYXB0Lm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBhcHQub25CbHVyKGUpfS8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19pY29uXCI+XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjaXR5XCIgY2xhc3NOYW1lPXsoKGIuaXNOZXh0ICYmIGNpdHkuaXNFbXB0eSkpID8gXCJjb250ZW50X19pbnB1dHNfY2l0eSBmb2N1c2VkXCIgOiBcImNvbnRlbnRfX2lucHV0c19jaXR5XCJ9IHBsYWNlaG9sZGVyPVwiQ2l0eVwiIHZhbHVlPXtnZW9sb2NhdGlvbiA9PSB1bmRlZmluZWQgPyBjaXR5LnZhbHVlIDogZ2VvbG9jYXRpb24uY2l0eX0gb25DaGFuZ2U9eyhlKSA9PiBjaXR5Lm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBjaXR5Lm9uQmx1cihlKX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyFnZW9sb2NhdGlvbiA/IDxGb250QXdlc29tZUljb24gb25DbGljaz17Z2V0RGV0ZWN0aW9ufSBpY29uPXtmYUNyb3NzaGFpcnN9IHN0eWxlPXt7cG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJzQwJScsIHJpZ2h0OiAnMTBweCcsIGZvbnRTaXplOiAnMjBweCcsIGN1cnNvcjogJ3BvaW50ZXInfX0vPiA6IDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDcm9zc2hhaXJzfSBzdHlsZT17e3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICc0MCUnLCByaWdodDogJzEwcHgnLCBjb2xvcjogJ3JlZCcsIGZvbnRTaXplOiAnMjBweCcsIGN1cnNvcjogJ3BvaW50ZXInfX0vPn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19fcm93XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfX3Jvd19jb3VudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfX3Jvd19jb3VudHJ5XCIgaWQ9XCJlZGl0b3JcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInNlbGVjdFwiIHBsYWNlaG9sZGVyPVwiQ291bnRyeVwiIHZhbHVlPXtnZW9sb2NhdGlvbiA9PSB1bmRlZmluZWQgPyBcIlwiIDogZ2VvbG9jYXRpb24uY291bnRyeX0gbGlzdD1cImNpdHluYW1lXCIgb25DaGFuZ2U9eyhlKSA9PiBjb3VudHJ5Lm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBjb3VudHJ5Lm9uQmx1cihlKX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGF0YWxpc3QgaWQ9XCJjaXR5bmFtZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJCb3N0b25cIi8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkNhbWJyaWRnZVwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kYXRhbGlzdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17KChiLmlzTmV4dCAmJiB6aXAuaXNFbXB0eSkpID8gXCJjb250ZW50X19pbnB1dHNfX3Jvd196aXAgZm9jdXNlZFwiIDogXCJjb250ZW50X19pbnB1dHNfX3Jvd196aXBcIn0gbmFtZT1cInppcFwiIHBsYWNlaG9sZGVyPVwiWklQXCIgdmFsdWU9e2dlb2xvY2F0aW9uID09IHVuZGVmaW5lZCA/IHppcC52YWx1ZSA6ICBnZW9sb2NhdGlvbi56aXB9IG9uQ2hhbmdlPXsoZSkgPT4gemlwLm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiB6aXAub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7KGZ1bGxfbmFtZS5pbnB1dFZhbGlkICYmIHBob25lLmlucHV0VmFsaWQgJiYgc3RyZWV0LmlucHV0VmFsaWQgJiYgY2l0eS5pbnB1dFZhbGlkICYmIGNvdW50cnkuaW5wdXRWYWxpZCAmJiB6aXAuaW5wdXRWYWxpZCkgJiYgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlQ2xhc3MoMil9IGNsYXNzTmFtZT1cImNvbnRlbnRfX2J1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcid9fT5Db250aW51ZTwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7IShmdWxsX25hbWUuaW5wdXRWYWxpZCAmJiBwaG9uZS5pbnB1dFZhbGlkICYmIHN0cmVldC5pbnB1dFZhbGlkICYmIGNpdHkuaW5wdXRWYWxpZCAmJiBjb3VudHJ5LmlucHV0VmFsaWQgJiYgemlwLmlucHV0VmFsaWQpICYmIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImNvbnRlbnRfX2J1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcid9fT5Db250aW51ZTwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3RvZ2dsZUNsYXNzID09PSAyID8gXCJjb250ZW50IGFjdGl2ZS1jb250ZW50XCIgOiBcImNvbnRlbnRcIn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fdGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRCaWxsaW5nIEluZm9ybWF0aW9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGVDbGFzcygxKX0gY2xhc3NOYW1lPVwiY29udGVudF9fcmVjaXBpZW50X2xpbmtcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFNhbWUgYXMgc2hpcHBpbmdcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3JlY2lwaWVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fcmVjaXBpZW50X3RleHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEJpbGxpbmcgQ29udGFjdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNcIj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHsoKGIuaXNOZXh0ICYmIGZ1bGxfbmFtZS5pc0VtcHR5KSB8fCAoYi5pc05leHQgJiYgZnVsbF9uYW1lLmlzTWluTGVuZ3RoRXJyb3IpKSAmJiAoPGRpdiBjbGFzc05hbWU9J21lc3NhZ2UnPlBsZWFzZSBlbnRlciByZWNpcGllbnQgZnVsbCBuYW1lIGFuZCBtaW4gbGVuZ3RoID0gMzwvZGl2Pil9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXsoKGIuaXNOZXh0ICYmIGZ1bGxfbmFtZS5pc0VtcHR5KSB8fCAoYi5pc05leHQgJiYgZnVsbF9uYW1lLmlzTWluTGVuZ3RoRXJyb3IpKSA/IFwiY29udGVudF9faW5wdXRzX2Z1bGxuYW1lIGZvY3VzZWRcIiA6IFwiY29udGVudF9faW5wdXRzX2Z1bGxuYW1lXCJ9IG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJGdWxsIE5hbWVcIiB2YWx1ZT17ZnVsbF9uYW1lLnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IGZ1bGxfbmFtZS5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gZnVsbF9uYW1lLm9uQmx1cihlKX0vPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0eyhiLmlzTmV4dCAmJiBlbWFpbC5pc0VtYWlsRXJyb3IpICYmICg8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZSc+UGxlYXNlIGVudGVyIGNvcnJlY3QgZW1haWw8L2Rpdj4pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17KChiLmlzTmV4dCAmJiBlbWFpbC5pc0VtYWlsRXJyb3IpKSA/IFwiY29udGVudF9faW5wdXRzX2VtYWlsIGZvY3VzZWRcIiA6IFwiY29udGVudF9faW5wdXRzX2VtYWlsXCJ9IG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiIHZhbHVlPXtlbWFpbC52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBlbWFpbC5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gZW1haWwub25CbHVyKGUpfSBuYW1lPVwiZW1haWxcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19hZGRyZXNzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19hZGRyZXNzX3RleHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEJpbGxpbmcgQWRkcmVzc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0eygoYi5pc05leHQgJiYgc3RyZWV0LmlzRW1wdHkpKSAmJiAoPGRpdiBjbGFzc05hbWU9J21lc3NhZ2UnPlBsZWFzZSBlbnRlciByZWNpcGllbnQgc3RyZWV0PC9kaXY+KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9eygoYi5pc05leHQgJiYgc3RyZWV0LmlzRW1wdHkpKSA/IFwiY29udGVudF9faW5wdXRzX3N0cmVldCBmb2N1c2VkXCIgOiBcImNvbnRlbnRfX2lucHV0c19zdHJlZXRcIn0gbmFtZT1cInN0cmVldFwiIHBsYWNlaG9sZGVyPVwiU3RyZWV0IEFkZHJlc3NcIiB2YWx1ZT17c3RyZWV0LnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHN0cmVldC5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gc3RyZWV0Lm9uQmx1cihlKX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzX2FwdFwiIHBsYWNlaG9sZGVyPVwiQXB0LCBTdWl0ZSwgQmxkZywgR2F0ZSBDb2RlLiAob3B0aW9uYWwpXCIgbmFtZT1cImFwdFwiIHZhbHVlPXthcHQudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gYXB0Lm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBhcHQub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfaWNvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjaXR5XCIgY2xhc3NOYW1lPXsoKGIuaXNOZXh0ICYmIGNpdHkuaXNFbXB0eSkpID8gXCJjb250ZW50X19pbnB1dHNfY2l0eSBmb2N1c2VkXCIgOiBcImNvbnRlbnRfX2lucHV0c19jaXR5XCJ9IHBsYWNlaG9sZGVyPVwiQ2l0eVwiIHZhbHVlPXtnZW9sb2NhdGlvbiA9PSB1bmRlZmluZWQgPyBjaXR5LnZhbHVlIDogZ2VvbG9jYXRpb24uY2l0eX0gb25DaGFuZ2U9eyhlKSA9PiBjaXR5Lm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBjaXR5Lm9uQmx1cihlKX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNyb3NzaGFpcnN9IHN0eWxlPXt7cG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJzQwJScsIHJpZ2h0OiAnMTBweCcsIGZvbnRTaXplOiAnMjBweCcsIGN1cnNvcjogJ3BvaW50ZXInfX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzX19yb3dcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19fcm93X2NvdW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19fcm93X2NvdW50cnlcIiBpZD1cImVkaXRvclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwic2VsZWN0XCIgcGxhY2Vob2xkZXI9XCJDb3VudHJ5XCIgdmFsdWU9e2dlb2xvY2F0aW9uID09IHVuZGVmaW5lZCA/IFwiXCIgOiBnZW9sb2NhdGlvbi5jb3VudHJ5fSBsaXN0PVwiY2l0eW5hbWVcIiBvbkJsdXI9eyhlKSA9PiBjb3VudHJ5Lm9uQmx1cihlKX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGF0YWxpc3QgaWQ9XCJjaXR5bmFtZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJCb3N0b25cIi8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkNhbWJyaWRnZVwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kYXRhbGlzdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17KChiLmlzTmV4dCAmJiB6aXAuaXNFbXB0eSkpID8gXCJjb250ZW50X19pbnB1dHNfX3Jvd196aXAgZm9jdXNlZFwiIDogXCJjb250ZW50X19pbnB1dHNfX3Jvd196aXBcIn0gbmFtZT1cInppcFwiIHBsYWNlaG9sZGVyPVwiWklQXCIgdmFsdWU9e2dlb2xvY2F0aW9uID09IHVuZGVmaW5lZCA/IHppcC52YWx1ZSA6ICBnZW9sb2NhdGlvbi56aXB9IG9uQ2hhbmdlPXsoZSkgPT4gemlwLm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiB6aXAub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7KGZ1bGxfbmFtZS5pbnB1dFZhbGlkICYmICBzdHJlZXQuaW5wdXRWYWxpZCAmJiBjaXR5LmlucHV0VmFsaWQgJiYgY291bnRyeS5pbnB1dFZhbGlkICYmIHppcC5pbnB1dFZhbGlkKSAmJiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGVDbGFzcygzKX0gY2xhc3NOYW1lPVwiY29udGVudF9fYnV0dG9uXCIgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJ319PkNvbnRpbnVlPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHshKGZ1bGxfbmFtZS5pbnB1dFZhbGlkICAmJiBzdHJlZXQuaW5wdXRWYWxpZCAmJiBjaXR5LmlucHV0VmFsaWQgJiYgY291bnRyeS5pbnB1dFZhbGlkICYmIHppcC5pbnB1dFZhbGlkKSAmJiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJjb250ZW50X19idXR0b25cIiBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX0+Q29udGludWU8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXt0b2dnbGVDbGFzcyA9PT0gMyA/IFwiY29udGVudCBhY3RpdmUtY29udGVudFwiIDogXCJjb250ZW50XCJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3RpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0UGF5bWVudFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19zc2xcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3NzbF9sb2dvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz0nLi4vLi4vbG9jay5wbmcnIGFsdD1cIlwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19zc2xfdGV4dFwiPlRoaXMgaXMgYSBzZWN1cmUgMTI4LWJpdCBTU0wgZW5jcnlwdGVkIHBheW1lbnQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fcmVjaXBpZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19yZWNpcGllbnRfdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Q2FyZGhvbGRlciBOYW1lXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7KChiLmlzTmV4dCAmJiBmdWxsX25hbWUuaXNFbXB0eSkgfHwgKGIuaXNOZXh0ICYmIGZ1bGxfbmFtZS5pc01pbkxlbmd0aEVycm9yKSkgJiYgKDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlJz5QbGVhc2UgZW50ZXIgcmVjaXBpZW50IGZ1bGwgbmFtZSBhbmQgbWluIGxlbmd0aCA9IDM8L2Rpdj4pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17KChiLmlzTmV4dCAmJiBmdWxsX25hbWUuaXNFbXB0eSkgfHwgKGIuaXNOZXh0ICYmIGZ1bGxfbmFtZS5pc01pbkxlbmd0aEVycm9yKSkgPyBcImNvbnRlbnRfX2lucHV0c19mdWxsbmFtZSBmb2N1c2VkXCIgOiBcImNvbnRlbnRfX2lucHV0c19mdWxsbmFtZVwifSBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZSBhcyBpdCBhcHBlYXJzIG9uIHlvdXIgY2FyZFwiIHZhbHVlPXtmdWxsX25hbWUudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gZnVsbF9uYW1lLm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBmdWxsX25hbWUub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19hZGRyZXNzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19hZGRyZXNzX3RleHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdENhcmQgTnVtYmVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0cyBpbnB1dF9jYXJkXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PElucHV0TWFzayBtYXNrPVwiOTk5OSA5OTk5IDk5OTkgOTk5OVwiIG5hbWU9XCJjYXJkX251bWJlclwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzX2NhcmRcIiBwbGFjZWhvbGRlcj1cIlhYWFggWFhYWCBYWFhYIFhYWFggWFhYWFwiIHZhbHVlPXtjYXJkX251bWJlci52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBjYXJkX251bWJlci5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gY2FyZF9udW1iZXIub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e2NhcmRUeXBlfSBhbHQ9XCJcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fY2FyZHNfX2luZm9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2NhcmRzX19pbmZvX19leHBpcmVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fY2FyZHNfaW5mb19fZXhwaXJlX3RleHRcIj5FeHBpcmUgRGF0ZTwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PElucHV0TWFzayBtYXNrPVwiOTkgLyA5OVwiIHBsYWNlaG9sZGVyPVwiTU0gLyBZWVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY29udGVudF9fY2FyZHNfaW5mb19fZXhwaXJlX2lucHV0XCIgbmFtZT1cImV4cGlyZV9kYXRlXCIgdmFsdWU9e2V4cGlyZV9kYXRlLnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IGV4cGlyZV9kYXRlLm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBleHBpcmVfZGF0ZS5vbkJsdXIoZSl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2NhcmRzX19pbmZvX19zZWN1cml0eVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19jYXJkc19pbmZvX19zZWN1cml0eV90ZXh0XCI+U2VjdXJpdHkgQ29kZTwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PElucHV0TWFzayBtYXNrPVwiOTk5XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlhYWFwiIGNsYXNzTmFtZT1cImNvbnRlbnRfX2NhcmRzX2luZm9fX3NlY3VyaXR5X2lucHV0XCIgbmFtZT1cInNlY3VyaXR5X2NvZGVcIiB2YWx1ZT17c2VjdXJpdHlfY29kZS52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBzZWN1cml0eV9jb2RlLm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBzZWN1cml0eV9jb2RlLm9uQmx1cihlKX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0eyhmdWxsX25hbWUuaW5wdXRWYWxpZCAmJiBzdHJlZXQuaW5wdXRWYWxpZCAmJiBjaXR5LmlucHV0VmFsaWQgJiYgY291bnRyeS5pbnB1dFZhbGlkICYmIHppcC5pbnB1dFZhbGlkICYmIGNhcmRfbnVtYmVyLmlucHV0VmFsaWQgJiYgc2VjdXJpdHlfY29kZS5pbnB1dFZhbGlkICYmIGV4cGlyZV9kYXRlLmlucHV0VmFsaWQpICYmIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImNvbnRlbnRfX2J1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRQYXkgU2VjdXJlbHlcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0eyEoZnVsbF9uYW1lLmlucHV0VmFsaWQgICYmIHN0cmVldC5pbnB1dFZhbGlkICYmIGNpdHkuaW5wdXRWYWxpZCAmJiBjb3VudHJ5LmlucHV0VmFsaWQgJiYgemlwLmlucHV0VmFsaWQgJiYgY2FyZF9udW1iZXIuaW5wdXRWYWxpZCAmJiBzZWN1cml0eV9jb2RlLmlucHV0VmFsaWQgJiYgZXhwaXJlX2RhdGUuaW5wdXRWYWxpZCkgJiYgXHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJjb250ZW50X19idXR0b24gZGlzYWJsZWRcIiBkaXNhYmxlZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRQYXkgU2VjdXJlbHlcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFicztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCAgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUdlb2xvY2F0aW9uID0gKCkgPT4ge1xyXG5cclxuXHJcblxyXG5cdGNvbnN0IFtjaXR5LCBzZXRDaXR5XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cdGNvbnN0IFtjb3VudHJ5LCBzZXRDb3VudHJ5XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cdGNvbnN0IFt6aXAsIHNldFppcF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuXHJcblx0Y29uc3Qgc3VjY2Vzc0NhbGxiYWNrID0gYXN5bmMgKCk6IFByb21pc2U8YW55PiA9PiB7XHJcblx0XHRhd2FpdCBmZXRjaCgnaHR0cHM6Ly9pcGFwaS5jby9qc29uLycpXHJcbiAgXHRcdFx0LnRoZW4oZCA9PiBkLmpzb24oKSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRzZXRDaXR5KHJlcy5jaXR5KTtcclxuXHRcdFx0XHRzZXRDb3VudHJ5KHJlcy5jb3VudHJ5X25hbWUpO1xyXG5cdFx0XHRcdHNldFppcChyZXMucG9zdGFsKTtcclxuXHRcdFx0fSlcclxuXHQgIH1cclxuXHJcblx0ICBjb25zdCBlcnJvckNhbGxiYWNrID0gKGVycm9yOiBhbnkpOiB2b2lkID0+IHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcblx0ICB9XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHRcclxuXHR9LCBbXSlcclxuXHJcblx0XHJcblx0ICByZXR1cm4ge1xyXG5cdFx0Y2l0eSxcclxuXHRcdGNvdW50cnksXHJcblx0XHR6aXBcclxuXHR9XHJcblx0XHJcblx0XHRcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gdXNlSWRlbnRpZmljYXRpb25DYXJkKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcgXHJcbntcclxuICAgIC8vIHZpc2FcclxuICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJeNFwiKTtcclxuICAgIGlmICh2YWx1ZS5tYXRjaChyZWdleCkgIT0gbnVsbClcclxuICAgICAgICByZXR1cm4gXCIvLi4vLi4vdmlzYS5wbmdcIjtcclxuXHJcbiAgICAvLyBNYXN0ZXJjYXJkIFxyXG4gICAgLy8gVXBkYXRlZCBmb3IgTWFzdGVyY2FyZCAyMDE3IEJJTnMgZXhwYW5zaW9uXHJcbiAgICAgaWYgKC9eKDVbMS01XVswLTldezE0fXwyKDIyWzEtOV1bMC05XXsxMn18MlszLTldWzAtOV17MTN9fFszLTZdWzAtOV17MTR9fDdbMC0xXVswLTldezEzfXw3MjBbMC05XXsxMn0pKSQvLnRlc3QodmFsdWUpKSBcclxuICAgICAgICByZXR1cm4gXCJNYXN0ZXJjYXJkXCI7XHJcblxyXG4gICAgLy8gLy8gQU1FWFxyXG4gICAgLy8gcmUgPSBuZXcgUmVnRXhwKFwiXjNbNDddXCIpO1xyXG4gICAgLy8gaWYgKG51bWJlci5tYXRjaChyZSkgIT0gbnVsbClcclxuICAgIC8vICAgICByZXR1cm4gXCJBTUVYXCI7XHJcblxyXG4gICAgLy8gLy8gRGlzY292ZXJcclxuICAgIC8vIHJlID0gbmV3IFJlZ0V4cChcIl4oNjAxMXw2MjIoMTJbNi05XXwxWzMtOV1bMC05XXxbMi04XVswLTldezJ9fDlbMC0xXVswLTldfDkyWzAtNV18NjRbNC05XSl8NjUpXCIpO1xyXG4gICAgLy8gaWYgKG51bWJlci5tYXRjaChyZSkgIT0gbnVsbClcclxuICAgIC8vICAgICByZXR1cm4gXCJEaXNjb3ZlclwiO1xyXG5cclxuICAgIC8vIC8vIERpbmVyc1xyXG4gICAgLy8gcmUgPSBuZXcgUmVnRXhwKFwiXjM2XCIpO1xyXG4gICAgLy8gaWYgKG51bWJlci5tYXRjaChyZSkgIT0gbnVsbClcclxuICAgIC8vICAgICByZXR1cm4gXCJEaW5lcnNcIjtcclxuXHJcbiAgICAvLyAvLyBEaW5lcnMgLSBDYXJ0ZSBCbGFuY2hlXHJcbiAgICAvLyByZSA9IG5ldyBSZWdFeHAoXCJeMzBbMC01XVwiKTtcclxuICAgIC8vIGlmIChudW1iZXIubWF0Y2gocmUpICE9IG51bGwpXHJcbiAgICAvLyAgICAgcmV0dXJuIFwiRGluZXJzIC0gQ2FydGUgQmxhbmNoZVwiO1xyXG5cclxuICAgIC8vIC8vIEpDQlxyXG4gICAgLy8gcmUgPSBuZXcgUmVnRXhwKFwiXjM1KDJbODldfFszLThdWzAtOV0pXCIpO1xyXG4gICAgLy8gaWYgKG51bWJlci5tYXRjaChyZSkgIT0gbnVsbClcclxuICAgIC8vICAgICByZXR1cm4gXCJKQ0JcIjtcclxuXHJcbiAgICAvLyAvLyBWaXNhIEVsZWN0cm9uXHJcbiAgICAvLyByZSA9IG5ldyBSZWdFeHAoXCJeKDQwMjZ8NDE3NTAwfDQ1MDh8NDg0NHw0OTEoM3w3KSlcIik7XHJcbiAgICAvLyBpZiAobnVtYmVyLm1hdGNoKHJlKSAhPSBudWxsKVxyXG4gICAgLy8gICAgIHJldHVybiBcIlZpc2EgRWxlY3Ryb25cIjtcclxuXHJcbiAgICByZXR1cm4gXCJudWxsXCI7XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHtGb3JtRXZlbnQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVZhbGlkYXRpb24gfSBmcm9tICcuL3VzZVZhbGlkYXRpb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUlucHV0ID0gKGluaXRpYWxWYWx1ZTogc3RyaW5nLCB2YWxpZGF0aW9uczogT2JqZWN0KSA9PiB7XHJcblxyXG5cdGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPihpbml0aWFsVmFsdWUpO1xyXG5cdGNvbnN0IFtpc0RpcnR5LCBzZXRJc0RpcnR5XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHRjb25zdCBbaXNOZXh0LCBzZXRJc05leHRdID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcblx0Y29uc3QgdmFsaWQgPSB1c2VWYWxpZGF0aW9uKHZhbHVlLCB2YWxpZGF0aW9ucyk7XHJcblxyXG5cclxuXHRjb25zdCBvbkNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFNlbGVjdEVsZW1lbnQ+KTogdm9pZCA9PiB7XHJcblx0XHRzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBvbkJsdXIgPSAoZTogUmVhY3QuRm9jdXNFdmVudDxIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFNlbGVjdEVsZW1lbnQ+KTogdm9pZCA9PiB7XHJcblx0XHRzZXRJc0RpcnR5KHRydWUpO1xyXG5cdH1cclxuXHJcblx0Y29uc3Qgb25DbGljayA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KTogdm9pZCA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRzZXRJc05leHQodHJ1ZSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0dmFsdWUsXHJcblx0XHRpc05leHQsXHJcblx0XHRvbkNsaWNrLFxyXG5cdFx0b25DaGFuZ2UsXHJcblx0XHRvbkJsdXIsXHJcblx0XHRpc0RpcnR5LFxyXG5cdFx0Li4udmFsaWRcclxuXHR9XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlVmFsaWRhdGlvbiA9ICh2YWx1ZTogc3RyaW5nLCB2YWxpZGF0aW9uczogT2JqZWN0KSA9PiB7XHJcblxyXG5cdGNvbnN0IFtpc0VtcHR5LCBzZXRJc0VtcHR5XSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG5cdGNvbnN0IFtpc0VtYWlsRXJyb3IsIHNldElzRW1haWxFcnJvcl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblx0Y29uc3QgW2lzTWluTGVuZ3RoRXJyb3IsIHNldElzTWluTGVuZ3RoRXJyb3JdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cdGNvbnN0IFtpbnB1dFZhbGlkLCBzZXRJbnB1dFZhbGlkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGZvciAoY29uc3QgdmFsaWRhdGlvbiBpbiB2YWxpZGF0aW9ucykge1xyXG5cdFx0XHRzd2l0Y2ggKHZhbGlkYXRpb24pIHtcclxuXHRcdFx0XHRjYXNlICdtaW5MZW5ndGgnOlxyXG5cdFx0XHRcdFx0dmFsdWUubGVuZ3RoIDwgdmFsaWRhdGlvbnNbdmFsaWRhdGlvbl0gPyBzZXRJc01pbkxlbmd0aEVycm9yKHRydWUpIDogc2V0SXNNaW5MZW5ndGhFcnJvcihmYWxzZSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICdpc0VtcHR5JzpcclxuXHRcdFx0XHRcdHZhbHVlID8gc2V0SXNFbXB0eShmYWxzZSkgOiBzZXRJc0VtcHR5KHRydWUpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnaXNQaG9uZSc6XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICdpc0VtYWlsJzpcclxuXHRcdFx0XHRcdGNvbnN0IHJlID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gICAgXHRcdFx0XHQocmUudGVzdChTdHJpbmcodmFsdWUpLnRvTG93ZXJDYXNlKCkpKSA/IHNldElzRW1haWxFcnJvcihmYWxzZSkgOiBzZXRJc0VtYWlsRXJyb3IodHJ1ZSlcclxuXHRcdFx0XHRcdGJyZWFrXHJcblx0XHRcdH1cdFxyXG5cdFx0fVxyXG5cdH0sIFt2YWx1ZV0pXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAoaXNNaW5MZW5ndGhFcnJvciB8fCBpc0VtcHR5IHx8IGlzRW1haWxFcnJvcikge1xyXG5cdFx0XHRzZXRJbnB1dFZhbGlkKGZhbHNlKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRzZXRJbnB1dFZhbGlkKHRydWUpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fSwgW2lzRW1wdHksIGlzTWluTGVuZ3RoRXJyb3IsIGlzRW1haWxFcnJvcl0pXHJcblxyXG5cdFxyXG5cdFxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0aXNFbXB0eSxcclxuXHRcdGlzTWluTGVuZ3RoRXJyb3IsXHJcblx0XHRpbnB1dFZhbGlkLFxyXG5cdFx0aXNFbWFpbEVycm9yXHJcblx0fVxyXG59IiwiaW1wb3J0IHtncWx9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfT1JERVIgPSBncWwgYFxyXG5cclxuXHRtdXRhdGlvbiBjcmVhdGVPcmRlcigkaW5wdXQ6IE9yZGVySW5wdXQpIHtcclxuXHRcdGNyZWF0ZU9yZGVyKGlucHV0OiAkaW5wdXQpIHtcclxuXHRcdFx0aWQsIGZ1bGxfbmFtZSwgZW1haWwsIGNpdHksIHBob25lXHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5gIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBJbWFnZTE7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9oZWFkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9oZWFkXCIpKTtcbnZhciBfdG9CYXNlNjQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi90by1iYXNlLTY0XCIpO1xudmFyIF9pbWFnZUNvbmZpZyA9IHJlcXVpcmUoXCIuLi9zZXJ2ZXIvaW1hZ2UtY29uZmlnXCIpO1xudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICAgIGZvcih2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uKHN5bSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xuICAgIH07XG4gICAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICAgIHZhciBrZXksIGk7XG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG4gICAgICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSB7XG4gICAgfTtcbiAgICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmNvbnN0IGxvYWRlZEltYWdlVVJMcyA9IG5ldyBTZXQoKTtcbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGdsb2JhbC5fX05FWFRfSU1BR0VfSU1QT1JURUQgPSB0cnVlO1xufVxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbXG4gICAgJ2xhenknLFxuICAgICdlYWdlcicsXG4gICAgdW5kZWZpbmVkXG5dO1xuY29uc3QgbG9hZGVycyA9IG5ldyBNYXAoW1xuICAgIFtcbiAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICBkZWZhdWx0TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdpbWdpeCcsXG4gICAgICAgIGltZ2l4TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdjbG91ZGluYXJ5JyxcbiAgICAgICAgY2xvdWRpbmFyeUxvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnYWthbWFpJyxcbiAgICAgICAgYWthbWFpTG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdjdXN0b20nLFxuICAgICAgICBjdXN0b21Mb2FkZXJcbiAgICBdLCBcbl0pO1xuY29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUyA9IFtcbiAgICAnZmlsbCcsXG4gICAgJ2ZpeGVkJyxcbiAgICAnaW50cmluc2ljJyxcbiAgICAncmVzcG9uc2l2ZScsXG4gICAgdW5kZWZpbmVkLCBcbl07XG5mdW5jdGlvbiBpc1N0YXRpY1JlcXVpcmUoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5kZWZhdWx0ICE9PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc1N0YXRpY0ltYWdlRGF0YShzcmMpIHtcbiAgICByZXR1cm4gc3JjLnNyYyAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTdGF0aWNJbXBvcnQoc3JjKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzcmMgPT09ICdvYmplY3QnICYmIChpc1N0YXRpY1JlcXVpcmUoc3JjKSB8fCBpc1N0YXRpY0ltYWdlRGF0YShzcmMpKTtcbn1cbmNvbnN0IHsgZGV2aWNlU2l6ZXM6IGNvbmZpZ0RldmljZVNpemVzICwgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyAsIGxvYWRlcjogY29uZmlnTG9hZGVyICwgcGF0aDogY29uZmlnUGF0aCAsIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMgLCAgfSA9IHByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTIHx8IF9pbWFnZUNvbmZpZy5pbWFnZUNvbmZpZ0RlZmF1bHQ7XG4vLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzID0gW1xuICAgIC4uLmNvbmZpZ0RldmljZVNpemVzLFxuICAgIC4uLmNvbmZpZ0ltYWdlU2l6ZXNcbl07XG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKT0+YSAtIGJcbik7XG5hbGxTaXplcy5zb3J0KChhLCBiKT0+YSAtIGJcbik7XG5mdW5jdGlvbiBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpIHtcbiAgICBpZiAoc2l6ZXMgJiYgKGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSkge1xuICAgICAgICAvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuICAgICAgICBjb25zdCB2aWV3cG9ydFdpZHRoUmUgPSAvKF58XFxzKSgxP1xcZD9cXGQpdncvZztcbiAgICAgICAgY29uc3QgcGVyY2VudFNpemVzID0gW107XG4gICAgICAgIGZvcihsZXQgbWF0Y2g7IG1hdGNoID0gdmlld3BvcnRXaWR0aFJlLmV4ZWMoc2l6ZXMpOyBtYXRjaCl7XG4gICAgICAgICAgICBwZXJjZW50U2l6ZXMucHVzaChwYXJzZUludChtYXRjaFsyXSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwZXJjZW50U2l6ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBzbWFsbGVzdFJhdGlvID0gTWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSAqIDAuMDE7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdpZHRoczogYWxsU2l6ZXMuZmlsdGVyKChzKT0+cyA+PSBjb25maWdEZXZpY2VTaXplc1swXSAqIHNtYWxsZXN0UmF0aW9cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGhzOiBhbGxTaXplcyxcbiAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJyB8fCBsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGhzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB3aWR0aHMgPSBbXG4gICAgICAgIC4uLm5ldyBTZXQoLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbiAgICAgICAgLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4gICAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgICAvLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuICAgICAgICAvLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuICAgICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAgIC8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuICAgICAgICAvLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG4gICAgICAgIFtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqLyBcbiAgICAgICAgXS5tYXAoKHcpPT5hbGxTaXplcy5maW5kKChwKT0+cCA+PSB3XG4gICAgICAgICAgICApIHx8IGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aCAtIDFdXG4gICAgICAgICkpLCBcbiAgICBdO1xuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRocyxcbiAgICAgICAga2luZDogJ3gnXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoeyBzcmMgLCB1bm9wdGltaXplZCAsIGxheW91dCAsIHdpZHRoICwgcXVhbGl0eSAsIHNpemVzICwgbG9hZGVyICB9KSB7XG4gICAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHNpemVzOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgeyB3aWR0aHMgLCBraW5kICB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKTtcbiAgICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDE7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2l6ZXM6ICFzaXplcyAmJiBraW5kID09PSAndycgPyAnMTAwdncnIDogc2l6ZXMsXG4gICAgICAgIHNyY1NldDogd2lkdGhzLm1hcCgodywgaSk9PmAke2xvYWRlcih7XG4gICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgIHF1YWxpdHksXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdcbiAgICAgICAgICAgIH0pfSAke2tpbmQgPT09ICd3JyA/IHcgOiBpICsgMX0ke2tpbmR9YFxuICAgICAgICApLmpvaW4oJywgJyksXG4gICAgICAgIC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4gICAgICAgIC8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbiAgICAgICAgLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuICAgICAgICAvLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuICAgICAgICAvLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbiAgICAgICAgLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG4gICAgICAgIHNyYzogbG9hZGVyKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHF1YWxpdHksXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhzW2xhc3RdXG4gICAgICAgIH0pXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldEludCh4KSB7XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzKSB7XG4gICAgY29uc3QgbG9hZCA9IGxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcik7XG4gICAgaWYgKGxvYWQpIHtcbiAgICAgICAgcmV0dXJuIGxvYWQoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICByb290OiBjb25maWdQYXRoXG4gICAgICAgIH0sIGxvYWRlclByb3BzKSk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7X2ltYWdlQ29uZmlnLlZBTElEX0xPQURFUlMuam9pbignLCAnKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gKTtcbn1cbi8vIFNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMzk3Nzc4MzMvMjY2NTM1IGZvciB3aHkgd2UgdXNlIHRoaXMgcmVmXG4vLyBoYW5kbGVyIGluc3RlYWQgb2YgdGhlIGltZydzIG9uTG9hZCBhdHRyaWJ1dGUuXG5mdW5jdGlvbiBoYW5kbGVMb2FkaW5nKGltZywgc3JjLCBsYXlvdXQsIHBsYWNlaG9sZGVyLCBvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgIGlmICghaW1nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlTG9hZCA9ICgpPT57XG4gICAgICAgIGlmICghaW1nLnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gJ2RlY29kZScgaW4gaW1nID8gaW1nLmRlY29kZSgpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICBwLmNhdGNoKCgpPT57XG4gICAgICAgICAgICB9KS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgaWYgKHBsYWNlaG9sZGVyID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmZpbHRlciA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsb2FkZWRJbWFnZVVSTHMuYWRkKHNyYyk7XG4gICAgICAgICAgICAgICAgaWYgKG9uTG9hZGluZ0NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbmF0dXJhbFdpZHRoICwgbmF0dXJhbEhlaWdodCAgfSA9IGltZztcbiAgICAgICAgICAgICAgICAgICAgLy8gUGFzcyBiYWNrIHJlYWQtb25seSBwcmltaXRpdmUgdmFsdWVzIGJ1dCBub3QgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIHVuZGVybHlpbmcgRE9NIGVsZW1lbnQgYmVjYXVzZSBpdCBjb3VsZCBiZSBtaXN1c2VkLlxuICAgICAgICAgICAgICAgICAgICBvbkxvYWRpbmdDb21wbGV0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsSGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHJlZiA9IGltZy5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBnZXRDb21wdXRlZFN0eWxlKGltZy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnICYmIHBhcmVudC5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbWF5IG5vdCByZW5kZXIgcHJvcGVybHkgYXMgYSBjaGlsZCBvZiBhIGZsZXggY29udGFpbmVyLiBDb25zaWRlciB3cmFwcGluZyB0aGUgaW1hZ2Ugd2l0aCBhIGRpdiB0byBjb25maWd1cmUgdGhlIHdpZHRoLmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiBwYXJlbnQucG9zaXRpb24gIT09ICdyZWxhdGl2ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbWF5IG5vdCByZW5kZXIgcHJvcGVybHkgd2l0aCBhIHBhcmVudCB1c2luZyBwb3NpdGlvbjpcIiR7cGFyZW50LnBvc2l0aW9ufVwiLiBDb25zaWRlciBjaGFuZ2luZyB0aGUgcGFyZW50IHN0eWxlIHRvIHBvc2l0aW9uOlwicmVsYXRpdmVcIiB3aXRoIGEgd2lkdGggYW5kIGhlaWdodC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpZiAoaW1nLmNvbXBsZXRlKSB7XG4gICAgICAgIC8vIElmIHRoZSByZWFsIGltYWdlIGZhaWxzIHRvIGxvYWQsIHRoaXMgd2lsbCBzdGlsbCByZW1vdmUgdGhlIHBsYWNlaG9sZGVyLlxuICAgICAgICAvLyBUaGlzIGlzIHRoZSBkZXNpcmVkIGJlaGF2aW9yIGZvciBub3csIGFuZCB3aWxsIGJlIHJldmlzaXRlZCB3aGVuIGVycm9yXG4gICAgICAgIC8vIGhhbmRsaW5nIGlzIHdvcmtlZCBvbiBmb3IgdGhlIGltYWdlIGNvbXBvbmVudCBpdHNlbGYuXG4gICAgICAgIGhhbmRsZUxvYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbWcub25sb2FkID0gaGFuZGxlTG9hZDtcbiAgICB9XG59XG5mdW5jdGlvbiBJbWFnZTEoX3BhcmFtKSB7XG4gICAgdmFyIHsgc3JjICwgc2l6ZXMgLCB1bm9wdGltaXplZCA9ZmFsc2UgLCBwcmlvcml0eSA9ZmFsc2UgLCBsb2FkaW5nICwgbGF6eUJvdW5kYXJ5ID0nMjAwcHgnICwgY2xhc3NOYW1lICwgcXVhbGl0eSAsIHdpZHRoICwgaGVpZ2h0ICwgb2JqZWN0Rml0ICwgb2JqZWN0UG9zaXRpb24gLCBvbkxvYWRpbmdDb21wbGV0ZSAsIGxvYWRlciA9ZGVmYXVsdEltYWdlTG9hZGVyICwgcGxhY2Vob2xkZXIgPSdlbXB0eScgLCBibHVyRGF0YVVSTCAgfSA9IF9wYXJhbSwgYWxsID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wYXJhbSwgW1wic3JjXCIsIFwic2l6ZXNcIiwgXCJ1bm9wdGltaXplZFwiLCBcInByaW9yaXR5XCIsIFwibG9hZGluZ1wiLCBcImxhenlCb3VuZGFyeVwiLCBcImNsYXNzTmFtZVwiLCBcInF1YWxpdHlcIiwgXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcIm9iamVjdEZpdFwiLCBcIm9iamVjdFBvc2l0aW9uXCIsIFwib25Mb2FkaW5nQ29tcGxldGVcIiwgXCJsb2FkZXJcIiwgXCJwbGFjZWhvbGRlclwiLCBcImJsdXJEYXRhVVJMXCJdKTtcbiAgICBsZXQgcmVzdCA9IGFsbDtcbiAgICBsZXQgbGF5b3V0ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJztcbiAgICBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgICAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgICAgICBpZiAocmVzdC5sYXlvdXQpIGxheW91dCA9IHJlc3QubGF5b3V0O1xuICAgICAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXTtcbiAgICB9XG4gICAgbGV0IHN0YXRpY1NyYyA9ICcnO1xuICAgIGlmIChpc1N0YXRpY0ltcG9ydChzcmMpKSB7XG4gICAgICAgIGNvbnN0IHN0YXRpY0ltYWdlRGF0YSA9IGlzU3RhdGljUmVxdWlyZShzcmMpID8gc3JjLmRlZmF1bHQgOiBzcmM7XG4gICAgICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLnNyYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIHNyYy4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO1xuICAgICAgICB9XG4gICAgICAgIGJsdXJEYXRhVVJMID0gYmx1ckRhdGFVUkwgfHwgc3RhdGljSW1hZ2VEYXRhLmJsdXJEYXRhVVJMO1xuICAgICAgICBzdGF0aWNTcmMgPSBzdGF0aWNJbWFnZURhdGEuc3JjO1xuICAgICAgICBpZiAoIWxheW91dCB8fCBsYXlvdXQgIT09ICdmaWxsJykge1xuICAgICAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IHx8IHN0YXRpY0ltYWdlRGF0YS5oZWlnaHQ7XG4gICAgICAgICAgICB3aWR0aCA9IHdpZHRoIHx8IHN0YXRpY0ltYWdlRGF0YS53aWR0aDtcbiAgICAgICAgICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLmhlaWdodCB8fCAhc3RhdGljSW1hZ2VEYXRhLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIGhlaWdodCBhbmQgd2lkdGguIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzcmMgPSB0eXBlb2Ygc3JjID09PSAnc3RyaW5nJyA/IHNyYyA6IHN0YXRpY1NyYztcbiAgICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aCk7XG4gICAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodCk7XG4gICAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KTtcbiAgICBsZXQgaXNMYXp5ID0gIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKTtcbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykgfHwgc3JjLnN0YXJ0c1dpdGgoJ2Jsb2I6JykpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICAgICAgdW5vcHRpbWl6ZWQgPSB0cnVlO1xuICAgICAgICBpc0xhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGxvYWRlZEltYWdlVVJMcy5oYXMoc3JjKSkge1xuICAgICAgICBpc0xhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgcXVhbGl0eVxuICAgICAgICAgICAgfSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYU4od2lkdGhJbnQpIHx8IHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKGhlaWdodEludCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcIndpZHRoXCIgb3IgXCJoZWlnaHRcIiBwcm9wZXJ0eS4gVGhlc2Ugc2hvdWxkIGJlIG51bWVyaWMgdmFsdWVzLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiAod2lkdGggfHwgaGVpZ2h0KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGFuZCBcImxheW91dD0nZmlsbCdcIiBoYXMgdW51c2VkIHByb3BlcnRpZXMgYXNzaWduZWQuIFBsZWFzZSByZW1vdmUgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICBpZiAobGF5b3V0ICE9PSAnZmlsbCcgJiYgKHdpZHRoSW50IHx8IDApICogKGhlaWdodEludCB8fCAwKSA8IDE2MDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgc21hbGxlciB0aGFuIDQweDQwLiBDb25zaWRlciByZW1vdmluZyB0aGUgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFibHVyRGF0YVVSTCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFZBTElEX0JMVVJfRVhUID0gW1xuICAgICAgICAgICAgICAgICAgICAnanBlZycsXG4gICAgICAgICAgICAgICAgICAgICdwbmcnLFxuICAgICAgICAgICAgICAgICAgICAnd2VicCdcbiAgICAgICAgICAgICAgICBdIC8vIHNob3VsZCBtYXRjaCBuZXh0LWltYWdlLWxvYWRlclxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgYnV0IGlzIG1pc3NpbmcgdGhlIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eS5cbiAgICAgICAgICBQb3NzaWJsZSBzb2x1dGlvbnM6XG4gICAgICAgICAgICAtIEFkZCBhIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eSwgdGhlIGNvbnRlbnRzIHNob3VsZCBiZSBhIHNtYWxsIERhdGEgVVJMIHRvIHJlcHJlc2VudCB0aGUgaW1hZ2VcbiAgICAgICAgICAgIC0gQ2hhbmdlIHRoZSBcInNyY1wiIHByb3BlcnR5IHRvIGEgc3RhdGljIGltcG9ydCB3aXRoIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZpbGUgdHlwZXM6ICR7VkFMSURfQkxVUl9FWFQuam9pbignLCcpfVxuICAgICAgICAgICAgLSBSZW1vdmUgdGhlIFwicGxhY2Vob2xkZXJcIiBwcm9wZXJ0eSwgZWZmZWN0aXZlbHkgbm8gYmx1ciBlZmZlY3RcbiAgICAgICAgICBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3BsYWNlaG9sZGVyLWJsdXItZGF0YS11cmxgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3JlZicgaW4gcmVzdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwicmVmXCIgcHJvcGVydHkuIENvbnNpZGVyIHVzaW5nIHRoZSBcIm9uTG9hZGluZ0NvbXBsZXRlXCIgcHJvcGVydHkgaW5zdGVhZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3N0eWxlJyBpbiByZXN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJzdHlsZVwiIHByb3BlcnR5LiBQbGVhc2UgdXNlIHRoZSBcImNsYXNzTmFtZVwiIHByb3BlcnR5IGluc3RlYWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApICsgMTAwO1xuICAgICAgICBpZiAoIXVub3B0aW1pemVkICYmICFsb2FkZXIoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgd2lkdGg6IHJhbmQsXG4gICAgICAgICAgICBxdWFsaXR5OiA3NVxuICAgICAgICB9KS5pbmNsdWRlcyhyYW5kLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGEgXCJsb2FkZXJcIiBwcm9wZXJ0eSB0aGF0IGRvZXMgbm90IGltcGxlbWVudCB3aWR0aC4gUGxlYXNlIGltcGxlbWVudCBpdCBvciB1c2UgdGhlIFwidW5vcHRpbWl6ZWRcIiBwcm9wZXJ0eSBpbnN0ZWFkLmAgKyBgXFxuUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLW1pc3NpbmctbG9hZGVyLXdpZHRoYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogbGF6eUJvdW5kYXJ5LFxuICAgICAgICBkaXNhYmxlZDogIWlzTGF6eVxuICAgIH0pO1xuICAgIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZDtcbiAgICBsZXQgd3JhcHBlclN0eWxlO1xuICAgIGxldCBzaXplclN0eWxlO1xuICAgIGxldCBzaXplclN2ZztcbiAgICBsZXQgaW1nU3R5bGUgPSB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgICAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgb2JqZWN0Rml0LFxuICAgICAgICBvYmplY3RQb3NpdGlvblxuICAgIH07XG4gICAgY29uc3QgYmx1clN0eWxlID0gcGxhY2Vob2xkZXIgPT09ICdibHVyJyA/IHtcbiAgICAgICAgZmlsdGVyOiAnYmx1cigyMHB4KScsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBvYmplY3RGaXQgfHwgJ2NvdmVyJyxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiJHtibHVyRGF0YVVSTH1cIilgLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IG9iamVjdFBvc2l0aW9uIHx8ICcwJSAwJSdcbiAgICB9IDoge1xuICAgIH07XG4gICAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnKSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnQ7XG4gICAgICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBpc05hTihxdW90aWVudCkgPyAnMTAwJScgOiBgJHtxdW90aWVudCAqIDEwMH0lYDtcbiAgICAgICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmA7XG4gICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZml4ZWQnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0SW50XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgaW1nQXR0cmlidXRlcyA9IHtcbiAgICAgICAgc3JjOiAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxcbiAgICAgICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgICAgIHNpemVzOiB1bmRlZmluZWRcbiAgICB9O1xuICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICAgICAgc2l6ZXMsXG4gICAgICAgICAgICBsb2FkZXJcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBzcmNTdHJpbmcgPSBzcmM7XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiB3cmFwcGVyU3R5bGVcbiAgICB9LCBzaXplclN0eWxlID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHNpemVyU3R5bGVcbiAgICB9LCBzaXplclN2ZyA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgcGFkZGluZzogMFxuICAgICAgICB9LFxuICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICAgICAgc3JjOiBgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwkeygwLCBfdG9CYXNlNjQpLnRvQmFzZTY0KHNpemVyU3ZnKX1gXG4gICAgfSkgOiBudWxsKSA6IG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCBPYmplY3QuYXNzaWduKHtcbiAgICB9LCByZXN0LCBpbWdBdHRyaWJ1dGVzLCB7XG4gICAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICAgIFwiZGF0YS1uaW1nXCI6IGxheW91dCxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIHJlZjogKGltZyk9PntcbiAgICAgICAgICAgIHNldFJlZihpbWcpO1xuICAgICAgICAgICAgaGFuZGxlTG9hZGluZyhpbWcsIHNyY1N0cmluZywgbGF5b3V0LCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpO1xuICAgICAgICB9LFxuICAgICAgICBzdHlsZTogX29iamVjdFNwcmVhZCh7XG4gICAgICAgIH0sIGltZ1N0eWxlLCBibHVyU3R5bGUpXG4gICAgfSkpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcmVzdCwgZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgIHNyYyxcbiAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgIGxheW91dCxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICBzaXplcyxcbiAgICAgICAgbG9hZGVyXG4gICAgfSksIHtcbiAgICAgICAgZGVjb2Rpbmc6IFwiYXN5bmNcIixcbiAgICAgICAgXCJkYXRhLW5pbWdcIjogbGF5b3V0LFxuICAgICAgICBzdHlsZTogaW1nU3R5bGUsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBsb2FkaW5nOiBsb2FkaW5nIHx8ICdsYXp5J1xuICAgIH0pKSksIHByaW9yaXR5ID8gLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuICAgIC8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuICAgIC8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbiAgICAvL1xuICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuICAgIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgICAga2V5OiAnX19uaW1nLScgKyBpbWdBdHRyaWJ1dGVzLnNyYyArIGltZ0F0dHJpYnV0ZXMuc3JjU2V0ICsgaW1nQXR0cmlidXRlcy5zaXplcyxcbiAgICAgICAgcmVsOiBcInByZWxvYWRcIixcbiAgICAgICAgYXM6IFwiaW1hZ2VcIixcbiAgICAgICAgaHJlZjogaW1nQXR0cmlidXRlcy5zcmNTZXQgPyB1bmRlZmluZWQgOiBpbWdBdHRyaWJ1dGVzLnNyYyxcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgIGltYWdlc3Jjc2V0OiBpbWdBdHRyaWJ1dGVzLnNyY1NldCxcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZS5cbiAgICAgICAgaW1hZ2VzaXplczogaW1nQXR0cmlidXRlcy5zaXplc1xuICAgIH0pKSA6IG51bGwpKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmMpIHtcbiAgICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmM7XG59XG5mdW5jdGlvbiBpbWdpeExvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2F1dG89Zm9ybWF0JmZpdD1tYXgmdz0zMDBcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX1gKTtcbiAgICBjb25zdCBwYXJhbXMgPSB1cmwuc2VhcmNoUGFyYW1zO1xuICAgIHBhcmFtcy5zZXQoJ2F1dG8nLCBwYXJhbXMuZ2V0KCdhdXRvJykgfHwgJ2Zvcm1hdCcpO1xuICAgIHBhcmFtcy5zZXQoJ2ZpdCcsIHBhcmFtcy5nZXQoJ2ZpdCcpIHx8ICdtYXgnKTtcbiAgICBwYXJhbXMuc2V0KCd3JywgcGFyYW1zLmdldCgndycpIHx8IHdpZHRoLnRvU3RyaW5nKCkpO1xuICAgIGlmIChxdWFsaXR5KSB7XG4gICAgICAgIHBhcmFtcy5zZXQoJ3EnLCBxdWFsaXR5LnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICByZXR1cm4gdXJsLmhyZWY7XG59XG5mdW5jdGlvbiBha2FtYWlMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggIH0pIHtcbiAgICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YDtcbn1cbmZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgICBjb25zdCBwYXJhbXMgPSBbXG4gICAgICAgICdmX2F1dG8nLFxuICAgICAgICAnY19saW1pdCcsXG4gICAgICAgICd3XycgKyB3aWR0aCxcbiAgICAgICAgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJylcbiAgICBdO1xuICAgIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nO1xuICAgIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YDtcbn1cbmZ1bmN0aW9uIGN1c3RvbUxvYWRlcih7IHNyYyAgfSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBtaXNzaW5nIFwibG9hZGVyXCIgcHJvcC5gICsgYFxcblJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS1taXNzaW5nLWxvYWRlcmApO1xufVxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBtaXNzaW5nVmFsdWVzID0gW107XG4gICAgICAgIC8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgICAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKTtcbiAgICAgICAgaWYgKCF3aWR0aCkgbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpO1xuICAgICAgICBpZiAobWlzc2luZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKCcsICcpfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgICAgIH0pfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgICAgICAgbGV0IHBhcnNlZFNyYztcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkU3JjID0gbmV3IFVSTChzcmMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiYgIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWA7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSB2b2lkIDA7XG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGNiKSB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2Ioe1xuICAgICAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIDEpO1xufTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2s7XG5jb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2sgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGlkKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG59O1xuZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSBjYW5jZWxJZGxlQ2FsbGJhY2s7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXNlSW50ZXJzZWN0aW9uID0gdXNlSW50ZXJzZWN0aW9uO1xudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7IHJvb3RNYXJnaW4gLCBkaXNhYmxlZCAgfSkge1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XG4gICAgY29uc3QgdW5vYnNlcnZlID0gKDAsIF9yZWFjdCkudXNlUmVmKCk7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gKDAsIF9yZWFjdCkudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHNldFJlZiA9ICgwLCBfcmVhY3QpLnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpO1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuO1xuICAgICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKGVsLCAoaXNWaXNpYmxlKT0+aXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKVxuICAgICAgICAgICAgLCB7XG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGlzRGlzYWJsZWQsXG4gICAgICAgIHJvb3RNYXJnaW4sXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICAoMCwgX3JlYWN0KS51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRWaXNpYmxlKHRydWUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCk9PigwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykuY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICByZXR1cm4gW1xuICAgICAgICBzZXRSZWYsXG4gICAgICAgIHZpc2libGVcbiAgICBdO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgaWQgLCBvYnNlcnZlciAsIGVsZW1lbnRzICB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7XG4gICAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKSB7XG4gICAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJyc7XG4gICAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZCk7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpPT57XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpPT57XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIG9wdGlvbnMpO1xuICAgIG9ic2VydmVycy5zZXQoaWQsIGluc3RhbmNlID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgb2JzZXJ2ZXIsXG4gICAgICAgIGVsZW1lbnRzXG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2luZGV4Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyXCI7XHJcbmltcG9ydCBNYWluIGZyb20gXCIuLi9jb21wb25lbnRzL01haW5cIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXIvSGVhZGVyXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IEluZGV4OiBSZWFjdC5GQyA9ICgpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuXHRcdFx0PEhlYWRlcj48L0hlYWRlcj5cclxuXHRcdFx0PE1haW4+PC9NYWluPlxyXG5cdFx0XHQ8Rm9vdGVyPjwvRm9vdGVyPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIiwiaW1wb3J0IHtncWx9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfT1JERVJfQllfSUQgPSBncWwgYFxyXG5cclxuXHRxdWVyeSBnZXRPcmRlckJ5SWQoJG9yZGVyOiBJRCEpIHtcclxuXHRcdFx0Z2V0T3JkZXJCeUlkKGlkOiAkb3JkZXIpIHtcclxuXHRcdFx0XHRpZCwgZnVsbF9uYW1lLCBlbWFpbFxyXG5cdFx0XHR9XHJcblx0fVxyXG5cdFxyXG5gIiwiaW1wb3J0IHtncWx9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfQUxMX1BST0RVQ1RTID0gZ3FsIGBcclxuXHJcblx0cXVlcnkge1xyXG5cdFx0Z2V0QWxsUHJvZHVjdHMge1xyXG5cdFx0XHRpZCwgbmFtZSwgZGVzY3JpcHRpb24sIHByaWNlXHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5gIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcblxyXG5jb25zdCBzZW50Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7IFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlbnRDb250ZXh0O1xyXG5cclxuXHJcblxyXG5cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9vdGVyXCI6IFwiRm9vdGVyX2Zvb3Rlcl9fMUtXMTdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyYXBwZXJcIjogXCJIZWFkZXJfd3JhcHBlcl9fSlJnSkFcIixcblx0XCJfY29udGFpbmVyXCI6IFwiSGVhZGVyX19jb250YWluZXJfXzNFaVUtXCIsXG5cdFwiaGVhZGVyXCI6IFwiSGVhZGVyX2hlYWRlcl9fMi1YV1hcIixcblx0XCJoZWFkZXJfX2NvbnRhaW5lclwiOiBcIkhlYWRlcl9oZWFkZXJfX2NvbnRhaW5lcl9fNC1YSklcIixcblx0XCJoZWFkZXJfX2xvZ29cIjogXCJIZWFkZXJfaGVhZGVyX19sb2dvX19FMXlsMVwiLFxuXHRcImhlYWRlcl9fbG9nb19pY29uXCI6IFwiSGVhZGVyX2hlYWRlcl9fbG9nb19pY29uX18yMFV0SlwiLFxuXHRcImhlYWRlcl9fbG9nb19pY29uX19pbWdcIjogXCJIZWFkZXJfaGVhZGVyX19sb2dvX2ljb25fX2ltZ19fSExPSEJcIixcblx0XCJoZWFkZXJfX2xvZ29fdGV4dFwiOiBcIkhlYWRlcl9oZWFkZXJfX2xvZ29fdGV4dF9fM1N1M2FcIixcblx0XCJoZWFkZXJfX2J1c2tldFwiOiBcIkhlYWRlcl9oZWFkZXJfX2J1c2tldF9fMm1uOFFcIixcblx0XCJoZWFkZXJfX2J1c2tldF90ZXh0XCI6IFwiSGVhZGVyX2hlYWRlcl9fYnVza2V0X3RleHRfXzF5MnFIXCIsXG5cdFwiaGVhZGVyX19idXNrZXRfaWNvblwiOiBcIkhlYWRlcl9oZWFkZXJfX2J1c2tldF9pY29uX19MaXhCWVwiLFxuXHRcImhlYWRlcl9fYnVza2V0X2NvdW50XCI6IFwiSGVhZGVyX2hlYWRlcl9fYnVza2V0X2NvdW50X19QbXIyNlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid3JhcHBlclwiOiBcIk1haW5fd3JhcHBlcl9fMm5KbG1cIixcblx0XCJfY29udGFpbmVyXCI6IFwiTWFpbl9fY29udGFpbmVyX18zb1E2M1wiLFxuXHRcInBhZ2VcIjogXCJNYWluX3BhZ2VfXzFhQVZVXCIsXG5cdFwicGFnZV9fbWFpblwiOiBcIk1haW5fcGFnZV9fbWFpbl9fQXJ4XzhcIixcblx0XCJtYWluXCI6IFwiTWFpbl9tYWluX182RFBpRFwiLFxuXHRcIm1haW5fX2JvZHlcIjogXCJNYWluX21haW5fX2JvZHlfXzJXMDZpXCIsXG5cdFwibWFpbl9fYm9keV9fY29udGFpbmVyXCI6IFwiTWFpbl9tYWluX19ib2R5X19jb250YWluZXJfX2ZCV2JKXCIsXG5cdFwibWFpbl9fZm9ybVwiOiBcIk1haW5fbWFpbl9fZm9ybV9fMXlPTWVcIixcblx0XCJtYWluX19mb3JtX190YWJzXCI6IFwiTWFpbl9tYWluX19mb3JtX190YWJzX18zczZGZFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid3JhcHBlclwiOiBcIk9yZGVyX3dyYXBwZXJfX084WHBoXCIsXG5cdFwiX2NvbnRhaW5lclwiOiBcIk9yZGVyX19jb250YWluZXJfX1RmcTdVXCIsXG5cdFwib3JkZXJcIjogXCJPcmRlcl9vcmRlcl9fNnZ1UC1cIixcblx0XCJvcmRlcl9fdGl0bGVcIjogXCJPcmRlcl9vcmRlcl9fdGl0bGVfX2RlY2N3XCIsXG5cdFwib3JkZXJfX251bWJlclwiOiBcIk9yZGVyX29yZGVyX19udW1iZXJfXzFXV240XCIsXG5cdFwib3JkZXJfX3RleHRcIjogXCJPcmRlcl9vcmRlcl9fdGV4dF9fMWVzNnhcIixcblx0XCJvcmRlcl9fZXN0aW1hdGVkXCI6IFwiT3JkZXJfb3JkZXJfX2VzdGltYXRlZF9fZzUwZy1cIixcblx0XCJvcmRlcl9fcHJpbnRfcmVjaXBlXCI6IFwiT3JkZXJfb3JkZXJfX3ByaW50X3JlY2lwZV9fM1RqZmNcIixcblx0XCJib2xkXCI6IFwiT3JkZXJfYm9sZF9fRF85T2lcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyYXBwZXJcIjogXCJQcm9kdWN0c193cmFwcGVyX18xbkkzQ1wiLFxuXHRcIl9jb250YWluZXJcIjogXCJQcm9kdWN0c19fY29udGFpbmVyX18xSEktYVwiLFxuXHRcIm1haW5fX3Byb2R1Y3RzXCI6IFwiUHJvZHVjdHNfbWFpbl9fcHJvZHVjdHNfX3RKQ1kyXCIsXG5cdFwicHJvZHVjdHNcIjogXCJQcm9kdWN0c19wcm9kdWN0c19fMkh2R1NcIixcblx0XCJwcm9kdWN0c19fdGV4dFwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RzX190ZXh0X19vREVRNVwiLFxuXHRcInByb2R1Y3RzX190ZXh0X3RpdGxlXCI6IFwiUHJvZHVjdHNfcHJvZHVjdHNfX3RleHRfdGl0bGVfXzJlMVlUXCIsXG5cdFwicHJvZHVjdHNfX3RleHRfZWRpdFwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RzX190ZXh0X2VkaXRfXzFuVjZqXCIsXG5cdFwicHJvZHVjdHNfX3Byb2R1Y3RcIjogXCJQcm9kdWN0c19wcm9kdWN0c19fcHJvZHVjdF9fMk5GVlpcIixcblx0XCJwcm9kdWN0c19fY29zdFwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RzX19jb3N0X18xMEpWc1wiLFxuXHRcInByb2R1Y3RzX19pbmZvcm1hdGlvblwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RzX19pbmZvcm1hdGlvbl9fM3haRUJcIixcblx0XCJwcm9kdWN0XCI6IFwiUHJvZHVjdHNfcHJvZHVjdF9fRUhVeU1cIixcblx0XCJwcm9kdWN0X19pbWFnZVwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RfX2ltYWdlX18xQ2haTlwiLFxuXHRcInByb2R1Y3RfX2NvbnRlbnRcIjogXCJQcm9kdWN0c19wcm9kdWN0X19jb250ZW50X18zcHhSVVwiLFxuXHRcInByb2R1Y3RfX2NvbnRlbnRfbmFtZVwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RfX2NvbnRlbnRfbmFtZV9fM1d2Y2VcIixcblx0XCJwcm9kdWN0X19jb250ZW50X2Rlc2NyaXB0aW9uXCI6IFwiUHJvZHVjdHNfcHJvZHVjdF9fY29udGVudF9kZXNjcmlwdGlvbl9fMkNqclJcIixcblx0XCJwcm9kdWN0X19jb250ZW50X3F1YW50aXR5XCI6IFwiUHJvZHVjdHNfcHJvZHVjdF9fY29udGVudF9xdWFudGl0eV9fcUJYSVFcIixcblx0XCJwcm9kdWN0X19wcmljZVwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RfX3ByaWNlX18yTjZjMFwiLFxuXHRcImNvc3RfX3N1YnRvdGFsXCI6IFwiUHJvZHVjdHNfY29zdF9fc3VidG90YWxfX0ZWZEdPXCIsXG5cdFwiY29zdF9fc2hpcHBpbmdcIjogXCJQcm9kdWN0c19jb3N0X19zaGlwcGluZ19fdWRiVWZcIixcblx0XCJjb3N0X190YXhlc1wiOiBcIlByb2R1Y3RzX2Nvc3RfX3RheGVzX19fOERLM1wiLFxuXHRcImNvc3RfX3RvdGFsXCI6IFwiUHJvZHVjdHNfY29zdF9fdG90YWxfXzFLTlNIXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwic3R5bGVzX3dyYXBwZXJfXzFDcFJPXCIsXG5cdFwiX2NvbnRhaW5lclwiOiBcInN0eWxlc19fY29udGFpbmVyX18xaHhFMlwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZW1haWxqcy1jb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pbnB1dC1tYXNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJGb290ZXIiLCJmb290ZXIiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQcm9kdWN0cyIsIlRhYnMiLCJzZW50Q29udGV4dCIsImVtYWlsanMiLCJPcmRlciIsInVzZU11dGF0aW9uIiwiQ1JFQVRFX09SREVSIiwiTWFpbiIsInN0YXRlIiwic2V0U3RhdGUiLCJuZXdPcmRlciIsIm9yZGVyIiwic2V0T3JkZXIiLCJzZXRUaW1lb3V0IiwibW9tZW50IiwicmVxdWlyZSIsIm5vdyIsInN1YnRyYWN0IiwiY29uc29sZSIsImxvZyIsInNlbmRFbWFpbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZnVsbF9uYW1lIiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiZW1haWwiLCJwaG9uZSIsInN0cmVldCIsImFwdCIsImNpdHkiLCJ6aXAiLCJjYXJkX251bWJlciIsImV4cGlyZV9kYXRlIiwic2VjdXJpdHlfY29kZSIsInZhcmlhYmxlcyIsImlucHV0IiwidGhlbiIsImRhdGEiLCJjcmVhdGVPcmRlciIsImlkIiwic2VuZEZvcm0iLCJ0YXJnZXQiLCJyZXN1bHQiLCJ0ZXh0IiwiZXJyb3IiLCJyZXNldCIsInBhZ2UiLCJwYWdlX19tYWluIiwibWFpbiIsIm1haW5fX2NvbnRhaW5lciIsIl9jb250YWluZXIiLCJtYWluX19ib2R5IiwibWFpbl9fYm9keV9fY29udGFpbmVyIiwibWFpbl9fZm9ybSIsInVzZVF1ZXJ5IiwiR0VUX0FMTF9QUk9EVUNUUyIsIkhlYWRlciIsInNlbGVjdGVkUHJvZHVjdHMiLCJzZXRTZWxlY3RlZFByb2R1Y3RzIiwibG9hZGluZyIsInJlZmV0Y2giLCJwb2xsSW50ZXJ2YWwiLCJnZXRBbGxQcm9kdWN0cyIsImhlYWRlciIsImhlYWRlcl9fY29udGFpbmVyIiwiaGVhZGVyX19sb2dvIiwiaGVhZGVyX19sb2dvX2ljb24iLCJoZWFkZXJfX2xvZ29fdGV4dCIsImhlYWRlcl9fYnVza2V0IiwiaGVhZGVyX19idXNrZXRfdGV4dCIsImhlYWRlcl9fYnVza2V0X2ljb24iLCJoZWFkZXJfX2J1c2tldF9jb3VudCIsImxlbmd0aCIsIkltYWdlIiwibWFpbl9fcHJvZHVjdHMiLCJwcm9kdWN0c19fdGV4dCIsInByb2R1Y3RzX190ZXh0X3RpdGxlIiwicHJvZHVjdHNfX3RleHRfZWRpdCIsInByb2R1Y3RzX19pdGVtcyIsIm1hcCIsInByb2R1Y3QiLCJwcm9kdWN0c19fcHJvZHVjdCIsInByb2R1Y3RfX2ltYWdlIiwicHJvZHVjdF9fY29udGVudCIsInByb2R1Y3RfX2NvbnRlbnRfbmFtZSIsIm5hbWUiLCJwcm9kdWN0X19jb250ZW50X2Rlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJwcm9kdWN0X19jb250ZW50X3F1YW50aXR5IiwicHJvZHVjdF9fcHJpY2UiLCJwcmljZSIsInByb2R1Y3RzX19jb3N0IiwiY29zdF9fc3VidG90YWwiLCJzdWJ0b3RhbF9fdGV4dCIsInN1YnRvdGFsX19jb3VudCIsInJlZHVjZSIsImFjYyIsImN1ciIsImNvc3RfX3NoaXBwaW5nIiwic2hpcHBpbmdfX3RleHQiLCJzaGlwcGluZ19fY291bnQiLCJjb3N0X190YXhlcyIsInRheGVzX190ZXh0IiwidGF4ZXNfX2NvdW50IiwiY29zdF9fdG90YWwiLCJ0b3RhbF9fdGV4dCIsInRvdGFsX19jb3VudCIsInByb2R1Y3RzX19pbmZvcm1hdGlvbiIsIkdFVF9PUkRFUl9CWV9JRCIsInNlbGVjdGVkT3JkZXIiLCJzZXRTZWxlY3RlZE9yZGVyIiwiZ2V0T3JkZXJCeUlkIiwib3JkZXJfX3RpdGxlIiwib3JkZXJfX251bWJlciIsIm9yZGVyX190ZXh0Iiwib3JkZXJfX2VzdGltYXRlZCIsImJvbGQiLCJvcmRlcl9fcHJpbnRfcmVjaXBlIiwidXNlR2VvbG9jYXRpb24iLCJ1c2VJZGVudGlmaWNhdGlvbkNhcmQiLCJ1c2VJbnB1dCIsIklucHV0TWFzayIsImZhQ3Jvc3NoYWlycyIsIkZvbnRBd2Vzb21lSWNvbiIsInRvZ2dsZUNsYXNzIiwic2V0VG9nZ2xlQ2xhc3MiLCJjYXJkVHlwZSIsInNldENhcmRUeXBlIiwiZGV0ZWN0ZWQiLCJzZXREZXRlY3RlZCIsImlzRW1wdHkiLCJtaW5MZW5ndGgiLCJjb3VudHJ5IiwiYiIsImlzRW1haWwiLCJnZW9sb2NhdGlvbiIsImdldERldGVjdGlvbiIsImlzTmV4dCIsImlzTWluTGVuZ3RoRXJyb3IiLCJvbkNoYW5nZSIsIm9uQmx1ciIsInVuZGVmaW5lZCIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJmb250U2l6ZSIsImN1cnNvciIsImNvbG9yIiwiaW5wdXRWYWxpZCIsImlzRW1haWxFcnJvciIsInNldENpdHkiLCJzZXRDb3VudHJ5Iiwic2V0WmlwIiwic3VjY2Vzc0NhbGxiYWNrIiwiZmV0Y2giLCJkIiwianNvbiIsInJlcyIsImNvdW50cnlfbmFtZSIsInBvc3RhbCIsImVycm9yQ2FsbGJhY2siLCJuYXZpZ2F0b3IiLCJnZXRDdXJyZW50UG9zaXRpb24iLCJyZWdleCIsIlJlZ0V4cCIsIm1hdGNoIiwidGVzdCIsInVzZVZhbGlkYXRpb24iLCJpbml0aWFsVmFsdWUiLCJ2YWxpZGF0aW9ucyIsInNldFZhbHVlIiwiaXNEaXJ0eSIsInNldElzRGlydHkiLCJzZXRJc05leHQiLCJ2YWxpZCIsIm9uQ2xpY2siLCJzZXRJc0VtcHR5Iiwic2V0SXNFbWFpbEVycm9yIiwic2V0SXNNaW5MZW5ndGhFcnJvciIsInNldElucHV0VmFsaWQiLCJ2YWxpZGF0aW9uIiwicmUiLCJTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsImdxbCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsImRlZmF1bHQiLCJJbWFnZTEiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX2hlYWQiLCJfdG9CYXNlNjQiLCJfaW1hZ2VDb25maWciLCJfdXNlSW50ZXJzZWN0aW9uIiwiX2RlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX19lc01vZHVsZSIsIl9vYmplY3RTcHJlYWQiLCJpIiwiYXJndW1lbnRzIiwic291cmNlIiwib3duS2V5cyIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJjb25jYXQiLCJmaWx0ZXIiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJmb3JFYWNoIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiZXhjbHVkZWQiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsInNvdXJjZVN5bWJvbEtleXMiLCJpbmRleE9mIiwicHJvdG90eXBlIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJjYWxsIiwic291cmNlS2V5cyIsImxvYWRlZEltYWdlVVJMcyIsIlNldCIsImdsb2JhbCIsIl9fTkVYVF9JTUFHRV9JTVBPUlRFRCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwibG9hZGVycyIsIk1hcCIsImRlZmF1bHRMb2FkZXIiLCJpbWdpeExvYWRlciIsImNsb3VkaW5hcnlMb2FkZXIiLCJha2FtYWlMb2FkZXIiLCJjdXN0b21Mb2FkZXIiLCJWQUxJRF9MQVlPVVRfVkFMVUVTIiwiaXNTdGF0aWNSZXF1aXJlIiwic3JjIiwiaXNTdGF0aWNJbWFnZURhdGEiLCJpc1N0YXRpY0ltcG9ydCIsImRldmljZVNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwiY29uZmlnSW1hZ2VTaXplcyIsImxvYWRlciIsImNvbmZpZ0xvYWRlciIsInBhdGgiLCJjb25maWdQYXRoIiwiZG9tYWlucyIsImNvbmZpZ0RvbWFpbnMiLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX0lNQUdFX09QVFMiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsInNvcnQiLCJhIiwiZ2V0V2lkdGhzIiwid2lkdGgiLCJsYXlvdXQiLCJzaXplcyIsInZpZXdwb3J0V2lkdGhSZSIsInBlcmNlbnRTaXplcyIsImV4ZWMiLCJwdXNoIiwicGFyc2VJbnQiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIm1pbiIsIndpZHRocyIsInMiLCJraW5kIiwidyIsImZpbmQiLCJwIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJqb2luIiwiZ2V0SW50IiwieCIsImRlZmF1bHRJbWFnZUxvYWRlciIsImxvYWRlclByb3BzIiwibG9hZCIsImdldCIsInJvb3QiLCJFcnJvciIsIlZBTElEX0xPQURFUlMiLCJoYW5kbGVMb2FkaW5nIiwiaW1nIiwicGxhY2Vob2xkZXIiLCJvbkxvYWRpbmdDb21wbGV0ZSIsImhhbmRsZUxvYWQiLCJzdGFydHNXaXRoIiwiZGVjb2RlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjYXRjaCIsInN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJhZGQiLCJuYXR1cmFsV2lkdGgiLCJuYXR1cmFsSGVpZ2h0IiwicmVmIiwicGFyZW50RWxlbWVudCIsInBhcmVudCIsImdldENvbXB1dGVkU3R5bGUiLCJkaXNwbGF5Iiwid2FybiIsImNvbXBsZXRlIiwib25sb2FkIiwiX3BhcmFtIiwicHJpb3JpdHkiLCJsYXp5Qm91bmRhcnkiLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImJsdXJEYXRhVVJMIiwiYWxsIiwicmVzdCIsInN0YXRpY1NyYyIsInN0YXRpY0ltYWdlRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aWR0aEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpc0xhenkiLCJoYXMiLCJpbmNsdWRlcyIsImlzTmFOIiwiVkFMSURfQkxVUl9FWFQiLCJyYW5kIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsInNldFJlZiIsImlzSW50ZXJzZWN0ZWQiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3cmFwcGVyU3R5bGUiLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdTdHlsZSIsImxlZnQiLCJib3R0b20iLCJib3hTaXppbmciLCJwYWRkaW5nIiwiYm9yZGVyIiwibWFyZ2luIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsImJsdXJTdHlsZSIsImJhY2tncm91bmRQb3NpdGlvbiIsIm92ZXJmbG93IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaW1nQXR0cmlidXRlcyIsInNyY1N0cmluZyIsImNyZWF0ZUVsZW1lbnQiLCJhbHQiLCJ0b0Jhc2U2NCIsImFzc2lnbiIsImRlY29kaW5nIiwicmVsIiwiYXMiLCJocmVmIiwiaW1hZ2VzcmNzZXQiLCJpbWFnZXNpemVzIiwibm9ybWFsaXplU3JjIiwic2xpY2UiLCJ1cmwiLCJVUkwiLCJwYXJhbXMiLCJzZWFyY2hQYXJhbXMiLCJzZXQiLCJwYXJhbXNTdHJpbmciLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiZXJyIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJ3aW5kb3ciLCJjYiIsInN0YXJ0IiwiRGF0ZSIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwibWF4IiwiY2xlYXJUaW1lb3V0IiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInVzZVJlZiIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlQ2FsbGJhY2siLCJlbCIsImN1cnJlbnQiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImluc3RhbmNlIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIkluZGV4Iiwid3JhcHBlciIsImNyZWF0ZUNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9