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

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_orderHistory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/orderHistory */ \"./components/orderHistory.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _components_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/auth */ \"./components/auth.js\");\n/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/context */ \"./components/context.js\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Profile(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_context__WEBPACK_IMPORTED_MODULE_5__[\"default\"]), user = ref.user, isAuthenticated = ref.isAuthenticated;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n        style: {\n            marginTop: \"1em\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                    xs: \"4\",\n                    sm: \"4\",\n                    style: {\n                        padding: 0\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                        style: {\n                            margin: \"0 1rem 1em 1em\",\n                            height: \"auto\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.CardImg, {\n                                top: true,\n                                style: {\n                                    height: \"auto\"\n                                },\n                                src: \"\"\n                            }, void 0, false, {\n                                fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/pages/profile.js\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.CardBody, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.CardTitle, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: [\n                                                \"Hey, \",\n                                                user.username\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/pages/profile.js\",\n                                            lineNumber: 31,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/pages/profile.js\",\n                                        lineNumber: 30,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.CardText, {\n                                        children: [\n                                            \"Here is your profile\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/pages/profile.js\",\n                                                lineNumber: 35,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/pages/profile.js\",\n                                                lineNumber: 36,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                style: {\n                                                    alignItems: \"center\"\n                                                },\n                                                children: \"You'll be able to change your profile information in a future update\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/pages/profile.js\",\n                                                lineNumber: 37,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/pages/profile.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/pages/profile.js\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"card-footer\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                    color: \"info\",\n                                    outline: true,\n                                    children: \"There's even a button!\"\n                                }, void 0, false, {\n                                    fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/pages/profile.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/pages/profile.js\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/pages/profile.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/pages/profile.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                    xs: \"8\",\n                    sm: \"8\",\n                    style: {\n                        padding: 0\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                        style: {\n                            margin: \"0 0.5rem 20px 0.5rem\",\n                            height: \"auto\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.CardBody, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.CardTitle, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: \"All Orders\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/pages/profile.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/pages/profile.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.CardText, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_orderHistory__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/pages/profile.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/pages/profile.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/pages/profile.js\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"card-footer\"\n                            }, void 0, false, {\n                                fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/pages/profile.js\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/pages/profile.js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/pages/profile.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/pages/profile.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/pages/profile.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this));\n}\n_s(Profile, \"t6PXSfMmzfeTxqJaIQPK0VwmZqQ=\");\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4RDtBQUN2QjtBQUNPO0FBQ087QUFZbEM7QUFDdUI7QUFDSTs7U0FFckNtQixPQUFPLENBQUNDLEtBQUssRUFBRSxDQUFDOztJQUN2QixHQUFHLENBQTZCakIsR0FBc0IsR0FBdEJBLGlEQUFVLENBQUNlLDJEQUFVLEdBQS9DRyxJQUFJLEdBQXNCbEIsR0FBc0IsQ0FBaERrQixJQUFJLEVBQUVDLGVBQWUsR0FBS25CLEdBQXNCLENBQTFDbUIsZUFBZTtJQUUzQixNQUFNLDZFQUNITixpREFBUztRQUFDTyxLQUFLLEVBQUUsQ0FBQ0M7WUFBQUEsU0FBUyxFQUFFLENBQUs7UUFBQSxDQUFDOzhGQUNqQ1YsMkNBQUc7OzRGQUNEQywyQ0FBRztvQkFBQ1UsRUFBRSxFQUFDLENBQUc7b0JBQUNDLEVBQUUsRUFBQyxDQUFHO29CQUFDSCxLQUFLLEVBQUUsQ0FBQzt3QkFBQ0ksT0FBTyxFQUFFLENBQUM7b0JBQUMsQ0FBQzswR0FDckNsQiw0Q0FBSTt3QkFBQ2MsS0FBSyxFQUFFLENBQUM7NEJBQUNLLE1BQU0sRUFBRSxDQUFnQjs0QkFBRUMsTUFBTSxFQUFFLENBQU07d0JBQUMsQ0FBQzs7d0dBQ3REbEIsK0NBQU87Z0NBQUNtQixHQUFHLEVBQUUsSUFBSTtnQ0FBRVAsS0FBSyxFQUFFLENBQUM7b0NBQUNNLE1BQU0sRUFBRSxDQUFNO2dDQUFDLENBQUM7Z0NBQUVFLEdBQUcsRUFBRzs7Ozs7O3dHQUNwRHJCLGdEQUFROztnSEFDTkcsaURBQVM7OEhBQ1BtQixDQUFFOztnREFBQyxDQUFLO2dEQUFDWCxJQUFJLENBQUNZLFFBQVE7Ozs7Ozs7Ozs7OztnSEFFeEJyQixnREFBUTs7NENBQUMsQ0FFUjt3SEFBQ3NCLENBQUU7Ozs7O3dIQUNGQSxDQUFFOzs7Ozt3SEFDRkMsQ0FBRTtnREFBQ1osS0FBSyxFQUFFLENBQUM7b0RBQUNhLFVBQVUsRUFBRSxDQUFRO2dEQUFDLENBQUM7MERBQUUsQ0FHckM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3R0FHSEMsQ0FBRztnQ0FBQ0MsU0FBUyxFQUFDLENBQWE7c0hBQ3pCOUIsOENBQU07b0NBQUMrQixLQUFLLEVBQUMsQ0FBTTtvQ0FBQ0MsT0FBTzs4Q0FBQyxDQUU3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0RkFJTHpCLDJDQUFHO29CQUFDVSxFQUFFLEVBQUMsQ0FBRztvQkFBQ0MsRUFBRSxFQUFDLENBQUc7b0JBQUNILEtBQUssRUFBRSxDQUFDO3dCQUFDSSxPQUFPLEVBQUUsQ0FBQztvQkFBQyxDQUFDOzBHQUNyQ2xCLDRDQUFJO3dCQUFDYyxLQUFLLEVBQUUsQ0FBQzs0QkFBQ0ssTUFBTSxFQUFFLENBQXNCOzRCQUFFQyxNQUFNLEVBQUUsQ0FBTTt3QkFBQyxDQUFDOzt3R0FDNURuQixnREFBUTs7Z0hBQ05HLGlEQUFTOzhIQUNQbUIsQ0FBRTtzREFBQyxDQUFVOzs7Ozs7Ozs7OztnSEFFZnBCLGdEQUFROzhIQUNOTCxnRUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozt3R0FHaEI4QixDQUFHO2dDQUFDQyxTQUFTLEVBQUMsQ0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCeEMsQ0FBQztHQXpEUW5CLE9BQU87S0FBUEEsT0FBTztBQTJEaEIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9maWxlLmpzPzA4ZDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IE9yZGVySGlzdG9yeSBmcm9tIFwiLi4vY29tcG9uZW50cy9vcmRlckhpc3RvcnlcIjtcblxuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBDYXJkQm9keSxcbiAgQ2FyZEltZyxcbiAgQ2FyZFRleHQsXG4gIENhcmRUaXRsZSxcbiAgUm93LFxuICBDb2wsXG4gIENvbnRhaW5lcixcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvYXV0aFwiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGV4dFwiO1xuXG5mdW5jdGlvbiBQcm9maWxlKHByb3BzKSB7XG4gIGxldCB7IHVzZXIsIGlzQXV0aGVudGljYXRlZCB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgc3R5bGU9e3ttYXJnaW5Ub3A6IFwiMWVtXCJ9fT5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgeHM9XCI0XCIgc209XCI0XCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW46IFwiMCAxcmVtIDFlbSAxZW1cIiwgaGVpZ2h0OiBcImF1dG9cIiB9fT5cbiAgICAgICAgICAgIDxDYXJkSW1nIHRvcD17dHJ1ZX0gc3R5bGU9e3sgaGVpZ2h0OiBcImF1dG9cIiB9fSBzcmM9e2BgfSAvPlxuICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgICA8Q2FyZFRpdGxlPlxuICAgICAgICAgICAgICAgIDxoMz5IZXksIHt1c2VyLnVzZXJuYW1lfTwvaDM+XG4gICAgICAgICAgICAgIDwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICA8Q2FyZFRleHQ+XG4gICAgICAgICAgICAgICAgSGVyZSBpcyB5b3VyIHByb2ZpbGVcbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgYWxpZ25JdGVtczogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICAgIFlvdSdsbCBiZSBhYmxlIHRvIGNoYW5nZSB5b3VyIHByb2ZpbGUgaW5mb3JtYXRpb24gaW4gYSBmdXR1cmVcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZVxuICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDwvQ2FyZFRleHQ+XG4gICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5mb1wiIG91dGxpbmU+XG4gICAgICAgICAgICAgICAgVGhlcmUncyBldmVuIGEgYnV0dG9uIVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgeHM9XCI4XCIgc209XCI4XCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW46IFwiMCAwLjVyZW0gMjBweCAwLjVyZW1cIiwgaGVpZ2h0OiBcImF1dG9cIiB9fT5cbiAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgPENhcmRUaXRsZT5cbiAgICAgICAgICAgICAgICA8aDM+QWxsIE9yZGVyczwvaDM+XG4gICAgICAgICAgICAgIDwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICA8Q2FyZFRleHQ+XG4gICAgICAgICAgICAgICAgPE9yZGVySGlzdG9yeSAvPlxuICAgICAgICAgICAgICA8L0NhcmRUZXh0PlxuICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgey8qIDxCdXR0b25cbiAgICAgICAgICAgICAgY29sb3I9XCJpbmZvXCJcbiAgICAgICAgICAgICAgb3V0bGluZVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBhZGRJdGVtKHJlcy5hdHRyaWJ1dGVzKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgKyBBZGQgVG8gQ2FydFxuICAgICAgICAgICAgPC9CdXR0b24+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwidXNlUm91dGVyIiwiZ3FsIiwidXNlUXVlcnkiLCJPcmRlckhpc3RvcnkiLCJCdXR0b24iLCJDYXJkIiwiQ2FyZEJvZHkiLCJDYXJkSW1nIiwiQ2FyZFRleHQiLCJDYXJkVGl0bGUiLCJSb3ciLCJDb2wiLCJDb250YWluZXIiLCJsb2dpbiIsIkFwcENvbnRleHQiLCJQcm9maWxlIiwicHJvcHMiLCJ1c2VyIiwiaXNBdXRoZW50aWNhdGVkIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJ4cyIsInNtIiwicGFkZGluZyIsIm1hcmdpbiIsImhlaWdodCIsInRvcCIsInNyYyIsImgzIiwidXNlcm5hbWUiLCJiciIsImg0IiwiYWxpZ25JdGVtcyIsImRpdiIsImNsYXNzTmFtZSIsImNvbG9yIiwib3V0bGluZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/profile.js\n");

/***/ })

});