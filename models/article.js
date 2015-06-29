var mongoose = require('mongoose'),
    Schema =   mongoose.Schema;

var articleSchema = Schema({
  title: {type: String},
  author: {type: String},
  content: {type: String}
});

// var Section = mongoose.model("Section", sectionSchema);
var Article = mongoose.model("Article", articleSchema);

module.exports = {
  Article: Article
};
