import React, { Component } from "react";
import "./sass/main.scss";
import Header from "./containers/Header";

class App extends Component {
  state = {
    links: ["home", "about", "contact", "login", "signin"],
  };
  render() {
    return (
      <>
        <Header links={this.state.links} />
      </>
    );
  }
}

export default App;
