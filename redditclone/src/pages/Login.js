import React from "react";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="signUpPage">
        <form className="signUpForm">
          <h2>Username</h2>
          <input
            onChange={this.props.changeHandler}
            type="text"
            name="usernameText"
            value={this.props.usernameText}
          />
          <h2>Password</h2>
          <input
            onChange={this.props.changeHandler}
            type="text"
            name="passwordText"
            value={this.props.passwordText}
          />
          <br />
          <button
            onClick={ev => this.props.login(ev)}
            type="Submit"
            name="submit"
          >
            Log in
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
