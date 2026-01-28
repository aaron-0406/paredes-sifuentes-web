/* eslint-disable @next/next/no-img-element */
import React from "react";

const TeamExpanded = () => {
  const founders = [
    {
      id: 1,
      image: "/assets/img/team/1.jpg",
      name: "Piero Paredes",
      title: "Socio Fundador",
      bio: "Especialista en derecho inmobiliario y protección patrimonial. Ha representado a más de 200 familias en casos de propiedad, sucesiones y litigios civiles.",
    },
    {
      id: 2,
      image: "/assets/img/team/2.jpg",
      name: "Natalí Sifuentes",
      title: "Socia Fundadora",
      bio: "Experta en derecho de familia y sucesiones. Su enfoque combina estrategia legal con atención cercana, logrando soluciones que protegen el bienestar de las familias.",
    },
  ];

  const team = [
    {
      id: 3,
      image: "/assets/img/team/3.jpg",
      name: "Aaron Paredes",
      title: "Administrador de Sistemas",
    },
    {
      id: 4,
      image: "/assets/img/team/4.jpg",
      name: "Brayan Paredes",
      title: "Soporte de TI",
    },
  ];

  return (
    <section className="team-expanded section-padding">
      <div className="container">
        <div className="section-head text-center mb-50">
          <h6
            className="wow fadeInDown"
            data-wow-delay=".3s"
            style={{ color: "#B5844F", letterSpacing: "2px" }}
          >
            NUESTRO EQUIPO
          </h6>
          <h4
            className="playfont wow fadeInUp"
            data-wow-delay=".5s"
            style={{ color: "#60202C" }}
          >
            Quiénes somos
          </h4>
        </div>

        {/* Founders - prominent */}
        <div className="row justify-content-center mb-50">
          {founders.map((person, index) => (
            <div
              className="col-lg-5 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.3 + index * 0.2}s`}
              key={person.id}
            >
              <div
                className="founder-card"
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                  marginBottom: "30px",
                }}
              >
                <div
                  className="founder-image"
                  style={{
                    height: "320px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                </div>
                <div
                  className="founder-info"
                  style={{
                    padding: "25px",
                    borderTop: "3px solid #B5844F",
                  }}
                >
                  <h5
                    style={{
                      color: "#60202C",
                      marginBottom: "5px",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    {person.name}
                  </h5>
                  <span
                    style={{
                      color: "#B5844F",
                      fontSize: "13px",
                      fontWeight: "500",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      display: "block",
                      marginBottom: "15px",
                    }}
                  >
                    {person.title}
                  </span>
                  <p
                    style={{
                      color: "#666",
                      fontSize: "14px",
                      lineHeight: "1.7",
                      margin: 0,
                    }}
                  >
                    {person.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support team - smaller */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="support-team text-center wow fadeInUp"
              data-wow-delay=".5s"
            >
              <p
                style={{
                  color: "#999",
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "20px",
                }}
              >
                Equipo de soporte
              </p>
              <div
                className="d-flex justify-content-center gap-4 flex-wrap"
              >
                {team.map((person) => (
                  <div
                    key={person.id}
                    className="support-member text-center"
                    style={{ maxWidth: "140px" }}
                  >
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        margin: "0 auto 10px",
                        border: "2px solid #D4C4AD",
                      }}
                    >
                      <img
                        src={person.image}
                        alt={person.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <h6
                      style={{
                        color: "#60202C",
                        fontSize: "14px",
                        marginBottom: "2px",
                      }}
                    >
                      {person.name}
                    </h6>
                    <span
                      style={{
                        color: "#999",
                        fontSize: "11px",
                      }}
                    >
                      {person.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamExpanded;
