import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Todo from './components/Todo/Todo';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Todo} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
