/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Footer = ({ classText }) => {
  return (
    <footer className={`${classText ? classText : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="item md-mb50">
              {/* <div className="title">
                <h5>Contáctanos</h5>
              </div> */}
              <ul className="d-flex flex-column flex-md-row align-items-start justify-content-md-between align-items-md-center flex-wrap">
                <li className="d-flex align-items-center gap-2">
                  <span className="icon pe-7s-map-marker fs-4"></span>
                  <p className="mb-0" style={{ color: "#F0ECE1" }}>
                    Trujillo - Perú
                  </p>
                </li>

                <li className="d-flex align-items-center gap-2">
                  <span className="icon pe-7s-mail fs-4"></span>
                  <p className="mb-0" style={{ color: "#F0ECE1" }}>
                    paredesifuentes@gmail.com
                  </p>
                </li>

                <li className="d-flex align-items-center gap-2">
                  <span className="icon pe-7s-call fs-4"></span>
                  <div>
                    <p className="mb-0" style={{ color: "#F0ECE1" }}>
                      +51 934 214 849
                    </p>
                    <p className="mb-0" style={{ color: "#F0ECE1" }}>
                      +51 920 250 679
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="col-12">
            <div className="item md-mb50">
              <div className="title">
                <h5>Muy Demandado</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <Link href="/services/derecho-inmobiliario/">
                      <a>
                        <img src="/assets/img/blog/1.jpg" alt="" />
                      </a>
                    </Link>
                  </div>

                  <div className="sm-post">
                    <span className="date" style={{ color: "#B5844F" }}>
                      derecho inmobiliario
                    </span>
                    <Link href="/services/derecho-inmobiliario/">
                      <a>
                        <p style={{ color: "#F0ECE1" }}>
                          Asesoría en compra-venta, arrendamientos, trámites
                          registrales y protección patrimonial.
                        </p>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <Link href="/services/seguro-de-desalojo/">
                      <a>
                        <img src="/assets/img/blog/2.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <span className="date" style={{ color: "#B5844F" }}>
                      seguro de desalojo
                    </span>
                    <Link href="/services/seguro-de-desalojo/">
                      <a>
                        <p style={{ color: "#F0ECE1" }}>
                          Protección al propietario: desalojo, cobranza de
                          rentas y defensa ante extinción de dominio.
                        </p>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Escribe tu correo" />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="col-12">
            <div className="item d-flex flex-column flex-md-row align-items-center justify-content-md-between flex-wrap">
              <div className="social d-flex align-items-center gap-2">
                <a
                  href="https://www.facebook.com/profile.php?id=61573933954882"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.tiktok.com/@paredes.sifuentes?_t=zn-8ua1sgad9vj&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-tiktok"></i>
                </a>
                <a
                  href="https://www.instagram.com/paredes.sifuentes?igsh=aW0xOXEwbWVzcGtk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=51934214849&text=Hola+Piero%2C+tengo+una+consulta&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=51920250679&text=Hola+Natal%C3%AD%2C+tengo+una+consulta&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
              <div className="logo d-flex align-items-center gap-2">
                <img src="/assets/img/logo-light.png" alt="" />
              </div>
              <div className="copy-right d-flex align-items-center gap-2">
                <p style={{ color: "#F0ECE1" }}>
                  © 2025,{" "}
                  <a style={{ color: "#B5844F" }}>grupo coorporativo paredes</a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
