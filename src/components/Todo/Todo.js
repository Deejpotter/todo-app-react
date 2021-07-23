import React from "react"
import TodoHeader from "./TodoHeader"
import TodoList from "./TodoList"

function Todo(props) {
  return (
    <>
      <TodoHeader />
      <TodoList />
    </>
  )
}

export default Todo