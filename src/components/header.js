import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import '../styles/var.css';
import '../styles/reset.css';
import '../styles/header.css';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header>
      <div className="logo">Vinicius Fernandes - dev</div>
      <nav className={`navbar ${menuActive ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">Sobre</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projetos</a>
      </nav>
      <div
        id="menu-icon"
        className={`bx ${menuActive ? 'bx-x close' : 'bx-menu'}`}
        onClick={toggleMenu}
      ></div>
    </header>
  );
};

export default Header;
