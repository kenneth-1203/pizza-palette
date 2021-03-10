import React, { Component } from "react";

import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import ProductList from "../products/ProductList";

class Menu extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        <div className="container">
          <h1>Menu</h1>
          { products ? (
            <ProductList products={products} />
          ) : (
            <h1>Loading...</h1>
          ) }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.firestore.ordered.products,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "products" }])
)(Menu);
