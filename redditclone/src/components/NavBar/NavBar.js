import React from "react";
import "./navBar.css";
import DropDownSearch from "./DropDownSearch";
import SearchBar from "./SearchBar";
import SearchIcons from "./SearchIcons";
import UserIcons from "./UserIcons";
import User from "./User";

class NavBar extends React.Component {
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
        <DropDownSearch />
        <SearchBar />
        <SearchIcons />
        <UserIcons />
        <User user={this.props.user} />
        {/* logout button */}
        <button onClick={this.props.logout}>Log Out</button>
      </header>
    );
  }
}

export default NavBar;
