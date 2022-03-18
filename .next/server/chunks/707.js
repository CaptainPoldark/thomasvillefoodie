"use strict";
exports.id = 707;
exports.ids = [707];
exports.modules = {

/***/ 9707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a$": () => (/* binding */ registerUser),
/* harmony export */   "x4": () => (/* binding */ login),
/* harmony export */   "kS": () => (/* binding */ logout)
/* harmony export */ });
/* unused harmony export withAuthSync */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6734);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);

/* /lib/auth.js */ 



const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://foodiedb.battlegroundls.com";
//register a new user
const registerUser = (username, email, password)=>{
    //prevent function from being ran on the server
    if (true) {
        return;
    }
    return new Promise((resolve, reject)=>{
        axios__WEBPACK_IMPORTED_MODULE_4___default().post(`${API_URL}/api/auth/local/register`, {
            username,
            email,
            password
        }).then((res)=>{
            //set token response from Strapi for server validation
            //Cookie.set("token", res.data.jwt);
            //resolve the promise to set loading to false in SignUp form
            resolve(res);
        //redirect back to home page for restaurance selection
        }).catch((error)=>{
            //reject the promise and pass the error object back to the form
            reject(error);
        });
    });
};
const login = (identifier, password)=>{
    //prevent function from being ran on the server
    if (true) {
        return;
    }
    return new Promise((resolve, reject)=>{
        axios__WEBPACK_IMPORTED_MODULE_4___default().post(`${API_URL}/api/auth/local`, {
            identifier,
            password
        }).then((res)=>{
            //set token response from Strapi for server validation
            js_cookie__WEBPACK_IMPORTED_MODULE_3___default().set("token", res.data.jwt);
            //resolve the promise to set loading to false in SignUp form
            resolve(res);
            //redirect back to home page for restaurance selection
            next_router__WEBPACK_IMPORTED_MODULE_2___default().push("/");
        }).catch((error)=>{
            //reject the promise and pass the error object back to the form
            reject(error);
        });
    });
};
const logout = ()=>{
    //remove token and user cookie
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default().remove("token");
    delete window.__user;
    // sync logout between multiple windows
    window.localStorage.setItem("logout", Date.now());
    //redirect to the home page
    next_router__WEBPACK_IMPORTED_MODULE_2___default().push("/");
};
//Higher Order Component to wrap our pages and logout simultaneously logged in tabs
// THIS IS NOT USED in the tutorial, only provided if you wanted to implement
const withAuthSync = (Component)=>{
    const Wrapper = (props)=>{
        const syncLogout = (event)=>{
            if (event.key === "logout") {
                Router.push("/login");
            }
        };
        useEffect(()=>{
            window.addEventListener("storage", syncLogout);
            return ()=>{
                window.removeEventListener("storage", syncLogout);
                window.localStorage.removeItem("logout");
            };
        }, []);
        return(/*#__PURE__*/ _jsx(Component, {
            ...props
        }));
    };
    if (Component.getInitialProps) {
        Wrapper.getInitialProps = Component.getInitialProps;
    }
    return Wrapper;
};


/***/ })

};
;