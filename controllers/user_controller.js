
const express = require('express')
const user = express.Router()
const User = require('../models/user.js')

//======================
//  READ
//======================



// INDEX ROUTE  WORKS IN POSTMAN//
user.get('/', (req,res) => {
  User.find({}, (err, foundUsers) => {
    if (err) {
      res.status(400).send('encountered an error');
    } else {
      res.json(foundUsers)
    }
  })
})

// SPECIFIC USER ROUTE
user.get('/:id', (req,res) => {
  const { id } = req.params;
  User.find({ userid: id }, (err, foundUser) => {
    res.json(foundUser)
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

/// READY TO GO

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


// SEED ROUTE?

user.get('/seed', (req, res) => {
    User.create(
      [
        {
          userid: "marco721",
          name: "Marco",
          age: "adults",
          height: "medium",
          gender: "male",
          build: "athletic",
          eyeColor: "blue",
          hairColor: "grey",
          image: " ",
          likes:
            {
            age: "young",
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
          age: "young",
          height: "tall",
          gender: "male",
          build: "slender",
          eyeColor: "brown",
          hairColor: "brown",
          image: " ",
          likes:
            {
            age: "young",
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
          age: "adults",
          height: "short",
          gender: "male",
          build: "plus",
          eyeColor: "brown",
          hairColor: "blue",
          image: " ",
          likes:
            {
            age: "golden",
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
          age: "sunset",
          height: "medium",
          gender: "male",
          build: "stocky",
          eyeColor: "blue",
          hairColor: "brown",
          image: " ",
          likes:
            {
            age: "adults",
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
          age: "sunset",
          height: "short",
          gender: "male",
          build: "slender",
          eyeColor: "blue",
          hairColor: "grey",
          image: " ",
          likes:
            {
            age: "sunset",
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
          age: "adults",
          height: "medium",
          gender: "male",
          build: "plus",
          eyeColor: "brown",
          hairColor: "grey",
          image: " ",
          likes:
            {
            age: "young",
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
          age: "adults",
          height: "tall",
          gender: "male",
          build: "plus",
          eyeColor: "brown",
          hairColor: "brown",
          image: " ",
          likes:
            {
            age: "young",
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
          age: "mature",
          height: "tall",
          gender: "male",
          build: "slender",
          eyeColor: "blue",
          hairColor: "grey",
          image: " ",
          likes:
            {
            age: "young",
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
          age: "adults",
          height: "tall",
          gender: "male",
          build: "athletic",
          eyeColor: "brown",
          hairColor: "red",
          image: " ",
          likes:
            {
            age: "young",
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
          age: "adults",
          height: "medium",
          gender: "male",
          build: "slender",
          eyeColor: "brown",
          hairColor: "red",
          image: " ",
          likes:
            {
            age: "sunset",
            height: "medium",
            gender: "female",
            build: "athletic",
            eyeColor: "blue",
            hairColor: "blonde"
            }

        },
        {
          userid: "gina722",
          name: "Gina",
          age: "adults",
          height: "medium",
          gender: "female",
          build: "athletic",
          eyeColor: "blue",
          hairColor: "grey",
          image: " ",
          likes:
            {
            age: "young",
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
          age: "young",
          height: "tall",
          gender: "female",
          build: "slender",
          eyeColor: "brown",
          hairColor: "brown",
          image: " ",
          likes:
            {
            age: "young",
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
          age: "adults",
          height: "short",
          gender: "female",
          build: "plus",
          eyeColor: "brown",
          hairColor: "blue",
          image: " ",
          likes:
            {
            age: "golden",
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
          age: "sunset",
          height: "medium",
          gender: "female",
          build: "stocky",
          eyeColor: "blue",
          hairColor: "brown",
          image: " ",
          likes:
            {
            age: "adults",
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
          age: "sunset",
          height: "short",
          gender: "female",
          build: "slender",
          eyeColor: "blue",
          hairColor: "grey",
          image: " ",
          likes:
            {
            age: "sunset",
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
          age: "adults",
          height: "medium",
          gender: "female",
          build: "plus",
          eyeColor: "brown",
          hairColor: "grey",
          image: " ",
          likes:
            {
            age: "young",
            height: "tall",
            gender: "male",
            build: "plus",
            eyeColor: "brown",
            hairColor: "red"
            }

        },
        {
          userid: "stella721",
          name: "stella",
          age: "adults",
          height: "tall",
          gender: "female",
          build: "plus",
          eyeColor: "brown",
          hairColor: "brown",
          image: " ",
          likes:
            {
            age: "young",
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
          age: "mature",
          height: "tall",
          gender: "female",
          build: "slender",
          eyeColor: "blue",
          hairColor: "grey",
          image: " ",
          likes:
            {
            age: "young",
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
          age: "adults",
          height: "tall",
          gender: "female",
          build: "athletic",
          eyeColor: "brown",
          hairColor: "red",
          image: " ",
          likes:
            {
            age: "young",
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
          age: "adults",
          height: "medium",
          gender: "female",
          build: "slender",
          eyeColor: "brown",
          hairColor: "red",
          image: " ",
          likes:
            {
            age: "sunset",
            height: "medium",
            gender: "male",
            build: "athletic",
            eyeColor: "blue",
            hairColor: "blonde"
            }

        },

      ],
        (err, data) => {
            res.send(data);
        }
    )
});

module.exports = user
