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
      user: {}
    };
  }
  signUp = (ev, req, res) => {
    ev.preventDefault();
    axios
      .post("http://localhost:3300/api/register", {
        username: this.state.usernameText,
        password: this.state.passwordText
      })
      .then(res => {
        console.log(String(res.data));
        localStorage.setItem("user", String(res.data));
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({
      loggedIn: true
    });
    this.props.history.push("/");
    setTimeout(() => this.getUserData(), 2000);
  };
  changeHandler = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };
  consoleTest = () => {
    const userId = localStorage.getItem("user");
    console.log("User ID: ", userId);
    axios
      .get("http://localhost:3300/api/userInfo")
      .then(res => console.log(res.data[userId - 1]));
  };
  getUserData = () => {
    const userId = localStorage.getItem("user");
    console.log("User ID: ", userId);
    axios.get("http://localhost:3300/api/userInfo").then(res => {
      console.log(res.data[userId - 1]);
      this.setState({ user: res.data[userId - 1] });
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
            render={props => (
              <HomePageLoggedIn
                {...props}
                consoleTest={this.consoleTest}
                user={this.state.user}
              />
            )}
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
            render={props => (
              <SignUp
                {...props}
                signUp={this.signUp}
                changeHandler={this.changeHandler}
                usernameText={this.state.usernameText}
                passwordText={this.state.passwordText}
              />
            )}
          />
        </div>
      );
    }
  }
}

export default withRouter(App);
