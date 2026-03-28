import React from "react";
import Head from "next/head";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import ServicesHero from "../../components/ServicesHero";
import ServicesGrid from "../../components/ServicesGrid";
import TrustIndicators from "../../components/TrustIndicators";
import CallToAction from "../../components/CallToAction";
import Cobertura from "../../components/Cobertura";

const Servicios = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  return (
    <MainLayout>
      <Head>
        <title>Servicios Legales en Trujillo | Paredes Sifuentes Abogados</title>
        <meta name="description" content="9 áreas de práctica legal: inmobiliario, desalojo, sucesiones, empresarial, litigios y más. Atención en Trujillo, Lima, Chimbote, Huarmey y todo el Perú." />
        <link rel="canonical" href="https://www.paredesifuentes.com/servicios" />
        <meta property="og:title" content="Servicios Legales | Paredes Sifuentes Abogados – Trujillo" />
        <meta property="og:url" content="https://www.paredesifuentes.com/servicios" />
      </Head>
      <PageHeader
        title="Nuestros Servicios"
        fullPath={[
          { id: 1, name: "inicio", url: "/" },
          { id: 2, name: "servicios", url: "/servicios" },
        ]}
        image="/assets/img/pg3.jpg"
      />
      <ServicesHero />
      <ServicesGrid />
      <TrustIndicators />
      <CallToAction
        title="¿Necesitas asesoría legal?"
        subtitle="Contáctanos y te orientamos sobre tu caso sin compromiso"
        buttonText="Escríbenos por WhatsApp"
        variant="dark"
      />
      <Cobertura />
    </MainLayout>
  );
};

export default Servicios;
