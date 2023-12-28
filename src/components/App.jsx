/* eslint-disable react/no-unescaped-entities */
/* essectionnt-disable react/no-unescaped-entities */
// import viteLogo from '/vite.svg'
import "../styles/App.scss";
import bosque1 from "../images/fotos proyectos/bosques.png";
import rocket1 from "../images/fotos proyectos/rocket1.png";
import owen1 from "../images/fotos proyectos/owen.png";
import addams1 from "../images/fotos proyectos/addams.png";
import piedra1 from "../images/fotos proyectos/piedra.png";
import hangman1 from "../images/fotos proyectos/hangman.png";
import buscadorSeries1 from "../images/fotos proyectos/buscadorSeries.png";

function App() {
  return (
    <>
      <header className="header">
        <div className="">
          <p className="mybrand">
            <a
              href="https://www.linkedin.com/in/virginia-alvarezperez/"
              target="blank"
            >
              <i className="icons fa-brands fa-linkedin"></i>
            </a>..
            <a href="https://github.com/virchaca" target="blank">
              <i className="icons fa-brands fa-github-alt"></i>
            </a>{" "}
            @VirWebCreations
          </p>
          <h1 className="myName">
            Virginia's Portfolio{" "}
            <i className="fa-solid fa-earth-americas"></i>
          </h1>
        </div>
      </header>

      <main className="main">
      
        <section className="introSection">
          <p>una pequeña introduccion a mi y a mi portfolio</p>
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
              <p >
                una pequeña explicacion sobre cada proyecto, un poco de que va y un poco que tecnologias hemos seguido
              </p>
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
                una pequeña expsectioncacion sobre cada proyecto, un poco de que va y un poco que tecnologias hemos seguido
              </p>
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
              <p >
                una pequeña expsectioncacion sobre cada proyecto, un poco de que va y un poco que tecnologias hemos seguido
              </p>
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
              <p >
                una pequeña expsectioncacion sobre cada proyecto, un poco de que va y un poco que tecnologias hemos seguido
              </p>
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
                una pequeña expsectioncacion sobre cada proyecto, un poco de que va y un poco que tecnologias hemos seguido
              </p>
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
                Una pequeña expsectioncacion sobre cada proyecto, un poco de que va y un poco que tecnologias hemos seguido
              </p>
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
                Una pequeña expsectioncacion sobre cada proyecto, un poco de que va y un poco que tecnologias hemos seguido
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
              <p >
                una pequeña expsectioncacion sobre cada proyecto, un poco de que va y un poco que tecnologias hemos seguido
              </p>
            </section>
          </div> */}
        </section>

        <section>
          <p>algo mas, cosas interesantes, blablabla..... clores que resaltan, algun GIF, cosillas...</p>

        </section>


      </main>
      <footer className="footer">
        <p className="mybrand">
          <a
            href="https://www.linkedin.com/in/virginia-alvarezperez/"
            target="blank"
          >
            <i className="icons fa-brands fa-linkedin"></i>
          </a>_
          <a href="https://github.com/virchaca" target="blank">
            <i className="icons fa-brands fa-github-alt"></i>
          </a>{" "}
          @VirWebCreations
        </p>
      </footer>
    </>
  );
}

export default App;
