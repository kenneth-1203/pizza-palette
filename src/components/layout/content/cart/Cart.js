import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CartItem from "./CartItem";

const Cart = ({ auth, cart }) => {
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [initCart, setCart] = useState(null);

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
        <div className="checkout-footer mx-auto">
          <div className="row checkout-details">
            <div className="col-3">
              <div className="d-flex flex-column">
                <h5>Coupon Code:</h5>
                <form onSubmit={handleSubmit} className="mb-2">
                  <input type="text" className="form-control" />
                </form>
                {/* <small style={{ color: "#a01418" }}>Invalid coupon code!</small> */}
              </div>
            </div>
            <div className="col-1 px-5">
              <span className="vert-line"></span>
            </div>
            <div className="col-4">
              <div className="d-flex justify-content-between">
                <div>
                  <h5>In Bag:</h5>
                  <h5>Subtotal:</h5>
                  <h5>Discount:</h5>
                  <h5>Rounding:</h5>
                  <h5>Total:</h5>
                </div>
                <div className="checkout-value">
                  <h5>{totalItems}</h5>
                  <h5>RM {subtotal}</h5>
                  <h5>RM 0</h5>
                  <h5>RM {(total - subtotal).toFixed(2)}</h5>
                  <h5>RM {total}</h5>
                </div>
              </div>
            </div>
            <div className="col-1 px-5">
              <span className="vert-line"></span>
            </div>
            <div className="col-3 my-auto">
              <Link to="/menu" className="btn checkout-btn my-2">
                Continue Shopping
              </Link>
              <button className="btn checkout-btn my-2">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
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
