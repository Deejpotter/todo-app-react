import React from "react"
import Container from "../Util/Container"

function TodoItem({ index, item, removeItem }) {
    return (
        <Container ext='item'>
            <p>{item}</p>
            <button onClick={() => removeItem(index)}>Remove</button>
        </Container>
    )
}

export default TodoItem