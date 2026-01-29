import React from "react";
import aboutUs1Data from "../../data/about-us1.json";

const AboutUs1 = () => {
  const stats = [
    { id: 1, number: "352", label: "Casos resueltos", prefix: "+" },
    { id: 2, number: "567", label: "Clientes", prefix: "+" },
    { id: 3, number: "6", label: "Años", prefix: "" },
  ];

  return (
    <section className="about section-padding" style={{ background: "#F0ECE1" }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Image Column */}
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="exp-img wow fadeInUp" data-wow-delay=".3s">
              <div
                className="img bg-img wow imago"
                style={{ backgroundImage: `url(${aboutUs1Data.image})` }}
              >
                <div className="since playfont">
                  <span>DESDE</span>
                  <span>{aboutUs1Data.exp.since}</span>
                </div>
                <div className="years playfont">
                  <h2>{aboutUs1Data.exp.nmb}</h2>
                  <h5>Años de experiencia</h5>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="col-lg-7">
            <div className="exp-content wow fadeInUp" data-wow-delay=".5s">
              <h6
                style={{
                  color: "#B5844F",
                  fontSize: "13px",
                  letterSpacing: "2px",
                  marginBottom: "15px",
                }}
              >
                SOBRE NOSOTROS
              </h6>
              <h2
                className="playfont"
                style={{
                  color: "#60202C",
                  fontSize: "36px",
                  lineHeight: "1.3",
                  marginBottom: "20px",
                }}
              >
                {aboutUs1Data.title.first} <br /> {aboutUs1Data.title.second}
              </h2>
              <p style={{ color: "#555", fontSize: "16px", lineHeight: "1.8" }}>
                {aboutUs1Data.content}
              </p>

              {/* Elegant Stats */}
              <div
                className="stats-row mt-40"
                style={{
                  display: "flex",
                  gap: "0",
                  borderTop: "1px solid #D4C4AD",
                  paddingTop: "30px",
                }}
              >
                {stats.map((stat, index) => (
                  <div
                    key={stat.id}
                    style={{
                      flex: "1",
                      textAlign: "center",
                      paddingRight: index < stats.length - 1 ? "20px" : "0",
                      marginRight: index < stats.length - 1 ? "20px" : "0",
                      borderRight:
                        index < stats.length - 1 ? "1px solid #D4C4AD" : "none",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        justifyContent: "center",
                        gap: "2px",
                        marginBottom: "5px",
                      }}
                    >
                      {stat.prefix && (
                        <span style={{ fontSize: "18px", color: "#B5844F" }}>
                          {stat.prefix}
                        </span>
                      )}
                      <span
                        className="playfont"
                        style={{
                          fontSize: "42px",
                          fontWeight: "400",
                          color: "#60202C",
                          lineHeight: "1",
                        }}
                      >
                        {stat.number}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: "11px",
                        color: "#888",
                        textTransform: "uppercase",
                        letterSpacing: "1.5px",
                        margin: 0,
                      }}
                    >
                      {stat.label}
                    </p>
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

export default AboutUs1;
