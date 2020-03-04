import React, { Component } from 'react';

export default class Post extends Component {
  render() {
    return (
      <div>
        <h1>***{this.props.post.title}***</h1>
        <p>{this.props.post.body}</p>
        <p>{this.props.post.author}</p>
        <p>{this.props.post.id}</p>
      </div>
    )
  }
}
