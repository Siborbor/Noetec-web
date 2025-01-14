import React from "react";
import { proyectos } from "../data/portaforlio";

const GridCard = () => {
  const proyectLength = proyectos.length;

  const listProyect = proyectos.map((proyecto, index) => (
    <div
      key={proyecto.index}
      className={`relative w-full h-96 bg-cover bg-top rounded-lg overflow-hidden group ${((index + 1) % 3) === 2 ? 'mt-10' : '' }`}
      style={{ backgroundImage: `url(${proyecto.portada})` }}
    >
      <div
        className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300"
        style={{ backgroundColor: proyecto.color }}
      ></div>
      <p className="absolute inset-0 flex items-center justify-center text-blanco text-2xl font-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {proyecto.title}
      </p>
    </div>
  ));
  return <section className="grid grid-cols-3 gap-10 pt-10">{listProyect}</section>;
};

export default GridCard;
