/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Table, Button } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as todoActions from "../../redux/actions/todoActions";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function TodoList(props) {
  const theme = useSelector((state) => state.themeReducer);

  const handleGetTodos = () => {
    props.actions.getTodos();
  };

  useEffect(() => {
    handleGetTodos();
  }, []);

  const handleDoneTodo = (todo) => {
    this.props.actions.removeTodo(todo);
    handleGetTodos();
  };

  return (
    <div>
      <Table
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.primaryTextColor,
        }}
        responsive
        hover
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Date</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {props.todos.map((t) => (
            <tr key={t.id}>
              <th scope="row">{t.id}</th>
              <td>{t.todoName}</td>
              <td>{t.todoDesc}</td>
              <td>{t.todoDate}</td>
              <td>
                <Link to={"/savetodo/" + t.id}>
                  <Button outline color="success">
                    Edit!
                  </Button>
                </Link>
              </td>
              <td>
                <Button
                  // color="primary"
                  style={{
                    color: theme.primaryButtonTextColor,
                    backgroundColor: theme.primaryButtonColor,
                    border: "none",
                  }}
                  onClick={() =>
                    window.confirm(
                      "\nAre You Sure You Want To Delete This Todo?\n"
                    )
                      ? handleDoneTodo(t)
                      : null
                  }
                >
                  Done!
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todos: state.todoListReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getTodos: bindActionCreators(todoActions.getTodos, dispatch),
      removeTodo: bindActionCreators(todoActions.removeTodo, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
