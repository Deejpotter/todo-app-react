import React from "react"
import { Link } from "react-router-dom"
import Container from "../Util/Container"

function Header(props) {
  return (
    <header>
      <Container>
        <Link to='/'>
          <h1>React Calculator</h1>
        </Link>
      </Container>
    </header>
  )
}

export default Header