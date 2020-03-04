import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import {v4 as uuidv4} from 'uuid';
import "./App.css";
import NavigationBar from "./components/layout/nav/NavigationBar";
import Date from "./components/date/Date";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import NotFound from "./components/notfound/NotFound";
import PostsList from "./components/posts/PostsList";
import Post from "./components/posts/Post";

class App extends Component {
  static defaultProps = {
    posts: [
      {
        id: uuidv4(),
        title: "Dua of the prophet",
        body: "This is the first post",
        author: "First post author"
      },
      {
        id: uuidv4(),
        title: "Second post",
        body: "This is the second post",
        author: "Second post author"
      },
      {
        id: uuidv4(),
        title: "third",
        body: "This is the third post",
        author: "third post author"
      },
      {
        id: uuidv4(),
        title: "Fourth post",
        body: "This is the second post",
        author: "Fourth post author"
      },
      {
        id: uuidv4(),
        title: "Fifth",
        body: "This is the fifth post",
        author: "Fifth post author"
      },
      {
        id: uuidv4(),
        title: "Sixth post",
        body: "This is the sixth post",
        author: "Sixth post author"
      }
    ]
  };
  render() {
    const getPost = props => {
      let title = props.match.params.title;
      let currentPost = this.props.posts.find(
        post => post.title.toLowerCase() === title.toLowerCase()
      );
      return <Post {...props} post={currentPost} />;
    };
    return (
      <div className='App'>
        <Date />
        <NavigationBar />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route
            exact
            path='/posts'
            render={() => <PostsList posts={this.props.posts} />}
          />
          <Route exact path='/posts/:title' render={getPost} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
