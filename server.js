const path = require('path');
const express = require("express");
const app = express();
require("dotenv").config();
const stripe = require("stripe")(process.env.REACT_APP_SECRET_KEY);
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post("/payment", cors(), async (req, res) => {
  let { amount, id } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "myr",
      payment_method: id,
      confirm: true,
    });
    console.log("Payment", payment);
    res.json({
      message: "Payment successful!",
      success: true,
      paymentData: payment
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment failed!",
      success: false,
    });
  }
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+ '/build/index.html'));
});

app.listen(process.env.PORT || 4000, () => {
  console.log("Server is listening on port 4000");
});
