import React from "react"
import Container from "../Util/Container"

function Titlescreen({dispatch}) {
  return (
      <Container>
          <form action={dispatch({ type: 'setUsername' })}>
              <input type='submit' />
          </form>
     </Container>
  )
}

export default Titlescreen