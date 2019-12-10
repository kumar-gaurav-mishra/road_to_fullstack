const mongoose = require('mongoose');
const commentsSchema = new mongoose.Schema({
  text: String,
  author: String
});
const Comments = mongoose.model('comments', commentsSchema);
module.exports = Comments;
