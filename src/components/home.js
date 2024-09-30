import React, { useEffect } from 'react';
import Typed from 'typed.js';
import 'boxicons/css/boxicons.min.css';
import '../styles/var.css'; 
import '../styles/reset.css'; 
import '../styles/home.css'; 
import fxrHomeImg from '../assets/fxr-home.png';

const Home = () => {
  useEffect(() => {
    const typed = new Typed('.multiple-text', {
      strings: ['Dev Front-end', 'estudante de engenharia de software'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 2000,
      loop: true
    });

    // Limpa o efeito quando o componente for desmontado
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-container">
        <h3>Olá, eu me chamo</h3>
        <h1>Vinicius Fernandes</h1>
        <h3>E sou um <span className="multiple-text"></span></h3>
        <a href="https://docs.google.com/document/d/15elND7SfC2NRDsG8eg7bqu6irD-vbMhd/edit?usp=sharing&ouid=108611119747602290899&rtpof=true&sd=true" target="_blank" rel="noreferrer" className="btn">Download CV <i className='bx bx-arrow-to-bottom'></i></a>
        <div className="social-media">
          <a href="https://github.com/fxrnandes" target="_blank" rel="noreferrer"><i className='bx bxl-github'></i></a>
          <a href="https://www.linkedin.com/in/fernandes-vini/" target="_blank" rel="noreferrer"><i className='bx bxl-linkedin'></i></a>
        </div>
      </div>
      <div className="home-img">
        <img src={fxrHomeImg} alt="Imagem home" />
      </div>
    </section>
  );
};

export default Home;
