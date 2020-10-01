
const express = require('express')
const user = express.Router()
const User = require('../models/user.js')

//======================
//  READ
//======================



// GET ROUTE  WORKS IN POSTMAN//
user.get('/', (req,res) => {
  res.send('in controller')
})

module.exports = user
