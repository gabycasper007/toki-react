import React from 'react';
import {
  NavLink,
  Switch,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import styles from './styles/App.scss';
import Add from './components/pages/Add/Add';
import Home from './components/pages/Home/Home';

function App() {
  return (
    <Router>
      <div>
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
        <Switch>
          <Route path="/add" exact>
            <Add />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
