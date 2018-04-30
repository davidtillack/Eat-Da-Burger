var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");

// Create all the routes
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  burger.selectAll(function(burgerData) {
    res.render("index", { burger_data: burgerData });
  });
});

router.post("/burgers/create", function(req, res) {
  burger.insertOne([req.body.burger_name], function() {
    res.redirect("/");
  });
});

router.put("/burgers/update", function(req, res) {
  burger.updateOne([req.body.burger_id], function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
