import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";
import Header from "./containers/Header";
import About from "./containers/About";
import Footer from "./containers/Footer";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <About heading={"About Us"} />
        <Footer />
      </>
    );
  }
}

export default App;
