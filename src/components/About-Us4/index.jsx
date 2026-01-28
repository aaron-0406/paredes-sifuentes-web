import React from "react";

const AboutUs4 = () => {
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="numbers">
              <div className="row">
                <div className="col-sm-6">
                  <div className="item mb-50">
                    <h3>
                      <span className="nbr custom-font">352</span>
                    </h3>
                    <h6>CASOS RESUELTOS</h6>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="item mb-50">
                    <h3>
                      <span className="nbr custom-font">567</span>
                    </h3>
                    <h6>CLIENTES QUE CONFIARON</h6>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="item">
                    <h3>
                      <span className="nbr custom-font">6</span>
                      <i>años</i>
                    </h3>
                    <h6>TIEMPO DE EXPERIENCIA</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="txt-cont">
              <h4
                className="playfont mb-20"
                style={{ color: "#60202C", lineHeight: "1.4" }}
              >
                Cuando tienes un problema legal, necesitas más que un abogado.
              </h4>
              <p className="mb-20" style={{ fontSize: "16px", color: "#444" }}>
                Necesitas alguien que entienda tu situación, que actúe rápido y
                que te explique cada paso sin tecnicismos. Eso es exactamente lo
                que hacemos.
              </p>
              <p style={{ color: "#666" }}>
                Desde 2019 hemos ayudado a familias y empresas en todo el Perú a
                proteger su patrimonio, resolver conflictos y tomar decisiones
                legales con confianza.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs4;
