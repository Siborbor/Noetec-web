import React from "react";
import Developer from "../../assets/developer.png"

const SolucionesAdaptadas = () => {
  return (
    <div className="max-w-7xl flex m-auto gap-12 justify-between z-0">
      <div className="w-1/2 flex flex-col">
          <span className="text-negro font-black text-xl">
            NUESTROS SERVICIOS
          </span>
        <div class="relative inline-block">
          <span class="font-black text-azul text-wrap text-4xl">
            Soluciones adaptadas a tu sector
          </span>
          <div class="absolute -bottom-4 left-0 w-1/4 h-[10px] bg-negro"></div>
        </div>
        <p className="font-light text-xl py-10">
          Tenemos un conjunto variado de soluciones tecnológicas diseñadas
          específicamente para abordar las necesidades y desafíos de tu
          industria.
        </p>
      </div>
      <div>
        <img src={Developer}/>
      </div>
    </div>
  );
};

export default SolucionesAdaptadas;
