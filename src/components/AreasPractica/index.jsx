import React from "react";
import Link from "next/link";

const AreasPractica = () => {
  const areas = [
    { id: 1, name: "Derecho Inmobiliario", icon: "pe-7s-home" },
    { id: 2, name: "Derecho de Familia", icon: "pe-7s-users" },
    { id: 3, name: "Sucesiones y Herencias", icon: "pe-7s-note2" },
    { id: 4, name: "Derecho Empresarial", icon: "pe-7s-wallet" },
    { id: 5, name: "Litigios Civiles", icon: "pe-7s-hammer" },
    { id: 6, name: "Propiedad Intelectual", icon: "pe-7s-light" },
  ];

  return (
    <section className="areas-practica section-padding">
      <div className="container">
        <div className="section-head text-center mb-50">
          <h6
            className="wow fadeInDown"
            data-wow-delay=".3s"
            style={{ color: "#B5844F", letterSpacing: "2px" }}
          >
            ESPECIALIDADES
          </h6>
          <h4
            className="playfont wow fadeInUp"
            data-wow-delay=".5s"
            style={{ color: "#60202C" }}
          >
            Áreas de práctica
          </h4>
        </div>

        <div className="row justify-content-center">
          {areas.map((area, index) => (
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.2 + index * 0.1}s`}
              key={area.id}
            >
              <div
                className="area-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  padding: "20px",
                  marginBottom: "20px",
                  background: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 3px 15px rgba(0,0,0,0.04)",
                  transition: "all 0.3s ease",
                  borderLeft: "3px solid transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderLeftColor = "#B5844F";
                  e.currentTarget.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderLeftColor = "transparent";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <span
                  className={area.icon}
                  style={{
                    fontSize: "28px",
                    color: "#B5844F",
                    flexShrink: 0,
                  }}
                ></span>
                <h6
                  style={{
                    color: "#60202C",
                    margin: 0,
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {area.name}
                </h6>
              </div>
            </div>
          ))}
        </div>

        <div
          className="text-center mt-30 wow fadeInUp"
          data-wow-delay=".8s"
        >
          <Link href="/servicios">
            <a
              style={{
                display: "inline-block",
                padding: "15px 40px",
                border: "2px solid #60202C",
                borderRadius: "0",
                color: "#60202C",
                fontSize: "14px",
                fontWeight: "500",
                letterSpacing: "1px",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#60202C";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#60202C";
              }}
            >
              Ver todos los servicios
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AreasPractica;
