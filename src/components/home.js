import React, { useEffect } from 'react';
import Typed from 'typed.js';
import 'boxicons/css/boxicons.min.css';
import '../styles/var.css'; 
import '../styles/reset.css'; 
import '../styles/home.css'; 
import fxrHomeImg from '../assets/fxr-dev.png';

const Home = () => {
  useEffect(() => {
    const typed = new Typed('.multiple-text', {
      strings: ['Desenvolvedor Jr.', 'Estudante de Engenharia de Software'],
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 2500,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    // Limpa o efeito quando o componente for desmontado
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-wrapper">
        <div className="home-container">
          <div className="intro-text">Olá, eu me chamo</div>
          <h1>Vinicius Fernandes</h1>
          <div className="typed-container">
            E sou um <span className="multiple-text"></span>
          </div>
          <div className="cta-container">
            <a  
              href="/Currículo Vinicius Full Stack.pdf" 
              download="Currículo Vinicius Full Stack.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="btn"
            >
              Download CV <i className='bx bx-arrow-to-bottom'></i>
            </a>
          </div>
          <div className="social-media">
            <a href="https://github.com/fxrnandes" target="_blank" rel="noreferrer">
              <i className='bx bxl-github'></i>
            </a>
            <a href="https://www.linkedin.com/in/fernandes-vini/" target="_blank" rel="noreferrer">
              <i className='bx bxl-linkedin'></i>
            </a>
          </div>
        </div>
        <div className="home-img">
          <div className="home-img-container">
            <img src={fxrHomeImg} alt="Vinicius Fernandes" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
