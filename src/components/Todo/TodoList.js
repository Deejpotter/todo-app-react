import React from "react"
import Container from "../Util/Container"
import TodoItem from "./TodoItem"

function TodoList({ state, dispatch }) {
  return (
    <Container ext='list'>
      <p><strong>Items:</strong></p>
      {state.items.map((item, index) => {
        return <TodoItem key={index} index={index} item={item} dispatch={dispatch} />
      }) }
    </Container>
  )
}

export default TodoList