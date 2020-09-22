import React from "react";
import { connect } from "react-redux";
import Zero from "../components/Zero";

const Pharmacies = (props) => {
  return (
    <>
      <Zero message="Recommended and previous Pharmacies will appear here" />
    </>
  );
};
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Pharmacies);
