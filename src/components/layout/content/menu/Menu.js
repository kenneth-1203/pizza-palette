import React, { Component } from "react";

import Skeleton from "@yisheng90/react-loading";

import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import ProductList from "../../products/ProductList";

class Menu extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-evenly">
            {products ? (
              <ProductList products={products} />
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  width: "80%",
                  height: "10rem",
                  marginLeft: "20px",
                }}
              >
                <Skeleton color="transparent" rows={10} />
              </div>
            )}
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
