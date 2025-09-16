import React from "react";

const Process = () => {
  return (
    <section
      className="process section-padding bg-img bg-repeat"
      style={{ backgroundImage: `url(/assets/img/dots.png)` }}
    >
      <div className="container">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                Cómo trabajamos
              </h4>
              <h6 className="custom-font wow fadeInDown" data-wow-delay=".3s">
                este proceso es orientativo. Cada caso es único.
              </h6>
            </div>
          </div>
        </div>
        <div className=" row">
          <div
            className="col-lg-3 col-md-6 coulmn wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="item">
              <div
                className="bg-img"
                style={{ backgroundImage: `url(/assets/img/process/01.jpg)` }}
              >
                <h3 className="numb custom-font">01</h3>
              </div>
              <div className="cont">
                <h6 className="mb-10">Consulta inicial</h6>
                <p>
                  Hablamos contigo, recogemos la información y documentos clave.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 coulmn wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="item">
              <div
                className="bg-img"
                style={{ backgroundImage: `url(/assets/img/process/02.jpg)` }}
              >
                <h3 className="numb custom-font">02</h3>
              </div>
              <div className="cont">
                <h6 className="mb-10">Evaluación y estrategia</h6>
                <p>
                  Analizamos el caso, evaluamos riesgos y proponemos la mejor
                  estrategia.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 coulmn wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="item">
              <div
                className="bg-img"
                style={{ backgroundImage: `url(/assets/img/process/03.jpg)` }}
              >
                <h3 className="numb custom-font">03</h3>
              </div>
              <div className="cont">
                <h6 className="mb-10">Acción y gestión</h6>
                <p>Gestionamos presentaciones, negociaciones y audiencias.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".6s">
            <div className="item">
              <div
                className="bg-img"
                style={{ backgroundImage: `url(/assets/img/process/04.jpg)` }}
              >
                <h3 className="numb custom-font">04</h3>
              </div>
              <div className="cont">
                <h6 className="mb-10">Seguimiento y cierre</h6>
                <p>Entregamos resultados y sugerimos medidas preventivas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
