import React from "react";
import NavBar from "../components/NavBar/NavBar.js";
import PostCardContainer from "../components/PostCard/PostCardContainer";

class HomePageLoggedIn extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  createButton = ev => {
    ev.preventDefault();
    this.props.history.push("/create");
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="main-div">
            <NavBar
              user={this.props.user}
              logout={this.props.logout}
              createButton={this.createButton}
            />
          </div>
        </header>
        <PostCardContainer />
        <h2>Logged In</h2>
        <button onClick={this.props.consoleTest}>Test user info!</button>
      </div>
    );
  }
}

export default HomePageLoggedIn;
