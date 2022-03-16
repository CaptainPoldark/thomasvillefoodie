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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/context */ \"./components/context.js\");\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n{\\n  orders (filters: {user: {eq: \",\n        \"}}){\\n    data {\\n      id\\n      attributes {\\n        dishes\\n        user\\n      }\\n    }\\n  }\\n}\\n  \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nfunction OrderHistory() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_context__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), user = ref.user, isAuthenticated = ref.isAuthenticated;\n    var GET_RESTAURANT_DISHES = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql)(_templateObject(), JSON.stringify(user.username));\n    var ref1 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(GET_RESTAURANT_DISHES, {}), loading = ref1.loading, error = ref1.error, data = ref1.data;\n    if (loading) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/components/orderHistory.js\",\n        lineNumber: 23,\n        columnNumber: 23\n    }, this));\n    if (error) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"ERROR here\"\n    }, void 0, false, {\n        fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/components/orderHistory.js\",\n        lineNumber: 24,\n        columnNumber: 21\n    }, this));\n    if (!data) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Not found\"\n    }, void 0, false, {\n        fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/components/orderHistory.js\",\n        lineNumber: 25,\n        columnNumber: 21\n    }, this));\n    var orders = data.orders.data;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: orders.attributes.dishes.map(function(order) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    order.name,\n                    \" $\",\n                    order.price / 100,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/components/orderHistory.js\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/components/orderHistory.js\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/components/orderHistory.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false));\n}\n_s(OrderHistory, \"3PF4HDekKHt9lB1tBo4qh8ryXaY=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery\n    ];\n});\n_c = OrderHistory;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderHistory);\nvar _c;\n$RefreshReg$(_c, \"OrderHistory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL29yZGVySGlzdG9yeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThEO0FBQ3ZCO0FBQ087QUFDQTs7Ozs7Ozs7Ozs7OztRQUlWLENBRUw7UUFBZ0MsQ0FVN0Q7Ozs7Ozs7O1NBZE9RLFlBQVksR0FBRyxDQUFDOzs7SUFDdkIsR0FBRyxDQUE2QkwsR0FBc0IsR0FBdEJBLGlEQUFVLENBQUNJLDJEQUFVLEdBQS9DRSxJQUFJLEdBQXNCTixHQUFzQixDQUFoRE0sSUFBSSxFQUFFQyxlQUFlLEdBQUtQLEdBQXNCLENBQTFDTyxlQUFlO0lBQzNCLEdBQUssQ0FBQ0MscUJBQXFCLEdBQUdOLG1EQUFHLG9CQUVGTyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0osSUFBSSxDQUFDSyxRQUFRO0lBVzNELEdBQUssQ0FBNEJSLElBQW1DLEdBQW5DQSx3REFBUSxDQUFDSyxxQkFBcUIsRUFBRSxDQUFDLENBQUMsR0FBM0RJLE9BQU8sR0FBa0JULElBQW1DLENBQTVEUyxPQUFPLEVBQUVDLEtBQUssR0FBV1YsSUFBbUMsQ0FBbkRVLEtBQUssRUFBRUMsSUFBSSxHQUFLWCxJQUFtQyxDQUE1Q1csSUFBSTtJQUU1QixFQUFFLEVBQUVGLE9BQU8sRUFBRSxNQUFNLDZFQUFFRyxDQUFDO2tCQUFDLENBQVU7Ozs7OztJQUNqQyxFQUFFLEVBQUVGLEtBQUssRUFBRSxNQUFNLDZFQUFFRSxDQUFDO2tCQUFDLENBQVU7Ozs7OztJQUMvQixFQUFFLEdBQUdELElBQUksRUFBRSxNQUFNLDZFQUFFQyxDQUFDO2tCQUFDLENBQVM7Ozs7OztJQUU5QixHQUFHLENBQUNDLE1BQU0sR0FBR0YsSUFBSSxDQUFDRSxNQUFNLENBQUNGLElBQUk7SUFDN0IsTUFBTTtrQkFFREUsTUFBTSxDQUFDQyxVQUFVLENBQUNDLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsS0FBSzswQkFDbEMsTUFDUixDQUFDLDhEQURRQyxDQUFHOztvQkFDREQsS0FBSyxDQUFDRSxJQUFJO29CQUFDLENBQUU7b0JBQUNGLEtBQUssQ0FBQ0csS0FBSyxHQUFHLEdBQUc7Z0dBQy9CQyxDQUFFOzs7OztnR0FDRkEsQ0FBRTs7Ozs7Ozs7Ozs7OztBQUtiLENBQUM7R0FqQ1FuQixZQUFZOztRQWVjRixvREFBUTs7O0tBZmxDRSxZQUFZO0FBbUNyQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvb3JkZXJIaXN0b3J5LmpzP2I0YTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGV4dFwiO1xuXG5mdW5jdGlvbiBPcmRlckhpc3RvcnkoKSB7XG4gIGxldCB7IHVzZXIsIGlzQXV0aGVudGljYXRlZCB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgY29uc3QgR0VUX1JFU1RBVVJBTlRfRElTSEVTID0gZ3FsYFxue1xuICBvcmRlcnMgKGZpbHRlcnM6IHt1c2VyOiB7ZXE6ICR7SlNPTi5zdHJpbmdpZnkodXNlci51c2VybmFtZSl9fX0pe1xuICAgIGRhdGEge1xuICAgICAgaWRcbiAgICAgIGF0dHJpYnV0ZXMge1xuICAgICAgICBkaXNoZXNcbiAgICAgICAgdXNlclxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuICBgO1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfUkVTVEFVUkFOVF9ESVNIRVMsIHt9KTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FUlJPUiBoZXJlPC9wPjtcbiAgaWYgKCFkYXRhKSByZXR1cm4gPHA+Tm90IGZvdW5kPC9wPjtcblxuICBsZXQgb3JkZXJzID0gZGF0YS5vcmRlcnMuZGF0YTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge29yZGVycy5hdHRyaWJ1dGVzLmRpc2hlcy5tYXAoKG9yZGVyKSA9PiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge29yZGVyLm5hbWV9ICR7b3JkZXIucHJpY2UgLyAxMDB9XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVySGlzdG9yeTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsInVzZVJvdXRlciIsImdxbCIsInVzZVF1ZXJ5IiwiQXBwQ29udGV4dCIsIk9yZGVySGlzdG9yeSIsInVzZXIiLCJpc0F1dGhlbnRpY2F0ZWQiLCJHRVRfUkVTVEFVUkFOVF9ESVNIRVMiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlcm5hbWUiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwicCIsIm9yZGVycyIsImF0dHJpYnV0ZXMiLCJkaXNoZXMiLCJtYXAiLCJvcmRlciIsImRpdiIsIm5hbWUiLCJwcmljZSIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/orderHistory.js\n");

/***/ })

});