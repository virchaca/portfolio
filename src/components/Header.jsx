/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <div className="">
        {/* <p className="mybrand">
          <a
            href="https://www.linkedin.com/in/virginia-alvarezperez/"
            target="blank"
          >
            <i className="icons fa-brands fa-linkedin"></i>
          </a>
          ..
          <a href="https://github.com/virchaca" target="blank">
            <i className="icons fa-brands fa-github-alt"></i>
          </a>{" "}
          @VirWebCreations
        </p> */}
        <h1 className="myName">
          Virginia's Web <i className="fa-solid fa-earth-americas"></i>
        </h1>
      </div>
      {/* <Link to="/" className="backToMain">
        <i className="fa-solid fa-left-long"></i> pagina principal
      </Link> */}
      <div className="sectionsMenu">
        <span className="">
          {" "}
          <Link to="/" className="no-underline">
            HI THERE |
          </Link>
          <Link to="/aboutme" className="no-underline">
            | ABOUT ME |
          </Link>
        </span>
        <span className="">
          {" "}
          <Link to="/projects" className="no-underline">
            | MY PROJECTS |
          </Link>
          <Link to="/contactme" className="no-underline">
            | CONTACT ME
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Header;
