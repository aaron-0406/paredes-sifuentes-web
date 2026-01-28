import React from "react";

const Cobertura = () => {
  const locations = [
    {
      id: 1,
      city: "Trujillo",
      type: "Sede principal",
      icon: "pe-7s-map-marker",
    },
    {
      id: 2,
      city: "Chimbote",
      type: "Atención presencial",
      icon: "pe-7s-map-marker",
    },
    {
      id: 3,
      city: "Huarmey",
      type: "Atención presencial",
      icon: "pe-7s-map-marker",
    },
  ];

  return (
    <section
      className="cobertura section-padding"
      style={{ background: "#F0ECE1" }}
    >
      <div className="container">
        <div className="section-head text-center mb-50">
          <h6
            className="wow fadeInDown"
            data-wow-delay=".3s"
            style={{ color: "#B5844F", letterSpacing: "2px" }}
          >
            NUESTRA PRESENCIA
          </h6>
          <h4
            className="playfont wow fadeInUp"
            data-wow-delay=".5s"
            style={{ color: "#60202C" }}
          >
            Dónde te atendemos
          </h4>
        </div>

        <div className="row justify-content-center">
          {locations.map((location, index) => (
            <div
              className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay={`${0.3 + index * 0.1}s`}
              key={location.id}
            >
              <div
                className="location-card text-center"
                style={{
                  padding: "30px 20px",
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
                  className={location.icon}
                  style={{
                    fontSize: "40px",
                    color: "#B5844F",
                    marginBottom: "15px",
                    display: "block",
                  }}
                ></span>
                <h5
                  style={{
                    color: "#60202C",
                    marginBottom: "5px",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  {location.city}
                </h5>
                <p
                  style={{
                    color: "#666",
                    fontSize: "13px",
                    margin: 0,
                  }}
                >
                  {location.type}
                </p>
              </div>
            </div>
          ))}

          {/* Virtual */}
          <div
            className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
            data-wow-delay=".6s"
          >
            <div
              className="location-card text-center"
              style={{
                padding: "30px 20px",
                marginBottom: "30px",
                background: "#60202C",
                borderRadius: "8px",
                boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span
                className="pe-7s-global"
                style={{
                  fontSize: "40px",
                  color: "#B5844F",
                  marginBottom: "15px",
                  display: "block",
                }}
              ></span>
              <h5
                style={{
                  color: "#fff",
                  marginBottom: "5px",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Virtual
              </h5>
              <p
                style={{
                  color: "#D4C4AD",
                  fontSize: "13px",
                  margin: 0,
                }}
              >
                Todo el Perú
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cobertura;
