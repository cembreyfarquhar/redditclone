import React from "react";
import PostCard from "./PostCard";
import "./postCard.css";

class PostCardContainer extends React.Component {
  constructor() {
    super();
    // store all posts on homepage in this state
    this.state = {
      posts: [
        {
          title: "Hello!",
          subreddit: "r/something"
        },
        {
          title: "a second article!",
          subreddit: "r/anothaone!"
        }
      ]
    };
  }
  render() {
    return (
      <div className="postCardContainer">
        {this.state.posts.map(post => {
          return <PostCard title={post.title} subreddit={post.subreddit} />;
        })}
      </div>
    );
  }
}

export default PostCardContainer;
