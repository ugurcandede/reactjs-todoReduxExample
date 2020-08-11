import * as actionTypes from "./actionTypes";

export const createTodoSuccess = (todo) => {
  return { type: actionTypes.CREATE_TODO_SUCCESS, payload: todo };
};

export const updateTodoSuccess = (todo) => {
  return { type: actionTypes.UPDATE_TODO_SUCCESS, payload: todo };
};

export const getTodosSuccess = (todos) => {
  return { type: actionTypes.GET_TODOS_SUCCESS, payload: todos };
};

export const removeTodoSuccess = (todo) => {
  return { type: actionTypes.REMOVE_TODO_SUCCESS, payload: todo };
};

export const removeTodoApi = (todo) => {
  return fetch("http://localhost:2500/todos/" + todo.id, {
    method: "DELETE",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(todo),
  })
    .then(handleResponse)
    .catch(handleError);
};

export const removeTodo = (todo) => {
  return function (dispatch) {
    return removeTodoApi(todo).then((removedTodo) => {
      dispatch(removeTodoSuccess(removedTodo));
    });
  };
};

export function getTodos(categoryId) {
  return function (dispatch) {
    let url = "http://localhost:2500/todos";
    if (categoryId) {
      url = url + "?categoryId=" + categoryId;
    }
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getTodosSuccess(result)));
  };
}

export function saveTodoApi(todo) {
  return fetch("http://localhost:2500/todos/" + (todo.id || ""), {
    method: todo.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(todo),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function saveTodo(todo) {
  return function (dispatch) {
    return saveTodoApi(todo)
      .then((savedTodo) => {
        todo.id
          ? dispatch(updateTodoSuccess(savedTodo))
          : dispatch(createTodoSuccess(savedTodo));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export async function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }

  const error = await response.text();
  throw new Error(error);
}

export function handleError(error) {
  console.error("Bir hata oluştu");
  throw error;
}
