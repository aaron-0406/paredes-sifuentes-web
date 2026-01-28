import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import AboutUs4 from "../../components/About-Us4";
import TeamExpanded from "../../components/TeamExpanded";
import Cobertura from "../../components/Cobertura";
import AreasPractica from "../../components/AreasPractica";

const About = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  return (
    <MainLayout>
      <PageHeader
        title="Sobre Nosotros"
        fullPath={[
          { id: 1, name: "Inicio", url: "/" },
          { id: 2, name: "Nosotros", url: "/nosotros" },
        ]}
        image="/assets/img/pg1.jpg"
      />
      <AboutUs4 />
      <TeamExpanded />
      <Cobertura />
      <AreasPractica />
    </MainLayout>
  );
};

export default About;
