import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PostsList.css";

class PostsList extends Component {
  render() {
    return (
      <div className='PostsList'>
        <h3 className='display-4 text-center my-5'>READ, DIGEST AND SHARE</h3>
        <div className='container'>
          <div className='row'>
            {this.props.posts.map(post => (
              <div
                className='PostsList-post col-lg-4 text-center'
                key={post.id}
              >
                <h2>{post.title.toUpperCase()}</h2>
                <p>{post.body}</p>
                <Link to={`/posts/${post.id}`}>Continue Reading</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PostsList;
