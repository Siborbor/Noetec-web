import React from "react";

const CardsService = ({ image, title, description }) => {
  return (
    <section className="flex flex-col gap-8 w-80 bg-blanco rounded-2xl px-8 pb-11">
      <img src={image} className="-mt-14 w-3/4 m-auto" />
      <span className="text-negro font-black text-2xl text-center">
        {title}
      </span>
      <span className="text-negro font-light text-lg">{description}</span>
      <button className="flex items-center gap-1 text-azul font-black hover:gap-2 transition-all w-1/2">
        Leer más
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
    </section>
  );
};

export default CardsService;
