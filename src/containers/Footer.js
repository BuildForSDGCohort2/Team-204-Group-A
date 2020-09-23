import React from "react";
import Heading from "../components/Heading";
import { connect } from "react-redux";
import Links from "../components/Links";
// import Container from "@material-ui/core/Container";
// import Box from "@material-ui/core/Box";
// import Grid from "@material-ui/core/Grid";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <Heading heading={"site map"} />
        <ul className="nav__list">
          {props.links.map((link) => (
            <Links title={link} key={link} />
          ))}
        </ul>
      </div>

      <div className="footer__right">
        <Heading heading={"Our social"} />
      </div>
    </footer>
  );
};

const mapStateToProps = (state) => {
  return {
    links: state.landing.links,
  };
};

export default connect(mapStateToProps)(Footer);
