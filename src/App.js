import React, { useReducer, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Titlescreen from './components/Titlescreen/Titlescreen';
import Todo from './components/Todo/Todo';
import Modal from './components/Modal/Modal';

// Reducer functions
const initialState = localStorage.getItem('appState') ?
	JSON.parse(localStorage.getItem('appState'))
	:
	{
		username: '',
		items: [],
		modalOpen: false
	};

function reducer(state, action) {
	switch (action.type) {
		case 'add':
			return {
				username: state.username,
				items: [...state.items, action.newItem],
				modalOpen: state.modalOpen
			};
		case 'remove':
			const newItems = [...state.items];
			newItems.splice(action.index, 1);
			return {
				username: state.username,
				items: newItems,
				modalOpen: state.modalOpen
			};
		case 'setUsername':
			return {
				username: action.username,
				items: state.items,
				modalOpen: state.modalOpen
			};
		case 'openModal':
			return {
				username: state.username,
				items: state.items,
				modalOpen: true
			};
		case 'closeModal':
			return {
				username: state.username,
				items: state.items,
				modalOpen: false
			};
		case 'deleteEverything':
			return {
				username: '',
				items: [],
				modalOpen: false
			};
		default:
			throw new Error("Not an action");
	}
}

function App() {

	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		localStorage.setItem('appState', JSON.stringify(state));
	}, [state]);

	return (
		<BrowserRouter>
			{state.modalOpen ?
				<Modal dispatch={dispatch}>
					Are you sure? Everything will be deleted.
				</Modal>
				:
				null
			}
			<Header />
			<Switch>
				<Route exact path='/'>
					{state.username ?
						<Todo state={state} dispatch={dispatch} />
						:
						<Titlescreen state={state} dispatch={dispatch} />
					}
				</Route>
			</Switch>
			<Footer state={state} dispatch={dispatch} />
		</BrowserRouter>
	);
}

export default App;