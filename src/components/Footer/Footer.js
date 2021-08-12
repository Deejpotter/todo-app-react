import React from "react";
import Container from "../Util/Container";

function Footer({ state, dispatch }) {
  return (
    <footer>
      <Container ext='footer'>
        {state.username ?
          <button className='shadow radius' onClick={() => dispatch({ type: 'deleteEverything' })}>
            Delete everything
          </button>
          :
          <p>Footer</p>
        }
      </Container>
    </footer>
  );
}

export default Footer;