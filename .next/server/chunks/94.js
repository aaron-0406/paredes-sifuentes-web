"use strict";
exports.id = 94;
exports.ids = [94];
exports.modules = {

/***/ 1094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const TrustIndicators = ()=>{
    const stats = [
        {
            number: "352",
            prefix: "+",
            label: "Casos resueltos"
        },
        {
            number: "567",
            prefix: "+",
            label: "Clientes satisfechos"
        },
        {
            number: "6",
            prefix: "",
            label: "A\xf1os de experiencia"
        },
        {
            number: "4",
            prefix: "",
            label: "Ciudades"
        }, 
    ];
    const testimonials = [
        {
            text: "Gracias a Paredes Sifuentes pude regularizar la compra de mi departamento. Me guiaron en todo el proceso.",
            author: "Carlos M.",
            location: "Trujillo"
        },
        {
            text: "Confiamos en Paredes Sifuentes para la constituci\xf3n de nuestra empresa. Acompa\xf1amiento completo y transparente.",
            author: "Mar\xeda L.",
            location: "Chimbote"
        },
        {
            text: "El equipo me explic\xf3 con claridad mis opciones y logramos un r\xe9gimen de visitas justo para mis hijos.",
            author: "Roberto G.",
            location: "Trujillo"
        },
        {
            text: "Recuper\xe9 mi terreno gracias a su experiencia. Actuaron con rapidez y lograron el desalojo en tiempo r\xe9cord.",
            author: "Ana P.",
            location: "Huarmey"
        }, 
    ];
    const { 0: currentTestimonial , 1: setCurrentTestimonial  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const interval = setInterval(()=>{
            setCurrentTestimonial((prev)=>(prev + 1) % testimonials.length
            );
        }, 5000);
        return ()=>clearInterval(interval)
        ;
    }, [
        testimonials.length
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        style: {
            padding: "60px 0",
            background: "#fff"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "stats-row wow fadeInUp",
                    "data-wow-delay": ".2s",
                    style: {
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: "20px",
                        marginBottom: "50px",
                        paddingBottom: "40px",
                        borderBottom: "1px solid #D4C4AD"
                    },
                    children: stats.map((stat, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                textAlign: "center",
                                padding: "0 30px",
                                borderRight: index < stats.length - 1 ? "1px solid #D4C4AD" : "none"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "baseline",
                                        justifyContent: "center",
                                        marginBottom: "5px"
                                    },
                                    children: [
                                        stat.prefix && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            style: {
                                                color: "#B5844F",
                                                fontSize: "24px",
                                                fontWeight: "600"
                                            },
                                            children: stat.prefix
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "playfont",
                                            style: {
                                                color: "#60202C",
                                                fontSize: "42px",
                                                fontWeight: "600",
                                                lineHeight: "1"
                                            },
                                            children: stat.number
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    style: {
                                        color: "#666",
                                        fontSize: "12px",
                                        textTransform: "uppercase",
                                        letterSpacing: "1px"
                                    },
                                    children: stat.label
                                })
                            ]
                        }, index)
                    )
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "testimonial-mini wow fadeInUp",
                    "data-wow-delay": ".4s",
                    style: {
                        textAlign: "center",
                        maxWidth: "700px",
                        margin: "0 auto",
                        position: "relative",
                        minHeight: "120px"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fas fa-quote-left",
                            style: {
                                color: "#D4C4AD",
                                fontSize: "24px",
                                marginBottom: "15px",
                                display: "block"
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                position: "relative",
                                overflow: "hidden"
                            },
                            children: testimonials.map((testimonial, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        opacity: currentTestimonial === index ? 1 : 0,
                                        transform: currentTestimonial === index ? "translateY(0)" : "translateY(20px)",
                                        transition: "all 0.5s ease",
                                        position: currentTestimonial === index ? "relative" : "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            style: {
                                                color: "#444",
                                                fontSize: "18px",
                                                fontStyle: "italic",
                                                lineHeight: "1.7",
                                                marginBottom: "20px"
                                            },
                                            children: [
                                                "“",
                                                testimonial.text,
                                                "”"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            style: {
                                                color: "#60202C",
                                                fontSize: "14px",
                                                fontWeight: "600"
                                            },
                                            children: [
                                                "— ",
                                                testimonial.author,
                                                ",",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    style: {
                                                        color: "#B5844F"
                                                    },
                                                    children: testimonial.location
                                                })
                                            ]
                                        })
                                    ]
                                }, index)
                            )
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                display: "flex",
                                justifyContent: "center",
                                gap: "8px",
                                marginTop: "25px"
                            },
                            children: testimonials.map((_, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>setCurrentTestimonial(index)
                                    ,
                                    style: {
                                        width: currentTestimonial === index ? "24px" : "8px",
                                        height: "8px",
                                        borderRadius: "4px",
                                        background: currentTestimonial === index ? "#B5844F" : "#D4C4AD",
                                        border: "none",
                                        cursor: "pointer",
                                        transition: "all 0.3s ease"
                                    }
                                }, index)
                            )
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrustIndicators);


/***/ })

};
;