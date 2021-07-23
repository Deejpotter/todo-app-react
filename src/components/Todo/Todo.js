import React from "react"
import Container from "../Util/Container"
import TodoHeader from "./TodoHeader"
import TodoList from "./TodoList"

function Todo(props) {
  return (
    <Container ext='todo'>
      <TodoHeader />
      <TodoList />
    </Container>
  )
}

export default Todo