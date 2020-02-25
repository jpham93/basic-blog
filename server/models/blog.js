const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
});

let Model = new mongoose.model('Blog', blogSchema);

module.exports = Model;
