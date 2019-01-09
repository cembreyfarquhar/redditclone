import React from "react";
import { withRouter } from "react-router-dom";

class CreateSubreddit extends React.Component {
  componentDidMount() {
    console.log("Create mounted");
  }
  render() {
    return (
      <div className="createSubReddit">
        <h1>Create Subreddit</h1>
        <p>Helloooo</p>
      </div>
    );
  }
}

export default withRouter(CreateSubreddit);
