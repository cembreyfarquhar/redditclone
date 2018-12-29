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
          <input onChange={this.props.changeHandler} type="text" name="usernameText" value={this.props.usernameText} />
          <h2>Password</h2>
          <input onChange={this.props.changeHandler} type="text" name="passwordText" value={this.props.passwordText} />
          <br />
          <button
            onClick={ev => this.props.signUp(ev)}
            type="Submit"
            name="submit"
          >
            Sign up
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
