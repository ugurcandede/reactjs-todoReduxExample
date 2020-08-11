import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import TodoList from "./Todo/TodoList";
import CategoryList from "./Category/CategoryList";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="2">
            <CategoryList />
          </Col>
          <Col xs="10">
            <TodoList />
          </Col>
        </Row>
      </div>
    );
  }
}
