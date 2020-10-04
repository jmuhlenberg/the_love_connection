const mongoose = require('mongoose')
const Likes = require('./likes.js')

const userSchema = new mongoose.Schema({

  userid: String,
  name: String,
  age: String,
  height: String,
  gender: String,
  build: String,
  eyeColor: String,
  hairColor: String,
  image: String,
  likes: [ Likes ]

})

const user = mongoose.model('user', userSchema)

module.exports = user
