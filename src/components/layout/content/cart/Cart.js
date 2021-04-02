import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getTotal } from "../../../firebase/actions/shopActions";

import CartItem from "./CartItem";

const Cart = ({ auth, getTotal, cart }) => {
  const [subtotal, setSubtotal] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [initCart, setCart] = useState(null);
  const [mouseOver, setMouseOver] = useState(false);

  useEffect(() => {
    let items = 0;
    let price = 0;
    let deliveryFee = 5;
    let initCart = JSON.parse(window.sessionStorage.getItem(auth.uid))
      ? JSON.parse(window.sessionStorage.getItem(auth.uid))
      : [];

    initCart.forEach((item) => {
      items += item.quantity;
      price += item.quantity * item.price;
    });

    setCart(initCart);
    setSubtotal(((price * 100) / 100).toFixed(2));
    setDelivery(deliveryFee.toFixed(2));
    setTotal((deliveryFee + (price * 100) / 100).toFixed(2));
    setTotalItems(items);
  }, [cart, auth, subtotal, totalItems, setSubtotal, setTotalItems]);

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
          <div className="text-center">
            <i className="far fa-frown-open fa-10x py-5" style={{ color: "rgba(255,255,255,.3)" }}></i>
            <h3 style={{ color: "rgba(255,255,255,.3)" }}>Cart is empty.</h3>
          </div>
        ) : (
          <div className="text-center">
          <i className="fas fa-user-circle fa-10x py-5"  style={{ color: "rgba(255,255,255,.3)" }}></i>
          <h3  style={{ color: "rgba(255,255,255,.3)" }}>Sign in to shop now.</h3>
          </div>
        )}
      </div>
      {initCart && initCart.length ? (
        <div
          className="mx-auto checkout-footer"
          onMouseOver={() => setMouseOver(true)}
          onMouseOut={() => setMouseOver(false)}
          style={mouseOver ? { height: "calc(17em - 2vw)" } : null}
        >
          <h3 className="px-4 pt-3">Summary</h3>
          <hr/>
          <div className="row checkout-details">
            <div className="col-12 col-md-8">
              <div className="d-flex justify-content-between">
                <div>
                  <h5>In Bag:</h5>
                  <h5>Subtotal:</h5>
                  <h5>Delivery:</h5>
                  <h5>Total:</h5>
                </div>
                <div className="checkout-value">
                  <h5>{totalItems}</h5>
                  <h5>RM {subtotal}</h5>
                  <h5>RM {delivery}</h5>
                  <h5>RM {total}</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="d-flex justify-content-center">
                <Link to="/menu" className="btn text-wrap checkout-btn my-2">
                  Add More
                </Link>
                <Link
                  to="/checkout"
                  className="btn text-wrap checkout-btn my-2"
                  onClick={() => getTotal(subtotal, total, delivery)}
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTotal: (subtotal, total, delivery) =>
      dispatch(getTotal(subtotal, total, delivery)),
  };
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
