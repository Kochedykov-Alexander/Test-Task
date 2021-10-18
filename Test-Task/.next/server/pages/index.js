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
    const apt = form.querySelector('[name="apt"]').value;
    const city = form.querySelector('[name="city"]').value;
    const country = form.querySelector('[name="country"]').value;
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
                lineNumber: 86,
                columnNumber: 18
              }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_UI_Order__WEBPACK_IMPORTED_MODULE_5__.default, {
                order: order
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 28
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 7
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Products__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 7
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 77,
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
  var geolocation = (0,_hooks_useGeolocation__WEBPACK_IMPORTED_MODULE_1__.useGeolocation)();
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
  const country = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.useInput)('', {
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {}, [geolocation]);

  const getDetected = () => {
    geolocation;
  };

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
        lineNumber: 76,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: toggleClass === 2 ? "tabs active-tabs" : "tabs",
        onClick: () => setToggleClass(2),
        children: "Billing"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: toggleClass === 3 ? "tabs active-tabs" : "tabs",
        onClick: () => setToggleClass(3),
        children: "Payment"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
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
          lineNumber: 83,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "content__recipient",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "content__recipient_text",
            children: "Recipient"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "content__inputs",
          children: [(b.isNext && full_name.isEmpty || b.isNext && full_name.isMinLengthError) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "message",
            children: "Please enter recipient full name and min length = 3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
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
            lineNumber: 95,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "content__inputs_daytime_container",
            children: [b.isNext && phone.isEmpty && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "message",
              children: "Please enter recipient phone in format +7 (000) 000 00 00"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
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
              lineNumber: 100,
              columnNumber: 13
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("label", {
              htmlFor: "content__inputs_daytime_label",
              children: "For delivery questions only"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "content__address",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "content__address_text",
            children: "Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "content__inputs",
          children: [b.isNext && street.isEmpty && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "message",
            children: "Please enter recipient street"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
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
            lineNumber: 114,
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
            lineNumber: 116,
            columnNumber: 11
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
              lineNumber: 120,
              columnNumber: 11
            }, undefined), !geolocation ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
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
              lineNumber: 121,
              columnNumber: 28
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
              lineNumber: 121,
              columnNumber: 186
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 118,
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
                  lineNumber: 128,
                  columnNumber: 12
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("datalist", {
                  id: "cityname",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                    value: "Boston"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 130,
                    columnNumber: 14
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                    value: "Cambridge"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 14
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 13
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 12
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
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
              lineNumber: 136,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 111,
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
          lineNumber: 140,
          columnNumber: 11
        }, undefined), !(full_name.inputValid && phone.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
          className: "content__button",
          style: {
            cursor: 'pointer'
          },
          children: "Continue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: toggleClass === 2 ? "content active-content" : "content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "content__title",
          children: "Billing Information"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
          onClick: () => setToggleClass(1),
          className: "content__recipient_link",
          children: "Same as shipping"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "content__recipient",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "content__recipient_text",
            children: "Billing Contact"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "content__inputs",
          children: [(b.isNext && full_name.isEmpty || b.isNext && full_name.isMinLengthError) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "message",
            children: "Please enter recipient full name and min length = 3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
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
            lineNumber: 163,
            columnNumber: 11
          }, undefined), b.isNext && email.isEmailError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "message",
            children: "Please enter correct email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
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
            lineNumber: 166,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "content__address",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "content__address_text",
            children: "Billing Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "content__inputs",
          children: [b.isNext && street.isEmpty && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "message",
            children: "Please enter recipient street"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
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
            lineNumber: 178,
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
            lineNumber: 180,
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
              lineNumber: 183,
              columnNumber: 11
            }, undefined), !geolocation ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
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
              lineNumber: 184,
              columnNumber: 28
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
              lineNumber: 184,
              columnNumber: 164
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 182,
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
                  lineNumber: 191,
                  columnNumber: 12
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("datalist", {
                  id: "cityname",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                    value: "Boston"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 193,
                    columnNumber: 14
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                    value: "Cambridge"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 194,
                    columnNumber: 14
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 192,
                  columnNumber: 13
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 12
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
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
              lineNumber: 199,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 176,
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
          lineNumber: 203,
          columnNumber: 11
        }, undefined), !(full_name.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
          className: "content__button",
          style: {
            cursor: 'pointer'
          },
          children: "Continue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: toggleClass === 3 ? "content active-content" : "content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "content__title",
          children: "Payment"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 211,
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
              lineNumber: 216,
              columnNumber: 12
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "content__ssl_text",
            children: "This is a secure 128-bit SSL encrypted payment"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "content__recipient",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "content__recipient_text",
            children: "Cardholder Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "content__inputs",
          children: [(b.isNext && full_name.isEmpty || b.isNext && full_name.isMinLengthError) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "message",
            children: "Please enter recipient full name and min length = 3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
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
            lineNumber: 227,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 10
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "content__address",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "content__address_text",
            children: "Card Number"
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
            lineNumber: 236,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
            src: cardType,
            alt: ""
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
          className: "content__cards__info",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "content__cards__info__expire",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "content__cards_info__expire_text",
              children: "Expire Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 242,
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
              lineNumber: 243,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "content__cards__info__security",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "content__cards_info__security_text",
              children: "Security Code"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 246,
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
              lineNumber: 247,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 10
        }, undefined), full_name.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid && card_number.inputValid && security_code.inputValid && expire_date.inputValid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("button", {
          className: "content__button",
          type: "submit",
          children: "Pay Securely"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 10
        }, undefined), !(full_name.inputValid && street.inputValid && city.inputValid && country.inputValid && zip.inputValid && card_number.inputValid && security_code.inputValid && expire_date.inputValid) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("button", {
          className: "content__button disabled",
          disabled: true,
          children: "Pay Securely"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 10
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 8
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
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

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("jquery");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkEsMkdBQStDOzs7Ozs7Ozs7Ozs7QUNBL0M7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OZXh0Ly4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLnRzeCIsIndlYnBhY2s6Ly9OZXh0Ly4vY29tcG9uZW50cy9NYWluLnRzeCIsIndlYnBhY2s6Ly9OZXh0Ly4vY29tcG9uZW50cy9OYXZiYXIvSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly9OZXh0Ly4vY29tcG9uZW50cy9Qcm9kdWN0cy50c3giLCJ3ZWJwYWNrOi8vTmV4dC8uL2NvbXBvbmVudHMvVUkvT3JkZXIudHN4Iiwid2VicGFjazovL05leHQvLi9jb21wb25lbnRzL1VJL1RhYnMudHN4Iiwid2VicGFjazovL05leHQvLi9ob29rcy91c2VHZW9sb2NhdGlvbi50cyIsIndlYnBhY2s6Ly9OZXh0Ly4vaG9va3MvdXNlSWRlbnRpZmljYXRpb25DYXJkLnRzIiwid2VicGFjazovL05leHQvLi9ob29rcy91c2VJbnB1dC50cyIsIndlYnBhY2s6Ly9OZXh0Ly4vaG9va3MvdXNlVmFsaWRhdGlvbi50cyIsIndlYnBhY2s6Ly9OZXh0Ly4vbXV0YXRpb25zL29yZGVyLnRzIiwid2VicGFjazovL05leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9OZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL05leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL05leHQvLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vTmV4dC8uL3F1ZXJ5L29yZGVyLnRzIiwid2VicGFjazovL05leHQvLi9xdWVyeS9wcm9kdWN0LnRzIiwid2VicGFjazovL05leHQvLi9zaGFyZWQvY29udGV4dC50cyIsIndlYnBhY2s6Ly9OZXh0Ly4vc3R5bGVzL0Zvb3Rlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9OZXh0Ly4vc3R5bGVzL0hlYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9OZXh0Ly4vc3R5bGVzL01haW4ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vTmV4dC8uL3N0eWxlcy9PcmRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9OZXh0Ly4vc3R5bGVzL1Byb2R1Y3RzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL05leHQvLi9zdHlsZXMvaW5kZXgubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vTmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovL05leHQvZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovL05leHQvZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIiIsIndlYnBhY2s6Ly9OZXh0L2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIiLCJ3ZWJwYWNrOi8vTmV4dC9leHRlcm5hbCBcImVtYWlsanMtY29tXCIiLCJ3ZWJwYWNrOi8vTmV4dC9leHRlcm5hbCBcImpxdWVyeVwiIiwid2VicGFjazovL05leHQvZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly9OZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9OZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL05leHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vTmV4dC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vTmV4dC9leHRlcm5hbCBcInJlYWN0LWlucHV0LW1hc2tcIiIsIndlYnBhY2s6Ly9OZXh0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Gb290ZXIubW9kdWxlLnNjc3MnXHJcblxyXG5jb25zdCBGb290ZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XHJcblx0XHRcdFxyXG5cdFx0PC9mb290ZXI+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL01haW4ubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBQcm9kdWN0cyBmcm9tICcuL1Byb2R1Y3RzJ1xyXG5pbXBvcnQgVGFicyBmcm9tICcuL1VJL1RhYnMnXHJcbmltcG9ydCB7IElQcm9kdWN0IH0gZnJvbSBcIi4uL3R5cGVzL0lQcm9kdWN0XCI7XHJcbmltcG9ydCBzZW50Q29udGV4dCBmcm9tICcuLi9zaGFyZWQvY29udGV4dCc7XHJcbmltcG9ydCBlbWFpbGpzIGZyb20gJ2VtYWlsanMtY29tJztcclxuaW1wb3J0IE9yZGVyIGZyb20gJy4vVUkvT3JkZXInO1xyXG5pbXBvcnQgeyB1c2VHZW9sb2NhdGlvbiB9IGZyb20gJy4uL2hvb2tzL3VzZUdlb2xvY2F0aW9uJztcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCB7IENSRUFURV9PUkRFUiB9IGZyb20gJy4uL211dGF0aW9ucy9vcmRlcic7XHJcbmltcG9ydCB7IGNyZWF0ZVJvdXRlTG9hZGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXInO1xyXG5cclxuXHJcbmNvbnN0IE1haW46IFJlYWN0LkZDID0gKCkgPT4ge1xyXG5cclxuXHRjb25zdCB7c3RhdGUsIHNldFN0YXRlfSA9IHVzZUNvbnRleHQoc2VudENvbnRleHQpO1xyXG5cdGNvbnN0IFtuZXdPcmRlcl0gPSB1c2VNdXRhdGlvbihDUkVBVEVfT1JERVIpO1xyXG5cdGNvbnN0IFtvcmRlciwgc2V0T3JkZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcblx0XHJcblx0XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmKHN0YXRlID09IHRydWUpIHtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiBzZXRTdGF0ZShmYWxzZSksIDEwMDAwKVxyXG5cdFx0fVxyXG5cdH0sIFtzdGF0ZV0pXHJcblxyXG5cdGNvbnN0IG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpO1xyXG5cclxuXHRjb25zdCBub3cgPSBtb21lbnQoKTtcclxuXHJcblx0bm93LnN1YnRyYWN0KCdzZWNvbmRzJywgNyk7IC8vIHRha2VzIDcgc2Vjb25kcyBvZiB0aGUgY3VycmVudCB0aW1lXHJcblx0Y29uc29sZS5sb2cobm93LnN1YnRyYWN0KCdkYXlzJywgNykpOyAgICAvLyB0YWtlcyA3IGRheXMgb2YgdGhlIGN1cnJlbnQgZGF0ZVxyXG5cdG5vdy5zdWJ0cmFjdCgnbW9udGhzJywgNyk7ICAvLyB0YWtlcyA3IG1vbnRocyBvZiB0aGUgY3VycmVudCBkYXRlXHJcblx0bm93LnN1YnRyYWN0KCd5ZWFycycsIDcpOyBcclxuXHJcblx0ZnVuY3Rpb24gc2VuZEVtYWlsKGUpIHtcclxuXHRcdFxyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpO1xyXG5cdFx0Y29uc3QgZnVsbF9uYW1lID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cIm5hbWVcIl0nKS52YWx1ZVxyXG5cdFx0Y29uc3QgZW1haWwgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZW1haWxcIl0nKS52YWx1ZVxyXG5cdFx0Y29uc3QgcGhvbmUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwicGhvbmVcIl0nKS52YWx1ZVxyXG5cdFx0Y29uc3Qgc3RyZWV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInN0cmVldFwiXScpLnZhbHVlXHJcblx0XHRjb25zdCBhcHQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiYXB0XCJdJykudmFsdWVcclxuXHRcdGNvbnN0IGNpdHkgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiY2l0eVwiXScpLnZhbHVlXHJcblx0XHRjb25zdCBjb3VudHJ5ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImNvdW50cnlcIl0nKS52YWx1ZVxyXG5cdFx0Y29uc3QgemlwID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInppcFwiXScpLnZhbHVlXHJcblx0XHRjb25zdCBjYXJkX251bWJlciA9IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJjYXJkX251bWJlclwiXScpLnZhbHVlXHJcblx0XHRjb25zdCBleHBpcmVfZGF0ZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJleHBpcmVfZGF0ZVwiXScpLnZhbHVlXHJcblx0XHRjb25zdCBzZWN1cml0eV9jb2RlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInNlY3VyaXR5X2NvZGVcIl0nKS52YWx1ZVxyXG5cdFx0XHJcblx0XHRuZXdPcmRlcih7XHJcblx0XHRcdHZhcmlhYmxlczoge1xyXG5cdFx0XHRcdGlucHV0OiB7XHJcblx0XHRcdFx0XHRmdWxsX25hbWUsIGVtYWlsLCBwaG9uZSwgc3RyZWV0LCBhcHQsIGNpdHksIGNvdW50cnksIHppcCwgY2FyZF9udW1iZXIsIGV4cGlyZV9kYXRlLCBzZWN1cml0eV9jb2RlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KS50aGVuKCh7ZGF0YX0pID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coZGF0YS5jcmVhdGVPcmRlcilcclxuXHRcdFx0c2V0T3JkZXIoZGF0YS5jcmVhdGVPcmRlci5pZClcdFxyXG5cdFx0fSlcclxuXHRcdHNldFN0YXRlKHRydWUpXHJcblx0XHRlbWFpbGpzLnNlbmRGb3JtKCdzZXJ2aWNlX293b21vZXUnLCAndGVtcGxhdGVfeDl0aTJ0dicsIGUudGFyZ2V0LCAndXNlcl9DRHFQT083OTJKV1JpY0dPajJ3V24nKVxyXG5cdFx0ICAudGhlbigocmVzdWx0KSA9PiB7IFxyXG5cdFx0XHQgIGNvbnNvbGUubG9nKHJlc3VsdC50ZXh0KTtcclxuXHJcblx0XHQgIH0sIChlcnJvcikgPT4ge1xyXG5cdFx0XHQgIGNvbnNvbGUubG9nKGVycm9yLnRleHQpO1xyXG5cdFx0ICB9KTtcclxuXHRcdCAgZS50YXJnZXQucmVzZXQ7XHJcblx0XHQgXHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLnBhZ2V9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2VfX21haW4gKyBcIiBcIiArIHN0eWxlcy5tYWlufT5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5fX2NvbnRhaW5lciArIFwiIFwiICsgc3R5bGVzLl9jb250YWluZXJ9PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluX19ib2R5fT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluX19ib2R5X19jb250YWluZXJ9PlxyXG5cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDxmb3JtIGlkPVwiZm9ybVwiIGNsYXNzTmFtZT17c3R5bGVzLm1haW5fX2Zvcm19IG9uU3VibWl0PXtzZW5kRW1haWx9PlxyXG5cdFx0XHRcdFx0XHRcdHshc3RhdGUgPyA8VGFicy8+IDogPE9yZGVyIG9yZGVyPXtvcmRlcn0vPn1cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHRcdFx0XHQ8UHJvZHVjdHMvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvbWFpbj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW47XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tICcuLi8uLi90eXBlcy9JUHJvZHVjdCc7XHJcbmltcG9ydCB7IEdFVF9BTExfUFJPRFVDVFMgfSBmcm9tICcuLi8uLi9xdWVyeS9wcm9kdWN0JztcclxuXHJcblxyXG5cclxuY29uc3QgSGVhZGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuXHJcblx0Y29uc3QgW3NlbGVjdGVkUHJvZHVjdHMsIHNldFNlbGVjdGVkUHJvZHVjdHNdID0gdXNlU3RhdGU8SVByb2R1Y3RbXT4oW10pXHJcblx0Y29uc3Qge2RhdGEsIGxvYWRpbmcsIGVycm9yLCByZWZldGNofSA9IHVzZVF1ZXJ5KEdFVF9BTExfUFJPRFVDVFMsIHtwb2xsSW50ZXJ2YWw6IDUwMH0pO1xyXG5cdFxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKCFsb2FkaW5nKSB7XHJcblx0XHRcdHNldFNlbGVjdGVkUHJvZHVjdHMoZGF0YS5nZXRBbGxQcm9kdWN0cylcclxuXHRcdH1cdFxyXG5cdH0sIFtkYXRhXSlcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfX2NvbnRhaW5lciArIFwiIFwiICsgc3R5bGVzLl9jb250YWluZXJ9ID5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fbG9nb30+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fbG9nb19pY29ufT5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9Jy4uLy4uL2xvZ28ucG5nJyBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSB7c3R5bGVzLmhlYWRlcl9fbG9nb190ZXh0fT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fYnVza2V0fT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fYnVza2V0X3RleHR9PlxyXG5cdFx0XHRcdFx0Y2FydFxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX19idXNrZXRfaWNvbn0+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz0nLi4vLi4vYmFza2V0LnBuZycgYWx0PVwiXCIvPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX19idXNrZXRfY291bnR9PntzZWxlY3RlZFByb2R1Y3RzID8gc2VsZWN0ZWRQcm9kdWN0cy5sZW5ndGggOiAnMCd9PC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHRcclxuXHRcdDwvaGVhZGVyPlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1Byb2R1Y3RzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJy4uL3R5cGVzL0lQcm9kdWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgR0VUX0FMTF9QUk9EVUNUUyB9IGZyb20gJy4uL3F1ZXJ5L3Byb2R1Y3QnO1xyXG5cclxuXHJcblxyXG5jb25zdCBQcm9kdWN0czogUmVhY3QuRkMgPSAoKSA9PiB7XHJcblxyXG5cdGNvbnN0IFtzZWxlY3RlZFByb2R1Y3RzLCBzZXRTZWxlY3RlZFByb2R1Y3RzXSA9IHVzZVN0YXRlPElQcm9kdWN0W10+KFtdKVxyXG5cdGNvbnN0IHtkYXRhLCBsb2FkaW5nLCBlcnJvciwgcmVmZXRjaH0gPSB1c2VRdWVyeShHRVRfQUxMX1BST0RVQ1RTLCB7cG9sbEludGVydmFsOiA1MDB9KTtcclxuXHRcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmICghbG9hZGluZykge1xyXG5cdFx0XHRzZXRTZWxlY3RlZFByb2R1Y3RzKGRhdGEuZ2V0QWxsUHJvZHVjdHMpXHJcblx0XHR9XHRcclxuXHR9LCBbZGF0YV0pXHJcblx0XHJcblx0aWYgKGxvYWRpbmcpIHtcclxuXHRcdHJldHVybiA8aDE+TG9hZGluZy4uLjwvaDE+XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbl9fcHJvZHVjdHN9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RzX190ZXh0fT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RzX190ZXh0X3RpdGxlfT5cclxuXHRcdFx0XHRcdE9yZGVyIHN1bW1hcnlcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8YSBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0c19fdGV4dF9lZGl0fT5cclxuXHRcdFx0XHRcdGVkaXQgb3JkZXJcclxuXHRcdFx0XHQ8L2E+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8dWwgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdHNfX2l0ZW1zfT5cclxuXHRcdFx0XHR7IWxvYWRpbmcgJiYgIHNlbGVjdGVkUHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gXHJcblx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdHNfX3Byb2R1Y3R9IGtleT17cHJvZHVjdC5pZH0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdF9faW1hZ2V9PlxyXG5cdFx0XHRcdFx0XHRcdDxJbWFnZSBzcmM9ICcvLi4vcHVibGljL3N1bWthLnBuZycgd2lkdGg9ezQ1fSBoZWlnaHQ9ezQ1fSBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RfX2NvbnRlbnR9PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdF9fY29udGVudF9uYW1lfT5cclxuXHRcdFx0XHRcdFx0XHRcdHtwcm9kdWN0Lm5hbWV9XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0X19jb250ZW50X2Rlc2NyaXB0aW9ufT5cclxuXHRcdFx0XHRcdFx0XHRcdHtwcm9kdWN0LmRlc2NyaXB0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdF9fY29udGVudF9xdWFudGl0eX0+XHJcblx0XHRcdFx0XHRcdFx0XHRRdWFudGl0eTogMVxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RfX3ByaWNlfT5cclxuXHRcdFx0XHRcdFx0XHRcdCR7cHJvZHVjdC5wcmljZX1cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHJcblx0XHRcdFx0KX1cclxuXHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RzX19jb3N0fT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29zdF9fc3VidG90YWx9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1YnRvdGFsX190ZXh0fT5cclxuXHRcdFx0XHRcdFx0XHRTdWJ0b3RhbFxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0b3RhbF9fY291bnR9PlxyXG5cdFx0XHRcdFx0XHRcdCR7IWxvYWRpbmcgJiYgc2VsZWN0ZWRQcm9kdWN0cy5yZWR1Y2UoKGFjYywgY3VyKSA9PiB7IHJldHVybiBhY2MgKyBjdXIucHJpY2UgfSwgMCl9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvc3RfX3NoaXBwaW5nfT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaGlwcGluZ19fdGV4dH0+XHJcblx0XHRcdFx0XHRcdFx0U2hpcHBpbmdcclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2hpcHBpbmdfX2NvdW50fT5cclxuXHRcdFx0XHRcdFx0XHRGcmVlXHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvc3RfX3RheGVzfT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YXhlc19fdGV4dH0+XHJcblx0XHRcdFx0XHRcdFx0VGF4ZXNcclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGF4ZXNfX2NvdW50fT5cclxuXHRcdFx0XHRcdFx0XHR7IWxvYWRpbmcgJiYgc2VsZWN0ZWRQcm9kdWN0cy5yZWR1Y2UoKGFjYywgY3VyKSA9PiBhY2MgKyBjdXIucHJpY2UsIDApKjAuMDN9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvc3RfX3RvdGFsfT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3RhbF9fdGV4dH0+XHJcblx0XHRcdFx0XHRcdFx0VG90YWxcclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG90YWxfX2NvdW50fT5cclxuXHRcdFx0XHRcdFx0XHQkeyFsb2FkaW5nICYmIHNlbGVjdGVkUHJvZHVjdHMucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjICsgY3VyLnByaWNlLCAwKSArIHNlbGVjdGVkUHJvZHVjdHMucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjICsgY3VyLnByaWNlLCAwKSowLjAzfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdHNfX2luZm9ybWF0aW9ufT5cclxuXHRcdFx0XHRcdEFsbCBwdXJjaGFzZXMgYXJlIHN1YmplY3QgdG8gb3VyIFRlcm1zIGFuZCBDb25kaXRpb25zLlxyXG5cdFx0XHRcdDwvZm9vdGVyPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0cztcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL09yZGVyLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgR0VUX09SREVSX0JZX0lEIH0gZnJvbSAnLi4vLi4vcXVlcnkvb3JkZXInO1xyXG5cclxuaW50ZXJmYWNlIE9yZGVyU3RhdGUge1xyXG5cdG9yZGVyOiBudW1iZXI7XHJcblx0Ly8gaWQ6IG51bWJlcjtcclxuXHQvLyBmdWxsX25hbWU6IHN0cmluZztcclxuICAgIC8vIHBob25lOiBzdHJpbmc7XHJcbiAgICAvLyBlbWFpbDogc3RyaW5nO1xyXG4gICAgLy8gY2l0eTogc3RyaW5nO1xyXG5cdC8vIGRhdGE6IE9iamVjdFxyXG5cdC8vIHN0cmVldDogc3RyaW5nO1xyXG4gICAgLy8gYXB0OiBzdHJpbmc7XHJcblx0Ly8gemlwOiBzdHJpbmc7XHJcblx0Ly8gY2FyZF9udW1iZXI6IHN0cmluZztcclxuXHQvLyBleHBpcmVfZGF0ZTogc3RyaW5nO1xyXG5cdC8vIHNlY3VyaXR5X2NvZGU6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgT3JkZXI6IFJlYWN0LkZDPE9yZGVyU3RhdGU+ID0gKHtvcmRlcn0pID0+IHtcclxuXHJcblx0XHJcblx0Y29uc3QgW3NlbGVjdGVkT3JkZXIsIHNldFNlbGVjdGVkT3JkZXJdID0gdXNlU3RhdGUoKTtcclxuXHRjb25zb2xlLmxvZyhvcmRlcilcclxuXHRjb25zdCB7ZGF0YSwgbG9hZGluZywgZXJyb3IsIHJlZmV0Y2h9ID0gdXNlUXVlcnkoR0VUX09SREVSX0JZX0lELCB7XHJcblx0XHR2YXJpYWJsZXM6IHtcclxuXHRcdFx0b3JkZXJcclxuXHRcdH0sXHJcblx0XHRwb2xsSW50ZXJ2YWw6IDUwMCxcclxuXHR9KTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmICghbG9hZGluZykge1xyXG5cdFx0XHRzZXRTZWxlY3RlZE9yZGVyKGRhdGEuZ2V0T3JkZXJCeUlkKVxyXG5cdFx0fVx0XHJcblx0fSwgW2RhdGFdKVxyXG5cdFxyXG5cdGlmIChsb2FkaW5nKSB7XHJcblx0XHRyZXR1cm4gPGgxPkxvYWRpbmcuLi48L2gxPlxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vcmRlcn0+XHJcblx0XHRcdHtzZWxlY3RlZE9yZGVyICYmIChcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vcmRlcl9fdGl0bGV9PlxyXG5cdFx0XHRcdHtzZWxlY3RlZE9yZGVyLmZ1bGxfbmFtZX0sIFRoYW5rIFlvdSBmb3IgeW91ciBvcmRlciFcclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3JkZXJfX251bWJlcn0+XHJcblx0XHRcdFx0T3JkZXIgbnVtYmVyIGlzOiB7c2VsZWN0ZWRPcmRlci5pZH1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3JkZXJfX3RleHR9PlxyXG5cdFx0XHRcdFlvdXIgd2lsbCByZWNpZXZlIGFuIGVtYWlsIGNvbmZpcm1hdGlvbiBzaG9ydGx5IHRvIDxhIGhyZWY9XCJcIj57c2VsZWN0ZWRPcmRlci5lbWFpbH08L2E+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9yZGVyX19lc3RpbWF0ZWR9PlxyXG5cdFx0XHRcdEVzdGltYXRlZCBkZWxpdmVyeSBEYXkgaXMgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYm9sZH0+RnJpZGF5IDFzdCBBcHJpbCAyMDE2PC9wPlxyXG5cdFx0XHQ8L2Rpdj5cdFxyXG5cdFx0XHQ8YSBjbGFzc05hbWU9e3N0eWxlcy5vcmRlcl9fcHJpbnRfcmVjaXBlfT5QcmludCBSZWNpcGU8L2E+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpfVxyXG5cdFx0PC9kaXY+XHJcblx0XHRcclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9yZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHNlbnRDb250ZXh0IGZyb20gJy4uLy4uL3NoYXJlZC9jb250ZXh0JztcclxuaW1wb3J0IHsgdXNlR2VvbG9jYXRpb24gfSBmcm9tICcuLi8uLi9ob29rcy91c2VHZW9sb2NhdGlvbic7XHJcbmltcG9ydCB7IHVzZUlkZW50aWZpY2F0aW9uQ2FyZCB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUlkZW50aWZpY2F0aW9uQ2FyZCc7XHJcbmltcG9ydCB7IHVzZUlucHV0IH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgSW5wdXRNYXNrIGZyb20gXCJyZWFjdC1pbnB1dC1tYXNrXCI7XHJcbmltcG9ydCB7IGZhQ3Jvc3NoYWlycyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xyXG5cclxuXHJcbi8vaW1wb3J0IHNlbnRDb250ZXh0IGZyb20gJy4uLy4uL3NoYXJlZC9jb250ZXh0JztcclxuXHJcbi8vIGludGVyZmFjZSBUYWJzUHJvcHMge1xyXG4vLyBcdGNoaWxkcmVuPzogUmVhY3QuUmVhY3RDaGlsZCB8IFJlYWN0LlJlYWN0Tm9kZSxcclxuXHRcclxuLy8gfVxyXG5cclxuY29uc3QgVGFiczogUmVhY3QuRkMgPSAoKSA9PiB7XHJcblxyXG5cdFxyXG5cdFxyXG5cdGNvbnN0IFt0b2dnbGVDbGFzcywgc2V0VG9nZ2xlQ2xhc3NdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcclxuXHRjb25zdCBbY2FyZFR5cGUsIHNldENhcmRUeXBlXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cdFxyXG5cdHZhciBnZW9sb2NhdGlvbiA9IHVzZUdlb2xvY2F0aW9uKCk7XHJcblxyXG5cdGNvbnN0IGZ1bGxfbmFtZSA9IHVzZUlucHV0KCcnLCB7aXNFbXB0eTogdHJ1ZSwgbWluTGVuZ3RoOiAzfSk7XHJcblx0Y29uc3Qgc3RyZWV0ID0gdXNlSW5wdXQoJycsIHtpc0VtcHR5OiB0cnVlfSk7XHJcblx0Y29uc3QgcGhvbmUgPSB1c2VJbnB1dCgnJywge2lzRW1wdHk6IHRydWV9KTtcclxuXHRjb25zdCBhcHQgPSB1c2VJbnB1dCgnJywge30pO1xyXG5cdGNvbnN0IGNpdHkgPSB1c2VJbnB1dCgnJywge2lzRW1wdHk6IHRydWV9KTtcclxuXHRjb25zdCBjb3VudHJ5ID0gdXNlSW5wdXQoJycsIHtpc0VtcHR5OiB0cnVlfSk7XHJcblx0Y29uc3QgemlwID0gdXNlSW5wdXQoJycsIHtpc0VtcHR5OiB0cnVlfSk7XHJcbiBcdGNvbnN0IGIgPSB1c2VJbnB1dCgnJywge30pO1xyXG5cdGNvbnN0IGNhcmRfbnVtYmVyID0gdXNlSW5wdXQoJycsIHtpc0VtcHR5OiB0cnVlfSk7XHJcblx0Y29uc3QgZXhwaXJlX2RhdGUgPSB1c2VJbnB1dCgnJywge2lzRW1wdHk6IHRydWV9KTtcclxuXHRjb25zdCBzZWN1cml0eV9jb2RlID0gdXNlSW5wdXQoJycsIHtpc0VtcHR5OiB0cnVlfSk7XHJcblx0Y29uc3QgZW1haWwgPSB1c2VJbnB1dCgnJywge2lzRW1haWw6IHRydWV9KTtcclxuXHRcclxuXHRcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0JCgnLnNlbGVjdCcpLmZvY3VzKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCQoJy5jb250ZW50X19pbnB1dHNfX3Jvd19jb3VudHJ5JykudG9nZ2xlQ2xhc3MoJ2NvbnRlbnRfX2lucHV0c19fcm93X2NvdW50cnlfc2VhcmNoJylcclxuXHRcdFx0XHQkKCcuY29udGVudF9faW5wdXRzX19yb3dfY291bnRyeScpLnJlbW92ZUNsYXNzKCdjb250ZW50X19pbnB1dHNfX3Jvd19jb3VudHJ5X2Fycm93JylcclxuXHRcdH0pO1xyXG5cdFx0JCgnLnNlbGVjdCcpLmJsdXIoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJy5jb250ZW50X19pbnB1dHNfX3Jvd19jb3VudHJ5JykucmVtb3ZlQ2xhc3MoJ2NvbnRlbnRfX2lucHV0c19fcm93X2NvdW50cnlfc2VhcmNoJylcclxuXHRcdFx0JCgnLmNvbnRlbnRfX2lucHV0c19fcm93X2NvdW50cnknKS50b2dnbGVDbGFzcygnY29udGVudF9faW5wdXRzX19yb3dfY291bnRyeV9hcnJvdycpXHJcblx0fSk7XHJcblxyXG5cdH0sIFtdKVxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRcclxuXHR9LCBbZ2VvbG9jYXRpb25dKVxyXG5cclxuXHRjb25zdCBnZXREZXRlY3RlZCA9ICgpID0+IHtcclxuXHRcdGdlb2xvY2F0aW9uO1xyXG5cdH1cclxuXHJcblxyXG5cdFxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0c2V0Q2FyZFR5cGUodXNlSWRlbnRpZmljYXRpb25DYXJkKGNhcmRfbnVtYmVyLnZhbHVlKSk7XHJcblx0fSwgW2NhcmRfbnVtYmVyLnZhbHVlXSlcclxuXHJcblxyXG5cdHJldHVybiAoXHJcblxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluLWJsb2NrX19mb3JtX190YWJzXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3RvZ2dsZUNsYXNzID09PSAxID8gXCJ0YWJzIGFjdGl2ZS10YWJzXCIgOiBcInRhYnNcIn0gaWQ9XCJ0YWIxXCIgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlQ2xhc3MoMSl9PlNoaXBwaW5nPC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3RvZ2dsZUNsYXNzID09PSAyID8gXCJ0YWJzIGFjdGl2ZS10YWJzXCIgOiBcInRhYnNcIn0gb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlQ2xhc3MoMil9PkJpbGxpbmc8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dG9nZ2xlQ2xhc3MgPT09IDMgPyBcInRhYnMgYWN0aXZlLXRhYnNcIiA6IFwidGFic1wifSBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGVDbGFzcygzKX0+UGF5bWVudDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluLWJsb2NrX19mb3JtX190YWJzX19jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dG9nZ2xlQ2xhc3MgPT09IDEgPyBcImNvbnRlbnQgYWN0aXZlLWNvbnRlbnRcIiA6IFwiY29udGVudFwifT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X190aXRsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFNoaXBwaW5nIGluZm9cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3JlY2lwaWVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fcmVjaXBpZW50X3RleHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFJlY2lwaWVudFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNcIj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eygoYi5pc05leHQgJiYgZnVsbF9uYW1lLmlzRW1wdHkpIHx8IChiLmlzTmV4dCAmJiBmdWxsX25hbWUuaXNNaW5MZW5ndGhFcnJvcikpICYmICg8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZSc+UGxlYXNlIGVudGVyIHJlY2lwaWVudCBmdWxsIG5hbWUgYW5kIG1pbiBsZW5ndGggPSAzPC9kaXY+KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9eygoYi5pc05leHQgJiYgZnVsbF9uYW1lLmlzRW1wdHkpIHx8IChiLmlzTmV4dCAmJiBmdWxsX25hbWUuaXNNaW5MZW5ndGhFcnJvcikpID8gXCJjb250ZW50X19pbnB1dHNfZnVsbG5hbWUgZm9jdXNlZFwiIDogXCJjb250ZW50X19pbnB1dHNfZnVsbG5hbWVcIn0gbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkZ1bGwgTmFtZVwiIHZhbHVlPXtmdWxsX25hbWUudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gZnVsbF9uYW1lLm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBmdWxsX25hbWUub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfZGF5dGltZV9jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsoKGIuaXNOZXh0ICYmIHBob25lLmlzRW1wdHkpKSAmJiAoPGRpdiBjbGFzc05hbWU9J21lc3NhZ2UnPlBsZWFzZSBlbnRlciByZWNpcGllbnQgcGhvbmUgaW4gZm9ybWF0ICs3ICgwMDApIDAwMCAwMCAwMDwvZGl2Pil9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dE1hc2sgbmFtZT1cInBob25lXCIgbWFzaz1cIis3XFwoOTk5KTk5OS05OS05OVwiIHR5cGU9XCJ0ZWxcIiBjbGFzc05hbWU9eygoYi5pc05leHQgJiYgcGhvbmUuaXNFbXB0eSkpID8gXCJjb250ZW50X19pbnB1dHNfZGF5dGltZSBmb2N1c2VkXCIgOiBcImNvbnRlbnRfX2lucHV0c19kYXl0aW1lXCJ9IGlkPVwicGhvbmVOdW1iZXJcIiBwbGFjZWhvbGRlcj1cIkRhdGV0aW1lIFBob25lXCIgdmFsdWU9e3Bob25lLnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHBob25lLm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBwaG9uZS5vbkJsdXIoZSl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yID1cImNvbnRlbnRfX2lucHV0c19kYXl0aW1lX2xhYmVsXCI+Rm9yIGRlbGl2ZXJ5IHF1ZXN0aW9ucyBvbmx5PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19hZGRyZXNzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19hZGRyZXNzX3RleHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEFkZHJlc3NcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzXCI+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsoKGIuaXNOZXh0ICYmIHN0cmVldC5pc0VtcHR5KSkgJiYgKDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlJz5QbGVhc2UgZW50ZXIgcmVjaXBpZW50IHN0cmVldDwvZGl2Pil9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXsoKGIuaXNOZXh0ICYmIHN0cmVldC5pc0VtcHR5KSkgPyBcImNvbnRlbnRfX2lucHV0c19zdHJlZXQgZm9jdXNlZFwiIDogXCJjb250ZW50X19pbnB1dHNfc3RyZWV0XCJ9IG5hbWU9XCJzdHJlZXRcIiBwbGFjZWhvbGRlcj1cIlN0cmVldCBBZGRyZXNzXCIgdmFsdWU9e3N0cmVldC52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBzdHJlZXQub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IHN0cmVldC5vbkJsdXIoZSl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfYXB0XCIgbmFtZT1cImFwdFwiIHBsYWNlaG9sZGVyPVwiQXB0LCBTdWl0ZSwgQmxkZywgR2F0ZSBDb2RlLiAob3B0aW9uYWwpXCIgdmFsdWU9e2FwdC52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBhcHQub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IGFwdC5vbkJsdXIoZSl9Lz5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzX2ljb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY2l0eVwiIGNsYXNzTmFtZT17KChiLmlzTmV4dCAmJiBjaXR5LmlzRW1wdHkpKSA/IFwiY29udGVudF9faW5wdXRzX2NpdHkgZm9jdXNlZFwiIDogXCJjb250ZW50X19pbnB1dHNfY2l0eVwifSBwbGFjZWhvbGRlcj1cIkNpdHlcIiB2YWx1ZT17Z2VvbG9jYXRpb24uY2l0eSA/IGdlb2xvY2F0aW9uLmNpdHkgOiBjaXR5LnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHtjaXR5Lm9uQ2hhbmdlKGUpfX0gb25CbHVyPXsoZSkgPT4gY2l0eS5vbkJsdXIoZSl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHshZ2VvbG9jYXRpb24gPyA8Rm9udEF3ZXNvbWVJY29uIG9uQ2xpY2s9e2dldERldGVjdGVkfSBpY29uPXtmYUNyb3NzaGFpcnN9IHN0eWxlPXt7cG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJzQwJScsIHJpZ2h0OiAnMTBweCcsIGZvbnRTaXplOiAnMjBweCcsIGN1cnNvcjogJ3BvaW50ZXInfX0vPiA6IDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDcm9zc2hhaXJzfSBzdHlsZT17e3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCBvcGFjaXR5OiAnMC40JywgdG9wOiAnNDAlJywgcmlnaHQ6ICcxMHB4JywgZm9udFNpemU6ICcyMHB4JywgY3Vyc29yOiAncG9pbnRlcid9fS8+fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzX19yb3dcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19fcm93X2NvdW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19fcm93X2NvdW50cnkgY29udGVudF9faW5wdXRzX19yb3dfY291bnRyeV9hcnJvd1wiIGlkPVwiZWRpdG9yXCI+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwic2VsZWN0XCIgbmFtZT1cImNvdW50cnlcIiBwbGFjZWhvbGRlcj1cIkNvdW50cnlcIiBsaXN0PVwiY2l0eW5hbWVcIiB2YWx1ZT17Z2VvbG9jYXRpb24uY291bnRyeSA/IGdlb2xvY2F0aW9uLmNvdW50cnkgOiBjb3VudHJ5LnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHtjb3VudHJ5Lm9uQ2hhbmdlKGUpfX0gb25CbHVyPXsoZSkgPT4gY291bnRyeS5vbkJsdXIoZSl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRhdGFsaXN0IGlkPVwiY2l0eW5hbWVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiQm9zdG9uXCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJDYW1icmlkZ2VcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGF0YWxpc3Q+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9eygoYi5pc05leHQgJiYgemlwLmlzRW1wdHkpKSA/IFwiY29udGVudF9faW5wdXRzX19yb3dfemlwIGZvY3VzZWRcIiA6IFwiY29udGVudF9faW5wdXRzX19yb3dfemlwXCJ9IG5hbWU9XCJ6aXBcIiBwbGFjZWhvbGRlcj1cIlpJUFwiIHZhbHVlPXtnZW9sb2NhdGlvbi56aXAgPyBnZW9sb2NhdGlvbi56aXAgOiB6aXAudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4ge3ppcC5vbkNoYW5nZShlKX19IG9uQmx1cj17KGUpID0+IHppcC5vbkJsdXIoZSl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHsoZnVsbF9uYW1lLmlucHV0VmFsaWQgJiYgcGhvbmUuaW5wdXRWYWxpZCAmJiBzdHJlZXQuaW5wdXRWYWxpZCAmJiBjaXR5LmlucHV0VmFsaWQgJiYgY291bnRyeS5pbnB1dFZhbGlkICYmIHppcC5pbnB1dFZhbGlkKSAmJiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGVDbGFzcygyKX0gY2xhc3NOYW1lPVwiY29udGVudF9fYnV0dG9uXCIgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJ319PkNvbnRpbnVlPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHshKGZ1bGxfbmFtZS5pbnB1dFZhbGlkICYmIHBob25lLmlucHV0VmFsaWQgJiYgc3RyZWV0LmlucHV0VmFsaWQgJiYgY2l0eS5pbnB1dFZhbGlkICYmIGNvdW50cnkuaW5wdXRWYWxpZCAmJiB6aXAuaW5wdXRWYWxpZCkgJiYgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiY29udGVudF9fYnV0dG9uXCIgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJ319PkNvbnRpbnVlPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dG9nZ2xlQ2xhc3MgPT09IDIgPyBcImNvbnRlbnQgYWN0aXZlLWNvbnRlbnRcIiA6IFwiY29udGVudFwifT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X190aXRsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEJpbGxpbmcgSW5mb3JtYXRpb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZUNsYXNzKDEpfSBjbGFzc05hbWU9XCJjb250ZW50X19yZWNpcGllbnRfbGlua1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0U2FtZSBhcyBzaGlwcGluZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fcmVjaXBpZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19yZWNpcGllbnRfdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QmlsbGluZyBDb250YWN0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c1wiPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0eygoYi5pc05leHQgJiYgZnVsbF9uYW1lLmlzRW1wdHkpIHx8IChiLmlzTmV4dCAmJiBmdWxsX25hbWUuaXNNaW5MZW5ndGhFcnJvcikpICYmICg8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZSc+UGxlYXNlIGVudGVyIHJlY2lwaWVudCBmdWxsIG5hbWUgYW5kIG1pbiBsZW5ndGggPSAzPC9kaXY+KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9eygoYi5pc05leHQgJiYgZnVsbF9uYW1lLmlzRW1wdHkpIHx8IChiLmlzTmV4dCAmJiBmdWxsX25hbWUuaXNNaW5MZW5ndGhFcnJvcikpID8gXCJjb250ZW50X19pbnB1dHNfZnVsbG5hbWUgZm9jdXNlZFwiIDogXCJjb250ZW50X19pbnB1dHNfZnVsbG5hbWVcIn0gbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkZ1bGwgTmFtZVwiIHZhbHVlPXtmdWxsX25hbWUudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gZnVsbF9uYW1lLm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBmdWxsX25hbWUub25CbHVyKGUpfS8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7KGIuaXNOZXh0ICYmIGVtYWlsLmlzRW1haWxFcnJvcikgJiYgKDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlJz5QbGVhc2UgZW50ZXIgY29ycmVjdCBlbWFpbDwvZGl2Pil9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXsoKGIuaXNOZXh0ICYmIGVtYWlsLmlzRW1haWxFcnJvcikpID8gXCJjb250ZW50X19pbnB1dHNfZW1haWwgZm9jdXNlZFwiIDogXCJjb250ZW50X19pbnB1dHNfZW1haWxcIn0gbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCIgdmFsdWU9e2VtYWlsLnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IGVtYWlsLm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBlbWFpbC5vbkJsdXIoZSl9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19hZGRyZXNzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19hZGRyZXNzX3RleHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEJpbGxpbmcgQWRkcmVzc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0eygoYi5pc05leHQgJiYgc3RyZWV0LmlzRW1wdHkpKSAmJiAoPGRpdiBjbGFzc05hbWU9J21lc3NhZ2UnPlBsZWFzZSBlbnRlciByZWNpcGllbnQgc3RyZWV0PC9kaXY+KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9eygoYi5pc05leHQgJiYgc3RyZWV0LmlzRW1wdHkpKSA/IFwiY29udGVudF9faW5wdXRzX3N0cmVldCBmb2N1c2VkXCIgOiBcImNvbnRlbnRfX2lucHV0c19zdHJlZXRcIn0gbmFtZT1cInN0cmVldFwiIHBsYWNlaG9sZGVyPVwiU3RyZWV0IEFkZHJlc3NcIiB2YWx1ZT17c3RyZWV0LnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHN0cmVldC5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gc3RyZWV0Lm9uQmx1cihlKX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzX2FwdFwiIHBsYWNlaG9sZGVyPVwiQXB0LCBTdWl0ZSwgQmxkZywgR2F0ZSBDb2RlLiAob3B0aW9uYWwpXCIgbmFtZT1cImFwdFwiIHZhbHVlPXthcHQudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gYXB0Lm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBhcHQub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfaWNvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjaXR5XCIgY2xhc3NOYW1lPXsoKGIuaXNOZXh0ICYmIGNpdHkuaXNFbXB0eSkpID8gXCJjb250ZW50X19pbnB1dHNfY2l0eSBmb2N1c2VkXCIgOiBcImNvbnRlbnRfX2lucHV0c19jaXR5XCJ9IHBsYWNlaG9sZGVyPVwiQ2l0eVwiIHZhbHVlPXtnZW9sb2NhdGlvbi5jaXR5ID8gZ2VvbG9jYXRpb24uY2l0eSA6IGNpdHkudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4ge2NpdHkub25DaGFuZ2UoZSl9fSBvbkJsdXI9eyhlKSA9PiBjaXR5Lm9uQmx1cihlKX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyFnZW9sb2NhdGlvbiA/IDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDcm9zc2hhaXJzfSBzdHlsZT17e3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICc0MCUnLCByaWdodDogJzEwcHgnLCBmb250U2l6ZTogJzIwcHgnLCBjdXJzb3I6ICdwb2ludGVyJ319Lz4gOiA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ3Jvc3NoYWlyc30gc3R5bGU9e3twb3NpdGlvbjogJ2Fic29sdXRlJywgb3BhY2l0eTogJzAuNCcsIHRvcDogJzQwJScsIHJpZ2h0OiAnMTBweCcsIGZvbnRTaXplOiAnMjBweCcsIGN1cnNvcjogJ3BvaW50ZXInfX0vPn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19fcm93XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfX3Jvd19jb3VudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfX3Jvd19jb3VudHJ5XCIgaWQ9XCJlZGl0b3JcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInNlbGVjdFwiIG5hbWU9XCJjb3VudHJ5XCIgcGxhY2Vob2xkZXI9XCJDb3VudHJ5XCIgbGlzdD1cImNpdHluYW1lXCIgdmFsdWU9e2dlb2xvY2F0aW9uLmNvdW50cnkgPyBnZW9sb2NhdGlvbi5jb3VudHJ5IDogY291bnRyeS52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiB7Y291bnRyeS5vbkNoYW5nZShlKX19IG9uQmx1cj17KGUpID0+IGNvdW50cnkub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkYXRhbGlzdCBpZD1cImNpdHluYW1lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkJvc3RvblwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiQ2FtYnJpZGdlXCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2RhdGFsaXN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXsoKGIuaXNOZXh0ICYmIHppcC5pc0VtcHR5KSkgPyBcImNvbnRlbnRfX2lucHV0c19fcm93X3ppcCBmb2N1c2VkXCIgOiBcImNvbnRlbnRfX2lucHV0c19fcm93X3ppcFwifSBuYW1lPVwiemlwXCIgcGxhY2Vob2xkZXI9XCJaSVBcIiB2YWx1ZT17Z2VvbG9jYXRpb24uemlwID8gZ2VvbG9jYXRpb24uemlwIDogemlwLnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHt6aXAub25DaGFuZ2UoZSl9fSBvbkJsdXI9eyhlKSA9PiB6aXAub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7KGZ1bGxfbmFtZS5pbnB1dFZhbGlkICYmICBzdHJlZXQuaW5wdXRWYWxpZCAmJiBjaXR5LmlucHV0VmFsaWQgJiYgY291bnRyeS5pbnB1dFZhbGlkICYmIHppcC5pbnB1dFZhbGlkKSAmJiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGVDbGFzcygzKX0gY2xhc3NOYW1lPVwiY29udGVudF9fYnV0dG9uXCIgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJ319PkNvbnRpbnVlPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHshKGZ1bGxfbmFtZS5pbnB1dFZhbGlkICAmJiBzdHJlZXQuaW5wdXRWYWxpZCAmJiBjaXR5LmlucHV0VmFsaWQgJiYgY291bnRyeS5pbnB1dFZhbGlkICYmIHppcC5pbnB1dFZhbGlkKSAmJiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJjb250ZW50X19idXR0b25cIiBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX0+Q29udGludWU8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXt0b2dnbGVDbGFzcyA9PT0gMyA/IFwiY29udGVudCBhY3RpdmUtY29udGVudFwiIDogXCJjb250ZW50XCJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3RpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0UGF5bWVudFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19zc2xcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3NzbF9sb2dvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz0nLi4vLi4vbG9jay5wbmcnIGFsdD1cIlwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19zc2xfdGV4dFwiPlRoaXMgaXMgYSBzZWN1cmUgMTI4LWJpdCBTU0wgZW5jcnlwdGVkIHBheW1lbnQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fcmVjaXBpZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19yZWNpcGllbnRfdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Q2FyZGhvbGRlciBOYW1lXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7KChiLmlzTmV4dCAmJiBmdWxsX25hbWUuaXNFbXB0eSkgfHwgKGIuaXNOZXh0ICYmIGZ1bGxfbmFtZS5pc01pbkxlbmd0aEVycm9yKSkgJiYgKDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlJz5QbGVhc2UgZW50ZXIgcmVjaXBpZW50IGZ1bGwgbmFtZSBhbmQgbWluIGxlbmd0aCA9IDM8L2Rpdj4pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17KChiLmlzTmV4dCAmJiBmdWxsX25hbWUuaXNFbXB0eSkgfHwgKGIuaXNOZXh0ICYmIGZ1bGxfbmFtZS5pc01pbkxlbmd0aEVycm9yKSkgPyBcImNvbnRlbnRfX2lucHV0c19mdWxsbmFtZSBmb2N1c2VkXCIgOiBcImNvbnRlbnRfX2lucHV0c19mdWxsbmFtZVwifSBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZSBhcyBpdCBhcHBlYXJzIG9uIHlvdXIgY2FyZFwiIHZhbHVlPXtmdWxsX25hbWUudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gZnVsbF9uYW1lLm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBmdWxsX25hbWUub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19hZGRyZXNzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19hZGRyZXNzX3RleHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdENhcmQgTnVtYmVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0cyBpbnB1dF9jYXJkXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PElucHV0TWFzayBtYXNrPVwiOTk5OSA5OTk5IDk5OTkgOTk5OVwiIG5hbWU9XCJjYXJkX251bWJlclwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzX2NhcmRcIiBwbGFjZWhvbGRlcj1cIlhYWFggWFhYWCBYWFhYIFhYWFggWFhYWFwiIHZhbHVlPXtjYXJkX251bWJlci52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBjYXJkX251bWJlci5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gY2FyZF9udW1iZXIub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e2NhcmRUeXBlfSBhbHQ9XCJcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fY2FyZHNfX2luZm9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2NhcmRzX19pbmZvX19leHBpcmVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fY2FyZHNfaW5mb19fZXhwaXJlX3RleHRcIj5FeHBpcmUgRGF0ZTwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PElucHV0TWFzayBtYXNrPVwiOTkgLyA5OVwiIHBsYWNlaG9sZGVyPVwiTU0gLyBZWVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY29udGVudF9fY2FyZHNfaW5mb19fZXhwaXJlX2lucHV0XCIgbmFtZT1cImV4cGlyZV9kYXRlXCIgdmFsdWU9e2V4cGlyZV9kYXRlLnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IGV4cGlyZV9kYXRlLm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBleHBpcmVfZGF0ZS5vbkJsdXIoZSl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2NhcmRzX19pbmZvX19zZWN1cml0eVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19jYXJkc19pbmZvX19zZWN1cml0eV90ZXh0XCI+U2VjdXJpdHkgQ29kZTwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PElucHV0TWFzayBtYXNrPVwiOTk5XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlhYWFwiIGNsYXNzTmFtZT1cImNvbnRlbnRfX2NhcmRzX2luZm9fX3NlY3VyaXR5X2lucHV0XCIgbmFtZT1cInNlY3VyaXR5X2NvZGVcIiB2YWx1ZT17c2VjdXJpdHlfY29kZS52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBzZWN1cml0eV9jb2RlLm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBzZWN1cml0eV9jb2RlLm9uQmx1cihlKX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0eyhmdWxsX25hbWUuaW5wdXRWYWxpZCAmJiBzdHJlZXQuaW5wdXRWYWxpZCAmJiBjaXR5LmlucHV0VmFsaWQgJiYgY291bnRyeS5pbnB1dFZhbGlkICYmIHppcC5pbnB1dFZhbGlkICYmIGNhcmRfbnVtYmVyLmlucHV0VmFsaWQgJiYgc2VjdXJpdHlfY29kZS5pbnB1dFZhbGlkICYmIGV4cGlyZV9kYXRlLmlucHV0VmFsaWQpICYmIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImNvbnRlbnRfX2J1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRQYXkgU2VjdXJlbHlcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0eyEoZnVsbF9uYW1lLmlucHV0VmFsaWQgICYmIHN0cmVldC5pbnB1dFZhbGlkICYmIGNpdHkuaW5wdXRWYWxpZCAmJiBjb3VudHJ5LmlucHV0VmFsaWQgJiYgemlwLmlucHV0VmFsaWQgJiYgY2FyZF9udW1iZXIuaW5wdXRWYWxpZCAmJiBzZWN1cml0eV9jb2RlLmlucHV0VmFsaWQgJiYgZXhwaXJlX2RhdGUuaW5wdXRWYWxpZCkgJiYgXHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJjb250ZW50X19idXR0b24gZGlzYWJsZWRcIiBkaXNhYmxlZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRQYXkgU2VjdXJlbHlcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFicztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCAgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUdlb2xvY2F0aW9uID0gKCkgPT4ge1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1x0XHJcblx0fSwgW10pXHJcblxyXG5cdGNvbnN0IFtjaXR5LCBzZXRDaXR5XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cdGNvbnN0IFtjb3VudHJ5LCBzZXRDb3VudHJ5XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cdGNvbnN0IFt6aXAsIHNldFppcF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuXHJcblx0Y29uc3Qgc3VjY2Vzc0NhbGxiYWNrID0gYXN5bmMgKCk6IFByb21pc2U8YW55PiA9PiB7XHJcblx0XHRhd2FpdCBmZXRjaCgnaHR0cHM6Ly9pcGFwaS5jby9qc29uLycpXHJcbiAgXHRcdFx0LnRoZW4oZCA9PiBkLmpzb24oKSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRzZXRDaXR5KHJlcy5jaXR5KTtcclxuXHRcdFx0XHRzZXRDb3VudHJ5KHJlcy5jb3VudHJ5X25hbWUpO1xyXG5cdFx0XHRcdHNldFppcChyZXMucG9zdGFsKTtcclxuXHRcdFx0fSlcclxuXHQgIH1cclxuXHJcblx0ICBjb25zdCBlcnJvckNhbGxiYWNrID0gKGVycm9yOiBhbnkpOiB2b2lkID0+IHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcblx0ICB9XHJcblxyXG5cdCAgcmV0dXJuIHtcclxuXHRcdGNpdHksXHJcblx0XHRjb3VudHJ5LFxyXG5cdFx0emlwXHJcblx0fVxyXG5cdFxyXG5cdFx0XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHVzZUlkZW50aWZpY2F0aW9uQ2FyZCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIFxyXG57XHJcbiAgICAvLyB2aXNhXHJcbiAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiXjRcIik7XHJcbiAgICBpZiAodmFsdWUubWF0Y2gocmVnZXgpICE9IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIFwiLy4uLy4uL3Zpc2EucG5nXCI7XHJcblxyXG4gICAgLy8gTWFzdGVyY2FyZCBcclxuICAgIC8vIFVwZGF0ZWQgZm9yIE1hc3RlcmNhcmQgMjAxNyBCSU5zIGV4cGFuc2lvblxyXG4gICAgIGlmICgvXig1WzEtNV1bMC05XXsxNH18MigyMlsxLTldWzAtOV17MTJ9fDJbMy05XVswLTldezEzfXxbMy02XVswLTldezE0fXw3WzAtMV1bMC05XXsxM318NzIwWzAtOV17MTJ9KSkkLy50ZXN0KHZhbHVlKSkgXHJcbiAgICAgICAgcmV0dXJuIFwiTWFzdGVyY2FyZFwiO1xyXG5cclxuICAgIC8vIC8vIEFNRVhcclxuICAgIC8vIHJlID0gbmV3IFJlZ0V4cChcIl4zWzQ3XVwiKTtcclxuICAgIC8vIGlmIChudW1iZXIubWF0Y2gocmUpICE9IG51bGwpXHJcbiAgICAvLyAgICAgcmV0dXJuIFwiQU1FWFwiO1xyXG5cclxuICAgIC8vIC8vIERpc2NvdmVyXHJcbiAgICAvLyByZSA9IG5ldyBSZWdFeHAoXCJeKDYwMTF8NjIyKDEyWzYtOV18MVszLTldWzAtOV18WzItOF1bMC05XXsyfXw5WzAtMV1bMC05XXw5MlswLTVdfDY0WzQtOV0pfDY1KVwiKTtcclxuICAgIC8vIGlmIChudW1iZXIubWF0Y2gocmUpICE9IG51bGwpXHJcbiAgICAvLyAgICAgcmV0dXJuIFwiRGlzY292ZXJcIjtcclxuXHJcbiAgICAvLyAvLyBEaW5lcnNcclxuICAgIC8vIHJlID0gbmV3IFJlZ0V4cChcIl4zNlwiKTtcclxuICAgIC8vIGlmIChudW1iZXIubWF0Y2gocmUpICE9IG51bGwpXHJcbiAgICAvLyAgICAgcmV0dXJuIFwiRGluZXJzXCI7XHJcblxyXG4gICAgLy8gLy8gRGluZXJzIC0gQ2FydGUgQmxhbmNoZVxyXG4gICAgLy8gcmUgPSBuZXcgUmVnRXhwKFwiXjMwWzAtNV1cIik7XHJcbiAgICAvLyBpZiAobnVtYmVyLm1hdGNoKHJlKSAhPSBudWxsKVxyXG4gICAgLy8gICAgIHJldHVybiBcIkRpbmVycyAtIENhcnRlIEJsYW5jaGVcIjtcclxuXHJcbiAgICAvLyAvLyBKQ0JcclxuICAgIC8vIHJlID0gbmV3IFJlZ0V4cChcIl4zNSgyWzg5XXxbMy04XVswLTldKVwiKTtcclxuICAgIC8vIGlmIChudW1iZXIubWF0Y2gocmUpICE9IG51bGwpXHJcbiAgICAvLyAgICAgcmV0dXJuIFwiSkNCXCI7XHJcblxyXG4gICAgLy8gLy8gVmlzYSBFbGVjdHJvblxyXG4gICAgLy8gcmUgPSBuZXcgUmVnRXhwKFwiXig0MDI2fDQxNzUwMHw0NTA4fDQ4NDR8NDkxKDN8NykpXCIpO1xyXG4gICAgLy8gaWYgKG51bWJlci5tYXRjaChyZSkgIT0gbnVsbClcclxuICAgIC8vICAgICByZXR1cm4gXCJWaXNhIEVsZWN0cm9uXCI7XHJcblxyXG4gICAgcmV0dXJuIFwibnVsbFwiO1xyXG59IiwiaW1wb3J0IFJlYWN0LCB7Rm9ybUV2ZW50LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VWYWxpZGF0aW9uIH0gZnJvbSAnLi91c2VWYWxpZGF0aW9uJztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VJbnB1dCA9IChpbml0aWFsVmFsdWU6IHN0cmluZywgdmFsaWRhdGlvbnM6IE9iamVjdCkgPT4ge1xyXG5cclxuXHRjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oaW5pdGlhbFZhbHVlKTtcclxuXHRjb25zdCBbaXNEaXJ0eSwgc2V0SXNEaXJ0eV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblx0Y29uc3QgW2lzTmV4dCwgc2V0SXNOZXh0XSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG5cdGNvbnN0IHZhbGlkID0gdXNlVmFsaWRhdGlvbih2YWx1ZSwgdmFsaWRhdGlvbnMpO1xyXG5cclxuXHJcblx0Y29uc3Qgb25DaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50Pik6IHZvaWQgPT4ge1xyXG5cdFx0c2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG5cdH1cclxuXHJcblx0Y29uc3Qgb25CbHVyID0gKGU6IFJlYWN0LkZvY3VzRXZlbnQ8SFRNTElucHV0RWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50Pik6IHZvaWQgPT4ge1xyXG5cdFx0c2V0SXNEaXJ0eSh0cnVlKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG9uQ2xpY2sgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik6IHZvaWQgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0c2V0SXNOZXh0KHRydWUpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHZhbHVlLFxyXG5cdFx0aXNOZXh0LFxyXG5cdFx0b25DbGljayxcclxuXHRcdG9uQ2hhbmdlLFxyXG5cdFx0b25CbHVyLFxyXG5cdFx0aXNEaXJ0eSxcclxuXHRcdC4uLnZhbGlkXHJcblx0fVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVZhbGlkYXRpb24gPSAodmFsdWU6IHN0cmluZywgdmFsaWRhdGlvbnM6IE9iamVjdCkgPT4ge1xyXG5cclxuXHRjb25zdCBbaXNFbXB0eSwgc2V0SXNFbXB0eV0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuXHRjb25zdCBbaXNFbWFpbEVycm9yLCBzZXRJc0VtYWlsRXJyb3JdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cdGNvbnN0IFtpc01pbkxlbmd0aEVycm9yLCBzZXRJc01pbkxlbmd0aEVycm9yXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHRjb25zdCBbaW5wdXRWYWxpZCwgc2V0SW5wdXRWYWxpZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRmb3IgKGNvbnN0IHZhbGlkYXRpb24gaW4gdmFsaWRhdGlvbnMpIHtcclxuXHRcdFx0c3dpdGNoICh2YWxpZGF0aW9uKSB7XHJcblx0XHRcdFx0Y2FzZSAnbWluTGVuZ3RoJzpcclxuXHRcdFx0XHRcdHZhbHVlLmxlbmd0aCA8IHZhbGlkYXRpb25zW3ZhbGlkYXRpb25dID8gc2V0SXNNaW5MZW5ndGhFcnJvcih0cnVlKSA6IHNldElzTWluTGVuZ3RoRXJyb3IoZmFsc2UpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnaXNFbXB0eSc6XHJcblx0XHRcdFx0XHR2YWx1ZSA/IHNldElzRW1wdHkoZmFsc2UpIDogc2V0SXNFbXB0eSh0cnVlKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ2lzUGhvbmUnOlxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnaXNFbWFpbCc6XHJcblx0XHRcdFx0XHRjb25zdCByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuICAgIFx0XHRcdFx0KHJlLnRlc3QoU3RyaW5nKHZhbHVlKS50b0xvd2VyQ2FzZSgpKSkgPyBzZXRJc0VtYWlsRXJyb3IoZmFsc2UpIDogc2V0SXNFbWFpbEVycm9yKHRydWUpXHJcblx0XHRcdFx0XHRicmVha1xyXG5cdFx0XHR9XHRcclxuXHRcdH1cclxuXHR9LCBbdmFsdWVdKVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKGlzTWluTGVuZ3RoRXJyb3IgfHwgaXNFbXB0eSB8fCBpc0VtYWlsRXJyb3IpIHtcclxuXHRcdFx0c2V0SW5wdXRWYWxpZChmYWxzZSk7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0c2V0SW5wdXRWYWxpZCh0cnVlKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH0sIFtpc0VtcHR5LCBpc01pbkxlbmd0aEVycm9yLCBpc0VtYWlsRXJyb3JdKVxyXG5cclxuXHRcclxuXHRcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGlzRW1wdHksXHJcblx0XHRpc01pbkxlbmd0aEVycm9yLFxyXG5cdFx0aW5wdXRWYWxpZCxcclxuXHRcdGlzRW1haWxFcnJvclxyXG5cdH1cclxufSIsImltcG9ydCB7Z3FsfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ1JFQVRFX09SREVSID0gZ3FsIGBcclxuXHJcblx0bXV0YXRpb24gY3JlYXRlT3JkZXIoJGlucHV0OiBPcmRlcklucHV0KSB7XHJcblx0XHRjcmVhdGVPcmRlcihpbnB1dDogJGlucHV0KSB7XHJcblx0XHRcdGlkLCBmdWxsX25hbWUsIGVtYWlsLCBjaXR5LCBwaG9uZVxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuYCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gSW1hZ2UxO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfaGVhZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvaGVhZFwiKSk7XG52YXIgX3RvQmFzZTY0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvdG8tYmFzZS02NFwiKTtcbnZhciBfaW1hZ2VDb25maWcgPSByZXF1aXJlKFwiLi4vc2VydmVyL2ltYWdlLWNvbmZpZ1wiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgICBmb3IodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbihzeW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuICAgICAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0ge1xuICAgIH07XG4gICAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgIHZhciBrZXksIGk7XG4gICAgZm9yKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5jb25zdCBsb2FkZWRJbWFnZVVSTHMgPSBuZXcgU2V0KCk7XG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBnbG9iYWwuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZTtcbn1cbmNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTID0gW1xuICAgICdsYXp5JyxcbiAgICAnZWFnZXInLFxuICAgIHVuZGVmaW5lZFxuXTtcbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwKFtcbiAgICBbXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgZGVmYXVsdExvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnaW1naXgnLFxuICAgICAgICBpbWdpeExvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnY2xvdWRpbmFyeScsXG4gICAgICAgIGNsb3VkaW5hcnlMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2FrYW1haScsXG4gICAgICAgIGFrYW1haUxvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnY3VzdG9tJyxcbiAgICAgICAgY3VzdG9tTG9hZGVyXG4gICAgXSwgXG5dKTtcbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICAgJ2ZpbGwnLFxuICAgICdmaXhlZCcsXG4gICAgJ2ludHJpbnNpYycsXG4gICAgJ3Jlc3BvbnNpdmUnLFxuICAgIHVuZGVmaW5lZCwgXG5dO1xuZnVuY3Rpb24gaXNTdGF0aWNSZXF1aXJlKHNyYykge1xuICAgIHJldHVybiBzcmMuZGVmYXVsdCAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTdGF0aWNJbWFnZURhdGEoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5zcmMgIT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzU3RhdGljSW1wb3J0KHNyYykge1xuICAgIHJldHVybiB0eXBlb2Ygc3JjID09PSAnb2JqZWN0JyAmJiAoaXNTdGF0aWNSZXF1aXJlKHNyYykgfHwgaXNTdGF0aWNJbWFnZURhdGEoc3JjKSk7XG59XG5jb25zdCB7IGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyAsIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMgLCBsb2FkZXI6IGNvbmZpZ0xvYWRlciAsIHBhdGg6IGNvbmZpZ1BhdGggLCBkb21haW5zOiBjb25maWdEb21haW5zICwgIH0gPSBwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyB8fCBfaW1hZ2VDb25maWcuaW1hZ2VDb25maWdEZWZhdWx0O1xuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFtcbiAgICAuLi5jb25maWdEZXZpY2VTaXplcyxcbiAgICAuLi5jb25maWdJbWFnZVNpemVzXG5dO1xuY29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSwgYik9PmEgLSBiXG4pO1xuYWxsU2l6ZXMuc29ydCgoYSwgYik9PmEgLSBiXG4pO1xuZnVuY3Rpb24gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKSB7XG4gICAgaWYgKHNpemVzICYmIChsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykpIHtcbiAgICAgICAgLy8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbiAgICAgICAgY29uc3Qgdmlld3BvcnRXaWR0aFJlID0gLyhefFxccykoMT9cXGQ/XFxkKXZ3L2c7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRTaXplcyA9IFtdO1xuICAgICAgICBmb3IobGV0IG1hdGNoOyBtYXRjaCA9IHZpZXdwb3J0V2lkdGhSZS5leGVjKHNpemVzKTsgbWF0Y2gpe1xuICAgICAgICAgICAgcGVyY2VudFNpemVzLnB1c2gocGFyc2VJbnQobWF0Y2hbMl0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGVyY2VudFNpemVzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3Qgc21hbGxlc3RSYXRpbyA9IE1hdGgubWluKC4uLnBlcmNlbnRTaXplcykgKiAwLjAxO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3aWR0aHM6IGFsbFNpemVzLmZpbHRlcigocyk9PnMgPj0gY29uZmlnRGV2aWNlU2l6ZXNbMF0gKiBzbWFsbGVzdFJhdGlvXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoczogYWxsU2l6ZXMsXG4gICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHwgbGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgd2lkdGhzID0gW1xuICAgICAgICAuLi5uZXcgU2V0KC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAgIC8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuICAgICAgICAvLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbiAgICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgICAgLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbiAgICAgICAgLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuICAgICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgICAgLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuICAgICAgICBbXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIHdpZHRoICogMiAvKiwgd2lkdGggKiAzKi8gXG4gICAgICAgIF0ubWFwKCh3KT0+YWxsU2l6ZXMuZmluZCgocCk9PnAgPj0gd1xuICAgICAgICAgICAgKSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgICApKSwgXG4gICAgXTtcbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aHMsXG4gICAgICAgIGtpbmQ6ICd4J1xuICAgIH07XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHsgc3JjICwgdW5vcHRpbWl6ZWQgLCBsYXlvdXQgLCB3aWR0aCAsIHF1YWxpdHkgLCBzaXplcyAsIGxvYWRlciAgfSkge1xuICAgIGlmICh1bm9wdGltaXplZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzaXplczogdW5kZWZpbmVkXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHsgd2lkdGhzICwga2luZCAgfSA9IGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcyk7XG4gICAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgICAgICBzcmNTZXQ6IHdpZHRocy5tYXAoKHcsIGkpPT5gJHtsb2FkZXIoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3XG4gICAgICAgICAgICB9KX0gJHtraW5kID09PSAndycgPyB3IDogaSArIDF9JHtraW5kfWBcbiAgICAgICAgKS5qb2luKCcsICcpLFxuICAgICAgICAvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuICAgICAgICAvLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4gICAgICAgIC8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbiAgICAgICAgLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbiAgICAgICAgLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4gICAgICAgIC8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94LlxuICAgICAgICBzcmM6IGxvYWRlcih7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoc1tsYXN0XVxuICAgICAgICB9KVxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRJbnQoeCkge1xuICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wcykge1xuICAgIGNvbnN0IGxvYWQgPSBsb2FkZXJzLmdldChjb25maWdMb2FkZXIpO1xuICAgIGlmIChsb2FkKSB7XG4gICAgICAgIHJldHVybiBsb2FkKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgcm9vdDogY29uZmlnUGF0aFxuICAgICAgICB9LCBsb2FkZXJQcm9wcykpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke19pbWFnZUNvbmZpZy5WQUxJRF9MT0FERVJTLmpvaW4oJywgJyl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YCk7XG59XG4vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gaGFuZGxlTG9hZGluZyhpbWcsIHNyYywgbGF5b3V0LCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpIHtcbiAgICBpZiAoIWltZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUxvYWQgPSAoKT0+e1xuICAgICAgICBpZiAoIWltZy5zcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgICAgICAgICAgY29uc3QgcCA9ICdkZWNvZGUnIGluIGltZyA/IGltZy5kZWNvZGUoKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgcC5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgfSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5maWx0ZXIgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbG9hZGVkSW1hZ2VVUkxzLmFkZChzcmMpO1xuICAgICAgICAgICAgICAgIGlmIChvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IG5hdHVyYWxXaWR0aCAsIG5hdHVyYWxIZWlnaHQgIH0gPSBpbWc7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBhc3MgYmFjayByZWFkLW9ubHkgcHJpbWl0aXZlIHZhbHVlcyBidXQgbm90IHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyB1bmRlcmx5aW5nIERPTSBlbGVtZW50IGJlY2F1c2UgaXQgY291bGQgYmUgbWlzdXNlZC5cbiAgICAgICAgICAgICAgICAgICAgb25Mb2FkaW5nQ29tcGxldGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbEhlaWdodFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChyZWYgPSBpbWcucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZ2V0Q29tcHV0ZWRTdHlsZShpbWcucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJyAmJiBwYXJlbnQuZGlzcGxheSA9PT0gJ2ZsZXgnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IGFzIGEgY2hpbGQgb2YgYSBmbGV4IGNvbnRhaW5lci4gQ29uc2lkZXIgd3JhcHBpbmcgdGhlIGltYWdlIHdpdGggYSBkaXYgdG8gY29uZmlndXJlIHRoZSB3aWR0aC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZmlsbCcgJiYgcGFyZW50LnBvc2l0aW9uICE9PSAncmVsYXRpdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IHdpdGggYSBwYXJlbnQgdXNpbmcgcG9zaXRpb246XCIke3BhcmVudC5wb3NpdGlvbn1cIi4gQ29uc2lkZXIgY2hhbmdpbmcgdGhlIHBhcmVudCBzdHlsZSB0byBwb3NpdGlvbjpcInJlbGF0aXZlXCIgd2l0aCBhIHdpZHRoIGFuZCBoZWlnaHQuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKGltZy5jb21wbGV0ZSkge1xuICAgICAgICAvLyBJZiB0aGUgcmVhbCBpbWFnZSBmYWlscyB0byBsb2FkLCB0aGlzIHdpbGwgc3RpbGwgcmVtb3ZlIHRoZSBwbGFjZWhvbGRlci5cbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3Igbm93LCBhbmQgd2lsbCBiZSByZXZpc2l0ZWQgd2hlbiBlcnJvclxuICAgICAgICAvLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuICAgICAgICBoYW5kbGVMb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW1nLm9ubG9hZCA9IGhhbmRsZUxvYWQ7XG4gICAgfVxufVxuZnVuY3Rpb24gSW1hZ2UxKF9wYXJhbSkge1xuICAgIHZhciB7IHNyYyAsIHNpemVzICwgdW5vcHRpbWl6ZWQgPWZhbHNlICwgcHJpb3JpdHkgPWZhbHNlICwgbG9hZGluZyAsIGxhenlCb3VuZGFyeSA9JzIwMHB4JyAsIGNsYXNzTmFtZSAsIHF1YWxpdHkgLCB3aWR0aCAsIGhlaWdodCAsIG9iamVjdEZpdCAsIG9iamVjdFBvc2l0aW9uICwgb25Mb2FkaW5nQ29tcGxldGUgLCBsb2FkZXIgPWRlZmF1bHRJbWFnZUxvYWRlciAsIHBsYWNlaG9sZGVyID0nZW1wdHknICwgYmx1ckRhdGFVUkwgIH0gPSBfcGFyYW0sIGFsbCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcGFyYW0sIFtcInNyY1wiLCBcInNpemVzXCIsIFwidW5vcHRpbWl6ZWRcIiwgXCJwcmlvcml0eVwiLCBcImxvYWRpbmdcIiwgXCJsYXp5Qm91bmRhcnlcIiwgXCJjbGFzc05hbWVcIiwgXCJxdWFsaXR5XCIsIFwid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJvYmplY3RGaXRcIiwgXCJvYmplY3RQb3NpdGlvblwiLCBcIm9uTG9hZGluZ0NvbXBsZXRlXCIsIFwibG9hZGVyXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJibHVyRGF0YVVSTFwiXSk7XG4gICAgbGV0IHJlc3QgPSBhbGw7XG4gICAgbGV0IGxheW91dCA9IHNpemVzID8gJ3Jlc3BvbnNpdmUnIDogJ2ludHJpbnNpYyc7XG4gICAgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbiAgICAgICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dDtcbiAgICAgICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgICAgICBkZWxldGUgcmVzdFsnbGF5b3V0J107XG4gICAgfVxuICAgIGxldCBzdGF0aWNTcmMgPSAnJztcbiAgICBpZiAoaXNTdGF0aWNJbXBvcnQoc3JjKSkge1xuICAgICAgICBjb25zdCBzdGF0aWNJbWFnZURhdGEgPSBpc1N0YXRpY1JlcXVpcmUoc3JjKSA/IHNyYy5kZWZhdWx0IDogc3JjO1xuICAgICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5zcmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBzcmMuIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBibHVyRGF0YVVSTCA9IGJsdXJEYXRhVVJMIHx8IHN0YXRpY0ltYWdlRGF0YS5ibHVyRGF0YVVSTDtcbiAgICAgICAgc3RhdGljU3JjID0gc3RhdGljSW1hZ2VEYXRhLnNyYztcbiAgICAgICAgaWYgKCFsYXlvdXQgfHwgbGF5b3V0ICE9PSAnZmlsbCcpIHtcbiAgICAgICAgICAgIGhlaWdodCA9IGhlaWdodCB8fCBzdGF0aWNJbWFnZURhdGEuaGVpZ2h0O1xuICAgICAgICAgICAgd2lkdGggPSB3aWR0aCB8fCBzdGF0aWNJbWFnZURhdGEud2lkdGg7XG4gICAgICAgICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5oZWlnaHQgfHwgIXN0YXRpY0ltYWdlRGF0YS53aWR0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBoZWlnaHQgYW5kIHdpZHRoLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3JjID0gdHlwZW9mIHNyYyA9PT0gJ3N0cmluZycgPyBzcmMgOiBzdGF0aWNTcmM7XG4gICAgY29uc3Qgd2lkdGhJbnQgPSBnZXRJbnQod2lkdGgpO1xuICAgIGNvbnN0IGhlaWdodEludCA9IGdldEludChoZWlnaHQpO1xuICAgIGNvbnN0IHF1YWxpdHlJbnQgPSBnZXRJbnQocXVhbGl0eSk7XG4gICAgbGV0IGlzTGF6eSA9ICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJyk7XG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCdkYXRhOicpIHx8IHNyYy5zdGFydHNXaXRoKCdibG9iOicpKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgICAgIHVub3B0aW1pemVkID0gdHJ1ZTtcbiAgICAgICAgaXNMYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBsb2FkZWRJbWFnZVVSTHMuaGFzKHNyYykpIHtcbiAgICAgICAgaXNMYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgICAgIH0pfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKHdpZHRoSW50KSB8fCB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTihoZWlnaHRJbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJ3aWR0aFwiIG9yIFwiaGVpZ2h0XCIgcHJvcGVydHkuIFRoZXNlIHNob3VsZCBiZSBudW1lcmljIHZhbHVlcy5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGF5b3V0ID09PSAnZmlsbCcgJiYgKHdpZHRoIHx8IGhlaWdodCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBhbmQgXCJsYXlvdXQ9J2ZpbGwnXCIgaGFzIHVudXNlZCBwcm9wZXJ0aWVzIGFzc2lnbmVkLiBQbGVhc2UgcmVtb3ZlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIi5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgICAgICAgaWYgKGxheW91dCAhPT0gJ2ZpbGwnICYmICh3aWR0aEludCB8fCAwKSAqIChoZWlnaHRJbnQgfHwgMCkgPCAxNjAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHNtYWxsZXIgdGhhbiA0MHg0MC4gQ29uc2lkZXIgcmVtb3ZpbmcgdGhlIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYmx1ckRhdGFVUkwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBWQUxJRF9CTFVSX0VYVCA9IFtcbiAgICAgICAgICAgICAgICAgICAgJ2pwZWcnLFxuICAgICAgICAgICAgICAgICAgICAncG5nJyxcbiAgICAgICAgICAgICAgICAgICAgJ3dlYnAnXG4gICAgICAgICAgICAgICAgXSAvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IGJ1dCBpcyBtaXNzaW5nIHRoZSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHkuXG4gICAgICAgICAgUG9zc2libGUgc29sdXRpb25zOlxuICAgICAgICAgICAgLSBBZGQgYSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHksIHRoZSBjb250ZW50cyBzaG91bGQgYmUgYSBzbWFsbCBEYXRhIFVSTCB0byByZXByZXNlbnQgdGhlIGltYWdlXG4gICAgICAgICAgICAtIENoYW5nZSB0aGUgXCJzcmNcIiBwcm9wZXJ0eSB0byBhIHN0YXRpYyBpbXBvcnQgd2l0aCBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmaWxlIHR5cGVzOiAke1ZBTElEX0JMVVJfRVhULmpvaW4oJywnKX1cbiAgICAgICAgICAgIC0gUmVtb3ZlIHRoZSBcInBsYWNlaG9sZGVyXCIgcHJvcGVydHksIGVmZmVjdGl2ZWx5IG5vIGJsdXIgZWZmZWN0XG4gICAgICAgICAgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wbGFjZWhvbGRlci1ibHVyLWRhdGEtdXJsYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdyZWYnIGluIHJlc3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyB1c2luZyB1bnN1cHBvcnRlZCBcInJlZlwiIHByb3BlcnR5LiBDb25zaWRlciB1c2luZyB0aGUgXCJvbkxvYWRpbmdDb21wbGV0ZVwiIHByb3BlcnR5IGluc3RlYWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdzdHlsZScgaW4gcmVzdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwic3R5bGVcIiBwcm9wZXJ0eS4gUGxlYXNlIHVzZSB0aGUgXCJjbGFzc05hbWVcIiBwcm9wZXJ0eSBpbnN0ZWFkLmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSArIDEwMDtcbiAgICAgICAgaWYgKCF1bm9wdGltaXplZCAmJiAhbG9hZGVyKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHdpZHRoOiByYW5kLFxuICAgICAgICAgICAgcXVhbGl0eTogNzVcbiAgICAgICAgfSkuaW5jbHVkZXMocmFuZC50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBhIFwibG9hZGVyXCIgcHJvcGVydHkgdGhhdCBkb2VzIG5vdCBpbXBsZW1lbnQgd2lkdGguIFBsZWFzZSBpbXBsZW1lbnQgaXQgb3IgdXNlIHRoZSBcInVub3B0aW1pemVkXCIgcHJvcGVydHkgaW5zdGVhZC5gICsgYFxcblJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS1taXNzaW5nLWxvYWRlci13aWR0aGApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46IGxhenlCb3VuZGFyeSxcbiAgICAgICAgZGlzYWJsZWQ6ICFpc0xhenlcbiAgICB9KTtcbiAgICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWQ7XG4gICAgbGV0IHdyYXBwZXJTdHlsZTtcbiAgICBsZXQgc2l6ZXJTdHlsZTtcbiAgICBsZXQgc2l6ZXJTdmc7XG4gICAgbGV0IGltZ1N0eWxlID0ge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG9iamVjdEZpdCxcbiAgICAgICAgb2JqZWN0UG9zaXRpb25cbiAgICB9O1xuICAgIGNvbnN0IGJsdXJTdHlsZSA9IHBsYWNlaG9sZGVyID09PSAnYmx1cicgPyB7XG4gICAgICAgIGZpbHRlcjogJ2JsdXIoMjBweCknLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogb2JqZWN0Rml0IHx8ICdjb3ZlcicsXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYCxcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBvYmplY3RQb3NpdGlvbiB8fCAnMCUgMCUnXG4gICAgfSA6IHtcbiAgICB9O1xuICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJykge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgICAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50O1xuICAgICAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWA7XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJSdcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gO1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodEludFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGltZ0F0dHJpYnV0ZXMgPSB7XG4gICAgICAgIHNyYzogJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gICAgICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgICAgICBzaXplczogdW5kZWZpbmVkXG4gICAgfTtcbiAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICAgIGltZ0F0dHJpYnV0ZXMgPSBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICAgICAgbGF5b3V0LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgICAgIHNpemVzLFxuICAgICAgICAgICAgbG9hZGVyXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgc3JjU3RyaW5nID0gc3JjO1xuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBzdHlsZTogd3JhcHBlclN0eWxlXG4gICAgfSwgc2l6ZXJTdHlsZSA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiBzaXplclN0eWxlXG4gICAgfSwgc2l6ZXJTdmcgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgIHBhZGRpbmc6IDBcbiAgICAgICAgfSxcbiAgICAgICAgYWx0OiBcIlwiLFxuICAgICAgICBcImFyaWEtaGlkZGVuXCI6IHRydWUsXG4gICAgICAgIHNyYzogYGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHsoMCwgX3RvQmFzZTY0KS50b0Jhc2U2NChzaXplclN2Zyl9YFxuICAgIH0pIDogbnVsbCkgOiBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcmVzdCwgaW1nQXR0cmlidXRlcywge1xuICAgICAgICBkZWNvZGluZzogXCJhc3luY1wiLFxuICAgICAgICBcImRhdGEtbmltZ1wiOiBsYXlvdXQsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICByZWY6IChpbWcpPT57XG4gICAgICAgICAgICBzZXRSZWYoaW1nKTtcbiAgICAgICAgICAgIGhhbmRsZUxvYWRpbmcoaW1nLCBzcmNTdHJpbmcsIGxheW91dCwgcGxhY2Vob2xkZXIsIG9uTG9hZGluZ0NvbXBsZXRlKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoe1xuICAgICAgICB9LCBpbWdTdHlsZSwgYmx1clN0eWxlKVxuICAgIH0pKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIiwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIH0sIHJlc3QsIGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICBzcmMsXG4gICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICBsYXlvdXQsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgc2l6ZXMsXG4gICAgICAgIGxvYWRlclxuICAgIH0pLCB7XG4gICAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICAgIFwiZGF0YS1uaW1nXCI6IGxheW91dCxcbiAgICAgICAgc3R5bGU6IGltZ1N0eWxlLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgbG9hZGluZzogbG9hZGluZyB8fCAnbGF6eSdcbiAgICB9KSkpLCBwcmlvcml0eSA/IC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbiAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgLy9cbiAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbiAgICAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgIGtleTogJ19fbmltZy0nICsgaW1nQXR0cmlidXRlcy5zcmMgKyBpbWdBdHRyaWJ1dGVzLnNyY1NldCArIGltZ0F0dHJpYnV0ZXMuc2l6ZXMsXG4gICAgICAgIHJlbDogXCJwcmVsb2FkXCIsXG4gICAgICAgIGFzOiBcImltYWdlXCIsXG4gICAgICAgIGhyZWY6IGltZ0F0dHJpYnV0ZXMuc3JjU2V0ID8gdW5kZWZpbmVkIDogaW1nQXR0cmlidXRlcy5zcmMsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlLlxuICAgICAgICBpbWFnZXNyY3NldDogaW1nQXR0cmlidXRlcy5zcmNTZXQsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgIGltYWdlc2l6ZXM6IGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICB9KSkgOiBudWxsKSk7XG59XG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjKSB7XG4gICAgcmV0dXJuIHNyY1swXSA9PT0gJy8nID8gc3JjLnNsaWNlKDEpIDogc3JjO1xufVxuZnVuY3Rpb24gaW1naXhMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgLy8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9hdXRvPWZvcm1hdCZmaXQ9bWF4Jnc9MzAwXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9YCk7XG4gICAgY29uc3QgcGFyYW1zID0gdXJsLnNlYXJjaFBhcmFtcztcbiAgICBwYXJhbXMuc2V0KCdhdXRvJywgcGFyYW1zLmdldCgnYXV0bycpIHx8ICdmb3JtYXQnKTtcbiAgICBwYXJhbXMuc2V0KCdmaXQnLCBwYXJhbXMuZ2V0KCdmaXQnKSB8fCAnbWF4Jyk7XG4gICAgcGFyYW1zLnNldCgndycsIHBhcmFtcy5nZXQoJ3cnKSB8fCB3aWR0aC50b1N0cmluZygpKTtcbiAgICBpZiAocXVhbGl0eSkge1xuICAgICAgICBwYXJhbXMuc2V0KCdxJywgcXVhbGl0eS50b1N0cmluZygpKTtcbiAgICB9XG4gICAgcmV0dXJuIHVybC5ocmVmO1xufVxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICB9KSB7XG4gICAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWA7XG59XG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gICAgY29uc3QgcGFyYW1zID0gW1xuICAgICAgICAnZl9hdXRvJyxcbiAgICAgICAgJ2NfbGltaXQnLFxuICAgICAgICAnd18nICsgd2lkdGgsXG4gICAgICAgICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXG4gICAgXTtcbiAgICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJztcbiAgICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWA7XG59XG5mdW5jdGlvbiBjdXN0b21Mb2FkZXIoeyBzcmMgIH0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgbWlzc2luZyBcImxvYWRlclwiIHByb3AuYCArIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXJgKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdO1xuICAgICAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICAgICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJyk7XG4gICAgICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKTtcbiAgICAgICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbignLCAnKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBxdWFsaXR5XG4gICAgICAgICAgICB9KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgICAgICAgIGxldCBwYXJzZWRTcmM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHBhcnNlZFNyYyA9IG5ldyBVUkwoc3JjKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmICFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmAgKyBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IGV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gdm9pZCAwO1xuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihjYikge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCAxKTtcbn07XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrO1xuY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihpZCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufTtcbmV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gY2FuY2VsSWRsZUNhbGxiYWNrO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVzZUludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbjtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oeyByb290TWFyZ2luICwgZGlzYWJsZWQgIH0pIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIGNvbnN0IHVub2JzZXJ2ZSA9ICgwLCBfcmVhY3QpLnVzZVJlZigpO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9ICgwLCBfcmVhY3QpLnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBzZXRSZWYgPSAoMCwgX3JlYWN0KS51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVybjtcbiAgICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShlbCwgKGlzVmlzaWJsZSk9PmlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSlcbiAgICAgICAgICAgICwge1xuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9ICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpPT4oMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLmNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgc2V0UmVmLFxuICAgICAgICB2aXNpYmxlXG4gICAgXTtcbn1cbmZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkICwgb2JzZXJ2ZXIgLCBlbGVtZW50cyAgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO1xuICAgIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgICAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgICAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xuICAgIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnO1xuICAgIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKT0+e1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KT0+e1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMDtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICBvYnNlcnZlcnMuc2V0KGlkLCBpbnN0YW5jZSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG9ic2VydmVyLFxuICAgICAgICBlbGVtZW50c1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9pbmRleC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlclwiO1xyXG5pbXBvcnQgTWFpbiBmcm9tIFwiLi4vY29tcG9uZW50cy9NYWluXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyL0hlYWRlclwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBJbmRleDogUmVhY3QuRkMgPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcblx0XHRcdDxIZWFkZXI+PC9IZWFkZXI+XHJcblx0XHRcdDxNYWluPjwvTWFpbj5cclxuXHRcdFx0PEZvb3Rlcj48L0Zvb3Rlcj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiIsImltcG9ydCB7Z3FsfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcclxuXHJcblxyXG5leHBvcnQgY29uc3QgR0VUX09SREVSX0JZX0lEID0gZ3FsIGBcclxuXHJcblx0cXVlcnkgZ2V0T3JkZXJCeUlkKCRvcmRlcjogSUQhKSB7XHJcblx0XHRcdGdldE9yZGVyQnlJZChpZDogJG9yZGVyKSB7XHJcblx0XHRcdFx0aWQsIGZ1bGxfbmFtZSwgZW1haWxcclxuXHRcdFx0fVxyXG5cdH1cclxuXHRcclxuYCIsImltcG9ydCB7Z3FsfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcclxuXHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0FMTF9QUk9EVUNUUyA9IGdxbCBgXHJcblxyXG5cdHF1ZXJ5IHtcclxuXHRcdGdldEFsbFByb2R1Y3RzIHtcclxuXHRcdFx0aWQsIG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZVxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuYCIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5cclxuY29uc3Qgc2VudENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpOyBcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZW50Q29udGV4dDtcclxuXHJcblxyXG5cclxuXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvb3RlclwiOiBcIkZvb3Rlcl9mb290ZXJfXzFLVzE3XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwiSGVhZGVyX3dyYXBwZXJfX0pSZ0pBXCIsXG5cdFwiX2NvbnRhaW5lclwiOiBcIkhlYWRlcl9fY29udGFpbmVyX18zRWlVLVwiLFxuXHRcImhlYWRlclwiOiBcIkhlYWRlcl9oZWFkZXJfXzItWFdYXCIsXG5cdFwiaGVhZGVyX19jb250YWluZXJcIjogXCJIZWFkZXJfaGVhZGVyX19jb250YWluZXJfXzQtWEpJXCIsXG5cdFwiaGVhZGVyX19sb2dvXCI6IFwiSGVhZGVyX2hlYWRlcl9fbG9nb19fRTF5bDFcIixcblx0XCJoZWFkZXJfX2xvZ29faWNvblwiOiBcIkhlYWRlcl9oZWFkZXJfX2xvZ29faWNvbl9fMjBVdEpcIixcblx0XCJoZWFkZXJfX2xvZ29faWNvbl9faW1nXCI6IFwiSGVhZGVyX2hlYWRlcl9fbG9nb19pY29uX19pbWdfX0hMT0hCXCIsXG5cdFwiaGVhZGVyX19sb2dvX3RleHRcIjogXCJIZWFkZXJfaGVhZGVyX19sb2dvX3RleHRfXzNTdTNhXCIsXG5cdFwiaGVhZGVyX19idXNrZXRcIjogXCJIZWFkZXJfaGVhZGVyX19idXNrZXRfXzJtbjhRXCIsXG5cdFwiaGVhZGVyX19idXNrZXRfdGV4dFwiOiBcIkhlYWRlcl9oZWFkZXJfX2J1c2tldF90ZXh0X18xeTJxSFwiLFxuXHRcImhlYWRlcl9fYnVza2V0X2ljb25cIjogXCJIZWFkZXJfaGVhZGVyX19idXNrZXRfaWNvbl9fTGl4QllcIixcblx0XCJoZWFkZXJfX2J1c2tldF9jb3VudFwiOiBcIkhlYWRlcl9oZWFkZXJfX2J1c2tldF9jb3VudF9fUG1yMjZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyYXBwZXJcIjogXCJNYWluX3dyYXBwZXJfXzJuSmxtXCIsXG5cdFwiX2NvbnRhaW5lclwiOiBcIk1haW5fX2NvbnRhaW5lcl9fM29RNjNcIixcblx0XCJwYWdlXCI6IFwiTWFpbl9wYWdlX18xYUFWVVwiLFxuXHRcInBhZ2VfX21haW5cIjogXCJNYWluX3BhZ2VfX21haW5fX0FyeF84XCIsXG5cdFwibWFpblwiOiBcIk1haW5fbWFpbl9fNkRQaURcIixcblx0XCJtYWluX19ib2R5XCI6IFwiTWFpbl9tYWluX19ib2R5X18yVzA2aVwiLFxuXHRcIm1haW5fX2JvZHlfX2NvbnRhaW5lclwiOiBcIk1haW5fbWFpbl9fYm9keV9fY29udGFpbmVyX19mQldiSlwiLFxuXHRcIm1haW5fX2Zvcm1cIjogXCJNYWluX21haW5fX2Zvcm1fXzF5T01lXCIsXG5cdFwibWFpbl9fZm9ybV9fdGFic1wiOiBcIk1haW5fbWFpbl9fZm9ybV9fdGFic19fM3M2RmRcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyYXBwZXJcIjogXCJPcmRlcl93cmFwcGVyX19POFhwaFwiLFxuXHRcIl9jb250YWluZXJcIjogXCJPcmRlcl9fY29udGFpbmVyX19UZnE3VVwiLFxuXHRcIm9yZGVyXCI6IFwiT3JkZXJfb3JkZXJfXzZ2dVAtXCIsXG5cdFwib3JkZXJfX3RpdGxlXCI6IFwiT3JkZXJfb3JkZXJfX3RpdGxlX19kZWNjd1wiLFxuXHRcIm9yZGVyX19udW1iZXJcIjogXCJPcmRlcl9vcmRlcl9fbnVtYmVyX18xV1duNFwiLFxuXHRcIm9yZGVyX190ZXh0XCI6IFwiT3JkZXJfb3JkZXJfX3RleHRfXzFlczZ4XCIsXG5cdFwib3JkZXJfX2VzdGltYXRlZFwiOiBcIk9yZGVyX29yZGVyX19lc3RpbWF0ZWRfX2c1MGctXCIsXG5cdFwib3JkZXJfX3ByaW50X3JlY2lwZVwiOiBcIk9yZGVyX29yZGVyX19wcmludF9yZWNpcGVfXzNUamZjXCIsXG5cdFwiYm9sZFwiOiBcIk9yZGVyX2JvbGRfX0RfOU9pXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwiUHJvZHVjdHNfd3JhcHBlcl9fMW5JM0NcIixcblx0XCJfY29udGFpbmVyXCI6IFwiUHJvZHVjdHNfX2NvbnRhaW5lcl9fMUhJLWFcIixcblx0XCJtYWluX19wcm9kdWN0c1wiOiBcIlByb2R1Y3RzX21haW5fX3Byb2R1Y3RzX190SkNZMlwiLFxuXHRcInByb2R1Y3RzXCI6IFwiUHJvZHVjdHNfcHJvZHVjdHNfXzJIdkdTXCIsXG5cdFwicHJvZHVjdHNfX3RleHRcIjogXCJQcm9kdWN0c19wcm9kdWN0c19fdGV4dF9fb0RFUTVcIixcblx0XCJwcm9kdWN0c19fdGV4dF90aXRsZVwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RzX190ZXh0X3RpdGxlX18yZTFZVFwiLFxuXHRcInByb2R1Y3RzX190ZXh0X2VkaXRcIjogXCJQcm9kdWN0c19wcm9kdWN0c19fdGV4dF9lZGl0X18xblY2alwiLFxuXHRcInByb2R1Y3RzX19wcm9kdWN0XCI6IFwiUHJvZHVjdHNfcHJvZHVjdHNfX3Byb2R1Y3RfXzJORlZaXCIsXG5cdFwicHJvZHVjdHNfX2Nvc3RcIjogXCJQcm9kdWN0c19wcm9kdWN0c19fY29zdF9fMTBKVnNcIixcblx0XCJwcm9kdWN0c19faW5mb3JtYXRpb25cIjogXCJQcm9kdWN0c19wcm9kdWN0c19faW5mb3JtYXRpb25fXzN4WkVCXCIsXG5cdFwicHJvZHVjdFwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RfX0VIVXlNXCIsXG5cdFwicHJvZHVjdF9faW1hZ2VcIjogXCJQcm9kdWN0c19wcm9kdWN0X19pbWFnZV9fMUNoWk5cIixcblx0XCJwcm9kdWN0X19jb250ZW50XCI6IFwiUHJvZHVjdHNfcHJvZHVjdF9fY29udGVudF9fM3B4UlVcIixcblx0XCJwcm9kdWN0X19jb250ZW50X25hbWVcIjogXCJQcm9kdWN0c19wcm9kdWN0X19jb250ZW50X25hbWVfXzNXdmNlXCIsXG5cdFwicHJvZHVjdF9fY29udGVudF9kZXNjcmlwdGlvblwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RfX2NvbnRlbnRfZGVzY3JpcHRpb25fXzJDanJSXCIsXG5cdFwicHJvZHVjdF9fY29udGVudF9xdWFudGl0eVwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RfX2NvbnRlbnRfcXVhbnRpdHlfX3FCWElRXCIsXG5cdFwicHJvZHVjdF9fcHJpY2VcIjogXCJQcm9kdWN0c19wcm9kdWN0X19wcmljZV9fMk42YzBcIixcblx0XCJjb3N0X19zdWJ0b3RhbFwiOiBcIlByb2R1Y3RzX2Nvc3RfX3N1YnRvdGFsX19GVmRHT1wiLFxuXHRcImNvc3RfX3NoaXBwaW5nXCI6IFwiUHJvZHVjdHNfY29zdF9fc2hpcHBpbmdfX3VkYlVmXCIsXG5cdFwiY29zdF9fdGF4ZXNcIjogXCJQcm9kdWN0c19jb3N0X190YXhlc19fXzhESzNcIixcblx0XCJjb3N0X190b3RhbFwiOiBcIlByb2R1Y3RzX2Nvc3RfX3RvdGFsX18xS05TSFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid3JhcHBlclwiOiBcInN0eWxlc193cmFwcGVyX18xQ3BST1wiLFxuXHRcIl9jb250YWluZXJcIjogXCJzdHlsZXNfX2NvbnRhaW5lcl9fMWh4RTJcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVtYWlsanMtY29tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpxdWVyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlucHV0LW1hc2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIkZvb3RlciIsImZvb3RlciIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByb2R1Y3RzIiwiVGFicyIsInNlbnRDb250ZXh0IiwiZW1haWxqcyIsIk9yZGVyIiwidXNlTXV0YXRpb24iLCJDUkVBVEVfT1JERVIiLCJNYWluIiwic3RhdGUiLCJzZXRTdGF0ZSIsIm5ld09yZGVyIiwib3JkZXIiLCJzZXRPcmRlciIsInNldFRpbWVvdXQiLCJtb21lbnQiLCJyZXF1aXJlIiwibm93Iiwic3VidHJhY3QiLCJjb25zb2xlIiwibG9nIiwic2VuZEVtYWlsIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmdWxsX25hbWUiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJlbWFpbCIsInBob25lIiwic3RyZWV0IiwiYXB0IiwiY2l0eSIsImNvdW50cnkiLCJ6aXAiLCJjYXJkX251bWJlciIsImV4cGlyZV9kYXRlIiwic2VjdXJpdHlfY29kZSIsInZhcmlhYmxlcyIsImlucHV0IiwidGhlbiIsImRhdGEiLCJjcmVhdGVPcmRlciIsImlkIiwic2VuZEZvcm0iLCJ0YXJnZXQiLCJyZXN1bHQiLCJ0ZXh0IiwiZXJyb3IiLCJyZXNldCIsInBhZ2UiLCJwYWdlX19tYWluIiwibWFpbiIsIm1haW5fX2NvbnRhaW5lciIsIl9jb250YWluZXIiLCJtYWluX19ib2R5IiwibWFpbl9fYm9keV9fY29udGFpbmVyIiwibWFpbl9fZm9ybSIsInVzZVF1ZXJ5IiwiR0VUX0FMTF9QUk9EVUNUUyIsIkhlYWRlciIsInNlbGVjdGVkUHJvZHVjdHMiLCJzZXRTZWxlY3RlZFByb2R1Y3RzIiwibG9hZGluZyIsInJlZmV0Y2giLCJwb2xsSW50ZXJ2YWwiLCJnZXRBbGxQcm9kdWN0cyIsImhlYWRlciIsImhlYWRlcl9fY29udGFpbmVyIiwiaGVhZGVyX19sb2dvIiwiaGVhZGVyX19sb2dvX2ljb24iLCJoZWFkZXJfX2xvZ29fdGV4dCIsImhlYWRlcl9fYnVza2V0IiwiaGVhZGVyX19idXNrZXRfdGV4dCIsImhlYWRlcl9fYnVza2V0X2ljb24iLCJoZWFkZXJfX2J1c2tldF9jb3VudCIsImxlbmd0aCIsIkltYWdlIiwibWFpbl9fcHJvZHVjdHMiLCJwcm9kdWN0c19fdGV4dCIsInByb2R1Y3RzX190ZXh0X3RpdGxlIiwicHJvZHVjdHNfX3RleHRfZWRpdCIsInByb2R1Y3RzX19pdGVtcyIsIm1hcCIsInByb2R1Y3QiLCJwcm9kdWN0c19fcHJvZHVjdCIsInByb2R1Y3RfX2ltYWdlIiwicHJvZHVjdF9fY29udGVudCIsInByb2R1Y3RfX2NvbnRlbnRfbmFtZSIsIm5hbWUiLCJwcm9kdWN0X19jb250ZW50X2Rlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJwcm9kdWN0X19jb250ZW50X3F1YW50aXR5IiwicHJvZHVjdF9fcHJpY2UiLCJwcmljZSIsInByb2R1Y3RzX19jb3N0IiwiY29zdF9fc3VidG90YWwiLCJzdWJ0b3RhbF9fdGV4dCIsInN1YnRvdGFsX19jb3VudCIsInJlZHVjZSIsImFjYyIsImN1ciIsImNvc3RfX3NoaXBwaW5nIiwic2hpcHBpbmdfX3RleHQiLCJzaGlwcGluZ19fY291bnQiLCJjb3N0X190YXhlcyIsInRheGVzX190ZXh0IiwidGF4ZXNfX2NvdW50IiwiY29zdF9fdG90YWwiLCJ0b3RhbF9fdGV4dCIsInRvdGFsX19jb3VudCIsInByb2R1Y3RzX19pbmZvcm1hdGlvbiIsIkdFVF9PUkRFUl9CWV9JRCIsInNlbGVjdGVkT3JkZXIiLCJzZXRTZWxlY3RlZE9yZGVyIiwiZ2V0T3JkZXJCeUlkIiwib3JkZXJfX3RpdGxlIiwib3JkZXJfX251bWJlciIsIm9yZGVyX190ZXh0Iiwib3JkZXJfX2VzdGltYXRlZCIsImJvbGQiLCJvcmRlcl9fcHJpbnRfcmVjaXBlIiwidXNlR2VvbG9jYXRpb24iLCJ1c2VJZGVudGlmaWNhdGlvbkNhcmQiLCJ1c2VJbnB1dCIsIklucHV0TWFzayIsImZhQ3Jvc3NoYWlycyIsIkZvbnRBd2Vzb21lSWNvbiIsIiQiLCJ0b2dnbGVDbGFzcyIsInNldFRvZ2dsZUNsYXNzIiwiY2FyZFR5cGUiLCJzZXRDYXJkVHlwZSIsImdlb2xvY2F0aW9uIiwiaXNFbXB0eSIsIm1pbkxlbmd0aCIsImIiLCJpc0VtYWlsIiwiZm9jdXMiLCJyZW1vdmVDbGFzcyIsImJsdXIiLCJnZXREZXRlY3RlZCIsImlzTmV4dCIsImlzTWluTGVuZ3RoRXJyb3IiLCJvbkNoYW5nZSIsIm9uQmx1ciIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJmb250U2l6ZSIsImN1cnNvciIsIm9wYWNpdHkiLCJpbnB1dFZhbGlkIiwiaXNFbWFpbEVycm9yIiwibmF2aWdhdG9yIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwic3VjY2Vzc0NhbGxiYWNrIiwiZXJyb3JDYWxsYmFjayIsInNldENpdHkiLCJzZXRDb3VudHJ5Iiwic2V0WmlwIiwiZmV0Y2giLCJkIiwianNvbiIsInJlcyIsImNvdW50cnlfbmFtZSIsInBvc3RhbCIsInJlZ2V4IiwiUmVnRXhwIiwibWF0Y2giLCJ0ZXN0IiwidXNlVmFsaWRhdGlvbiIsImluaXRpYWxWYWx1ZSIsInZhbGlkYXRpb25zIiwic2V0VmFsdWUiLCJpc0RpcnR5Iiwic2V0SXNEaXJ0eSIsInNldElzTmV4dCIsInZhbGlkIiwib25DbGljayIsInNldElzRW1wdHkiLCJzZXRJc0VtYWlsRXJyb3IiLCJzZXRJc01pbkxlbmd0aEVycm9yIiwic2V0SW5wdXRWYWxpZCIsInZhbGlkYXRpb24iLCJyZSIsIlN0cmluZyIsInRvTG93ZXJDYXNlIiwiZ3FsIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwiZGVmYXVsdCIsIkltYWdlMSIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfaGVhZCIsIl90b0Jhc2U2NCIsIl9pbWFnZUNvbmZpZyIsIl91c2VJbnRlcnNlY3Rpb24iLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfX2VzTW9kdWxlIiwiX29iamVjdFNwcmVhZCIsImkiLCJhcmd1bWVudHMiLCJzb3VyY2UiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImNvbmNhdCIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImZvckVhY2giLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJleGNsdWRlZCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwic291cmNlU3ltYm9sS2V5cyIsImluZGV4T2YiLCJwcm90b3R5cGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImNhbGwiLCJzb3VyY2VLZXlzIiwibG9hZGVkSW1hZ2VVUkxzIiwiU2V0IiwiZ2xvYmFsIiwiX19ORVhUX0lNQUdFX0lNUE9SVEVEIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJ1bmRlZmluZWQiLCJsb2FkZXJzIiwiTWFwIiwiZGVmYXVsdExvYWRlciIsImltZ2l4TG9hZGVyIiwiY2xvdWRpbmFyeUxvYWRlciIsImFrYW1haUxvYWRlciIsImN1c3RvbUxvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJzcmMiLCJpc1N0YXRpY0ltYWdlRGF0YSIsImlzU3RhdGljSW1wb3J0IiwiZGV2aWNlU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJjb25maWdJbWFnZVNpemVzIiwibG9hZGVyIiwiY29uZmlnTG9hZGVyIiwicGF0aCIsImNvbmZpZ1BhdGgiLCJkb21haW5zIiwiY29uZmlnRG9tYWlucyIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfSU1BR0VfT1BUUyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwic29ydCIsImEiLCJnZXRXaWR0aHMiLCJ3aWR0aCIsImxheW91dCIsInNpemVzIiwidmlld3BvcnRXaWR0aFJlIiwicGVyY2VudFNpemVzIiwiZXhlYyIsInB1c2giLCJwYXJzZUludCIsInNtYWxsZXN0UmF0aW8iLCJNYXRoIiwibWluIiwid2lkdGhzIiwicyIsImtpbmQiLCJ3IiwiZmluZCIsInAiLCJnZW5lcmF0ZUltZ0F0dHJzIiwidW5vcHRpbWl6ZWQiLCJxdWFsaXR5Iiwic3JjU2V0IiwibGFzdCIsImpvaW4iLCJnZXRJbnQiLCJ4IiwiZGVmYXVsdEltYWdlTG9hZGVyIiwibG9hZGVyUHJvcHMiLCJsb2FkIiwiZ2V0Iiwicm9vdCIsIkVycm9yIiwiVkFMSURfTE9BREVSUyIsImhhbmRsZUxvYWRpbmciLCJpbWciLCJwbGFjZWhvbGRlciIsIm9uTG9hZGluZ0NvbXBsZXRlIiwiaGFuZGxlTG9hZCIsInN0YXJ0c1dpdGgiLCJkZWNvZGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNhdGNoIiwic3R5bGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRJbWFnZSIsImFkZCIsIm5hdHVyYWxXaWR0aCIsIm5hdHVyYWxIZWlnaHQiLCJyZWYiLCJwYXJlbnRFbGVtZW50IiwicGFyZW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImRpc3BsYXkiLCJ3YXJuIiwiY29tcGxldGUiLCJvbmxvYWQiLCJfcGFyYW0iLCJwcmlvcml0eSIsImxhenlCb3VuZGFyeSIsImNsYXNzTmFtZSIsImhlaWdodCIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwiYmx1ckRhdGFVUkwiLCJhbGwiLCJyZXN0Iiwic3RhdGljU3JjIiwic3RhdGljSW1hZ2VEYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpZHRoSW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImlzTGF6eSIsImhhcyIsImluY2x1ZGVzIiwiaXNOYU4iLCJWQUxJRF9CTFVSX0VYVCIsInJhbmQiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwic2V0UmVmIiwiaXNJbnRlcnNlY3RlZCIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndyYXBwZXJTdHlsZSIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ1N0eWxlIiwibGVmdCIsImJvdHRvbSIsImJveFNpemluZyIsInBhZGRpbmciLCJib3JkZXIiLCJtYXJnaW4iLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwiYmx1clN0eWxlIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwib3ZlcmZsb3ciLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJpbWdBdHRyaWJ1dGVzIiwic3JjU3RyaW5nIiwiY3JlYXRlRWxlbWVudCIsImFsdCIsInRvQmFzZTY0IiwiYXNzaWduIiwiZGVjb2RpbmciLCJyZWwiLCJhcyIsImhyZWYiLCJpbWFnZXNyY3NldCIsImltYWdlc2l6ZXMiLCJub3JtYWxpemVTcmMiLCJzbGljZSIsInVybCIsIlVSTCIsInBhcmFtcyIsInNlYXJjaFBhcmFtcyIsInNldCIsInBhcmFtc1N0cmluZyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJlcnIiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJzZWxmIiwiYmluZCIsIndpbmRvdyIsImNiIiwic3RhcnQiLCJEYXRlIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJtYXgiLCJjbGVhclRpbWVvdXQiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidXNlUmVmIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VDYWxsYmFjayIsImVsIiwiY3VycmVudCIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib3B0aW9ucyIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiaW5zdGFuY2UiLCJlbnRyaWVzIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwiSW5kZXgiLCJ3cmFwcGVyIiwiY3JlYXRlQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=