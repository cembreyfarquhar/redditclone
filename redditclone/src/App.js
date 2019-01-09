import React, { Component } from "react";
import "./App.css";
import { Route, withRouter } from "react-router-dom";
import axios from "axios";
import HomePageLoggedOut from "./pages/HomePageLoggedOut";
import HomePageLoggedIn from "./pages/HomePageLoggedIn";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import CreateSubreddit from "./pages/CreateSubreddit";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      usernameText: "",
      passwordText: ""
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
    this.props.history.push("/");
    setTimeout(() => this.getUserData(), 2000);
  };
  login = (ev, req, res) => {
    ev.preventDefault();
    axios
      .post("http://localhost:3300/api/login", {
        username: this.state.usernameText,
        password: this.state.passwordText
      })
      .then(res => {
        localStorage.setItem("token", String(res.data.token));
        localStorage.setItem("user", String(res.data.user));
        console.log(res.data);
        console.log(localStorage.getItem("user"));
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };
  changeHandler = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };
  // consoleTest = () => {
  //   const userId = localStorage.getItem("user");
  //   console.log("User ID: ", userId);
  //   axios
  //     .get("http://localhost:3300/api/userInfo")
  //     .then(res => console.log(res.data[userId - 1]));
  // };
  getUserData = () => {
    const userId = localStorage.getItem("user");
    console.log("User ID: ", userId);
    if (localStorage.getItem("user") !== null) {
      axios.get("http://localhost:3300/api/userInfo").then(res => {
        console.log(res.data[userId - 1]);
        this.setState({
          user: res.data[userId - 1]
        });
      });
    }
  };
  logout = () => {
    localStorage.removeItem("user");
    localStorage.setItem("loggedIn", "false");
    this.getUserData();
    this.setState({
      user: null
    });
  };
  // componentWillMount() {
  //   this.getUserData();
  // }
  componentDidMount() {
    // this.getUserData();
    if (localStorage.getItem("user") !== null) {
      localStorage.setItem("loggedIn", "true");
      this.getUserData();
    }
  }
  componentDidUpdate() {
    // this.getUserData();
    if (localStorage.getItem("user") !== null) {
      localStorage.setItem("loggedIn", "true");
      if (!this.state.user) {
        console.log("Gettting data!!");
        this.getUserData();
      }
    } else {
      localStorage.setItem("loggedIn", "false");
    }
  }
  render() {
    if (localStorage.getItem("loggedIn") === "true") {
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
                logout={this.logout}
              />
            )}
          />
          <Route
            to
            exact
            path="/create"
            render={props => <CreateSubreddit {...props} />}
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
          <Route
            to
            exact
            path="/login"
            render={props => (
              <Login
                {...props}
                login={this.login}
                changeHandler={this.changeHandler}
                usernameText={this.usernameText}
                passwordText={this.passwordText}
              />
            )}
          />
        </div>
      );
    }
  }
}

export default withRouter(App);
