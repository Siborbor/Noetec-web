import React from "react";
import Hero from "./HeroSection";
import EspecialistaCreacion from "./EspecialistaCreacionSection";
import NuestrosServiciosSection from "./NuestrosServiciosSection";

const Home = () => {
  return (
    <>
      <Hero />
      <EspecialistaCreacion/>
      <NuestrosServiciosSection/>
    </>
  );
};

export default Home;
