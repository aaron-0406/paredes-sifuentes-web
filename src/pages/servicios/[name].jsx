import React, { useEffect } from "react";
import Head from "next/head";
import MainLayout from "../../layouts/main";
import ServiceHero from "../../components/ServiceHero";
import ServiceIntro from "../../components/ServiceIntro";
import SubservicesList from "../../components/SubservicesList";
import CallToAction from "../../components/CallToAction";
import ServiceFAQ from "../../components/ServiceFAQ";
import RelatedServices from "../../components/RelatedServices";
import Cobertura from "../../components/Cobertura";
import services from "../../data/services.json";

const ServiceDetails = ({ service }) => {
  useEffect(() => {
    document.querySelector("body")?.classList.add("index3");
  }, []);

  const pageTitle = `${service.title} en Trujillo | Paredes Sifuentes Abogados`;
  const pageDescription = service.description
    ? `${service.description.slice(0, 130)}...`
    : `Servicio de ${service.title} en Trujillo. Asesoría legal especializada con +350 casos resueltos.`;
  const pageUrl = `https://www.paredesifuentes.com/servicios/${service.slug}`;

  return (
    <MainLayout>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
      </Head>
      <ServiceHero
        title={service.title}
        subtitle={service.hero?.subtitle || service.description}
        category={service.category}
        image={service.hero?.image || "/assets/img/pg3.jpg"}
      />
      <ServiceIntro
        description={service.description}
        benefits={service.benefits}
        ctaText={service.cta?.text}
        ctaLink={service.cta?.link}
      />
      <SubservicesList subservices={service.subservices} />
      <CallToAction
        title={`¿Necesitas ayuda con ${service.title.toLowerCase()}?`}
        subtitle="Nuestro equipo está listo para asesorarte"
        buttonText="Contactar ahora"
        variant="dark"
      />
      <ServiceFAQ faq={service.faq} serviceTitle={service.title} />
      <RelatedServices currentSlug={service.slug} category={service.category} />
      <Cobertura />
    </MainLayout>
  );
};

export async function getStaticPaths() {
  const paths = services.map((s) => ({
    params: { name: s.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const service = services.find((s) => s.slug === params.name);
  return { props: { service } };
}

export default ServiceDetails;
