import React, { Component } from "react";

import Toast from "react-bootstrap/Toast";
import { connect } from "react-redux";

class MenuNotifications extends Component {
  state = {
    onLoad: false,
    toast: false,
    count: 0,
    favorites: [],
    message: "",
    icon: "",
  };

  componentDidMount() {
    this.setState({ count: this.props.count, favorites: this.props.favorites });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.count !== this.props.count) this.cartToast(prevProps.count);
    if (
      prevProps.favorites &&
      prevProps.favorites.length !== this.props.favorites.length
    )
      this.favToast(prevProps.favorites.length);
  }

  cartToast = (count) => {
    if (count !== undefined && (this.props.count + 2) % (count + 2) === 1) {
      this.setState({
        toast: true,
        message: "Added to cart",
        icon: "fa-shopping-bag",
      });
      setTimeout(() => {
        this.setState({ toast: false });
      }, 2000);
    }
  };

  favToast = (count) => {
    if (
      count !== undefined &&
      (this.props.favorites.length + 2) % (count + 2) === 1
    ) {
      this.setState({
        toast: true,
        message: "Added to favorites",
        icon: "fa-heart",
      });
      setTimeout(() => {
        this.setState({ toast: false });
      }, 2000);
    }
  };

  render() {
    return (
      <div
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: "sticky",
          bottom: "0",
          right: "0",
          padding: "3em",
        }}
      >
        <Toast className={`notification my-2`} show={this.state.toast}>
          <Toast.Header>
            <i
              className={`notification-icon fas ${this.state.icon}`}
              style={{ marginRight: "1em" }}
            ></i>
            <strong className="float-start">{this.state.message}</strong>
          </Toast.Header>
          {/* <Toast.Body>See? Just like this.</Toast.Body> */}
        </Toast>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    count: state.shop.count,
    favorites: state.firebase.profile.favorites,
  };
};

export default connect(mapStateToProps)(MenuNotifications);
