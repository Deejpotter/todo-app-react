import React from "react"
import { FaTrash } from "react-icons/fa"

import Container from "../Util/Container"

function TodoItem({ index, item, dispatch }) {
    return (
        <Container ext='item'>
            <p>{item}</p>
            <button onClick={() => dispatch({type: 'remove', index: index})}><FaTrash/></button>
        </Container>
    )
}

export default TodoItem