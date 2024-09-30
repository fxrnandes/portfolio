import React from 'react';
import 'boxicons/css/boxicons.min.css';
import '../styles/var.css'; 
import '../styles/reset.css'; 
import '../styles/footer.css'; 

const Footer = () => {
  return (
    <footer>
      <h2>Entre em contato</h2>
      <div className="social-media">
        <a href="https://github.com/fxrnandes" target="_blank" rel="noopener noreferrer">
          <i className='bx bxl-github'></i>
        </a>
        <a href="https://www.linkedin.com/in/fernandes-vini/" target="_blank" rel="noopener noreferrer">
          <i className='bx bxl-linkedin'></i>
        </a>
      </div>
      <p> Copyright &copy; 2024, Vinicius Fernandes Carvalho | All rights reserved.</p>
    </footer>
  );
};

export default Footer;
