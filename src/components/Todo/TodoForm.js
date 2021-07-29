import React, { useState } from "react"
import Container from "../Util/Container"

function TodoForm({ addItem }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addItem(value);
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