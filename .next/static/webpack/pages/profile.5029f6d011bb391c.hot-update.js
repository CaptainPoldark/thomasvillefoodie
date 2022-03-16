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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/context */ \"./components/context.js\");\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n{\\n  orders (filters: {user: {eq: \",\n        \"}}){\\n    data {\\n      id\\n      attributes {\\n        dishes\\n        user\\n        amount\\n        charge_id\\n      }\\n    }\\n  }\\n}\\n  \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nfunction OrderHistory() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_context__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), user = ref.user, isAuthenticated = ref.isAuthenticated;\n    var GET_OLD_ORDERS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql)(_templateObject(), JSON.stringify(user.username));\n    var ref1 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(GET_OLD_ORDERS, {}), loading = ref1.loading, error = ref1.error, data = ref1.data;\n    if (loading) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/components/orderHistory.js\",\n        lineNumber: 25,\n        columnNumber: 23\n    }, this));\n    if (error) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"ERROR here\"\n    }, void 0, false, {\n        fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/components/orderHistory.js\",\n        lineNumber: 26,\n        columnNumber: 21\n    }, this));\n    if (!data) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Not found\"\n    }, void 0, false, {\n        fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/components/orderHistory.js\",\n        lineNumber: 27,\n        columnNumber: 21\n    }, this));\n    console.log(data);\n    var orders = data.orders.data;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: orders.map(function(order) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    order.attributes.dishes.map(function(each) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                each.name,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/components/orderHistory.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/components/orderHistory.js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, _this),\n                    \"Quantity: \",\n                    order.attributes.dishes[0].quantity,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/components/orderHistory.js\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, _this),\n                    \"Price: $\",\n                    order.attributes.amount,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/components/orderHistory.js\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, _this),\n                    \"Transaction ID: \",\n                    order.attributes.charge_id,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/components/orderHistory.js\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/components/orderHistory.js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/components/orderHistory.js\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false));\n}\n_s(OrderHistory, \"3PF4HDekKHt9lB1tBo4qh8ryXaY=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery\n    ];\n});\n_c = OrderHistory;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderHistory);\nvar _c;\n$RefreshReg$(_c, \"OrderHistory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL29yZGVySGlzdG9yeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThEO0FBQ3ZCO0FBQ087QUFDQTs7Ozs7Ozs7Ozs7OztRQUlqQixDQUVFO1FBQWdDLENBWTdEOzs7Ozs7OztTQWhCT1EsWUFBWSxHQUFHLENBQUM7OztJQUN2QixHQUFHLENBQTZCTCxHQUFzQixHQUF0QkEsaURBQVUsQ0FBQ0ksMkRBQVUsR0FBL0NFLElBQUksR0FBc0JOLEdBQXNCLENBQWhETSxJQUFJLEVBQUVDLGVBQWUsR0FBS1AsR0FBc0IsQ0FBMUNPLGVBQWU7SUFDM0IsR0FBSyxDQUFDQyxjQUFjLEdBQUdOLG1EQUFHLG9CQUVLTyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0osSUFBSSxDQUFDSyxRQUFRO0lBYTNELEdBQUssQ0FBNEJSLElBQTRCLEdBQTVCQSx3REFBUSxDQUFDSyxjQUFjLEVBQUUsQ0FBQyxDQUFDLEdBQXBESSxPQUFPLEdBQWtCVCxJQUE0QixDQUFyRFMsT0FBTyxFQUFFQyxLQUFLLEdBQVdWLElBQTRCLENBQTVDVSxLQUFLLEVBQUVDLElBQUksR0FBS1gsSUFBNEIsQ0FBckNXLElBQUk7SUFFNUIsRUFBRSxFQUFFRixPQUFPLEVBQUUsTUFBTSw2RUFBRUcsQ0FBQztrQkFBQyxDQUFVOzs7Ozs7SUFDakMsRUFBRSxFQUFFRixLQUFLLEVBQUUsTUFBTSw2RUFBRUUsQ0FBQztrQkFBQyxDQUFVOzs7Ozs7SUFDL0IsRUFBRSxHQUFHRCxJQUFJLEVBQUUsTUFBTSw2RUFBRUMsQ0FBQztrQkFBQyxDQUFTOzs7Ozs7SUFDOUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxJQUFJO0lBRWhCLEdBQUcsQ0FBQ0ksTUFBTSxHQUFHSixJQUFJLENBQUNJLE1BQU0sQ0FBQ0osSUFBSTtJQUU3QixNQUFNO2tCQUVESSxNQUFNLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQVBDLEtBQUs7MEJBQ2hCLE1BQ1IsQ0FBQyw4REFEUUMsQ0FBRzs7b0JBQ0RELEtBQUssQ0FBQ0UsVUFBVSxDQUFDQyxNQUFNLENBQUNKLEdBQUcsQ0FBQyxRQUFRLENBQVBLLElBQUk7c0NBQ2hDLE1BQ1QsQ0FBQzs7Z0NBQVdBLElBQUksQ0FBQ0MsSUFBSTs0R0FDVEMsQ0FBRTs7Ozs7Ozs7Z0dBR05BLENBQUU7Ozs7O29CQUFHLENBQ0k7b0JBQUNOLEtBQUssQ0FBQ0UsVUFBVSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxFQUFFSSxRQUFRO2dHQUM3Q0QsQ0FBRTs7Ozs7b0JBQUcsQ0FDRTtvQkFBQ04sS0FBSyxDQUFDRSxVQUFVLENBQUNNLE1BQU07Z0dBQy9CRixDQUFFOzs7OztvQkFBRyxDQUNVO29CQUFDTixLQUFLLENBQUNFLFVBQVUsQ0FBQ08sU0FBUztnR0FDMUNILENBQUU7Ozs7O2dHQUNGQSxDQUFFOzs7Ozs7Ozs7Ozs7O0FBS2IsQ0FBQztHQWhEUXJCLFlBQVk7O1FBaUJjRixvREFBUTs7O0tBakJsQ0UsWUFBWTtBQWtEckIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL29yZGVySGlzdG9yeS5qcz9iNGE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRleHRcIjtcblxuZnVuY3Rpb24gT3JkZXJIaXN0b3J5KCkge1xuICBsZXQgeyB1c2VyLCBpc0F1dGhlbnRpY2F0ZWQgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIGNvbnN0IEdFVF9PTERfT1JERVJTID0gZ3FsYFxue1xuICBvcmRlcnMgKGZpbHRlcnM6IHt1c2VyOiB7ZXE6ICR7SlNPTi5zdHJpbmdpZnkodXNlci51c2VybmFtZSl9fX0pe1xuICAgIGRhdGEge1xuICAgICAgaWRcbiAgICAgIGF0dHJpYnV0ZXMge1xuICAgICAgICBkaXNoZXNcbiAgICAgICAgdXNlclxuICAgICAgICBhbW91bnRcbiAgICAgICAgY2hhcmdlX2lkXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4gIGA7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9PTERfT1JERVJTLCB7fSk7XG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RVJST1IgaGVyZTwvcD47XG4gIGlmICghZGF0YSkgcmV0dXJuIDxwPk5vdCBmb3VuZDwvcD47XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gIGxldCBvcmRlcnMgPSBkYXRhLm9yZGVycy5kYXRhO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtvcmRlcnMubWFwKChvcmRlcikgPT4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtvcmRlci5hdHRyaWJ1dGVzLmRpc2hlcy5tYXAoKGVhY2gpID0+IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIHtlYWNoLm5hbWV9XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgUXVhbnRpdHk6IHtvcmRlci5hdHRyaWJ1dGVzLmRpc2hlc1swXS5xdWFudGl0eX1cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBQcmljZTogJHtvcmRlci5hdHRyaWJ1dGVzLmFtb3VudH1cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBUcmFuc2FjdGlvbiBJRDoge29yZGVyLmF0dHJpYnV0ZXMuY2hhcmdlX2lkfVxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBPcmRlckhpc3Rvcnk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJncWwiLCJ1c2VRdWVyeSIsIkFwcENvbnRleHQiLCJPcmRlckhpc3RvcnkiLCJ1c2VyIiwiaXNBdXRoZW50aWNhdGVkIiwiR0VUX09MRF9PUkRFUlMiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlcm5hbWUiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwicCIsImNvbnNvbGUiLCJsb2ciLCJvcmRlcnMiLCJtYXAiLCJvcmRlciIsImRpdiIsImF0dHJpYnV0ZXMiLCJkaXNoZXMiLCJlYWNoIiwibmFtZSIsImJyIiwicXVhbnRpdHkiLCJhbW91bnQiLCJjaGFyZ2VfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/orderHistory.js\n");

/***/ })

});