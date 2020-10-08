import React from 'react';

import './App.css';
import { Main } from './pages/Main';
import { Portfolio } from './pages/Portfolio';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
  <Router >
  <div className="App">
    <Switch>
      <Route exact path="/">
        <Main></Main>
      </Route>
      <Route exact path="/portfolio"> 
        <Portfolio></Portfolio>
      </Route>

    <Route>Page did not load correctly</Route>

    </Switch> 
  </div>

  </Router>
  );
}

export default App;