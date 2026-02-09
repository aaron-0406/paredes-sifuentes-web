import React, { useState } from "react";

const ServiceFAQ = ({ faq, serviceTitle }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!faq || faq.length === 0) return null;

  return (
    <section
      style={{
        background: "#fff",
        padding: "80px 0",
      }}
    >
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <span
              style={{
                color: "#B5844F",
                fontSize: "14px",
                fontWeight: "600",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "15px",
                display: "block",
              }}
            >
              Preguntas frecuentes
            </span>
            <h2
              style={{
                color: "#60202C",
                fontSize: "36px",
                fontWeight: "700",
                lineHeight: "1.3",
              }}
              className="playfont"
            >
              Resolvemos tus dudas
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {faq.map((item, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "15px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                  border: "1px solid #e8e8e8",
                }}
              >
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? -1 : index)
                  }
                  style={{
                    width: "100%",
                    background: activeIndex === index ? "#60202C" : "#F0ECE1",
                    color: activeIndex === index ? "#F0ECE1" : "#60202C",
                    border: "none",
                    padding: "20px 25px",
                    textAlign: "left",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    transition: "all 0.3s ease",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  <span>{item.question}</span>
                  <i
                    className={`pe-7s-angle-${
                      activeIndex === index ? "up" : "down"
                    }`}
                    style={{
                      fontSize: "24px",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </button>
                <div
                  style={{
                    maxHeight: activeIndex === index ? "500px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                    background: "#fff",
                  }}
                >
                  <p
                    style={{
                      padding: "20px 25px",
                      margin: 0,
                      color: "#666",
                      fontSize: "15px",
                      lineHeight: "1.8",
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
