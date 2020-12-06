const express = require("express");

const interests = require("../routes/interests");

const routes = (app) => {
    app.use(express.json());
    app.use("/api/v1/interests", interests);
};

module.exports = routes;