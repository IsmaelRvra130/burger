var express = require('express');
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require('../models/burger.js');

// Create the routes and associated logic
router.get('/burger', function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burger: data
    };
     //console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/burger', function(req, res) {
  burger.insertOne([
    'burger_name', 'devoured'
  ], [
    req.body.burger_name, req.body.devoured
  ], function() {
    res.redirect('/burger');
  });
});

router.put('/burger/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect('/burger');
  });
});

// Export routes for server.js to use.
module.exports = router;