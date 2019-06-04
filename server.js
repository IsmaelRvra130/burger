//Dependencies.
var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();
var bodyParser = require('body-parser')

//Serve static content for the app from "public" directory.
app.use(express.static("public"));

//Parse application body
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Import routes and give the server acess to them.
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

//Start our server to listen for client request
app.listen(PORT, function() {
    console.log("Server listening on : http://localhost:" + PORT);
});