import React from "react";
import "./navBar.css";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: ""
    };
  }

  changeHandler = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };
  render() {
    return (
      <div className="searchBar">
        <form>
          <input
            type="text"
            name="searchText"
            value={this.state.searchText}
            onChange={this.changeHandler}
            placeholder="Search Reddit"
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
