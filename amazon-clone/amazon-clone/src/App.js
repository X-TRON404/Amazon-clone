import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>

          <Route path="/checkout">
            <Header/>
            <h1>checkout</h1>
          </Route>

          <Route path="/login">
            <h1>login</h1>
          </Route>

          <Route path="/">
            <Header/>
            <Home/>
          </Route>

        </Switch>
      <h1>Lets build an amazon clone</h1>

      </div>
    </Router>
  );
}

export default App;
