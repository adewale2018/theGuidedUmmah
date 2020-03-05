import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import PostsList from "./../posts/PostsList";
import Home from "./../home/Home";
import About from "./../about/About";
import Contact from "./../contact/Contact";
import NotFound from "./../notfound/NotFound";
import Post from "./../posts/Post";

class Routes extends Component {
  render() {
    const getPost = props => {
      let postId = props.match.params.id;
      let currentPost = this.props.posts.find(
        post => post.id === postId
      );
      return <Post {...props} post={currentPost} />;
    };
    return (
      <Switch>
        <Route exact path='/' render={() => < Home posts={this.props.posts} />} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route
          exact
          path='/posts'
          render={() => <PostsList posts={this.props.posts} />}
        />
        <Route exact path='/posts/:id' render={getPost} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Routes;
