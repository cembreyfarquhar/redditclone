import React from "react";
import axios from "axios";
import PostCardContainer from "../components/PostCard/PostCardContainer";
import NavBarLoggedOut from "../components/NavBar/NavBarLoggedOut.js";

class HomePageLoggedOut extends React.Component {
  constructor() {
    super();
    this.state = {
      usernameText: "",
      passwordText: ""
    };
  }
  signUpButton = ev => {
    ev.preventDefault();
    this.props.history.push("/signup");
  };
  changeHandler = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="main-div">
            <NavBarLoggedOut
              signUpButton={this.signUpButton}
              username={this.state.usernameText}
              password={this.state.passwordText}
              signUp={this.signUp}
            />
          </div>
        </header>
        <PostCardContainer />
        <h2>Logged Out</h2>
      </div>
    );
  }
}

export default HomePageLoggedOut;
