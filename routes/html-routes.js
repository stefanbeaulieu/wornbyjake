// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads home.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/../views/test.html"));
  });

  // cms route loads login.html
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname + "/../views/login.html"));
  });

  // blog route loads page3.html (route will need to be renamed)
  app.get("/search", function(req, res) {
    res.sendFile(path.join(__dirname + "../../views/search.html"));
  });

  // authors route loads page4.html (route will need to be renamed)
  app.get("/cart", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/cart.html"));
  });
  
// Sets a default page 
  app.use("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/../views/test.html"));
  });

};
