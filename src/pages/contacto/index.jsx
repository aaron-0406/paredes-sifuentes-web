import React from "react";
import Head from "next/head";
import ContactHero from "../../components/ContactHero";
import ContactChannels from "../../components/ContactChannels";
import TrustIndicators from "../../components/TrustIndicators";
import SmartContactForm from "../../components/SmartContactForm";
import TeamMini from "../../components/TeamMini";
import Cobertura from "../../components/Cobertura";
import CallToAction from "../../components/CallToAction";
import MainLayout from "../../layouts/main";
import appData from "../../data/app.json";

const Contact = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  return (
    <MainLayout>
      <Head>
        <title>Contáctanos | Paredes Sifuentes Abogados – Trujillo, Perú</title>
        <meta name="description" content="Contáctanos por WhatsApp, teléfono o formulario. Respondemos en minutos. Atención en Trujillo, Chimbote, Huarmey y virtual en todo el Perú." />
        <link rel="canonical" href="https://www.paredesifuentes.com/contacto" />
        <meta property="og:title" content="Contáctanos | Paredes Sifuentes Abogados" />
        <meta property="og:url" content="https://www.paredesifuentes.com/contacto" />
      </Head>
      {/* 1. Hero compacto con CTAs */}
      <ContactHero />

      {/* 2. Canales de contacto */}
      <ContactChannels />

      {/* 3. Social proof: stats + mini testimonios */}
      <TrustIndicators />

      {/* 4. Formulario inteligente */}
      <SmartContactForm />

      {/* 5. Quiénes te atenderán */}
      <TeamMini />

      {/* 6. Cobertura */}
      <Cobertura />

      {/* 7. CTA con urgencia */}
      <CallToAction
        title="No dejes tu problema legal para mañana"
        subtitle="Mientras más tiempo pasa, más complicado se vuelve"
        buttonText="Hablar con un abogado ahora"
        variant="dark"
      />

      {/* 8. Mapa */}
      <section
        style={{
          padding: "60px 0",
          background: "#F0ECE1",
        }}
      >
        <div className="container">
          <div
            className="wow fadeInUp"
            data-wow-delay=".3s"
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 10px 40px rgba(96, 32, 44, 0.1)",
            }}
          >
            <iframe
              src={appData.mapIframe}
              style={{
                width: "100%",
                height: "400px",
                border: 0,
              }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Paredes Sifuentes Abogados"
            ></iframe>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
