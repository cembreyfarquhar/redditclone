import React from "react";
import "./navBar.css";

class SignInButton extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="signInButtonDiv">
        <button
          onClick={ev => {
            this.props.signIn(ev);
          }}
          className="signInButton"
        >
          Sign In
        </button>
      </div>
    );
  }
}

export default SignInButton;