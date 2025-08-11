import React, { useState, useEffect } from 'react';
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

  const handleOverlayClick = () => {
    setMenuActive(false); // Fecha o menu ao clicar no overlay
  };

  // Efeito para fechar o menu com a tecla ESC
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setMenuActive(false);
      }
    };

    if (menuActive) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden'; // Previne scroll quando menu está aberto
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [menuActive]);

  return (
    <>
      {/* Menu Icon - só aparece em mobile */}
      <div
        id="menu-icon"
        className={`bx ${menuActive ? 'bx-x active' : 'bx-menu'}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
      </div>

      {/* Header Desktop */}
      <header>
        <div className="logo">
          Vinicius Fernandes - Dev
        </div>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">Sobre</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projetos</a>
        </nav>
      </header>

      {/* Overlay - só aparece quando menu mobile está ativo */}
      {menuActive && (
        <div 
          className="mobile-menu-overlay" 
          onClick={handleOverlayClick}
          aria-hidden="true"
        />
      )}

      {/* Menu Lateral Mobile */}
      <nav className={`mobile-menu ${menuActive ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <h2>Vinicius - Dev</h2>
        </div>
        <ul className="mobile-menu-items">
          <li>
            <a href="#home" onClick={handleLinkClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleLinkClick}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#skills" onClick={handleLinkClick}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleLinkClick}>
              Projetos
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
