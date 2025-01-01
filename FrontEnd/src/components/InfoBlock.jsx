import React from "react";

const InfoBlock = ({ children, logo, keywords = [] }) => {
  
    const highlightText = (text) => {
    const regex = new RegExp(`(${keywords.join("|")})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, index) =>
      keywords.includes(part.toLowerCase()) ? (
        <strong className="text-azul font-black" key={index}>{part}</strong>
      ) : (
        part
      )
    );
  };

  return (
    <div className="flex gap-4 w-4/5">
      <img className="w-16 h-10 object-contain" src={logo} />
      <p className="text-lg text-negro font-light">{highlightText(children)}</p>
    </div>
  );
};

export default InfoBlock;
