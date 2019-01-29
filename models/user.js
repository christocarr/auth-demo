const mongoose = require('mongoose');

const UserShema = new mongoose.Schema({
  username: String,
  password: String
});

module.exports = mongoose.model("User", UserShema);