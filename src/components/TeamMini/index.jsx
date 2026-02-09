import React from "react";

const TeamMini = () => {
  const founders = [
    {
      name: "Piero Paredes",
      title: "Socio Fundador",
      image: "/assets/img/team/1.jpg",
    },
    {
      name: "Natali Sifuentes",
      title: "Socia Fundadora",
      image: "/assets/img/team/2.jpg",
    },
  ];

  return (
    <section
      style={{
        padding: "60px 0",
        background: "#fff",
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          className="text-center mb-5 wow fadeInUp"
          data-wow-delay=".2s"
        >
          <h6
            style={{
              color: "#B5844F",
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: "15px",
            }}
          >
            Nuestro equipo
          </h6>
          <h3
            className="playfont"
            style={{
              color: "#60202C",
              fontSize: "32px",
              marginBottom: "15px",
            }}
          >
            ¿Quiénes te atenderán?
          </h3>
          <p
            style={{
              color: "#666",
              fontSize: "16px",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            Nuestros socios fundadores revisan personalmente cada caso nuevo
          </p>
        </div>

        {/* Founders */}
        <div className="row justify-content-center">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 mb-4 mb-lg-0"
            >
              <div
                className="founder-card wow fadeInUp"
                data-wow-delay={`${0.3 + index * 0.15}s`}
                style={{
                  textAlign: "center",
                  padding: "30px",
                  background: "#F0ECE1",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 40px rgba(96, 32, 44, 0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Image */}
                <div
                  style={{
                    width: "180px",
                    height: "180px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    margin: "0 auto 20px",
                    border: "4px solid #B5844F",
                  }}
                >
                  <img
                    src={founder.image}
                    alt={founder.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 20%",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                </div>

                {/* Name */}
                <h4
                  className="playfont"
                  style={{
                    color: "#60202C",
                    fontSize: "22px",
                    marginBottom: "5px",
                  }}
                >
                  {founder.name}
                </h4>

                {/* Title */}
                <p
                  style={{
                    color: "#B5844F",
                    fontSize: "13px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    margin: 0,
                  }}
                >
                  {founder.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Message */}
        <div
          className="text-center mt-5 wow fadeInUp"
          data-wow-delay=".6s"
        >
          <p
            style={{
              color: "#666",
              fontSize: "15px",
              fontStyle: "italic",
            }}
          >
            &ldquo;Creemos que cada cliente merece atención directa de sus abogados,
            no de asistentes&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamMini;
