var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

//Creating all the routes and seting up the logic within those routes
router.get("/", function(req, res) {
  res.redirect("/burger");
});

router.get("/burger", function(req, res) {
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
