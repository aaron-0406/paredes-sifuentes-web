"use strict";
exports.id = 286;
exports.ids = [286];
exports.modules = {

/***/ 5286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Cobertura = ()=>{
    const locations = [
        {
            id: 1,
            city: "Trujillo",
            type: "Sede principal",
            icon: "pe-7s-map-marker"
        },
        {
            id: 2,
            city: "Lima",
            type: "Atenci\xf3n presencial",
            icon: "pe-7s-map-marker"
        },
        {
            id: 3,
            city: "Chimbote",
            type: "Atenci\xf3n presencial",
            icon: "pe-7s-map-marker"
        },
        {
            id: 4,
            city: "Huarmey",
            type: "Atenci\xf3n presencial",
            icon: "pe-7s-map-marker"
        }, 
    ];
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "cobertura section-padding",
        style: {
            background: "#F0ECE1"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "section-head text-center mb-50",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                            className: "wow fadeInDown",
                            "data-wow-delay": ".3s",
                            style: {
                                color: "#B5844F",
                                letterSpacing: "2px"
                            },
                            children: "NUESTRA PRESENCIA"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            className: "playfont wow fadeInUp",
                            "data-wow-delay": ".5s",
                            style: {
                                color: "#60202C"
                            },
                            children: "D\xf3nde te atendemos"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row justify-content-center",
                    children: [
                        locations.map((location, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg col-md-6 col-sm-6 wow fadeInUp",
                                "data-wow-delay": `${0.3 + index * 0.1}s`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "location-card text-center",
                                    style: {
                                        padding: "30px 20px",
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
                                            className: location.icon,
                                            style: {
                                                fontSize: "40px",
                                                color: "#B5844F",
                                                marginBottom: "15px",
                                                display: "block"
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            style: {
                                                color: "#60202C",
                                                marginBottom: "5px",
                                                fontSize: "18px",
                                                fontWeight: "600"
                                            },
                                            children: location.city
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            style: {
                                                color: "#666",
                                                fontSize: "13px",
                                                margin: 0
                                            },
                                            children: location.type
                                        })
                                    ]
                                })
                            }, location.id)
                        ),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg col-md-6 col-sm-6 wow fadeInUp",
                            "data-wow-delay": ".6s",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "location-card text-center",
                                style: {
                                    padding: "30px 20px",
                                    marginBottom: "30px",
                                    background: "#60202C",
                                    borderRadius: "8px",
                                    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
                                    transition: "all 0.3s ease"
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.transform = "translateY(-5px)";
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.transform = "translateY(0)";
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "pe-7s-global",
                                        style: {
                                            fontSize: "40px",
                                            color: "#B5844F",
                                            marginBottom: "15px",
                                            display: "block"
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        style: {
                                            color: "#fff",
                                            marginBottom: "5px",
                                            fontSize: "18px",
                                            fontWeight: "600"
                                        },
                                        children: "Virtual"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        style: {
                                            color: "#D4C4AD",
                                            fontSize: "13px",
                                            margin: 0
                                        },
                                        children: "Todo el Per\xfa"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cobertura);


/***/ })

};
;