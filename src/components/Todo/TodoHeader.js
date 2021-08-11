import React from "react";
import Container from "../Util/Container";

function TodoHeader({ state }) {
  return (
    <Container ext='col'>
      <h2>Hi {state.username}!</h2>
      <p>Here are your items.</p>
      <p>Don't put anything actuallly important here because it's just saved in your browser.</p>
    </Container>
  );
}

export default TodoHeader;