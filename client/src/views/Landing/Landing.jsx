import React from 'react'
import style from "./Landing.module.css"
import { Link } from "react-router-dom";
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"
import instagram from "../../assets/instagram.png"

function Landing() {
  return (
    <div className={style.landingContainer}>
      <div className={style.landingBack}>
        <h1>WOOFING!</h1>
        <h3>The dog breeds app</h3>
        <Link to="/home" className={style.landingLink}>
          <button className={style.landingBtn}>Home</button>
        </Link>
        <p className={style.landingContact}>
          <a href="http://github.com/sebatora" target="_blank"> <img src={github} alt="Github"/> </a>
          <a href="http://www.linkedin.com/in/sebatora/" target="_blank"> <img src={linkedin} alt="LinkedIn"/> </a>
          <a href="http://www.instagram.com/sebatora/" target="_blank"> <img src={instagram} alt="Instagram"/> </a>
        </p>
      </div>
    </div>
  )
}

export default Landing