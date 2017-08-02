//DEPENDENCIES
var express = require("express");

var bodyParser = require("body-parser");

//EXPRESS CONFIGURATION

//Tells node we are creating an express server
var app = express();

//Sets an initial Port
var PORT = process.env.PORT || 8080;

//Body-Parser make it possible for the server to interprete code sent to it
app.use(bodyParser.json());
app.use(bodyParser.urlEncoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//ROUTER
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//LISTENER
app.listen(PORT, function() {
	console.log("App is listening on PORT: " + PORT);
});



