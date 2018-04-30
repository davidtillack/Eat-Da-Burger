var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db",
  socketPath: "/var/run/mysql/mysql.sock"
});

console.log({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_SECRET,
  database: process.env.MYSQL_DB
});

connection.connect(function(err) {
  if (err) {
    console.error("error in connecting: " + err.stack);
    return;
  }
  console.log("Success! You WIN");
});

module.exports = connection;
