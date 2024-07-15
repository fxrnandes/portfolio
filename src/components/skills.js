import React from 'react';
import 'boxicons/css/boxicons.min.css';
import '../styles/var.css'; 
import '../styles/reset.css'; 

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="heading">Minhas <span>Habilidades</span></h2>

<div class="skills-container">
  <div className="skills-box">
    <i className='bx bxl-javascript'></i>
    <h3>JavaScript</h3>
    <p>Tenho uma boa base do JS. Já entendo bem alguns conceitos e tenho facilidade e vontade em aprender.</p>
  </div>

  <div className="skills-box">
    <i className='bx bxl-html5'></i>
    <h3>Html5</h3>
    <p>Conheço conceitos do HTML5 como elementos semânticos, meta tags, atributos, hierarquia de elementos,
      responsividade, importação de fontes, formatação de textos, formulários, etc.</p>
  </div>

  <div className="skills-box">
    <i className='bx bxl-css3'></i>
    <h3>CSS3</h3>
    <p> Tenho noção do CSS3 como flexbox, grid, seletores, variáveis, herança, especificidade, fontes, medidas,
      unidades, posicionamento, pseudo classes, pseudo elementos, estilos de texto, media queries, entre outros.
    </p>
  </div>

  <div className="skills-box">
    <i className='bx bxl-react'></i>
    <h3>React JS</h3>
    <p>Possuo algum conhecimento em Vue e atualmente tentando me especializar no framework.</p>
  </div>

  <div className="skills-box">
    <i className='bx bxl-git'></i>
    <h3>Git</h3>
    <p>
      Tenho noção do Git com os comando para versionamento de código como git add, commit, push, branch, status,
      clone dos repositórios, configuração do SSH, estado dos arquivos, remoção de arquivos pelo terminal, entre
      outras coisas.
    </p>
  </div>

  <div className="skills-box">
    <i className='bx bxl-github'></i>
    <h3>GitHub</h3>
    <p>Prática no GitHub na criação de repositórios, commits, clone repositórios, fazer forks, hospedagem no github
      pages, criação de readmes, entre outras operações.</p>
  </div>
  </div>
    </section>
  );
};

export default Skills;
