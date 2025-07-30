import React from 'react';
import 'boxicons/css/boxicons.min.css';
import '../styles/var.css'; 
import '../styles/reset.css'; 
import '../styles/projects.css'; 
import projetoPacImg from '../assets/projeto-pac.png';
import projetoRoboticaImg from '../assets/projeto-robotica.png';
import loadingImg from '../assets/loading.png';


const Projects = () => {
  return (
    <section id="projects">
      <h2 className="heading">Meus <span>Projetos</span></h2>

      <div className="projects-container">
        <div className="projects-box">
          <div className="projects-box-content">
            <div className="projects-box-image">
              <img src={projetoPacImg} alt="Projeto PAC" />
              <div className="project-status">Concluído</div>
            </div>
            <div className="projects-box-info">
              <div className="projects-info-content">
                <h3>Projeto voluntário</h3>
                <p>Landing page de uma ONG feita para um projeto de faculdade, onde fui o responsável pelo front-end com HTML, CSS e JS puros.</p>
              </div>
              <div className="projects-links">
                <a href="https://github.com/GabrielWendorff/projectPAC" target="_blank" rel="noopener noreferrer">
                  <i className='bx bxl-github'></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects-box">
          <div className="projects-box-content">
            <div className="projects-box-image">
              <img src={projetoRoboticaImg} alt="Projeto Robótica" />
              <div className="project-status">Concluído</div>
            </div>
            <div className="projects-box-info">
              <div className="projects-info-content">
                <h3>Projeto robótica</h3>
                <p>Meu primeiro projeto de site feito para uma matéria da faculdade sobre o tema de robótica e programação de um robô seguidor de linha, feito com HTML, CSS e JS puros.</p>
              </div>
              <div className="projects-links">
                <a href="https://site-pac.netlify.app/circ" target="_blank" rel="noopener noreferrer">
                  <i className='bx bx-link-external'></i>
                </a>
                <a href="https://github.com/fxrnandes/site-PAC" target="_blank" rel="noopener noreferrer">
                  <i className='bx bxl-github'></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects-box">
          <div className="projects-box-content">
            <div className="projects-box-image">
              <img src={loadingImg} alt="Em desenvolvimento" />
              <div className="project-status">Em breve</div>
            </div>
            <div className="projects-box-info">
              <div className="projects-info-content">
                <h3>Em desenvolvimento</h3>
                <p>Novo projeto em desenvolvimento. Em breve mais detalhes sobre esta funcionalidade que está sendo criada com muito carinho.</p>
              </div>
              <div className="projects-links">
                {/* Links serão adicionados quando o projeto estiver pronto */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;