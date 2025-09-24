import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="es-PE">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="keywords"
            content="React Nextjs Template Archo onepage themeforest"
          />
          <meta
            name="description"
            content="En Paredes Sifuentes Abogados trabajamos para proteger lo que más valoras: tu familia, tu empresa y tu patrimonio. Somos un estudio jurídico con sede en Trujillo, Perú, especializado en derecho inmobiliario, empresarial, sucesiones, familia, litigios civiles y penales, propiedad intelectual e Indecopi.
Nuestro equipo combina la experiencia legal de abogados especialistas con el soporte tecnológico de profesionales de TI, lo que nos permite ofrecer un servicio moderno, seguro y eficiente. Creemos que cada caso es único y merece una solución personalizada, por eso acompañamos a cada cliente con ética, transparencia y compromiso.
Ya sea que busques asesoría para tu empresa, respaldo en un proceso judicial, o seguridad en tus inversiones inmobiliarias, en Paredes Sifuentes Abogados encontrarás un aliado estratégico para cada etapa de tu vida y negocio."
          />
          <meta name="author" content="Paredes Sifuentes Abogados" />
          <meta
            name="keywords"
            content="Paredes Sifuentes, estudio jurídico Trujillo, abogados en Trujillo, derecho inmobiliario Perú, derecho empresarial, derecho sucesorio, litigios civiles, litigios penales, propiedad intelectual, Indecopi"
          />

          <meta
            property="og:title"
            content="Paredes Sifuentes Abogados | Estudio Jurídico en Trujillo"
          />
          <meta
            property="og:description"
            content="Asesoría legal en Trujillo y Perú: derecho inmobiliario, empresarial, sucesiones, litigios y más."
          />
          <meta property="og:image" content="/assets/img/og-image.jpg" />
          <meta property="og:url" content="https://www.paredessifuentes.com" />
          <meta property="og:type" content="website" />

          <meta name="geo.region" content="PE-LAL" />
          <meta name="geo.placename" content="Trujillo, Perú" />
          <meta name="geo.position" content="-8.1116;-79.0288" />
          <meta name="ICBM" content="-8.1116, -79.0288" />

          <link rel="shortcut icon" href="/assets/img/favicon.ico" />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
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
