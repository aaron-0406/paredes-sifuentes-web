import React, { useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import PostDetails from "../../components/Post-details";
import services from "../../data/services.json"; // tu JSON estático

const ServiceDetails = () => {
  const router = useRouter();
  const { name } = router.query; // slug de la ruta

  useEffect(() => {
    document.querySelector("body")?.classList.add("index3");
  }, []);

  // Normalizar por si name viene como array
  const slug = Array.isArray(name) ? name[0] : name;

  // Buscar el servicio por slug; si no existe, usar el primer objeto del JSON como default
  const found = slug ? services.find((s) => s.slug === slug) : null;
  const service = found || services[0];

  return (
    <MainLayout>
      <PageHeader
        title={service ? `${service.title}` : "Cargando..."}
        fullPath={[
          { id: 1, name: "inicio", url: "/home" },
          { id: 2, name: "servicios", url: "/services" },
          {
            id: 3,
            name: service?.title || "especialidad",
            url: `/services/${service?.slug || ""}`,
          },
        ]}
      />
      <PostDetails service={service} />
    </MainLayout>
  );
};

export default ServiceDetails;
