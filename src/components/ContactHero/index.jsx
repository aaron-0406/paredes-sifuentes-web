import React from "react";

const ContactHero = () => {
  const whatsappLink =
    "https://api.whatsapp.com/send/?phone=51952163269&text=Hola%2C+tengo+una+consulta+legal&type=phone_number&app_absent=0";

  return (
    <header
      className="contact-hero"
      style={{
        position: "relative",
        height: "60vh",
        minHeight: "500px",
        paddingTop: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url(/assets/img/pg2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 3,
        }}
      >
        <h1
          className="playfont wow fadeInUp"
          data-wow-delay=".2s"
          style={{
            color: "#F0ECE1",
            fontSize: "clamp(32px, 5vw, 48px)",
            marginBottom: "15px",
            fontWeight: "600",
          }}
        >
          Hablemos de tu caso
        </h1>
        <p
          className="wow fadeInUp"
          data-wow-delay=".3s"
          style={{
            color: "#D4C4AD",
            fontSize: "clamp(16px, 2vw, 20px)",
            marginBottom: "35px",
            maxWidth: "500px",
            margin: "0 auto 35px",
          }}
        >
          Respondemos en minutos, no en días
        </p>

        <div
          className="buttons wow fadeInUp"
          data-wow-delay=".4s"
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* WhatsApp Button - Principal */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "16px 32px",
              backgroundColor: "#B5844F",
              color: "#F0ECE1",
              fontSize: "15px",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "1px",
              borderRadius: "4px",
              textDecoration: "none",
              transition: "all 0.3s ease",
              animation: "pulse 2s infinite",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 8px 25px rgba(181, 132, 79, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <i className="fab fa-whatsapp" style={{ fontSize: "20px" }}></i>
            Escríbenos ahora
          </a>

          {/* Call Button - Secondary */}
          <a
            href="tel:+51952163269"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "16px 32px",
              backgroundColor: "transparent",
              color: "#F0ECE1",
              fontSize: "15px",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "1px",
              borderRadius: "4px",
              border: "2px solid #F0ECE1",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#F0ECE1";
              e.currentTarget.style.color = "#60202C";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#F0ECE1";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <i className="fas fa-phone-alt" style={{ fontSize: "16px" }}></i>
            Llamar ahora
          </a>
        </div>
      </div>

    </header>
  );
};

export default ContactHero;
