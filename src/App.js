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
        title: "Duas of the prophet",
        body: "This is the first post",
        author: "First post author"
      },
      {
        id: uuidv4(),
        title: "Etiqutte of Friday prayer",
        body: "This is the second post",
        author: "Second post author"
      },
      {
        id: uuidv4(),
        title: "If you were one of the three, what would you have said?",
        body: "This is the third post",
        author: "third post author"
      },
      {
        id: uuidv4(),
        title: "Preparation for Ramadan",
        body: "This is the second post",
        author: "Fourth post author"
      },
      {
        id: uuidv4(),
        title: "My Husband, my Jannah",
        body: "This is the fifth post",
        author: "Fifth post author"
      },
      {
        id: uuidv4(),
        title: "Shittu Saheed Adewale",
        body: "This is the sixth post",
        author: "Sixth post author"
      },
      {
        id: uuidv4(),
        title: "Last on the List",
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
