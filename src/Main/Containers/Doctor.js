import React from "react";
import { connect } from "react-redux";
import Zero from "../components/Zero";

const Doctor = (props) => {
  return (
    <div>
      <Zero message="Providers you have interacted with" />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
