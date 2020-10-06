
const mongoose = require('mongoose')

const likesSchema = new mongoose.Schema({

  age: String,
  height: String,
  gender: String,
  build: String,
  eyeColor: String,
  hairColor: String

})

const likes = mongoose.model('likes', likesSchema)

module.exports = likes
