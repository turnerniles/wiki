var express =        require('express'),
    server =         express(),
    ejs =            require('ejs'),
    bodyParser =     require('body-parser'),
    methodOverride = require('method-override'),
    expressLayouts = require('express-ejs-layouts'),
    morgan =         require('morgan'),
    mongoose =       require('mongoose');

//Set the view engine
server.set('views', './views');
server.set('view engine', 'ejs');

//Use morgan for error messages
server.use(morgan('short'));

server.use(express.static("./public"));

server.use(expressLayouts);

server.use(bodyParser.urlencoded({ extended: true }));
server.use(methodOverride('_method'));

//ROUTES

// in controllers/articles.js we put all articles routes
var articleController = require('./controllers/articles.js');
server.use('/articles', articleController);

server.get('/', function (req, res) {
  res.render('index');
});

// in the controlles/users.js we put all the users routes
var userController = require('./controllers/users.js');
server.use('/users', userController);

mongoose.connect('mongodb://localhost:27017/wiki');
var db = mongoose.connection;

db.on('error', function () {
  console.log("Database errors!");
});

db.once('open', function () {
  console.log("Database Running");

  server.listen(1337, function () {
    console.log("1337 Server");
  });
});
