import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../../firebase/actions/shopActions";
import { addToFav } from "../../firebase/actions/authActions";
import { isAdmin } from "../../firebase/actions/authActions";

import spinner from "../../../assets/animated/spinner.svg";

class ProductCard extends Component {
  state = {
    isLoading: true,
    favorites: [],
    admin: false
  };

  async componentDidMount() {
    const admin = await isAdmin();
    this.setState({ admin });
  }

  handleLoad = () => this.setState({ isLoading: false });

  render() {
    const {
      product,
      products,
      addToCart,
      addToFav,
      auth,
      history,
    } = this.props;

    return (
      <div className="mx-2 my-3 card">
        <Link to={`/product/${product.id}`} key={product.id}>
          <img
            onLoad={this.handleLoad}
            src={this.state.isLoading ? spinner : product.image}
            className="card-img-top"
            alt="productImage"
          />
        </Link>
        <div className="card-body">
          <Link to={`/product/${product.id}`} key={product.id}>
            <h5 className="card-title">{product.name}</h5>
          </Link>
          <div className="d-flex align-items-end justify-content-between">
            <div>
              <button
                className="btn btn-light cart-hover"
                data-toggle="tooltip"
                data-placement="top"
                title="Add to cart"
                disabled={this.state.admin}
                onClick={() =>
                  auth.uid
                    ? addToCart(product.id, products, auth.uid)
                    : history.push("/signin")
                }
              >
                <i className="fas fa-shopping-bag"></i>
              </button>
              <button
                className="mx-2 btn btn-danger btn-like"
                data-toggle="tooltip"
                data-placement="top"
                title="Add to favorites"
                disabled={this.state.admin}
                onClick={() =>
                  auth.uid ? addToFav(product) : history.push("/signin")
                }
              >
                <i className="far fa-heart"></i>
              </button>
            </div>
            <p>RM {product.price}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productID, products, userID) =>
      dispatch(addToCart(productID, products, userID)),
    addToFav: (product) => dispatch(addToFav(product)),
  };
};

export default connect(null, mapDispatchToProps)(ProductCard);
