// import React from 'react'
import pdfImg from "../images/pdfImg.png";
function Contact() {
  return (
    <>
    
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
            <a href="tel:+34680749185">
              <i className="fas fa-mobile-alt"></i> +34680749185
            </a>
          </p>
          <p className="contactDetails">CV
              <a href="https://drive.google.com/file/d/12rWc0XYr2uju0RFXxrDek3ooU6a3uTJt/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> <img src={pdfImg} width="20px" alt="cv" /></a>
            </p>
        </section>
      </div>
    </>
  );
}

export default Contact;
