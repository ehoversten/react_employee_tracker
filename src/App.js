import React from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Display from './components/Display';
import Employee from './components/Employee';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path='/' component={Display} />
      <Route exact path='/employees' component={Employee} />
    </div>
  );
}

export default App;
