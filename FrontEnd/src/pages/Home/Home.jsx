import React from "react";
import Hero from "./HeroSection";
import EspecialistaCreacion from "./EspecialistaCreacionSection";
import NuestrosServiciosSection from "./NuestrosServiciosSection";
import NuestrosProyectosSection from "./NuestrosProyectosSection";
import BuscasAsesoriaSection from "./BuscasAsesoriaSection";

const Home = () => {
  return (
    <>
      <Hero />
      <EspecialistaCreacion/>
      <NuestrosServiciosSection/>
      <NuestrosProyectosSection/>
      <BuscasAsesoriaSection/>
    </>
  );
};

export default Home;
