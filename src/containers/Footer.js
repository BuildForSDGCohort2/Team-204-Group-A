import React from "react";
import Heading from "../components/Heading";
// import Container from "@material-ui/core/Container";
// import Box from "@material-ui/core/Box";
// import Grid from "@material-ui/core/Grid";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <Heading title={"site map"} />
      </div>

      <div className="footer__right">
        <Heading title={"Our social"} />
      </div>
    </footer>
  );
};

export default Footer;
