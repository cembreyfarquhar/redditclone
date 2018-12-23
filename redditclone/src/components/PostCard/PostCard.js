import React from 'react';
import "./postCard.css";

class PostCard extends React.Component {
    constructor() {
        super();
        this.state={};
    }
    render(){
        return (
            <div className="postCard">
                <h2>{this.props.title}</h2>
                <h3>{this.props.subreddit}</h3>
            </div>
        )
    }
}

export default PostCard;