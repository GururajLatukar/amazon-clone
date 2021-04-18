const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HgXZRGtgQmnWukteULlPGRZO4U65R7iHRI3JsorzSWstxJcHRyHh4o1MZ4rV3adaoXEQ8EgwKgKRiY3PNe4O24o00abULKuan"
);

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (req, res) => {
  res.status(200).send("hello test");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment Request of ", total);
  let address = {
    line1: "510 Townsend St",
    postal_code: "98140",
    city: "San Francisco",
    state: "CA",
    country: "US",
  };

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "INR"
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);
