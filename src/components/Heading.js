import React from "react";
import { Row } from "react-bootstrap";

const Heading = (props) => {
  return (
    <Row className="heading__row">
      <h1 className="heading__h1">{props.heading}</h1>
    </Row>
  );
};

export default Heading;
