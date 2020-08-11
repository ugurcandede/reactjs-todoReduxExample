import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as todoActions from "../../redux/actions/todoActions";
import { Link } from "react-router-dom";

class TodoList extends Component {
  handleGetTodos() {
    this.props.actions.getTodos();
  }

  componentDidMount() {
    this.handleGetTodos();
  }

  handleDoneTodo(todo) {
    this.props.actions.removeTodo(todo);
    setTimeout(() => {
      this.handleGetTodos();
    }, 50);
  }

  render() {
    return (
      <div>
        <Table responsive hover>
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
            {this.props.todos.map((t) => (
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
                    color="primary"
                    onClick={() =>
                      window.confirm(
                        "\nAre You Sure You Want To Delete This Todo?\n"
                      )
                        ? this.handleDoneTodo(t)
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
