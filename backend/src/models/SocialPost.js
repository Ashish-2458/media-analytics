const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SocialPostSchema = new Schema({
  platform: String,
  postContent: String,
  likes: Number,
  comments: Number,
  createdAt: Date,
});

module.exports = mongoose.model('SocialPost', SocialPostSchema);
