/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = ({ classText }) => {
  const socialLinks = [
    {
      icon: "fab fa-facebook-f",
      url: "https://www.facebook.com/profile.php?id=61573933954882",
      label: "Facebook",
    },
    {
      icon: "fab fa-instagram",
      url: "https://www.instagram.com/paredes.sifuentes?igsh=aW0xOXEwbWVzcGtk",
      label: "Instagram",
    },
    {
      icon: "fab fa-tiktok",
      url: "https://www.tiktok.com/@paredes.sifuentes?_t=zn-8ua1sgad9vj&_r=1",
      label: "TikTok",
    },
    {
      icon: "fab fa-whatsapp",
      url: "https://api.whatsapp.com/send/?phone=51952163269&text=Hola%2C+tengo+una+consulta&type=phone_number&app_absent=0",
      label: "WhatsApp",
    },
  ];

  return (
    <footer
      className={`${classText ? classText : ""}`}
      style={{ paddingTop: "80px" }}
    >
      <div className="container">
        {/* Contenido principal */}
        <div className="row" style={{ paddingBottom: "40px" }}>
          {/* Columna 1: Branding */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="footer-branding">
              <img
                src="/assets/img/logo-light.png"
                alt="Paredes Sifuentes Abogados"
                style={{ maxWidth: "180px" }}
              />
            </div>
          </div>

          {/* Columna 2: Contacto */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="footer-contact">
              <h6
                style={{
                  color: "#B5844F",
                  fontSize: "14px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "20px",
                }}
              >
                Contacto
              </h6>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "15px",
                  }}
                >
                  <span
                    className="pe-7s-map-marker"
                    style={{ color: "#B5844F", fontSize: "20px" }}
                  ></span>
                  <span style={{ color: "#F0ECE1", fontSize: "14px" }}>
                    Trujillo, Perú
                  </span>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "15px",
                  }}
                >
                  <span
                    className="pe-7s-mail"
                    style={{ color: "#B5844F", fontSize: "20px" }}
                  ></span>
                  <a
                    href="mailto:paredesifuentes@gmail.com"
                    style={{ color: "#F0ECE1", fontSize: "14px" }}
                  >
                    paredesifuentes@gmail.com
                  </a>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <span
                    className="pe-7s-call"
                    style={{ color: "#B5844F", fontSize: "20px" }}
                  ></span>
                  <a
                    href="tel:+51952163269"
                    style={{ color: "#F0ECE1", fontSize: "14px" }}
                  >
                    +51 952 163 269
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Columna 3: Redes Sociales */}
          <div className="col-lg-4 col-md-12">
            <div className="footer-social">
              <h6
                style={{
                  color: "#B5844F",
                  fontSize: "14px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "20px",
                }}
              >
                Síguenos
              </h6>
              <div style={{ display: "flex", gap: "15px" }}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "50%",
                      border: "1px solid #D4C4AD",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#F0ECE1",
                      fontSize: "18px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#B5844F";
                      e.currentTarget.style.borderColor = "#B5844F";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.borderColor = "#D4C4AD";
                      e.currentTarget.style.color = "#F0ECE1";
                    }}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div
          style={{
            borderTop: "1px solid rgba(212, 196, 173, 0.3)",
            paddingTop: "25px",
            paddingBottom: "10px",
          }}
        >
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <p
                style={{
                  color: "#D4C4AD",
                  fontSize: "13px",
                  margin: 0,
                }}
              >
                © 2025{" "}
                <span style={{ color: "#B5844F" }}>
                  Grupo Corporativo Paredes
                </span>
                . Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
