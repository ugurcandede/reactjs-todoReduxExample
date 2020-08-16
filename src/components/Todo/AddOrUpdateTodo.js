import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveTodo } from "../../redux/actions/todoActions";
import TodoDetail from "./TodoDetail";

function AddOrUpdateTodo({
  todos,
  categories,
  getTodos,
  getCategories,
  saveTodo,
  history,
  ...props
}) {
  const [todo, setTodo] = useState({ ...props.todo });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
    setTodo({ ...props.todo });
  }, [categories.length, getCategories, props.todo]);

  function handleChange(event) {
    const { name, value } = event.target;
    setTodo((previousTodo) => ({
      ...previousTodo,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));

    validate(name, value);
  }

  function validate(name, value) {
    if (name === "todoName" && value === "") {
      setErrors((previousErrors) => ({
        ...previousErrors,
        todoName: "Must be the product name",
      }));
    } else {
      setErrors((previousErrors) => ({
        ...previousErrors,
        todoName: "",
      }));
    }
  }

  function handleSave(event) {
    event.preventDefault();
    saveTodo(todo).then(() => {
      history.push("/");
    });
  }
  return (
    <TodoDetail
      todo={todo}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
    />
  );
}

export function getTodoById(todos, todoId) {
  // eslint-disable-next-line eqeqeq
  return todos.find((t) => t.id == todoId || null);
}

function mapStateToProps(state, ownProps) {
  const todoId = ownProps.match.params.todoId;
  const todo =
    todoId && state.todoListReducer.length > 0
      ? getTodoById(state.todoListReducer, todoId)
      : {};
  return {
    todo,
    todos: state.todoListReducer,
    categories: state.categoryListReducer,
  };
}

const mapDispatchToProps = {
  getCategories,
  saveTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateTodo);
