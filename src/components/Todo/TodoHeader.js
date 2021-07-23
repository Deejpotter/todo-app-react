import React from "react"
import Container from "../Util/Container"

function TodoHeader({ clickHandler }) {
  return (
    <Container>
      <h2>ToDo</h2>
      <button onClick={clickHandler}>+</button>
    </Container>
  )
}

export default TodoHeader