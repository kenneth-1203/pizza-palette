import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import CartItem from "./CartItem";

const Cart = ({ auth }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;
    let cart = JSON.parse(window.sessionStorage.getItem(auth.uid))
      ? JSON.parse(window.sessionStorage.getItem(auth.uid))
      : [];

    cart.forEach((item) => {
      items += item.quantity;
      price += item.quantity * item.price;
    });

    setTotalPrice(price);
    setTotalItems(items);
  }, [auth, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div className="container">
      {JSON.parse(window.sessionStorage.getItem(auth.uid)) &&
      JSON.parse(window.sessionStorage.getItem(auth.uid)).length ? (
        JSON.parse(window.sessionStorage.getItem(auth.uid)).map((product) => {
          return (
            <CartItem key={product.id} productData={product} uid={auth.uid} />
          );
        })
      ) : ( auth.uid ? 
        <h5>Cart is empty.</h5> : <h5>Sign in to start shopping now!</h5>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Cart);
