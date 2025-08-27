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
                    <p>Perú</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Nuestros Correos</h6>
                    <p>paredesifuentes@gmail.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Llámanos</h6>
                    <p>+51 934 214 849</p>
                    <p>+51 920 250 679</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Noticias Recientes</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <Link href="/blog-details">
                      <a>
                        <img src="/assets/img/blog/1.jpg" alt="" />
                      </a>
                    </Link>
                  </div>

                  <div className="sm-post">
                    <Link href="/blog-details">
                      <a>
                        <p>
                          The Start-Up Ultimate Guide to Make Your WordPress
                          Journal.
                        </p>
                      </a>
                    </Link>
                    <span className="date">14 Jan 2022</span>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <Link href="/blog-details">
                      <a>
                        <img src="/assets/img/blog/2.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/blog-details">
                      <a>
                        <p>
                          The Start-Up Ultimate Guide to Make Your WordPress
                          Journal.
                        </p>
                      </a>
                    </Link>
                    <span className="date">14 Jan 2022</span>
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
                <p>
                  © 2025, <a>grupo coorporativo paredes</a>.
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
