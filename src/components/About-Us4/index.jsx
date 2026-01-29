import React from "react";

const AboutUs4 = () => {
  const stats = [
    { id: 1, number: "352", label: "Casos resueltos", prefix: "+" },
    { id: 2, number: "567", label: "Clientes que confiaron", prefix: "+" },
    { id: 3, number: "6", label: "Años de experiencia", prefix: "", suffix: "" },
  ];

  return (
    <section className="about section-padding" style={{ background: "#fff" }}>
      <div className="container">
        {/* Stats Row */}
        <div
          className="stats-elegant wow fadeInUp"
          data-wow-delay=".3s"
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0",
            marginBottom: "60px",
            borderTop: "1px solid #D4C4AD",
            borderBottom: "1px solid #D4C4AD",
            padding: "40px 0",
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              style={{
                flex: "1",
                minWidth: "200px",
                textAlign: "center",
                padding: "20px 40px",
                borderRight: index < stats.length - 1 ? "1px solid #D4C4AD" : "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "center",
                  gap: "2px",
                  marginBottom: "10px",
                }}
              >
                {stat.prefix && (
                  <span
                    style={{
                      fontSize: "24px",
                      color: "#B5844F",
                      fontWeight: "300",
                    }}
                  >
                    {stat.prefix}
                  </span>
                )}
                <span
                  className="playfont"
                  style={{
                    fontSize: "52px",
                    fontWeight: "400",
                    color: "#60202C",
                    lineHeight: "1",
                  }}
                >
                  {stat.number}
                </span>
                {stat.suffix && (
                  <span
                    style={{
                      fontSize: "18px",
                      color: "#B5844F",
                      marginLeft: "5px",
                    }}
                  >
                    {stat.suffix}
                  </span>
                )}
              </div>
              <p
                style={{
                  fontSize: "13px",
                  color: "#666",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  margin: 0,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Text Content */}
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="txt-cont wow fadeInUp" data-wow-delay=".5s">
              <h4
                className="playfont mb-25"
                style={{ color: "#60202C", lineHeight: "1.4", fontSize: "28px" }}
              >
                Cuando tienes un problema legal, necesitas más que un abogado.
              </h4>
              <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.8" }}>
                Necesitas alguien que entienda tu situación, que actúe rápido y
                que te explique cada paso sin tecnicismos. Eso es exactamente lo
                que hacemos. Desde 2019 hemos ayudado a familias y empresas en
                todo el Perú a proteger su patrimonio, resolver conflictos y
                tomar decisiones legales con confianza.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs4;
