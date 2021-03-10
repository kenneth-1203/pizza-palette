import React, { Component } from "react";

import Coupons from "./Coupons";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1>Home</h1>
          <Coupons />
        </div>
      </div>
    );
  }
}
