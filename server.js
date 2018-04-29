// NPM packages
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var path = require("path");

// Basic properties for express server
var app = express();

// BodyParser makes it easy for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Routing files
router = require("./controllers/burgers_controller");
app.use(router);

//Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static(__dirname + "/public"));

// Listener
app.listen(process.env.PORT || 8080, function() {
  console.log("App listening on PORT: " + process.env.PORT || 8080);
});
