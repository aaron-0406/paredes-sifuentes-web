import React from "react";
import Script from "next/script";
import Head from "next/head";
import LoadingScreen from "../components/Loading-Screen/loading-screen";
import "../styles/globals.css";
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/scrollToTop";
import WhatsAppButton from "../components/WhatsAppButton";

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

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Paredes Sifuentes Abogados | Trujillo, Perú</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </Head>

      {/* ── Google Analytics 4 ── */}
      {GA_ACTIVE && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
              `,
            }}
          />
        </>
      )}

      {/* ── Meta Pixel (Facebook / Instagram) ── */}
      {META_ACTIVE && (
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
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
            `,
          }}
        />
      )}

      <Cursor />
      <LoadingScreen />
      <Component {...pageProps} />
      <ScrollToTop />
      <WhatsAppButton />

      <Script id="wow" src="/assets/js/wow.min.js" />
      <Script
        id="splitting"
        strategy="beforeInteractive"
        src="/assets/js/splitting.min.js"
      />
      <Script id="simpleParallax" src="/assets/js/simpleParallax.min.js" />
      <Script id="isotope" src="/assets/js/isotope.pkgd.min.js" />
      <Script src="/assets/js/main.js" id="init" strategy="lazyOnload" />
    </>
  );
}

export default MyApp;
