import React from "react";

const CallToAction = ({
  title = "¿Tienes un caso legal?",
  subtitle = "Agenda tu consulta gratuita y recibe orientación profesional",
  buttonText = "Agenda tu consulta",
  variant = "light" // "light" o "dark"
}) => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=51952163269&text=Hola%2C+quiero+agendar+una+consulta&type=phone_number&app_absent=0";

  const styles = {
    light: {
      background: "#F0ECE1",
      title: "#60202C",
      subtitle: "#60202C",
      button: {
        background: "#60202C",
        color: "#F0ECE1",
        border: "none",
      },
    },
    dark: {
      background: "#60202C",
      title: "#F0ECE1",
      subtitle: "#D4C4AD",
      button: {
        background: "#B5844F",
        color: "#F0ECE1",
        border: "none",
      },
    },
  };

  const currentStyle = styles[variant] || styles.light;

  return (
    <section
      className="call-to-action"
      style={{
        background: currentStyle.background,
        padding: "60px 0",
        textAlign: "center",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h3
              className="playfont wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                color: currentStyle.title,
                marginBottom: "15px",
                fontSize: "28px",
              }}
            >
              {title}
            </h3>
            <p
              className="wow fadeInUp"
              data-wow-delay=".4s"
              style={{
                color: currentStyle.subtitle,
                marginBottom: "30px",
                fontSize: "16px",
              }}
            >
              {subtitle}
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-curve wow fadeInUp"
              data-wow-delay=".5s"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 32px",
                fontSize: "15px",
                fontWeight: "500",
                textTransform: "uppercase",
                letterSpacing: "1px",
                borderRadius: "4px",
                transition: "all 0.3s ease",
                ...currentStyle.button,
              }}
            >
              <i className="fab fa-whatsapp" style={{ fontSize: "18px" }}></i>
              <span>{buttonText}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
