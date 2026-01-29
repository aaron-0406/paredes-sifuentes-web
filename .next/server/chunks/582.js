"use strict";
exports.id = 582;
exports.ids = [582];
exports.modules = {

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

/***/ 3675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const CallToAction = ({ title ="\xbfTienes un caso legal?" , subtitle ="Agenda tu consulta gratuita y recibe orientaci\xf3n profesional" , buttonText ="Agenda tu consulta" , variant ="light" // "light" o "dark"
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
            padding: "60px 0",
            textAlign: "center"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row justify-content-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-lg-8",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "playfont wow fadeInUp",
                            "data-wow-delay": ".3s",
                            style: {
                                color: currentStyle.title,
                                marginBottom: "15px",
                                fontSize: "28px"
                            },
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "wow fadeInUp",
                            "data-wow-delay": ".4s",
                            style: {
                                color: currentStyle.subtitle,
                                marginBottom: "30px",
                                fontSize: "16px"
                            },
                            children: subtitle
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            href: whatsappLink,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "btn-curve wow fadeInUp",
                            "data-wow-delay": ".5s",
                            style: {
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "10px",
                                padding: "14px 32px",
                                fontSize: "15px",
                                fontWeight: "500",
                                textTransform: "uppercase",
                                letterSpacing: "1px",
                                borderRadius: "4px",
                                transition: "all 0.3s ease",
                                ...currentStyle.button
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fab fa-whatsapp",
                                    style: {
                                        fontSize: "18px"
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

/***/ 3534:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/portfolio1.json
const portfolio1_namespaceObject = {};
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/Portfolio1/index.jsx





const Portfolio1 = ()=>{
    React.useEffect(()=>{
        setTimeout(()=>{
            if (window.Isotope) initIsotope();
        }, 1000);
    }, []);
    return(/*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("section", {
            className: "portfolio section-padding",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "container-fluid",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "section-head text-center",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "row justify-content-center",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "col-lg-6 col-md-8 col-sm-10",
                                    children: [
                                        /*#__PURE__*/ _jsx("h6", {
                                            className: "wow fadeInDown",
                                            "data-wow-delay": ".3s",
                                            children: "NUESTROS"
                                        }),
                                        /*#__PURE__*/ _jsx("h4", {
                                            className: "playfont wow flipInX",
                                            "data-wow-delay": ".5s",
                                            children: "SERVICIOS"
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "filtering text-center col-12 wow fadeInUp",
                                "data-wow-delay": ".3s",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "filter bg-img bg-repeat",
                                    style: {
                                        backgroundImage: "url(/assets/img/line-pattern1.png"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            "data-filter": "*",
                                            className: "active",
                                            children: "Todo"
                                        }),
                                        portfolio1Data.filtersName.map((filter)=>/*#__PURE__*/ _jsx("span", {
                                                "data-filter": filter.filterClass,
                                                children: filter.name
                                            }, filter.id)
                                        )
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "gallery twsty full-width",
                                children: portfolio1Data.portfolio.map((item)=>/*#__PURE__*/ _jsxs("div", {
                                        className: `items ${item.filterClass} mt-50 wow fadeInUp`,
                                        "data-wow-delay": ".3s",
                                        children: [
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "item-img bg-img wow imago",
                                                style: {
                                                    backgroundImage: `url(${item.image})`
                                                },
                                                children: /*#__PURE__*/ _jsx(Link, {
                                                    href: "/servicios",
                                                    children: /*#__PURE__*/ _jsx("a", {
                                                        children: /*#__PURE__*/ _jsx("div", {
                                                            className: "item-img-overlay valign"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "info mt-10",
                                                children: [
                                                    /*#__PURE__*/ _jsx("h5", {
                                                        children: item.title
                                                    }),
                                                    /*#__PURE__*/ _jsx("span", {
                                                        children: item.tag
                                                    })
                                                ]
                                            })
                                        ]
                                    }, item.id)
                                )
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const components_Portfolio1 = ((/* unused pure expression or super */ null && (Portfolio1)));


/***/ }),

/***/ 5715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_services1_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7828);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);




const Services1 = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "services section-padding bg-gray",
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
                                    children: "NUESTROS"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    className: "playfont wow flipInX",
                                    "data-wow-delay": ".5s",
                                    children: "SERVICIOS"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row bord-box bg-img wow fadeInUp",
                    "data-wow-delay": ".3s",
                    style: {
                        backgroundImage: `url(${_data_services1_json__WEBPACK_IMPORTED_MODULE_2__/* .image */ .B}`
                    },
                    children: _data_services1_json__WEBPACK_IMPORTED_MODULE_2__/* .services.map */ .u.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-lg-3 col-md-6 item-bx",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "numb",
                                    children: item.id
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    className: "mb-20",
                                    children: item.title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: item.content
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    href: "/about",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "more mt-30",
                                        children: "Leer M\xe1s"
                                    })
                                })
                            ]
                        }, item.id)
                    )
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services1);


/***/ }),

/***/ 6289:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9485);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var _data_services1_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7828);






const Services4 = ()=>{
    React.useEffect(()=>{
        console.clear();
    }, []);
    const [isOpen, setOpen] = React.useState(false);
    return(/*#__PURE__*/ _jsxs("section", {
        className: "services halfbg",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "background bg-img valign parallaxie",
                style: {
                    backgroundImage: `url(/assets/img/1.jpg)`
                },
                "data-overlay-dark": "7",
                children: [
                     false && /*#__PURE__*/ 0,
                    /*#__PURE__*/ _jsx(Link, {
                        href: "https://www.instagram.com/reel/DONC8e9jiKl/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
                        onClick: (e)=>{
                            e.preventDefault();
                            setOpen(true);
                        },
                        children: /*#__PURE__*/ _jsxs("a", {
                            className: "play-button vid",
                            children: [
                                /*#__PURE__*/ _jsx("svg", {
                                    className: "circle-fill",
                                    children: /*#__PURE__*/ _jsx("circle", {
                                        cx: "43",
                                        cy: "43",
                                        r: "39",
                                        stroke: "#fff",
                                        strokeWidth: ".5"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("svg", {
                                    className: "circle-track",
                                    children: /*#__PURE__*/ _jsx("circle", {
                                        cx: "43",
                                        cy: "43",
                                        r: "39",
                                        stroke: "none",
                                        strokeWidth: "1",
                                        fill: "none"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("span", {
                                    className: "polygon",
                                    children: /*#__PURE__*/ _jsx("i", {
                                        className: "pe-7s-play"
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "container ontop",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "row",
                    children: services1Data.services.map((service)=>/*#__PURE__*/ _jsxs("div", {
                            className: "col-lg-3 col-md-6 item-bx",
                            children: [
                                /*#__PURE__*/ _jsx("h2", {
                                    className: "custom-font numb",
                                    children: service.id
                                }),
                                /*#__PURE__*/ _jsx("h6", {
                                    className: "mb-20",
                                    children: service.title
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    children: service.content
                                }),
                                /*#__PURE__*/ _jsx(Link, {
                                    href: "/servicios",
                                    children: /*#__PURE__*/ _jsx("a", {
                                        className: "more custom-font mt-30",
                                        children: "Leer M\xe1s"
                                    })
                                })
                            ]
                        }, service.id)
                    )
                })
            })
        ]
    }));
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Services4)));


/***/ }),

/***/ 3052:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-circular-progressbar"
var external_react_circular_progressbar_ = __webpack_require__(1400);
;// CONCATENATED MODULE: ./src/data/skills-circle.json
const skills_circle_namespaceObject = [];
;// CONCATENATED MODULE: ./src/components/Skills-circle/index.jsx





const SkillsCircle = ()=>{
    const cpStyle = {
        path: {
            stroke: "#B5844F"
        },
        trail: {
            stroke: "#0f1013"
        },
        text: {
            fill: "#ffffff",
            fontSize: "16px"
        }
    };
    return(/*#__PURE__*/ _jsx("section", {
        className: "skills-circle section-padding bg-img parallaxie",
        style: {
            backgroundImage: "url(/assets/img/3.jpg"
        },
        "data-overlay-dark": "7",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "section-head text-center",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "col-lg-6 col-md-8 col-sm-10",
                            children: [
                                /*#__PURE__*/ _jsx("h6", {
                                    className: "wow fadeInDown",
                                    "data-wow-delay": ".3s",
                                    style: {
                                        color: "#B5844F"
                                    },
                                    children: "Nuestras Especialidades"
                                }),
                                /*#__PURE__*/ _jsx("h4", {
                                    className: "playfont wow flipInX",
                                    "data-wow-delay": ".5s",
                                    children: "Nuestras Especialidades"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "row wow fadeInUp",
                    "data-wow-delay": ".3s",
                    children: skillsCircleData.map((skill)=>/*#__PURE__*/ _jsx("div", {
                            className: "col-lg-3 col-md-6",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "item text-center",
                                children: [
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "skill",
                                        children: [
                                            /*#__PURE__*/ _jsx(CircularProgressbar, {
                                                value: skill.val,
                                                strokeWidth: 2,
                                                styles: cpStyle
                                            }),
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "playfont",
                                                children: `${skill.val}%`
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx("h5", {
                                        children: skill.name
                                    })
                                ]
                            })
                        }, skill.id)
                    )
                })
            ]
        })
    }));
};
/* harmony default export */ const Skills_circle = ((/* unused pure expression or super */ null && (SkillsCircle)));


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
            description: "Presencia en Trujillo, Chimbote y Huarmey. Atenci\xf3n virtual en todo el Per\xfa."
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
/* harmony import */ var _components_About_Us1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3006);
/* harmony import */ var _components_Intro_with_horizontal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6429);
/* harmony import */ var _layouts_light__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6172);
/* harmony import */ var _components_Portfolio1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3534);
/* harmony import */ var _components_Services1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5715);
/* harmony import */ var _components_Services2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9533);
/* harmony import */ var _components_Services4__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6289);
/* harmony import */ var _components_Skills_circle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3052);
/* harmony import */ var _components_Testimonials1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5046);
/* harmony import */ var _components_Team1__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8633);
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5705);
/* harmony import */ var _components_Process__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9593);
/* harmony import */ var _components_CallToAction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3675);
/* harmony import */ var _components_WhyChooseUs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8551);
/* harmony import */ var _components_InstagramFeed__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(311);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Intro_with_horizontal__WEBPACK_IMPORTED_MODULE_3__]);
_components_Intro_with_horizontal__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

/* eslint-disable @next/next/no-img-element */ 















const Home1 = ()=>{
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        document.querySelector("body").classList.add("homepage");
    }, []);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_light__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        footerClass: "mt-30",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Intro_with_horizontal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_About_Us1__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_WhyChooseUs__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CallToAction__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                title: "\xbfNecesitas asesor\xeda legal?",
                subtitle: "Cu\xe9ntanos tu caso y te orientamos sin compromiso",
                buttonText: "Habla con un abogado",
                variant: "dark"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Process__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Services1__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                bigTitle: true,
                grid: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_InstagramFeed__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                elfsightAppId: "daba3e81-5b11-46df-bcc2-7215403c8b9a"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CallToAction__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
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

module.exports = JSON.parse('[{"id":1,"title":{"first":"Especialistas en","second":"Derecho Inmobiliario"},"content":{"first":"Protegemos tu propiedad y patrimonio con asesoría legal experta.","second":"Compra-venta, arrendamientos, desalojos, sucesiones y más."},"image":"/assets/img/slid/n/1.jpg"},{"id":2,"title":{"first":"¿Problemas con","second":"tu propiedad?"},"content":{"first":"Resolvemos conflictos inmobiliarios, herencias y litigios.","second":"Más de 350 casos resueltos. Atención en todo el Perú."},"image":"/assets/img/slid/n/2.jpg"},{"id":3,"title":{"first":"Consulta sin","second":"compromiso"},"content":{"first":"Evaluamos tu caso y te orientamos con soluciones claras.","second":"Respuesta en minutos. Trujillo, Chimbote, Huarmey y virtual."},"image":"/assets/img/slid/n/3.jpg"}]');

/***/ }),

/***/ 7828:
/***/ ((module) => {

module.exports = JSON.parse('{"B":"/assets/img/slid/2.jpg","u":[{"id":"01","title":"Derecho Inmobiliario","content":"Asesoría legal especializada en operaciones inmobiliarias y protección patrimonial."},{"id":"02","title":"Litigios Civiles y de Familia","content":"Defensa y representación en conflictos familiares y civiles, con enfoque legal y humano."},{"id":"03","title":"Derecho Empresarial","content":"Asesoría integral en la creación, gestión y transformación de empresas conforme al marco societario peruano."},{"id":"04","title":"Litigios Penales","content":"Defensa penal especializada en delitos de familia y patrimonio, con enfoque estratégico y confidencialidad absoluta."},{"id":"05","title":"Inversiones Inmobiliarias","content":"Asesoría integral en remates, cesiones y operaciones inmobiliarias seguras para maximizar el valor de su inversión."},{"id":"06","title":"Seguros y protección de arrendamiento","content":"Protegemos su propiedad con contratos seguros, evaluación de inquilinos y defensa total ante incumplimientos o riesgos legales."},{"id":"07","title":"Propiedad Intelectual e Indecopi","content":"Protegemos su identidad comercial mediante el registro de marcas y lemas, y la defensa legal ante Indecopi y la DCI."},{"id":"08","title":"Tributación inmobiliaria","content":"Asesoría tributaria en operaciones inmobiliarias, optimizando el cumplimiento fiscal de personas y empresas."}]}');

/***/ })

};
;