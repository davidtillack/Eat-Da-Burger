var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  socketPath: "mysql-socket-path",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error in connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
