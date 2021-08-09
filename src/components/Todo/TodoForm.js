import React, { useState } from "react"
import Container from "../Util/Container"

function TodoForm({ dispatch }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        dispatch({type: 'add'});
        setValue("");
    };

    return (
        <Container ext='form'>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={e => setValue(e.target.value)} />
                <input type="submit" value='+' />
            </form>
        </Container>
    )
}

export default TodoForm