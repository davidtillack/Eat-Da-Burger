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

router.post("/create", function(req, res) {
  burger.insertOne([req.body.burgerInput], function() {
    res.redirect("/");
  });
});

router.put("/update/:id", function(req, res) {
  burger.updateOne([req.body.devoured], [req, params.id], function() {
    res.redirect("/");
  });
});

router.delete("/delete/:id", function(req, res) {
  burger.deleteOne([req.params.id], function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
