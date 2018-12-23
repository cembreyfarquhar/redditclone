import React from "react";
import "./navBar.css"

class User extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="user">
        <h2>UserName</h2>
        <p>10 karma</p>
      </div>
    );
  }
}

export default User;