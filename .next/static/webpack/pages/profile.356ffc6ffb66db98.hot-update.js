"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./components/orderHistory.js":
/*!************************************!*\
  !*** ./components/orderHistory.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/context */ \"./components/context.js\");\n/* harmony import */ var _apolloHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apolloHelper */ \"./components/apolloHelper.js\");\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    query Dishes($USERNAME: String!) {\\n      orders(user: $USERNAME) {\\n        data {\\n          id\\n          attributes {\\n            dishes\\n            user\\n          }\\n        }\\n      }\\n    }\\n  \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nfunction OrderHistory() {\n    var _this = this;\n    _s();\n    var client = (0,_apolloHelper__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    console.log(client);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_context__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), user = ref.user, isAuthenticated = ref.isAuthenticated;\n    var GET_RESTAURANT_DISHES = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql)(_templateObject());\n    var ref1 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(_apolloHelper__WEBPACK_IMPORTED_MODULE_4__[\"default\"], GET_RESTAURANT_DISHES, {\n        variables: {\n            USERNAME: user.username\n        }\n    }), loading = ref1.loading, error = ref1.error, data = ref1.data;\n    if (loading) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/components/orderHistory.js\",\n        lineNumber: 32,\n        columnNumber: 23\n    }, this));\n    if (error) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"ERROR here\"\n    }, void 0, false, {\n        fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/components/orderHistory.js\",\n        lineNumber: 33,\n        columnNumber: 21\n    }, this));\n    if (!data) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Not found\"\n    }, void 0, false, {\n        fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/components/orderHistory.js\",\n        lineNumber: 34,\n        columnNumber: 21\n    }, this));\n    var orders = data.orders.data;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: orders.attributes.dishes.map(function(order) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    order.name,\n                    \" $\",\n                    order.price / 100,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/components/orderHistory.js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/components/orderHistory.js\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/components/orderHistory.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false));\n}\n_s(OrderHistory, \"3PF4HDekKHt9lB1tBo4qh8ryXaY=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery\n    ];\n});\n_c = OrderHistory;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderHistory);\nvar _c;\n$RefreshReg$(_c, \"OrderHistory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL29yZGVySGlzdG9yeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4RDtBQUN2QjtBQUNPO0FBQ0E7QUFDTDs7Ozs7Ozs7Ozs7OztRQU1MLENBWWxDOzs7Ozs7OztTQWhCT1MsWUFBWSxHQUFHLENBQUM7OztJQUN2QixHQUFLLENBQUNDLE1BQU0sR0FBR0YseURBQVk7SUFDM0JHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixNQUFNO0lBQ2xCLEdBQUcsQ0FBNkJQLEdBQXNCLEdBQXRCQSxpREFBVSxDQUFDSSwyREFBVSxHQUEvQ00sSUFBSSxHQUFzQlYsR0FBc0IsQ0FBaERVLElBQUksRUFBRUMsZUFBZSxHQUFLWCxHQUFzQixDQUExQ1csZUFBZTtJQUMzQixHQUFLLENBQUNDLHFCQUFxQixHQUFHVixtREFBRztJQWFqQyxHQUFLLENBQTRCQyxJQU1oQyxHQU5nQ0Esd0RBQVEsQ0FDdkNFLHFEQUFZLEVBQ1pPLHFCQUFxQixFQUNyQixDQUFDO1FBQ0NDLFNBQVMsRUFBRSxDQUFDO1lBQUNDLFFBQVEsRUFBRUosSUFBSSxDQUFDSyxRQUFRO1FBQUMsQ0FBQztJQUN4QyxDQUFDLEdBTEtDLE9BQU8sR0FBa0JiLElBTWhDLENBTk9hLE9BQU8sRUFBRUMsS0FBSyxHQUFXZCxJQU1oQyxDQU5nQmMsS0FBSyxFQUFFQyxJQUFJLEdBQUtmLElBTWhDLENBTnVCZSxJQUFJO0lBUTVCLEVBQUUsRUFBRUYsT0FBTyxFQUFFLE1BQU0sNkVBQUVHLENBQUM7a0JBQUMsQ0FBVTs7Ozs7O0lBQ2pDLEVBQUUsRUFBRUYsS0FBSyxFQUFFLE1BQU0sNkVBQUVFLENBQUM7a0JBQUMsQ0FBVTs7Ozs7O0lBQy9CLEVBQUUsR0FBR0QsSUFBSSxFQUFFLE1BQU0sNkVBQUVDLENBQUM7a0JBQUMsQ0FBUzs7Ozs7O0lBRTlCLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHRixJQUFJLENBQUNFLE1BQU0sQ0FBQ0YsSUFBSTtJQUM3QixNQUFNO2tCQUVERSxNQUFNLENBQUNDLFVBQVUsQ0FBQ0MsTUFBTSxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFQQyxLQUFLOzBCQUNsQyxNQUNSLENBQUMsOERBRFFDLENBQUc7O29CQUNERCxLQUFLLENBQUNFLElBQUk7b0JBQUMsQ0FBRTtvQkFBQ0YsS0FBSyxDQUFDRyxLQUFLLEdBQUcsR0FBRztnR0FDL0JDLENBQUU7Ozs7O2dHQUNGQSxDQUFFOzs7Ozs7Ozs7Ozs7O0FBS2IsQ0FBQztHQXpDUXRCLFlBQVk7O1FBaUJjSCxvREFBUTs7O0tBakJsQ0csWUFBWTtBQTJDckIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL29yZGVySGlzdG9yeS5qcz9iNGE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRleHRcIjtcbmltcG9ydCBBcG9sbG9IZWxwZXIgZnJvbSBcIi4vYXBvbGxvSGVscGVyXCI7XG5cbmZ1bmN0aW9uIE9yZGVySGlzdG9yeSgpIHtcbiAgY29uc3QgY2xpZW50ID0gQXBvbGxvSGVscGVyKCk7XG4gIGNvbnNvbGUubG9nKGNsaWVudCk7XG4gIGxldCB7IHVzZXIsIGlzQXV0aGVudGljYXRlZCB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgY29uc3QgR0VUX1JFU1RBVVJBTlRfRElTSEVTID0gZ3FsYFxuICAgIHF1ZXJ5IERpc2hlcygkVVNFUk5BTUU6IFN0cmluZyEpIHtcbiAgICAgIG9yZGVycyh1c2VyOiAkVVNFUk5BTUUpIHtcbiAgICAgICAgZGF0YSB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBhdHRyaWJ1dGVzIHtcbiAgICAgICAgICAgIGRpc2hlc1xuICAgICAgICAgICAgdXNlclxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYDtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoXG4gICAgQXBvbGxvSGVscGVyLFxuICAgIEdFVF9SRVNUQVVSQU5UX0RJU0hFUyxcbiAgICB7XG4gICAgICB2YXJpYWJsZXM6IHsgVVNFUk5BTUU6IHVzZXIudXNlcm5hbWUgfSxcbiAgICB9XG4gICk7XG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RVJST1IgaGVyZTwvcD47XG4gIGlmICghZGF0YSkgcmV0dXJuIDxwPk5vdCBmb3VuZDwvcD47XG5cbiAgbGV0IG9yZGVycyA9IGRhdGEub3JkZXJzLmRhdGE7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtvcmRlcnMuYXR0cmlidXRlcy5kaXNoZXMubWFwKChvcmRlcikgPT4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtvcmRlci5uYW1lfSAke29yZGVyLnByaWNlIC8gMTAwfVxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBPcmRlckhpc3Rvcnk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJncWwiLCJ1c2VRdWVyeSIsIkFwcENvbnRleHQiLCJBcG9sbG9IZWxwZXIiLCJPcmRlckhpc3RvcnkiLCJjbGllbnQiLCJjb25zb2xlIiwibG9nIiwidXNlciIsImlzQXV0aGVudGljYXRlZCIsIkdFVF9SRVNUQVVSQU5UX0RJU0hFUyIsInZhcmlhYmxlcyIsIlVTRVJOQU1FIiwidXNlcm5hbWUiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwicCIsIm9yZGVycyIsImF0dHJpYnV0ZXMiLCJkaXNoZXMiLCJtYXAiLCJvcmRlciIsImRpdiIsIm5hbWUiLCJwcmljZSIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/orderHistory.js\n");

/***/ })

});