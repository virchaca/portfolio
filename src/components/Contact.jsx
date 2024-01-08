// import React from 'react'

function Contact() {
  return (
    <>
    
      <div className="contact">
        <section className="contactLinks">
          <p className="contactDetails">
            {" "}
            <a href="mailto:virginia.alvarez82@gmail.com? &body=Muy buenos días Vir,">
              <i className="fa-solid fa-at"></i> MAIL{" "}
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
              <i className="fas fa-mobile-alt"></i> PHONE
            </a>
          </p>
        </section>
      </div>
    </>
  );
}

export default Contact;
