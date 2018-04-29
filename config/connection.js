var mysql = require("mysql");

var connection = mysql.createConnection({
  socketPath: "/tmp/mysql.sock",
  user: "root",
  password: "",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error in connecting: " + err.stack);
    return;
  }
  console.log("Success! You WIN");
});

module.exports = connection;
