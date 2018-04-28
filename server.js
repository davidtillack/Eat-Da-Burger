// NPM packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Basic properties for express server
var app = express();
var PORT = process.env.PORT || 8080;

// BodyParser makes it easy for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Routing files
controllers = require("./controllers/burgers_controller.js");

app.use(controllers);

//Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("app/public"));

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
