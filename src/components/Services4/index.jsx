import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import Link from "next/link";
import services1Data from "../../data/services1.json";

const Services4 = () => {
  React.useEffect(() => {
    console.clear();
  }, []);
  const [isOpen, setOpen] = React.useState(false);
  return (
    <section className="services halfbg">
      <div
        className="background bg-img valign parallaxie"
        style={{ backgroundImage: `url(/assets/img/1.jpg)` }}
        data-overlay-dark="7"
      >
        {typeof window !== "undefined" && (
          <ModalVideo
            autoplay
            isOpen={isOpen}
            videoId="AzwC6umvd1s"
            onClose={() => setOpen(false)}
          />
        )}
        <Link
          href="https://www.instagram.com/reel/DONC8e9jiKl/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=="
          onClick={(e) => {
            e.preventDefault();
            setOpen(true);
          }}
        >
          <a className="play-button vid">
            <svg className="circle-fill">
              <circle
                cx="43"
                cy="43"
                r="39"
                stroke="#fff"
                strokeWidth=".5"
              ></circle>
            </svg>
            <svg className="circle-track">
              <circle
                cx="43"
                cy="43"
                r="39"
                stroke="none"
                strokeWidth="1"
                fill="none"
              ></circle>
            </svg>

            <span className="polygon">
              <i className="pe-7s-play"></i>
            </span>
          </a>
        </Link>
      </div>
      <div className="container ontop">
        <div className="row">
          {services1Data.services.map((service) => (
            <div className="col-lg-3 col-md-6 item-bx" key={service.id}>
              <h2 className="custom-font numb">{service.id}</h2>
              <h6 className="mb-20">{service.title}</h6>
              <p>{service.content}</p>
              <Link href="/servicios">
                <a className="more custom-font mt-30">Leer Más</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services4;
