import React from "react";
import CardsService from "../../components/CardsService";
import DesarrolloWeb from "../../assets/computadora.png";
import DesarrolloMobile from "../../assets/mobile.png";
import DiseñoWeb from "../../assets/desing.png";

const CardsServicios = () => {
  return (
    <div className="flex max-w-7xl m-auto justify-between z-10 -mt-14">
      <CardsService
        image={DesarrolloWeb}
        title="Desarrollo Web"
        description="El desarrollo web es como construir una casa, pero en Internet. Piensa en ello como la base sólida para tu presencia en Internet."
      />
      <CardsService
        image={DesarrolloMobile}
        title="Desarrollo Mobile"
        description="El desarrollo móvil es como crear una versión especial de tu negocio que cabe en el bolsillo de tus clientes. "
      />
      <CardsService
        image={DiseñoWeb}
        title="Diseño web"
        description="El diseño web es como la decoración y el estilo de una tienda física, pero en el mundo digital. Es la creatividad que transforma un sitio web en algo atractivo"
      />
    </div>
  );
};

export default CardsServicios;
