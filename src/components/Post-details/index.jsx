/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import thumparallaxUp from "../../common/thumparallaxUp";

const PostDetails = ({ service }) => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.simpleParallax) thumparallaxUp();
    }, 1000);
  }, []);

  const fallback = {
    title: "Servicio",
    by: "Paredes Sifuentes Abogados",
    date: "Aug 06 2022",
    hero: { subtitle: "", image: "/assets/img/blog/single.jpg" },
    description: "Descripción no disponible.",
    subservices: [],
    benefits: [],
    faq: [],
    cta: { text: "Contacta con nosotros", link: "/contacto" },
  };

  const s = service || fallback;

  return (
    <>
      <section className="blog-pg single section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="post">
                {/* TITULO Y META */}
                <div className="title-head">
                  <h2>{s.title}</h2>
                  <div className="info">
                    <p>
                      <Link href="#">
                        <a>{s.by || fallback.by}</a>
                      </Link>
                      /<Link href="#">{s.date || fallback.date}</Link>/
                      <Link href="#">
                        <a>{s.category || "Servicio"}</a>
                      </Link>
                    </p>
                  </div>
                </div>

                {/* IMAGEN HERO */}
                <div className="img main-img">
                  <img
                    src={s.hero?.image || "/assets/img/blog/single.jpg"}
                    alt={s.hero?.subtitle || s.title}
                    className="thumparallax"
                  />
                </div>

                {/* CONTENIDO PRINCIPAL */}
                <div className="content pt-20">
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <div className="cont">
                        {/* SUBTITULO / INTRO */}
                        {s.hero?.subtitle ? (
                          <div className="intro">
                            <h4>{s.hero.subtitle}</h4>
                          </div>
                        ) : null}

                        {/* DESCRIPTION */}
                        {s.description ? (
                          <p className="mb-2 mt-0">{s.description}</p>
                        ) : null}

                        {/* SUBSERVICIOS */}
                        {Array.isArray(s.subservices) &&
                          s.subservices.length > 0 && (
                            <>
                              <div className="mb-4 mt-4">
                                <h4 className="mt-4">Subservicios</h4>
                              </div>
                              <div className="row">
                                {s.subservices.map((sub) => (
                                  <div
                                    key={sub.code || sub.name}
                                    className="col-md-12"
                                  >
                                    <div>
                                      <h6 className="flex items-center">
                                        <span className="badge bg-light text-dark mr-2">
                                          {sub.code}
                                        </span>
                                        {sub.name}
                                      </h6>
                                      {sub.description ? (
                                        <p className="mt-0">
                                          {sub.description}
                                        </p>
                                      ) : null}

                                      {/* detalles anidados */}
                                      {Array.isArray(sub.details) &&
                                        sub.details.length > 0 && (
                                          <ul>
                                            {sub.details.map((d, idx) => (
                                              <li key={idx}>
                                                <strong>{d.name}:</strong>{" "}
                                                {d.description}
                                              </li>
                                            ))}
                                          </ul>
                                        )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </>
                          )}

                        {/* BENEFICIOS */}
                        {Array.isArray(s.benefits) && s.benefits.length > 0 && (
                          <>
                            <h4 className="mb-4">Beneficios</h4>
                            <ul className="list-unstyled ml-3 mb-2">
                              {s.benefits.map((b, i) => (
                                <li key={i} className="mb-2">
                                  <i className="fas fa-check me-2" /> {b}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}

                        {/* FAQ */}
                        {Array.isArray(s.faq) && s.faq.length > 0 && (
                          <>
                            <h4 className="mt-4 mb-4">Preguntas frecuentes</h4>
                            <div className="faq-list mb-2">
                              {s.faq.map((f, i) => (
                                <div key={i} className="mb-3">
                                  <strong>{f.question}</strong>
                                  <p className="mb-0 mt-0">{f.answer}</p>
                                </div>
                              ))}
                            </div>
                          </>
                        )}

                        {/* CTA */}
                        {s.cta && (
                          <div className="mt-4 mb-4">
                            <Link href="/contact">
                              <a className="btn-curve">Contacta ahora</a>
                            </Link>
                          </div>
                        )}
                      </div>

                      {/* AUTOR / INFO */}
                      <div className="author mt-5">
                        <div className="author-img">
                          <img
                            src="/assets/img/blog/01.jpg"
                            alt={s.by || "Autor"}
                          />
                        </div>
                        <div className="info">
                          <h6>
                            <span>firma :</span> {s.by || fallback.by}
                          </h6>
                          <p>
                            {s.by
                              ? "Equipo legal de Paredes Sifuentes Abogados. Brindamos asesoría especializada y acompañamiento en cada caso."
                              : fallback.description}
                          </p>
                          <div className="social">
                            <a
                              href="https://www.facebook.com/profile.php?id=61573933954882"
                              aria-label="facebook"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                              href="https://www.instagram.com/paredes.sifuentes?igsh=aW0xOXEwbWVzcGtk"
                              aria-label="instagram"
                            >
                              <i className="fab fa-instagram"></i>
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* PAGINACION (opcional, se mantiene la estructura) */}
                      <div className="pagination mt-4">
                        <span>
                          <Link href="#">
                            <a>Ant Servicio</a>
                          </Link>
                        </span>
                        <span className="icon">
                          <Link href="service">
                            <a>
                              <i className="fas fa-th-large"></i>
                            </a>
                          </Link>
                        </span>
                        <span className="text-right">
                          <Link href="#">
                            <a>Sig Servicio</a>
                          </Link>
                        </span>
                      </div>

                      {/* COMMENTS y FORM: conservados (puedes adaptarlos o remover) */}
                      {/* <div className="comments-area mt-5">
                        <h5>Comments :</h5>
                        <div className="item">
                          <div className="comment-img">
                            <img src="/assets/img/blog/01.jpg" alt="" />
                          </div>
                          <div className="info">
                            <h6>
                              Jorden Griffin<span> 6 Aug 2022</span>
                            </h6>
                            <span className="replay">
                              <Link href="#">
                                <a>
                                  Replay <i className="fas fa-reply"></i>
                                </a>
                              </Link>
                            </span>
                            <p>
                              the main component of a healthy environment for
                              self esteem is that it needs be nurturing. The
                              main compont of a healthy environment.
                            </p>
                          </div>
                        </div>
                      </div> */}
                      {/* 
                      <div className="comment-form mt-4">
                        <h5>Add Comment :</h5>
                        <div className="form">
                          <form action="">
                            <div className="row">
                              <div className="col-12">
                                <div className="form-group">
                                  <textarea placeholder="Your Comment"></textarea>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input type="text" placeholder="Your Name" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="email"
                                    placeholder="Your Email"
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="form-group">
                                  <button className="btn-curve btn-blc btn-lg">
                                    <span>Submit</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostDetails;
