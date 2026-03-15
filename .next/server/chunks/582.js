"use strict";
exports.id = 582;
exports.ids = [582];
exports.modules = {

/***/ 5850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const removeSlashFromPagination = ()=>{
    let swiperPagination = document.querySelector(".swiper-pagination");
    if (swiperPagination) {
        swiperPagination.innerHTML = swiperPagination.innerHTML.replace(" / ", "");
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeSlashFromPagination);


/***/ }),

/***/ 3006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ About_Us1)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/about-us1.json
const about_us1_namespaceObject = JSON.parse('{"TN":{"P":"Cada caso es único.","E":"Nuestra defensa también."},"BH":"/assets/img/exp.jpg","kQ":"Sabemos que un problema legal no es solo un trámite, es una preocupación real. Por eso te ofrecemos una defensa responsable, cercana y personalizada, con el compromiso de proteger tus derechos y tu tranquilidad.","Qq":{"r":6,"l":2019}}');
;// CONCATENATED MODULE: ./src/components/About-Us1/index.jsx



const AboutUs1 = ()=>{
    const stats = [
        {
            id: 1,
            number: "352",
            label: "Casos resueltos",
            prefix: "+"
        },
        {
            id: 2,
            number: "567",
            label: "Clientes",
            prefix: "+"
        },
        {
            id: 3,
            number: "6",
            label: "A\xf1os",
            prefix: ""
        }, 
    ];
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "about section-padding",
        style: {
            background: "#F0ECE1"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row align-items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-5 mb-4 mb-lg-0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "exp-img wow fadeInUp",
                            "data-wow-delay": ".3s",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "img bg-img wow imago",
                                style: {
                                    backgroundImage: `url(${about_us1_namespaceObject.BH})`
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "since playfont",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "DESDE"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: about_us1_namespaceObject.Qq.l
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "years playfont",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                children: about_us1_namespaceObject.Qq.r
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                children: "A\xf1os de experiencia"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-7",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "exp-content wow fadeInUp",
                            "data-wow-delay": ".5s",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    style: {
                                        color: "#B5844F",
                                        fontSize: "13px",
                                        letterSpacing: "2px",
                                        marginBottom: "15px"
                                    },
                                    children: "SOBRE NOSOTROS"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                    className: "playfont",
                                    style: {
                                        color: "#60202C",
                                        fontSize: "36px",
                                        lineHeight: "1.3",
                                        marginBottom: "20px"
                                    },
                                    children: [
                                        about_us1_namespaceObject.TN.P,
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                        }),
                                        " ",
                                        about_us1_namespaceObject.TN.E
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        color: "#555",
                                        fontSize: "16px",
                                        lineHeight: "1.8"
                                    },
                                    children: about_us1_namespaceObject.kQ
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "stats-row mt-40",
                                    style: {
                                        display: "flex",
                                        gap: "0",
                                        borderTop: "1px solid #D4C4AD",
                                        paddingTop: "30px"
                                    },
                                    children: stats.map((stat, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            style: {
                                                flex: "1",
                                                textAlign: "center",
                                                paddingRight: index < stats.length - 1 ? "20px" : "0",
                                                marginRight: index < stats.length - 1 ? "20px" : "0",
                                                borderRight: index < stats.length - 1 ? "1px solid #D4C4AD" : "none"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "baseline",
                                                        justifyContent: "center",
                                                        gap: "2px",
                                                        marginBottom: "5px"
                                                    },
                                                    children: [
                                                        stat.prefix && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            style: {
                                                                fontSize: "18px",
                                                                color: "#B5844F"
                                                            },
                                                            children: stat.prefix
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "playfont",
                                                            style: {
                                                                fontSize: "42px",
                                                                fontWeight: "400",
                                                                color: "#60202C",
                                                                lineHeight: "1"
                                                            },
                                                            children: stat.number
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    style: {
                                                        fontSize: "11px",
                                                        color: "#888",
                                                        textTransform: "uppercase",
                                                        letterSpacing: "1.5px",
                                                        margin: 0
                                                    },
                                                    children: stat.label
                                                })
                                            ]
                                        }, stat.id)
                                    )
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const About_Us1 = (AboutUs1);


/***/ }),

/***/ 6976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);



const HomeServices = ()=>{
    const services = [
        {
            id: 1,
            icon: "pe-7s-home",
            title: "Derecho Inmobiliario",
            description: "Compra-venta, arrendamientos, prescripci\xf3n y protecci\xf3n registral.",
            slug: "derecho-inmobiliario",
            image: "/assets/img/blog/1.jpg",
            featured: true
        },
        {
            id: 2,
            icon: "pe-7s-shield",
            title: "Seguro de Desalojo",
            description: "Recuperaci\xf3n de inmuebles y protecci\xf3n frente a inquilinos morosos.",
            slug: "seguro-de-desalojo",
            image: "/assets/img/blog/2.jpg",
            featured: false
        },
        {
            id: 3,
            icon: "pe-7s-wallet",
            title: "Derecho Empresarial",
            description: "Constituci\xf3n, gobierno societario y transformaciones de empresas.",
            slug: "derecho-empresarial",
            image: "/assets/img/blog/4.jpg",
            featured: false
        },
        {
            id: 4,
            icon: "pe-7s-users",
            title: "Derecho de Sucesiones",
            description: "Herencias, testamentos, anticipos de leg\xedtima y partici\xf3n.",
            slug: "derecho-de-sucesiones",
            image: "/assets/img/blog/5.jpg",
            featured: true
        },
        {
            id: 5,
            icon: "pe-7s-hammer",
            title: "Litigios Civiles",
            description: "Familia, propiedad, posesi\xf3n y recuperaci\xf3n de capital.",
            slug: "litigios-civiles-y-prevencion",
            image: "/assets/img/blog/6.jpg",
            featured: false
        },
        {
            id: 6,
            icon: "pe-7s-display1",
            title: "Inversiones Inmobiliarias",
            description: "Remates judiciales, flipping y cesi\xf3n de derechos.",
            slug: "inversiones-inmobiliarias",
            image: "/assets/img/blog/8.jpg",
            featured: false
        }, 
    ];
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        style: {
            background: "#fff",
            padding: "80px 0"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row justify-content-center mb-5",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-lg-8 text-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "wow fadeInDown",
                                "data-wow-delay": ".2s",
                                style: {
                                    color: "#B5844F",
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    letterSpacing: "3px",
                                    textTransform: "uppercase",
                                    marginBottom: "15px",
                                    display: "block"
                                },
                                children: "\xc1reas de pr\xe1ctica"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "playfont wow fadeInUp",
                                "data-wow-delay": ".3s",
                                style: {
                                    color: "#60202C",
                                    fontSize: "42px",
                                    fontWeight: "700",
                                    marginBottom: "20px",
                                    lineHeight: "1.2"
                                },
                                children: "\xbfEn qu\xe9 podemos ayudarte?"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: services.map((service, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `${service.featured ? "col-lg-6" : "col-lg-3"} col-md-6 mb-4 wow fadeInUp`,
                            "data-wow-delay": `${0.2 + index * 0.1}s`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                href: `/servicios/${service.slug}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    style: {
                                        textDecoration: "none",
                                        display: "block",
                                        height: "100%"
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "home-service-card",
                                        style: {
                                            position: "relative",
                                            height: "300px",
                                            borderRadius: "8px",
                                            overflow: "hidden",
                                            cursor: "pointer"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "home-service-bg",
                                                style: {
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    backgroundImage: `url(${service.image})`,
                                                    backgroundSize: "cover",
                                                    backgroundPosition: "center",
                                                    transition: "transform 0.5s ease"
                                                }
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    background: "linear-gradient(to top, rgba(96, 32, 44, 0.7) 0%, rgba(96, 32, 44, 0.15) 50%, rgba(0, 0, 0, 0) 100%)",
                                                    transition: "all 0.3s ease"
                                                }
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                style: {
                                                    position: "absolute",
                                                    bottom: 0,
                                                    left: 0,
                                                    right: 0,
                                                    padding: "25px",
                                                    zIndex: 2
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: service.icon,
                                                        style: {
                                                            fontSize: "36px",
                                                            color: "#B5844F",
                                                            marginBottom: "15px",
                                                            display: "block"
                                                        }
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                        style: {
                                                            color: "#fff",
                                                            fontSize: service.featured ? "24px" : "20px",
                                                            fontWeight: "600",
                                                            marginBottom: "10px",
                                                            lineHeight: "1.3"
                                                        },
                                                        children: service.title
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        style: {
                                                            color: "#fff",
                                                            fontSize: "14px",
                                                            lineHeight: "1.6",
                                                            marginBottom: "15px",
                                                            opacity: 0.85
                                                        },
                                                        children: service.description
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        style: {
                                                            color: "#B5844F",
                                                            fontSize: "13px",
                                                            fontWeight: "600",
                                                            display: "inline-flex",
                                                            alignItems: "center",
                                                            gap: "5px",
                                                            textTransform: "uppercase",
                                                            letterSpacing: "1px"
                                                        },
                                                        children: [
                                                            "Ver m\xe1s",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "pe-7s-angle-right",
                                                                style: {
                                                                    fontSize: "20px"
                                                                }
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "home-service-border",
                                                style: {
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    border: "3px solid transparent",
                                                    borderRadius: "8px",
                                                    transition: "border-color 0.3s ease",
                                                    pointerEvents: "none"
                                                }
                                            })
                                        ]
                                    })
                                })
                            })
                        }, service.id)
                    )
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center mt-4 wow fadeInUp",
                    "data-wow-delay": ".6s",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/servicios",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            style: {
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "10px",
                                padding: "15px 35px",
                                background: "#60202C",
                                color: "#F0ECE1",
                                fontSize: "14px",
                                fontWeight: "500",
                                letterSpacing: "1px",
                                textTransform: "uppercase",
                                textDecoration: "none",
                                borderRadius: "4px",
                                transition: "all 0.3s ease"
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.background = "#B5844F";
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.background = "#60202C";
                            },
                            children: [
                                "Ver todos los servicios",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "pe-7s-angle-right",
                                    style: {
                                        fontSize: "20px"
                                    }
                                })
                            ]
                        })
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeServices);


/***/ }),

/***/ 311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const InstagramFeed = ({ elfsightAppId  })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Cargar script de Elfsight solo una vez
        const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
        if (!existingScript) {
            const script = document.createElement("script");
            script.src = "https://elfsightcdn.com/platform.js";
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "instagram-feed section-padding",
        style: {
            background: "#fff"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "section-head text-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-lg-6 col-md-8 col-sm-10",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    className: "wow fadeInDown",
                                    "data-wow-delay": ".3s",
                                    style: {
                                        color: "#B5844F"
                                    },
                                    children: "S\xcdGUENOS"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    className: "playfont wow flipInX",
                                    "data-wow-delay": ".5s",
                                    style: {
                                        color: "#60202C"
                                    },
                                    children: "@paredes.sifuentes"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `elfsight-app-${elfsightAppId}`,
                            "data-elfsight-app-lazy": true
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center mt-40",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: "https://www.instagram.com/paredes.sifuentes",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "btn-curve",
                        style: {
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "10px",
                            padding: "12px 28px",
                            backgroundColor: "#60202C",
                            color: "#F0ECE1",
                            borderRadius: "4px",
                            fontSize: "14px",
                            fontWeight: "500",
                            textTransform: "uppercase",
                            letterSpacing: "1px"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fab fa-instagram",
                                style: {
                                    fontSize: "18px"
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Ver m\xe1s en Instagram"
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstagramFeed);


/***/ }),

/***/ 6429:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_Intro_with_horizontal_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3614);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8636);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3877);
/* harmony import */ var _common_removeSlashFromPagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5850);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_6__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);











swiper__WEBPACK_IMPORTED_MODULE_6__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_6__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_6__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_6__.Parallax
]);
const IntroWithHorizontal = ()=>{
    const [load, setLoad] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        setTimeout(()=>{
            setLoad(false);
        });
        setTimeout(()=>{
            (0,_common_removeSlashFromPagination__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
        }, 1000);
    }, []);
    const navigationPrevRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const navigationNextRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const paginationRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: "slider",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "swiper-container parallax-slider",
            children: [
                !load ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                    speed: 1000,
                    parallax: true,
                    navigation: {
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current
                    },
                    pagination: {
                        type: "fraction",
                        clickable: true,
                        el: paginationRef.current
                    },
                    onBeforeInit: (swiper)=>{
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                        swiper.params.pagination.el = paginationRef.current;
                    },
                    onSwiper: (swiper)=>{
                        setTimeout(()=>{
                            for(var i = 0; i < swiper.slides.length; i++){
                                swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.width);
                            }
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                            swiper.params.pagination.el = paginationRef.current;
                            swiper.navigation.destroy();
                            swiper.navigation.init();
                            swiper.navigation.update();
                            swiper.pagination.destroy();
                            swiper.pagination.init();
                            swiper.pagination.update();
                        });
                    },
                    className: "swiper-wrapper",
                    slidesPerView: 1,
                    children: _data_Intro_with_horizontal_json__WEBPACK_IMPORTED_MODULE_2__.map((slide)=>{
                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                            className: "swiper-slide",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "bg-img valign",
                                style: {
                                    backgroundImage: `url(${slide.image})`,
                                    animation: "zoomBg 18s ease-in-out infinite alternate"
                                },
                                "data-overlay-dark": "4",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "container",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "row",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-lg-8 col-md-10",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "caption hmone mt-100",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                        className: "thin",
                                                        children: slide.title.first
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Split__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                            "data-splitting": true,
                                                            className: "words chars splitting",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                                href: "#",
                                                                children: slide.title.second
                                                            })
                                                        })
                                                    }),
                                                    (slide === null || slide === void 0 ? void 0 : slide.content) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "mt-10",
                                                                children: slide.content.first
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "ls2 fz-15",
                                                                children: slide.content.second
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "d-flex flex-wrap gap-3 mt-30",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                href: "https://api.whatsapp.com/send/?phone=51952163269&text=Hola%2C+quiero+una+consulta+legal&type=phone_number&app_absent=0",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "btn-curve",
                                                                style: {
                                                                    display: "inline-flex",
                                                                    alignItems: "center",
                                                                    gap: "8px",
                                                                    backgroundColor: "#B5844F",
                                                                    borderColor: "#B5844F",
                                                                    color: "#fff"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fab fa-whatsapp"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: "CONSULTA"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                                href: "/servicios",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    className: "btn-curve btn-bord btn-lit",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: "Ver servicios"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            })
                        }, slide.id));
                    })
                }) : null,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "setone",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            ref: navigationNextRef,
                            className: "swiper-button-next swiper-nav-ctrl next-ctrl",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fas fa-chevron-right"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            ref: navigationPrevRef,
                            className: "swiper-button-prev swiper-nav-ctrl prev-ctrl",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fas fa-chevron-left"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    ref: paginationRef,
                    className: "swiper-pagination top playfont"
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntroWithHorizontal);

});

/***/ }),

/***/ 8636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class Split extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    target = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
    split = ()=>{
        if (this.target.current) {
            Splitting({
                target: this.target.current
            });
        }
    };
    componentDidMount = this.split;
    componentDidUpdate = this.split;
    render() {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ref: this.target,
            children: this.props.children
        }));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Split);


/***/ }),

/***/ 8551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const WhyChooseUs = ()=>{
    const reasons = [
        {
            id: 1,
            icon: "pe-7s-clock",
            title: "Respuesta r\xe1pida",
            description: "Respondemos en minutos. Tu tiempo es valioso y lo sabemos."
        },
        {
            id: 2,
            icon: "pe-7s-users",
            title: "Atenci\xf3n personalizada",
            description: "Cada caso es \xfanico. Te escuchamos y dise\xf1amos una estrategia a tu medida."
        },
        {
            id: 3,
            icon: "pe-7s-map-marker",
            title: "Cobertura nacional",
            description: "Presencia en Trujillo, Lima, Chimbote y Huarmey. Atenci\xf3n virtual en todo el Per\xfa."
        }, 
    ];
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "why-choose-us section-padding",
        style: {
            background: "#F0ECE1"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "section-head text-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-lg-6 col-md-8 col-sm-10",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    className: "wow fadeInDown",
                                    "data-wow-delay": ".3s",
                                    style: {
                                        color: "#B5844F"
                                    },
                                    children: "NUESTRAS VENTAJAS"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    className: "playfont wow flipInX",
                                    "data-wow-delay": ".5s",
                                    style: {
                                        color: "#60202C"
                                    },
                                    children: "\xbfPor qu\xe9 elegirnos?"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: reasons.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-4 col-md-6 wow fadeInUp",
                            "data-wow-delay": `${0.2 + index * 0.1}s`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "item-box",
                                style: {
                                    padding: "30px",
                                    marginBottom: "30px",
                                    background: "#fff",
                                    borderRadius: "8px",
                                    boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
                                    transition: "all 0.3s ease",
                                    borderBottom: "3px solid transparent"
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.borderBottomColor = "#B5844F";
                                    e.currentTarget.style.transform = "translateY(-5px)";
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.borderBottomColor = "transparent";
                                    e.currentTarget.style.transform = "translateY(0)";
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: item.icon,
                                        style: {
                                            fontSize: "40px",
                                            color: "#B5844F",
                                            marginBottom: "20px",
                                            display: "block"
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        style: {
                                            color: "#60202C",
                                            marginBottom: "10px",
                                            fontSize: "18px",
                                            fontWeight: "600"
                                        },
                                        children: item.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        style: {
                                            color: "#666",
                                            fontSize: "14px",
                                            lineHeight: "1.7",
                                            margin: 0
                                        },
                                        children: item.description
                                    })
                                ]
                            })
                        }, item.id)
                    )
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WhyChooseUs);


/***/ }),

/***/ 7582:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_About_Us1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3006);
/* harmony import */ var _components_Intro_with_horizontal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6429);
/* harmony import */ var _layouts_light__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6172);
/* harmony import */ var _components_HomeServices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6976);
/* harmony import */ var _components_Process__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9593);
/* harmony import */ var _components_CallToAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3675);
/* harmony import */ var _components_WhyChooseUs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8551);
/* harmony import */ var _components_InstagramFeed__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(311);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Intro_with_horizontal__WEBPACK_IMPORTED_MODULE_4__]);
_components_Intro_with_horizontal__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

/* eslint-disable @next/next/no-img-element */ 









const Home1 = ()=>{
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        document.querySelector("body").classList.add("homepage");
    }, []);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_light__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        footerClass: "mt-30",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Paredes Sifuentes Abogados | Derecho Inmobiliario en Trujillo, Per\xfa"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Abogados en Trujillo especializados en derecho inmobiliario, empresarial y sucesiones. +350 casos resueltos. Consulta tu caso hoy."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "canonical",
                        href: "https://www.paredesifuentes.com/"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: "Paredes Sifuentes Abogados | Derecho Inmobiliario en Trujillo"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:url",
                        content: "https://www.paredesifuentes.com/"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Intro_with_horizontal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_About_Us1__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_WhyChooseUs__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CallToAction__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                title: "\xbfNecesitas asesor\xeda legal?",
                subtitle: "Cu\xe9ntanos tu caso y te orientamos sin compromiso",
                buttonText: "Habla con un abogado",
                variant: "dark"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Process__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_HomeServices__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_InstagramFeed__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                elfsightAppId: "daba3e81-5b11-46df-bcc2-7215403c8b9a"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CallToAction__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                title: "\xbfListo para proteger tus derechos?",
                subtitle: "Nuestro equipo est\xe1 preparado para ayudarte",
                buttonText: "Cont\xe1ctanos ahora",
                variant: "dark"
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home1);

});

/***/ }),

/***/ 3614:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"title":{"first":"Especialistas en","second":"Derecho Inmobiliario"},"content":{"first":"Protegemos tu propiedad y patrimonio con asesoría legal experta.","second":"Compra-venta, arrendamientos, desalojos, sucesiones y más."},"image":"/assets/img/slid/n/1.jpg"},{"id":2,"title":{"first":"¿Problemas con","second":"tu propiedad?"},"content":{"first":"Resolvemos conflictos inmobiliarios, herencias y litigios.","second":"Más de 350 casos resueltos. Atención en todo el Perú."},"image":"/assets/img/slid/n/2.jpg"},{"id":3,"title":{"first":"Consulta sin","second":"compromiso"},"content":{"first":"Evaluamos tu caso y te orientamos con soluciones claras.","second":"Respuesta en minutos. Trujillo, Lima, Chimbote, Huarmey y virtual."},"image":"/assets/img/slid/n/3.jpg"}]');

/***/ })

};
;