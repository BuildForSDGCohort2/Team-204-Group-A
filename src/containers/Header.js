import React, { Component } from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";
import Tabbs from "../components/Tabs";
import { useFormik } from "formik";
import axios from "axios";
// import { Row, Container } from "react-bootstrap";

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

  handleChange = (e) => {
    const updateform = { ...this.state.signIn };
    updateform[e.target.name] = {
      ...this.state.signIn[e.target.name],
      value: e.target.value,
    };
    this.setState({ signIn: updateform });
  };

  loginSubmitHandler = (e) => {
    e.preventDefault();
  };

  signInSubmitHandler = (e) => {
    e.preventDefault();
    let message = {};
    Object.values(this.state.signIn).map(
      (val) => (message[val.attrs.name] = val.value)
    );
    console.log(message);
    axios
      .post("https://prescribe/api/v1/user/signup", message)
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
              change={this.handleChange}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
