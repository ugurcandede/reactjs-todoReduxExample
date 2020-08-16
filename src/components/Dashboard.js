import React from "react";
import { Row, Col } from "reactstrap";
import TodoList from "./Todo/TodoList";
import CategoryList from "./Category/CategoryList";
import { useSelector } from "react-redux";

function Dashboard() {
  const theme = useSelector((state) => state.themeReducer);

  return (
    <div style={{ backgroundColor: theme.backgroundColor }}>
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

export default Dashboard;
