import React, { Component } from "react";

class PostsList extends Component {
  render() {
    return (
      <div className='PostsList'>
        <h3 className="display-4 text-center my-5">RECENT POSTS</h3>
        <div className="container">
          <div className="row">
            {this.props.posts.map(post => (
              <div className=" Dog col-lg-4 text-center" key={post.id}>
                
                <h2>{post.title.toUpperCase()}</h2>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PostsList;
