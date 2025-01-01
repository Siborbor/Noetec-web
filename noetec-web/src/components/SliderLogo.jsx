import React from "react";
import logos from "../data/logos";

const SliderLogo = () => {
  return (
    <div className="overflow-hidden bg-gray-100 py-4 relative">
      <div className="flex w-[200%] gap-14 animate-scroll">
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="w-40 h-14 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default SliderLogo;
