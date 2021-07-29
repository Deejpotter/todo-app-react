import React from "react"
import Todo from "../Todo/Todo"
import Container from "../Util/Container"

function Home(props) {
	return (
		<main>
			<Container ext='col'>
				<Container ext='header'>
					<h2>Home</h2>
				</Container>
				<Todo />
			</Container>
		</main>
	)
}

export default Home