// src/components/footer.js
import React from 'react';
import '../styles/var.css'; 
import '../styles/reset.css'; 

const Footer = () => {
  return (
    <footer>
      <h2>Entre em contato</h2>
    <div className="social-media">
      <a href="https://github.com/fxrnandes" target="_blank" rel="noopener noreferrer"><i class='bx bxl-github'></i></a>
      <a href="https://www.linkedin.com/in/vinicius-fernandes-carvalho-10594626b/" target="_blank" rel="noopener noreferrer"><i class='bx bxl-linkedin'></i></a>
    </div>
    <p> Copyright &copy; 2024, Vinicius Fernandes Carvalho | all rights Reserved.</p>
    </footer>
  );
};

export default Footer;
