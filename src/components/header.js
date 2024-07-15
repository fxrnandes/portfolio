// src/components/header.js
import React from 'react';
import '../styles/var.css'; 
import '../styles/reset.css'; 

const Header = () => {
  return (
    <header className="header">
    <a href="#home" className="logo">Portfolio</a>
    <i className="bx bx-menu" id="menu-icon"></i>
    <nav className="navbar">
      <a href="#home">Home</a>
      <a href="#sobre">Sobre</a>
      <a href="#habilidades">Habilidades</a>
      <a href="#certifications">Certificações</a>
      <a href="#portfolio">Portfolio</a>
    </nav>
  </header>
  );
};

export default Header;
