import React from "react";
import "./navBar.css";
import SearchBar from "./SearchBar";
import SearchIcons from "./SearchIcons";
import SignUpButton from "./SignUpButton";
import SignInButton from "./SignInButton";

class NavBarLoggedOut extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <header className="navBar">
        <img
          src="https://external-preview.redd.it/iDdntscPf-nfWKqzHRGFmhVxZm4hZgaKe5oyFws-yzA.png?auto=webp&s=38648ef0dc2c3fce76d5e1d8639234d8da0152b2"
          alt="redditLogo"
        />
        <h1>reddit</h1>
        <SearchBar />
        <SearchIcons />
        <SignUpButton signUp={this.props.signUpButton} />
        <SignInButton signIn={this.props.signInButton} />
      </header>
    );
  }
}

export default NavBarLoggedOut;
