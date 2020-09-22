import React from "react";
import { connect } from "react-redux";
import Zero from "../components/Zero";

const Appointments = (props) => {
  return (
    <>
      <Zero message="You have Zero Appointmensts" />
    </>
  );
};
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
