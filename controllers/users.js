var express = require('express');
    router = express.Router(),
    User = require('../models/user.js');

//define routes for the router

router.get('/new', function (req, res){

  res.render('users/new', {});

})


router.post('/', function(req, res){

  var newUser = new User(req.body.user);

  newUser.save(function(err, result){
    if (err) {
      console.log(err);
              }
    else {
res.redirect(301, '/articles');
    }
  })
})


//export router object
module.exports = router;
