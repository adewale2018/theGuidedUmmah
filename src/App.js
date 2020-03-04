import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import NavigationBar from "./components/layout/nav/NavigationBar";
import Date from "./components/date/Date";
import Routes from "./components/routes/Routes";

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
    return (
      <div>
        <Date />
        <NavigationBar />
        <Routes posts={this.props.posts} />
      </div>
    );
  }
}

export default App;
