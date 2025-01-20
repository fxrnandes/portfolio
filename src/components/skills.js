import React from 'react';
import 'boxicons/css/boxicons.min.css';
import '../styles/var.css'; 
import '../styles/reset.css'; 
import '../styles/skills.css'; 

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="heading">Minhas <span>Habilidades</span></h2>

<div class="skills-container">
  <div className="skills-box">
    <i className='bx bxl-javascript'></i>
    <h3>JavaScript</h3>
  </div>

  <div className="skills-box">
    <i className='bx bxl-html5'></i>
    <h3>Html5</h3>
  </div>

  <div className="skills-box">
    <i className='bx bxl-css3'></i>
    <h3>CSS3</h3>
  </div>

  <div className="skills-box">
    <i className='bx bxl-react'></i>
    <h3>React JS</h3>
  </div>

  <div className="skills-box">
    <i className='bx bxl-flutter'></i>
    <h3>Flutter</h3>
  </div>

  <div className="skills-box">
    <i className='bx bxl-typescript'></i>
    <h3>Typescript</h3>
  </div>

  <div className="skills-box">
    <i className='bx bxl-git'></i>
    <h3>Git</h3>
  </div>

  <div className="skills-box">
    <i className='bx bxl-github'></i>
    <h3>GitHub</h3>
  </div>
  </div>
    </section>
  );
};

export default Skills;
