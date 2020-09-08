import React from "react";
import Header from "../containers/Header";
import About from "../containers/About";
import Footer from "../containers/Footer";

const Landing = () => {
  return (
    <>
      <Header />
      <About heading={"About Us"} />
      <Footer />
    </>
  );
};

export default Landing;
