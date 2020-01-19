import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/layout/nav/NavigationBar";
import Date from "./components/date/Date";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import NotFound from "./components/notfound/NotFound";

function App() {
  return (
    <div className='App'>
      <Date />
      <NavigationBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
