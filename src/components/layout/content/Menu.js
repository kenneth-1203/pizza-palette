import React, { Component } from "react";

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import ProductList from '../products/ProductList';

class Menu extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        <div className="container">
          <h1>Menu</h1>
          <ProductList products={products} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.product.products
  }
}

export default connect(mapStateToProps)(Menu);