import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/shopActions";

import spinner from "../../../assets/animated/spinner.svg";

class ProductCard extends Component {
  state = {
    isLoading: true,
    favorites: [],
  };

  handleLoad = () => this.setState({ isLoading: false });

  render() {
    const { product, products, addToCart } = this.props;

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
          <div className="d-flex align-items-end justify-content-between">
            <div>
              <button
                className="btn btn-secondary"
                onClick={() => addToCart(product.id, products)}
              >
                <i className="fas fa-shopping-bag"></i>
              </button>
              <button className="mx-2 btn btn-primary btn-like">
                <i className="far fa-heart"></i>
              </button>
            </div>
            <div>RM {product.price}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id, products) => dispatch(addToCart(id, products)),
  };
};

export default connect(null, mapDispatchToProps)(ProductCard);
