import React from "react";
import Link from "next/link";
import servicesData from "../../data/blog1.json";

const RelatedServices = ({ currentSlug, category }) => {
  const relatedServices = servicesData
    .filter((s) => s.slug !== currentSlug)
    .filter((s) => s.category === category || !category)
    .slice(0, 3);

  if (relatedServices.length === 0) return null;

  return (
    <section
      style={{
        background: "#F0ECE1",
        padding: "80px 0",
      }}
    >
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <span
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
              Explora más
            </span>
            <h2
              style={{
                color: "#60202C",
                fontSize: "36px",
                fontWeight: "700",
                lineHeight: "1.3",
              }}
              className="playfont"
            >
              Servicios relacionados
            </h2>
          </div>
        </div>
        <div className="row">
          {relatedServices.map((service) => (
            <div key={service.id} className="col-lg-4 col-md-6 mb-4">
              <Link href={`/servicios/${service.slug}`}>
                <a style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      background: "#fff",
                      borderRadius: "8px",
                      overflow: "hidden",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                      transition: "all 0.3s ease",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      border: "2px solid transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow =
                        "0 12px 30px rgba(0,0,0,0.12)";
                      e.currentTarget.style.borderColor = "#B5844F";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 20px rgba(0,0,0,0.08)";
                      e.currentTarget.style.borderColor = "transparent";
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        height: "180px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "12px",
                          left: "12px",
                          background: "#B5844F",
                          color: "#fff",
                          padding: "4px 12px",
                          fontSize: "11px",
                          fontWeight: "500",
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                          borderRadius: "4px",
                        }}
                      >
                        {service.category}
                      </div>
                    </div>
                    <div style={{ padding: "20px" }}>
                      <h4
                        style={{
                          color: "#60202C",
                          fontSize: "18px",
                          fontWeight: "600",
                          marginBottom: "10px",
                          lineHeight: "1.3",
                        }}
                      >
                        {service.title}
                      </h4>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          color: "#B5844F",
                          fontSize: "13px",
                          fontWeight: "500",
                        }}
                      >
                        <span>Ver servicio</span>
                        <i
                          className="pe-7s-angle-right"
                          style={{ fontSize: "18px", marginLeft: "3px" }}
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
