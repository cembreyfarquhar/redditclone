import React from "react";
import NavBar from "../components/NavBar/NavBar.js";
import PostCardContainer from "../components/PostCard/PostCardContainer";

class HomePageLoggedIn extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="main-div">
            <NavBar />
          </div>
        </header>
        <PostCardContainer />
        <h2>Logged In</h2>
      </div>
    );
  }
}

export default HomePageLoggedIn;
