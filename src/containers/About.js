import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heading from "../components/Heading";
class About extends Component {
  render() {
    return (
      <section id="about">
        <Container>
          <Heading heading={"About Us"} />
          <Row>
            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default About;
