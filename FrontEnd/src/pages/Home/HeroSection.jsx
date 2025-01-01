import React from "react";
import { Navbar } from "../../components/Navbar";
import ContenidoHeroe from "./ContenidoHeroe";
const Hero = () => {
  return (
    <div className="m-10 bg-amarillo rounded-xl ">
      <div className="flex max-w-screen-xl flex-col m-auto ">
        <Navbar />
        <ContenidoHeroe />
      </div>
    </div>
  );
};

export default Hero;
