import React, { useState } from "react";

const SmartContactForm = () => {
  const [formState, setFormState] = useState("idle"); // idle, loading, success, error
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    tipo_consulta: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState("loading");

    // Convertir el value técnico al label legible
    const tipoLabel =
      tiposConsulta.find((t) => t.value === formData.tipo_consulta)?.label ||
      "No especificado";

    try {
      const response = await fetch("https://formspree.io/f/xojnrgpk", {
        method: "POST",
        body: JSON.stringify({
          nombre: formData.nombre,
          telefono: formData.telefono,
          tipo_consulta: tipoLabel,
          mensaje: formData.mensaje,
          _subject: `Nueva consulta: ${tipoLabel} — ${formData.nombre}`,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) throw new Error("Error al enviar");

      setFormState("success");
      setFormData({ nombre: "", telefono: "", tipo_consulta: "", mensaje: "" });
    } catch (error) {
      setFormState("error");
    }
  };

  const steps = [
    {
      number: "1",
      text: "Respondemos en menos de 24 horas (usualmente minutos)",
    },
    {
      number: "2",
      text: "Evaluamos tu caso sin compromiso",
    },
    {
      number: "3",
      text: "Te proponemos una estrategia clara",
    },
    {
      number: "4",
      text: "Tú decides si avanzamos",
    },
  ];

  const tiposConsulta = [
    { value: "", label: "Selecciona el tipo de consulta" },
    { value: "registro-marca", label: "Registro de Marca" },
    { value: "propiedad-intelectual", label: "Propiedad Intelectual" },
    { value: "inmobiliario", label: "Derecho Inmobiliario" },
    { value: "desalojo", label: "Desalojo / Recuperación de inmueble" },
    { value: "sucesiones", label: "Herencias y Sucesiones" },
    { value: "empresarial", label: "Derecho Empresarial" },
    { value: "familia", label: "Derecho de Familia" },
    { value: "litigios", label: "Litigios Civiles" },
    { value: "otro", label: "Otro" },
  ];

  const inputStyle = {
    width: "100%",
    padding: "14px 18px",
    fontSize: "15px",
    border: "2px solid #D4C4AD",
    borderRadius: "6px",
    background: "#fff",
    color: "#333",
    transition: "all 0.3s ease",
    outline: "none",
  };

  const inputFocusHandlers = {
    onFocus: (e) => {
      e.currentTarget.style.borderColor = "#B5844F";
      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(181, 132, 79, 0.15)";
    },
    onBlur: (e) => {
      e.currentTarget.style.borderColor = "#D4C4AD";
      e.currentTarget.style.boxShadow = "none";
    },
  };

  return (
    <section
      style={{
        padding: "60px 0",
        background: "#F0ECE1",
      }}
    >
      <div className="container">
        <div className="row">
          {/* Left Column - Process */}
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div
              className="wow fadeInUp"
              data-wow-delay=".2s"
              style={{
                paddingRight: "30px",
              }}
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
                Proceso simple
              </h6>
              <h3
                className="playfont"
                style={{
                  color: "#60202C",
                  fontSize: "28px",
                  marginBottom: "30px",
                  lineHeight: "1.3",
                }}
              >
                ¿Qué pasa cuando nos contactas?
              </h3>

              {steps.map((step, index) => (
                <div
                  key={index}
                  className="wow fadeInUp"
                  data-wow-delay={`${0.3 + index * 0.1}s`}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "15px",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: "#60202C",
                      color: "#F0ECE1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      fontWeight: "600",
                      flexShrink: 0,
                    }}
                  >
                    {step.number}
                  </div>
                  <p
                    style={{
                      color: "#444",
                      fontSize: "15px",
                      lineHeight: "1.6",
                      margin: 0,
                      paddingTop: "4px",
                    }}
                  >
                    {step.text}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* Right Column - Form */}
          <div className="col-lg-7">
            <div
              className="wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "40px",
                boxShadow: "0 10px 40px rgba(96, 32, 44, 0.08)",
              }}
            >
              <h4
                className="playfont"
                style={{
                  color: "#60202C",
                  fontSize: "24px",
                  marginBottom: "25px",
                }}
              >
                Cuéntanos tu caso
              </h4>

              {formState === "success" ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "40px 20px",
                  }}
                >
                  <div
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                      background: "#4CAF50",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                    }}
                  >
                    <i
                      className="fas fa-check"
                      style={{ color: "#fff", fontSize: "32px" }}
                    ></i>
                  </div>
                  <h5
                    style={{
                      color: "#60202C",
                      fontSize: "20px",
                      marginBottom: "10px",
                    }}
                  >
                    ¡Mensaje enviado!
                  </h5>
                  <p style={{ color: "#666", marginBottom: "25px" }}>
                    Te contactaremos pronto por WhatsApp o teléfono
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    style={{
                      padding: "12px 24px",
                      background: "#60202C",
                      color: "#F0ECE1",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "14px",
                    }}
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        name="nombre"
                        placeholder="Tu nombre *"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        style={inputStyle}
                        {...inputFocusHandlers}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="tel"
                        name="telefono"
                        placeholder="Tu teléfono / WhatsApp *"
                        required
                        value={formData.telefono}
                        onChange={handleChange}
                        style={inputStyle}
                        {...inputFocusHandlers}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <select
                      name="tipo_consulta"
                      value={formData.tipo_consulta}
                      onChange={handleChange}
                      style={{
                        ...inputStyle,
                        color: formData.tipo_consulta ? "#333" : "#999",
                        cursor: "pointer",
                        WebkitAppearance: "menulist",
                        MozAppearance: "menulist",
                        appearance: "menulist",
                      }}
                      {...inputFocusHandlers}
                    >
                      {tiposConsulta.map((tipo) => (
                        <option
                          key={tipo.value}
                          value={tipo.value}
                          style={{ color: "#333" }}
                        >
                          {tipo.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-4">
                    <textarea
                      name="mensaje"
                      placeholder="Describe brevemente tu situación: qué tipo de propiedad, conflicto o duda legal tienes..."
                      rows="4"
                      value={formData.mensaje}
                      onChange={handleChange}
                      style={{
                        ...inputStyle,
                        resize: "vertical",
                        minHeight: "120px",
                      }}
                      {...inputFocusHandlers}
                    ></textarea>
                  </div>

                  {formState === "error" && (
                    <div
                      style={{
                        padding: "12px 16px",
                        background: "#fee",
                        borderRadius: "6px",
                        marginBottom: "20px",
                        color: "#c00",
                        fontSize: "14px",
                      }}
                    >
                      Error al enviar. Por favor intenta de nuevo o contáctanos
                      por WhatsApp.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    style={{
                      width: "100%",
                      padding: "16px 32px",
                      background: formState === "loading" ? "#999" : "#60202C",
                      color: "#F0ECE1",
                      border: "none",
                      borderRadius: "6px",
                      fontSize: "15px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      cursor: formState === "loading" ? "wait" : "pointer",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                    onMouseEnter={(e) => {
                      if (formState !== "loading") {
                        e.currentTarget.style.background = "#B5844F";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (formState !== "loading") {
                        e.currentTarget.style.background = "#60202C";
                      }
                    }}
                  >
                    {formState === "loading" ? (
                      <>
                        <span
                          style={{
                            width: "20px",
                            height: "20px",
                            border: "2px solid #F0ECE1",
                            borderTopColor: "transparent",
                            borderRadius: "50%",
                            animation: "spin 0.8s linear infinite",
                          }}
                        ></span>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i>
                        Enviar consulta
                      </>
                    )}
                  </button>

                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "15px",
                      fontSize: "13px",
                      color: "#888",
                    }}
                  >
                    🔒 Tu información es confidencial y está protegida
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default SmartContactForm;
