import React from "react";
import "./navBar.css";

class SignUpButton extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="signUpButtonDiv">
        <button
          onClick={ev => {
            this.props.signUp(ev);
          }}
          className="signUpButton"
        >
          Sign Up
        </button>
      </div>
    );
  }
}

export default SignUpButton;
