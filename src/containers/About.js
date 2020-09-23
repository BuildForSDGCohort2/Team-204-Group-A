import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heading from "../components/Heading";
import { Button, ListGroup } from "react-bootstrap";
class About extends Component {
  render() {
    return (
      <section id="about">
        <Container>
          <Heading heading={"About Us"} />
          <Row>
            <Col></Col>
            <Col className="text-uppercase bold" sm={12} md={6}>
              <div>
                <h1>
                  Rethinking the way you - <br /> receive care
                </h1>
              </div>
              <div>
                <p>
                  Our worldwide based, board-certified physicians, and licensed
                  psychiatrists, psychologists, and therapists, are available on
                  your schedule.
                </p>
              </div>
              <div>
                <Button
                  style={{
                    padding: "1rem 2rem",
                    fontSize: "1.8rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                  variant="outline-primary"
                >
                  See a Doctor <span> &rarr;</span>
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              className="text-uppercase bold d-flex justify-content-center flex-column"
              sm={12}
              md={6}
            >
              <div>
                <h1>
                  We see the full you - <br /> mind and body
                </h1>
              </div>
              <div>
                <p>
                  We have you covered from A to Z and are here to support your
                  wellbeing over time. From our licensed psychiatrists to a
                  staff of doctoral-level psychologists and masters level
                  therapists, we are here to help support your wellness journey.
                </p>
              </div>
              <div>
                <Button
                  style={{
                    padding: "1rem 2rem",
                    fontSize: "1.8rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                  variant="outline-primary"
                >
                  Our Health care expertise<span> &rarr;</span>
                </Button>
              </div>
            </Col>
            <Col>
              <ListGroup variant="flush" style={{ padding: "2rem 0" }}>
                <ListGroup.Item style={{ padding: "1rem 0" }}>
                  <h3>Urgent Care</h3>
                  <p>When you're feeling ill and need to see a doctor</p>
                </ListGroup.Item>
                <ListGroup.Item style={{ padding: "2rem 0" }}>
                  <h3>Behavioural Health</h3>
                  <p>Emotional support from the privacy of your home</p>
                </ListGroup.Item>
                <ListGroup.Item style={{ padding: "2rem 0" }}>
                  <h3>Preventive Health</h3>
                  <p>Supporting your day to day helath choices and habits</p>
                </ListGroup.Item>
                <ListGroup.Item style={{ padding: "2rem 0" }}>
                  <h3>Chronic Care</h3>
                  <p>When you're feeling ill and need to see a doctor</p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col className="text-uppercase bold" sm={12} md={6}>
              <div>
                <h1>
                  Compassionate and trusted providers - <br /> who get you
                </h1>
              </div>
              <div>
                <p>
                  Our worldwide based, board-certified physicians, and licensed
                  psychiatrists, psychologists, and therapists, are available on
                  your schedule.
                </p>
              </div>
              <div>
                <Button
                  style={{
                    padding: "1rem 2rem",
                    fontSize: "1.8rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                  variant="outline-primary"
                >
                  See a Doctor <span> &rarr;</span>
                </Button>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default About;
