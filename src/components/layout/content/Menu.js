import React, { Component } from "react";

import Skeleton from '@yisheng90/react-loading';

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
          <div className="d-flex flex-wrap justify-content-evenly">
            {products ? <ProductList products={products} /> : <Skeleton />}
          </div>
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
