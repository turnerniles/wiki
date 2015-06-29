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

router.get('/login', function (req, res){

  res.render('users/login')
})

router.post('/login', function (req, res){

  var attempt = req.body.user;

  User.findOne({username: attempt.username }, function (err, user){

if (user && user.password === attempt.password) {
  req.session.currentUser = user.username;

  res.redirect(301, "/articles");
} else {
  res.redirect(301, "/users/new")
}
  })
})

router.get('/:id', function (req,res){


console.log(user)


})

//export router object
module.exports = router;
