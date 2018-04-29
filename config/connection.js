var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  socketPath: "/tmp/mysql.sock",
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
