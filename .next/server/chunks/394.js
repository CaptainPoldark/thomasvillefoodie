"use strict";
exports.id = 394;
exports.ids = [394];
exports.modules = {

/***/ 4394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4515);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* /context/AppContext.js */ 

// create auth context with default value
// set backup default for isAuthenticated if none is provided in Provider
const AppContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({
    isAuthenticated: false,
    cart: {
        items: [],
        total: 0
    },
    addItem: ()=>{},
    removeItem: ()=>{},
    emptyCart: ()=>{},
    user: {
        id: Number,
        username: String,
        email: String,
        provider: String,
        confirmed: Boolean,
        blocked: Boolean,
        createdAt: String,
        updatedAt: String
    },
    setUser: ()=>{},
    setRestID: ()=>{},
    restID: {
        ID: Number,
        Name: String
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppContext);


/***/ })

};
;