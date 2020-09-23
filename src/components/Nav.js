import React from "react";
import Links from "./Links";
import Logo from "../assets/logo1.png";
import { Link } from "react-router-dom";

const Nav = (props) => {
  window.onscroll = () => scrollFxn();
  const scrollFxn = () => {
    const nav = document.querySelector(".nav");
    if (nav) {
      if (
        document.body.scrollTop > 1 ||
        document.documentElement.scrollTop > 1
      ) {
        nav.style.backgroundColor = "rgba(32, 38, 57, 1)";
        nav.style.boxShadow = "0 .1rem .2rem rgba(0,0,0, .23)";
      } else {
        nav.style.boxShadow = "none";
        nav.style.backgroundColor = "transparent";
      }
    }
  };

  return (
    <nav className="nav">
      <div className="nav__brand">
        <a className="nav__link" href="/">
          <img className="nav__logo" src={Logo} alt="Logo" />
        </a>
      </div>

      <div className="nav__hamburger"></div>

      <div className="nav__collapse">
        <ul className="nav__list">
          {props.links.map((link) => (
            <Links title={link} key={link} />
          ))}
          <Link to="/signin" className="form__btn">
            SignIn
          </Link>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
