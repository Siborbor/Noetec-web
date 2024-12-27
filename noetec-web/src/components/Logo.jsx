import React from "react";
import Logotipo from "./../assets/logotipo.png";

const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <img src={Logotipo} className="w-10 " />
      <p className="text-2xl text-negro font-bold">NOETEC</p>
    </div>
  );
};

export default Logo;
