import './App.css';
import React from 'react';
import ItemDropDown from './components/ItemDropDown'
import Home from './components/Home'
import './components/Home.css'
import './components/NavBar.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/NavBar';

export default function App () {
  return (
    <Router>
      <div>
        <Navbar />
        <nav>
          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Enter postal code and click here to shop local</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/checkout">Checkout Cart</Link>
            </li>
          </ul> */}
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Shop () {
  return (
    <div>
      <h2>The shop local page with map and items</h2>
      <ItemDropDown />
    </div>

  )
}

function Login () {
  return <h2>This is the login page</h2>;
}

function Register () {
  return <h2>This is the register page</h2>
}

function Checkout () {
  return <h2>This is the checkout page</h2>
}