import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class CreateSubreddit extends React.Component {
  constructor() {
    super();
    this.state = {
      subredditTitleText: "",
      subredditDescriptionText: ""
    };
  }
  changeHandler = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };
  componentDidMount() {
    console.log("Create mounted");
  }
  createSubreddit = ev => {
    ev.preventDefault();
    const title = this.state.subredditTitleText;
    console.log("CREATING!");
    axios
      .post("http://localhost:3300/api/r/create", {
        title: this.state.subredditTitleText,
        description: this.state.subredditDescriptionText
      })
      .then(ids => {
        console.log(ids);
        this.props.history.push(`/r/dfgdf`);
      })
      .catch(err => {
        console.log(err);
        this.props.history.push("/sdfsdfssdfsdfsdfs");
      });
  };
  render() {
    return (
      <div className="createSubReddit">
        <h1>Create Subreddit</h1>
        <form className="createSubredditForm">
          Subreddit Title
          <input
            onChange={ev => this.changeHandler(ev)}
            type="text"
            name="subredditTitleText"
            value={this.state.subredditTitleText}
          />
          <br />
          Description
          <textarea
            onChange={ev => this.changeHandler(ev)}
            type="text"
            name="subredditDescriptionText"
            value={this.state.subredditDescriptionText}
          />
          <br />
          <button onClick={ev => this.createSubreddit(ev)}>
            Create Subreddit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(CreateSubreddit);
