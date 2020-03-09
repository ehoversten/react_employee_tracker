import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Nav() {
    return (
      <div className="navigation">
        <div className="nav-container">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/employees">Directory</NavLink>
        </div>
        <br />
      </div>
    );
}


export default Nav;