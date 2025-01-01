import React from "react";
import MujerEspecialista from "../../assets/especialista-mujer.png";
import HombreEspecialista from "../../assets/especialista-hombre.png";
import InfoBlock from "../../components/InfoBlock";
import Menbrete from "../../assets/menbrete.png";
import Person from "../../assets/person-icon.png";
import Cubo from "../../assets/cubo.png";

const EspecialistaCreacion = () => {
  return (
    <section className="py-36 max-w-7xl gap-24 m-auto flex">
      <div className="w-1/2 relative">
        <img src={MujerEspecialista} className="absolute left-0" />
        <img src={HombreEspecialista} className="absolute right-28 top-32" />
      </div>
      <div className="max-w-xl gap-10 flex flex-col">
        <div class="relative inline-block">
          <span class="font-black text-negro text-wrap text-4xl">
            Especializados en la creación de software y sitios web
          </span>
          <div class="absolute -bottom-4 left-0 w-1/3 h-[10px] bg-azul"></div>
        </div>
        <p className="font-light text-xl">
          Sabemos que cada proyecto es único y merece una atención especial.
          creemos en la innovación y la creatividad.
        </p>
        <InfoBlock
          children={
            "Últimas tecnologías y diseño de vanguardia para proyectos eficientes y excepcionales."
          }
          logo={Menbrete}
          keywords={["tecnologías", "diseño"]}
        />
        <InfoBlock
          children={
            "Colaboramos para entender y crear soluciones que reflejen tus valores."
          }
          logo={Person}
          keywords={["Colaboramos", "crear", "soluciones", "tus", "valores"]}
        />
        <InfoBlock
          children={
            "Innovación y creatividad para destacar en línea con soluciones únicas."
          }
          logo={Cubo}
          keywords={["Innovación", "creatividad", "soluciones", "únicas"]}
        />
        <button className="border-azul text-azul border-2 py-3 w-1/3 rounded-2xl hover:bg-azul hover:text-blanco transition-all duration-500 text-xl font-light">
          Empezar!
        </button>
      </div>
    </section>
  );
};

export default EspecialistaCreacion;
