"use strict";
(() => {
var exports = {};
exports.id = 711;
exports.ids = [711];
exports.modules = {

/***/ 9557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _name_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/layouts/main.jsx
var main = __webpack_require__(843);
;// CONCATENATED MODULE: ./src/components/ServiceHero/index.jsx


const ServiceHero = ({ title , subtitle , category , image  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        style: {
            position: "relative",
            height: "50vh",
            minHeight: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "100px",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: 1
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(96, 32, 44, 0.75)",
                    zIndex: 2
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                style: {
                    position: "relative",
                    zIndex: 3,
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        style: {
                            display: "inline-block",
                            background: "#B5844F",
                            color: "#fff",
                            padding: "8px 20px",
                            fontSize: "12px",
                            fontWeight: "600",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                            borderRadius: "4px",
                            marginBottom: "20px"
                        },
                        children: category
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        style: {
                            color: "#F0ECE1",
                            fontSize: "48px",
                            fontWeight: "700",
                            marginBottom: "15px",
                            lineHeight: "1.2"
                        },
                        className: "playfont",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        style: {
                            color: "#F0ECE1",
                            fontSize: "18px",
                            maxWidth: "600px",
                            margin: "0 auto",
                            opacity: 0.9,
                            lineHeight: "1.6"
                        },
                        children: subtitle
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_ServiceHero = (ServiceHero);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/ServiceIntro/index.jsx



const ServiceIntro = ({ description , benefits , ctaText , ctaLink  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        style: {
            background: "#fff",
            padding: "80px 0"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row align-items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-lg-7 mb-4 mb-lg-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                style: {
                                    color: "#B5844F",
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    letterSpacing: "3px",
                                    textTransform: "uppercase",
                                    marginBottom: "15px",
                                    display: "block"
                                },
                                children: "Descripci\xf3n del servicio"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                style: {
                                    color: "#60202C",
                                    fontSize: "36px",
                                    fontWeight: "700",
                                    marginBottom: "25px",
                                    lineHeight: "1.3"
                                },
                                className: "playfont",
                                children: "\xbfC\xf3mo te ayudamos?"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                style: {
                                    color: "#555",
                                    fontSize: "16px",
                                    lineHeight: "1.9",
                                    marginBottom: "30px"
                                },
                                children: description
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: ctaLink || "/contacto",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    style: {
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        background: "#60202C",
                                        color: "#F0ECE1",
                                        padding: "15px 30px",
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
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "pe-7s-call",
                                            style: {
                                                fontSize: "18px"
                                            }
                                        }),
                                        ctaText || "Solicitar asesor\xeda"
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-5",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            style: {
                                background: "#F0ECE1",
                                padding: "35px",
                                borderRadius: "8px",
                                borderLeft: "4px solid #B5844F"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    style: {
                                        color: "#60202C",
                                        fontSize: "20px",
                                        fontWeight: "600",
                                        marginBottom: "25px"
                                    },
                                    children: "Beneficios"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    style: {
                                        listStyle: "none",
                                        padding: 0,
                                        margin: 0
                                    },
                                    children: benefits && benefits.map((benefit, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            style: {
                                                display: "flex",
                                                alignItems: "flex-start",
                                                gap: "12px",
                                                marginBottom: index < benefits.length - 1 ? "18px" : 0,
                                                color: "#555",
                                                fontSize: "15px",
                                                lineHeight: "1.6"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "pe-7s-check",
                                                    style: {
                                                        color: "#B5844F",
                                                        fontSize: "20px",
                                                        flexShrink: 0,
                                                        marginTop: "2px"
                                                    }
                                                }),
                                                benefit
                                            ]
                                        }, index)
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
/* harmony default export */ const components_ServiceIntro = (ServiceIntro);

;// CONCATENATED MODULE: ./src/components/SubservicesList/index.jsx


const SubservicesList = ({ subservices  })=>{
    const { 0: expandedItems , 1: setExpandedItems  } = (0,external_react_.useState)({
    });
    const toggleExpand = (code)=>{
        setExpandedItems((prev)=>({
                ...prev,
                [code]: !prev[code]
            })
        );
    };
    if (!subservices || subservices.length === 0) return null;
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        style: {
            background: "#F0ECE1",
            padding: "80px 0"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row justify-content-center mb-5",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-lg-8 text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                style: {
                                    color: "#B5844F",
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    letterSpacing: "3px",
                                    textTransform: "uppercase",
                                    marginBottom: "15px",
                                    display: "block"
                                },
                                children: "Lo que incluye"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                style: {
                                    color: "#60202C",
                                    fontSize: "36px",
                                    fontWeight: "700",
                                    lineHeight: "1.3"
                                },
                                className: "playfont",
                                children: "Servicios espec\xedficos"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: subservices.map((subservice, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6 mb-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    background: "#fff",
                                    borderRadius: "8px",
                                    padding: "25px",
                                    height: "100%",
                                    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                                    transition: "all 0.3s ease",
                                    border: "1px solid #e8e8e8"
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.05)";
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: "15px"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            style: {
                                                display: "inline-flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                background: "#B5844F",
                                                color: "#fff",
                                                padding: "6px 12px",
                                                fontSize: "12px",
                                                fontWeight: "600",
                                                borderRadius: "4px",
                                                flexShrink: 0
                                            },
                                            children: subservice.code
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            style: {
                                                flex: 1
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    style: {
                                                        color: "#60202C",
                                                        fontSize: "18px",
                                                        fontWeight: "600",
                                                        marginBottom: "10px",
                                                        lineHeight: "1.4"
                                                    },
                                                    children: subservice.name
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    style: {
                                                        color: "#666",
                                                        fontSize: "14px",
                                                        lineHeight: "1.7",
                                                        marginBottom: subservice.details ? "15px" : 0
                                                    },
                                                    children: subservice.description
                                                }),
                                                subservice.details && subservice.details.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                            onClick: ()=>toggleExpand(subservice.code)
                                                            ,
                                                            style: {
                                                                background: "none",
                                                                border: "none",
                                                                color: "#B5844F",
                                                                fontSize: "14px",
                                                                fontWeight: "500",
                                                                cursor: "pointer",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: "5px",
                                                                padding: 0
                                                            },
                                                            children: [
                                                                expandedItems[subservice.code] ? "Ver menos" : `Ver ${subservice.details.length} detalles`,
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: `pe-7s-angle-${expandedItems[subservice.code] ? "up" : "down"}`,
                                                                    style: {
                                                                        fontSize: "18px",
                                                                        transition: "transform 0.3s ease"
                                                                    }
                                                                })
                                                            ]
                                                        }),
                                                        expandedItems[subservice.code] && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            style: {
                                                                marginTop: "15px",
                                                                paddingTop: "15px",
                                                                borderTop: "1px solid #eee"
                                                            },
                                                            children: subservice.details.map((detail, idx)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    style: {
                                                                        display: "flex",
                                                                        alignItems: "flex-start",
                                                                        gap: "10px",
                                                                        marginBottom: idx < subservice.details.length - 1 ? "12px" : 0
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "pe-7s-angle-right",
                                                                            style: {
                                                                                color: "#B5844F",
                                                                                fontSize: "16px",
                                                                                marginTop: "2px",
                                                                                flexShrink: 0
                                                                            }
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                                    style: {
                                                                                        color: "#60202C",
                                                                                        fontSize: "14px",
                                                                                        display: "block",
                                                                                        marginBottom: "4px"
                                                                                    },
                                                                                    children: detail.name
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    style: {
                                                                                        color: "#777",
                                                                                        fontSize: "13px",
                                                                                        lineHeight: "1.5"
                                                                                    },
                                                                                    children: detail.description
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }, idx)
                                                            )
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }, subservice.code)
                    )
                })
            ]
        })
    }));
};
/* harmony default export */ const components_SubservicesList = (SubservicesList);

// EXTERNAL MODULE: ./src/components/CallToAction/index.jsx
var CallToAction = __webpack_require__(3675);
;// CONCATENATED MODULE: ./src/components/ServiceFAQ/index.jsx


const ServiceFAQ = ({ faq , serviceTitle  })=>{
    const { 0: activeIndex , 1: setActiveIndex  } = (0,external_react_.useState)(0);
    if (!faq || faq.length === 0) return null;
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        style: {
            background: "#fff",
            padding: "80px 0"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row justify-content-center mb-5",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-lg-8 text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                style: {
                                    color: "#B5844F",
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    letterSpacing: "3px",
                                    textTransform: "uppercase",
                                    marginBottom: "15px",
                                    display: "block"
                                },
                                children: "Preguntas frecuentes"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                style: {
                                    color: "#60202C",
                                    fontSize: "36px",
                                    fontWeight: "700",
                                    lineHeight: "1.3"
                                },
                                className: "playfont",
                                children: "Resolvemos tus dudas"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-8",
                        children: faq.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    marginBottom: "15px",
                                    borderRadius: "8px",
                                    overflow: "hidden",
                                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                                    border: "1px solid #e8e8e8"
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                        onClick: ()=>setActiveIndex(activeIndex === index ? -1 : index)
                                        ,
                                        style: {
                                            width: "100%",
                                            background: activeIndex === index ? "#60202C" : "#F0ECE1",
                                            color: activeIndex === index ? "#F0ECE1" : "#60202C",
                                            border: "none",
                                            padding: "20px 25px",
                                            textAlign: "left",
                                            cursor: "pointer",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            transition: "all 0.3s ease",
                                            fontSize: "16px",
                                            fontWeight: "600"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: item.question
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: `pe-7s-angle-${activeIndex === index ? "up" : "down"}`,
                                                style: {
                                                    fontSize: "24px",
                                                    transition: "transform 0.3s ease"
                                                }
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        style: {
                                            maxHeight: activeIndex === index ? "500px" : "0",
                                            overflow: "hidden",
                                            transition: "max-height 0.3s ease",
                                            background: "#fff"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            style: {
                                                padding: "20px 25px",
                                                margin: 0,
                                                color: "#666",
                                                fontSize: "15px",
                                                lineHeight: "1.8"
                                            },
                                            children: item.answer
                                        })
                                    })
                                ]
                            }, index)
                        )
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const components_ServiceFAQ = (ServiceFAQ);

// EXTERNAL MODULE: ./src/data/blog1.json
var blog1 = __webpack_require__(9577);
;// CONCATENATED MODULE: ./src/components/RelatedServices/index.jsx




const RelatedServices = ({ currentSlug , category  })=>{
    const relatedServices = blog1.filter((s)=>s.slug !== currentSlug
    ).filter((s)=>s.category === category || !category
    ).slice(0, 3);
    if (relatedServices.length === 0) return null;
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        style: {
            background: "#F0ECE1",
            padding: "80px 0"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row justify-content-center mb-5",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-lg-8 text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                style: {
                                    color: "#B5844F",
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    letterSpacing: "3px",
                                    textTransform: "uppercase",
                                    marginBottom: "15px",
                                    display: "block"
                                },
                                children: "Explora m\xe1s"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                style: {
                                    color: "#60202C",
                                    fontSize: "36px",
                                    fontWeight: "700",
                                    lineHeight: "1.3"
                                },
                                className: "playfont",
                                children: "Servicios relacionados"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: relatedServices.map((service)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 col-md-6 mb-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: `/servicios/${service.slug}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    style: {
                                        textDecoration: "none"
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        style: {
                                            background: "#fff",
                                            borderRadius: "8px",
                                            overflow: "hidden",
                                            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                                            transition: "all 0.3s ease",
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            border: "2px solid transparent"
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.transform = "translateY(-5px)";
                                            e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.12)";
                                            e.currentTarget.style.borderColor = "#B5844F";
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.transform = "translateY(0)";
                                            e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
                                            e.currentTarget.style.borderColor = "transparent";
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                style: {
                                                    position: "relative",
                                                    height: "180px",
                                                    overflow: "hidden"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: service.image,
                                                        alt: service.title,
                                                        style: {
                                                            width: "100%",
                                                            height: "100%",
                                                            objectFit: "cover"
                                                        }
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        style: {
                                                            position: "absolute",
                                                            top: "12px",
                                                            left: "12px",
                                                            background: "#B5844F",
                                                            color: "#fff",
                                                            padding: "4px 12px",
                                                            fontSize: "11px",
                                                            fontWeight: "500",
                                                            letterSpacing: "1px",
                                                            textTransform: "uppercase",
                                                            borderRadius: "4px"
                                                        },
                                                        children: service.category
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                style: {
                                                    padding: "20px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        style: {
                                                            color: "#60202C",
                                                            fontSize: "18px",
                                                            fontWeight: "600",
                                                            marginBottom: "10px",
                                                            lineHeight: "1.3"
                                                        },
                                                        children: service.title
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            color: "#B5844F",
                                                            fontSize: "13px",
                                                            fontWeight: "500"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "Ver servicio"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "pe-7s-angle-right",
                                                                style: {
                                                                    fontSize: "18px",
                                                                    marginLeft: "3px"
                                                                }
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        }, service.id)
                    )
                })
            ]
        })
    }));
};
/* harmony default export */ const components_RelatedServices = (RelatedServices);

// EXTERNAL MODULE: ./src/components/Cobertura/index.jsx
var Cobertura = __webpack_require__(5286);
;// CONCATENATED MODULE: ./src/data/services.json
const services_namespaceObject = JSON.parse('[{"id":1,"slug":"derecho-inmobiliario","title":"Derecho Inmobiliario","category":"Inmobiliario y Patrimonio","hero":{"subtitle":"Protección jurídica integral para tus inmuebles","image":"/assets/img/blog/1.jpg"},"description":"Asesoría completa en compra-venta, arrendamientos, regularización registral, subdivisión, prescripción y protección patrimonial.","subservices":[{"code":"1.1","name":"Diagnóstico físico-legal de predios y estudio de título","description":"Evaluación física y documental para compra o alquiler (persona natural o jurídica)."},{"code":"1.2","name":"Compra-venta al contado","description":"Operaciones de adquisición con pago total al momento de la transferencia."},{"code":"1.3","name":"Compra-venta con crédito hipotecario","description":"Gestión y acompañamiento en adquisiciones financiadas mediante hipoteca."},{"code":"1.4","name":"Compra-venta de inmueble futuro en proyecto inmobiliario","description":"Reservas y compras en pre-venta o proyectos en desarrollo."},{"code":"1.5","name":"Donaciones","description":"Actos jurídicos de transmisión gratuita de bienes inmuebles."},{"code":"1.6","name":"Contrato de arrendamiento con cláusula de allanamiento futuro","description":"Redacción de contrato con cláusula que facilita el desalojo ante incumplimiento."},{"code":"1.7","name":"Contrato de arrendamiento con intervención notarial","description":"Formalización del contrato ante notario para mayor seguridad jurídica."},{"code":"1.8","name":"Acumulación, subdivisión e independización de inmuebles","description":"Trámites registrales y técnicos para unir, dividir o independizar predios."},{"code":"1.9","name":"Rectificación de áreas y linderos","description":"Corrección registral y catastral de medidas y linderos del predio."},{"code":"1.10","name":"Prescripción adquisitiva de dominio","description":"Acción para adquirir la propiedad por posesión continua, pacífica y pública conforme al Código Civil peruano."},{"code":"1.11","name":"Protección de inmueble","description":"Medidas preventivas y defensivas sobre la titularidad y seguridad registral del bien.","details":[{"name":"Patrimonio familiar ante futuros embargos","description":"Constitución y protección del patrimonio familiar para proteger la vivienda."},{"name":"Inmovilización temporal de partida","description":"Solicitud registral para evitar modificaciones del asiento registral en situaciones de riesgo."},{"name":"Alerta registral","description":"Registro de aviso para detectar operaciones sobre la partida antes que se ejecuten."},{"name":"Fideicomiso","description":"Contrato mediante el cual una persona (fideicomitente) transfiere su propiedad a otra persona (fiduciario) para que los administre o disponga de ellos en beneficio de un tercero (fideicomisario) o para cumplir una finalidad específica y lícita."}]}],"benefits":["Seguridad jurídica en compras y ventas","Prevención y corrección de riesgos registrales","Protección frente a cargas y gravámenes (embargos e hipotecas)","Acompañamiento técnico y notarial"],"faq":[{"question":"¿Cuánto dura la prescripción adquisitiva en Perú?","answer":"Depende: 10 años de posesión continua, pacífica y pública; 5 años si hay justo título y buena fe (según Código Civil)."},{"question":"¿Qué es el patrimonio familiar?","answer":"Mecanismo que protege la vivienda familiar frente a embargos u otras afectaciones, sujeto a requisitos legales y registrales."}],"legal_info":{"country":"Perú","references":["Código Civil (prescripción adquisitiva, patrimonio familiar)","SUNARP - Registro de Propiedad Inmueble"]},"cta":{"text":"Solicita asesoría inmobiliaria","link":"/contacto?servicio=derecho-inmobiliario"}},{"id":2,"slug":"seguro-de-desalojo","title":"Seguro de Desalojo","category":"Inmobiliario y Patrimonio","hero":{"subtitle":"Recuperación y protección frente al incumplimiento de arrendamientos","image":"/assets/img/blog/2.jpg"},"description":"Protección jurídica para propietarios: extracción de inquilinos morosos, recuperación de rentas y cobertura ante riesgos como extinción de dominio.","subservices":[{"code":"2.1","name":"Filtro de inquilino (Infocorp, antecedentes, procesos)","description":"Validación previa del arrendatario para reducir riesgos."},{"code":"2.2","name":"Elaboración de contrato de arrendamiento","description":"Contrato a medida con cláusulas de protección (allanamiento futuro, garantías, notarial si corresponde)."},{"code":"2.3","name":"Recuperación extrajudicial del inmueble","description":"Gestión de entrega y desocupación mediante gestiones extrajudiciales."},{"code":"2.4","name":"Recuperación judicial y cobranza de rentas","description":"Acciones judiciales para recuperar inmueble y cobrar rentas y servicios adeudados."},{"code":"2.5","name":"Cobertura frente a la Ley de Extinción de Dominio","description":"Defensa y medidas preventivas para evitar aseguramiento por riesgo de delitos vinculados al inmueble."},{"code":"2.6","name":"Protección anual (planes: básica, total, global)","description":"Planes con niveles de cobertura: básica (recuperación), total (filtro + cobranza) y global (incluye cobertura extinción de dominio)."}],"benefits":["Minimiza pérdidas por impagos","Proceso ágil para recuperación del bien","Cobertura legal frente a riesgos extraordinarios","Tranquilidad para propietarios"],"faq":[{"question":"¿Qué cubre la modalidad \'global\'?","answer":"Incluye protección contra extinción de dominio y cobertura anual completa según plan contratado."},{"question":"¿Qué documentación se requiere para iniciar recuperación?","answer":"Contrato, documentos del inquilino, comprobantes de pago y pruebas de incumplimiento."}],"legal_info":{"country":"Perú","references":["Normativa sobre extinción de dominio (proceso autónomo y medidas)","SUNARP / Registro"]},"cta":{"text":"Protégete con nuestro seguro de desalojo","link":"/contacto?servicio=seguro-de-desalojo"}},{"id":3,"slug":"tributacion-inmobiliaria","title":"Tributación Inmobiliaria","category":"Inmobiliario y Patrimonio","hero":{"subtitle":"Asesoría fiscal para operaciones inmobiliarias","image":"/assets/img/blog/3.jpg"},"description":"Consultoría tributaria para personas naturales y empresas en operaciones de compra-venta, alquileres y explotación inmobiliaria.","subservices":[{"code":"3.1","name":"Tributación para persona natural","description":"Análisis de obligaciones, declaración de rentas, IGV (cuando corresponda) y tratamiento de rentas de alquiler."},{"code":"3.2","name":"Tributación para empresa","description":"Estructuración fiscal de operaciones inmobiliarias, tratamientos de rentas, plusvalías y obligaciones formales ante SUNAT."}],"benefits":["Cumplimiento ante SUNAT","Optimización fiscal conforme a normativa","Evita sanciones tributarias y pagar de más","Asesoría adaptada al tipo de contribuyente"],"faq":[{"question":"¿Se paga IGV al vender un inmueble?","answer":"Depende del tipo de operación; algunas ventas en ciertos supuestos pueden estar gravadas con IGV; se debe analizar cada caso."},{"question":"¿Cómo se tributa la renta por alquiler?","answer":"Las rentas de alquiler tienen tratamiento especial y deben declararse ante SUNAT según la categoría del contribuyente."}],"legal_info":{"country":"Perú","references":["SUNAT - normativa tributaria aplicable a inmuebles"]},"cta":{"text":"Consulta tributaria inmobiliaria","link":"/contacto?servicio=tributacion-inmobiliaria"}},{"id":4,"slug":"indecopi-propiedad-intelectual","title":"Indecopi / Propiedad Intelectual","category":"Regulación","hero":{"subtitle":"Registro y defensa de marcas, lemas y reclamos administrativos","image":"/assets/img/blog/9.jpg"},"description":"Registro de marcas y lemas ante INDECOPI; gestión de reclamos ante proveedores, DCI e Indecopi; descargos y defensa administrativa.","subservices":[{"code":"4.1","name":"Reclamo ante proveedor inmobiliario","description":"Acción ante incumplimientos en proyectos o servicios inmobiliarios."},{"code":"4.2","name":"Reclamo ante Indecopi","description":"Presentación de quejas y procedimientos de protección al consumidor."},{"code":"4.3","name":"Reclamo ante DCI","description":"Intervención ante la Defensoría del Cliente Inmobiliario para casos específicos del sector."},{"code":"4.4","name":"Denuncias y descargos ante Indecopi","description":"Defensa en procedimientos administrativos y presentación de descargos."},{"code":"4.5","name":"Registro de marca","description":"Solicitud y trámite para obtener el registro de marca ante INDECOPI (vigencia, renovación)."},{"code":"4.6","name":"Registro de lema comercial","description":"Protección de slogans o lemas comerciales ante INDECOPI."}],"benefits":["Protección legal de tu identidad comercial","Defensa en procedimientos administrativos","Registro oficial con vigencia","Prevención de conflictos comerciales"],"faq":[{"question":"¿Cuánto dura el registro de marca?","answer":"En el Perú la marca registrada tiene una vigencia de 10 años, renovable."},{"question":"¿Qué documentos se requieren para un reclamo ante Indecopi?","answer":"Contrato, pruebas del incumplimiento, comunicaciones con el proveedor, y cualquier evidencia relevante."}],"legal_info":{"country":"Perú","references":["INDECOPI - registro de marcas y procedimientos","DCI - Defensoría del Cliente Inmobiliario"]},"cta":{"text":"Protege tu marca y reclama ante Indecopi","link":"/contacto?servicio=indecopi-propiedad-intelectual"}},{"id":5,"slug":"derecho-empresarial","title":"Derecho Empresarial","category":"Corporativo","hero":{"subtitle":"Asesoría societaria y gobierno corporativo","image":"/assets/img/blog/4.jpg"},"description":"Servicios para la constitución, gobierno societario, modificación, disolución y procedimientos concursales de empresas.","subservices":[{"code":"5.1","name":"Reserva de nombre","description":"Verificación y reserva del nombre societario ante la autoridad correspondiente."},{"code":"5.2","name":"Constitución de empresa","description":"Elaboración de escritura pública y registro inicial (capital en dinero o aporte en bienes)."},{"code":"5.3","name":"Elaboración de estatuto","description":"Redacción de estatutos adaptados a la estructura y objetivos de la sociedad."},{"code":"5.4","name":"Transferencia de acciones","description":"Procesos para transferir acciones con o sin derecho a voto, incluyendo acciones preferentes."},{"code":"5.5","name":"Recomposición de pluralidad de socios","description":"Ajustes societarios por cambios en composición de socios."},{"code":"5.6","name":"Aumento de capital","description":"Procedimiento formal para incrementar el capital social."},{"code":"5.7","name":"Ampliación/reducción de objeto social","description":"Modificación del objeto social inscrito según necesidades empresariales."},{"code":"5.8","name":"Juntas societarias (ordinarias, extraordinarias, universales)","description":"Convocatoria, quórum, actas y cumplimiento de formalidades."},{"code":"5.9","name":"Renuncia y nombramiento de gerentes/directores","description":"Trámites para cambios en los representantes legales y directores."},{"code":"5.10","name":"Otorgamiento de poder por escritura pública","description":"Confección y elevación a escritura pública de poderes (amplios o específicos)."},{"code":"5.11","name":"Transformación de empresa","description":"Cambio de tipo societario o reestructuración corporativa."},{"code":"5.12","name":"Disolución, liquidación y extinción de sociedad","description":"Procedimientos legales para cerrar la sociedad y liquidar obligaciones."},{"code":"5.13","name":"Quiebra empresarial","description":"Asesoría en procedimientos concursales y planes de reorganización o liquidación."}],"benefits":["Estructura societaria clara y acorde a ley","Protección de accionistas y administradores","Respaldo en crisis y procesos concursales","Cumplimiento normativo empresarial"],"faq":[{"question":"¿Qué ley regula las sociedades en el Perú?","answer":"La Ley General de Sociedades (Ley N.º 26887) regula constitución, gobierno y disolución societaria."},{"question":"¿Qué implica un aumento de capital?","answer":"Requiere acuerdo societario, modificación estatutaria y registro en SUNARP según el caso."}],"legal_info":{"country":"Perú","references":["Ley General de Sociedades (Ley N.º 26887)","Procedimientos concursales - Ley del sistema concursal"]},"cta":{"text":"Asesoría corporativa completa","link":"/contacto?servicio=derecho-empresarial"}},{"id":6,"slug":"derecho-de-sucesiones","title":"Derecho de Sucesiones / Herencia","category":"Familia y Sucesiones","hero":{"subtitle":"Ordena la sucesión y protege a tus herederos","image":"/assets/img/blog/5.jpg"},"description":"Tramitamos sucesiones intestadas, testamentos, partición de bienes, anticipos de legítima y rectificaciones civiles necesarias.","subservices":[{"code":"6.1","name":"Rectificación de partida de nacimiento","description":"Corrección de datos civiles y partidas necesarias para trámites sucesorios."},{"code":"6.2","name":"Sucesión intestada","description":"Proceso de reparto de bienes cuando no existe testamento, conforme al Código Civil."},{"code":"6.3","name":"Petición de herencia","description":"Reclamación y gestión de derechos hereditarios por parte de los sucesores."},{"code":"6.4","name":"Anticipo de legítima (con o sin usufructo vitalicio / con o sin dispensa de colación)","description":"Otorgamiento anticipado de parte de la herencia bajo condiciones pactadas legalmente."},{"code":"6.5","name":"División y partición de inmuebles","description":"Segregación y adjudicación de bienes inmuebles entre herederos."},{"code":"6.6","name":"Elaboración de testamento","description":"Redacción y formalización de testamentos para protección de legado."}],"benefits":["Evita conflictos entre herederos","Asegura cumplimiento de derechos hereditarios","Trámites civiles y registrales asistidos","Asesoría técnica en partición y testamentos"],"faq":[{"question":"¿Qué ocurre si no hay testamento?","answer":"Se aplica la sucesión intestada según el orden sucesorio legal."},{"question":"¿Qué es el anticipo de legítima?","answer":"Entrega anticipada de parte de la porción hereditaria que corresponde a herederos forzosos, pudiendo incluir usufructo."}],"cta":{"text":"Asesórate en sucesiones","link":"/contacto?servicio=derecho-de-sucesiones"}},{"id":7,"slug":"litigios-civiles-y-prevencion","title":"Litigios Civiles y Prevención","category":"Litigios","hero":{"subtitle":"Defensa y prevención en asuntos civiles y familiares","image":"/assets/img/blog/6.jpg"},"description":"Representación en procesos familiares, reales (propiedad/posesión) y recuperación de capital; además asesoría preventiva para evitar litigios.","subservices":[{"code":"7.1","name":"De familia","description":"Asuntos relacionados con el núcleo familiar.","details":[{"name":"Régimen patrimonial del matrimonio","description":"Sociedad de gananciales y separación de patrimonios."},{"name":"Reconocimiento de unión de hecho","description":"Reconocimiento y efectos patrimoniales (vía notarial o judicial)."},{"name":"Matrimonio civil vía notarial","description":"Asesoría y trámite notarial de matrimonio civil."},{"name":"Rectificación de calidad de bien mueble o inmueble","description":"Correcciones de titularidad o calidad del bien."},{"name":"Divorcio (causal o separación convencional y divorcio ulterior)","description":"Trámites notarial, judicial y administrativos según el caso."},{"name":"Filiación y reconocimiento de paternidad","description":"Acciones de reconocimiento y determinación de filiación."},{"name":"Alimentos (judicial o extrajudicial)","description":"Solicitudes, reducción, aumento, exoneración y prorrateo de alimentos."},{"name":"Tenencia y régimen de visitas","description":"Tenencia exclusiva o compartida y régimen de visitas."},{"name":"Autorizaciones sobre bienes y viajes de menores","description":"Autorizaciones para disponer bienes de menores o para viajes internacionales."},{"name":"Violencia familiar","description":"Medidas de protección y procesos penales o civiles relacionados."}]},{"code":"7.2","name":"Reales o de propiedad","description":"Conflictos relacionados con la posesión y la propiedad.","details":[{"name":"Defensa posesoria extrajudicial","description":"Actuaciones previas a la vía judicial para recuperar o mantener posesión."},{"name":"Interdicto de recobrar y retener","description":"Medios procesales para recuperar o mantener la posesión."},{"name":"Mejor derecho a la posesión / propiedad","description":"Acciones para demostrar superior derecho sobre el bien."},{"name":"Acción reivindicatoria","description":"Acción para recuperar la propiedad y posesión de un bien."},{"name":"Edificación en suelo ajeno","description":"Conflictos por construcciones en predios de terceros."},{"name":"Prescripción adquisitiva de dominio","description":"Asistencia en procesos de prescripción."},{"name":"Desalojos (ocupante precario, cláusula allanamiento, intervención notarial, entre familiares)","description":"Todas las modalidades de desalojo contempladas en el documento."},{"name":"Nulidad de cosa juzgada fraudulenta","description":"Acciones para impugnar sentencias con vicios o fraude."},{"name":"Otorgamiento de escritura pública y rectificación de áreas/linderos","description":"Trámites notariales y registrales complementarios."},{"name":"Tercería de propiedad","description":"Intervención de terceros con interés en la cosa litigada."},{"name":"Nulidad de acto jurídico","description":"Acciones de nulidad por vicios del consentimiento o causa."}]},{"code":"7.3","name":"Recuperación de capital","description":"Acciones orientadas a la recuperación de sumas adeudadas o garantías.","details":[{"name":"Obligación de dar suma de dinero por préstamo","description":"Reclamaciones por préstamos no pagados."},{"name":"Ejecución de garantía hipotecaria","description":"Procedimientos para ejecutar garantías hipotecarias."},{"name":"Acción pauliana / ineficacia del acto jurídico","description":"Acciones para declarar ineficacia de actos realizados en perjuicio de acreedores."},{"name":"Tercería de derecho preferente de pago","description":"Reclamos de acreedores con prioridad de cobro."},{"name":"Intervención de acreedor no ejecutante","description":"Actuaciones para proteger derechos de acreedores intervinientes."}]}],"benefits":["Defensa técnica en familia y propiedad","Medidas preventivas para evitar litigios","Recuperación de activos y patrimonio","Asesoría integral civil y registral"],"faq":[{"question":"¿Qué es un interdicto?","answer":"Medio procesal para recobrar o retener la posesión de un bien."},{"question":"¿Puedo pedir medidas cautelares antes de iniciar juicio?","answer":"Sí, para asegurar la eficacia de una eventual sentencia y proteger bienes o derechos."}],"cta":{"text":"Consulta sobre litigios civiles y de familia","link":"/contacto?servicio=litigios-civiles-y-prevencion"}},{"id":8,"slug":"litigios-penales","title":"Litigios Penales","category":"Litigios","hero":{"subtitle":"Defensa penal en delitos familiares y patrimoniales","image":"/assets/img/blog/7.jpg"},"description":"Representación penal especializada en delitos de familia y delitos contra el patrimonio, con defensa técnica y estrategias procesales.","subservices":[{"code":"8.1","name":"Delitos de familia","description":"Omisión de asistencia familiar, sustracción de menores y violencia familiar; defensa y medidas de protección."},{"code":"8.2","name":"Delitos contra el patrimonio","description":"Usurpación, estafa, estelionato, daños, libramiento indebido y otros delitos patrimoniales; defensa penal y medidas reparadoras."}],"benefits":["Acceso a defensa penal especializada","Protección procesal integral","Estrategias de negociación y defensa técnica","Asesoría en medidas cautelares y rehabilitación reputacional"],"faq":[{"question":"¿Qué hago si me comunican una denuncia penal?","answer":"No declarar sin asesoría; solicita asistencia de un abogado para ejercer el derecho a defensa y preparar descargos."},{"question":"¿Se puede solicitar medidas alternas o reparación civil?","answer":"En algunos delitos es posible negociar reparación o acuerdos reparatorios; depende del caso y la tipificación penal."}],"cta":{"text":"Solicita defensa penal","link":"/contacto?servicio=litigios-penales"}},{"id":9,"slug":"inversiones-inmobiliarias","title":"Inversiones Inmobiliarias","category":"Inmobiliario y Patrimonio","hero":{"subtitle":"Asesoría en operaciones e inversiones sobre bienes raíces","image":"/assets/img/blog/8.jpg"},"description":"Apoyo legal en adquisiciones para inversión: aires, flipping, remates, cesión de derechos y operaciones con garantía hipotecaria.","subservices":[{"code":"9.1","name":"Compra-venta de aires","description":"Operaciones sobre derechos de aire y departamentos en condominio cuando proceda legalmente."},{"code":"9.2","name":"Flipping inmobiliario","description":"Operaciones de compra, mejora y venta con retorno rápido; análisis legal y fiscal."},{"code":"9.3","name":"Compra-venta antes de remate judicial","description":"Negociación y adquisición previa a la subasta judicial."},{"code":"9.4","name":"Compra en remate judicial (presencial, remoto, electrónico)","description":"Asesoría y representación en remates judiciales según procedimiento vigente."},{"code":"9.5","name":"Cesión de derechos / compra de deuda","description":"Transferencia de créditos o derechos vinculados a inmuebles."},{"code":"9.6","name":"Mutuo dinerario con garantía hipotecaria","description":"Contratos de préstamo con garantía hipotecaria y sus ejecuciones."}],"benefits":["Maximiza oportunidades de inversión","Mitiga riesgos en remates y cesiones","Planificación legal y fiscal para inversiones","Acompañamiento en ejecución de garantías"],"faq":[{"question":"¿Qué debo revisar antes de comprar en remate judicial?","answer":"Título, cargas, medidas cautelares, partida registral y requisitos procesales."},{"question":"¿Qué es la cesión de derechos?","answer":"Transferencia de derechos contractuales o de crédito ligados a un inmueble; requiere revisión contractual y registral."}],"cta":{"text":"Asesoría para inversiones inmobiliarias","link":"/contacto?servicio=inversiones-inmobiliarias"}}]');
;// CONCATENATED MODULE: ./src/pages/servicios/[name].jsx












const ServiceDetails = ({ service  })=>{
    var ref4, ref1, ref2, ref3;
    (0,external_react_.useEffect)(()=>{
        var ref;
        (ref = document.querySelector("body")) === null || ref === void 0 ? void 0 : ref.classList.add("index3");
    }, []);
    const pageTitle = `${service.title} en Trujillo | Paredes Sifuentes Abogados`;
    const pageDescription = service.description ? `${service.description.slice(0, 130)}...` : `Servicio de ${service.title} en Trujillo. Asesoría legal especializada con +350 casos resueltos.`;
    const pageUrl = `https://www.paredesifuentes.com/servicios/${service.slug}`;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(main/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: pageTitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: pageDescription
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "canonical",
                        href: pageUrl
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: pageTitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: pageDescription
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: pageUrl
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_ServiceHero, {
                title: service.title,
                subtitle: ((ref4 = service.hero) === null || ref4 === void 0 ? void 0 : ref4.subtitle) || service.description,
                category: service.category,
                image: ((ref1 = service.hero) === null || ref1 === void 0 ? void 0 : ref1.image) || "/assets/img/pg3.jpg"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_ServiceIntro, {
                description: service.description,
                benefits: service.benefits,
                ctaText: (ref2 = service.cta) === null || ref2 === void 0 ? void 0 : ref2.text,
                ctaLink: (ref3 = service.cta) === null || ref3 === void 0 ? void 0 : ref3.link
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_SubservicesList, {
                subservices: service.subservices
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CallToAction/* default */.Z, {
                title: `¿Necesitas ayuda con ${service.title.toLowerCase()}?`,
                subtitle: "Nuestro equipo est\xe1 listo para asesorarte",
                buttonText: "Contactar ahora",
                variant: "dark"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_ServiceFAQ, {
                faq: service.faq,
                serviceTitle: service.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_RelatedServices, {
                currentSlug: service.slug,
                category: service.category
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Cobertura/* default */.Z, {
            })
        ]
    }));
};
async function getStaticPaths() {
    const paths = services_namespaceObject.map((s)=>({
            params: {
                name: s.slug
            }
        })
    );
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const service = services_namespaceObject.find((s)=>s.slug === params.name
    );
    return {
        props: {
            service
        }
    };
}
/* harmony default export */ const _name_ = (ServiceDetails);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,613,843,675,286,577], () => (__webpack_exec__(9557)));
module.exports = __webpack_exports__;

})();