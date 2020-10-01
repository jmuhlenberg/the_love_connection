const mongoose = require('mongoose')

const likesSchema = new mongoose.Schema({
  name: String,
  age: String,
  height: String,
  gender: String,
  build: String,
  eyeColor: String,
  hairColor: String
})

const likes = mongoose.model('likes', bookSchema)

module.exports = likes
