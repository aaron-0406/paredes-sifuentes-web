/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Footer = ({ classText }) => {
  return (
    <footer className={`${classText ? classText : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contáctanos</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Dirección</h6>
                    <p style={{ color: "#F0ECE1" }}>Trujillo - Perú</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Nuestros Correos</h6>
                    <p style={{ color: "#F0ECE1" }}>
                      paredesifuentes@gmail.com
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Llámanos</h6>
                    <p style={{ color: "#F0ECE1" }}>+51 934 214 849</p>
                    <p style={{ color: "#F0ECE1" }}>+51 920 250 679</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
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
                {/* <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Escribe tu correo" />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src="/assets/img/logo-light.png" alt="" />
              </div>
              <div className="social">
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
              <div className="copy-right">
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
