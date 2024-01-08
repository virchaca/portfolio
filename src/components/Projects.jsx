// import React from 'react'
import "../styles/App.scss";
import bosque1 from "../images/fotos proyectos/bosques.png";
import rocket1 from "../images/fotos proyectos/rocket1.png";
import owen1 from "../images/fotos proyectos/owen.png";
import addams1 from "../images/fotos proyectos/addams.png";
import piedra1 from "../images/fotos proyectos/piedra.png";
import hangman1 from "../images/fotos proyectos/hangman.png";
import buscadorSeries1 from "../images/fotos proyectos/buscadorSeries.png";
// import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
       <section className="projectsBox">
    <div>
        
        <section className="introSection">
          <p>PROJECTS</p>          
        </section>
        

        <section className="projectsSection">
          <div className="oneProject">
            <section className="projectImg">
              
              <a
                href="https://virchaca.github.io/bosques-entre-pueblos/"
                target="blank"
              >
                <img src={bosque1} alt="bosques-entre-pueblos" />
              </a>
            </section>
            <section className="projectText">
            <h4>BOSQUES ENTRE PUEBLOS</h4>
              <p>Botanical inventory in process</p>
              <p>REACT- JavaScript - SCSS - HTML</p>
            </section>
          </div>

             <div className="oneProject">
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
            </section>
          </div>


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
              <p >Filter and show details of scenes</p>
              <p>REACT - SCSS - JavaScript</p>
            </section>            
          </div>

          <div className="oneProject">          
          <section className="projectImg">
          
            <a
              href="https://virchaca.github.io/piedra-papel-o-tijera---virchaca/"
              target="blank"
            >
              <img src={piedra1} alt="" />
            </a>
            </section>
            <section className="projectText">
            <h4>PIEDRA PAPEL TIJERA</h4>
              <p >Play against computer!</p>
              <p>JAVASCRIPT - HTML - CSS</p>
            </section>
          </div>

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
              <p >
                Make your own profile card</p>
                <p>JS - HTML - SCSS - LocalStorage</p>
            </section>
          </div>

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
              <p>
                Find the mistery word!
              </p>
              <p>React - JavaScript - SCSS - HTML</p>
            </section>
          </div>

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
              <p >
                Find shows and  add them to your favs
              </p>
              <p>JavaScript - SCSS - HTML</p>
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
              <p >
                una pequeña expsectioncacion sobre cada proyecto, un poco de que va y un poco que tecnologias hemos seguido
              </p>
            </section>
          </div> */}
        </section></div>
        </section>
        </>
  )
}

export default Projects