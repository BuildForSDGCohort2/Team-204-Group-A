import React from "react";
import Links from "./Links";
import Logo from "../assets/logo1.png";

const Nav = (props) => {
  window.onscroll = () => scrollFxn();
  const scrollFxn = () => {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      document.querySelector("nav").style.backgroundColor = "#fff";
      document.querySelector("nav").style.boxShadow =
        "0 .1rem .2rem rgba(0,0,0, .23)";
    } else {
      document.querySelector("nav").style.boxShadow = "none";
      document.querySelector("nav").style.backgroundColor = "transparent";
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
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
