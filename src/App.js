import React, { Component } from 'react';

import './App.css';
import { Main } from './pages/Main';
import { Portfolio } from './pages/Portfolio';
import { BrowserRouter as Route, Switch, HashRouter } from "react-router-dom";

class App extends Component {
  render(){
  return (
  <HashRouter basename='/'>
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

        </HashRouter>
  );
}}

export default App;
