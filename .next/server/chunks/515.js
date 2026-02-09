"use strict";
exports.id = 515;
exports.ids = [515];
exports.modules = {

/***/ 4272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Blogs2)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/blogs1.json
const blogs1_namespaceObject = JSON.parse('[{"id":1,"image":"/assets/img/blog/1.jpg","title":"In Good Taste: Mark Finlay Architects and Interiors","by":"ALEX SMITH","date":"Aug 06 2022"},{"id":2,"image":"/assets/img/blog/2.jpg","title":"Five Things You Should Know About Modern Furniture.","by":"ALEX SMITH","date":"Aug 06 2022"},{"id":3,"image":"/assets/img/blog/3.jpg","title":"What it\'s like to be an interior designer?","by":"ALEX SMITH","date":"Aug 06 2022"}]');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/Blogs2/index.jsx

/* eslint-disable @next/next/no-img-element */ 


const Blogs2 = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "blog-grid center bg-gray section-padding",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "section-head text-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-lg-6 col-md-8 col-sm-10",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: "custom-font wow fadeInDown",
                                    "data-wow-delay": ".3s",
                                    children: "Latest News"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: "playfont wow flipInX",
                                    "data-wow-delay": ".5s",
                                    children: "Our Blogs"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: blogs1_namespaceObject.slice(0, 2).map((blog, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item wow fadeInUp md-mb50",
                                "data-wow-delay": index == 0 ? ".3s" : index == 1 ? ".1s" : ".5s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "post-img",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "img",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: blog.image,
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "cont",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "info",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/blog-details",
                                                        children: blog.by
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/blog-details",
                                                        children: blog.date
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "playfont",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/blog-details",
                                                    children: blog.title
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/blog-details",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "more",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "custom-font",
                                                        children: "Read More"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, blog.id)
                    )
                })
            ]
        })
    }));
};
/* harmony default export */ const components_Blogs2 = (Blogs2);


/***/ }),

/***/ 8633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_team1_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6699);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);

/* eslint-disable @next/next/no-img-element */ 




class Team1 extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    constructor(props){
        super(props);
    }
    renderArrows = ()=>{
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "navs mt-30 wow fadeInUp",
            "data-wow-delay": ".3s",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "prev",
                    onClick: ()=>this.slider.slickPrev()
                    ,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "fas fa-long-arrow-alt-left"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "next",
                    onClick: ()=>this.slider.slickNext()
                    ,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "fas fa-long-arrow-alt-right"
                    })
                })
            ]
        }));
    };
    render() {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: "team section-padding",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-5",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "tit",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                            className: "mb-10 wow fadeInDown",
                                            "data-wow-delay": ".3s",
                                            children: "Nuestra perspectiva y"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "playfont wow flipInX",
                                            "data-wow-delay": ".5s",
                                            children: "Nuestro equipo"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "wow fadeInUp",
                                            "data-wow-delay": ".3s",
                                            children: "En Paredes Sifuentes Abogados unimos la experiencia de nuestros abogados con el soporte de profesionales de TI. Esta sinergia nos permite brindar un servicio legal integral, moderno y seguro, combinando el conocimiento jur\xeddico con herramientas tecnol\xf3gicas que optimizan cada proceso."
                                        }),
                                        this.renderArrows()
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-7",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    className: "team-container",
                                    ref: (c)=>this.slider = c
                                    ,
                                    slidesToShow: 3,
                                    slidesToScroll: 1,
                                    arrows: true,
                                    dots: false,
                                    autoplay: true,
                                    responsive: [
                                        {
                                            breakpoint: 1024,
                                            settings: {
                                                slidesToShow: 3
                                            }
                                        },
                                        {
                                            breakpoint: 767,
                                            settings: {
                                                slidesToShow: 2
                                            }
                                        },
                                        {
                                            breakpoint: 480,
                                            settings: {
                                                slidesToShow: 1
                                            }
                                        }, 
                                    ],
                                    children: _data_team1_json__WEBPACK_IMPORTED_MODULE_2__.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "item wow fadeInUp",
                                            "data-wow-delay": ".3s",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "img wow imago",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: item.image,
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "info",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                            children: item.username
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: item.usertitle
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, item.id)
                                    )
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "dots-half bg-img bg-repeat",
                    style: {
                        backgroundImage: "url(/assets/img/dots.png"
                    }
                })
            ]
        }));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Team1);


/***/ }),

/***/ 6699:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"image":"/assets/img/team/1.jpg","facebook":"#","twitter":"#","username":"Piero Paredes","usertitle":"Socio fundador"},{"id":2,"image":"/assets/img/team/2.jpg","facebook":"#","twitter":"#","username":"Natalí Sifuentes","usertitle":"Socio fundador"},{"id":3,"image":"/assets/img/team/3.jpg","facebook":"#","twitter":"#","username":"Aaron Paredes","usertitle":"Administrador de Sistemas"},{"id":4,"image":"/assets/img/team/4.jpg","facebook":"#","twitter":"#","username":"Brayan Paredes","usertitle":"Soporte de TI"}]');

/***/ })

};
;