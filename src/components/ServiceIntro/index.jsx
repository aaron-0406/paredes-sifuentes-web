import React from "react";
import Link from "next/link";

const ServiceIntro = ({ description, benefits, ctaText, ctaLink }) => {
  return (
    <section
      style={{
        background: "#fff",
        padding: "80px 0",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-4 mb-lg-0">
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
              Descripción del servicio
            </span>
            <h2
              style={{
                color: "#60202C",
                fontSize: "36px",
                fontWeight: "700",
                marginBottom: "25px",
                lineHeight: "1.3",
              }}
              className="playfont"
            >
              ¿Cómo te ayudamos?
            </h2>
            <p
              style={{
                color: "#555",
                fontSize: "16px",
                lineHeight: "1.9",
                marginBottom: "30px",
              }}
            >
              {description}
            </p>
            <Link href={ctaLink || "/contacto"}>
              <a
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#60202C",
                  color: "#F0ECE1",
                  padding: "15px 30px",
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
                <i className="pe-7s-call" style={{ fontSize: "18px" }} />
                {ctaText || "Solicitar asesoría"}
              </a>
            </Link>
          </div>
          <div className="col-lg-5">
            <div
              style={{
                background: "#F0ECE1",
                padding: "35px",
                borderRadius: "8px",
                borderLeft: "4px solid #B5844F",
              }}
            >
              <h4
                style={{
                  color: "#60202C",
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "25px",
                }}
              >
                Beneficios
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {benefits &&
                  benefits.map((benefit, index) => (
                    <li
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        marginBottom: index < benefits.length - 1 ? "18px" : 0,
                        color: "#555",
                        fontSize: "15px",
                        lineHeight: "1.6",
                      }}
                    >
                      <i
                        className="pe-7s-check"
                        style={{
                          color: "#B5844F",
                          fontSize: "20px",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      />
                      {benefit}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceIntro;
