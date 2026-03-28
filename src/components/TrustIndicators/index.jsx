import React, { useState, useEffect } from "react";

const TrustIndicators = () => {
  const stats = [
    { number: "352", prefix: "+", label: "Casos resueltos" },
    { number: "567", prefix: "+", label: "Clientes satisfechos" },
    { number: "6", prefix: "", label: "Años de experiencia" },
    { number: "4", prefix: "", label: "Ciudades" },
  ];

  const testimonials = [
    {
      text: "Gracias a Paredes Sifuentes pude regularizar la compra de mi departamento. Me guiaron en todo el proceso.",
      author: "Carlos M.",
      location: "Trujillo",
    },
    {
      text: "Confiamos en Paredes Sifuentes para la constitución de nuestra empresa. Acompañamiento completo y transparente.",
      author: "María L.",
      location: "Chimbote",
    },
    {
      text: "El equipo me explicó con claridad mis opciones y logramos un régimen de visitas justo para mis hijos.",
      author: "Roberto G.",
      location: "Trujillo",
    },
    {
      text: "Recuperé mi terreno gracias a su experiencia. Actuaron con rapidez y lograron el desalojo en tiempo récord.",
      author: "Ana P.",
      location: "Huarmey",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section
      style={{
        padding: "60px 0",
        background: "#fff",
      }}
    >
      <div className="container">
        {/* Stats Row */}
        <div
          className="stats-row wow fadeInUp"
          data-wow-delay=".2s"
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom: "50px",
            paddingBottom: "40px",
            borderBottom: "1px solid #D4C4AD",
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                textAlign: "center",
                padding: "0 30px",
                borderRight:
                  index < stats.length - 1 ? "1px solid #D4C4AD" : "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "center",
                  marginBottom: "5px",
                }}
              >
                {stat.prefix && (
                  <span
                    style={{
                      color: "#B5844F",
                      fontSize: "24px",
                      fontWeight: "600",
                    }}
                  >
                    {stat.prefix}
                  </span>
                )}
                <span
                  className="playfont"
                  style={{
                    color: "#60202C",
                    fontSize: "42px",
                    fontWeight: "600",
                    lineHeight: "1",
                  }}
                >
                  {stat.number}
                </span>
              </div>
              <span
                style={{
                  color: "#666",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonial Slider */}
        <div
          className="testimonial-mini wow fadeInUp"
          data-wow-delay=".4s"
          style={{
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto",
            position: "relative",
            minHeight: "120px",
          }}
        >
          <i
            className="fas fa-quote-left"
            style={{
              color: "#D4C4AD",
              fontSize: "24px",
              marginBottom: "15px",
              display: "block",
            }}
          ></i>

          <div
            style={{
              position: "relative",
              overflow: "hidden",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{
                  opacity: currentTestimonial === index ? 1 : 0,
                  transform:
                    currentTestimonial === index
                      ? "translateY(0)"
                      : "translateY(20px)",
                  transition: "all 0.5s ease",
                  position: currentTestimonial === index ? "relative" : "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                }}
              >
                <p
                  style={{
                    color: "#444",
                    fontSize: "18px",
                    fontStyle: "italic",
                    lineHeight: "1.7",
                    marginBottom: "20px",
                  }}
                >
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <p
                  style={{
                    color: "#60202C",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  — {testimonial.author},{" "}
                  <span style={{ color: "#B5844F" }}>{testimonial.location}</span>
                </p>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              marginTop: "25px",
            }}
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                style={{
                  width: currentTestimonial === index ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  background:
                    currentTestimonial === index ? "#B5844F" : "#D4C4AD",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
