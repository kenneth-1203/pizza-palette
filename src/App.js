import React from "react";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Helmet } from "react-helmet";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/layout/navbar/Navbar";
import Router from "./components/router/Router";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <BrowserRouter>
        <div className="App">
          <Helmet>
            <title>Pizza Palette</title>
          </Helmet>
          <Navbar />
          <Router />
        </div>
      </BrowserRouter>
    </Elements>
  );
};

export default App;
