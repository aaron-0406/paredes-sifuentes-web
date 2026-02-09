import React from "react";

const ServicesHero = () => {
  return (
    <section
      style={{
        background: "#F0ECE1",
        padding: "60px 0 20px",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
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
              Nuestras Especialidades
            </span>
            <h2
              style={{
                color: "#60202C",
                fontSize: "42px",
                fontWeight: "700",
                marginBottom: "20px",
                lineHeight: "1.2",
              }}
              className="playfont"
            >
              Soluciones legales para cada situación
            </h2>
            <p
              style={{
                color: "#666",
                fontSize: "16px",
                lineHeight: "1.8",
                marginBottom: "25px",
                maxWidth: "600px",
                margin: "0 auto 25px",
              }}
            >
              Contamos con experiencia en diversas áreas del derecho para brindarte
              la asesoría que necesitas, cuando la necesitas.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "30px",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    color: "#B5844F",
                    fontSize: "28px",
                    fontWeight: "700",
                  }}
                  className="playfont"
                >
                  9
                </span>
                <span
                  style={{
                    color: "#60202C",
                    fontSize: "14px",
                    fontWeight: "500",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Áreas de práctica
                </span>
              </div>
              <div
                style={{
                  width: "1px",
                  height: "30px",
                  background: "#D4C4AD",
                }}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    color: "#B5844F",
                    fontSize: "28px",
                    fontWeight: "700",
                  }}
                  className="playfont"
                >
                  +350
                </span>
                <span
                  style={{
                    color: "#60202C",
                    fontSize: "14px",
                    fontWeight: "500",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Casos resueltos
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
