import React from "react";
import HombreORdenador from "../../assets/hombre-ordenador.png";
import Circulo from "../../assets/circulo-azul.png";
import SliderLogo from "../../components/SliderLogo";

const ContenidoHeroe = () => {
  return (
    <section className="flex items-center gap-14 h-[70vh] relative">
      <div className="w-1/2 gap-5 flex flex-col">
        <h1 className="text-negro text-wrap text-6xl font-black">
          Soluciones webs a <strong className="text-azul">Medida.</strong> Tu
          Visión, Nuestra <strong className="text-azul">Realidad</strong>
        </h1>
        <p className="text-2xl font-light">
          ¿Estás listo para transformar tu empresa en el mundo digital? Descubre
          cómo podemos ayudarte a trazar el camino hacia el éxito en línea
        </p>
        <div className="flex gap-7 ">
          <button className="bg-azul px-14 py-3 border-2 border-azul rounded-2xl text-blanco hover:bg-transparent hover:text-negro hover:border-azul transition-all duration-500 text-xl font-light">
            Contactanos
          </button>
          <button className="border-azul text-negro border-2 px-14 py-3 rounded-2xl hover:bg-azul hover:text-blanco transition-all duration-500 text-xl font-light">
            Conocenos
          </button>
        </div>
        <div className="bg-blanco rounded-2xl absolute -bottom-7 -left-7 w-1/2 shadow-black shadow-lg	">
          <SliderLogo/>
        </div>
      </div>
      <div className="w-1/2 relative h-full">
        <img
          src={HombreORdenador}
          alt="Hombre con ordenador"
          className="w-full h-auto rounded-lg absolute z-10"
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
