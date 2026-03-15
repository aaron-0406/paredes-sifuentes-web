"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/common/loadingPace.js
const loadingPace = ()=>{
    let preloader = document.querySelector("#preloader"), loadingText = document.querySelector(".loading-text");
    const addDoneClass = ()=>{
        preloader.classList.add("isdone");
        loadingText.classList.add("isdone");
    };
    Pace.on("start", function() {
        preloader.classList.remove("isdone");
        loadingText.classList.remove("isdone");
    });
    Pace.on("done", function() {
        addDoneClass();
    });
    if (document.querySelector("body").classList.contains("pace-done")) {
        addDoneClass();
    }
    document.addEventListener("load", ()=>{
        addDoneClass();
    });
};
/* harmony default export */ const common_loadingPace = (loadingPace);

// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(2806);
;// CONCATENATED MODULE: ./src/components/Loading-Screen/loading-screen.jsx





const LoadingScreen = ()=>{
    external_react_default().useEffect(()=>{
        let bodyEl = document.querySelector("body");
        if (app/* showLoading */.QP) {
            common_loadingPace();
            if (bodyEl.classList.contains("hideX")) {
                bodyEl.classList.remove("hideX");
            }
        } else {
            bodyEl.classList.add("hideX");
        }
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${app/* showLoading */.QP === true ? "showX" : "hideX"}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: "preloader",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "loading-text",
                        children: "Cargando"
                    })
                })
            }),
            app/* showLoading */.QP ? /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "pace",
                strategy: "beforeInteractive",
                src: "/assets/js/pace.min.js"
            }) : ""
        ]
    }));
};
/* harmony default export */ const loading_screen = (LoadingScreen);

// EXTERNAL MODULE: ./src/common/mouseEffect.js
var mouseEffect = __webpack_require__(3738);
;// CONCATENATED MODULE: ./src/components/Cursor/index.jsx



const Cursor = ()=>{
    external_react_default().useEffect(()=>{
        (0,mouseEffect/* default */.Z)();
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mouse-cursor cursor-outer"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mouse-cursor cursor-inner"
            })
        ]
    }));
};
/* harmony default export */ const components_Cursor = (Cursor);

;// CONCATENATED MODULE: ./src/common/scrollToTop.js
const scrollToTop = ()=>{
    let offset = 150;
    let progressWrap = document.querySelector(".progress-wrap");
    let progressPath = document.querySelector(".progress-wrap path");
    let pathLength = progressPath.getTotalLength();
    const updateProgress = ()=>{
        let scroll = window.pageYOffset;
        let height = document.documentElement.scrollHeight - window.innerHeight;
        let progress = pathLength - scroll * pathLength / height;
        progressPath.style.strokeDashoffset = progress;
    };
    if (progressWrap) {
        progressPath.style.transition = progressPath.style.WebkitTransition = "none";
        progressPath.style.strokeDasharray = pathLength + " " + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";
        updateProgress();
        window.addEventListener("scroll", updateProgress);
        window.addEventListener("scroll", function() {
            if (window.pageYOffset > offset) {
                progressWrap.classList.add("active-progress");
            } else {
                document.querySelector(".progress-wrap").classList.remove("active-progress");
            }
        });
        progressWrap.addEventListener("click", function(event) {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            return false;
        });
    }
};
/* harmony default export */ const common_scrollToTop = (scrollToTop);

;// CONCATENATED MODULE: ./src/components/scrollToTop/index.jsx



const ScrollToTop = ()=>{
    external_react_default().useEffect(()=>{
        common_scrollToTop();
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "progress-wrap cursor-pointer",
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            className: "progress-circle svg-content",
            width: "100%",
            height: "100%",
            viewBox: "-1 -1 102 102",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            })
        })
    }));
};
/* harmony default export */ const components_scrollToTop = (ScrollToTop);

;// CONCATENATED MODULE: external "react-floating-whatsapp"
const external_react_floating_whatsapp_namespaceObject = require("react-floating-whatsapp");
;// CONCATENATED MODULE: ./src/components/WhatsAppButton/index.jsx



const WhatsAppButton = ()=>{
    const { 0: isVisible , 1: setIsVisible  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const offset = 150;
        const handleScroll = ()=>{
            if (window.pageYOffset > offset) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        // Check initial position
        handleScroll();
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    if (!isVisible) return null;
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_floating_whatsapp_namespaceObject.FloatingWhatsApp, {
        phoneNumber: "51952163269",
        accountName: "Paredes Sifuentes Abogados",
        avatar: "/assets/img/favicon.ico",
        statusMessage: "Normalmente responde en minutos",
        chatMessage: "Hola, \xbfen qu\xe9 podemos ayudarte hoy?",
        placeholder: "Escribe tu mensaje...",
        messageDelay: 2,
        darkMode: false,
        allowClickAway: true,
        allowEsc: true,
        notification: true,
        notificationDelay: 30,
        notificationSound: false
    }));
};
/* harmony default export */ const components_WhatsAppButton = (WhatsAppButton);

;// CONCATENATED MODULE: ./src/pages/_app.js









// ─────────────────────────────────────────────────────────────
// INSTRUCCIONES DE ANALYTICS:
//
// 1. Google Analytics 4:
//    - Ve a analytics.google.com → Crear propiedad → copia el ID (G-XXXXXXXXXX)
//    - Reemplaza "G-XXXXXXXXXX" abajo con tu ID real
//    - Ejemplo: "G-AB1CD2EF3G"
//
// 2. Meta Pixel (Facebook/Instagram):
//    - Ve a business.facebook.com → Eventos → Píxeles → copia el ID (número)
//    - Reemplaza "TU_META_PIXEL_ID" abajo con tu ID real
//
// 3. Cuando agregues los IDs reales, ejecuta: npm run build
// ─────────────────────────────────────────────────────────────
const GA_MEASUREMENT_ID = "G-MHBFY3S561";
const META_PIXEL_ID = "1955303912532736";
const GA_ACTIVE = GA_MEASUREMENT_ID !== "G-XXXXXXXXXX";
const META_ACTIVE = META_PIXEL_ID !== "TU_META_PIXEL_ID";
function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Paredes Sifuentes Abogados | Trujillo, Per\xfa"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, maximum-scale=5"
                    })
                ]
            }),
            GA_ACTIVE && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                        strategy: "afterInteractive",
                        src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                        id: "google-analytics",
                        strategy: "afterInteractive",
                        dangerouslySetInnerHTML: {
                            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
              `
                        }
                    })
                ]
            }),
            META_ACTIVE && /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "meta-pixel",
                strategy: "afterInteractive",
                dangerouslySetInnerHTML: {
                    __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Cursor, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(loading_screen, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_scrollToTop, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_WhatsAppButton, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "wow",
                src: "/assets/js/wow.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "splitting",
                strategy: "beforeInteractive",
                src: "/assets/js/splitting.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "simpleParallax",
                src: "/assets/js/simpleParallax.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "isotope",
                src: "/assets/js/isotope.pkgd.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "/assets/js/main.js",
                id: "init",
                strategy: "lazyOnload"
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


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

/***/ }),

/***/ 2806:
/***/ ((module) => {

module.exports = JSON.parse('{"E8":"/assets/img/logo-light.png","Q1":"/assets/img/logo-dark.png","xU":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62829.37776565821!2d-79.0732643!3d-8.1117559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d7f37f5aef9%3A0x14908d1b1fc2ed3a!2sTrujillo!5e0!3m2!1ses!2spe!4v1724260512345!5m2!1ses!2spe","QP":true}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [738], () => (__webpack_exec__(4490)));
module.exports = __webpack_exports__;

})();