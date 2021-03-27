import React from "react";

const ShippingForm = ({ profile, auth, checkout }) => {
  return (
    <>
      <p><b>Name:</b> {profile.firstName + " " + profile.lastName}</p>
      <hr/>
      <p><b>Email:</b> {auth.email}</p>
      <hr/>
      <p><b>Contact number:</b> {profile.contact}</p>
      <hr/>
      <br/>
      <p><b>Total:</b> {checkout.total}</p>
    </>
  );
};

export default ShippingForm;
