import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/add">Add</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
