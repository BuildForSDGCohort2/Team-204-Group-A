import React from "react";
import { connect } from "react-redux";
import Zero from "../components/Zero";

const Facilities = (props) => {
  return (
    <>
      <Zero message="You haven't been to any Hospital yet" />
    </>
  );
};
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Facilities);
