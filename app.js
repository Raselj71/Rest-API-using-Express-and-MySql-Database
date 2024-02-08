const express = require("express");
const app = express();
const userRoute = require("./Route/user.route");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

app.use(userRoute);
module.exports = app;
