import React, { Component } from "react";

import { connect } from 'react-redux';

import ProductList from '../../layout/products/ProductList';

class Cart extends Component {
  render() {
    console.log(this.props);
    const { products } = this.props;
    return (
      <div>
        <div className="container">
          <h1>Cart</h1>
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

export default connect(mapStateToProps)(Cart);