"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/context */ \"./components/context.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ \"./pages/index.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _components_apolloHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/apolloHelper */ \"./components/apolloHelper.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction MyApp(props) {\n    _s();\n    var Component = props.Component, pageProps = props.pageProps;\n    var token = js_cookie__WEBPACK_IMPORTED_MODULE_6___default().get(\"token\");\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_context__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), cart = ref.cart, addItem = ref.addItem, removeItem = ref.removeItem, user = ref.user, setUser = ref.setUser, isAuthenticated = ref.isAuthenticated;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        cart: cart\n    }), state = ref1[0], setState = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        user: user,\n        isAuthenticated: isAuthenticated\n    }), userState = ref2[0], setUserState = ref2[1];\n    var apolloClient = (0,_components_apolloHelper__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n    /*   const API_URL = process.env.NEXT_PUBLIC_API_URL || \"http://localhost:1337\";\n  console.log(`URL: ${API_URL}`);\n  const [query, setQuery] = useState(\"\");\n  const link = new HttpLink({ uri: `${API_URL}/graphql` });\n  const cache = new InMemoryCache();\n  const client = new ApolloClient({ link, cache }); */ if (userState.isAuthenticated == false) {\n        if (token) {\n            // authenticate the token on the server and place set user object\n            var config = {\n                method: \"get\",\n                url: \"http://localhost:1337/api/users/me\",\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            };\n            /*     setUser = (user) => {\n      setState({ user: user });\n    }; */ axios__WEBPACK_IMPORTED_MODULE_7___default()(config).then(function(response) {\n                console.log(JSON.stringify(response.data));\n                setUserState({\n                    user: response.data,\n                    isAuthenticated: true\n                });\n            }).catch(function(error) {\n                console.log(error);\n            });\n        }\n    }\n    /* setUser = (user) => {\n    setState({ user });\n  }; */ addItem = function(item1) {\n        var items = state.cart.items;\n        console.log(state.cart.items);\n        console.log(JSON.stringify(item1));\n        //check for item already in cart\n        //if not in cart, add item if item is found increase quanity ++\n        var foundItem = false;\n        if (state.cart.items.length > 0) {\n            foundItem = state.cart.items.find(function(i) {\n                return i.name === item1.name;\n            });\n            if (!foundItem) foundItem = false;\n        } else {\n            foundItem = false;\n        }\n        console.log(\"Found Item value: \".concat(JSON.stringify(foundItem)));\n        // if item is not new, add to cart, set quantity to 1\n        if (!foundItem) {\n            //set quantity property to 1\n            var temp = JSON.parse(JSON.stringify(item1));\n            temp.quantity = 1;\n            var newCart = {\n                items: _toConsumableArray(state.cart.items).concat([\n                    temp\n                ]),\n                total: state.cart.total + item1.price\n            };\n            setState({\n                cart: newCart\n            });\n            console.log(\"Total items: \".concat(JSON.stringify(newCart)));\n        } else {\n            // we already have it so just increase quantity ++\n            console.log(\"Total so far:  \".concat(cart.total));\n            newCart = {\n                items: state.cart.items.map(function(item) {\n                    if (item.name === foundItem.name) {\n                        return Object.assign({}, item, {\n                            quantity: item.quantity + 1\n                        });\n                    } else {\n                        return item;\n                    }\n                }),\n                total: state.cart.total + item1.price\n            };\n        }\n        setState({\n            cart: newCart\n        }); // problem is this is not updated yet\n    //console.log(`state reset to cart:${JSON.stringify(state)}`);\n    };\n    removeItem = function(item2) {\n        var items = state.cart.items;\n        //check for item already in cart\n        var foundItem = items.find(function(i) {\n            return i.name === item2.name;\n        });\n        if (foundItem.quantity > 1) {\n            var newCart = {\n                items: items.map(function(item) {\n                    if (item.iname === foundItem.name) {\n                        return Object.assign({}, item, {\n                            quantity: item.quantity - 1\n                        });\n                    } else {\n                        return item;\n                    }\n                }),\n                total: state.cart.total - item2.attributes.price\n            };\n        //console.log(`NewCart after remove: ${JSON.stringify(newCart)}`)\n        } else {\n            // only 1 in the cart so remove the whole item\n            console.log(\"Try remove item \".concat(JSON.stringify(foundItem)));\n            var index = items.findIndex(function(i) {\n                return i.name === foundItem.name;\n            });\n            items.splice(index, 1);\n            var newCart = {\n                items: items,\n                total: state.cart.total - item2.attributes.price\n            };\n        }\n        setState({\n            cart: newCart\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_context__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n        value: {\n            cart: state.cart,\n            addItem: addItem,\n            removeItem: removeItem,\n            isAuthenticated: userState.isAuthenticated,\n            user: userState.user,\n            setUser: function() {}\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_10__.ApolloProvider, {\n            client: apolloClient,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/pages/_app.js\",\n                    lineNumber: 152,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                    fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/pages/_app.js\",\n                    lineNumber: 153,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/pages/_app.js\",\n            lineNumber: 151,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/jbrooks/Documents/GitHub/thomasvillefoodie/pages/_app.js\",\n        lineNumber: 141,\n        columnNumber: 5\n    }, this));\n}\n_s(MyApp, \"GvlOJihO3Ak6vygwlNgHVwJilJU=\");\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDaEI7QUFDa0I7QUFDcEI7QUFDZTtBQUNYO0FBQ0w7QUFDNEM7QUFDekM7QUFNTDtBQUM4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUU1Q21CLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLENBQUM7O0lBQ3JCLEdBQUssQ0FBR0MsU0FBUyxHQUFnQkQsS0FBSyxDQUE5QkMsU0FBUyxFQUFFQyxTQUFTLEdBQUtGLEtBQUssQ0FBbkJFLFNBQVM7SUFDNUIsR0FBSyxDQUFDQyxLQUFLLEdBQUdqQixvREFBVSxDQUFDLENBQU87SUFDaEMsR0FBRyxDQUNETixHQUFzQixHQUF0QkEsaURBQVUsQ0FBQ0csMkRBQVUsR0FEakJzQixJQUFJLEdBQ1J6QixHQUFzQixDQURsQnlCLElBQUksRUFBRUMsT0FBTyxHQUNqQjFCLEdBQXNCLENBRFowQixPQUFPLEVBQUVDLFVBQVUsR0FDN0IzQixHQUFzQixDQURIMkIsVUFBVSxFQUFFQyxJQUFJLEdBQ25DNUIsR0FBc0IsQ0FEUzRCLElBQUksRUFBRUMsT0FBTyxHQUM1QzdCLEdBQXNCLENBRGU2QixPQUFPLEVBQUVDLGVBQWUsR0FDN0Q5QixHQUFzQixDQUR3QjhCLGVBQWU7SUFFL0QsR0FBSyxDQUFxQjdCLElBRXhCLEdBRndCQSwrQ0FBUSxDQUFDLENBQUM7UUFDbEN3QixJQUFJLEVBQUVBLElBQUk7SUFDWixDQUFDLEdBRk1NLEtBQUssR0FBYzlCLElBRXhCLEtBRlkrQixRQUFRLEdBQUkvQixJQUV4QjtJQUNGLEdBQUssQ0FBNkJBLElBR2hDLEdBSGdDQSwrQ0FBUSxDQUFDLENBQUM7UUFDMUMyQixJQUFJLEVBQUVBLElBQUk7UUFDVkUsZUFBZSxFQUFFQSxlQUFlO0lBQ2xDLENBQUMsR0FITUcsU0FBUyxHQUFrQmhDLElBR2hDLEtBSGdCaUMsWUFBWSxHQUFJakMsSUFHaEM7SUFFRixHQUFLLENBQUNrQyxZQUFZLEdBQUdqQixvRUFBWTtJQUNqQyxFQUtvRDs7Ozs7b0RBQUEsR0FFcEQsRUFBRSxFQUFFZSxTQUFTLENBQUNILGVBQWUsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUN2QyxFQUFFLEVBQUVQLEtBQUssRUFBRSxDQUFDO1lBQ1YsRUFBaUU7WUFDakUsR0FBRyxDQUFDYSxNQUFNLEdBQUcsQ0FBQztnQkFDWkMsTUFBTSxFQUFFLENBQUs7Z0JBQ2JDLEdBQUcsRUFBRSxDQUFvQztnQkFDekNDLE9BQU8sRUFBRSxDQUFDO29CQUNSQyxhQUFhLEVBQUcsQ0FBTyxTQUFRLE9BQU5qQixLQUFLO2dCQUNoQyxDQUFDO1lBQ0gsQ0FBQztZQUNELEVBRUc7O09BQUEsR0FDSGhCLDRDQUFLLENBQUM2QixNQUFNLEVBQ1RLLElBQUksQ0FBQyxRQUFRLENBQUVDLFFBQVEsRUFBRSxDQUFDO2dCQUN6QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDSixRQUFRLENBQUNLLElBQUk7Z0JBQ3hDYixZQUFZLENBQUMsQ0FBQztvQkFBQ04sSUFBSSxFQUFFYyxRQUFRLENBQUNLLElBQUk7b0JBQUVqQixlQUFlLEVBQUUsSUFBSTtnQkFBQyxDQUFDO1lBQzdELENBQUMsRUFDQWtCLEtBQUssQ0FBQyxRQUFRLENBQUVDLEtBQUssRUFBRSxDQUFDO2dCQUN2Qk4sT0FBTyxDQUFDQyxHQUFHLENBQUNLLEtBQUs7WUFDbkIsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBQ0QsRUFFSzs7S0FBQSxHQUNMdkIsT0FBTyxHQUFHLFFBQVEsQ0FBUHdCLEtBQUksRUFBSyxDQUFDO1FBQ25CLEdBQUssQ0FBR0MsS0FBSyxHQUFLcEIsS0FBSyxDQUFDTixJQUFJLENBQXBCMEIsS0FBSztRQUNiUixPQUFPLENBQUNDLEdBQUcsQ0FBQ2IsS0FBSyxDQUFDTixJQUFJLENBQUMwQixLQUFLO1FBQzVCUixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNJLEtBQUk7UUFDL0IsRUFBZ0M7UUFDaEMsRUFBK0Q7UUFDL0QsR0FBRyxDQUFDRSxTQUFTLEdBQUcsS0FBSztRQUNyQixFQUFFLEVBQUVyQixLQUFLLENBQUNOLElBQUksQ0FBQzBCLEtBQUssQ0FBQ0UsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ2hDRCxTQUFTLEdBQUdyQixLQUFLLENBQUNOLElBQUksQ0FBQzBCLEtBQUssQ0FBQ0csSUFBSSxDQUFDLFFBQVEsQ0FBUEMsQ0FBQztnQkFBS0EsTUFBTSxDQUFOQSxDQUFDLENBQUNDLElBQUksS0FBS04sS0FBSSxDQUFDTSxJQUFJOztZQUU3RCxFQUFFLEdBQUdKLFNBQVMsRUFBRUEsU0FBUyxHQUFHLEtBQUs7UUFDbkMsQ0FBQyxNQUFNLENBQUM7WUFDTkEsU0FBUyxHQUFHLEtBQUs7UUFDbkIsQ0FBQztRQUNEVCxPQUFPLENBQUNDLEdBQUcsQ0FBRSxDQUFrQixvQkFBNEIsT0FBMUJDLElBQUksQ0FBQ0MsU0FBUyxDQUFDTSxTQUFTO1FBQ3pELEVBQXFEO1FBQ3JELEVBQUUsR0FBR0EsU0FBUyxFQUFFLENBQUM7WUFDZixFQUE0QjtZQUU1QixHQUFHLENBQUNLLElBQUksR0FBR1osSUFBSSxDQUFDYSxLQUFLLENBQUNiLElBQUksQ0FBQ0MsU0FBUyxDQUFDSSxLQUFJO1lBQ3pDTyxJQUFJLENBQUNFLFFBQVEsR0FBRyxDQUFDO1lBQ2pCLEdBQUcsQ0FBQ0MsT0FBTyxHQUFHLENBQUM7Z0JBQ2JULEtBQUsscUJBQU1wQixLQUFLLENBQUNOLElBQUksQ0FBQzBCLEtBQUssU0FBcEIsQ0FBQztvQkFBcUJNLElBQUk7Z0JBQUEsQ0FBQztnQkFDbENJLEtBQUssRUFBRTlCLEtBQUssQ0FBQ04sSUFBSSxDQUFDb0MsS0FBSyxHQUFHWCxLQUFJLENBQUNZLEtBQUs7WUFDdEMsQ0FBQztZQUNEOUIsUUFBUSxDQUFDLENBQUM7Z0JBQUNQLElBQUksRUFBRW1DLE9BQU87WUFBQyxDQUFDO1lBRTFCakIsT0FBTyxDQUFDQyxHQUFHLENBQUUsQ0FBYSxlQUEwQixPQUF4QkMsSUFBSSxDQUFDQyxTQUFTLENBQUNjLE9BQU87UUFDcEQsQ0FBQyxNQUFNLENBQUM7WUFDTixFQUFrRDtZQUNsRGpCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFFLENBQWUsaUJBQWEsT0FBWG5CLElBQUksQ0FBQ29DLEtBQUs7WUFDeENELE9BQU8sR0FBRyxDQUFDO2dCQUNUVCxLQUFLLEVBQUVwQixLQUFLLENBQUNOLElBQUksQ0FBQzBCLEtBQUssQ0FBQ1ksR0FBRyxDQUFDLFFBQVEsQ0FBUGIsSUFBSSxFQUFLLENBQUM7b0JBQ3JDLEVBQUUsRUFBRUEsSUFBSSxDQUFDTSxJQUFJLEtBQUtKLFNBQVMsQ0FBQ0ksSUFBSSxFQUFFLENBQUM7d0JBQ2pDLE1BQU0sQ0FBQ1EsTUFBTSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUVmLElBQUksRUFBRSxDQUFDOzRCQUFDUyxRQUFRLEVBQUVULElBQUksQ0FBQ1MsUUFBUSxHQUFHLENBQUM7d0JBQUMsQ0FBQztvQkFDaEUsQ0FBQyxNQUFNLENBQUM7d0JBQ04sTUFBTSxDQUFDVCxJQUFJO29CQUNiLENBQUM7Z0JBQ0gsQ0FBQztnQkFDRFcsS0FBSyxFQUFFOUIsS0FBSyxDQUFDTixJQUFJLENBQUNvQyxLQUFLLEdBQUdYLEtBQUksQ0FBQ1ksS0FBSztZQUN0QyxDQUFDO1FBQ0gsQ0FBQztRQUNEOUIsUUFBUSxDQUFDLENBQUM7WUFBQ1AsSUFBSSxFQUFFbUMsT0FBTztRQUFDLENBQUMsRUFBRyxDQUFxQztJQUVsRSxFQUE4RDtJQUNoRSxDQUFDO0lBQ0RqQyxVQUFVLEdBQUcsUUFBUSxDQUFQdUIsS0FBSSxFQUFLLENBQUM7UUFDdEIsR0FBRyxDQUFHQyxLQUFLLEdBQUtwQixLQUFLLENBQUNOLElBQUksQ0FBcEIwQixLQUFLO1FBQ1gsRUFBZ0M7UUFDaEMsR0FBSyxDQUFDQyxTQUFTLEdBQUdELEtBQUssQ0FBQ0csSUFBSSxDQUFDLFFBQVEsQ0FBUEMsQ0FBQztZQUFLQSxNQUFNLENBQU5BLENBQUMsQ0FBQ0MsSUFBSSxLQUFLTixLQUFJLENBQUNNLElBQUk7O1FBQ3hELEVBQUUsRUFBRUosU0FBUyxDQUFDTyxRQUFRLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDM0IsR0FBRyxDQUFDQyxPQUFPLEdBQUcsQ0FBQztnQkFDYlQsS0FBSyxFQUFFQSxLQUFLLENBQUNZLEdBQUcsQ0FBQyxRQUFRLENBQVBiLElBQUksRUFBSyxDQUFDO29CQUMxQixFQUFFLEVBQUVBLElBQUksQ0FBQ2dCLEtBQUssS0FBS2QsU0FBUyxDQUFDSSxJQUFJLEVBQUUsQ0FBQzt3QkFDbEMsTUFBTSxDQUFDUSxNQUFNLENBQUNDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRWYsSUFBSSxFQUFFLENBQUM7NEJBQUNTLFFBQVEsRUFBRVQsSUFBSSxDQUFDUyxRQUFRLEdBQUcsQ0FBQzt3QkFBQyxDQUFDO29CQUNoRSxDQUFDLE1BQU0sQ0FBQzt3QkFDTixNQUFNLENBQUNULElBQUk7b0JBQ2IsQ0FBQztnQkFDSCxDQUFDO2dCQUNEVyxLQUFLLEVBQUU5QixLQUFLLENBQUNOLElBQUksQ0FBQ29DLEtBQUssR0FBR1gsS0FBSSxDQUFDaUIsVUFBVSxDQUFDTCxLQUFLO1lBQ2pELENBQUM7UUFDRCxFQUFpRTtRQUNuRSxDQUFDLE1BQU0sQ0FBQztZQUNOLEVBQThDO1lBQzlDbkIsT0FBTyxDQUFDQyxHQUFHLENBQUUsQ0FBZ0Isa0JBQTRCLE9BQTFCQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ00sU0FBUztZQUN2RCxHQUFLLENBQUNnQixLQUFLLEdBQUdqQixLQUFLLENBQUNrQixTQUFTLENBQUMsUUFBUSxDQUFQZCxDQUFDO2dCQUFLQSxNQUFNLENBQU5BLENBQUMsQ0FBQ0MsSUFBSSxLQUFLSixTQUFTLENBQUNJLElBQUk7O1lBQzlETCxLQUFLLENBQUNtQixNQUFNLENBQUNGLEtBQUssRUFBRSxDQUFDO1lBQ3JCLEdBQUcsQ0FBQ1IsT0FBTyxHQUFHLENBQUM7Z0JBQ2JULEtBQUssRUFBRUEsS0FBSztnQkFDWlUsS0FBSyxFQUFFOUIsS0FBSyxDQUFDTixJQUFJLENBQUNvQyxLQUFLLEdBQUdYLEtBQUksQ0FBQ2lCLFVBQVUsQ0FBQ0wsS0FBSztZQUNqRCxDQUFDO1FBQ0gsQ0FBQztRQUNEOUIsUUFBUSxDQUFDLENBQUM7WUFBQ1AsSUFBSSxFQUFFbUMsT0FBTztRQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELE1BQU0sNkVBQ0h6RCxvRUFBbUI7UUFDbEJxRSxLQUFLLEVBQUUsQ0FBQztZQUNOL0MsSUFBSSxFQUFFTSxLQUFLLENBQUNOLElBQUk7WUFDaEJDLE9BQU8sRUFBRUEsT0FBTztZQUNoQkMsVUFBVSxFQUFFQSxVQUFVO1lBQ3RCRyxlQUFlLEVBQUVHLFNBQVMsQ0FBQ0gsZUFBZTtZQUMxQ0YsSUFBSSxFQUFFSyxTQUFTLENBQUNMLElBQUk7WUFDcEJDLE9BQU8sRUFBRSxRQUFRLEdBQUYsQ0FBQyxDQUFDO1FBQ25CLENBQUM7OEZBRUFmLDJEQUFjO1lBQUMyRCxNQUFNLEVBQUV0QyxZQUFZOzs0RkFDakM5QiwwREFBTTs7Ozs7NEZBQ05nQixTQUFTLG9CQUFLQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWhDLENBQUM7R0EzSVFILEtBQUs7S0FBTEEsS0FBSztBQTZJZCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGV4dFwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgQ29va2llIGZyb20gXCJqcy1jb29raWVcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgQ2FyZEJvZHksIENhcmRUaXRsZSwgQmFkZ2UgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHtcbiAgQXBvbGxvUHJvdmlkZXIsXG4gIEFwb2xsb0NsaWVudCxcbiAgSHR0cExpbmssXG4gIEluTWVtb3J5Q2FjaGUsXG59IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IEFwb2xsb0hlbHBlciBmcm9tIFwiLi4vY29tcG9uZW50cy9hcG9sbG9IZWxwZXJcIjtcblxuZnVuY3Rpb24gTXlBcHAocHJvcHMpIHtcbiAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gcHJvcHM7XG4gIGNvbnN0IHRva2VuID0gQ29va2llLmdldChcInRva2VuXCIpO1xuICB2YXIgeyBjYXJ0LCBhZGRJdGVtLCByZW1vdmVJdGVtLCB1c2VyLCBzZXRVc2VyLCBpc0F1dGhlbnRpY2F0ZWQgfSA9XG4gICAgdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgY2FydDogY2FydCxcbiAgfSk7XG4gIGNvbnN0IFt1c2VyU3RhdGUsIHNldFVzZXJTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgdXNlcjogdXNlcixcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6IGlzQXV0aGVudGljYXRlZCxcbiAgfSk7XG5cbiAgY29uc3QgYXBvbGxvQ2xpZW50ID0gQXBvbGxvSGVscGVyKCk7XG4gIC8qICAgY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgXCJodHRwOi8vbG9jYWxob3N0OjEzMzdcIjtcbiAgY29uc29sZS5sb2coYFVSTDogJHtBUElfVVJMfWApO1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBsaW5rID0gbmV3IEh0dHBMaW5rKHsgdXJpOiBgJHtBUElfVVJMfS9ncmFwaHFsYCB9KTtcbiAgY29uc3QgY2FjaGUgPSBuZXcgSW5NZW1vcnlDYWNoZSgpO1xuICBjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHsgbGluaywgY2FjaGUgfSk7ICovXG5cbiAgaWYgKHVzZXJTdGF0ZS5pc0F1dGhlbnRpY2F0ZWQgPT0gZmFsc2UpIHtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIC8vIGF1dGhlbnRpY2F0ZSB0aGUgdG9rZW4gb24gdGhlIHNlcnZlciBhbmQgcGxhY2Ugc2V0IHVzZXIgb2JqZWN0XG4gICAgICBsZXQgY29uZmlnID0ge1xuICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjEzMzcvYXBpL3VzZXJzL21lXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgICAvKiAgICAgc2V0VXNlciA9ICh1c2VyKSA9PiB7XG4gICAgICBzZXRTdGF0ZSh7IHVzZXI6IHVzZXIgfSk7XG4gICAgfTsgKi9cbiAgICAgIGF4aW9zKGNvbmZpZylcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YSkpO1xuICAgICAgICAgIHNldFVzZXJTdGF0ZSh7IHVzZXI6IHJlc3BvbnNlLmRhdGEsIGlzQXV0aGVudGljYXRlZDogdHJ1ZSB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8qIHNldFVzZXIgPSAodXNlcikgPT4ge1xuICAgIHNldFN0YXRlKHsgdXNlciB9KTtcbiAgfTsgKi9cbiAgYWRkSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgY29uc3QgeyBpdGVtcyB9ID0gc3RhdGUuY2FydDtcbiAgICBjb25zb2xlLmxvZyhzdGF0ZS5jYXJ0Lml0ZW1zKTtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShpdGVtKSk7XG4gICAgLy9jaGVjayBmb3IgaXRlbSBhbHJlYWR5IGluIGNhcnRcbiAgICAvL2lmIG5vdCBpbiBjYXJ0LCBhZGQgaXRlbSBpZiBpdGVtIGlzIGZvdW5kIGluY3JlYXNlIHF1YW5pdHkgKytcbiAgICBsZXQgZm91bmRJdGVtID0gZmFsc2U7XG4gICAgaWYgKHN0YXRlLmNhcnQuaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgZm91bmRJdGVtID0gc3RhdGUuY2FydC5pdGVtcy5maW5kKChpKSA9PiBpLm5hbWUgPT09IGl0ZW0ubmFtZSk7XG5cbiAgICAgIGlmICghZm91bmRJdGVtKSBmb3VuZEl0ZW0gPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm91bmRJdGVtID0gZmFsc2U7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBGb3VuZCBJdGVtIHZhbHVlOiAke0pTT04uc3RyaW5naWZ5KGZvdW5kSXRlbSl9YCk7XG4gICAgLy8gaWYgaXRlbSBpcyBub3QgbmV3LCBhZGQgdG8gY2FydCwgc2V0IHF1YW50aXR5IHRvIDFcbiAgICBpZiAoIWZvdW5kSXRlbSkge1xuICAgICAgLy9zZXQgcXVhbnRpdHkgcHJvcGVydHkgdG8gMVxuXG4gICAgICBsZXQgdGVtcCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaXRlbSkpO1xuICAgICAgdGVtcC5xdWFudGl0eSA9IDE7XG4gICAgICB2YXIgbmV3Q2FydCA9IHtcbiAgICAgICAgaXRlbXM6IFsuLi5zdGF0ZS5jYXJ0Lml0ZW1zLCB0ZW1wXSxcbiAgICAgICAgdG90YWw6IHN0YXRlLmNhcnQudG90YWwgKyBpdGVtLnByaWNlLFxuICAgICAgfTtcbiAgICAgIHNldFN0YXRlKHsgY2FydDogbmV3Q2FydCB9KTtcblxuICAgICAgY29uc29sZS5sb2coYFRvdGFsIGl0ZW1zOiAke0pTT04uc3RyaW5naWZ5KG5ld0NhcnQpfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB3ZSBhbHJlYWR5IGhhdmUgaXQgc28ganVzdCBpbmNyZWFzZSBxdWFudGl0eSArK1xuICAgICAgY29uc29sZS5sb2coYFRvdGFsIHNvIGZhcjogICR7Y2FydC50b3RhbH1gKTtcbiAgICAgIG5ld0NhcnQgPSB7XG4gICAgICAgIGl0ZW1zOiBzdGF0ZS5jYXJ0Lml0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT09IGZvdW5kSXRlbS5uYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSwgeyBxdWFudGl0eTogaXRlbS5xdWFudGl0eSArIDEgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHRvdGFsOiBzdGF0ZS5jYXJ0LnRvdGFsICsgaXRlbS5wcmljZSxcbiAgICAgIH07XG4gICAgfVxuICAgIHNldFN0YXRlKHsgY2FydDogbmV3Q2FydCB9KTsgLy8gcHJvYmxlbSBpcyB0aGlzIGlzIG5vdCB1cGRhdGVkIHlldFxuXG4gICAgLy9jb25zb2xlLmxvZyhgc3RhdGUgcmVzZXQgdG8gY2FydDoke0pTT04uc3RyaW5naWZ5KHN0YXRlKX1gKTtcbiAgfTtcbiAgcmVtb3ZlSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgbGV0IHsgaXRlbXMgfSA9IHN0YXRlLmNhcnQ7XG4gICAgLy9jaGVjayBmb3IgaXRlbSBhbHJlYWR5IGluIGNhcnRcbiAgICBjb25zdCBmb3VuZEl0ZW0gPSBpdGVtcy5maW5kKChpKSA9PiBpLm5hbWUgPT09IGl0ZW0ubmFtZSk7XG4gICAgaWYgKGZvdW5kSXRlbS5xdWFudGl0eSA+IDEpIHtcbiAgICAgIHZhciBuZXdDYXJ0ID0ge1xuICAgICAgICBpdGVtczogaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0uaW5hbWUgPT09IGZvdW5kSXRlbS5uYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSwgeyBxdWFudGl0eTogaXRlbS5xdWFudGl0eSAtIDEgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHRvdGFsOiBzdGF0ZS5jYXJ0LnRvdGFsIC0gaXRlbS5hdHRyaWJ1dGVzLnByaWNlLFxuICAgICAgfTtcbiAgICAgIC8vY29uc29sZS5sb2coYE5ld0NhcnQgYWZ0ZXIgcmVtb3ZlOiAke0pTT04uc3RyaW5naWZ5KG5ld0NhcnQpfWApXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG9ubHkgMSBpbiB0aGUgY2FydCBzbyByZW1vdmUgdGhlIHdob2xlIGl0ZW1cbiAgICAgIGNvbnNvbGUubG9nKGBUcnkgcmVtb3ZlIGl0ZW0gJHtKU09OLnN0cmluZ2lmeShmb3VuZEl0ZW0pfWApO1xuICAgICAgY29uc3QgaW5kZXggPSBpdGVtcy5maW5kSW5kZXgoKGkpID0+IGkubmFtZSA9PT0gZm91bmRJdGVtLm5hbWUpO1xuICAgICAgaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHZhciBuZXdDYXJ0ID0ge1xuICAgICAgICBpdGVtczogaXRlbXMsXG4gICAgICAgIHRvdGFsOiBzdGF0ZS5jYXJ0LnRvdGFsIC0gaXRlbS5hdHRyaWJ1dGVzLnByaWNlLFxuICAgICAgfTtcbiAgICB9XG4gICAgc2V0U3RhdGUoeyBjYXJ0OiBuZXdDYXJ0IH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGNhcnQ6IHN0YXRlLmNhcnQsXG4gICAgICAgIGFkZEl0ZW06IGFkZEl0ZW0sXG4gICAgICAgIHJlbW92ZUl0ZW06IHJlbW92ZUl0ZW0sXG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogdXNlclN0YXRlLmlzQXV0aGVudGljYXRlZCxcbiAgICAgICAgdXNlcjogdXNlclN0YXRlLnVzZXIsXG4gICAgICAgIHNldFVzZXI6ICgpID0+IHt9LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXthcG9sbG9DbGllbnR9PlxuICAgICAgICA8TGF5b3V0PjwvTGF5b3V0PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiSGVhZCIsIkFwcENvbnRleHQiLCJIb21lIiwiTGF5b3V0IiwiQ29va2llIiwiYXhpb3MiLCJCdXR0b24iLCJDYXJkIiwiQ2FyZEJvZHkiLCJDYXJkVGl0bGUiLCJCYWRnZSIsIkxpbmsiLCJBcG9sbG9Qcm92aWRlciIsIkFwb2xsb0NsaWVudCIsIkh0dHBMaW5rIiwiSW5NZW1vcnlDYWNoZSIsIkFwb2xsb0hlbHBlciIsIk15QXBwIiwicHJvcHMiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0b2tlbiIsImdldCIsImNhcnQiLCJhZGRJdGVtIiwicmVtb3ZlSXRlbSIsInVzZXIiLCJzZXRVc2VyIiwiaXNBdXRoZW50aWNhdGVkIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZXJTdGF0ZSIsInNldFVzZXJTdGF0ZSIsImFwb2xsb0NsaWVudCIsImNvbmZpZyIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsIml0ZW0iLCJpdGVtcyIsImZvdW5kSXRlbSIsImxlbmd0aCIsImZpbmQiLCJpIiwibmFtZSIsInRlbXAiLCJwYXJzZSIsInF1YW50aXR5IiwibmV3Q2FydCIsInRvdGFsIiwicHJpY2UiLCJtYXAiLCJPYmplY3QiLCJhc3NpZ24iLCJpbmFtZSIsImF0dHJpYnV0ZXMiLCJpbmRleCIsImZpbmRJbmRleCIsInNwbGljZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJjbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});