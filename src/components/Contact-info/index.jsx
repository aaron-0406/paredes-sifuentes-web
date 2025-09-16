import React from "react";

const ContactInfo = () => {
  return (
    <div className="info pt-80 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item">
              <span className="icon pe-7s-phone"></span>
              <div className="cont">
                <h6 className="custom-font">Llámanos o escríbenos</h6>
                <p>+51 934 214 849</p>
                <p>+51 920 250 679</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <span className="icon pe-7s-mail-open"></span>
              <div className="cont">
                <h6 className="custom-font">Nuestros Email</h6>
                <p>paredesifuentes@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <span className="icon pe-7s-map"></span>
              <div className="cont">
                <h6 className="custom-font">Redes Sociales</h6>
                <p>
                  Instagram:{" "}
                  <a
                    href="https://www.instagram.com/paredes.sifuentes?igsh=aW0xOXEwbWVzcGtk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    paredes.sifuentes
                  </a>
                </p>
                <p>
                  Facebook:{" "}
                  <a
                    href="https://www.facebook.com/profile.php?id=61573933954882"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Paredes Sifuentes
                  </a>
                </p>
                <p>
                  WhatsApp:{" "}
                  <a
                    href="https://api.whatsapp.com/send/?phone=51934214849&text=Hola+Piero%2C+tengo+una+consulta&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +51 934 214 849
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
