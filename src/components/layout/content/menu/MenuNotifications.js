import React from "react";

import Toast from "react-bootstrap/Toast";
import { connect } from "react-redux";

const MenuNotifications = ({ cart }) => {
  return cart && cart.length
    ? cart.map((item) => {
        return (
          <Toast key={item.id} className="menu-notification">
            <Toast.Header>
              <strong className="float-start mr-auto">Added to cart</strong>
            </Toast.Header>
            {/* <Toast.Body>See? Just like this.</Toast.Body> */}
          </Toast>
        );
      })
    : null;
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(MenuNotifications);
