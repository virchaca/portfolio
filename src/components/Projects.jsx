// import React from 'react'
import "../styles/App.scss";
import bosque1 from "../images/fotos proyectos/bosques.png";
// import rocket1 from "../images/fotos proyectos/rocket1.png";
import vans1 from "../images/fotos proyectos/vans4.png";
import owen1 from "../images/fotos proyectos/owen.png";
import addams1 from "../images/fotos proyectos/addams.png";
// import piedra1 from "../images/fotos proyectos/piedra.png";
import hangman1 from "../images/fotos proyectos/hangman.png";
import buscadorSeries1 from "../images/fotos proyectos/series2.png";
import tiendas1 from "../images/fotos proyectos/tiendas-sostenibles2.png";

// import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <section className="projectsBox">
        <div>
          {/* <section className="introSection">
          <p>PROJECTS</p>          
        </section> */}

          {/* BOSQUES ENTRE PUEBLOS */}
          <section className="projectsSection">
            <div className="oneProject">
              <section className="projectImg">
                <a
                  href="https://virchaca.github.io/bosques-entre-pueblos/"
                  target="blank"
                  alt="bosquesentrepueblos"
                >
                  <img src={bosque1} alt="bosques-entre-pueblos" />
                </a>
              </section>
              <section className="projectText">
                <h4>BOSQUES ENTRE PUEBLOS</h4>
                <p>Botanical inventory in process</p>
                <p>REACT- JavaScript - SCSS - HTML</p>
                <p className="codeClass">
                  <a
                    className="codeLink"
                    href="https://github.com/virchaca/bosques-entre-pueblos"
                    target="blank"
                    alt="bosquesentrepueblos"
                  >
                    <i className="icons fa-brands fa-github-alt"></i> Code
                  </a>
                </p>
              </section>
            </div>

            {/* TIENDAS SOSTENIBLES */}
            <div className="oneProject">
              <section className="projectImg">
                <a
                  href="https://github.com/virchaca/tiendas-sostenibles"
                  target="blank"
                >
                  <img src={tiendas1} alt="tiendas-sostenibles" />
                </a>
              </section>
              <section className="projectText">
                <h4>TIENDAS SOSTENIBLES</h4>
                <p>Explore the map or search for the</p>
                <p>perfect shop, in just one click!</p>
                <p> PHP - MySQL DB - JS - CSS</p>
                <p className="codeClass">
                  <a
                    className="codeLink"
                    href="https://github.com/virchaca/tiendas-sostenibles"
                    target="blank"
                    alt="tiendassostenibles"
                  >
                    <i className="icons fa-brands fa-github-alt"></i> Code
                  </a>
                </p>
              </section>
            </div>

            {/* ROCKET PROYECT */}
            {/* <div className="oneProject">
          <section className="projectImg">
           
            <a 
              href="https://rocket-project.onrender.com/"
              target="blank">
              <img src={rocket1} alt="" />
            </a>
          </section>
          <section className="projectText">
           <h4>ROCKET PROJECT</h4>
              <p >
              Make your own project cards
              </p>
              <p>EXPRESS - MySQL - FreeDB - REACT - EJS</p>
              <p className="codeClass"><a className="codeLink" href="https://github.com/virchaca/project-promo-u-module-4-team-5" target="blank" alt="rocketproject"><i className="icons fa-brands fa-github-alt"></i>  Code</a></p>
            </section>
          </div> */}

            {/* OWEN WILSON */}
            <div className="oneProject">
              <section className="projectImg">
                <a
                  href="https://virchaca.github.io/OwenWilsons-WoWs-MIII-virchaca/"
                  target="blank"
                >
                  <img src={owen1} alt="" />
                </a>
              </section>
              <section className="projectText">
                <h4>OWEN WILSON SCENES</h4>
                <p>Filter and show details of scenes</p>
                <p>REACT - SCSS - JavaScript</p>
                <p className="codeClass">
                  <a
                    className="codeLink"
                    href="https://github.com/virchaca/OwenWilsons-WoWs-MIII-virchaca"
                    target="blank"
                    alt="owenwilson"
                  >
                    <i className="icons fa-brands fa-github-alt"></i> Code
                  </a>
                </p>
              </section>
            </div>

            {/* HANGMAN GAME */}
            <div className="oneProject">
              <section className="projectImg">
                <a
                  href="https://virchaca.github.io/hangman-game-project/"
                  target="blank"
                >
                  <img src={hangman1} alt="" />
                </a>
              </section>
              <section className="projectText">
                <h4>HANGMAN GAME</h4>
                <p>Find the mistery word!</p>
                <p>React - JavaScript - SCSS - HTML</p>
                <p className="codeClass">
                  <a
                    className="codeLink"
                    href="https://github.com/virchaca/hangman-game-project"
                    target="blank"
                    alt="hangmangame"
                  >
                    <i className="icons fa-brands fa-github-alt"></i> Code
                  </a>
                </p>
              </section>
            </div>
            {/* BUSCADOR SERIES */}
            <div className="oneProject">
              <section className="projectImg">
                <a
                  href="https://virchaca.github.io/buscador-de-series-MII/"
                  target="blank"
                >
                  <img src={buscadorSeries1} alt="" />
                </a>
              </section>
              <section className="projectText">
                <h4>BUSCADOR DE SERIES</h4>
                <p>Search & save TVshows or</p>
                <p>play SCISSORS GAME if u like</p>
                <p>JavaScript - CSS - HTML</p>
                <p className="codeClass">
                  <a
                    className="codeLink"
                    href="https://github.com/virchaca/buscador-de-series-MII"
                    target="blank"
                    alt="buscadorseries"
                  >
                    <i className="icons fa-brands fa-github-alt"></i> Code
                  </a>
                </p>
              </section>
            </div>

            {/* ADDAMS CARDS */}
            <div className="oneProject">
              <section className="projectImg">
                <a
                  href="https://virchaca.github.io/Addams-Family-profile-cards-MII-/"
                  target="blank"
                >
                  <img src={addams1} alt="" />
                </a>
              </section>
              <section className="projectText">
                <h4>ADDAMS PROFILE CARDS</h4>
                <p>Make your own profile card</p>
                <p>JS - HTML - SCSS - LocalStorage</p>
                <p className="codeClass">
                  <a
                    className="codeLink"
                    href="https://github.com/virchaca/Addams-Family-profile-cards-MII-"
                    target="blank"
                    alt="addamsfamily"
                  >
                    <i className="icons fa-brands fa-github-alt"></i> Code
                  </a>
                </p>
              </section>
            </div>

            {/* API VANS */}
            <div className="oneProject">
              <section className="projectImg">
                <a
                  href="https://github.com/virchaca/modulo-4-evaluacion-final"
                  target="blank"
                >
                  <img src={vans1} alt="" />
                </a>
              </section>
              <section className="projectText">
                <h4>MEET UP VANS - API</h4>
                <p>Creation of server & vans/users DB</p>
                <p> Node JS - Express JS - Swagger </p>
                <p>Mysql - authentication - JWT - BCRYPT</p>
                <p className="codeClass">
                  <a
                    className="codeLink"
                    href="https://github.com/virchaca/modulo-4-evaluacion-final"
                    target="blank"
                    alt="apivans"
                  >
                    <i className="icons fa-brands fa-github-alt"></i> Code
                  </a>
                </p>
              </section>
            </div>

            {/* <div className="oneProject">
          <section className="projectImg">
           
            <a 
              href=""
              target="blank">
              <img src="" alt="" />
            </a>
          </section>
          <section className="projectText">
           <h4>......</h4>
              <p >pequeña explicacion proyecto</p>
              <p>tecnologias</p>
              <p><a className="codeLink" href="" target="blank" alt=""><i className="icons fa-brands fa-github-alt"></i>  Code</a></p>
            </section>
          </div> */}
          </section>
        </div>
      </section>
    </>
  );
}

export default Projects;
