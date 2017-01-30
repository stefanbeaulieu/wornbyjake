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
    res.sendFile(path.join(__dirname + "/../views/home.html"));
  });

  // cms route loads page2.html (route will need to be renamed)
  app.get("/cms", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/cms.html"));
  });

  // blog route loads page3.html (route will need to be renamed)
  app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/blog.html"));
  });

  // authors route loads page4.html (route will need to be renamed)
  app.get("/authors", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/author-manager.html"));
  });

};
