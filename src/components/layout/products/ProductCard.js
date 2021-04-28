import React, { Component } from "react";
import Aos from "aos";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../../firebase/actions/shopActions";
import { addToFav } from "../../firebase/actions/authActions";
import { isAdmin } from "../../firebase/actions/authActions";

import spinner from "../../../assets/svg/spinner.svg";

class ProductCard extends Component {
  state = {
    isLoading: true,
    admin: false,
  };

  async componentDidMount() {
    const admin = await isAdmin();
    this.setState({ admin });
    Aos.init({ duration: 700 });
  }

  handleLoad = () => this.setState({ isLoading: false });

  render() {
    const {
      profile,
      product,
      products,
      addToCart,
      addToFav,
      auth,
      history,
    } = this.props;

    const favorite =
      auth.uid && profile.favorites
        ? profile.favorites.some((fav) => fav === product.name)
        : false;

    return (
      <div className="mx-2 my-3 card" data-aos="fade-up">
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
                disabled={favorite}
                onClick={() =>
                  auth.uid ? addToFav(product) : history.push("/signin")
                }
              >
                <i className={`${favorite ? `fas` : `far`} fa-heart`}></i>
              </button>
            </div>
            <p>RM {product.price}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productID, products, userID) =>
      dispatch(addToCart(productID, products, userID)),
    addToFav: (product) => dispatch(addToFav(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
