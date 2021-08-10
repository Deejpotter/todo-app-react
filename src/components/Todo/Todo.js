import React from "react";
import Container from "../Util/Container";
import TodoForm from "./TodoForm";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

function Todo({ state, dispatch }) {
  return (
    <Container ext='todo shadow radius'>
      <TodoHeader state={state} />
      <TodoForm dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch} />
    </Container>
  );
}

export default Todo;