var express = require('express'),
    router = express.Router(),
    Article = require('../models/article.js').Article;
    // Section = require('../models/article.js').Section;

// remember, every route has /articles before it in here...

// INDEX
router.get('/', function (req, res) {

  console.log(req.session.currentUser);


  Article.find({}, function (err, articlesArray) {
    if (err) {
      console.log(err);
    } else {
      res.render('articles/index.ejs',
      { articles: articlesArray,
        currentUser: req.session.currentUser }
        
      );
    };
  });
});

// NEW
router.get('/new', function (req, res) {
  res.render('articles/new', {});
});

// CREATE
router.post('/new', function (req, res) {

  var newArticle = new Article(req.body.article);

  newArticle.save(function (err, article) {
    if (err) {
      console.log(err);
    } else {
      res.redirect(301, '/articles');
    };
  });
});

// SHOW
router.get('/:id', function (req, res) {

var id = req.params.id;

console.log(id);

Article.findOne({_id: id}, function(err, result){

if (err){console.log(err)};
res.render('articles/show.ejs', {article: result})
  });
});

// DELETE
router.delete('/:id', function (req, res) {

var id = req.params.id;
  Article.remove({_id: id}, function (err, result){
  res.redirect(301, '/articles');
  });
});

// EDIT
router.get('/edit/:id', function (req, res) {

var id = req.params.id;

Article.findOne({_id: id}, function(err,result){
  if (err){console.log(err)};
  console.log(result);
  res.render('articles/edit.ejs',{article: result});
  });
});

// UPDATE
router.patch('/:id', function (req, res) {


var id = req.params.id;
var updateArticle = new Article(req.body.article);

Article.findOne({_id: id}, function(err, result){
if (err){console.log(err)};
Article.update({result: updateArticle}, function(err,result){
if (err){console.log(err)};
res.redirect(301, '/articles');
    });
  });
});

module.exports = router;
