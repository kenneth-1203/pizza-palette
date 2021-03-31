const path = require('path');
const express = require("express");
const app = express();
require("dotenv").config();
const stripe = require("stripe")(process.env.REACT_APP_SECRET_KEY);
const bodyParser = require("body-parser");
const cors = require("cors");
const publicPath = path.join(__dirname, '/public');

app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post("/payment", cors(), async (req, res) => {
  let { amount, id, description, receipt_email } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "myr",
      description,
      payment_method: id,
      receipt_email,
      confirm: true,
    });
    console.log("Payment", payment);
    res.json({
      message: "Payment successful!",
      success: true,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment failed!",
      success: false,
    });
  }
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(publicPath, 'index.html'));
// });

app.get("/", (req, res) => {
  res.send("Hello world");
})

app.listen(process.env.PORT || 4000, () => {
  console.log("Server is listening on port 4000");
});
