import React from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";
import Tabbs from "../components/Tabs";
import { useFormik } from "formik";

const Header = (props) => {
  const signIn = useFormik({
    initialValues: { email: "", password: "" },
  });

  return (
    <section id="home" className="header">
      <div className="container">
        <Nav links={props.links} />

        <div className="header__content">
          <div className="header__left">
            <Card />
          </div>
          <div className="header__right">
            <Tabbs login={props.login} submit={signIn} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
