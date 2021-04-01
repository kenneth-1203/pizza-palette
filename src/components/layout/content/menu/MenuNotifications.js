import React, { Component } from "react";

import Toast from "react-bootstrap/Toast";
import { connect } from "react-redux";

class MenuNotifications extends Component {
  state = {
    onLoad: false,
    toast: false,
    count: 0,
  };

  componentDidMount() {
    this.setState({ count: this.props.count });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.count !== this.props.count) this.setToast(prevProps.count);
  }

  setToast = (count) => {
    if (count !== undefined && (this.props.count - 2) === count - 1) {
      this.setState({ toast: true });
      setTimeout(() => {
        this.setState({ toast: false });
      }, 2000);
    }
  };

  render() {
    return (
      <Toast className="menu-notification my-2" show={this.state.toast}>
        <Toast.Header>
          <i className="fas fa-shopping-bag" style={{ marginRight: "1em" }}></i>
          <strong className="float-start">Added to cart</strong>
        </Toast.Header>
        {/* <Toast.Body>See? Just like this.</Toast.Body> */}
      </Toast>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    count: state.shop.count,
  };
};

export default connect(mapStateToProps)(MenuNotifications);
