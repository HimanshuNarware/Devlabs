const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  bookmarks:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Tool"
    }
  ]
});

const User = mongoose.model("User",userSchema)

module.exports = User