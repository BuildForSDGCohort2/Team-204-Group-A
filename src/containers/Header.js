import React from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";
import SignUpForm from "../components/Form";

export default function Header(props) {
  return (
    <section id="home" className="header">
      <div className="container">
        <Nav links={props.links} />

        <div className="header__content">
          <div className="header__left">
            <Card />
          </div>
          <div className="header__right">
            <SignUpForm title={"Sign Up"} />
          </div>
        </div>
      </div>
    </section>
  );
}
