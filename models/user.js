var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create Schema
var userSchema = new Schema({
  name: String,
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true, },
  admin: Boolean,
  location: String,
  meta : {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
});

var User = mongoose.model('User', userSchema);

// make available to users in application
module.exports = User;
