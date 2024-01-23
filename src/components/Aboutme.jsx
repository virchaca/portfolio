/* eslint-disable react/no-unescaped-entities */
// import React from 'react';
// import { Link } from "react-router-dom";
import pdfImg from "../images/pdfImg.png";
import js from "../images/iconsTech/js.png";
import css3 from "../images/iconsTech/css3.png";
import github from "../images/iconsTech/github.png";
import html5 from "../images/iconsTech/html5.png";
import mysql from "../images/iconsTech/mysql.png";
import node from "../images/iconsTech/node.png";
import react from "../images/iconsTech/react.png";
import sass from "../images/iconsTech/sass.png";
import swagger from "../images/iconsTech/swagger.png";
import mongo from "../images/iconsTech/mongo.png";
import vsc from "../images/iconsTech/vsc.png";

import canva from "../images/iconsTech/canva.png";
import ejs from "../images/iconsTech/ejs.png";
import git from "../images/iconsTech/git.png";
import markdown from "../images/iconsTech/markdown.png";
import npm from "../images/iconsTech/npm.png";
import postman from "../images/iconsTech/postman.png";
import prestashop from "../images/iconsTech/prestashop.png";
import vite from "../images/iconsTech/vite.png";
import slack from "../images/iconsTech/slack.png";
import rapidapi from "../images/iconsTech/rapidapi3.png";
import express from "../images/iconsTech/express.png";

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
                My CV
                <a
                  className="cv"
                  href="https://drive.google.com/file/d/1epNTCUDMVFhkov_uaZUdiuFe59Hm9Mh1/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Virginia_AlvarezP_cv.pdf"
                >
                  {" "}
                  <img src={pdfImg} width="20px" alt="cv" />
                </a>
              </p>
            </div>
            <div className="firstText">
              <p>
                I am Virginia and I will share with you my{" "}
                <strong>ongoing projects</strong> in this space, which reflect
                my dedication to{" "}
                <strong>continuous learning, growth, and development</strong> as
                a programmer.
              </p>
              <br></br>
              <p>
                After years in the Science and Quality Control sector, I've
                chosen to start my path in the world of technology, <strong>combining</strong> my scientific and my programming skills. Now,
                looking for{" "}
                <strong>
                  MY PLACE IN THE WORLD OF WEB PROGRAMMING {" "}
                </strong>{" "}
                . Web development has become {" "}
                <strong> my new passion</strong>, this fusion of{" "}
                <strong>creativity and code logic </strong> 
                fascinates me.
              </p>
              <br></br>
              <p>
                I believe in the <strong>power of constant evolution,</strong>{" "}
                and am committed to enhancing my skills to deliver high-quality
                results.
              </p>
              <br></br>
              <p>
                <strong>Thank you for your continued support!</strong>
              </p>
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
                
                <img src={html5} width="40px" alt="js" title="Html5" />
                <img src={sass} width="40px" alt="js" title="Sass" />
                <img src={css3} width="40px" alt="js" title="Css3" />
                <img src={github} width="40px" alt="js" title="Github" />
                <img src={vite} width="40px" alt="js" title="Vite" />
                <img src={vsc} width="40px" alt="js" title="Vscode" />          
                
                <img src={git} width="40px" alt="js" title="Git Control Versiones"/>
                <img src={markdown} width="40px" alt="js" title="Markdown" />
                <img src={npm} width="40px" alt="js" title="Npm" />
                
                <img src={node} width="40px" alt="js" title="NodeJs" />
                <img src={mysql} width="40px" alt="js" title="MySql" />
                <img src={swagger} width="40px" alt="js" title="Swagger" />
                <img src={mongo} width="40px" alt="js" title="Mongo" />
                <img src={ejs} width="40px" alt="js" title="Ejs" />
                <img src={postman} width="40px" alt="js" title="Postman" />
                <img src={rapidapi} width="40px" alt="js" title="RapidApi" />
                <img src={express} width="40px" alt="js" title="ExpressJs" />   

                <img src={prestashop} width="40px" alt="js" title="Prestashop" />
                
                <img src={slack} width="40px" alt="js" title="Slack" />
             
                <img src={canva} width="40px" alt="js" title="Canva" />
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
