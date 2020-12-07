const express = require("express");

const auth = require("../routes/auth");
const users = require("../routes/users");
const interests = require("../routes/interests");

const routes = (app) => {
  app.use(express.json());

  app.use("/api/v1/auth", auth);
  app.use("/api/v1/users", users);
  app.use("/api/v1/interests", interests);
};

module.exports = routes;
