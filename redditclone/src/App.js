import React, { Component } from "react";
import "./App.css";
import { Route, Redirect, withRouter } from "react-router-dom";
import axios from "axios";
import HomePageLoggedOut from "./pages/HomePageLoggedOut";
import HomePageLoggedIn from "./pages/HomePaggedLoggedIn";
import SignUp from "./pages/SignUp";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      usernameText: "",
      passwordText: "",
      user: ""
    };
  }
  signUp = (ev, req, res) => {
    ev.preventDefault();
    console.log("Helloo");
    axios
      .post("http://localhost:3300/api/register", {
        username: this.state.usernameText,
        password: this.state.passwordText
      })
      .then(ids => {
        localStorage.setItem("user", toString(res.data.id));
      })
      .catch(err => {
        res.status(500).json({ message: err + "error signing up" });
      });
    this.setState({
      loggedIn: true
    });
    this.props.history.push("/");
  };
  changeHandler = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };
  render() {
    if (this.state.loggedIn) {
      return (
        <div className="App">
          <Route
            to
            exact
            path="/"
            render={props => <HomePageLoggedIn {...props} />}
          />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Route
            to
            exact
            path="/"
            render={props => <HomePageLoggedOut {...props} />}
          />
          <Route
            to
            exact
            path="/signup"
            render={props => <SignUp {...props} signUp={this.signUp} />}
          />
        </div>
      );
    }
  }
}

export default withRouter(App);
