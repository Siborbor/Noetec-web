import React from "react";
import CardsService from "../../components/CardsService";
import DesarrolloWeb from "../../assets/computadora.png";

const CardsServicios = () => {
  return (
    <div className="flex max-w-7xl m-auto justify-between z-10 -m-10">
      <CardsService
        image={DesarrolloWeb}
        title="Desarrollo Web"
        description="El desarrollo web es como construir una casa, pero en Internet. Piensa en ello como la base sólida para tu presencia en Internet."
      />
      <CardsService
        image={DesarrolloWeb}
        title="Desarrollo Web"
        description="El desarrollo web es como construir una casa, pero en Internet. Piensa en ello como la base sólida para tu presencia en Internet."
      />
      <CardsService
        image={DesarrolloWeb}
        title="Desarrollo Web"
        description="El desarrollo web es como construir una casa, pero en Internet. Piensa en ello como la base sólida para tu presencia en Internet."
      />
    </div>
  );
};

export default CardsServicios;
