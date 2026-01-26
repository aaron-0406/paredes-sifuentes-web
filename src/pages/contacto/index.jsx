import React from "react";
import PageHeader from "../../components/Page-header";
import ContactInfo from "../../components/Contact-info";
import ContactWithMap from "../../components/Contact-with-map";
import ContactComponent from "../../components/Contact";
import MainLayout from "../../layouts/main";

const Contact = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <PageHeader
        title="Contáctanos"
        fullPath={[
          { id: 1, name: "Inicio", url: "/" },
          { id: 2, name: "contáctanos", url: "/contacto" },
        ]}
        image="/assets/img/pg2.jpg"
      />
      <section className="contact">
        <ContactInfo />
        <ContactComponent />
        {/* <ContactWithMap /> */}
      </section>
    </MainLayout>
  );
};

export default Contact;
