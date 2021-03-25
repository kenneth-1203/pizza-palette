import React from "react";

import Skeleton from "@yisheng90/react-loading";

import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import ProductList from "../../products/ProductList";

const Menu = ({ products, auth, history }) => {
  return (
    <div>
      <div className="container pt-2">
        <div className="d-flex flex-wrap justify-content-evenly">
          {products ? (
            <ProductList products={products} auth={auth} history={history} />
          ) : (
            <Skeleton
              className="mx-2 my-3 skeleton"
              style={{ height: "298px", width: "15rem", borderRadius: "20px" }}
              color="rgba(255,255,255,.3)"
              rows={4}
              translucent
            />
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.firestore.ordered.products,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "products" }])
)(Menu);
