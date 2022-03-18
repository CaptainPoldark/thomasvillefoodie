"use strict";
exports.id = 851;
exports.ids = [851];
exports.modules = {

/***/ 8851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6981);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4394);







// we can pass cart data in via props method
// the alternative is using useContext as below
function Cart() {
    let { cart , addItem , removeItem , isAuthenticated  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z);
    //console.log(JSON.stringify(cart));
    //const [cartA, setCartA] = useState({cart})
    //cart = value.cart;
    //console.log('props:'+ JSON.stringify(value));
    //console.log(`in CART: ${JSON.stringify(cart)}`);
    //   problem is that cart may not be set
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    //console.log(`Router Path: ${JSON.stringify(router)}`);
    const renderItems = ()=>{
        let { items  } = cart;
        console.log(`items: ${JSON.stringify(items)}`);
        if (cart.items.length > 0) {
            var itemList = cart.items.map((item)=>{
                if (item.quantity > 0) {
                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "items-one",
                        style: {
                            marginBottom: 15
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        id: "item-price",
                                        children: [
                                            "\xa0 $",
                                            item.price / 100
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        id: "item-name",
                                        children: [
                                            "\xa0 ",
                                            item.name
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                        style: {
                                            height: 25,
                                            padding: 0,
                                            width: 15,
                                            marginRight: 5,
                                            marginLeft: 10
                                        },
                                        onClick: ()=>addItem(item)
                                        ,
                                        color: "link",
                                        children: "+"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                        style: {
                                            height: 25,
                                            padding: 0,
                                            width: 15,
                                            marginRight: 10
                                        },
                                        onClick: ()=>removeItem(item)
                                        ,
                                        color: "link",
                                        children: "-"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        style: {
                                            marginLeft: 5
                                        },
                                        id: "item-quantity",
                                        children: [
                                            item.quantity,
                                            "x"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }, item.name));
                }
            });
            return itemList;
        } else {
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}));
        }
    };
    const checkoutItems = ()=>{
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Badge, {
                    bg: "success",
                    style: {
                        width: "100%",
                        padding: 10,
                        marginBottom: "1rem"
                    },
                    color: "success",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            style: {
                                fontWeight: 100
                            },
                            children: "Total:"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                            children: [
                                "$",
                                cart.total / 100
                            ]
                        }),
                        console.log("TOTAL"),
                        console.log(cart.total)
                    ]
                }),
                isAuthenticated ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    href: "/checkout/",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
                        style: {
                            width: "100%"
                        },
                        color: "primary",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                children: "Order"
                            })
                        })
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    href: "/login",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
                        style: {
                            width: "100%"
                        },
                        color: "primary",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Login to place your order"
                            })
                        })
                    })
                })
            ]
        }));
    };
    // return Cart
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-73886ce4ede8a5f5",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "jsx-73886ce4ede8a5f5",
                children: " Cart"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Card, {
                style: {
                    padding: "10px 5px"
                },
                className: "cart",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.CardTitle, {
                        style: {
                            margin: 10
                        },
                        children: "Your Order:"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                        className: "jsx-73886ce4ede8a5f5"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.CardBody, {
                        style: {
                            padding: 10
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    marginBottom: 6
                                },
                                className: "jsx-73886ce4ede8a5f5",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                    className: "jsx-73886ce4ede8a5f5",
                                    children: "Items:"
                                })
                            }),
                            cart.items.length ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-73886ce4ede8a5f5",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-73886ce4ede8a5f5",
                                        children: renderItems()
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Badge, {
                                        bg: "secondary",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-73886ce4ede8a5f5",
                                                children: [
                                                    "Tax $",
                                                    (cart.total * 0.04 / 100).toFixed(2)
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-73886ce4ede8a5f5",
                                                children: [
                                                    "Service fee $",
                                                    (cart.total * 0.08 / 100).toFixed(2)
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-73886ce4ede8a5f5",
                                        children: checkoutItems()
                                    })
                                ]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "jsx-73886ce4ede8a5f5",
                                children: "Start adding items to your cart"
                            }),
                            console.log(`Router Path: ${router.asPath}`)
                        ]
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "73886ce4ede8a5f5",
                children: "#item-price.jsx-73886ce4ede8a5f5{font-size:1.3em;\ncolor:rgba(97, 97, 97, 1)}\n#item-quantity.jsx-73886ce4ede8a5f5{font-size:0.95em;\npadding-bottom:4px;\ncolor:rgba(158, 158, 158, 1)}\n#item-name.jsx-73886ce4ede8a5f5{font-size:1.3em;\ncolor:rgba(97, 97, 97, 1)}"
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);


/***/ })

};
;