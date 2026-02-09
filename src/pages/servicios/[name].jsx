import React, { useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "../../layouts/main";
import ServiceHero from "../../components/ServiceHero";
import ServiceIntro from "../../components/ServiceIntro";
import SubservicesList from "../../components/SubservicesList";
import CallToAction from "../../components/CallToAction";
import ServiceFAQ from "../../components/ServiceFAQ";
import RelatedServices from "../../components/RelatedServices";
import Cobertura from "../../components/Cobertura";
import services from "../../data/services.json";

const ServiceDetails = () => {
  const router = useRouter();
  const { name } = router.query;

  useEffect(() => {
    document.querySelector("body")?.classList.add("index3");
  }, []);

  const slug = Array.isArray(name) ? name[0] : name;
  const found = slug ? services.find((s) => s.slug === slug) : null;
  const service = found || services[0];

  if (!service) {
    return (
      <MainLayout>
        <div style={{ padding: "200px 0", textAlign: "center" }}>
          <h2>Cargando...</h2>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
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

export default ServiceDetails;
