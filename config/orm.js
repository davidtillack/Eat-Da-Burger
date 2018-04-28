var connection = require("./connection.js");

var orm = {
  selectAll: function(table, response) {
    const queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.log(result);
      response(result);
    });
  },

  insertOne: function(table, column, input, response) {
    const queryString =
      "INSERT INTO " + table + "(" + column.toString() + ") VALUES (?);";
    connection.query(queryString, [input], function(err, data) {
      if (err) throw err;
      console.log(data);
      response(data);
    });
  },

  updateOne: function(
    table,
    column,
    value,
    condition,
    conditionValue,
    response
  ) {
    const queryString =
      "UPDATE " +
      table +
      " SET " +
      column +
      "=?" +
      " WHERE " +
      condition +
      "=?;";
    connection.query(queryString, [value, conditionValue], function(err, data) {
      if (err) throw err;
      response(data);
    });
  },

  deleteOne: function(table, condition, conditionValue, response) {
    var queryString = "DELETE FROM " + table + " WHERE " + condition + "=?;";
    connection.query(queryString, [conditionValue], function(err, data) {
      if (err) throw err;
      response(data);
    });
  }
};

module.exports = orm;
