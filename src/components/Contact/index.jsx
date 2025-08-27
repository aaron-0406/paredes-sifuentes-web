import React from "react";
import appData from "../../data/app.json";

const Contact = () => {
  return (
    <>
      <section className="contact cont-map">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 col-md-6 contact-form wow fadeInDown"
              data-wow-delay=".3s"
            >
              <form id="contact-form" method="post" action="contact.php">
                <div className="section-head">
                  <h6>Contáctanos</h6>
                  <h4 className="playfont">Esperamos tu mensaje</h4>
                </div>

                <div className="messages"></div>

                <div className="controls">
                  <div className="form-group">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      placeholder="Nombre"
                      required="required"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      placeholder="correo"
                      required="required"
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      id="form_message"
                      name="message"
                      placeholder="Mensaje"
                      rows="4"
                      required="required"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-curve btn-color">
                    <span>Enviar Mensaje</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="contact-map">
          <iframe src={appData.mapIframe}></iframe>
        </div>
        <div
          className="bg-img"
          style={{ backgroundImage: "url(/assets/img/2.jpg)" }}
        ></div>
      </section>
    </>
  );
};

export default Contact;
