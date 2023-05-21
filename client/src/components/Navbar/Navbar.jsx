import React, { useState } from "react";
import style from "./Navbar.module.css"
import { Link, useLocation } from "react-router-dom";
import dogLogo from "../../assets/DogLogo.png"

function Navbar() {

  const { pathname } = useLocation();

  const [toggleMenu, setToggleMenu] = useState(false)

  const handleToggle = () => {
    toggleMenu ? setToggleMenu(false) : setToggleMenu(true)
  }

  return (
    <nav className={style.navContainer}>

      <div className={style.navLogo}>
        <Link to="/home">
          <img src={dogLogo} alt="Logo" />
        </Link>
      </div>

        <p onClick={handleToggle} id={style.toggleP}>☰</p>
      <div className={(toggleMenu ? style.navToggleMenu : style.navLinkContainer)}>
        <Link to="/home" className={pathname === "/home" ? style.navActive : style.navLink}>
          Home
        </Link>

        <Link to="/create" className={pathname === "/create" ? style.navActive : style.navLink}>
          Create your breed
        </Link>

        <Link to="/about" className={pathname === "/about" ? style.navActive : style.navLink}>
          About
        </Link>

        <Link to="/exit" className={pathname === "/exit" ? style.navActive : style.navLink}>
          Exit
        </Link>
      </div>

    </nav>
  )
}

export default Navbar