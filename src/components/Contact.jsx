// import React from 'react'
// import pdfImg from "../images/pdfImg2.png";

import cv from "../images/cv_Virginia AlvarezP_JuniorDeveloper.pdf";
// import tiendasMp4 from "../images/tiendas-sostenibles.mp4";
function Contact() {
  return (
    <>
      <section className="contactBox">
        <div className="contact">
          <section className="contactLinks">
            <p className="contactDetails">
              {" "}
              <a href="mailto:virginia.alvarez82@gmail.com? &body= Buenas  Virginia,">
                virginia.alvarez82@gmail.com
                {/* <i className="fa-solid fa-at"></i>  */}{" "}
              </a>
            </p>
            <p className="contactDetails">
              <a
                href="https://www.linkedin.com/in/virginia-alvarezperez/"
                target="blank"
              >
                <i className="icons fa-brands fa-linkedin"></i> LINKEDIN
              </a>
            </p>

            <p className="contactDetails">
              <a href="https://github.com/virchaca" target="blank">
                <i className="icons fa-brands fa-github-alt"></i> GITHUB
              </a>{" "}
            </p>
            <p className="contactDetails">
              <a href="tel:+34680749185" title="+34680749185">
                <i className="fas fa-mobile-alt"></i> PHONE NUMBER
              </a>
            </p>
            <p className="contactDetails">
              CV
              <a
                className="cv"
                href="https://drive.google.com/file/d/1ZW9DyrGBbarPAVIimruHNroOMx0jZ1r3/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                download="Virginia_AlvarezP_cv.pdf"
              >
                {" "}
                <i className="fa-solid fa-cloud-arrow-up"></i>
              </a>
              <i className="fa-solid fa-arrow-right arrow"></i>
              <a
                href={cv}
                title="cv Virginia AlvarezP"
                download="cv_Virginia AlvarezP_JuniorDeveloper.pdf"
              >
                or <i className="fa-solid fa-file-arrow-down"></i>
              </a>
            </p>

            <p className="contactDetails"></p>
          </section>
          <section className="formSection">
            {/*      
        <form action="https://formspree.io/f/mleqdvqz" method="POST" className="form" >  */}

            <form
              action="https://formsubmit.co/virginia.alvarez82@gmail.com"
              method="POST"
              className="form"
            >
              {/* <label htmlFor="name" >Nombre</label> */}
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Name"
              />

              {/* <label htmlFor="email">Correo electrónico</label> */}
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
              />

              {/* <label htmlFor="message">Mensaje</label> */}
              <textarea
                className="textarea"
                name="message"
                id=""
                cols="15"
                rows="5"
                placeholder="Write your message here"
              ></textarea>

              <input className="btnSubmit" type="submit" value={"send"} />

              <input
                type="hidden"
                name="_next"
                value="https://virchaca.github.io/portfolio/#/contactme"
              />
              <input type="hidden" name="_captcha" value="false" />
            </form>
          </section>
        </div>
      </section>
      {/* <section>
        <iframe
          src={tiendasMp4}
          width="640"
          height="360"
          allow="autoplay"
        ></iframe>
      </section> */}
    </>
  );
}

export default Contact;
