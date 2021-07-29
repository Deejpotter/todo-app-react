import React from "react"
import { FaTrash } from "react-icons/fa"

import Container from "../Util/Container"

function TodoItem({ index, item, removeItem }) {
    return (
        <Container ext='item'>
            <p>{item}</p>
            <button onClick={() => removeItem(index)}><FaTrash/></button>
        </Container>
    )
}

export default TodoItem