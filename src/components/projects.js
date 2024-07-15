import React from 'react';
import '../styles/var.css'; 
import '../styles/reset.css'; 
import projetoPacImg from '../assets/projeto-pac.png';
import projetoRoboticaImg from '../assets/projeto-robotica.png';
import loadingImg from '../assets/loading.png';


const Projects = () => {
  return (
    <section id="projects">
      <h2 className="heading">Meus <span>Projetos</span></h2>

      <div className="projects-container">
        <div className="projects-box">
        <img src={projetoPacImg} alt="Projeto PAC" />
          <div className="projects-layer">
            <h3>Projeto voluntário</h3>
            <p>Landing page de uma organização sem fins lucrativos feita para um projeto de faculdade, fui o responsável pelo front-end com HTML, CSS e JavaScript puros.</p>
            <a className="a1" href="https://project-pac.vercel.app/" target="_blank" rel="noopener noreferrer">
              <i className='bx bx-link-external'></i>
            </a>
            <a className="a2" href="https://github.com/fxrnandes/project-pac" target="_blank" rel="noopener noreferrer">
              <i className='bx bxl-github'></i>
            </a>
          </div>
        </div>

        <div className="projects-box">
        <img src={projetoRoboticaImg} alt="Projeto Robótica" />
          <div className="projects-layer">
            <h3>Projeto robótica</h3>
            <p>Projeto de site para uma matéria da faculdade onde é explicado sobre a robótica e programação de um robô seguidor de linha, feito com HTML, CSS e JavaScript puros.</p>
            <a className="a1" href="https://site-pac.netlify.app/circ" target="_blank" rel="noopener noreferrer">
              <i className='bx bx-link-external'></i>
            </a>
            <a className="a2" href="https://github.com/fxrnandes/site-PAC" target="_blank" rel="noopener noreferrer">
              <i className='bx bxl-github'></i>
            </a>
          </div>
        </div>

        <div className="projects-box">
        <img src={loadingImg} alt="Em desenvolvimento" />
          <div className="projects-layer">
            <h3>Em desenvolvimento</h3>
            <p>Projeto em desenvolvimento...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
