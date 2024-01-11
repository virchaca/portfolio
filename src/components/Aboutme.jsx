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
                  href="https://drive.google.com/file/d/12rWc0XYr2uju0RFXxrDek3ooU6a3uTJt/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <img src={pdfImg} width="20px" alt="cv" />
                </a>
              </p>
            </div>
            <div className="firstText">
              <p>
                HI THERE! I am Virginia and I wanted to take the chance to share
                with you my ongoing projects. These endeavors reflect my
                dedication to continuous learning, growth, and development as a
                programmer.
              </p>

              <p>
                I believe in the power of constant evolution, and I am committed
                to enhancing my skills to deliver high-quality results. Stay
                tuned for exciting updates on these projects, and don't forget
                to check out my website for future ventures. Thank you for your
                continued support!
              </p>
            </div>

            <div className="secondText">
              <p>
                Graduated in Biology, I have gone through many work and personal
                challenges in my life, going to London without knowing English
                and managing to make my way in the pharmaceutical world,
                returning to Spain and becoming a quality control consultant, a
                completely new field for me, so I am Excited about this new
                challenge,{" "}
                <strong>FINDING A NICHE IN THE WORLD OF WEB PROGRAMMING</strong>
                . Once my passion for web programming was born, I decided to
                change my course starting with JavaScript and React, navigating
                to the back and creating life with Express and MySQL. This
                fusion of creativity and logic fascinates me.
              </p>
            </div>
            <div className="thirdText">
              Technologies:
              <p>
                JavaScript | React.js | Node.js | Express.js GitHub | Agile |
                Scrum HTML5 | CSS | SASS MySQL | MongoDB | FreeDB | Swagger{" "}
              </p>
              <p className="iconsTech">
                <img src={js} width="40px" alt="js" />
                <img src={react} width="40px" alt="js" />
                <img src={github} width="40px" alt="js" />
                <img src={html5} width="40px" alt="js" />
                <img src={sass} width="40px" alt="js" />
                <img src={node} width="40px" alt="js" />
                <img src={css3} width="40px" alt="js" />
                <img src={mysql} width="40px" alt="js" />
                <img src={swagger} width="40px" alt="js" />
                <img src={mongo} width="40px" alt="js" />
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
