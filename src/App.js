import React, { useReducer } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Titlescreen from './components/Titlescreen/Titlescreen';
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
        items: [...state.items, action.newItem]
      };
    case 'remove':
      const newItems = [...state.items];
      newItems.splice(action.index, 1);
      return {
        username: state.username,
        items: newItems
      };
    case 'setUsername':
      return {
        username: action.username,
        items: state.items
      };
    default:
      throw new Error("Not an action");
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BrowserRouter>
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
      <Footer />
    </BrowserRouter>
  );
}

export default App;
