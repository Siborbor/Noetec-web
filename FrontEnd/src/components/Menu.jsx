import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="flex text-negro">
      <ul className="flex gap-5 items-center text-xl">
        <li>
          <Link to="/" className="hover:underline ">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/nosotros" className="hover:underline">
            Nosotros
          </Link>
        </li>
        <li>
          <Link to="/servicios" className="hover:underline">
            Servicios
          </Link>
        </li>
        <li>
          <Link to="/blog" className="hover:underline">
            Blog
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
