import React from 'react';
import 'boxicons/css/boxicons.min.css';
import '../styles/var.css'; 
import '../styles/reset.css'; 
import '../styles/header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">Vinicius Fernandes - dev</div>
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">Sobre</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projetos</a>
      </nav>
      <div id="menu-icon" className="bx bx-menu"></div>
    </header>
  );
};

export default Header;
