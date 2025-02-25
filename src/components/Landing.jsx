// import React from 'react'
import roundProfile from "../images/profileBN1.png";
function Landing() {
  return (
    <>
      <section className="landing">
        <div className="profileSection">
          <span className="profileText">
            <p> HI WORLD!😎 </p>
            <p> 👣 👣 </p>
            <p>I am Virginia </p>
            <p className="junior"> 〈 Junior Full Stack Developer / 〉 </p>
            {/* <p>～ Welcome to my portfolio!! ～</p> */}
          </span>

          <span>
            <img
              className="imgProfile"
              src={roundProfile}
              alt="profilePicture"
            />
          </span>
        </div>
        <div className="landingSection">
          <p><strong>Web programmer</strong> 🖥, biologist 🍃 and quality auditor I am looking to
          develop my programming skills through a job where I can find a place
          🗺️ to grow and fly 🚀 in the world of technology. </p>
          <br />
          <p>My professional experience in Spain and England has allowed me to 
          develop key skills such as <strong>error detection</strong>  and <strong>effective
          management of multiple tasks</strong>. </p>
         <br />
          <p>See all my proyects below and my contact details for more information.</p>
        </div>       
      </section>
    </>
  );
}

export default Landing;
