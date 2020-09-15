import React, { Component } from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";
import Tabbs from "../components/Tabs";
// import { useFormik } from "formik";
// import { Row, Container } from "react-bootstrap";
import { formSubmitHandler, formChangeHandler } from "../utility/Utility";
import * as actions from "../store/actions/export";
import { connect } from "react-redux";

class Header extends Component {
  state = {
    links: ["home", "about", "contact", "login", "signin"],
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
    this.props.onSignIn(message);
  };

  signInSubmitHandler = (e) => {
    e.preventDefault();
    const message = formSubmitHandler(this.state.signIn);
    message["isSignUp"] = true;
    this.props.onSignUp(message);
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
              login={this.props.login}
              signIn={this.props.signUp}
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
const mapStateToProps = (state) => {
  return {
    login: state.landing.login,
    signUp: state.landing.signIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignIn: (message) => dispatch(actions.auth(message)),
    onSignUp: (message) => dispatch(actions.auth(message)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
