import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";
import Landing from "./pages/Landing";
import Main from "./pages/Main";
import { Route } from "react-router-dom";
import * as actions from "./store/actions/export";
import { connect } from "react-redux";
class App extends Component {
  componentDidMount() {
    this.props.onCheckAuthState();

    if (this.props.isAuth) {
      this.props.history.push("/home");
    }
  }

  render() {
    let routes = <Route path="/" component={Landing} />;

    if (this.props.isAuth) {
      routes = <Route path="/home" component={Main} />;
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
