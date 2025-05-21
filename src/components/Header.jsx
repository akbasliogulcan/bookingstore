import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-body text-dark ">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <h2>Best Book</h2>
        <nav className="d-flex gap-4">
          <NavLink to="/">AnaSayfa</NavLink>
          <NavLink to="/ürünler">Ürünler</NavLink>
          <NavLink to="kategori">Kategori</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
