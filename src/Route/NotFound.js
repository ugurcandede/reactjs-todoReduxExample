import React, { Component } from "react";
import { Container, Row, Button } from "reactstrap";
import logo from "../assets/404.png";
import { Link } from "react-router-dom";

export default class NotFound extends Component {
  render() {
    return (
      <Container>
        <Row>
          <img
            className="mx-auto img-fluid"
            src={logo}
            alt="404 Page"
            style={{ width: 400, height: "auto" }}
          />
        </Row>
        <Row style={{ marginTop: 20 }}>
          <p>
            A broken clock is right twice a day. But if you just have one clock,
            it’s impossible to tell exactly when the clock is right. So it could
            be right at any moment. And that brings you to the crux of the
            conceptualization.
          </p>
          <p>
            What is time? Nothing but an abyss. Clocks are just false attempts
            to harness its power. It’s cruel really.
          </p>
        </Row>
        <Row>
          <Link className="mx-auto" style={{ color: "whitesmoke" }} to="/">
            <Button color="primary" size="lg">
              Go Back!
            </Button>
          </Link>
        </Row>
      </Container>
    );
  }
}
