import React, { Component } from "react";

import Coupons from "./Coupons";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="jumbotron">
            <div className="d-flex justify-content-center">
              <Coupons />
            </div>
            <div className="d-flex justify-content-center">
              <div className="row">
                <div className="col-sm-12">
                  <Link to="/menu" className="btn btn-primary">
                    Take Away
                  </Link>
                  <Link to="/menu" className="btn btn-primary">
                    Delivery
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
