import React, { Component } from "react";

import { Link } from "react-router-dom";

import spinner from "../../../assets/animated/spinner.svg";

class ProductCard extends Component {
  state = {
    isLoading: true,
  };

  handleLoad = () => this.setState({ isLoading: false });

  render() {
    const { product } = this.props;

    return (
      <div className="my-3 card">
        <Link to={`/product/${product.id}`} key={product.id}>
          <img
            onLoad={this.handleLoad}
            src={this.state.isLoading ? spinner : product.image}
            className="card-img-top"
            alt="productImage"
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <div className="d-flex justify-content-between">
            <button className="btn btn-primary">Add to Cart</button>
            <button className="btn btn-primary">
              <i class="far fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
