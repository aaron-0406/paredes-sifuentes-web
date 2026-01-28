/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutUs1 from "../../components/About-Us1";
import IntroWithHorizontal from "../../components/Intro-with-horizontal";
import LightLayout from "../../layouts/light";
import Portfolio1 from "../../components/Portfolio1";
import Services1 from "../../components/Services1";
import Services2 from "../../components/Services2";
import Services4 from "../../components/Services4";
import SkillsCircle from "../../components/Skills-circle";
import Testimonials from "../../components/Testimonials1";
import Team1 from "../../components/Team1";
import Contact from "../../components/Contact";
import Process from "../../components/Process";
import CallToAction from "../../components/CallToAction";
import WhyChooseUs from "../../components/WhyChooseUs";
import InstagramFeed from "../../components/InstagramFeed";

const Home1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout footerClass={"mt-30"}>
      <IntroWithHorizontal />
      <AboutUs1 />
      <WhyChooseUs />
      <CallToAction
        title="¿Necesitas asesoría legal?"
        subtitle="Cuéntanos tu caso y te orientamos sin compromiso"
        buttonText="Habla con un abogado"
        variant="dark"
      />
      <Process />
      <Services1 bigTitle grid />
      <InstagramFeed elfsightAppId="daba3e81-5b11-46df-bcc2-7215403c8b9a" />
      <CallToAction
        title="¿Listo para proteger tus derechos?"
        subtitle="Nuestro equipo está preparado para ayudarte"
        buttonText="Contáctanos ahora"
        variant="dark"
      />
      {/* <Services2 bigTitle grid /> */}
      {/* <Services4 bigTitle grid /> */}
      {/* <Portfolio1 /> */}
      {/* <SkillsCircle /> */}
      {/* <Testimonials /> */}
      {/* <Team1 /> */}

    </LightLayout>
  );
};

export default Home1;
