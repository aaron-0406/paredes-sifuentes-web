import React from "react";
import skillsProgress from "../../common/skillsProgress";
const Skills2 = () => {
  React.useEffect(() => {
    skillsProgress();
  }, []);
  return (
    <div className="skills-sec section-padding pt-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="skills-box full-width">
              <div className="skill-item">
                <h6>Derecho Inmobiliario</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="95%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h6>Derecho Empresarial</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="85%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h6>Derecho de Familia y Sucesiones</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="90%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h6>Litigios y Defensa Patrimonial</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="88%"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="content">
              <h4 className="playfont line-height-50 mb-20">
                Tu tranquilidad legal, nuestra mayor prioridad .
              </h4>
              <p className="mb-10">
                Brindamos soluciones legales personalizadas que protegen lo que
                más valoras. En Paredes Sifuentes Abogados creemos que cada caso
                requiere un enfoque único.
              </p>
              <p>
                Nuestro equipo combina experiencia en derecho inmobiliario,
                empresarial, sucesiones, familia y litigios para ofrecer un
                servicio integral, estratégico y confiable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills2;
