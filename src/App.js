import React from "react";
import { Helmet } from "react-helmet";

import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/layout/navbar/Navbar";
import Router from "./components/router/Router";

export default class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Helmet>
            <title>Pizza Palette</title>
          </Helmet>
          <Navbar />
          <Router />
        </div>
      </BrowserRouter>
    );
  }
}
