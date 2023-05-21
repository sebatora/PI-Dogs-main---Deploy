import style from "./About.module.css"
import about from "../../assets/about.jpg"
import html5 from "../../assets/html5.jpg"
import css3 from "../../assets/css3.jpg"
import javascript from "../../assets/javascript.jpg"
import react from "../../assets/react.jpg"
import redux from "../../assets/redux.jpg"
import nodejs from "../../assets/nodejs.jpg"
import expressjs from "../../assets/expressjs.jpg"
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"
import instagram from "../../assets/instagram.png"


function About() {
  return (
    <div className={style.aboutContainer}>

      <div className={style.aboutImg}>
        <img src={about} alt='Mi foto' />
      </div>

      <div className={style.aboutInfo}>
        <p>
          Hi! My name is Sebastian Ariel Toranzo and I'm studying to be a FullStack Developer at SoyHenry.
        </p>
        <p>
          I was born on January 11, 1990 in Buenos Aires, Argentina. I'm passionate about technology and music and I'm always open to face challenges, visualizing my goals and striving to achieve my purposes.
        </p>
        <p>
          DEVELOPED WITH
        </p>
        <p className={style.aboutTech}>
          <img src={html5} alt="HTML5"/>
          <img src={css3} alt="CSS3"/>
          <img src={javascript} alt="JavaScript"/>
          <img src={react} alt="React"/>
          <img src={redux} alt="Redux"/>
          <img src={nodejs} alt="NodeJS"/>
          <img src={expressjs} alt="ExpressJS"/>
        </p>
        <p>Contact Me</p>
        <p className={style.aboutContact}>
          <a href="http://github.com/sebatora" target="_blank"> <img src={github} alt="Github"/> </a>
          <a href="http://www.linkedin.com/in/sebatora/" target="_blank"> <img src={linkedin} alt="LinkedIn"/> </a>
          <a href="http://www.instagram.com/sebatora/" target="_blank"> <img src={instagram} alt="Instagram"/> </a>
        </p>
      </div>

    </div>
  );
}

export default About;
