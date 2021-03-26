import React, { useState } from "react";

import { connect } from "react-redux";
import { Steps, Button } from "antd";

import ShippingForm from "./ShippingForm";
import PaymentForm from "./PaymentForm";
import SummaryForm from "./SummaryForm";

const CheckoutForm = ({ profile, auth }) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const { Step } = Steps;
  const steps = [
    {
      title: "Shipping",
      content: <ShippingForm profile={profile} auth={auth} />,
    },
    {
      title: "Payment",
      content: <PaymentForm />,
    },
    {
      title: "Summary",
      content: <SummaryForm profile={profile} auth={auth} />,
    },
  ];

  const handleSubmit = () => {

  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-12 col-lg-9 col-md-8 px-4">
          <Steps
            className="d-flex justify-content-between mb-3 steps checkout-form"
            current={current}
          >
            {steps.map((item) => (
              <Step className="steps-step" key={item.title} title={item.title} />
            ))}
          </Steps>
          {steps[current].content}
          <div className="steps-action">
            {current < steps.length - 1 && (
              <Button
                className="btn btn-primary"
                type="primary"
                onClick={() => next()}
              >
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                className="btn btn-primary"
                type="primary"
                onClick={() => handleSubmit()}
              >
                Done
              </Button>
            )}
            {current > 0 && (
              <Button
                className="btn btn-primary"
                style={{ margin: "0 8px" }}
                onClick={() => prev()}
              >
                Previous
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
    auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps)(CheckoutForm);
