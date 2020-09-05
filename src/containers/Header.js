import React, { Component } from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";
import Tabbs from "../components/Tabs";
import { useFormik } from "formik";
import axios from "axios";
// import { Row, Container } from "react-bootstrap";
import { formSubmitHandler, formChangeHandler } from "../utility/Utility";
class Header extends Component {
  state = {
    links: ["home", "about", "contact", "login", "signin"],
    login: {
      email: {
        type: "email",
        value: "",
        attrs: {
          name: "email",
          id: "email",
          placeholder: "Your Email",
        },
      },
      password: {
        type: "password",
        value: "",
        attrs: {
          name: "password",
          id: "password",
          placeholder: "Remember that Password?",
        },
      },
    },
    signIn: {
      name: {
        type: "text",
        value: "",
        attrs: {
          name: "name",
          id: "name",
          placeholder: "Your Name",
        },
      },
      email: {
        type: "email",
        value: "",
        attrs: {
          name: "email",
          id: "email",
          placeholder: "Your Email",
        },
      },
      username: {
        type: "text",
        value: "",
        attrs: {
          name: "username",
          id: "username",
          placeholder: "Your Username",
        },
      },
      password: {
        type: "password",
        value: "",
        attrs: {
          name: "password",
          id: "password",
          placeholder: "Your Password",
        },
      },
      confirm: {
        type: "password",
        value: "",
        attrs: {
          name: "confirm",
          id: "confirm",
          placeholder: "Confirm Password",
        },
      },
    },
  };

  signInHandleChange = (e) => {
    const updateform = formChangeHandler(
      this.state.signIn,
      e.target.name,
      e.target.value
    );

    this.setState({ signIn: updateform });
  };

  loginHandleChange = (e) => {
    const updateform = formChangeHandler(
      this.state.login,
      e.target.name,
      e.target.value
    );

    this.setState({ login: updateform });
  };

  loginSubmitHandler = (e) => {
    e.preventDefault();
    const message = formSubmitHandler(this.state.login);
    console.log(message);
  };

  signInSubmitHandler = (e) => {
    e.preventDefault();
    const message = formSubmitHandler(this.state.signIn);
    axios
      .post(
        "https://cors-kila-mahali.herokuapp.com/https://prescribeme-stage.herokuapp.com/api/v1/user/signup",
        message
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <section id="home" className="header">
        <Nav links={this.state.links} />

        <div className="header__content">
          <div className="header__left">
            <Card />
          </div>
          <div className="header__right">
            <Tabbs
              login={this.state.login}
              signIn={this.state.signIn}
              loginSubmit={(e) => this.loginSubmitHandler(e)}
              signInSubmit={(e) => this.signInSubmitHandler(e)}
              signInchange={this.signInHandleChange}
              loginchange={this.loginHandleChange}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
