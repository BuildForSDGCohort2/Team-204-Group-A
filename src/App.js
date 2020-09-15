import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";
import Landing from "./pages/Landing";
import Main from "./pages/Main";
import Auth_Cont from "./containers/Auth_Cont";
import AuthForm from "./components/AuthForm";
import { Route, Switch, Redirect } from "react-router-dom";
import * as actions from "./store/actions/export";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.onCheckAuthState();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/" component={Landing} exact />;
        <Route path="/signin" component={Auth_Cont} />;
        <Route path="/signin-signup-form" component={AuthForm} />;
        <Route path="/home" component={Main} exact />;
        <Redirect to="/" />
      </Switch>
    );
    if (this.props.isAuth) {
      return <Route path="/home" component={Main} />;
    }
    return <>{routes}</>;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckAuthState: () => dispatch(actions.checkAuthState()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
