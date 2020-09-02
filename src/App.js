import React, { Component } from "react";
import "./sass/main.scss";
import Header from "./containers/Header";

class App extends Component {
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
  };
  render() {
    return (
      <>
        <Header links={this.state.links} login={this.state.login} />
      </>
    );
  }
}

export default App;
