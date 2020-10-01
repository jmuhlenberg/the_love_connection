
const express = require('express')
const user = express.Router()
const User = require('../models/user.js')

//======================
//  READ
//======================



// INDEX ROUTE  WORKS IN POSTMAN//
user.get('/', (req,res) => {
  User.find({}, (err, foundUsers) => {
    res.json(foundUsers)
  })
})

// CREATE ROUTE
user.post('/', (req, res) => {
  User.create(req.body, (err, createdUser) => {
    User.find({}, (err, foundUsers) => {
      res.json(foundUsers)
    })
  })
})

// UPDATE ROUTE
user.put('/:id', (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
    (err, updatedUser) => {
      if (err) {
        res.send(err)
      } else {
        User.find({}, (err, foundUser) => {
          res.json(foundUser)
        })
      }
    })
})

// DELETE ROUTE
user.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, deletedSong) => {
    User.find({}, (err, foundSong) => {
      res.json(foundSong)
    })
  })
})

module.exports = user
