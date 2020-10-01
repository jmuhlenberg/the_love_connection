
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

  userid: String,
  name: String,
  age: String,
  height: String,
  gender: String,
  build: String,
  eyeColor: String,
  hairColor: String,
  image: String
})

const user = mongoose.model('user', userSchema)

module.exports = user
