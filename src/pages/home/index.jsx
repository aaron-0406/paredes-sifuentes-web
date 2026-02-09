/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutUs1 from "../../components/About-Us1";
import IntroWithHorizontal from "../../components/Intro-with-horizontal";
import LightLayout from "../../layouts/light";
import HomeServices from "../../components/HomeServices";
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
      <HomeServices />
      <InstagramFeed elfsightAppId="daba3e81-5b11-46df-bcc2-7215403c8b9a" />
      <CallToAction
        title="¿Listo para proteger tus derechos?"
        subtitle="Nuestro equipo está preparado para ayudarte"
        buttonText="Contáctanos ahora"
        variant="dark"
      />
    </LightLayout>
  );
};

export default Home1;
