import React from "react";
import Head from "next/head";
import Link from "next/link";
import MainLayout from "../layouts/main";
import mouseEffect from "../common/mouseEffect";

const ServerError = () => {
  React.useEffect(() => {
    document.querySelector("body")?.classList.add("index3");
    mouseEffect();
  }, []);

  return (
    <MainLayout>
      <Head>
        <title>Error del servidor | Paredes Sifuentes Abogados</title>
      </Head>

      <section
        style={{
          background: "#F0ECE1",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "120px",
          paddingBottom: "80px",
          textAlign: "center",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <p
                style={{
                  fontSize: "120px",
                  fontWeight: "700",
                  color: "#D4C4AD",
                  lineHeight: "1",
                  marginBottom: "0",
                  fontFamily: "playfair display, serif",
                }}
              >
                500
              </p>
              <h2
                style={{
                  color: "#60202C",
                  fontFamily: "playfair display, serif",
                  fontSize: "32px",
                  marginBottom: "16px",
                }}
              >
                Error del servidor
              </h2>
              <p
                style={{
                  color: "#60202C",
                  opacity: "0.7",
                  fontSize: "16px",
                  marginBottom: "40px",
                }}
              >
                Ocurrió un error inesperado. Por favor intenta nuevamente en unos minutos.
              </p>
              <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/">
                  <a
                    style={{
                      display: "inline-block",
                      padding: "15px 40px",
                      background: "#60202C",
                      color: "#F0ECE1",
                      fontSize: "13px",
                      fontWeight: "500",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#4a1820";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#60202C";
                    }}
                  >
                    Volver al inicio
                  </a>
                </Link>
                <Link href="/contacto">
                  <a
                    style={{
                      display: "inline-block",
                      padding: "15px 40px",
                      border: "2px solid #60202C",
                      color: "#60202C",
                      fontSize: "13px",
                      fontWeight: "500",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#60202C";
                      e.currentTarget.style.color = "#F0ECE1";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#60202C";
                    }}
                  >
                    Contáctanos
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ServerError;
