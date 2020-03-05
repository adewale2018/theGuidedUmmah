import React, { Component } from "react";
import { Link } from "react-router-dom";
import './PostsTitles.css';

export default class PostsTitles extends Component {
  render() {
    return (
      <div className="PostsTitles">
        <h2 className="card-title"> RECENT POSTS</h2>
        {this.props.posts.map(post => (
          <ul key={post.id} className="list-group list-group-flush">
            <li className="list-group-item">
              <Link to={`/posts/${post.id}`} className="titles">{post.title}</Link>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}
