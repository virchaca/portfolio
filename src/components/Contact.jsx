// import React from 'react'
import pdfImg from "../images/pdfImg.png";
function Contact() {
  return (
    <>
    <section className="contactBox">
 <div className="contact">
        <section className="contactLinks">
          <p className="contactDetails">
            {" "}
            <a href="mailto:virginia.alvarez82@gmail.com? &body=Muy buenos días Vir,">virginia.alvarez82@gmail.com
              {/* <i className="fa-solid fa-at"></i>  */}
              {" "}
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
          <p className="contactDetails">CV
              <a href="https://drive.google.com/file/d/12rWc0XYr2uju0RFXxrDek3ooU6a3uTJt/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> <img src={pdfImg} width="20px" alt="cv" /></a>
            </p>
        </section>
        <section className="formSection">
     
        <form action="https://formspree.io/f/mleqdvqz" method="POST" className="form" > 
        {/* <form action="https://formsubmit.co/virginia.alvarez82@gmail.com" method="POST" className="form" >  */}
        
          {/* <label htmlFor="name" >Nombre</label> */}
          <input className="input" type="text" name="name" placeholder="Nombre"/>

          {/* <label htmlFor="email">Correo electrónico</label> */}
          <input className="input"  type="email" name="email" placeholder="Email"/>

          {/* <label htmlFor="message">Mensaje</label> */}
          <textarea className="textarea" name="message" id="" cols="15" rows="5" placeholder="Escribe aquí tu mensaje"></textarea>

          <input className="btnSubmit" type="submit" value={"enviar"} />

          {/* <input type="hidden" name="_next" value="http://localhost:5173/portfolio/#/contactme" /> */}
          {/* <input type="hidden" name="_captcha" value="false" /> */}
        </form>
      </section>
      </div>

    </section>
     
    </>
  );
}

export default Contact;
