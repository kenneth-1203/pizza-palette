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
    <div className="mx-auto col-12 cart-item">
      <Link
        className="float-start card cart-img"
        to={`product/${productData.id}`}
        key={productData.id}
      >
        <img
          src={productData.image}
          alt=""
          className="cart-img-top"
          style={{ borderRadius: "20px" }}
        />
      </Link>
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
            data-toggle="tooltip"
            data-placement="top"
            title="Remove from cart"
            onClick={() => removeFromCart(productData.id, uid)}
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id, userID) => dispatch(removeFromCart(id, userID)),
    adjustQuantity: (id, value, adjType, userID) =>
      dispatch(adjustQuantity(id, value, adjType, userID)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
