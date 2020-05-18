import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './styles/App.scss';
import Add from './components/pages/Add/Add';
import Home from './components/pages/Home/Home';
import Navigation from './components/molecules/Navigation/Navigation';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
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
