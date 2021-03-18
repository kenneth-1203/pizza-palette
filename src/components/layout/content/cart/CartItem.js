import React, { useState } from "react";

import { connect } from "react-redux";
import {
  adjustQuantity,
  removeFromCart,
} from "../../../store/actions/shopActions";

const CartItem = ({ productData, removeFromCart, adjustQuantity }) => {
  const [input, setInput] = useState(productData.quantity);

  const handleChange = (e) => {
    if (e.target.value > 0) {
      const adjType = e.target.value > input ? true : false;
      setInput(parseInt(e.target.value));
      adjustQuantity(productData.id, parseInt(e.target.value), adjType);
    } else {
      removeFromCart(productData.id);
    }
  };

  return (
    <div className="d-flex">
      <div className="col-sm-8 cart-item">
        <div className="row">
          <div className="col-4 col-md-3 col-lg-3 col-xl-2">
            <div className="float-end card cart-img">
              <img
                src={productData.image}
                alt=""
                className="cart-img-top"
                style={{ borderRadius: "20px" }}
              />
            </div>
          </div>
          <div className="col-8 col-md-9 col-xl-10">
            <h5>{productData.name}</h5>
            <p className="cart-item-description">{productData.description}</p>
            <div className="d-flex justify-content-between align-items-center">
              <p className="m-0">RM {productData.price}</p>
              <div className="">
                <label htmlFor="quantity">Qty</label>
                <input
                  className="cart-item-qty"
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={input}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-primary btn-delete"
                  onClick={() => removeFromCart(productData.id)}
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
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQuantity: (id, value) => dispatch(adjustQuantity(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
