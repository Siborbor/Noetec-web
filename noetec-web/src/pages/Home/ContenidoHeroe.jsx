import React from "react";
import HombreORdenador from "../../assets/hombre-ordenador.png";
import Circulo from "../../assets/circulo-azul.png";

const ContenidoHeroe = () => {
  return (
    <section className="flex items-center gap-10 h-[70vh]">
      <div className="max-w-xl gap-5 flex flex-col">
        <h1 className="text-negro text-wrap text-6xl font-black">
          Soluciones webs a <strong className="text-azul">Medida.</strong> Tu
          Visión, Nuestra <strong className="text-azul">Realidad</strong>
        </h1>
        <p className="text-2xl font-light">
          ¿Estás listo para transformar tu empresa en el mundo digital? Descubre
          cómo podemos ayudarte a trazar el camino hacia el éxito en línea
        </p>
        <div className="flex gap-7 ">
          <button className="bg-azul px-16 py-5 border-2 border-azul rounded-xl text-blanco hover:bg-transparent hover:text-negro hover:border-azul transition-all duration-500 text-xl font-light">
            Contactanos
          </button>
          <button className="border-azul text-negro border-2 px-16 py-5 rounded-xl hover:bg-azul hover:text-blanco transition-all duration-500 text-xl font-light">
            Conocenos
          </button>
        </div>
      </div>
      <div className="w-1/2 relative h-full">
        <img
          src={HombreORdenador}
          alt="Hombre con ordenador"
          className="w-full h-auto rounded-lg absolute z-10 w-auto"
        />
        <img
          src={Circulo}
          alt="Circulo Azul"
          className="w-full h-auto rounded-lg absolute z-0"
        />
      </div>
    </section>
  );
};

export default ContenidoHeroe;
