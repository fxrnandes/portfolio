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

  const handleLinkClick = () => {
    setMenuActive(false); // Fecha o menu ao clicar em um link
  };

  return (
    <>
      <div
        id="menu-icon"
        className={`bx ${menuActive ? 'bx-x active' : 'bx-menu'}`}
        onClick={toggleMenu}
      >
      </div>
      <header>
        <nav className={`navbar ${menuActive ? 'active' : ''}`}>
          <a href="#home" onClick={handleLinkClick}>Home</a>
          <a href="#about" onClick={handleLinkClick}>Sobre</a>
          <a href="#skills" onClick={handleLinkClick}>Skills</a>
          <a href="#projects" onClick={handleLinkClick}>Projetos</a>
        </nav>
      </header>
    </>
  );
};

export default Header;
