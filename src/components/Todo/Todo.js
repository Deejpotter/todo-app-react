import React, { useState } from "react"
import Container from "../Util/Container"
import TodoForm from "./TodoForm"
import TodoHeader from "./TodoHeader"
import TodoList from "./TodoList"

function Todo() {
  const [todoItems, setTodoItems] = useState([])

  function addItem(item) {
    // item is a string
    const newItems = [...todoItems, item]
    setTodoItems(newItems)
  }
  function removeItem(key) {
    // key is the index of the todoItem in the itemList
    const newItems = [...todoItems]
    newItems.splice(key, 1)
    setTodoItems(newItems)
  }

  return (
    <Container ext='todo'>
      <TodoHeader />
      <TodoForm addItem={addItem} />
      <TodoList todoItems={todoItems} removeItem={removeItem} />
    </Container>
  )
}

export default Todo