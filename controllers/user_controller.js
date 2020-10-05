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



// SPECIFIC USER ROUTE
user.get('/:id', (req,res) => {
  User.findOne({
    userid: req.params.id
  }, (err, foundUser) => {
    res.json(foundUser)
  })
})



// CREATE ROUTE
user.post('/', (req, res) => {
  console.log('you are in the post route')
  User.create(req.body, (err, createdUser) => {
    User.find({}, (err, foundUsers) => {
      res.json(foundUsers)
    })
  })
})


// UPDATE ROUTE
user.put('/:id', async (req, res) => {
  await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
    (err, updatedUser) => {
      if (err) {
        res.send(err)
      } else {
        console.log('Updating user ' + req.params.id + ' in put route')
        User.findOne({
          userid:req.params.id
        }, (err, foundUser) => {
          res.json(foundUser)
        })
      }
    })
})


// DELETE ROUTE
user.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, deletedUser) => {
    User.find({}, (err, deletedUser) => {
      res.json(deletedUser)
    })
  })
})


// SEED ROUTE?

user.get('/sp/seed', async (req, res) => {
  await User.deleteMany({})
  console.log('in user seed function')
    User.create(
      [
        {
          userid: "marco721",
          name: "Marco",
          age: "18-25",
          height: "tall",
          gender: "male",
          build: "stocky",
          eyeColor: "brown",
          hairColor: "red",
          image: "./images/marco721.jpeg",
          likes:
            {
            age: "18-25",
            height: "tall",
            gender: "female",
            build: "slender",
            eyeColor: "blue",
            hairColor: "brown"
            }

        },
        {
          userid: "don721",
          name: "Donny",
          age: "18-25",
          height: "tall",
          gender: "male",
          build: "stocky",
          eyeColor: "blue",
          hairColor: "red",
          image: "./images/don721.jpeg",
          likes:
            {
            age: "18-25",
            height: "medium",
            gender: "female",
            build: "slender",
            eyeColor: "brown",
            hairColor: "blonde"
            }

        },
        {
          userid: "gus721",
          name: "Giuseppe",
          age: "18-25",
          height: "tall",
          gender: "male",
          build: "stocky",
          eyeColor: "blue",
          hairColor: "red",
          image: "./images/gus721.jpeg",
          likes:
            {
            age: "18-25",
            height: "tall",
            gender: "female",
            build: "stocky",
            eyeColor: "brown",
            hairColor: "red"
            }

        },
        {
          userid: "ant721",
          name: "Anthony",
          age: "18-25",
          height: "tall",
          gender: "male",
          build: "stocky",
          eyeColor: "brown",
          hairColor: "red",
          image: "./images/ant721.jpeg",
          likes:
            {
            age: "18-25",
            height: "medium",
            gender: "female",
            build: "slender",
            eyeColor: "brown",
            hairColor: "red"
            }

        },
        {
          userid: "dom721",
          name: "Dominic",
          age: "18-25",
          height: "short",
          gender: "male",
          build: "slender",
          eyeColor: "blue",
          hairColor: "grey",
          image: "./images/dom721.jpeg",
          likes:
            {
            age: "18-25",
            height: "short",
            gender: "female",
            build: "slender",
            eyeColor: "blue",
            hairColor: "grey"
            }

        },
        {
          userid: "vito721",
          name: "Vito",
          age: "18-25",
          height: "medium",
          gender: "male",
          build: "plus",
          eyeColor: "brown",
          hairColor: "grey",
          image: "./images/vito721.jpeg",
          likes:
            {
            age: "18-25",
            height: "tall",
            gender: "female",
            build: "plus",
            eyeColor: "brown",
            hairColor: "red"
            }

        },
        {
          userid: "lou721",
          name: "Lou",
          age: "18-25",
          height: "tall",
          gender: "male",
          build: "plus",
          eyeColor: "brown",
          hairColor: "brown",
          image: "./images/lou721.jpeg",
          likes:
            {
            age: "18-25",
            height: "short",
            gender: "female",
            build: "slender",
            eyeColor: "brown",
            hairColor: "brown"
            }

        },
        {
          userid: "abe721",
          name: "Abe",
          age: "18-25",
          height: "tall",
          gender: "male",
          build: "stocky",
          eyeColor: "brown",
          hairColor: "red",
          image: "./images/abe721.png",
          likes:
            {
            age: "18-25",
            height: "medium",
            gender: "female",
            build: "stocky",
            eyeColor: "brown",
            hairColor: "blonde"
            }

        },
        {
          userid: "sonny721",
          name: "Sonny",
          age: "18-25",
          height: "tall",
          gender: "male",
          build: "athletic",
          eyeColor: "brown",
          hairColor: "red",
          image: "./images/sonny721.jpeg",
          likes:
            {
            age: "18-25",
            height: "medium",
            gender: "female",
            build: "slender",
            eyeColor: "blue",
            hairColor: "red"
            }

        },
        {
          userid: "fred721",
          name: "Fredo",
          age: "18-25",
          height: "medium",
          gender: "male",
          build: "slender",
          eyeColor: "brown",
          hairColor: "red",
          image: "./images/fred721.jpeg",
          likes:
            {
            age: "18-25",
            height: "medium",
            gender: "female",
            build: "athletic",
            eyeColor: "blue",
            hairColor: "blonde"
            }

        },
        {
          userid: "18-25",
          name: "Gina",
          age: "adults",
          height: "medium",
          gender: "female",
          build: "athletic",
          eyeColor: "blue",
          hairColor: "grey",
          image: "./images/gina722.jpeg",
          likes:
            {
            age: "18-25",
            height: "tall",
            gender: "male",
            build: "slender",
            eyeColor: "blue",
            hairColor: "brown"
            }

        },
        {
          userid: "donna722",
          name: "Donna",
          age: "18-25",
          height: "tall",
          gender: "female",
          build: "slender",
          eyeColor: "brown",
          hairColor: "brown",
          image: "./images/donna722.jpeg",
          likes:
            {
            age: "18-25",
            height: "medium",
            gender: "male",
            build: "slender",
            eyeColor: "brown",
            hairColor: "blonde"
            }

        },
        {
          userid: "maria722",
          name: "maria",
          age: "18-25",
          height: "short",
          gender: "female",
          build: "plus",
          eyeColor: "blue",
          hairColor: "brown",
          image: "./images/maria722.jpeg",
          likes:
            {
            age: "18-25",
            height: "tall",
            gender: "male",
            build: "stocky",
            eyeColor: "brown",
            hairColor: "red"
            }

        },
        {
          userid: "sara722",
          name: "sara",
          age: "18-25",
          height: "medium",
          gender: "female",
          build: "stocky",
          eyeColor: "blue",
          hairColor: "brown",
          image: "./images/sara722.jpeg",
          likes:
            {
            age: "18-25",
            height: "medium",
            gender: "male",
            build: "slender",
            eyeColor: "brown",
            hairColor: "red"
            }

        },
        {
          userid: "anna722",
          name: "anna",
          age: "18-25",
          height: "short",
          gender: "female",
          build: "slender",
          eyeColor: "blue",
          hairColor: "grey",
          image: "./images/anna722.jpeg",
          likes:
            {
            age: "18-25",
            height: "short",
            gender: "male",
            build: "slender",
            eyeColor: "blue",
            hairColor: "grey"
            }

        },
        {
          userid: "angela722",
          name: "angela",
          age: "18-25",
          height: "medium",
          gender: "female",
          build: "plus",
          eyeColor: "brown",
          hairColor: "grey",
          image: "./images/angela722.jpeg",
          likes:
            {
            age: "18-25",
            height: "tall",
            gender: "male",
            build: "plus",
            eyeColor: "brown",
            hairColor: "red"
            }

        },
        {
          userid: "stella722",
          name: "stella",
          age: "18-25",
          height: "tall",
          gender: "female",
          build: "plus",
          eyeColor: "brown",
          hairColor: "brown",
          image: "./images/stella722.jpeg",
          likes:
            {
            age: "18-25",
            height: "short",
            gender: "male",
            build: "slender",
            eyeColor: "brown",
            hairColor: "brown"
            }

        },
        {
          userid: "fran722",
          name: "francesca",
          age: "18-25",
          height: "tall",
          gender: "female",
          build: "slender",
          eyeColor: "blue",
          hairColor: "grey",
          image: "./images/fran722.jpeg",
          likes:
            {
            age: "18-25",
            height: "medium",
            gender: "male",
            build: "stocky",
            eyeColor: "brown",
            hairColor: "blonde"
            }

        },
        {
          userid: "samantha722",
          name: "Samantha",
          age: "18-25",
          height: "tall",
          gender: "female",
          build: "athletic",
          eyeColor: "brown",
          hairColor: "red",
          image: "./images/samantha722.jpeg",
          likes:
            {
            age: "18-25",
            height: "medium",
            gender: "male",
            build: "slender",
            eyeColor: "blue",
            hairColor: "red"
            }

        },
        {
          userid: "fredrica722",
          name: "Fredrica",
          age: "18-25",
          height: "medium",
          gender: "female",
          build: "slender",
          eyeColor: "brown",
          hairColor: "red",
          image: "./images/fredrica722.jpeg",
          likes:
            {
            age: "18-25",
            height: "medium",
            gender: "male",
            build: "athletic",
            eyeColor: "blue",
            hairColor: "blonde"
            }
        }
      ],
        (err, data) => {
            res.json(data);
        }
    )
});

module.exports = user
