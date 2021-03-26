import React from "react";

const ShippingForm = ({ profile, auth }) => {
  return (
    <form className="checkout-form checkout-summary">
      <p>Name: {profile.firstName + " " + profile.lastName}</p>
      <p>Email: {auth.email}</p>
      <p>Contact number: {profile.contact}</p>
    </form>
  );
};

export default ShippingForm;
