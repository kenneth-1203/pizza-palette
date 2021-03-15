import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import CartItem from "./CartItem";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      item += item.quantity;
      price += item.quantity * item.price;
    });
    
    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  console.log(cart)

  return (
    <div>
      <div className="container">
        <h1>Cart</h1>
        {cart &&
          cart.map((product) => {
            return <CartItem key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
