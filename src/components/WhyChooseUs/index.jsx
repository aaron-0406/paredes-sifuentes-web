import React from "react";

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: "pe-7s-clock",
      title: "Respuesta rápida",
      description: "Respondemos en minutos. Tu tiempo es valioso y lo sabemos.",
    },
    {
      id: 2,
      icon: "pe-7s-users",
      title: "Atención personalizada",
      description: "Cada caso es único. Te escuchamos y diseñamos una estrategia a tu medida.",
    },
    {
      id: 3,
      icon: "pe-7s-map-marker",
      title: "Cobertura nacional",
      description: "Presencia en Trujillo, Chimbote y Huarmey. Atención virtual en todo el Perú.",
    },
  ];

  return (
    <section
      className="why-choose-us section-padding"
      style={{ background: "#F0ECE1" }}
    >
      <div className="container">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <h6
                className="wow fadeInDown"
                data-wow-delay=".3s"
                style={{ color: "#B5844F" }}
              >
                NUESTRAS VENTAJAS
              </h6>
              <h4
                className="playfont wow flipInX"
                data-wow-delay=".5s"
                style={{ color: "#60202C" }}
              >
                ¿Por qué elegirnos?
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          {reasons.map((item, index) => (
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.2 + index * 0.1}s`}
              key={item.id}
            >
              <div
                className="item-box"
                style={{
                  padding: "30px",
                  marginBottom: "30px",
                  background: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
                  transition: "all 0.3s ease",
                  borderBottom: "3px solid transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderBottomColor = "#B5844F";
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderBottomColor = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <span
                  className={item.icon}
                  style={{
                    fontSize: "40px",
                    color: "#B5844F",
                    marginBottom: "20px",
                    display: "block",
                  }}
                ></span>
                <h6
                  style={{
                    color: "#60202C",
                    marginBottom: "10px",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  {item.title}
                </h6>
                <p
                  style={{
                    color: "#666",
                    fontSize: "14px",
                    lineHeight: "1.7",
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
