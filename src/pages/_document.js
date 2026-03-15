import Document, { Html, Head, Main, NextScript } from "next/document";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Paredes Sifuentes Abogados",
  "description": "Estudio jurídico en Trujillo especializado en derecho inmobiliario, empresarial, sucesiones y litigios.",
  "url": "https://www.paredesifuentes.com",
  "telephone": "+51952163269",
  "email": "paredesifuentes@gmail.com",
  "logo": "https://www.paredesifuentes.com/assets/img/logo-dark.png",
  "image": "https://www.paredesifuentes.com/assets/img/og-image.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Trujillo",
    "addressRegion": "La Libertad",
    "addressCountry": "PE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-8.1116",
    "longitude": "-79.0288"
  },
  "areaServed": [
    { "@type": "City", "name": "Trujillo" },
    { "@type": "City", "name": "Chimbote" },
    { "@type": "City", "name": "Huarmey" },
    { "@type": "City", "name": "Lima" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios Legales",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Derecho Inmobiliario" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seguro de Desalojo" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Derecho Empresarial" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Derecho de Sucesiones" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Litigios Civiles" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Litigios Penales" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Propiedad Intelectual" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tributación Inmobiliaria" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Inversiones Inmobiliarias" } }
    ]
  },
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61573933954882",
    "https://www.instagram.com/paredes.sifuentes",
    "https://www.tiktok.com/@paredes.sifuentes"
  ]
};

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="es-PE">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          {/* SEO base */}
          <meta
            name="description"
            content="Abogados en Trujillo especializados en derecho inmobiliario, empresarial y sucesiones. +350 casos resueltos. Consulta tu caso hoy."
          />
          <meta
            name="keywords"
            content="abogados Trujillo, derecho inmobiliario Perú, desalojo, sucesiones, litigios civiles, derecho empresarial, Paredes Sifuentes"
          />
          <meta name="author" content="Paredes Sifuentes Abogados" />
          <meta name="robots" content="index, follow" />

          {/* Open Graph / Facebook / WhatsApp */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Paredes Sifuentes Abogados" />
          <meta property="og:locale" content="es_PE" />
          <meta property="og:url" content="https://www.paredesifuentes.com" />
          <meta property="og:title" content="Paredes Sifuentes Abogados | Derecho Inmobiliario en Trujillo" />
          <meta property="og:description" content="Abogados en Trujillo especializados en derecho inmobiliario, empresarial y sucesiones. +350 casos resueltos." />
          <meta property="og:image" content="https://www.paredesifuentes.com/assets/img/og-image.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Paredes Sifuentes Abogados | Trujillo, Perú" />
          <meta name="twitter:description" content="Abogados especializados en derecho inmobiliario, empresarial y sucesiones en Trujillo." />
          <meta name="twitter:image" content="https://www.paredesifuentes.com/assets/img/og-image.jpg" />

          {/* Geo (búsqueda local) */}
          <meta name="geo.region" content="PE-LAL" />
          <meta name="geo.placename" content="Trujillo, Perú" />
          <meta name="geo.position" content="-8.1116;-79.0288" />
          <meta name="ICBM" content="-8.1116, -79.0288" />

          {/* Schema.org JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
          />

          {/* Favicon */}
          <link rel="shortcut icon" href="/assets/img/favicon.ico" />
          <link rel="icon" type="image/x-icon" href="/assets/img/favicon.ico" />

          {/* Fuentes */}
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;800&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Teko:300,400,500,600,700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display:400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />

          {/* Font Awesome */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
