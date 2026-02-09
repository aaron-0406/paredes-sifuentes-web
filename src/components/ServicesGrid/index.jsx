import React from "react";
import Link from "next/link";
import servicesData from "../../data/blog1.json";

const ServicesGrid = () => {
  return (
    <section
      style={{
        background: "#F0ECE1",
        padding: "80px 0",
      }}
    >
      <div className="container">
        <div className="row">
          {servicesData.map((service) => (
            <div key={service.id} className="col-lg-4 col-md-6 mb-4">
              <Link href={`/servicios/${service.slug}`}>
                <a style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      background: "#fff",
                      borderRadius: "8px",
                      overflow: "hidden",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                      transition: "all 0.3s ease",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      border: "2px solid transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.15)";
                      e.currentTarget.style.borderColor = "#B5844F";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
                      e.currentTarget.style.borderColor = "transparent";
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        height: "200px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.5s ease",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "15px",
                          left: "15px",
                          background: "#B5844F",
                          color: "#fff",
                          padding: "5px 15px",
                          fontSize: "12px",
                          fontWeight: "500",
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                          borderRadius: "4px",
                        }}
                      >
                        {service.category}
                      </div>
                    </div>
                    <div
                      style={{
                        padding: "25px",
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <h4
                        style={{
                          color: "#60202C",
                          fontSize: "20px",
                          fontWeight: "600",
                          marginBottom: "12px",
                          lineHeight: "1.3",
                        }}
                      >
                        {service.title}
                      </h4>
                      <p
                        style={{
                          color: "#666",
                          fontSize: "14px",
                          lineHeight: "1.7",
                          marginBottom: "20px",
                          flex: 1,
                        }}
                      >
                        {service.description}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          color: "#60202C",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        <span>Ver detalles</span>
                        <i
                          className="pe-7s-angle-right"
                          style={{
                            fontSize: "20px",
                            marginLeft: "5px",
                            transition: "transform 0.3s ease",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
