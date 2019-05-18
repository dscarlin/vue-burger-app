// Dependencies
var express = require("express");
var db = require('./models')

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/dist"));
}

// Import routes and give the server access to them.
require("./controllers/burgersController.js")(app);



db.sequelize.sync({force: true}).then(() =>
  app.listen(PORT, () =>
    console.log("Listening on port:%s", PORT)
  )
);