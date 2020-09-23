import React from "react";
import { connect } from "react-redux";
import Zero from "../components/Zero";

const Overview = (props) => {
  return (
    <div>
      <Zero message="You're good to go!" />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
