import React from "react";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="signUpPage">
        <form className="signUpForm">
          <h2>Username</h2>
          <input type="text" name="username" value={this.props.usernameText} />
          <h2>Password</h2>
          <input type="text" name="password" value={this.props.passwordText} />
          <br />
          <button
            onClick={ev => this.props.signUp(ev)}
            type="Submit"
            name="Submit"
          >
            Sign up
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
