var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require('../models/burger.js');

// Create the routes and associated logic
router.get("/", function(req, res){
  res.redirect("/burgers");
})


// router.get("/burgers", function(req, res) {
//   burger.all(function(burgerData) {
//     var hbsObject = {
//       burger: data
//     };
//      //console.log(hbsObject);
//     res.render('index', hbsObject);
//   });
// });

router.get("/burgers", function(req, res){
  burger.all(function(burgerData){
    res.render("index", { burger_data: burgerData});
  });
});

router.post("/burgers/create", function(req, res){
  burger.create(req.body.burger_name, function(result){
    console.log(result);
    res.redirect("/");
  });
});


router.put("/burgers/:id", function(req,res){
  burger.update(req.params.id, function(result){
    console.log(result);
    res.sendStatus(200);
  });
});

// router.post("/burgers", function(req, res) {
//   burger.insertOne([
//     "burger_name", 'devoured'
//   ], [
//     req.body.burger_name, false
//   ], function() {
//     res.redirect('/burgers');
//   });
// });

// router.put("/burgers/:id", function(req, res) {
//   var condition = 'id = ' + req.params.id;

//   burger.updateOne({
//     devoured: true
//   }, condition, function() {
    
//     res.redirect('/burgers');
//   });
// });

// Export routes for server.js to use.
module.exports = router;