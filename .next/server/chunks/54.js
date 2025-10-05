"use strict";
exports.id = 54;
exports.ids = [54];
exports.modules = {

/***/ 1054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Services3)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/services3.json
const services3_namespaceObject = JSON.parse('[{"id":1,"image":"/assets/img/01.jpg","icon":"icon flaticon-furniture","title":"Cobertura integral de servicios legales","content":"El estudio no se limita a un solo campo: abarca derecho inmobiliario, empresarial, sucesiones, familia, litigios civiles y penales, propiedad intelectual e inversiones."},{"id":2,"image":"/assets/img/02.jpg","icon":"icon flaticon-home","title":"Protección del patrimonio como eje central","content":"Muchos de los servicios —como arrendamientos, sucesiones, defensa de inmuebles, litigios de propiedad o extinción de dominio— tienen un objetivo común: resguardar y defender el patrimonio de las familias y empresas peruanas."},{"id":3,"image":"/assets/img/03.jpg","icon":"icon flaticon-plan","title":"Atención personalizada y estratégica","content":"El estudio no ofrece asesorías genéricas; cada caso se trabaja con diagnóstico previo, contratos a medida y acompañamiento especializado, lo que asegura que cada cliente reciba una estrategia legal adaptada a su realidad."}]');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/Services3/index.jsx




const Services3 = ({ bigTitle , grid  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: `${!grid ? "SERVICIOS" : "services-grid"} section-padding ${!grid ? "bg-gray" : "pt-0"} `,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                !bigTitle ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "section-head text-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-lg-6 col-md-8 col-sm-10",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: "custom-font wow fadeInDown",
                                    "data-wow-delay": ".3s",
                                    children: "Nuestras Fortalezas"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: "playfont wow flipInX",
                                    "data-wow-delay": ".5s",
                                    children: "Nuestros Servicios"
                                })
                            ]
                        })
                    })
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "main-header text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Nuestras Fortalezas."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "tex-bg",
                            children: "Servicios"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: services3_namespaceObject.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item-bx bg-img wow fadeInUp",
                                "data-wow-delay": index == 0 ? ".3s" : index == 1 ? ".5s" : ".7s",
                                style: {
                                    backgroundImage: `url(${item.image})`
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: item.icon
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "mb-20",
                                        children: item.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: item.content
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/servicios",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: `more ${!grid ? "custom-font" : ""} mt-30`,
                                            children: "Leer M\xe1s"
                                        })
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
/* harmony default export */ const components_Services3 = (Services3);


/***/ })

};
;