import React, { useState } from "react";

import { connect } from "react-redux";
import {
  adjustQuantity,
  removeFromCart,
} from "../../../store/actions/shopActions";

const CartItem = ({ product, removeFromCart, adjustQuantity }) => {
  const [input, setInput] = useState(product.quantity);

  const handleChange = (e) => {
    setInput(parseInt(e.target.value));
    adjustQuantity(product.id, parseInt(e.target.value));
  };

  return (
    <div className="container">
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <label htmlFor="quantity">Qty</label>
      <input
        min="1"
        type="number"
        id="quantity"
        value={input}
        onChange={handleChange}
      />
      <button
        className="btn btn-primary btn-delete"
        onClick={() => removeFromCart(product.id)}
      >
        <i class="fas fa-trash"></i>
      </button>
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
