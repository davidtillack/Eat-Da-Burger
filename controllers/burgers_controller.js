var express = require("express");

var router = express();

// Import the model to use its database functions.
var burger = require("../models/burger.js");

// Create all the routes
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var burgObject = {
      burgers: data
    };
    console.log(burgObject);
    res.render("index", burgObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.name, false],
    function(result) {
      res.json({ ID: result.insertID });
    }
  );
});

router.put("/api/burgers/:ID", function(req, res) {
  var inputID = "ID: " + req.params.ID;
  console.log(inputID);
  burger.updateOne(
    {
      devoured: req.body.devoured
    },
    inputID,
    function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
