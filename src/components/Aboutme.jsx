/* eslint-disable react/no-unescaped-entities */
// import React from 'react';
// import { Link } from "react-router-dom";
// import pdfImg from "../images/pdfImg.png";
import js from "../images/iconsTech/js.png";
import css3 from "../images/iconsTech/css3.png";
import github from "../images/iconsTech/github.png";
import html5 from "../images/iconsTech/html5.png";
import mysql from "../images/iconsTech/mysql.png";
import node from "../images/iconsTech/node.png";
import react from "../images/iconsTech/react.png";
import sass from "../images/iconsTech/sass.png";
import git from "../images/iconsTech/git.png";
import express from "../images/iconsTech/express.png";
import php from "../images/iconsTech/php2.png";
import laravel from "../images/iconsTech/laravel2.png";
import wp from "../images/iconsTech/wp2.png";

// import swagger from "../images/iconsTech/swagger.png";
// import vsc from "../images/iconsTech/vsc.png";
// import canva from "../images/iconsTech/canva.png";
// import ejs from "../images/iconsTech/ejs.png";
// import markdown from "../images/iconsTech/markdown.png";
// import npm from "../images/iconsTech/npm.png";
// import postman from "../images/iconsTech/postman.png";
// import prestashop from "../images/iconsTech/prestashop.png";
// import vite from "../images/iconsTech/vite.png";
// import slack from "../images/iconsTech/slack.png";
// import rapidapi from "../images/iconsTech/rapidapi3.png";



import cv from "../images/cv_Virginia AlvarezP_JuniorDeveloper.pdf";

function Aboutme() {
  const textStyle = {
    color: "white",
  };

  return (
    <>
      <section className="aboutmeBox">
        <div className="aboutme">
          <div style={textStyle}>
            <div className="mycv">
              <p>
                CV <i className="fa-solid fa-arrow-right"></i>
                <a
                  className="cv"
                  href="https://drive.google.com/file/d/1ZW9DyrGBbarPAVIimruHNroOMx0jZ1r3/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Virginia_AlvarezP_cv.pdf"
                >Read <i className="fa-solid fa-cloud-arrow-up" ></i>                  
                </a>
                <a className="cv" href={cv} title="cv Virginia AlvarezP" download="cv_Virginia AlvarezP_JuniorDeveloper.pdf">
                  or download
                </a>
                <i className="fas fa-solid fa-file-arrow-down"> </i>
              </p>
            </div>
            <div className="firstText">
              <p>
              I am Virginia, Junior Full Stack Developer, with experience in developing <strong>web applications</strong> and <strong>e-learning platforms</strong>. I have worked in <strong>backend</strong> development, <strong>frontend</strong> and <strong>database</strong> creation and maintenance.
              </p>
              <br></br>
              <p>
              I also have a degree in <strong>Biology</strong>. After several years working in this field both in <strong>London</strong> and Spain, I decided to make a change and train in  <strong>web programming</strong> because it is something I was really excited to learn,  
                combining my scientific and my programming skills. 
              </p><br />
                <p>Technologies:</p><br />
              
                <p><strong>Backend: </strong>Mainly with Laravel (PHP) and, in some projects, with Node.js and Express.js. I have designed relational databases with MySQL, developed admin panels for database management (CRUD), user roles, and multilingual content.</p><br />
                <p><strong>Frontend: </strong>I have worked with Blade views in Laravel, JavaScript, and React, depending on the project.</p><br />
                <p>Experience in deployments and implementing changes in production and pre-production environments using tools such as FileZilla, Render, and FreeDB for file transfer and management.</p>
              
              <br></br>
              <p>
                I believe in the <strong>power of constant evolution,</strong>{" "}
                and am committed to enhancing my skills to deliver high-quality
                results.
              </p>
              {/* <br></br>
              <p>
                <strong>Thank you for your continued support!</strong>
              </p> */}
            </div>

            {/* <div className="secondText">
              <p> </p>
            </div> */}

            <div className="thirdText">
              {/* Technologies */}
              {/* <p>
                JavaScript | React.js | Node.js | Express.js GitHub | Agile |
                Scrum HTML5 | CSS | SASS MySQL | MongoDB | FreeDB | Swagger{" "}
              </p> */}
              <p className="iconsTech">
                <img src={js} width="40px" alt="js" title="Javascript" />
                <img src={react} width="40px" alt="js" title="React" />
                <img src={php} width="40px" alt="js" title="React" />
                <img src={laravel} width="40px" alt="js" title="React" />

                <img src={html5} width="40px" alt="js" title="Html5" />
                <img src={sass} width="40px" alt="js" title="Sass" />
                <img src={css3} width="40px" alt="js" title="Css3" />
                <img src={github} width="40px" alt="js" title="Github" />
                {/* <img src={vite} width="40px" alt="js" title="Vite" /> */}
                {/* <img src={vsc} width="40px" alt="js" title="Vscode" /> */}

                <img
                  src={git}
                  width="40px"
                  alt="js"
                  title="Git Control Versiones"
                />
                {/* <img src={markdown} width="40px" alt="js" title="Markdown" /> */}
                {/* <img src={npm} width="40px" alt="js" title="Npm" /> */}

                <img src={node} width="40px" alt="js" title="NodeJs" />
                <img src={mysql} width="40px" alt="js" title="MySql" />
                {/* <img src={swagger} width="40px" alt="js" title="Swagger" /> */}
                {/* <img src={ejs} width="40px" alt="js" title="Ejs" /> */}
                {/* <img src={postman} width="40px" alt="js" title="Postman" /> */}
                {/* <img src={rapidapi} width="40px" alt="js" title="RapidApi" /> */}
                <img src={express} width="40px" alt="js" title="ExpressJs" />

                <img
                  src={wp}
                  width="40px"
                  alt="js"
                  title="Prestashop"
                />

                {/* <img src={slack} width="40px" alt="js" title="Slack" /> */}

                {/* <img src={canva} width="40px" alt="js" title="Canva" /> */}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// function Aboutme() {
//   return (
//     <div>Aboutme</div>
//   )
// }

export default Aboutme;
