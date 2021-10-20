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
/* harmony import */ var _styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Products.module.scss */ "./styles/Products.module.scss");
/* harmony import */ var _styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _query_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../query/product */ "./query/product.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
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
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(_query_product__WEBPACK_IMPORTED_MODULE_2__.GET_ALL_PRODUCTS, {
    pollInterval: 500
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!loading) {
      setSelectedProducts(data.getAllProducts);
    }
  }, [data]);

  if (loading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 10
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_4___default().main__products),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_4___default().products__text),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_4___default().products__text_title),
        children: "Order summary"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
        className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_4___default().products__text_edit),
        children: "edit order"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("ul", {
      className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_4___default().products__items),
      children: !loading && selectedProducts.map(product => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
        className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_4___default().products__product),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_4___default().product__image),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
            src: "../../sumka.png",
            width: 45,
            height: 45,
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 8
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_4___default().product__content),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_4___default().product__content_name),
            children: product.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 8
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_4___default().product__content_description),
            children: product.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 8
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_4___default().product__content_quantity),
            children: "Quantity: 1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 8
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_4___default().product__price),
          children: ["$", product.price]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 8
        }, undefined)]
      }, product.id, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 6
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_4___default().products__cost),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cost__subtotal),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_4___default().subtotal__text),
          children: "Subtotal"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_4___default().subtotal__count),
          children: ["$", !loading && selectedProducts.reduce((acc, cur) => {
            return acc + cur.price;
          }, 0)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 6
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cost__shipping),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_4___default().shipping__text),
          children: "Shipping"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_4___default().shipping__count),
          children: "Free"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 6
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cost__taxes),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_4___default().taxes__text),
          children: "Taxes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_4___default().taxes__count),
          children: !loading && selectedProducts.reduce((acc, cur) => acc + cur.price, 0) * 0.03
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 6
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cost__total),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_4___default().total__text),
          children: "Total"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_4___default().total__count),
          children: ["$", !loading && selectedProducts.reduce((acc, cur) => acc + cur.price, 0) + selectedProducts.reduce((acc, cur) => acc + cur.price, 0) * 0.03]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 6
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("footer", {
      className: (_styles_Products_module_scss__WEBPACK_IMPORTED_MODULE_4___default().products__information),
      children: "All purchases are subject to our Terms and Conditions."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
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
      lineNumber: 48,
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
        lineNumber: 60,
        columnNumber: 4
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_4___default().order__number),
        children: ["Order number is: ", selectedOrder.id]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 4
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_4___default().order__text),
        children: ["Your will recieve an email confirmation shortly to ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
          href: "",
          children: selectedOrder.email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 56
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 4
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_4___default().order__estimated),
        children: ["Estimated delivery Day is ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          className: (_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_4___default().bold),
          children: "Friday 27st October 2021"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 31
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 4
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
        className: (_styles_Order_module_scss__WEBPACK_IMPORTED_MODULE_4___default().order__print_recipe),
        onClick: printRecipe,
        children: "Print Recipe"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 4
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTmV4dC8uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vTmV4dC8uL2NvbXBvbmVudHMvTWFpbi50c3giLCJ3ZWJwYWNrOi8vTmV4dC8uL2NvbXBvbmVudHMvTmF2YmFyL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vTmV4dC8uL2NvbXBvbmVudHMvUHJvZHVjdHMudHN4Iiwid2VicGFjazovL05leHQvLi9jb21wb25lbnRzL1VJL09yZGVyLnRzeCIsIndlYnBhY2s6Ly9OZXh0Ly4vY29tcG9uZW50cy9VSS9UYWJzLnRzeCIsIndlYnBhY2s6Ly9OZXh0Ly4vaG9va3MvdXNlR2VvbG9jYXRpb24udHMiLCJ3ZWJwYWNrOi8vTmV4dC8uL2hvb2tzL3VzZUlkZW50aWZpY2F0aW9uQ2FyZC50cyIsIndlYnBhY2s6Ly9OZXh0Ly4vaG9va3MvdXNlSW5wdXQudHMiLCJ3ZWJwYWNrOi8vTmV4dC8uL2hvb2tzL3VzZVZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vTmV4dC8uL211dGF0aW9ucy9vcmRlci50cyIsIndlYnBhY2s6Ly9OZXh0Ly4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL05leHQvLi9xdWVyeS9vcmRlci50cyIsIndlYnBhY2s6Ly9OZXh0Ly4vcXVlcnkvcHJvZHVjdC50cyIsIndlYnBhY2s6Ly9OZXh0Ly4vc2hhcmVkL2NvbnRleHQudHMiLCJ3ZWJwYWNrOi8vTmV4dC8uL3N0eWxlcy9Gb290ZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vTmV4dC8uL3N0eWxlcy9IZWFkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vTmV4dC8uL3N0eWxlcy9NYWluLm1vZHVsZS5zY3NzIiwid2VicGFjazovL05leHQvLi9zdHlsZXMvT3JkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vTmV4dC8uL3N0eWxlcy9Qcm9kdWN0cy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9OZXh0Ly4vc3R5bGVzL2luZGV4Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL05leHQvZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovL05leHQvZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIiIsIndlYnBhY2s6Ly9OZXh0L2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIiLCJ3ZWJwYWNrOi8vTmV4dC9leHRlcm5hbCBcImVtYWlsanMtY29tXCIiLCJ3ZWJwYWNrOi8vTmV4dC9leHRlcm5hbCBcImpxdWVyeVwiIiwid2VicGFjazovL05leHQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL05leHQvZXh0ZXJuYWwgXCJyZWFjdC1pbnB1dC1tYXNrXCIiLCJ3ZWJwYWNrOi8vTmV4dC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvRm9vdGVyLm1vZHVsZS5zY3NzJ1xyXG5cclxuY29uc3QgRm9vdGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG5cdFx0XHJcblx0XHQ8L2Zvb3Rlcj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvTWFpbi5tb2R1bGUuc2NzcydcclxuaW1wb3J0IFByb2R1Y3RzIGZyb20gJy4vUHJvZHVjdHMnXHJcbmltcG9ydCBUYWJzIGZyb20gJy4vVUkvVGFicydcclxuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tIFwiLi4vdHlwZXMvSVByb2R1Y3RcIjtcclxuaW1wb3J0IHNlbnRDb250ZXh0IGZyb20gJy4uL3NoYXJlZC9jb250ZXh0JztcclxuaW1wb3J0IGVtYWlsanMgZnJvbSAnZW1haWxqcy1jb20nO1xyXG5pbXBvcnQgT3JkZXIgZnJvbSAnLi9VSS9PcmRlcic7XHJcbmltcG9ydCB7IHVzZUdlb2xvY2F0aW9uIH0gZnJvbSAnLi4vaG9va3MvdXNlR2VvbG9jYXRpb24nO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgQ1JFQVRFX09SREVSIH0gZnJvbSAnLi4vbXV0YXRpb25zL29yZGVyJztcclxuaW1wb3J0IHsgY3JlYXRlUm91dGVMb2FkZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlcic7XHJcblxyXG5cclxuY29uc3QgTWFpbjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcblxyXG5cdGNvbnN0IHtzdGF0ZSwgc2V0U3RhdGV9ID0gdXNlQ29udGV4dChzZW50Q29udGV4dCk7XHJcblx0Y29uc3QgW25ld09yZGVyXSA9IHVzZU11dGF0aW9uKENSRUFURV9PUkRFUik7XHJcblx0Y29uc3QgW29yZGVyLCBzZXRPcmRlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHRcclxuXHRcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYoc3RhdGUgPT0gdHJ1ZSkge1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHNldFN0YXRlKGZhbHNlKSwgMTAwMDApXHJcblx0XHR9XHJcblx0fSwgW3N0YXRlXSlcclxuXHJcblx0ZnVuY3Rpb24gc2VuZEVtYWlsKGUpIHtcclxuXHRcdFxyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpO1xyXG5cdFx0Y29uc3QgZnVsbF9uYW1lID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cIm5hbWVcIl0nKVtcInZhbHVlXCJdXHJcblx0XHRjb25zdCBlbWFpbCA9IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJlbWFpbFwiXScpW1widmFsdWVcIl1cclxuXHRcdGNvbnN0IHBob25lID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInBob25lXCJdJylbXCJ2YWx1ZVwiXVxyXG5cdFx0Y29uc3Qgc3RyZWV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInN0cmVldFwiXScpW1widmFsdWVcIl1cclxuXHRcdGNvbnN0IGFwdCA9IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJhcHRcIl0nKVtcInZhbHVlXCJdXHJcblx0XHRjb25zdCBjaXR5ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImNpdHlcIl0nKVtcInZhbHVlXCJdXHJcblx0XHRjb25zdCBjb3VudHJ5ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImNvdW50cnlcIl0nKVtcInZhbHVlXCJdXHJcblx0XHRjb25zdCB6aXAgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiemlwXCJdJylbXCJ2YWx1ZVwiXVxyXG5cdFx0Y29uc3QgY2FyZF9udW1iZXIgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiY2FyZF9udW1iZXJcIl0nKVtcInZhbHVlXCJdXHJcblx0XHRjb25zdCBleHBpcmVfZGF0ZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJleHBpcmVfZGF0ZVwiXScpW1widmFsdWVcIl1cclxuXHRcdGNvbnN0IHNlY3VyaXR5X2NvZGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwic2VjdXJpdHlfY29kZVwiXScpW1widmFsdWVcIl1cclxuXHRcdFxyXG5cdFx0bmV3T3JkZXIoe1xyXG5cdFx0XHR2YXJpYWJsZXM6IHtcclxuXHRcdFx0XHRpbnB1dDoge1xyXG5cdFx0XHRcdFx0ZnVsbF9uYW1lLCBlbWFpbCwgcGhvbmUsIHN0cmVldCwgYXB0LCBjaXR5LCBjb3VudHJ5LCB6aXAsIGNhcmRfbnVtYmVyLCBleHBpcmVfZGF0ZSwgc2VjdXJpdHlfY29kZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSkudGhlbigoe2RhdGF9KSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGRhdGEuY3JlYXRlT3JkZXIpXHJcblx0XHRcdHNldE9yZGVyKGRhdGEuY3JlYXRlT3JkZXIuaWQpXHRcclxuXHRcdH0pXHJcblx0XHRzZXRTdGF0ZSh0cnVlKVxyXG5cdFx0ZW1haWxqcy5zZW5kRm9ybSgnc2VydmljZV9vd29tb2V1JywgJ3RlbXBsYXRlX3g5dGkydHYnLCBlLnRhcmdldCwgJ3VzZXJfQ0RxUE9PNzkySldSaWNHT2oyd1duJylcclxuXHRcdCAgLnRoZW4oKHJlc3VsdCkgPT4geyBcclxuXHRcdFx0ICBjb25zb2xlLmxvZyhyZXN1bHQudGV4dCk7XHJcblxyXG5cdFx0ICB9LCAoZXJyb3IpID0+IHtcclxuXHRcdFx0ICBjb25zb2xlLmxvZyhlcnJvci50ZXh0KTtcclxuXHRcdCAgfSk7XHJcblx0XHQgIGUudGFyZ2V0LnJlc2V0O1xyXG5cdFx0IFxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlX19tYWluICsgXCIgXCIgKyBzdHlsZXMubWFpbn0+XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluX19jb250YWluZXIgKyBcIiBcIiArIHN0eWxlcy5fY29udGFpbmVyfT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbl9fYm9keX0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbl9fYm9keV9fY29udGFpbmVyfT5cclxuXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8Zm9ybSBpZD1cImZvcm1cIiBjbGFzc05hbWU9e3N0eWxlcy5tYWluX19mb3JtfSBvblN1Ym1pdD17c2VuZEVtYWlsfT5cclxuXHRcdFx0XHRcdFx0XHR7IXN0YXRlID8gPFRhYnMvPiA6IDxPcmRlciBvcmRlcj17b3JkZXJ9Lz59XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0XHRcdFx0PFByb2R1Y3RzLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L21haW4+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0hlYWRlci5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCB7IElQcm9kdWN0IH0gZnJvbSAnLi4vLi4vdHlwZXMvSVByb2R1Y3QnO1xyXG5pbXBvcnQgeyBHRVRfQUxMX1BST0RVQ1RTIH0gZnJvbSAnLi4vLi4vcXVlcnkvcHJvZHVjdCc7XHJcblxyXG5cclxuXHJcbmNvbnN0IEhlYWRlcjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcblxyXG5cdGNvbnN0IFtzZWxlY3RlZFByb2R1Y3RzLCBzZXRTZWxlY3RlZFByb2R1Y3RzXSA9IHVzZVN0YXRlPElQcm9kdWN0W10+KFtdKVxyXG5cdGNvbnN0IHtkYXRhLCBsb2FkaW5nLCBlcnJvciwgcmVmZXRjaH0gPSB1c2VRdWVyeShHRVRfQUxMX1BST0RVQ1RTLCB7cG9sbEludGVydmFsOiA1MDB9KTtcclxuXHRcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmICghbG9hZGluZykge1xyXG5cdFx0XHRzZXRTZWxlY3RlZFByb2R1Y3RzKGRhdGEuZ2V0QWxsUHJvZHVjdHMpXHJcblx0XHR9XHRcclxuXHR9LCBbZGF0YV0pXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX19jb250YWluZXIgKyBcIiBcIiArIHN0eWxlcy5fY29udGFpbmVyfSA+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfX2xvZ299PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfX2xvZ29faWNvbn0+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPScuLi8uLi9sb2dvLnBuZycgYWx0PVwiXCIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ge3N0eWxlcy5oZWFkZXJfX2xvZ29fdGV4dH0+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfX2J1c2tldH0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfX2J1c2tldF90ZXh0fT5cclxuXHRcdFx0XHRcdGNhcnRcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fYnVza2V0X2ljb259PlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9Jy4uLy4uL2Jhc2tldC5wbmcnIGFsdD1cIlwiLz5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fYnVza2V0X2NvdW50fT57c2VsZWN0ZWRQcm9kdWN0cyA/IHNlbGVjdGVkUHJvZHVjdHMubGVuZ3RoIDogJzAnfTwvc3Bhbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2Plx0XHJcblx0XHQ8L2hlYWRlcj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Qcm9kdWN0cy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tICcuLi90eXBlcy9JUHJvZHVjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCB7IEdFVF9BTExfUFJPRFVDVFMgfSBmcm9tICcuLi9xdWVyeS9wcm9kdWN0JztcclxuXHJcblxyXG5cclxuY29uc3QgUHJvZHVjdHM6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG5cclxuXHRjb25zdCBbc2VsZWN0ZWRQcm9kdWN0cywgc2V0U2VsZWN0ZWRQcm9kdWN0c10gPSB1c2VTdGF0ZTxJUHJvZHVjdFtdPihbXSlcclxuXHRjb25zdCB7ZGF0YSwgbG9hZGluZywgZXJyb3IsIHJlZmV0Y2h9ID0gdXNlUXVlcnkoR0VUX0FMTF9QUk9EVUNUUywge3BvbGxJbnRlcnZhbDogNTAwfSk7XHJcblx0XHJcblxyXG5cdFxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKCFsb2FkaW5nKSB7XHJcblx0XHRcdHNldFNlbGVjdGVkUHJvZHVjdHMoZGF0YS5nZXRBbGxQcm9kdWN0cylcclxuXHRcdH1cdFxyXG5cdH0sIFtkYXRhXSlcclxuXHRcclxuXHRpZiAobG9hZGluZykge1xyXG5cdFx0cmV0dXJuIDxoMT5Mb2FkaW5nLi4uPC9oMT5cclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluX19wcm9kdWN0c30+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdHNfX3RleHR9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdHNfX3RleHRfdGl0bGV9PlxyXG5cdFx0XHRcdFx0T3JkZXIgc3VtbWFyeVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxhIGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RzX190ZXh0X2VkaXR9PlxyXG5cdFx0XHRcdFx0ZWRpdCBvcmRlclxyXG5cdFx0XHRcdDwvYT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDx1bCBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0c19faXRlbXN9PlxyXG5cdFx0XHRcdHshbG9hZGluZyAmJiAgc2VsZWN0ZWRQcm9kdWN0cy5tYXAocHJvZHVjdCA9PiBcclxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0c19fcHJvZHVjdH0ga2V5PXtwcm9kdWN0LmlkfT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0X19pbWFnZX0+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9ICcuLi8uLi9zdW1rYS5wbmcnIHdpZHRoPXs0NX0gaGVpZ2h0PXs0NX0gYWx0PVwiXCIvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0X19jb250ZW50fT5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RfX2NvbnRlbnRfbmFtZX0+XHJcblx0XHRcdFx0XHRcdFx0XHR7cHJvZHVjdC5uYW1lfVxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdF9fY29udGVudF9kZXNjcmlwdGlvbn0+XHJcblx0XHRcdFx0XHRcdFx0XHR7cHJvZHVjdC5kZXNjcmlwdGlvbn1cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RfX2NvbnRlbnRfcXVhbnRpdHl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0UXVhbnRpdHk6IDFcclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0X19wcmljZX0+XHJcblx0XHRcdFx0XHRcdFx0XHQke3Byb2R1Y3QucHJpY2V9XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDwvbGk+XHJcblxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0c19fY29zdH0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvc3RfX3N1YnRvdGFsfT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0b3RhbF9fdGV4dH0+XHJcblx0XHRcdFx0XHRcdFx0U3VidG90YWxcclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VidG90YWxfX2NvdW50fT5cclxuXHRcdFx0XHRcdFx0XHQkeyFsb2FkaW5nICYmIHNlbGVjdGVkUHJvZHVjdHMucmVkdWNlKChhY2MsIGN1cikgPT4geyByZXR1cm4gYWNjICsgY3VyLnByaWNlIH0sIDApfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3N0X19zaGlwcGluZ30+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2hpcHBpbmdfX3RleHR9PlxyXG5cdFx0XHRcdFx0XHRcdFNoaXBwaW5nXHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNoaXBwaW5nX19jb3VudH0+XHJcblx0XHRcdFx0XHRcdFx0RnJlZVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3N0X190YXhlc30+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGF4ZXNfX3RleHR9PlxyXG5cdFx0XHRcdFx0XHRcdFRheGVzXHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRheGVzX19jb3VudH0+XHJcblx0XHRcdFx0XHRcdFx0eyFsb2FkaW5nICYmIHNlbGVjdGVkUHJvZHVjdHMucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjICsgY3VyLnByaWNlLCAwKSowLjAzfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3N0X190b3RhbH0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG90YWxfX3RleHR9PlxyXG5cdFx0XHRcdFx0XHRcdFRvdGFsXHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvdGFsX19jb3VudH0+XHJcblx0XHRcdFx0XHRcdFx0JHshbG9hZGluZyAmJiBzZWxlY3RlZFByb2R1Y3RzLnJlZHVjZSgoYWNjLCBjdXIpID0+IGFjYyArIGN1ci5wcmljZSwgMCkgKyBzZWxlY3RlZFByb2R1Y3RzLnJlZHVjZSgoYWNjLCBjdXIpID0+IGFjYyArIGN1ci5wcmljZSwgMCkqMC4wM31cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RzX19pbmZvcm1hdGlvbn0+XHJcblx0XHRcdFx0XHRBbGwgcHVyY2hhc2VzIGFyZSBzdWJqZWN0IHRvIG91ciBUZXJtcyBhbmQgQ29uZGl0aW9ucy5cclxuXHRcdFx0XHQ8L2Zvb3Rlcj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9PcmRlci5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCB7IEdFVF9PUkRFUl9CWV9JRCB9IGZyb20gJy4uLy4uL3F1ZXJ5L29yZGVyJztcclxuXHJcbmludGVyZmFjZSBPcmRlclN0YXRlIHtcclxuXHRvcmRlcjogbnVtYmVyO1xyXG5cdC8vIGlkOiBudW1iZXI7XHJcblx0Ly8gZnVsbF9uYW1lOiBzdHJpbmc7XHJcbiAgICAvLyBwaG9uZTogc3RyaW5nO1xyXG4gICAgLy8gZW1haWw6IHN0cmluZztcclxuICAgIC8vIGNpdHk6IHN0cmluZztcclxuXHQvLyBkYXRhOiBPYmplY3RcclxuXHQvLyBzdHJlZXQ6IHN0cmluZztcclxuICAgIC8vIGFwdDogc3RyaW5nO1xyXG5cdC8vIHppcDogc3RyaW5nO1xyXG5cdC8vIGNhcmRfbnVtYmVyOiBzdHJpbmc7XHJcblx0Ly8gZXhwaXJlX2RhdGU6IHN0cmluZztcclxuXHQvLyBzZWN1cml0eV9jb2RlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBPcmRlclByb3BzIHtcclxuXHRpZDogc3RyaW5nXHJcblx0ZnVsbF9uYW1lOiBzdHJpbmdcclxuXHRlbWFpbDogc3RyaW5nXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgT3JkZXI6IFJlYWN0LkZDPE9yZGVyU3RhdGU+ID0gKHtvcmRlcn0pID0+IHtcclxuXHJcblx0XHJcblx0Y29uc3QgW3NlbGVjdGVkT3JkZXIsIHNldFNlbGVjdGVkT3JkZXJdID0gdXNlU3RhdGU8T3JkZXJQcm9wcz4oKTtcclxuXHRjb25zdCB7ZGF0YSwgbG9hZGluZywgZXJyb3IsIHJlZmV0Y2h9ID0gdXNlUXVlcnkoR0VUX09SREVSX0JZX0lELCB7XHJcblx0XHR2YXJpYWJsZXM6IHtcclxuXHRcdFx0b3JkZXJcclxuXHRcdH0sXHJcblx0XHRwb2xsSW50ZXJ2YWw6IDUwMCxcclxuXHR9KTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmICghbG9hZGluZykge1xyXG5cdFx0XHRzZXRTZWxlY3RlZE9yZGVyKGRhdGEuZ2V0T3JkZXJCeUlkKVxyXG5cdFx0fVx0XHJcblx0fSwgW2RhdGFdKVxyXG5cdFxyXG5cdGlmIChsb2FkaW5nKSB7XHJcblx0XHRyZXR1cm4gPGgxPkxvYWRpbmcuLi48L2gxPlxyXG5cdH1cclxuXHJcblx0Y29uc3QgcHJpbnRSZWNpcGUgPSAoKSA9PiB7XHJcblx0XHR3aW5kb3cucHJpbnQoKVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vcmRlcn0+XHJcblx0XHRcdHtzZWxlY3RlZE9yZGVyICYmIChcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vcmRlcl9fdGl0bGV9PlxyXG5cdFx0XHRcdHtzZWxlY3RlZE9yZGVyLmZ1bGxfbmFtZX0sIFRoYW5rIFlvdSBmb3IgeW91ciBvcmRlciFcclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3JkZXJfX251bWJlcn0+XHJcblx0XHRcdFx0T3JkZXIgbnVtYmVyIGlzOiB7c2VsZWN0ZWRPcmRlci5pZH1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3JkZXJfX3RleHR9PlxyXG5cdFx0XHRcdFlvdXIgd2lsbCByZWNpZXZlIGFuIGVtYWlsIGNvbmZpcm1hdGlvbiBzaG9ydGx5IHRvIDxhIGhyZWY9XCJcIj57c2VsZWN0ZWRPcmRlci5lbWFpbH08L2E+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9yZGVyX19lc3RpbWF0ZWR9PlxyXG5cdFx0XHRcdEVzdGltYXRlZCBkZWxpdmVyeSBEYXkgaXMgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYm9sZH0+RnJpZGF5IDI3c3QgT2N0b2JlciAyMDIxPC9wPlxyXG5cdFx0XHQ8L2Rpdj5cdFxyXG5cdFx0XHQ8YSBjbGFzc05hbWU9e3N0eWxlcy5vcmRlcl9fcHJpbnRfcmVjaXBlfSBvbkNsaWNrPXtwcmludFJlY2lwZX0+UHJpbnQgUmVjaXBlPC9hPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KX1cclxuXHRcdDwvZGl2PlxyXG5cdFx0XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcmRlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzZW50Q29udGV4dCBmcm9tICcuLi8uLi9zaGFyZWQvY29udGV4dCc7XHJcbmltcG9ydCB7IHVzZUdlb2xvY2F0aW9uIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlR2VvbG9jYXRpb24nO1xyXG5pbXBvcnQgeyB1c2VJZGVudGlmaWNhdGlvbkNhcmQgfSBmcm9tICcuLi8uLi9ob29rcy91c2VJZGVudGlmaWNhdGlvbkNhcmQnO1xyXG5pbXBvcnQgeyB1c2VJbnB1dCB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUlucHV0JztcclxuaW1wb3J0IElucHV0TWFzayBmcm9tIFwicmVhY3QtaW5wdXQtbWFza1wiO1xyXG5pbXBvcnQgeyBmYUNyb3NzaGFpcnMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcclxuXHJcblxyXG5cclxuLy9pbXBvcnQgc2VudENvbnRleHQgZnJvbSAnLi4vLi4vc2hhcmVkL2NvbnRleHQnO1xyXG5cclxuLy8gaW50ZXJmYWNlIFRhYnNQcm9wcyB7XHJcbi8vIFx0Y2hpbGRyZW4/OiBSZWFjdC5SZWFjdENoaWxkIHwgUmVhY3QuUmVhY3ROb2RlLFxyXG5cdFxyXG4vLyB9XHJcblxyXG5jb25zdCBUYWJzOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuXHJcblx0XHJcblx0XHJcblx0Y29uc3QgW3RvZ2dsZUNsYXNzLCBzZXRUb2dnbGVDbGFzc10gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xyXG5cdGNvbnN0IFtjYXJkVHlwZSwgc2V0Q2FyZFR5cGVdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcblx0Y29uc3QgW2lzRGV0ZWN0ZWQsIHNldElzRGV0ZWN0ZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cdFxyXG5cdGNvbnN0IGdlb2xvY2F0aW9uID0gdXNlR2VvbG9jYXRpb24oaXNEZXRlY3RlZCk7XHJcblxyXG5cdGNvbnN0IGZ1bGxfbmFtZSA9IHVzZUlucHV0KCcnLCB7aXNFbXB0eTogdHJ1ZSwgbWluTGVuZ3RoOiAzfSk7XHJcblx0Y29uc3Qgc3RyZWV0ID0gdXNlSW5wdXQoJycsIHtpc0VtcHR5OiB0cnVlfSk7XHJcblx0Y29uc3QgcGhvbmUgPSB1c2VJbnB1dCgnJywge2lzRW1wdHk6IHRydWV9KTtcclxuXHRjb25zdCBhcHQgPSB1c2VJbnB1dCgnJywge30pO1xyXG5cdGNvbnN0IGNpdHkgPSB1c2VJbnB1dCgnJywge2lzRW1wdHk6IHRydWV9LCBnZW9sb2NhdGlvbiwgJ2NpdHknKTtcclxuXHRjb25zdCBjb3VudHJ5ID0gdXNlSW5wdXQoJycsIHtpc0VtcHR5OiB0cnVlfSwgZ2VvbG9jYXRpb24sICdjb3VudHJ5Jyk7XHJcblx0Y29uc3QgemlwID0gdXNlSW5wdXQoJycsIHtpc0VtcHR5OiB0cnVlfSwgZ2VvbG9jYXRpb24sICd6aXAnKTtcclxuIFx0Y29uc3QgYiA9IHVzZUlucHV0KCcnLCB7fSk7XHJcblx0Y29uc3QgY2FyZF9udW1iZXIgPSB1c2VJbnB1dCgnJywge2lzRW1wdHk6IHRydWV9KTtcclxuXHRjb25zdCBleHBpcmVfZGF0ZSA9IHVzZUlucHV0KCcnLCB7aXNFbXB0eTogdHJ1ZX0pO1xyXG5cdGNvbnN0IHNlY3VyaXR5X2NvZGUgPSB1c2VJbnB1dCgnJywge2lzRW1wdHk6IHRydWV9KTtcclxuXHRjb25zdCBlbWFpbCA9IHVzZUlucHV0KCcnLCB7aXNFbWFpbDogdHJ1ZX0pO1xyXG5cdFxyXG5cdFxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHQkKCcuc2VsZWN0JykuZm9jdXMoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JCgnLmNvbnRlbnRfX2lucHV0c19fcm93X2NvdW50cnknKS50b2dnbGVDbGFzcygnY29udGVudF9faW5wdXRzX19yb3dfY291bnRyeV9zZWFyY2gnKVxyXG5cdFx0XHRcdCQoJy5jb250ZW50X19pbnB1dHNfX3Jvd19jb3VudHJ5JykucmVtb3ZlQ2xhc3MoJ2NvbnRlbnRfX2lucHV0c19fcm93X2NvdW50cnlfYXJyb3cnKVxyXG5cdFx0fSk7XHJcblx0XHQkKCcuc2VsZWN0JykuYmx1cihmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnLmNvbnRlbnRfX2lucHV0c19fcm93X2NvdW50cnknKS5yZW1vdmVDbGFzcygnY29udGVudF9faW5wdXRzX19yb3dfY291bnRyeV9zZWFyY2gnKVxyXG5cdFx0XHQkKCcuY29udGVudF9faW5wdXRzX19yb3dfY291bnRyeScpLnRvZ2dsZUNsYXNzKCdjb250ZW50X19pbnB1dHNfX3Jvd19jb3VudHJ5X2Fycm93JylcclxuXHR9KTtcclxuXHJcblx0fSwgW10pXHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblxyXG5cdGZ1bmN0aW9uIGdldERldGVjdGVkKCl7XHJcblx0XHRzZXRJc0RldGVjdGVkKHRydWUpXHRcdFxyXG5cdH1cclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGdlb2xvY2F0aW9uLmNpdHkpXHJcblx0XHRjb25zb2xlLmxvZyhjaXR5LnZhbHVlKVxyXG5cdH0sIFtnZW9sb2NhdGlvbl0pXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZXRDYXJkVHlwZSh1c2VJZGVudGlmaWNhdGlvbkNhcmQoY2FyZF9udW1iZXIudmFsdWUpKTtcclxuXHR9LCBbY2FyZF9udW1iZXIudmFsdWVdKVxyXG5cclxuXHJcblx0cmV0dXJuIChcclxuXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYmxvY2tfX2Zvcm1fX3RhYnNcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dG9nZ2xlQ2xhc3MgPT09IDEgPyBcInRhYnMgYWN0aXZlLXRhYnNcIiA6IFwidGFic1wifSBpZD1cInRhYjFcIiBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGVDbGFzcygxKX0+U2hpcHBpbmc8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dG9nZ2xlQ2xhc3MgPT09IDIgPyBcInRhYnMgYWN0aXZlLXRhYnNcIiA6IFwidGFic1wifSBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGVDbGFzcygyKX0+QmlsbGluZzwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXt0b2dnbGVDbGFzcyA9PT0gMyA/IFwidGFicyBhY3RpdmUtdGFic1wiIDogXCJ0YWJzXCJ9IG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZUNsYXNzKDMpfT5QYXltZW50PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYmxvY2tfX2Zvcm1fX3RhYnNfX2NvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXt0b2dnbGVDbGFzcyA9PT0gMSA/IFwiY29udGVudCBhY3RpdmUtY29udGVudFwiIDogXCJjb250ZW50XCJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3RpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0U2hpcHBpbmcgaW5mb1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fcmVjaXBpZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19yZWNpcGllbnRfdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0UmVjaXBpZW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c1wiPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7KChiLmlzTmV4dCAmJiBmdWxsX25hbWUuaXNFbXB0eSkgfHwgKGIuaXNOZXh0ICYmIGZ1bGxfbmFtZS5pc01pbkxlbmd0aEVycm9yKSkgJiYgKDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlJz5QbGVhc2UgZW50ZXIgcmVjaXBpZW50IGZ1bGwgbmFtZSBhbmQgbWluIGxlbmd0aCA9IDM8L2Rpdj4pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17KChiLmlzTmV4dCAmJiBmdWxsX25hbWUuaXNFbXB0eSkgfHwgKGIuaXNOZXh0ICYmIGZ1bGxfbmFtZS5pc01pbkxlbmd0aEVycm9yKSkgPyBcImNvbnRlbnRfX2lucHV0c19mdWxsbmFtZSBmb2N1c2VkXCIgOiBcImNvbnRlbnRfX2lucHV0c19mdWxsbmFtZVwifSBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiRnVsbCBOYW1lXCIgdmFsdWU9e2Z1bGxfbmFtZS52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBmdWxsX25hbWUub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IGZ1bGxfbmFtZS5vbkJsdXIoZSl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19kYXl0aW1lX2NvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0eygoYi5pc05leHQgJiYgcGhvbmUuaXNFbXB0eSkpICYmICg8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZSc+UGxlYXNlIGVudGVyIHJlY2lwaWVudCBwaG9uZSBpbiBmb3JtYXQgKzcgKDAwMCkgMDAwIDAwIDAwPC9kaXY+KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PElucHV0TWFzayBuYW1lPVwicGhvbmVcIiBtYXNrPVwiKzdcXCg5OTkpOTk5LTk5LTk5XCIgdHlwZT1cInRlbFwiIGNsYXNzTmFtZT17KChiLmlzTmV4dCAmJiBwaG9uZS5pc0VtcHR5KSkgPyBcImNvbnRlbnRfX2lucHV0c19kYXl0aW1lIGZvY3VzZWRcIiA6IFwiY29udGVudF9faW5wdXRzX2RheXRpbWVcIn0gaWQ9XCJwaG9uZU51bWJlclwiIHBsYWNlaG9sZGVyPVwiRGF0ZXRpbWUgUGhvbmVcIiB2YWx1ZT17cGhvbmUudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gcGhvbmUub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IHBob25lLm9uQmx1cihlKX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3IgPVwiY29udGVudF9faW5wdXRzX2RheXRpbWVfbGFiZWxcIj5Gb3IgZGVsaXZlcnkgcXVlc3Rpb25zIG9ubHk8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2FkZHJlc3NcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2FkZHJlc3NfdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QWRkcmVzc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNcIj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eygoYi5pc05leHQgJiYgc3RyZWV0LmlzRW1wdHkpKSAmJiAoPGRpdiBjbGFzc05hbWU9J21lc3NhZ2UnPlBsZWFzZSBlbnRlciByZWNpcGllbnQgc3RyZWV0PC9kaXY+KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9eygoYi5pc05leHQgJiYgc3RyZWV0LmlzRW1wdHkpKSA/IFwiY29udGVudF9faW5wdXRzX3N0cmVldCBmb2N1c2VkXCIgOiBcImNvbnRlbnRfX2lucHV0c19zdHJlZXRcIn0gbmFtZT1cInN0cmVldFwiIHBsYWNlaG9sZGVyPVwiU3RyZWV0IEFkZHJlc3NcIiB2YWx1ZT17c3RyZWV0LnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHN0cmVldC5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gc3RyZWV0Lm9uQmx1cihlKX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19hcHRcIiBuYW1lPVwiYXB0XCIgcGxhY2Vob2xkZXI9XCJBcHQsIFN1aXRlLCBCbGRnLCBHYXRlIENvZGUuIChvcHRpb25hbClcIiB2YWx1ZT17YXB0LnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IGFwdC5vbkNoYW5nZShlKX0gb25CbHVyPXsoZSkgPT4gYXB0Lm9uQmx1cihlKX0vPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfaWNvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjaXR5XCIgY2xhc3NOYW1lPXsoKGIuaXNOZXh0ICYmIGNpdHkuaXNFbXB0eSkpID8gXCJjb250ZW50X19pbnB1dHNfY2l0eSBmb2N1c2VkXCIgOiBcImNvbnRlbnRfX2lucHV0c19jaXR5XCJ9IHZhbHVlPXtjaXR5LnZhbHVlfSBwbGFjZWhvbGRlcj1cIkNpdHlcIiBvbkNoYW5nZT17KGUpID0+IHtjaXR5Lm9uQ2hhbmdlKGUpfX0gb25CbHVyPXsoZSkgPT4gY2l0eS5vbkJsdXIoZSl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHshaXNEZXRlY3RlZCA/IDxGb250QXdlc29tZUljb24gb25DbGljaz17Z2V0RGV0ZWN0ZWR9IGljb249e2ZhQ3Jvc3NoYWlyc30gc3R5bGU9e3twb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAnNDAlJywgcmlnaHQ6ICcxMHB4JywgZm9udFNpemU6ICcyMHB4JywgY3Vyc29yOiAncG9pbnRlcid9fS8+IDogPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNyb3NzaGFpcnN9IHN0eWxlPXt7cG9zaXRpb246ICdhYnNvbHV0ZScsIG9wYWNpdHk6ICcwLjQnLCB0b3A6ICc0MCUnLCByaWdodDogJzEwcHgnLCBmb250U2l6ZTogJzIwcHgnLCBjdXJzb3I6ICdwb2ludGVyJ319Lz59XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfX3Jvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzX19yb3dfY291bnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzX19yb3dfY291bnRyeSBjb250ZW50X19pbnB1dHNfX3Jvd19jb3VudHJ5X2Fycm93XCIgaWQ9XCJlZGl0b3JcIj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9eygoYi5pc05leHQgJiYgY291bnRyeS5pc0VtcHR5KSkgPyBcInNlbGVjdCBmb2N1c2VkXCIgOiBcInNlbGVjdFwifSBuYW1lPVwiY291bnRyeVwiIHBsYWNlaG9sZGVyPVwiQ291bnRyeVwiIGxpc3Q9XCJjaXR5bmFtZVwiIHZhbHVlPXtjb3VudHJ5LnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHtjb3VudHJ5Lm9uQ2hhbmdlKGUpfX0gb25CbHVyPXsoZSkgPT4gY291bnRyeS5vbkJsdXIoZSl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRhdGFsaXN0IGlkPVwiY2l0eW5hbWVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiUnVzc2lhXCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJVa3JhaW5lXCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJCZWxhcnVzXCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJVU0FcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkdlcm1hbnlcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkZyYW5jZVwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kYXRhbGlzdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17KChiLmlzTmV4dCAmJiB6aXAuaXNFbXB0eSkpID8gXCJjb250ZW50X19pbnB1dHNfX3Jvd196aXAgZm9jdXNlZFwiIDogXCJjb250ZW50X19pbnB1dHNfX3Jvd196aXBcIn0gbmFtZT1cInppcFwiIHBsYWNlaG9sZGVyPVwiWklQXCIgdmFsdWU9e3ppcC52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiB7emlwLm9uQ2hhbmdlKGUpfX0gb25CbHVyPXsoZSkgPT4gemlwLm9uQmx1cihlKX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0eyhmdWxsX25hbWUuaW5wdXRWYWxpZCAmJiBwaG9uZS5pbnB1dFZhbGlkICYmIHN0cmVldC5pbnB1dFZhbGlkICYmIGNpdHkuaW5wdXRWYWxpZCAmJiBjb3VudHJ5LmlucHV0VmFsaWQgJiYgemlwLmlucHV0VmFsaWQpICYmIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZUNsYXNzKDIpfSBjbGFzc05hbWU9XCJjb250ZW50X19idXR0b25cIiBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX0+Q29udGludWU8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0eyEoZnVsbF9uYW1lLmlucHV0VmFsaWQgJiYgcGhvbmUuaW5wdXRWYWxpZCAmJiBzdHJlZXQuaW5wdXRWYWxpZCAmJiBjaXR5LmlucHV0VmFsaWQgJiYgY291bnRyeS5pbnB1dFZhbGlkICYmIHppcC5pbnB1dFZhbGlkKSAmJiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJjb250ZW50X19idXR0b25cIiBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX0+Q29udGludWU8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXt0b2dnbGVDbGFzcyA9PT0gMiA/IFwiY29udGVudCBhY3RpdmUtY29udGVudFwiIDogXCJjb250ZW50XCJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3RpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0QmlsbGluZyBJbmZvcm1hdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlQ2xhc3MoMSl9IGNsYXNzTmFtZT1cImNvbnRlbnRfX3JlY2lwaWVudF9saW5rXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTYW1lIGFzIHNoaXBwaW5nXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19yZWNpcGllbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3JlY2lwaWVudF90ZXh0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRCaWxsaW5nIENvbnRhY3RcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzXCI+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7KChiLmlzTmV4dCAmJiBmdWxsX25hbWUuaXNFbXB0eSkgfHwgKGIuaXNOZXh0ICYmIGZ1bGxfbmFtZS5pc01pbkxlbmd0aEVycm9yKSkgJiYgKDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlJz5QbGVhc2UgZW50ZXIgcmVjaXBpZW50IGZ1bGwgbmFtZSBhbmQgbWluIGxlbmd0aCA9IDM8L2Rpdj4pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17KChiLmlzTmV4dCAmJiBmdWxsX25hbWUuaXNFbXB0eSkgfHwgKGIuaXNOZXh0ICYmIGZ1bGxfbmFtZS5pc01pbkxlbmd0aEVycm9yKSkgPyBcImNvbnRlbnRfX2lucHV0c19mdWxsbmFtZSBmb2N1c2VkXCIgOiBcImNvbnRlbnRfX2lucHV0c19mdWxsbmFtZVwifSBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiRnVsbCBOYW1lXCIgdmFsdWU9e2Z1bGxfbmFtZS52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBmdWxsX25hbWUub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IGZ1bGxfbmFtZS5vbkJsdXIoZSl9Lz5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHsoYi5pc05leHQgJiYgZW1haWwuaXNFbWFpbEVycm9yKSAmJiAoPGRpdiBjbGFzc05hbWU9J21lc3NhZ2UnPlBsZWFzZSBlbnRlciBjb3JyZWN0IGVtYWlsPC9kaXY+KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9eygoYi5pc05leHQgJiYgZW1haWwuaXNFbWFpbEVycm9yKSkgPyBcImNvbnRlbnRfX2lucHV0c19lbWFpbCBmb2N1c2VkXCIgOiBcImNvbnRlbnRfX2lucHV0c19lbWFpbFwifSBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3NcIiB2YWx1ZT17ZW1haWwudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gZW1haWwub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IGVtYWlsLm9uQmx1cihlKX0gLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2FkZHJlc3NcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2FkZHJlc3NfdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QmlsbGluZyBBZGRyZXNzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7KChiLmlzTmV4dCAmJiBzdHJlZXQuaXNFbXB0eSkpICYmICg8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZSc+UGxlYXNlIGVudGVyIHJlY2lwaWVudCBzdHJlZXQ8L2Rpdj4pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17KChiLmlzTmV4dCAmJiBzdHJlZXQuaXNFbXB0eSkpID8gXCJjb250ZW50X19pbnB1dHNfc3RyZWV0IGZvY3VzZWRcIiA6IFwiY29udGVudF9faW5wdXRzX3N0cmVldFwifSBuYW1lPVwic3RyZWV0XCIgcGxhY2Vob2xkZXI9XCJTdHJlZXQgQWRkcmVzc1wiIHZhbHVlPXtzdHJlZXQudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gc3RyZWV0Lm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBzdHJlZXQub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfYXB0XCIgcGxhY2Vob2xkZXI9XCJBcHQsIFN1aXRlLCBCbGRnLCBHYXRlIENvZGUuIChvcHRpb25hbClcIiBuYW1lPVwiYXB0XCIgdmFsdWU9e2FwdC52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBhcHQub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IGFwdC5vbkJsdXIoZSl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19pY29uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNpdHlcIiBjbGFzc05hbWU9eygoYi5pc05leHQgJiYgY2l0eS5pc0VtcHR5KSkgPyBcImNvbnRlbnRfX2lucHV0c19jaXR5IGZvY3VzZWRcIiA6IFwiY29udGVudF9faW5wdXRzX2NpdHlcIn0gcGxhY2Vob2xkZXI9XCJDaXR5XCIgdmFsdWU9e2dlb2xvY2F0aW9uLmNpdHkgPyBnZW9sb2NhdGlvbi5jaXR5IDogY2l0eS52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiB7Y2l0eS5vbkNoYW5nZShlKX19IG9uQmx1cj17KGUpID0+IGNpdHkub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyFpc0RldGVjdGVkID8gPEZvbnRBd2Vzb21lSWNvbiBvbkNsaWNrPXtnZXREZXRlY3RlZH0gaWNvbj17ZmFDcm9zc2hhaXJzfSBzdHlsZT17e3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICc0MCUnLCByaWdodDogJzEwcHgnLCBmb250U2l6ZTogJzIwcHgnLCBjdXJzb3I6ICdwb2ludGVyJ319Lz4gOiA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ3Jvc3NoYWlyc30gc3R5bGU9e3twb3NpdGlvbjogJ2Fic29sdXRlJywgb3BhY2l0eTogJzAuNCcsIHRvcDogJzQwJScsIHJpZ2h0OiAnMTBweCcsIGZvbnRTaXplOiAnMjBweCcsIGN1cnNvcjogJ3BvaW50ZXInfX0vPn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2lucHV0c19fcm93XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfX3Jvd19jb3VudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfX3Jvd19jb3VudHJ5XCIgaWQ9XCJlZGl0b3JcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInNlbGVjdFwiIG5hbWU9XCJjb3VudHJ5XCIgcGxhY2Vob2xkZXI9XCJDb3VudHJ5XCIgbGlzdD1cImNpdHluYW1lXCIgdmFsdWU9e2dlb2xvY2F0aW9uLmNvdW50cnkgPyBnZW9sb2NhdGlvbi5jb3VudHJ5IDogY291bnRyeS52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiB7Y291bnRyeS5vbkNoYW5nZShlKX19IG9uQmx1cj17KGUpID0+IGNvdW50cnkub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkYXRhbGlzdCBpZD1cImNpdHluYW1lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlJ1c3NpYVwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiVWtyYWluZVwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiQmVsYXJ1c1wiLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiVVNBXCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJHZXJtYW55XCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJGcmFuY2VcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGF0YWxpc3Q+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9eygoYi5pc05leHQgJiYgemlwLmlzRW1wdHkpKSA/IFwiY29udGVudF9faW5wdXRzX19yb3dfemlwIGZvY3VzZWRcIiA6IFwiY29udGVudF9faW5wdXRzX19yb3dfemlwXCJ9IG5hbWU9XCJ6aXBcIiBwbGFjZWhvbGRlcj1cIlpJUFwiIHZhbHVlPXtnZW9sb2NhdGlvbi56aXAgPyBnZW9sb2NhdGlvbi56aXAgOiB6aXAudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4ge3ppcC5vbkNoYW5nZShlKX19IG9uQmx1cj17KGUpID0+IHppcC5vbkJsdXIoZSl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHsoZnVsbF9uYW1lLmlucHV0VmFsaWQgJiYgIHN0cmVldC5pbnB1dFZhbGlkICYmIGNpdHkuaW5wdXRWYWxpZCAmJiBjb3VudHJ5LmlucHV0VmFsaWQgJiYgemlwLmlucHV0VmFsaWQpICYmIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZUNsYXNzKDMpfSBjbGFzc05hbWU9XCJjb250ZW50X19idXR0b25cIiBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX0+Q29udGludWU8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0eyEoZnVsbF9uYW1lLmlucHV0VmFsaWQgICYmIHN0cmVldC5pbnB1dFZhbGlkICYmIGNpdHkuaW5wdXRWYWxpZCAmJiBjb3VudHJ5LmlucHV0VmFsaWQgJiYgemlwLmlucHV0VmFsaWQpICYmIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImNvbnRlbnRfX2J1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcid9fT5Db250aW51ZTwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3RvZ2dsZUNsYXNzID09PSAzID8gXCJjb250ZW50IGFjdGl2ZS1jb250ZW50XCIgOiBcImNvbnRlbnRcIn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fdGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRQYXltZW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3NzbFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fc3NsX2xvZ29cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPScuLi8uLi9sb2NrLnBuZycgYWx0PVwiXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3NzbF90ZXh0XCI+VGhpcyBpcyBhIHNlY3VyZSAxMjgtYml0IFNTTCBlbmNyeXB0ZWQgcGF5bWVudDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19yZWNpcGllbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX3JlY2lwaWVudF90ZXh0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRDYXJkaG9sZGVyIE5hbWVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHsoKGIuaXNOZXh0ICYmIGZ1bGxfbmFtZS5pc0VtcHR5KSB8fCAoYi5pc05leHQgJiYgZnVsbF9uYW1lLmlzTWluTGVuZ3RoRXJyb3IpKSAmJiAoPGRpdiBjbGFzc05hbWU9J21lc3NhZ2UnPlBsZWFzZSBlbnRlciByZWNpcGllbnQgZnVsbCBuYW1lIGFuZCBtaW4gbGVuZ3RoID0gMzwvZGl2Pil9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXsoKGIuaXNOZXh0ICYmIGZ1bGxfbmFtZS5pc0VtcHR5KSB8fCAoYi5pc05leHQgJiYgZnVsbF9uYW1lLmlzTWluTGVuZ3RoRXJyb3IpKSA/IFwiY29udGVudF9faW5wdXRzX2Z1bGxuYW1lIGZvY3VzZWRcIiA6IFwiY29udGVudF9faW5wdXRzX2Z1bGxuYW1lXCJ9IG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOYW1lIGFzIGl0IGFwcGVhcnMgb24geW91ciBjYXJkXCIgdmFsdWU9e2Z1bGxfbmFtZS52YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBmdWxsX25hbWUub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IGZ1bGxfbmFtZS5vbkJsdXIoZSl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2FkZHJlc3NcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2FkZHJlc3NfdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Q2FyZCBOdW1iZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9faW5wdXRzIGlucHV0X2NhcmRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRNYXNrIG1hc2s9XCI5OTk5IDk5OTkgOTk5OSA5OTk5XCIgbmFtZT1cImNhcmRfbnVtYmVyXCIgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjb250ZW50X19pbnB1dHNfY2FyZFwiIHBsYWNlaG9sZGVyPVwiWFhYWCBYWFhYIFhYWFggWFhYWCBYWFhYXCIgdmFsdWU9e2NhcmRfbnVtYmVyLnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IGNhcmRfbnVtYmVyLm9uQ2hhbmdlKGUpfSBvbkJsdXI9eyhlKSA9PiBjYXJkX251bWJlci5vbkJsdXIoZSl9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17Y2FyZFR5cGV9IGFsdD1cIlwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19jYXJkc19faW5mb1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fY2FyZHNfX2luZm9fX2V4cGlyZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19jYXJkc19pbmZvX19leHBpcmVfdGV4dFwiPkV4cGlyZSBEYXRlPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRNYXNrIG1hc2s9XCI5OSAvIDk5XCIgcGxhY2Vob2xkZXI9XCJNTSAvIFlZXCIgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjb250ZW50X19jYXJkc19pbmZvX19leHBpcmVfaW5wdXRcIiBuYW1lPVwiZXhwaXJlX2RhdGVcIiB2YWx1ZT17ZXhwaXJlX2RhdGUudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gZXhwaXJlX2RhdGUub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IGV4cGlyZV9kYXRlLm9uQmx1cihlKX0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fY2FyZHNfX2luZm9fX3NlY3VyaXR5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2NhcmRzX2luZm9fX3NlY3VyaXR5X3RleHRcIj5TZWN1cml0eSBDb2RlPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRNYXNrIG1hc2s9XCI5OTlcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWFhYXCIgY2xhc3NOYW1lPVwiY29udGVudF9fY2FyZHNfaW5mb19fc2VjdXJpdHlfaW5wdXRcIiBuYW1lPVwic2VjdXJpdHlfY29kZVwiIHZhbHVlPXtzZWN1cml0eV9jb2RlLnZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHNlY3VyaXR5X2NvZGUub25DaGFuZ2UoZSl9IG9uQmx1cj17KGUpID0+IHNlY3VyaXR5X2NvZGUub25CbHVyKGUpfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7KGZ1bGxfbmFtZS5pbnB1dFZhbGlkICYmIHN0cmVldC5pbnB1dFZhbGlkICYmIGNpdHkuaW5wdXRWYWxpZCAmJiBjb3VudHJ5LmlucHV0VmFsaWQgJiYgemlwLmlucHV0VmFsaWQgJiYgY2FyZF9udW1iZXIuaW5wdXRWYWxpZCAmJiBzZWN1cml0eV9jb2RlLmlucHV0VmFsaWQgJiYgZXhwaXJlX2RhdGUuaW5wdXRWYWxpZCkgJiYgXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiY29udGVudF9fYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFBheSBTZWN1cmVseVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7IShmdWxsX25hbWUuaW5wdXRWYWxpZCAgJiYgc3RyZWV0LmlucHV0VmFsaWQgJiYgY2l0eS5pbnB1dFZhbGlkICYmIGNvdW50cnkuaW5wdXRWYWxpZCAmJiB6aXAuaW5wdXRWYWxpZCAmJiBjYXJkX251bWJlci5pbnB1dFZhbGlkICYmIHNlY3VyaXR5X2NvZGUuaW5wdXRWYWxpZCAmJiBleHBpcmVfZGF0ZS5pbnB1dFZhbGlkKSAmJiBcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImNvbnRlbnRfX2J1dHRvbiBkaXNhYmxlZFwiIGRpc2FibGVkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFBheSBTZWN1cmVseVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsICB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgdXNlR2VvbG9jYXRpb24gPSAoaXNEZXRlY3RlZCA6IGJvb2xlYW4pID0+IHtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGlzRGV0ZWN0ZWQpXHJcblx0XHRpZiAoaXNEZXRlY3RlZCkge1xyXG5cdFx0XHRuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcblx0XHR9XHRcclxuXHR9LCBbaXNEZXRlY3RlZF0pXHJcblxyXG5cdGNvbnN0IFtjaXR5LCBzZXRDaXR5XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cdGNvbnN0IFtjb3VudHJ5LCBzZXRDb3VudHJ5XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cdGNvbnN0IFt6aXAsIHNldFppcF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuXHJcblx0Y29uc3Qgc3VjY2Vzc0NhbGxiYWNrID0gYXN5bmMgKCk6IFByb21pc2U8YW55PiA9PiB7XHJcblx0XHRhd2FpdCBmZXRjaCgnaHR0cHM6Ly9pcGFwaS5jby9qc29uLycpXHJcbiAgXHRcdFx0LnRoZW4oZCA9PiBkLmpzb24oKSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRzZXRDaXR5KHJlcy5jaXR5KTtcclxuXHRcdFx0XHRzZXRDb3VudHJ5KHJlcy5jb3VudHJ5X25hbWUpO1xyXG5cdFx0XHRcdHNldFppcChyZXMucG9zdGFsKTtcclxuXHRcdFx0fSlcclxuXHQgIH1cclxuXHJcblx0ICBjb25zdCBlcnJvckNhbGxiYWNrID0gKGVycm9yOiBhbnkpOiB2b2lkID0+IHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcblx0ICB9XHJcblxyXG5cdCAgcmV0dXJuIHtcclxuXHRcdGNpdHksXHJcblx0XHRjb3VudHJ5LFxyXG5cdFx0emlwXHJcblx0fVxyXG5cdFxyXG5cdFx0XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHVzZUlkZW50aWZpY2F0aW9uQ2FyZCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIFxyXG57XHJcbiAgICAvLyB2aXNhXHJcbiAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiXjRcIik7XHJcbiAgICBpZiAodmFsdWUubWF0Y2gocmVnZXgpICE9IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIFwiLy4uLy4uL3Zpc2EucG5nXCI7XHJcblxyXG4gICAgLy8gTWFzdGVyY2FyZCBcclxuICAgIC8vIFVwZGF0ZWQgZm9yIE1hc3RlcmNhcmQgMjAxNyBCSU5zIGV4cGFuc2lvblxyXG4gICAgIGlmICgvXig1WzEtNV1bMC05XXsxNH18MigyMlsxLTldWzAtOV17MTJ9fDJbMy05XVswLTldezEzfXxbMy02XVswLTldezE0fXw3WzAtMV1bMC05XXsxM318NzIwWzAtOV17MTJ9KSkkLy50ZXN0KHZhbHVlKSkgXHJcbiAgICAgICAgcmV0dXJuIFwiTWFzdGVyY2FyZFwiO1xyXG5cclxuICAgIC8vIC8vIEFNRVhcclxuICAgIC8vIHJlID0gbmV3IFJlZ0V4cChcIl4zWzQ3XVwiKTtcclxuICAgIC8vIGlmIChudW1iZXIubWF0Y2gocmUpICE9IG51bGwpXHJcbiAgICAvLyAgICAgcmV0dXJuIFwiQU1FWFwiO1xyXG5cclxuICAgIC8vIC8vIERpc2NvdmVyXHJcbiAgICAvLyByZSA9IG5ldyBSZWdFeHAoXCJeKDYwMTF8NjIyKDEyWzYtOV18MVszLTldWzAtOV18WzItOF1bMC05XXsyfXw5WzAtMV1bMC05XXw5MlswLTVdfDY0WzQtOV0pfDY1KVwiKTtcclxuICAgIC8vIGlmIChudW1iZXIubWF0Y2gocmUpICE9IG51bGwpXHJcbiAgICAvLyAgICAgcmV0dXJuIFwiRGlzY292ZXJcIjtcclxuXHJcbiAgICAvLyAvLyBEaW5lcnNcclxuICAgIC8vIHJlID0gbmV3IFJlZ0V4cChcIl4zNlwiKTtcclxuICAgIC8vIGlmIChudW1iZXIubWF0Y2gocmUpICE9IG51bGwpXHJcbiAgICAvLyAgICAgcmV0dXJuIFwiRGluZXJzXCI7XHJcblxyXG4gICAgLy8gLy8gRGluZXJzIC0gQ2FydGUgQmxhbmNoZVxyXG4gICAgLy8gcmUgPSBuZXcgUmVnRXhwKFwiXjMwWzAtNV1cIik7XHJcbiAgICAvLyBpZiAobnVtYmVyLm1hdGNoKHJlKSAhPSBudWxsKVxyXG4gICAgLy8gICAgIHJldHVybiBcIkRpbmVycyAtIENhcnRlIEJsYW5jaGVcIjtcclxuXHJcbiAgICAvLyAvLyBKQ0JcclxuICAgIC8vIHJlID0gbmV3IFJlZ0V4cChcIl4zNSgyWzg5XXxbMy04XVswLTldKVwiKTtcclxuICAgIC8vIGlmIChudW1iZXIubWF0Y2gocmUpICE9IG51bGwpXHJcbiAgICAvLyAgICAgcmV0dXJuIFwiSkNCXCI7XHJcblxyXG4gICAgLy8gLy8gVmlzYSBFbGVjdHJvblxyXG4gICAgLy8gcmUgPSBuZXcgUmVnRXhwKFwiXig0MDI2fDQxNzUwMHw0NTA4fDQ4NDR8NDkxKDN8NykpXCIpO1xyXG4gICAgLy8gaWYgKG51bWJlci5tYXRjaChyZSkgIT0gbnVsbClcclxuICAgIC8vICAgICByZXR1cm4gXCJWaXNhIEVsZWN0cm9uXCI7XHJcblxyXG4gICAgcmV0dXJuIFwibnVsbFwiO1xyXG59IiwiaW1wb3J0IFJlYWN0LCB7Rm9ybUV2ZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVZhbGlkYXRpb24gfSBmcm9tICcuL3VzZVZhbGlkYXRpb24nO1xyXG5cclxuaW50ZXJmYWNlIEdlb2xvY2F0aW9uT2JqZWN0IHtcclxuXHRjaXR5OiBzdHJpbmcsXHJcblx0Y291bnRyeTogc3RyaW5nLFxyXG5cdHppcDogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VJbnB1dCA9IChpbml0aWFsVmFsdWU6IHN0cmluZywgdmFsaWRhdGlvbnM6IE9iamVjdCwgZ2VvbG9jYXRpb24/OiBHZW9sb2NhdGlvbk9iamVjdCwgdHlwZT86IHN0cmluZykgPT4ge1xyXG5cclxuXHRjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oaW5pdGlhbFZhbHVlKTtcclxuXHRjb25zdCBbaXNEaXJ0eSwgc2V0SXNEaXJ0eV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblx0Y29uc3QgW2lzTmV4dCwgc2V0SXNOZXh0XSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG5cdGNvbnN0IHZhbGlkID0gdXNlVmFsaWRhdGlvbih2YWx1ZSwgdmFsaWRhdGlvbnMpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKGdlb2xvY2F0aW9uICYmIGdlb2xvY2F0aW9uLmNpdHkgJiYgdHlwZSA9PT0gJ2NpdHknKSB7XHJcblx0XHRcdHNldFZhbHVlKGdlb2xvY2F0aW9uLmNpdHkpXHJcblx0XHR9XHJcblx0XHRpZiAoZ2VvbG9jYXRpb24gJiYgZ2VvbG9jYXRpb24uY291bnRyeSAmJiB0eXBlID09PSAnY291bnRyeScpIHtcclxuXHRcdFx0c2V0VmFsdWUoZ2VvbG9jYXRpb24uY291bnRyeSlcclxuXHRcdH1cclxuXHRcdGlmIChnZW9sb2NhdGlvbiAmJiBnZW9sb2NhdGlvbi56aXAgJiYgdHlwZSA9PT0gJ3ppcCcpIHtcclxuXHRcdFx0c2V0VmFsdWUoZ2VvbG9jYXRpb24uemlwKVxyXG5cdFx0fVxyXG5cdH0sIFtnZW9sb2NhdGlvbl0pXHJcblxyXG5cdGNvbnN0IG9uQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MU2VsZWN0RWxlbWVudD4pOiB2b2lkID0+IHtcclxuXHRcdHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG9uQmx1ciA9IChlOiBSZWFjdC5Gb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MU2VsZWN0RWxlbWVudD4pOiB2b2lkID0+IHtcclxuXHRcdHNldElzRGlydHkodHJ1ZSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBvbkNsaWNrID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pOiB2b2lkID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHNldElzTmV4dCh0cnVlKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHR2YWx1ZSxcclxuXHRcdGlzTmV4dCxcclxuXHRcdG9uQ2xpY2ssXHJcblx0XHRvbkNoYW5nZSxcclxuXHRcdG9uQmx1cixcclxuXHRcdGlzRGlydHksXHJcblx0XHQuLi52YWxpZFxyXG5cdH1cclxufSIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VWYWxpZGF0aW9uID0gKHZhbHVlOiBzdHJpbmcsIHZhbGlkYXRpb25zOiBPYmplY3QpID0+IHtcclxuXHJcblx0Y29uc3QgW2lzRW1wdHksIHNldElzRW1wdHldID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcblx0Y29uc3QgW2lzRW1haWxFcnJvciwgc2V0SXNFbWFpbEVycm9yXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHRjb25zdCBbaXNNaW5MZW5ndGhFcnJvciwgc2V0SXNNaW5MZW5ndGhFcnJvcl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblx0Y29uc3QgW2lucHV0VmFsaWQsIHNldElucHV0VmFsaWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Zm9yIChjb25zdCB2YWxpZGF0aW9uIGluIHZhbGlkYXRpb25zKSB7XHJcblx0XHRcdHN3aXRjaCAodmFsaWRhdGlvbikge1xyXG5cdFx0XHRcdGNhc2UgJ21pbkxlbmd0aCc6XHJcblx0XHRcdFx0XHR2YWx1ZS5sZW5ndGggPCB2YWxpZGF0aW9uc1t2YWxpZGF0aW9uXSA/IHNldElzTWluTGVuZ3RoRXJyb3IodHJ1ZSkgOiBzZXRJc01pbkxlbmd0aEVycm9yKGZhbHNlKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ2lzRW1wdHknOlxyXG5cdFx0XHRcdFx0dmFsdWUgPyBzZXRJc0VtcHR5KGZhbHNlKSA6IHNldElzRW1wdHkodHJ1ZSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICdpc1Bob25lJzpcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ2lzRW1haWwnOlxyXG5cdFx0XHRcdFx0Y29uc3QgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcbiAgICBcdFx0XHRcdChyZS50ZXN0KFN0cmluZyh2YWx1ZSkudG9Mb3dlckNhc2UoKSkpID8gc2V0SXNFbWFpbEVycm9yKGZhbHNlKSA6IHNldElzRW1haWxFcnJvcih0cnVlKVxyXG5cdFx0XHRcdFx0YnJlYWtcclxuXHRcdFx0fVx0XHJcblx0XHR9XHJcblx0fSwgW3ZhbHVlXSlcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmIChpc01pbkxlbmd0aEVycm9yIHx8IGlzRW1wdHkgfHwgaXNFbWFpbEVycm9yKSB7XHJcblx0XHRcdHNldElucHV0VmFsaWQoZmFsc2UpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHNldElucHV0VmFsaWQodHJ1ZSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9LCBbaXNFbXB0eSwgaXNNaW5MZW5ndGhFcnJvciwgaXNFbWFpbEVycm9yXSlcclxuXHJcblx0XHJcblx0XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRpc0VtcHR5LFxyXG5cdFx0aXNNaW5MZW5ndGhFcnJvcixcclxuXHRcdGlucHV0VmFsaWQsXHJcblx0XHRpc0VtYWlsRXJyb3JcclxuXHR9XHJcbn0iLCJpbXBvcnQge2dxbH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENSRUFURV9PUkRFUiA9IGdxbCBgXHJcblxyXG5cdG11dGF0aW9uIGNyZWF0ZU9yZGVyKCRpbnB1dDogT3JkZXJJbnB1dCkge1xyXG5cdFx0Y3JlYXRlT3JkZXIoaW5wdXQ6ICRpbnB1dCkge1xyXG5cdFx0XHRpZCwgZnVsbF9uYW1lLCBlbWFpbCwgY2l0eSwgcGhvbmVcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcbmAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9pbmRleC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlclwiO1xyXG5pbXBvcnQgTWFpbiBmcm9tIFwiLi4vY29tcG9uZW50cy9NYWluXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyL0hlYWRlclwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBJbmRleDogUmVhY3QuRkMgPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcblx0XHRcdDxIZWFkZXI+PC9IZWFkZXI+XHJcblx0XHRcdDxNYWluPjwvTWFpbj5cclxuXHRcdFx0PEZvb3Rlcj48L0Zvb3Rlcj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiIsImltcG9ydCB7Z3FsfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfT1JERVJfQllfSUQgPSBncWwgYFxyXG5cclxuXHRxdWVyeSBnZXRPcmRlckJ5SWQoJG9yZGVyOiBJRCEpIHtcclxuXHRcdFx0Z2V0T3JkZXJCeUlkKGlkOiAkb3JkZXIpIHtcclxuXHRcdFx0XHRpZCwgZnVsbF9uYW1lLCBlbWFpbFxyXG5cdFx0XHR9XHJcblx0fVxyXG5cdFxyXG5gIiwiaW1wb3J0IHtncWx9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfQUxMX1BST0RVQ1RTID0gZ3FsIGBcclxuXHJcblx0cXVlcnkge1xyXG5cdFx0Z2V0QWxsUHJvZHVjdHMge1xyXG5cdFx0XHRpZCwgbmFtZSwgZGVzY3JpcHRpb24sIHByaWNlXHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5gIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcblxyXG5jb25zdCBzZW50Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7IFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlbnRDb250ZXh0O1xyXG5cclxuXHJcblxyXG5cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9vdGVyXCI6IFwiRm9vdGVyX2Zvb3Rlcl9fMUtXMTdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyYXBwZXJcIjogXCJIZWFkZXJfd3JhcHBlcl9fSlJnSkFcIixcblx0XCJfY29udGFpbmVyXCI6IFwiSGVhZGVyX19jb250YWluZXJfXzNFaVUtXCIsXG5cdFwiaGVhZGVyXCI6IFwiSGVhZGVyX2hlYWRlcl9fMi1YV1hcIixcblx0XCJoZWFkZXJfX2NvbnRhaW5lclwiOiBcIkhlYWRlcl9oZWFkZXJfX2NvbnRhaW5lcl9fNC1YSklcIixcblx0XCJoZWFkZXJfX2xvZ29cIjogXCJIZWFkZXJfaGVhZGVyX19sb2dvX19FMXlsMVwiLFxuXHRcImhlYWRlcl9fbG9nb19pY29uXCI6IFwiSGVhZGVyX2hlYWRlcl9fbG9nb19pY29uX18yMFV0SlwiLFxuXHRcImhlYWRlcl9fbG9nb19pY29uX19pbWdcIjogXCJIZWFkZXJfaGVhZGVyX19sb2dvX2ljb25fX2ltZ19fSExPSEJcIixcblx0XCJoZWFkZXJfX2xvZ29fdGV4dFwiOiBcIkhlYWRlcl9oZWFkZXJfX2xvZ29fdGV4dF9fM1N1M2FcIixcblx0XCJoZWFkZXJfX2J1c2tldFwiOiBcIkhlYWRlcl9oZWFkZXJfX2J1c2tldF9fMm1uOFFcIixcblx0XCJoZWFkZXJfX2J1c2tldF90ZXh0XCI6IFwiSGVhZGVyX2hlYWRlcl9fYnVza2V0X3RleHRfXzF5MnFIXCIsXG5cdFwiaGVhZGVyX19idXNrZXRfaWNvblwiOiBcIkhlYWRlcl9oZWFkZXJfX2J1c2tldF9pY29uX19MaXhCWVwiLFxuXHRcImhlYWRlcl9fYnVza2V0X2NvdW50XCI6IFwiSGVhZGVyX2hlYWRlcl9fYnVza2V0X2NvdW50X19QbXIyNlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid3JhcHBlclwiOiBcIk1haW5fd3JhcHBlcl9fMm5KbG1cIixcblx0XCJfY29udGFpbmVyXCI6IFwiTWFpbl9fY29udGFpbmVyX18zb1E2M1wiLFxuXHRcInBhZ2VcIjogXCJNYWluX3BhZ2VfXzFhQVZVXCIsXG5cdFwicGFnZV9fbWFpblwiOiBcIk1haW5fcGFnZV9fbWFpbl9fQXJ4XzhcIixcblx0XCJtYWluXCI6IFwiTWFpbl9tYWluX182RFBpRFwiLFxuXHRcIm1haW5fX2JvZHlcIjogXCJNYWluX21haW5fX2JvZHlfXzJXMDZpXCIsXG5cdFwibWFpbl9fYm9keV9fY29udGFpbmVyXCI6IFwiTWFpbl9tYWluX19ib2R5X19jb250YWluZXJfX2ZCV2JKXCIsXG5cdFwibWFpbl9fZm9ybVwiOiBcIk1haW5fbWFpbl9fZm9ybV9fMXlPTWVcIixcblx0XCJtYWluX19mb3JtX190YWJzXCI6IFwiTWFpbl9tYWluX19mb3JtX190YWJzX18zczZGZFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid3JhcHBlclwiOiBcIk9yZGVyX3dyYXBwZXJfX084WHBoXCIsXG5cdFwiX2NvbnRhaW5lclwiOiBcIk9yZGVyX19jb250YWluZXJfX1RmcTdVXCIsXG5cdFwib3JkZXJcIjogXCJPcmRlcl9vcmRlcl9fNnZ1UC1cIixcblx0XCJvcmRlcl9fdGl0bGVcIjogXCJPcmRlcl9vcmRlcl9fdGl0bGVfX2RlY2N3XCIsXG5cdFwib3JkZXJfX251bWJlclwiOiBcIk9yZGVyX29yZGVyX19udW1iZXJfXzFXV240XCIsXG5cdFwib3JkZXJfX3RleHRcIjogXCJPcmRlcl9vcmRlcl9fdGV4dF9fMWVzNnhcIixcblx0XCJvcmRlcl9fZXN0aW1hdGVkXCI6IFwiT3JkZXJfb3JkZXJfX2VzdGltYXRlZF9fZzUwZy1cIixcblx0XCJvcmRlcl9fcHJpbnRfcmVjaXBlXCI6IFwiT3JkZXJfb3JkZXJfX3ByaW50X3JlY2lwZV9fM1RqZmNcIixcblx0XCJib2xkXCI6IFwiT3JkZXJfYm9sZF9fRF85T2lcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyYXBwZXJcIjogXCJQcm9kdWN0c193cmFwcGVyX18xbkkzQ1wiLFxuXHRcIl9jb250YWluZXJcIjogXCJQcm9kdWN0c19fY29udGFpbmVyX18xSEktYVwiLFxuXHRcIm1haW5fX3Byb2R1Y3RzXCI6IFwiUHJvZHVjdHNfbWFpbl9fcHJvZHVjdHNfX3RKQ1kyXCIsXG5cdFwicHJvZHVjdHNcIjogXCJQcm9kdWN0c19wcm9kdWN0c19fMkh2R1NcIixcblx0XCJwcm9kdWN0c19fdGV4dFwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RzX190ZXh0X19vREVRNVwiLFxuXHRcInByb2R1Y3RzX190ZXh0X3RpdGxlXCI6IFwiUHJvZHVjdHNfcHJvZHVjdHNfX3RleHRfdGl0bGVfXzJlMVlUXCIsXG5cdFwicHJvZHVjdHNfX3RleHRfZWRpdFwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RzX190ZXh0X2VkaXRfXzFuVjZqXCIsXG5cdFwicHJvZHVjdHNfX3Byb2R1Y3RcIjogXCJQcm9kdWN0c19wcm9kdWN0c19fcHJvZHVjdF9fMk5GVlpcIixcblx0XCJwcm9kdWN0c19fY29zdFwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RzX19jb3N0X18xMEpWc1wiLFxuXHRcInByb2R1Y3RzX19pbmZvcm1hdGlvblwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RzX19pbmZvcm1hdGlvbl9fM3haRUJcIixcblx0XCJwcm9kdWN0XCI6IFwiUHJvZHVjdHNfcHJvZHVjdF9fRUhVeU1cIixcblx0XCJwcm9kdWN0X19pbWFnZVwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RfX2ltYWdlX18xQ2haTlwiLFxuXHRcInByb2R1Y3RfX2NvbnRlbnRcIjogXCJQcm9kdWN0c19wcm9kdWN0X19jb250ZW50X18zcHhSVVwiLFxuXHRcInByb2R1Y3RfX2NvbnRlbnRfbmFtZVwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RfX2NvbnRlbnRfbmFtZV9fM1d2Y2VcIixcblx0XCJwcm9kdWN0X19jb250ZW50X2Rlc2NyaXB0aW9uXCI6IFwiUHJvZHVjdHNfcHJvZHVjdF9fY29udGVudF9kZXNjcmlwdGlvbl9fMkNqclJcIixcblx0XCJwcm9kdWN0X19jb250ZW50X3F1YW50aXR5XCI6IFwiUHJvZHVjdHNfcHJvZHVjdF9fY29udGVudF9xdWFudGl0eV9fcUJYSVFcIixcblx0XCJwcm9kdWN0X19wcmljZVwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RfX3ByaWNlX18yTjZjMFwiLFxuXHRcImNvc3RfX3N1YnRvdGFsXCI6IFwiUHJvZHVjdHNfY29zdF9fc3VidG90YWxfX0ZWZEdPXCIsXG5cdFwiY29zdF9fc2hpcHBpbmdcIjogXCJQcm9kdWN0c19jb3N0X19zaGlwcGluZ19fdWRiVWZcIixcblx0XCJjb3N0X190YXhlc1wiOiBcIlByb2R1Y3RzX2Nvc3RfX3RheGVzX19fOERLM1wiLFxuXHRcImNvc3RfX3RvdGFsXCI6IFwiUHJvZHVjdHNfY29zdF9fdG90YWxfXzFLTlNIXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwic3R5bGVzX3dyYXBwZXJfXzFDcFJPXCIsXG5cdFwiX2NvbnRhaW5lclwiOiBcInN0eWxlc19fY29udGFpbmVyX18xaHhFMlwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbWFpbGpzLWNvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcXVlcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW5wdXQtbWFza1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiRm9vdGVyIiwiZm9vdGVyIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJvZHVjdHMiLCJUYWJzIiwic2VudENvbnRleHQiLCJlbWFpbGpzIiwiT3JkZXIiLCJ1c2VNdXRhdGlvbiIsIkNSRUFURV9PUkRFUiIsIk1haW4iLCJzdGF0ZSIsInNldFN0YXRlIiwibmV3T3JkZXIiLCJvcmRlciIsInNldE9yZGVyIiwic2V0VGltZW91dCIsInNlbmRFbWFpbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZnVsbF9uYW1lIiwicXVlcnlTZWxlY3RvciIsImVtYWlsIiwicGhvbmUiLCJzdHJlZXQiLCJhcHQiLCJjaXR5IiwiY291bnRyeSIsInppcCIsImNhcmRfbnVtYmVyIiwiZXhwaXJlX2RhdGUiLCJzZWN1cml0eV9jb2RlIiwidmFyaWFibGVzIiwiaW5wdXQiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVPcmRlciIsImlkIiwic2VuZEZvcm0iLCJ0YXJnZXQiLCJyZXN1bHQiLCJ0ZXh0IiwiZXJyb3IiLCJyZXNldCIsInBhZ2UiLCJwYWdlX19tYWluIiwibWFpbiIsIm1haW5fX2NvbnRhaW5lciIsIl9jb250YWluZXIiLCJtYWluX19ib2R5IiwibWFpbl9fYm9keV9fY29udGFpbmVyIiwibWFpbl9fZm9ybSIsInVzZVF1ZXJ5IiwiR0VUX0FMTF9QUk9EVUNUUyIsIkhlYWRlciIsInNlbGVjdGVkUHJvZHVjdHMiLCJzZXRTZWxlY3RlZFByb2R1Y3RzIiwibG9hZGluZyIsInJlZmV0Y2giLCJwb2xsSW50ZXJ2YWwiLCJnZXRBbGxQcm9kdWN0cyIsImhlYWRlciIsImhlYWRlcl9fY29udGFpbmVyIiwiaGVhZGVyX19sb2dvIiwiaGVhZGVyX19sb2dvX2ljb24iLCJoZWFkZXJfX2xvZ29fdGV4dCIsImhlYWRlcl9fYnVza2V0IiwiaGVhZGVyX19idXNrZXRfdGV4dCIsImhlYWRlcl9fYnVza2V0X2ljb24iLCJoZWFkZXJfX2J1c2tldF9jb3VudCIsImxlbmd0aCIsIm1haW5fX3Byb2R1Y3RzIiwicHJvZHVjdHNfX3RleHQiLCJwcm9kdWN0c19fdGV4dF90aXRsZSIsInByb2R1Y3RzX190ZXh0X2VkaXQiLCJwcm9kdWN0c19faXRlbXMiLCJtYXAiLCJwcm9kdWN0IiwicHJvZHVjdHNfX3Byb2R1Y3QiLCJwcm9kdWN0X19pbWFnZSIsInByb2R1Y3RfX2NvbnRlbnQiLCJwcm9kdWN0X19jb250ZW50X25hbWUiLCJuYW1lIiwicHJvZHVjdF9fY29udGVudF9kZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwicHJvZHVjdF9fY29udGVudF9xdWFudGl0eSIsInByb2R1Y3RfX3ByaWNlIiwicHJpY2UiLCJwcm9kdWN0c19fY29zdCIsImNvc3RfX3N1YnRvdGFsIiwic3VidG90YWxfX3RleHQiLCJzdWJ0b3RhbF9fY291bnQiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJjb3N0X19zaGlwcGluZyIsInNoaXBwaW5nX190ZXh0Iiwic2hpcHBpbmdfX2NvdW50IiwiY29zdF9fdGF4ZXMiLCJ0YXhlc19fdGV4dCIsInRheGVzX19jb3VudCIsImNvc3RfX3RvdGFsIiwidG90YWxfX3RleHQiLCJ0b3RhbF9fY291bnQiLCJwcm9kdWN0c19faW5mb3JtYXRpb24iLCJHRVRfT1JERVJfQllfSUQiLCJzZWxlY3RlZE9yZGVyIiwic2V0U2VsZWN0ZWRPcmRlciIsImdldE9yZGVyQnlJZCIsInByaW50UmVjaXBlIiwid2luZG93IiwicHJpbnQiLCJvcmRlcl9fdGl0bGUiLCJvcmRlcl9fbnVtYmVyIiwib3JkZXJfX3RleHQiLCJvcmRlcl9fZXN0aW1hdGVkIiwiYm9sZCIsIm9yZGVyX19wcmludF9yZWNpcGUiLCJ1c2VHZW9sb2NhdGlvbiIsInVzZUlkZW50aWZpY2F0aW9uQ2FyZCIsInVzZUlucHV0IiwiSW5wdXRNYXNrIiwiZmFDcm9zc2hhaXJzIiwiRm9udEF3ZXNvbWVJY29uIiwiJCIsInRvZ2dsZUNsYXNzIiwic2V0VG9nZ2xlQ2xhc3MiLCJjYXJkVHlwZSIsInNldENhcmRUeXBlIiwiaXNEZXRlY3RlZCIsInNldElzRGV0ZWN0ZWQiLCJnZW9sb2NhdGlvbiIsImlzRW1wdHkiLCJtaW5MZW5ndGgiLCJiIiwiaXNFbWFpbCIsImZvY3VzIiwicmVtb3ZlQ2xhc3MiLCJibHVyIiwiZ2V0RGV0ZWN0ZWQiLCJ2YWx1ZSIsImlzTmV4dCIsImlzTWluTGVuZ3RoRXJyb3IiLCJvbkNoYW5nZSIsIm9uQmx1ciIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJmb250U2l6ZSIsImN1cnNvciIsIm9wYWNpdHkiLCJpbnB1dFZhbGlkIiwiaXNFbWFpbEVycm9yIiwibmF2aWdhdG9yIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwic3VjY2Vzc0NhbGxiYWNrIiwiZXJyb3JDYWxsYmFjayIsInNldENpdHkiLCJzZXRDb3VudHJ5Iiwic2V0WmlwIiwiZmV0Y2giLCJkIiwianNvbiIsInJlcyIsImNvdW50cnlfbmFtZSIsInBvc3RhbCIsInJlZ2V4IiwiUmVnRXhwIiwibWF0Y2giLCJ0ZXN0IiwidXNlVmFsaWRhdGlvbiIsImluaXRpYWxWYWx1ZSIsInZhbGlkYXRpb25zIiwidHlwZSIsInNldFZhbHVlIiwiaXNEaXJ0eSIsInNldElzRGlydHkiLCJzZXRJc05leHQiLCJ2YWxpZCIsIm9uQ2xpY2siLCJzZXRJc0VtcHR5Iiwic2V0SXNFbWFpbEVycm9yIiwic2V0SXNNaW5MZW5ndGhFcnJvciIsInNldElucHV0VmFsaWQiLCJ2YWxpZGF0aW9uIiwicmUiLCJTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsImdxbCIsIkluZGV4Iiwid3JhcHBlciIsImNyZWF0ZUNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9