// import React from 'react'
import "../styles/App.scss";
import bosque1 from "../images/fotos proyectos/bosques.png";
import library1 from "../images/fotos proyectos/library1.png";
import owen1 from "../images/fotos proyectos/owen.png";
import hangman1 from "../images/fotos proyectos/hangman.png";
import buscadorSeries1 from "../images/fotos proyectos/series2.png";
import tiendas1 from "../images/fotos proyectos/tiendas-sostenibles2.png";
import tiendasMp4 from "../images/tiendas-sostenibles.mp4";
import VisitsCounter from "./VisitsCounter";

// import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <section className="projectsBox">
        <div>
          {/* <section className="introSection">
          <p>PROJECTS</p>          
        </section> */}

        

          {/* CORPORATE UI LIBRARY */}
          <section className="projectsSection">
          <div className="oneProject">
              <section className="projectImg">
                <a
                  href="https://mf-components.sigeca.net/"
                  target="blank"
                  alt="corporate library"
                >
                  <img src={library1} alt="corporate-ui-library" />
                </a>
              </section>
              <section className="projectText">
                <h4>CORPORATE UI LIBRARY</h4>
                <p>Libreria UI corporativa documentada con NgDoc</p>
                <p>ANGULAR- TypeScript - NgDoc - CSS - HTML</p>
                <p className="codeClass">
                  <a
                    className="codeLink"
                    href="https://github.com/virchaca/corporate-ui-library"
                    target="blank"
                    alt="bosquesentrepueblos"
                  >
                    <i className="icons fa-brands fa-github-alt"></i> Code
                  </a>
                </p>
              </section>
            </div>
             {/* BOSQUES ENTRE PUEBLOS */}
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
                  href={tiendasMp4}
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
          </section>
        </div>
      </section>

      <VisitsCounter />

    </>
  );
}

export default Projects;
