import React from "react";
import { connect } from "react-redux";
import Zero from "../components/Zero";

const MyHealth = (props) => {
  return (
    <>
      <Zero message="Visit a doctor to get your health report" />
    </>
  );
};
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MyHealth);
