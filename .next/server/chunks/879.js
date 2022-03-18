"use strict";
exports.id = 879;
exports.ids = [879];
exports.modules = {

/***/ 2469:
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6981);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9707);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4394);


/* /components/Layout.js */ 





const Layout = ()=>{
    const title = "Thomasville Foodie";
    let { user , isAuthenticated  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        /*#__PURE__*/ children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "stylesheet",
                        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
                        integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
                        crossOrigin: "anonymous"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        src: "https://js.stripe.com/v3"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                className: "jsx-5b30719cc49bb656",
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                        id: "5b30719cc49bb656",
                        children: "a.jsx-5b30719cc49bb656{color:white}\nh5.jsx-5b30719cc49bb656{color:white;\npadding-top:11px}"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Nav, {
                        className: "navbar navbar-dark bg-dark justify-content-end",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavItem, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                    href: "/",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "jsx-5b30719cc49bb656" + " " + "navbar-brand",
                                        children: "Home"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavItem, {
                                children: isAuthenticated ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                    href: "/profile",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "jsx-5b30719cc49bb656" + " " + "nav-link",
                                        children: " Settings "
                                    })
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                    href: "/register",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "jsx-5b30719cc49bb656" + " " + "nav-link",
                                        children: " Sign up! "
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavItem, {
                                children: isAuthenticated ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                    href: "/",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        onClick: ()=>{
                                            (0,_components_auth__WEBPACK_IMPORTED_MODULE_6__/* .logout */ .kS)();
                                            _context__WEBPACK_IMPORTED_MODULE_7__/* ["default"].setUser */ .Z.setUser(null);
                                        },
                                        className: "jsx-5b30719cc49bb656" + " " + "nav-link",
                                        children: "Logout"
                                    })
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                    href: "/login",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "jsx-5b30719cc49bb656" + " " + "nav-link",
                                        children: "Sign in "
                                    })
                                })
                            }),
                            isAuthenticated ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Badge, {
                                pill: true,
                                bg: "primary",
                                children: [
                                    "Hey, ",
                                    user.username
                                ]
                            }) : ""
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Container, {})
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);


/***/ }),

/***/ 5879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/cart.js
var cart = __webpack_require__(8851);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: ./components/dishes.js
var dishes = __webpack_require__(4718);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/context.js
var context = __webpack_require__(4394);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6981);
;// CONCATENATED MODULE: ./components/restaurantList.js







function RestaurantList(props) {
    const { cart , setRestID , restID  } = (0,external_react_.useContext)(context/* default */.Z);
    const { /*#__PURE__*/ 0: restaurantID1 , 1: setRestaurantID  } = (0,external_react_.useState)(restID);
    const { 0: state , 1: setState  } = (0,external_react_.useState)(cart);
    const router = (0,router_.useRouter)();
    const GET_RESTAURANTS = client_.gql`
    query {
      restaurants {
        data {
          id
          attributes {
            name
            description
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  `;
    const { loading , error , data  } = (0,client_.useQuery)(GET_RESTAURANTS);
    if (loading) return(/*#__PURE__*/ jsx_runtime_.jsx("p", {
        children: "Loading..."
    }));
    if (error) return(/*#__PURE__*/ jsx_runtime_.jsx("p", {
        children: "ERROR"
    }));
    if (!data) return(/*#__PURE__*/ jsx_runtime_.jsx("p", {
        children: "Not found"
    }));
    console.log(`Query Data: ${data.restaurants}`);
    let searchQuery = data.restaurants.data.filter((res)=>{
        return res.attributes.name.toLowerCase().includes(props.search);
    });
    let restId = searchQuery[0].id;
    // definet renderer for Dishes
    const renderDishes = (restaurantID)=>{
        return(/*#__PURE__*/ jsx_runtime_.jsx(dishes/* default */.Z, {
            restId: restaurantID,
            children: " "
        }));
    };
    const applyRestID = (ID, name)=>{
        setRestID(ID, name);
        let path = searchQuery[ID - 1].attributes.name;
        path = path.split(" ").join("");
        router.push(`/restaurants/${path}`);
    };
    if (searchQuery.length > 0) {
        const restList = searchQuery.map((res)=>/*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                sm: "4",
                medium: "6",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Card, {
                    style: {
                        marginTop: "1em",
                        height: "30rem"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.CardTitle, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: res.attributes.name
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.CardImg, {
                            top: true,
                            style: {
                                height: "auto"
                            },
                            src: `https://foodiedb.battlegroundls.com` + res.attributes.image.data.attributes.url
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.CardBody, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.CardText, {
                                children: res.attributes.description
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "card-footer",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Button, {
                                size: "sm",
                                color: "info",
                                onClick: ()=>applyRestID(res.id, res.attributes.name)
                                ,
                                children: res.attributes.name
                            })
                        })
                    ]
                })
            }, res.id)
        );
        return(/*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                sm: "3",
                children: restList
            })
        }));
    } else {
        return(/*#__PURE__*/ jsx_runtime_.jsx("h1", {
            children: " No Restaurants Found"
        }));
    }
}
/* harmony default export */ const restaurantList = (RestaurantList);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/layout.js
var layout = __webpack_require__(2469);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6734);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
;// CONCATENATED MODULE: ./pages/index.js










function Home() {
    const { 0: query , 1: setQuery  } = (0,external_react_.useState)("");
    /*   const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
  console.log(`URL: ${API_URL}`);
  const link = new HttpLink({ uri: `${API_URL}/graphql` });
  const cache = new InMemoryCache();
  const client = new ApolloClient({ link, cache }); */ const token = external_js_cookie_default().get("token");
    console.log(`Token: ${token}`);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "search",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: " Thomasville Foodie"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.InputGroup, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.InputGroupAddon, {
                                        addonType: "append",
                                        children: " Search "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Input, {
                                        onChange: (e)=>setQuery(e.target.value.toLocaleLowerCase())
                                        ,
                                        value: query
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                xs: "4",
                                sm: "9",
                                style: {
                                    padding: 0
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(restaurantList, {
                                    search: query
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                xs: "4",
                                sm: "3",
                                style: {
                                    padding: 0
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(cart/* default */.Z, {
                                    children: " "
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const pages = (Home);


/***/ })

};
;