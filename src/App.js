import React from 'react';

import './App.css';
import { Card } from './components/Card/Card';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
   <Header></Header>
   <Card text={"About Me"}></Card>
   <Card text={"Skills"}></Card>
   <Card text={"GitHub commit tracker"}></Card>
    <Footer></Footer>
    </div>
  );
}

export default App;
