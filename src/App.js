import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Search from "./components/pages/Search";
import Discover from "./components/pages/Discover";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/discover" component={Discover} />
      </div>
    </Router>
  );
}

export default App;
