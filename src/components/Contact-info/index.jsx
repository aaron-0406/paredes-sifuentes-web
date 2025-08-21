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
                <h6 className="custom-font">Dirección</h6>
                <p>
                  B17 Princess Road, London, Greater London NW18JR, United
                  Kingdom
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
