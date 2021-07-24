import React from "react"
import Container from "../Util/Container"
import TodoItem from "./TodoItem"

function TodoList({ todoItems, removeItem }) {
  return (
    <Container ext='col'>
      {todoItems.map((item, index) => {
        return <TodoItem key={index} index={index} item={item} removeItem={removeItem} />
      }) }
    </Container>
  )
}

export default TodoList