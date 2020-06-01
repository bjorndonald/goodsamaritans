import React from 'react';
import logo from './logo.svg';
import Home from './components/HomePage/Home'; 
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
       
      </Switch>
    </BrowserRouter>
  );
}

export default App;
