import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

export const Navbar = () => {
  return (
    <div className="flex justify-between mt-10 mb-10 w-full">
      <Logo />
      <Menu />
    </div>
  );
};
