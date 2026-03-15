/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import AboutUs1 from "../../components/About-Us1";
import IntroWithHorizontal from "../../components/Intro-with-horizontal";
import LightLayout from "../../layouts/light";
import HomeServices from "../../components/HomeServices";
import Process from "../../components/Process";
import CallToAction from "../../components/CallToAction";
import WhyChooseUs from "../../components/WhyChooseUs";
import InstagramFeed from "../../components/InstagramFeed";

const Home1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout footerClass={"mt-30"}>
      <Head>
        <title>Paredes Sifuentes Abogados | Derecho Inmobiliario en Trujillo, Perú</title>
        <meta name="description" content="Abogados en Trujillo especializados en derecho inmobiliario, empresarial y sucesiones. +350 casos resueltos. Consulta tu caso hoy." />
        <link rel="canonical" href="https://www.paredesifuentes.com/" />
        <meta property="og:title" content="Paredes Sifuentes Abogados | Derecho Inmobiliario en Trujillo" />
        <meta property="og:url" content="https://www.paredesifuentes.com/" />
      </Head>
      <IntroWithHorizontal />
      <AboutUs1 />
      <WhyChooseUs />
      <CallToAction
        title="¿Necesitas asesoría legal?"
        subtitle="Cuéntanos tu caso y te orientamos sin compromiso"
        buttonText="Habla con un abogado"
        variant="dark"
      />
      <Process />
      <HomeServices />
      <InstagramFeed elfsightAppId="daba3e81-5b11-46df-bcc2-7215403c8b9a" />
      <CallToAction
        title="¿Listo para proteger tus derechos?"
        subtitle="Nuestro equipo está preparado para ayudarte"
        buttonText="Contáctanos ahora"
        variant="dark"
      />
    </LightLayout>
  );
};

export default Home1;
