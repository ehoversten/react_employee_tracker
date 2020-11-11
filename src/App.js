import React from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Display from './components/Display';
import Employee from './components/Employee';

function App() {
  return (
    <div className="App">
      <Router >
        <Nav />
        <Route exact path='/employees' component={Employee} />
        <Route exact path='/' component={Display} />
      </Router>
    </div>
  );
}

export default App;
