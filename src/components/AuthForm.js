import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { connect } from "react-redux";
// import * as actions from "../store/actions/landing";
import * as actions from "../store/actions/export";
import { formChangeHandler, formSubmitHandler } from "../utility/Utility";

class AuthForm extends Component {
  state = {
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

  componentDidMount() {
    console.log(this.props.isAuth);
  }
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
    const data = formSubmitHandler(this.state.login);
    data["toLogin"] = true;
    data["toSignup"] = false;
    this.props.onLogin(data);
    this.props.history.push("/dashboard");
  };

  signUpSubmitHandler = (e) => {
    e.preventDefault();
    const data = formSubmitHandler(this.state.signIn);
    data["toSignup"] = true;
    data["toLogin"] = false;
    data["is_provider"] = this.props.isProvider;
    this.props.onSignUp(data);
    this.props.history.push("/dashboard");
  };

  render() {
    let form;
    if (this.props.isLogin) {
      form = (
        <Form onSubmit={this.loginSubmitHandler}>
          {Object.entries(this.state.login).map((val) => (
            <Form.Group controlId={`login-${val[0]}`} key={val[0]}>
              <Form.Label size="lg">{val[0]}</Form.Label>
              <Form.Control
                size="lg"
                name={val[0]}
                value={val[1].value}
                onChange={this.loginHandleChange}
                type={val[1].type}
                placeholder={val[1].attrs.placeholder}
              />
            </Form.Group>
          ))}
          <Button variant="primary" type="submit" className="form__btn">
            LogIn
          </Button>
        </Form>
      );
    } else {
      form = (
        <Form onSubmit={this.signUpSubmitHandler}>
          {Object.entries(this.state.signIn).map((val) => (
            <Form.Group controlId={val[0]} key={val[0]}>
              <Form.Label size="lg">{val[0]}</Form.Label>
              <Form.Control
                size="lg"
                name={val[0]}
                value={val[1].value}
                onChange={this.signInHandleChange}
                type={val[1].type}
                placeholder={val[1].attrs.placeholder}
              />
            </Form.Group>
          ))}

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="I agree to terms and conditions."
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="form__btn">
            Sign Up
          </Button>
        </Form>
      );
    }
    return (
      <Container>
        <div className="row">
          <button
            onClick={() => this.props.history.goBack()}
            className="btn btn-dark"
          >
            Back
          </button>
        </div>
        {form}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
    isLogin: state.auth.toLogin,
    isProvider: state.auth.isProvider,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (message) => dispatch(actions.auth(message)),
    onSignUp: (message) => dispatch(actions.auth(message)),
    // onLogin: (message) => dispatch(actions.handleLogin(message)),
    // onSignUp: (message) => dispatch(actions.handleSignUp(message)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
