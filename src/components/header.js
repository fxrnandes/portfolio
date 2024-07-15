import React from 'react';
import 'boxicons/css/boxicons.min.css';
import '../styles/var.css'; 
import '../styles/reset.css'; 

const Header = () => {
  return (
    <header>
      <div className="logo">Vinicius Fernandes</div>
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <div id="menu-icon" className="bx bx-menu"></div>
    </header>
  );
};

export default Header;
