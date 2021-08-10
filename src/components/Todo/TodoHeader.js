import React from "react";
import Container from "../Util/Container";

function TodoHeader({ state }) {
  return (
    <Container ext='col'>
      <h2>Hi {state.username}!</h2>
      <p>Here are your items</p>
    </Container>
  );
}

export default TodoHeader;