import React from "react";
import Link from "next/link";

const HomeServices = () => {
  const services = [
    {
      id: 1,
      icon: "pe-7s-home",
      title: "Derecho Inmobiliario",
      description: "Compra-venta, arrendamientos, prescripción y protección registral.",
      slug: "derecho-inmobiliario",
      image: "/assets/img/blog/1.jpg",
      featured: true,
    },
    {
      id: 2,
      icon: "pe-7s-shield",
      title: "Seguro de Desalojo",
      description: "Recuperación de inmuebles y protección frente a inquilinos morosos.",
      slug: "seguro-de-desalojo",
      image: "/assets/img/blog/2.jpg",
      featured: false,
    },
    {
      id: 3,
      icon: "pe-7s-wallet",
      title: "Derecho Empresarial",
      description: "Constitución, gobierno societario y transformaciones de empresas.",
      slug: "derecho-empresarial",
      image: "/assets/img/blog/4.jpg",
      featured: false,
    },
    {
      id: 4,
      icon: "pe-7s-users",
      title: "Derecho de Sucesiones",
      description: "Herencias, testamentos, anticipos de legítima y partición.",
      slug: "derecho-de-sucesiones",
      image: "/assets/img/blog/5.jpg",
      featured: true,
    },
    {
      id: 5,
      icon: "pe-7s-hammer",
      title: "Litigios Civiles",
      description: "Familia, propiedad, posesión y recuperación de capital.",
      slug: "litigios-civiles-y-prevencion",
      image: "/assets/img/blog/6.jpg",
      featured: false,
    },
    {
      id: 6,
      icon: "pe-7s-display1",
      title: "Inversiones Inmobiliarias",
      description: "Remates judiciales, flipping y cesión de derechos.",
      slug: "inversiones-inmobiliarias",
      image: "/assets/img/blog/8.jpg",
      featured: false,
    },
  ];

  return (
    <section
      style={{
        background: "#fff",
        padding: "80px 0",
      }}
    >
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <span
              className="wow fadeInDown"
              data-wow-delay=".2s"
              style={{
                color: "#B5844F",
                fontSize: "14px",
                fontWeight: "600",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "15px",
                display: "block",
              }}
            >
              Áreas de práctica
            </span>
            <h2
              className="playfont wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                color: "#60202C",
                fontSize: "42px",
                fontWeight: "700",
                marginBottom: "20px",
                lineHeight: "1.2",
              }}
            >
              ¿En qué podemos ayudarte?
            </h2>
          </div>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`${service.featured ? "col-lg-6" : "col-lg-3"} col-md-6 mb-4 wow fadeInUp`}
              data-wow-delay={`${0.2 + index * 0.1}s`}
            >
              <Link href={`/servicios/${service.slug}`}>
                <a style={{ textDecoration: "none", display: "block", height: "100%" }}>
                  <div
                    className="home-service-card"
                    style={{
                      position: "relative",
                      height: "300px",
                      borderRadius: "8px",
                      overflow: "hidden",
                      cursor: "pointer",
                    }}
                  >
                    {/* Background Image */}
                    <div
                      className="home-service-bg"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "transform 0.5s ease",
                      }}
                    />
                    {/* Overlay */}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "linear-gradient(to top, rgba(96, 32, 44, 0.7) 0%, rgba(96, 32, 44, 0.15) 50%, rgba(0, 0, 0, 0) 100%)",
                        transition: "all 0.3s ease",
                      }}
                    />
                    {/* Content */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: "25px",
                        zIndex: 2,
                      }}
                    >
                      <span
                        className={service.icon}
                        style={{
                          fontSize: "36px",
                          color: "#B5844F",
                          marginBottom: "15px",
                          display: "block",
                        }}
                      />
                      <h4
                        style={{
                          color: "#fff",
                          fontSize: service.featured ? "24px" : "20px",
                          fontWeight: "600",
                          marginBottom: "10px",
                          lineHeight: "1.3",
                        }}
                      >
                        {service.title}
                      </h4>
                      <p
                        style={{
                          color: "#fff",
                          fontSize: "14px",
                          lineHeight: "1.6",
                          marginBottom: "15px",
                          opacity: 0.85,
                        }}
                      >
                        {service.description}
                      </p>
                      <span
                        style={{
                          color: "#B5844F",
                          fontSize: "13px",
                          fontWeight: "600",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "5px",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                        }}
                      >
                        Ver más
                        <i className="pe-7s-angle-right" style={{ fontSize: "20px" }} />
                      </span>
                    </div>
                    {/* Hover border */}
                    <div
                      className="home-service-border"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        border: "3px solid transparent",
                        borderRadius: "8px",
                        transition: "border-color 0.3s ease",
                        pointerEvents: "none",
                      }}
                    />
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>

        <div
          className="text-center mt-4 wow fadeInUp"
          data-wow-delay=".6s"
        >
          <Link href="/servicios">
            <a
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "15px 35px",
                background: "#60202C",
                color: "#F0ECE1",
                fontSize: "14px",
                fontWeight: "500",
                letterSpacing: "1px",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "4px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#B5844F";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#60202C";
              }}
            >
              Ver todos los servicios
              <i className="pe-7s-angle-right" style={{ fontSize: "20px" }} />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
