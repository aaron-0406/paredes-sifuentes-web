import React from "react";

const ContactChannels = () => {
  const channels = [
    {
      icon: "fab fa-whatsapp",
      title: "WhatsApp",
      subtitle: "Respuesta inmediata",
      info: "+51 952 163 269",
      buttonText: "Escribir ahora",
      link: "https://api.whatsapp.com/send/?phone=51952163269&text=Hola%2C+tengo+una+consulta+legal&type=phone_number&app_absent=0",
      featured: true,
    },
    {
      icon: "fas fa-phone-alt",
      title: "Teléfono",
      subtitle: "Atención telefónica",
      info: "+51 952 163 269",
      buttonText: "Llamar ahora",
      link: "tel:+51952163269",
      featured: false,
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      subtitle: "Consultas detalladas",
      info: "paredesifuentes@gmail.com",
      buttonText: "Enviar email",
      link: "mailto:paredesifuentes@gmail.com",
      featured: false,
    },
  ];

  return (
    <section
      style={{
        padding: "60px 0",
        background: "#F0ECE1",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          {channels.map((channel, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 mb-4 mb-lg-0"
            >
              <div
                className="channel-card wow fadeInUp"
                data-wow-delay={`${0.2 + index * 0.1}s`}
                style={{
                  background: channel.featured ? "#60202C" : "#fff",
                  borderRadius: "12px",
                  padding: "40px 30px",
                  textAlign: "center",
                  height: "100%",
                  border: channel.featured ? "none" : "2px solid transparent",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 40px rgba(96, 32, 44, 0.15)";
                  if (!channel.featured) {
                    e.currentTarget.style.borderColor = "#B5844F";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  if (!channel.featured) {
                    e.currentTarget.style.borderColor = "transparent";
                  }
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: channel.featured ? "#B5844F" : "#F0ECE1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 25px",
                    transition: "all 0.3s ease",
                  }}
                >
                  <i
                    className={channel.icon}
                    style={{
                      fontSize: "32px",
                      color: channel.featured ? "#F0ECE1" : "#B5844F",
                    }}
                  ></i>
                </div>

                {/* Title */}
                <h4
                  className="playfont"
                  style={{
                    color: channel.featured ? "#F0ECE1" : "#60202C",
                    fontSize: "24px",
                    marginBottom: "8px",
                  }}
                >
                  {channel.title}
                </h4>

                {/* Subtitle */}
                <p
                  style={{
                    color: channel.featured ? "#D4C4AD" : "#666",
                    fontSize: "14px",
                    marginBottom: "15px",
                  }}
                >
                  {channel.subtitle}
                </p>

                {/* Info */}
                <p
                  style={{
                    color: channel.featured ? "#F0ECE1" : "#60202C",
                    fontSize: "16px",
                    fontWeight: "600",
                    marginBottom: "25px",
                  }}
                >
                  {channel.info}
                </p>

                {/* Button */}
                <a
                  href={channel.link}
                  target={channel.link.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    channel.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  style={{
                    display: "inline-block",
                    padding: "12px 28px",
                    background: channel.featured ? "#F0ECE1" : "#60202C",
                    color: channel.featured ? "#60202C" : "#F0ECE1",
                    fontSize: "13px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    borderRadius: "4px",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (channel.featured) {
                      e.currentTarget.style.background = "#B5844F";
                      e.currentTarget.style.color = "#F0ECE1";
                    } else {
                      e.currentTarget.style.background = "#B5844F";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (channel.featured) {
                      e.currentTarget.style.background = "#F0ECE1";
                      e.currentTarget.style.color = "#60202C";
                    } else {
                      e.currentTarget.style.background = "#60202C";
                      e.currentTarget.style.color = "#F0ECE1";
                    }
                  }}
                >
                  {channel.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactChannels;
