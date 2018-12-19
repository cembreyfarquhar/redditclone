import React from "react";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: ""
    };
  }
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="search"
            value={this.state.searchText}
            placeholder="Search Reddit"
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
