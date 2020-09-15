import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Heading from "../components/Heading";
import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions/export";
class Auth extends Component {
  handleSignUpProvider = () => {
    console.log("clicked");
    this.props.onSignInProvider();
    this.props.history.push("/signin-signup-form");
  };

  handleSignUpUser = () => {
    console.log("clicked");
    this.props.onSignInUser();
    this.props.history.push("/signin-signup-form");
  };

  handleLoginClick = () => {
    this.props.onLoginClick();
    this.props.history.push("/signin-signup-form");
  };

  render() {
    return (
      <section className="auth">
        <Container>
          <Row>
            <Col>
              <Heading heading="Sign In as a User" />
              <div className="form__cta">
                <Button onClick={this.handleSignUpUser} className="form__btn">
                  Sign Up
                </Button>
                <Button onClick={this.handleLoginClick} className="form__btn">
                  Login
                </Button>
              </div>
            </Col>
            <Col>
              <Heading heading="Sign In as a Provider" />
              <div className="form__cta">
                <Button
                  onClick={this.handleSignUpProvider}
                  className="form__btn"
                >
                  Sign Up
                </Button>
                <Button onClick={this.handleLoginClick} className="form__btn">
                  Login
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginClick: (isLogin) => dispatch(actions.toLogin((isLogin = true))),
    onSignInUser: (isProvider) =>
      dispatch(actions.signInUser((isProvider = false))),
    onSignInProvider: (isProvider) =>
      dispatch(actions.signInProvider((isProvider = true))),
  };
};

export default connect(null, mapDispatchToProps)(Auth);
