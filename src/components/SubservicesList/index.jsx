import React, { useState } from "react";

const SubservicesList = ({ subservices }) => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (code) => {
    setExpandedItems((prev) => ({
      ...prev,
      [code]: !prev[code],
    }));
  };

  if (!subservices || subservices.length === 0) return null;

  return (
    <section
      style={{
        background: "#F0ECE1",
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
              Lo que incluye
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
              Servicios específicos
            </h2>
          </div>
        </div>
        <div className="row">
          {subservices.map((subservice, index) => (
            <div key={subservice.code} className="col-lg-6 mb-4">
              <div
                style={{
                  background: "#fff",
                  borderRadius: "8px",
                  padding: "25px",
                  height: "100%",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                  transition: "all 0.3s ease",
                  border: "1px solid #e8e8e8",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.05)";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "15px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#B5844F",
                      color: "#fff",
                      padding: "6px 12px",
                      fontSize: "12px",
                      fontWeight: "600",
                      borderRadius: "4px",
                      flexShrink: 0,
                    }}
                  >
                    {subservice.code}
                  </span>
                  <div style={{ flex: 1 }}>
                    <h4
                      style={{
                        color: "#60202C",
                        fontSize: "18px",
                        fontWeight: "600",
                        marginBottom: "10px",
                        lineHeight: "1.4",
                      }}
                    >
                      {subservice.name}
                    </h4>
                    <p
                      style={{
                        color: "#666",
                        fontSize: "14px",
                        lineHeight: "1.7",
                        marginBottom: subservice.details ? "15px" : 0,
                      }}
                    >
                      {subservice.description}
                    </p>
                    {subservice.details && subservice.details.length > 0 && (
                      <>
                        <button
                          onClick={() => toggleExpand(subservice.code)}
                          style={{
                            background: "none",
                            border: "none",
                            color: "#B5844F",
                            fontSize: "14px",
                            fontWeight: "500",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            padding: 0,
                          }}
                        >
                          {expandedItems[subservice.code]
                            ? "Ver menos"
                            : `Ver ${subservice.details.length} detalles`}
                          <i
                            className={`pe-7s-angle-${
                              expandedItems[subservice.code] ? "up" : "down"
                            }`}
                            style={{
                              fontSize: "18px",
                              transition: "transform 0.3s ease",
                            }}
                          />
                        </button>
                        {expandedItems[subservice.code] && (
                          <div
                            style={{
                              marginTop: "15px",
                              paddingTop: "15px",
                              borderTop: "1px solid #eee",
                            }}
                          >
                            {subservice.details.map((detail, idx) => (
                              <div
                                key={idx}
                                style={{
                                  display: "flex",
                                  alignItems: "flex-start",
                                  gap: "10px",
                                  marginBottom:
                                    idx < subservice.details.length - 1 ? "12px" : 0,
                                }}
                              >
                                <i
                                  className="pe-7s-angle-right"
                                  style={{
                                    color: "#B5844F",
                                    fontSize: "16px",
                                    marginTop: "2px",
                                    flexShrink: 0,
                                  }}
                                />
                                <div>
                                  <strong
                                    style={{
                                      color: "#60202C",
                                      fontSize: "14px",
                                      display: "block",
                                      marginBottom: "4px",
                                    }}
                                  >
                                    {detail.name}
                                  </strong>
                                  <span
                                    style={{
                                      color: "#777",
                                      fontSize: "13px",
                                      lineHeight: "1.5",
                                    }}
                                  >
                                    {detail.description}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubservicesList;
