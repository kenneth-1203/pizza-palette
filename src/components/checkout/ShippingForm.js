import React from "react";

const ShippingForm = ({ profile, auth }) => {
  return (
    <form className="checkout-form">
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
      </div>
    </form>
  );
};

export default ShippingForm;
