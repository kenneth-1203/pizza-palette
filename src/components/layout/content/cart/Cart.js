import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CartItem from "./CartItem";

const Cart = ({ auth, cart }) => {
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [initCart, setCart] = useState(null);
  const [mouseOver, setMouseOver] = useState(false);

  useEffect(() => {
    let items = 0;
    let price = 0;
    let initCart = JSON.parse(window.sessionStorage.getItem(auth.uid))
      ? JSON.parse(window.sessionStorage.getItem(auth.uid))
      : [];

    initCart.forEach((item) => {
      items += item.quantity;
      price += item.quantity * item.price;
    });

    setCart(initCart);
    setSubtotal((Math.round(price * 100) / 100).toFixed(2));
    setTotal((Math.floor(price * 10) / 10).toFixed(2));
    setTotalItems(items);
  }, [cart, auth, subtotal, totalItems, setSubtotal, setTotalItems]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <React.Fragment>
      <div className="container cart-body px-0">
        {initCart && initCart.length ? (
          initCart.map((product) => {
            return (
              <CartItem key={product.id} productData={product} uid={auth.uid} />
            );
          })
        ) : auth.uid ? (
          <h5>Cart is empty.</h5>
        ) : (
          <h5>Sign in to start shopping now!</h5>
        )}
      </div>
      {initCart && initCart.length ? (
        // Recreate checkout footer
        null
      ) : null}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Cart);
