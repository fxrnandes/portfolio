import React from 'react';
import 'boxicons/css/boxicons.min.css';
import '../styles/var.css'; 
import '../styles/reset.css'; 
import '../styles/skills.css';

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="heading">Minhas <span>Habilidades</span></h2>

      <div className="skills-container">
        <div className="skills-box">
          <i className='bx bxl-javascript'></i>
          <h3>JavaScript</h3>
        </div>

        <div className="skills-box">
          <i className='bx bxl-nodejs'></i>
          <h3>Node.js</h3>
        </div>

        <div className="skills-box">
          <i className='bx bxl-python'></i>
          <h3>Python</h3>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.66 7a1.5 1.5 0 0 0-.55-.57l-7.34-4.24a1.67 1.67 0 0 0-1.54 0L3.89 6.43a1.68 1.68 0 0 0-.77 1.33v8.48a1.6 1.6 0 0 0 .22.76 1.5 1.5 0 0 0 .55.57l7.34 4.24a1.67 1.67 0 0 0 1.54 0l7.34-4.24a1.5 1.5 0 0 0 .55-.57 1.6 1.6 0 0 0 .22-.76V7.76a1.6 1.6 0 0 0-.22-.76M12 17.92A5.92 5.92 0 1 1 17.13 9L16 9.71l-.36.2-1 .61A3 3 0 0 0 9 12a2.9 2.9 0 0 0 .4 1.48 3 3 0 0 0 5.13 0l2.6 1.52A5.94 5.94 0 0 1 12 17.92m5.92-5.59h-.66V13h-.65v-.66H16v-.66h.66V11h.65v.66h.66zm2.47 0h-.66V13h-.66v-.66h-.65v-.66h.65V11h.66v.66h.66z"></path>
          </svg>
          <h3>C++</h3>
        </div>

        <div className="skills-box">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.05 0 3.95-.62 5.54-1.67L9.26 9.63v6.5H7.87V7.86h1.74l9.03 11.63A9.97 9.97 0 0 0 22.01 12c0-5.52-4.48-10-10-10Zm4.25 12.13-1.38-1.78V7.86h1.38z"></path>
          </svg>
          <h3>Next.js</h3>
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
