const express = require("express");
const {
  homeRoute,
  insertRoute,
  singleData,
  deleteData,
  updateData,
} = require("../Controllers/userControl");
const route = express.Router();

route.get("/user", homeRoute);

route.post("/user", insertRoute);
route.get("/user/:id", singleData);
route.delete("/user/:id", deleteData);
route.put("/user/:id", updateData);

module.exports = route;
