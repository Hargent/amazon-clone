/* eslint-disable spaced-comment */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
("sk_test_51KaxcTDN48fJO0vuBWTlGeBJ3GFRgiTRrFVKxfIQlogkcBc5b79lflnXW7b0tshQuHeQb7NHEVRj6r9KFJs0tIhA000NZQk6eN");


//API

//APP config
const app = express();

//Middleware
app.use(cors({origin: true}));
app.use(express.json());

//API routes
app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("/payments/create", async ((req, res) => {
    const total = req.query.total;
    console.log("Payment request received is : ", total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,//sub units
        currency: "USD",
    });
    //ok - created
    res.status(201).send({
        clientSecret : paymentIntent.client_secret});
}));
//API listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/clone-2bf0a/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// }) ;
