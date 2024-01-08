/* eslint-disable react/no-unescaped-entities */
/* essectionnt-disable react/no-unescaped-entities */
import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Aboutme from "./Aboutme";
import "../styles/App.scss";
import Header from "./Header";

import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <>
      <header className="header">
        <Header />
      </header>

      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Landing />

                <Projects />
              </>
            }
          />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/contactme" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <footer className="footer">
        <p className="mybrand">
          <div className="icons">
            <a href="mailto:virginia.alvarez82@gmail.com? &body=Muy buenos días Vir,"
            >
              {/* <i className="icons fa-solid fa-at"></i> */}
              <i className="icons fa-solid fa-envelopes-bulk"></i>{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/virginia-alvarezperez/"
              target="blank"
            >
              <i className="icons fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/virchaca" target="blank">
              <i className="icons fa-brands fa-github-alt"></i>
            </a>{" "}
          </div>
          <div className="brand">@VirWebCreations</div>
        </p>
      </footer>
    </>
  );
}

export default App;
