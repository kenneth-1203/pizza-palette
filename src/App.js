import React, { Component } from "react";

import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/layout/navbar/Navbar";
import Router from "./components/router/Router";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Router />
        </div>
      </BrowserRouter>
    );
  }
}