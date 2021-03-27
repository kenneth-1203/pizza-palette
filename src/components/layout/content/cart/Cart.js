import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getTotal } from "../../../firebase/actions/shopActions";

import CartItem from "./CartItem";

const Cart = ({ auth, cart, getTotal }) => {
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
        <div
          className="mx-auto checkout-footer"
          onMouseOver={() => setMouseOver(true)}
          onMouseOut={() => setMouseOver(false)}
          style={mouseOver ? { height: "calc(10em + 5vw)" } : null}
        >
          <h3 className="p-2" style={ mouseOver ? { display: "none" } : null }>Checkout</h3>
          <div className="row checkout-details">
            <div className="col-2">
              <div className="d-flex flex-column">
                <h5>Coupon Code:</h5>
                <form onSubmit={handleSubmit} className="mb-2">
                  <input type="text" className="form-control mb-3" />
                  <button className="btn checkout-btn">Apply</button>
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
            <div className="col-4 my-auto">
              <Link to="/menu" className="btn checkout-btn my-2">
                Continue Shopping
              </Link>
              <Link to="/checkout" className="btn checkout-btn my-2" onClick={() => getTotal(subtotal, total)}>
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTotal: (subtotal, total) => dispatch(getTotal(subtotal, total))
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
