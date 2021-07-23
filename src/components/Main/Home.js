import React from "react"
import Todo from "../Todo/Todo"
import Container from "../Util/Container"

function Home(props) {
	return (
		<main>
			<Container>
				<h2>Home</h2>
				<Todo />
			</Container>
		</main>
	)
}

export default Home