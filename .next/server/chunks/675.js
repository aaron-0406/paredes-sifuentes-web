"use strict";
exports.id = 675;
exports.ids = [675];
exports.modules = {

/***/ 3675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const CallToAction = ({ title ="\xbfTienes un caso legal?" , subtitle ="Agenda tu consulta y recibe orientaci\xf3n profesional" , buttonText ="Agenda tu consulta" , variant ="light" // "light" o "dark"
  })=>{
    const whatsappLink = "https://api.whatsapp.com/send/?phone=51952163269&text=Hola%2C+quiero+agendar+una+consulta&type=phone_number&app_absent=0";
    const styles = {
        light: {
            background: "#F0ECE1",
            title: "#60202C",
            subtitle: "#60202C",
            button: {
                background: "#60202C",
                color: "#F0ECE1",
                border: "none"
            }
        },
        dark: {
            background: "#60202C",
            title: "#F0ECE1",
            subtitle: "#D4C4AD",
            button: {
                background: "#B5844F",
                color: "#F0ECE1",
                border: "none"
            }
        }
    };
    const currentStyle = styles[variant] || styles.light;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "call-to-action",
        style: {
            background: currentStyle.background,
            padding: "70px 0",
            textAlign: "center"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row justify-content-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-lg-10",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "playfont wow fadeInUp",
                            "data-wow-delay": ".3s",
                            style: {
                                color: currentStyle.title,
                                marginBottom: "15px",
                                fontSize: "32px"
                            },
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "wow fadeInUp",
                            "data-wow-delay": ".4s",
                            style: {
                                color: currentStyle.subtitle,
                                marginBottom: "35px",
                                fontSize: "17px"
                            },
                            children: subtitle
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            href: whatsappLink,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "cta-button wow fadeInUp",
                            "data-wow-delay": ".5s",
                            style: {
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "12px",
                                padding: "18px 50px",
                                fontSize: "16px",
                                fontWeight: "600",
                                textTransform: "uppercase",
                                letterSpacing: "1.5px",
                                borderRadius: "6px",
                                transition: "all 0.3s ease",
                                textDecoration: "none",
                                ...currentStyle.button
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.transform = "scale(1.05)";
                                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.2)";
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.transform = "scale(1)";
                                e.currentTarget.style.boxShadow = "none";
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fab fa-whatsapp",
                                    style: {
                                        fontSize: "22px"
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: buttonText
                                })
                            ]
                        })
                    ]
                })
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CallToAction);


/***/ })

};
;