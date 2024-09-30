import React from 'react';
import 'boxicons/css/boxicons.min.css';
import '../styles/var.css'; 
import '../styles/reset.css'; 
import '../styles/about.css'
import fxrDevImg from '../assets/fxr-dev.png';

const About = () => {
  return (
    <section id="about">
      <div className="about-img">
      <img src={fxrDevImg} alt="Imagem do desenvolvedor" />
      </div>
      <div className="about-container">
        <h2 className="heading">
          Sobre <span>Mim</span>
        </h2>
        <h3> Dev Front-end</h3>

        <p>
          <strong>Olá! Me chamo Vinicius Fernandes e sou um desenvolvedor front-end em formação!</strong>
        </p>
        <p>Cursando o 4° semestre de engenharia de software, Universidade Católica de Santa Catarina</p>
        <ul>
          <li>Previsão de conclusão em 2026</li>
        </ul>
        <br />
        <br />
        <p>
          Gosto muito da área de tecnologia, estou em busca da minha primeira oportunidade na área e tenho certeza que posso contribuir em qualquer equipe com as minhas habilidades.
          <br />
          <br />
          Estou sempre me desafiando com novos projetos e tentando me melhorar como dev constantemente.
          <br />
          <br />
          Também gosto de filmes, séries, praticar esportes e jogar.
        </p>
      </div>
    </section>
  );
};

export default About;
