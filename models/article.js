var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// sectionSchema = Schema({
//   title: String,
//   content: String
// })

var articleSchema = Schema({
  title: {type: String},
  author: {type: String},
  content: {type: String}
  // content: [sectionSchema]
});

// var Section = mongoose.model("Section", sectionSchema);
var Article = mongoose.model("Article", articleSchema);


module.exports = {

  // Section: Section,
  Article: Article

};
