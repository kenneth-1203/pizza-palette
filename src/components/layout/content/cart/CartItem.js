import React, { useState } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  adjustQuantity,
  removeFromCart,
} from "../../../firebase/actions/shopActions";

const CartItem = ({ productData, removeFromCart, adjustQuantity, uid }) => {
  const [input, setInput] = useState(productData.quantity);

  const handleChange = (e) => {
    const adjType = e.target.value > input ? true : false;
    setInput(parseInt(e.target.value));
    adjustQuantity(productData.id, parseInt(e.target.value), adjType, uid);
  };
  return (
    <div className="d-flex">
      <div className="mx-auto col-12 cart-item">
        <div className="row">
          <div className="col-4 col-md-3 col-lg-3 col-xl-2">
            <div className="float-end card cart-img">
              <Link to={`product/${productData.id}`} key={productData.id}>
                <img
                  src={productData.image}
                  alt=""
                  className="cart-img-top"
                  style={{ borderRadius: "20px" }}
                />
              </Link>
            </div>
          </div>
          <div className="col-8 col-md-9 col-xl-10">
            <h5>{productData.name}</h5>
            <p className="cart-item-description">{productData.description}</p>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">RM {productData.price}</h5>
              <div className="">
                <label htmlFor="quantity">Qty</label>
                <input
                  className="cart-item-qty"
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  value={input}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-danger btn-delete"
                  onClick={() => removeFromCart(productData.id, uid)}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id, userID) => dispatch(removeFromCart(id, userID)),
    adjustQuantity: (id, value, adjType, userID) => dispatch(adjustQuantity(id, value, adjType, userID)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
