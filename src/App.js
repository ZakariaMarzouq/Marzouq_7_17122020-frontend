import React, { Component } from "react";
import Login from "./components/log/SignInForm";
import Register from "./components/log/SignUpForm";
import Navigation from "./components/pages/Navbar";
import Home from "./components/pages/Home";
import Post from "./components/pages/Post";
import User from './components/pages/User';


import './components/style/App.css'
import logo from "./icon-left-font-monochrome-white.png";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory({ forceRefresh: true });

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Router history={history}>
          <Navigation />
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/post" exact component={Post}  />
          <Route path="/user" exact component={User} />

        </Router>
      </div>
    );
  }
}
