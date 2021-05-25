const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors")
const stripe = require("stripe")('sk_test_51Iuq0QH0CkHyoC7mlGYsu4w8Q2RCbZ1GxEDOdnVx0pyx1pwiqwa1Ht5gol8wDOjtkaetXc88gYPvgIcrDhfMciEC00U6tiWOzO')

// API

// App config
const app = express()

// Middlewares
app.use(cors({ origin: true }))
app.use(express.json())

// API routes
app.get('/', (request, response) => response.status(200).send
('hello world'))

// Listen command
exports.api = functions.https.onRequest(app)

// http://127.0.0.1:4000/logs?q=metadata.emulator.name%3D%22functions%22

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
