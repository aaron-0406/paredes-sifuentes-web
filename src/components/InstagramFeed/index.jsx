import React, { useEffect } from "react";

const InstagramFeed = ({ elfsightAppId }) => {
  useEffect(() => {
    // Cargar script de Elfsight solo una vez
    const existingScript = document.querySelector(
      'script[src="https://elfsightcdn.com/platform.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section
      className="instagram-feed section-padding"
      style={{ background: "#fff" }}
    >
      <div className="container">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <h6
                className="wow fadeInDown"
                data-wow-delay=".3s"
                style={{ color: "#B5844F" }}
              >
                SÍGUENOS
              </h6>
              <h4
                className="playfont wow flipInX"
                data-wow-delay=".5s"
                style={{ color: "#60202C" }}
              >
                @paredes.sifuentes
              </h4>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            {/* Widget de Elfsight */}
            <div
              className={`elfsight-app-${elfsightAppId}`}
              data-elfsight-app-lazy
            ></div>
          </div>
        </div>
        <div className="text-center mt-40">
          <a
            href="https://www.instagram.com/paredes.sifuentes"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-curve"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 28px",
              backgroundColor: "#60202C",
              color: "#F0ECE1",
              borderRadius: "4px",
              fontSize: "14px",
              fontWeight: "500",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            <i className="fab fa-instagram" style={{ fontSize: "18px" }}></i>
            <span>Ver más en Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
