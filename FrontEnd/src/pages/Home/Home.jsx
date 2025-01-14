import React from "react";
import Hero from "./HeroSection";
import EspecialistaCreacion from "./EspecialistaCreacionSection";
import NuestrosServiciosSection from "./NuestrosServiciosSection";
import NuestrosProyectosSection from "./NuestrosProyectosSection";

const Home = () => {
  return (
    <>
      <Hero />
      <EspecialistaCreacion/>
      <NuestrosServiciosSection/>
      <NuestrosProyectosSection/>
    </>
  );
};

export default Home;
