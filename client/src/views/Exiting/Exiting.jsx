import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from "./Exiting.module.css"
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"
import instagram from "../../assets/instagram.png"

function Exiting () {

  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate('/')
    }, 10000);

    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <div className={style.exitingContainer}>
      <div className={style.exitingBack}>
        <h3>Thank you for visiting WOOFING!</h3>
        <h3>This proyect was made as an individual proyect for Soy Henry Bootcamp</h3>
          <h3>For more information please visit</h3>
        <p className={style.exitingContact}>
          <a href="http://github.com/sebatora" target="_blank"> <img src={github} alt="Github"/> </a>
          <a href="http://www.linkedin.com/in/sebatora/" target="_blank"> <img src={linkedin} alt="LinkedIn"/> </a>
          <a href="http://www.instagram.com/sebatora/" target="_blank"> <img src={instagram} alt="Instagram"/> </a>
        </p>
      </div>
    </div>
  )
}

export default Exiting;