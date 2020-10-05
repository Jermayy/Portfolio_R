import React from 'react';

import './App.css';
import { Main } from './pages/Main';
import { Portfolio } from './pages/Portfolio';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
  <Router>
  <div className="App">
  <Switch>
      <Route exact path="/">
        <Main></Main>
      </Route>
      <Route exact path="/portfolio"> 
        <Portfolio></Portfolio>
      </Route>

   </Switch> 
        </div>

        </Router>
  );
}

export default App;
