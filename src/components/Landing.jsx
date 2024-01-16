// import React from 'react'
import roundProfile from "../images/roundProfile.png"
function Landing() {
  return (
    <> 
    <section className="landing">
    <div className="profileSection">
        <span className="profileText">
        <p> HI WORLD!😎 </p>
        <p> 👣 👣 </p>
        <p>I am Virginia </p> 
        <p className="junior">  〈 Junior Front-end Developer / 〉 </p>
        {/* <p>～ Welcome to my portfolio!! ～</p> */}
        </span>
        <span><img src={roundProfile} alt="profilePicture" /></span>
        
        
    </div>
       <div className="landingSection">
       From Biologist 🍃 to Junior Full Stack developer!!! I am looking to develop my new programming skills through a job where I can find a place 🗺️ to grow and fly 🚀 in the world of technology.

       Starting with React and JavaScript, I decided to change my path and embark on web development, navigating the backend 🪼 and creating life with Express & MySQL.

       See all my proyects below and my contact details for more information.

       </div>
       </section>
    </>
  )
}

export default Landing