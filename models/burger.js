// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(response) {
    orm.selectAll("burger", function(res) {
      response(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(value, response) {
    orm.insertOne("burger", "burger_name", value, function(res) {
      response(res);
    });
  },
  updateOne: function(objColVals, condition, response) {
    orm.updateOne("burger", "devoured", objColVals, "id", condition, function(
      res
    ) {
      response(res);
    });
  },
  deleteOne: function(condition, response) {
    orm.deleteOne("burger", "id", condition, function(res) {
      response(res);
    });
  }
};

// Export the database functions for the controller
module.exports = burger;
