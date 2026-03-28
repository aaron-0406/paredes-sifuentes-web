import React from "react";
import Head from "next/head";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import AboutUs4 from "../../components/About-Us4";
import TeamExpanded from "../../components/TeamExpanded";
import Cobertura from "../../components/Cobertura";
import AreasPractica from "../../components/AreasPractica";

const About = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  return (
    <MainLayout>
      <Head>
        <title>Sobre Nosotros | Paredes Sifuentes Abogados – Trujillo</title>
        <meta name="description" content="Conoce al equipo de Paredes Sifuentes Abogados. Socios especializados con presencia en Trujillo, Lima, Chimbote, Huarmey y atención virtual en todo el Perú." />
        <link rel="canonical" href="https://www.paredesifuentes.com/nosotros" />
        <meta property="og:title" content="Sobre Nosotros | Paredes Sifuentes Abogados" />
        <meta property="og:url" content="https://www.paredesifuentes.com/nosotros" />
      </Head>
      <PageHeader
        title="Sobre Nosotros"
        fullPath={[
          { id: 1, name: "Inicio", url: "/" },
          { id: 2, name: "Nosotros", url: "/nosotros" },
        ]}
        image="/assets/img/pg1.jpg"
      />
      <AboutUs4 />
      <TeamExpanded />
      <Cobertura />
      <AreasPractica />
    </MainLayout>
  );
};

export default About;
