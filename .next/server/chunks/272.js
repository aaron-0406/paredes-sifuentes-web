"use strict";
exports.id = 272;
exports.ids = [272];
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


/***/ })

};
;