import React from "react";

import { CardElement } from "@stripe/react-stripe-js";

const ShippingForm = () => {
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

  return (
    <form className="checkout-form">
      <div className="mb-3">
        <label htmlFor="cardholder" className="form-label">
          Name on card
        </label>
        <input
          type="text"
          className="form-control"
          id="cardholder"
          disabled
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="billAddress" className="form-label">
          Billing address
        </label>
        <input type="text" className="form-control" id="billAddress"></input>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="mb-3">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input type="text" className="form-control" id="city"></input>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="mb-3">
            <label htmlFor="state" className="form-label">
              State
            </label>
            <input type="text" className="form-control" id="state"></input>
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
            ></input>
          </div>
        </div>
      </div>
      <CardElement options={cardElementOptions} />
      <div className="form-check pt-3">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        ></input>
        <label className="form-check-label" for="flexCheckDefault">
          Save card information
        </label>
      </div>
    </form>
  );
};

export default ShippingForm;
