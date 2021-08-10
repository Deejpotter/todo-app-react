import React, { useState } from "react";
import Container from "../Util/Container";

function TodoForm({ state, dispatch }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        dispatch({ type: 'add', newItem: value });
        setValue("");
    };

    return (
        <Container ext='form'>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder='Add a new item' />
                <input type="submit" value='+' />
            </form>
        </Container>
    );
}

export default TodoForm;