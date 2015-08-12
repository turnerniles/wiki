var mongoose = require('mongoose'),
    Schema =   mongoose.Schema;

var articleSchema = Schema({
  title: {type: String, required: true, unique: true},
  author: {type: String, required: true},
  category: {type: String, required: true},
  content: {type: String, required: true}
});

var Article = mongoose.model("Article", articleSchema);

module.exports = Article
