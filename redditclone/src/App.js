import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="main-div">
            <NavBar />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
