import React, { Component } from "react";
import "./App.scss";
import NavBar from './components/NavBar/NavBar'
import TourList from './components/TourList/index'
class App extends Component {
  render() {
    return <React.Fragment>
      <NavBar />
      <TourList />
    </React.Fragment>;
  }
}

export default App;

