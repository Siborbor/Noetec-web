import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Nosotros from "./pages/Nosotros/Nosotros";
import Servicios from "./pages/Servicios/Servicios";
import Blog from "./pages/Blog/Blog";

export default function AppRouters() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}
