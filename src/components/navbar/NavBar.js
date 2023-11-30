import React, { useState } from "react";
import "./navbar.css"

export function Navbar () {

  const [Toggle, showMessage] = useState(false);
return(
      <div>
      <header className="header">
      <nav className="nav-container">
      <a href="index.html " className="nav__logo"> Lucas Sosa.</a>


      <div className={Toggle ? "nav__menu show-menu " : "nav__menu"}>
      <ul className="nav__list  grid ">
        <li className="nav__item">
          <a href= "#home" className="nav__link active-link">
            <i className="uil uil-estate nav__icon"> Home</i>
          </a>
        </li>

        <li className="nav__item">
          <a href= "#about" className="nav__link">
            <i className="uil uil-user nav__icon"> About</i>
          </a>
        </li>

        <li className="nav__item">
          <a href= "#skills" className="nav__link">
            <i className="uil uil-file-alt nav__icon"> Skills</i>
          </a>
        </li>

        <li className="nav__item">
          <a href= "#contact" className="nav__link">
            <i className="uil uil-message nav__icon"> Contact</i>
          </a>
        </li>
      </ul>

      <i className="uil uil-times nav__close"  onClick={()=> showMessage(!Toggle)}></i>
      </div>
      <div className="nav__toggle" onClick={()=> showMessage(!Toggle)}>
          <i className="uil uil-apps"></i>
      </div>
      </nav>
      </header>
    </div>
)
}