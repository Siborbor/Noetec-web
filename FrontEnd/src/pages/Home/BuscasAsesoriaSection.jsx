import React from "react";
import ManWithComputer from "../../assets/man-computer.png";

const BuscasAsesoriaSection = () => {
  return (
    <section className="flex m-16 justify-center">
      <div className="flex bg-amarillo h-72 justify-end align-bottom">
        <img className="w-full h-96 object-contain" src={ManWithComputer} />
        <div className="flex flex-col w-1/2">
          <div class="relative inline-block">
            <span class="font-black text-negro text-wrap text-4xl">
            ¿En busca de asesoría?
            </span>
            <div class="absolute -bottom-4 left-0 w-1/3 h-[10px] bg-negro"></div>
          </div>
          <span>
            Nuestro equipo de especialistas lo podrá guiar en la implementación
            de nuestras soluciones.
          </span>
          <form>
            <div>
              <input type="text" name="nombre"></input>
              <input type="email" name="email"></input>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BuscasAsesoriaSection;
