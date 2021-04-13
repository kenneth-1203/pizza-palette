import React, { useState, useEffect } from "react";
import Aos from "aos";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { clearCart } from "../firebase/actions/shopActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.png";

import axios from "axios";

const CheckoutForm = ({ profile, auth, checkout, clearCart }) => {
  const [success, setSuccess] = useState(false);
  const [loadingPayment, setLoadingPayment] = useState(false);
  const [paymentData, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, [])

  const cardElementOptions = {
    style: {
      base: {
        color: "#fff",
        "::placeholder": {
          color: "rgba(255, 255, 255, .5)",
        },
      },
      invalid: {
        color: "#a01418",
        iconColor: "#a01418",
      },
    },
    hidePostalCode: true,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setLoadingPayment(true);
    const billingDetails = {
      address: {
        city: e.target.city.value,
        country: "MY",
        line1: e.target.billAddress.value,
        postal_code: e.target.zip.value,
        state: e.target.state.value,
      },
      email: auth.email,
      name: e.target.cardholder.value,
      phone: profile.contact,
    };

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: billingDetails,
    });

    if (!error) {
      try {
        const amount = Math.ceil(checkout.total * 100);
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:4000/payment", {
          amount,
          id,
        });

        if (response.data.success) {
          console.log("Payment successful!");
          clearCart(auth.uid);
          setData(response.data.paymentData.charges.data[0]);
          setLoadingPayment(false);
          setSuccess(true);
        }
      } catch (error) {
        setLoadingPayment(false);
        setErrorMessage(
          "An error occured during payment. Please try again later."
        );
      }
    } else {
      console.log("fired");
      setLoadingPayment(false);
      setErrorMessage(error.message);
      console.log(error.message);
    }
  };

  const spinner = <div className="mx-3 spinner-border" role="status"></div>;
  console.log(checkout);
  return (
    <div className="container">
      {!success ? (
        <div className="checkout-form" data-aos="fade-up">
          <h1>
            <i className="fas fa-credit-card fa-sm"></i>&nbsp; Checkout
          </h1>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-sm-6">
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    value={profile.firstName}
                    disabled
                  ></input>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    value={profile.lastName}
                    disabled
                  ></input>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={auth.email}
                    disabled
                  ></input>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb-3">
                  <label htmlFor="contact" className="form-label">
                    Contact number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="contact"
                    value={profile.contact}
                    disabled
                  ></input>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                value={profile.address}
                disabled
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="cardholder" className="form-label">
                Name on card
              </label>
              <input
                type="text"
                className="form-control"
                id="cardholder"
                required
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="billAddress" className="form-label">
                Billing address
              </label>
              <input
                type="text"
                className="form-control"
                id="billAddress"
                required
              ></input>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="mb-3">
                  <label htmlFor="city" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    required
                  ></input>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="mb-3">
                  <label htmlFor="state" className="form-label">
                    State
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="state"
                    required
                  ></input>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="mb-3">
                  <label htmlFor="zip" className="form-label">
                    ZIP
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    maxLength="5"
                    id="zip"
                    required
                  ></input>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between my-3 checkout-total">
              <div className="float-start">
                <h5>Total:</h5>
              </div>
              <div className="float-end">
                <h5>RM {checkout.total}</h5>
              </div>
            </div>
            <CardElement className="my-3" options={cardElementOptions} />
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              ></input>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Save card information
              </label>
            </div>
            {errorMessage ? (
              <small className="error-message">{errorMessage}</small>
            ) : null}
            <button className="m-2 btn btn-primary" disabled={loadingPayment}>
              Pay
            </button>
            {loadingPayment ? spinner : null}
          </form>
        </div>
      ) : (
        <div data-aos="fade-up">
          <div className="mx-auto" style={{ width: "80%" }}>
            <h1>
              <i className="fas fa-check fa-sm" style={{ color: "green" }}></i>
              &nbsp; Thank You!
            </h1>
            <label>
              Payment successful! Your order is being prepared and on it's way
              to you.
            </label>
          </div>
          <form className="my-3 checkout-form">
            <div className="d-flex justify-content-between">
              <div className="d-flex float-start">
                <i className="fas fa-file-invoice-dollar fa-2x"></i>
                <h3 className="px-3">Receipt:</h3>
                <h3 className="checkout-receipt-url">
                  <a href={paymentData.receipt_url}>{paymentData.created}</a>
                </h3>
              </div>
              <img
                className="float-end"
                src={Logo}
                style={{
                  height: "calc(1em + 2vw)",
                  filter: "drop-shadow(0 0 3px rgba(0,0,0,.5))",
                }}
                alt=""
              />
            </div>
            <hr />
            <p>
              <b>Name:</b>&nbsp; {profile.firstName + " " + profile.lastName}
            </p>
            <hr />
            <p>
              <b>Email:</b>&nbsp; {auth.email}
            </p>
            <hr />
            <p>
              <b>Contact number:</b>&nbsp; {profile.contact}
            </p>
            <hr />
            <p>
              <b>Address:</b>&nbsp; {profile.address}
            </p>
            <hr />
            {checkout.items
              ? checkout.items.map((item, index) => {
                  return (
                    <div
                      key={item.id}
                      className="d-flex justify-content-between"
                    >
                      <div className="float-start">
                        <p>
                          <b>{`${index + 1}. `}</b>&nbsp;{" "}
                          {`${item.name}${
                            item.quantity > 1 ? ` \t x \t ${item.quantity}` : ""
                          }`}
                        </p>
                      </div>
                      <div className="float-end">
                        <p>RM {item.quantity * item.price}</p>
                      </div>
                    </div>
                  );
                })
              : null}
            <div className="d-flex justify-content-between">
              <p className="float-start">
                <b>Delivery:</b>
                <br />
                <b>Total:</b>
              </p>
              <div className="float-end">
                <p>
                  RM {checkout.delivery}
                  <br />
                  RM {checkout.total}
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <Link to="/">
                <button className="btn btn-primary">OK</button>
              </Link>
              <label className="d-flex mt-1 mx-2 align-items-center checkout-status">
                PAID
              </label>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
    auth: state.firebase.auth,
    checkout: state.shop.checkout,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: (uid) => dispatch(clearCart(uid)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm);
