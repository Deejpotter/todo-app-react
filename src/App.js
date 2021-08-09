import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Titlescreen from './components/Titlescreen/titlescreen';
import Todo from './components/Todo/Todo';

const initialState = {
  username: '',
  items: []
};

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return {
        username: state.username,
        items: [...state.items, ]
      };
    default:
      throw new Error();
  }
}

function addItem(item) {
  // item is a string
  const newItems = [...todoItems, item]
  setTodoItems(newItems)
}
function removeItem(key) {
  // key is the index of the todoItem in the itemList
  const newItems = [...todoItems]
  newItems.splice(key, 1)
  setTodoItems(newItems)
}

const [state, dispatch] = useReducer(reducer, initialState)

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' dispatch={dispatch}>
          {username ? Todo : Titlescreen}
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
