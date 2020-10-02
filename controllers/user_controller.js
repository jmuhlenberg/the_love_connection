
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


// SEED ROUTE?

user.get('/seed', (req, res) => {
    User.create(
        [{
          userid: "",
          name: "Jim",
          age: "55",
          height: "69",
          gender: "m",
          build: "athletic",
          eyeColor: "blue",
          hairColor: "gray",
          image: " ",
          likes: [{
            age: "22",
            height: "65",
            gender: "f",
            build: "average",
            eyeColor: "blue",
            hairColor: "brown"

          }],
          [{
            userid: "",
            name: "John",
            age: "27",
            height: "72",
            gender: "m",
            build: "athletic",
            eyeColor: "blue",
            hairColor: "black",
            image: " ",
            likes: [{
              age: "25",
              height: "63",
              gender: "f",
              build: "athletic",
              eyeColor: "brown",
              hairColor: "brown"

            }],
            [{
              userid: "",
              name: "Daniel",
              age: "34",
              height: "68",
              gender: "m",
              build: "athletic",
              eyeColor: "brown",
              hairColor: "black",
              image: " ",
              likes: [{
                age: "30",
                height: "62",
                gender: "f",
                build: "athletic",
                eyeColor: "brown",
                hairColor: "brown"

              }],
              [{
                userid: "",
                name: "Kellen",
                age: "38",
                height: "72",
                gender: "m",
                build: "athletic",
                eyeColor: "blue",
                hairColor: "blonde",
                image: " ",
                likes: [{
                  age: "29",
                  height: "65",
                  gender: "f",
                  build: "average",
                  eyeColor: "brown",
                  hairColor: "brown"

                }],
                [{
                  userid: "",
                  name: "Alby",
                  age: "27",
                  height: "73",
                  gender: "m",
                  build: "athletic",
                  eyeColor: "brown",
                  hairColor: "black",
                  image: " ",
                  likes: [{
                    age: "40",
                    height: "66",
                    gender: "f",
                    build: "heavy",
                    eyeColor: "brown",
                    hairColor: "brown"

                  }],
                  [{
                    userid: "",
                    name: "Matt",
                    age: "40",
                    height: "68",
                    gender: "m",
                    build: "average",
                    eyeColor: "blue",
                    hairColor: "black",
                    image: " ",
                    likes: [{
                      age: "21",
                      height: "65",
                      gender: "f",
                      build: "athletic",
                      eyeColor: "blue",
                      hairColor: "blonde"

                    }],
                    [{
                      userid: "",
                      name: "Tim",
                      age: "48",
                      height: "76",
                      gender: "m",
                      build: "heavy",
                      eyeColor: "brown",
                      hairColor: "black",
                      image: " ",
                      likes: [{
                        age: "25",
                        height: "63",
                        gender: "f",
                        build: "thin",
                        eyeColor: "green",
                        hairColor: "brown"

                      }],
                      [{
                        userid: "",
                        name: "William",
                        age: "68",
                        height: "61",
                        gender: "m",
                        build: "heavy",
                        eyeColor: "hazel",
                        hairColor: "black",
                        image: " ",
                        likes: [{
                          age: "18",
                          height: "60",
                          gender: "f",
                          build: "thin",
                          eyeColor: "brown",
                          hairColor: "brown"

                        }],
                        [{
                          userid: "",
                          name: "Paul",
                          age: "22",
                          height: "64",
                          gender: "m",
                          build: "thin",
                          eyeColor: "brown",
                          hairColor: "blonde",
                          image: " ",
                          likes: [{
                            age: "50",
                            height: "63",
                            gender: "f",
                            build: "athletic",
                            eyeColor: "green",
                            hairColor: "brown"

                          }],
                          [{
                            userid: "",
                            name: "Ryan",
                            age: "26",
                            height: "77",
                            gender: "m",
                            build: "athletic",
                            eyeColor: "brown",
                            hairColor: "black",
                            image: " ",
                            likes: [{
                              age: "25",
                              height: "69",
                              gender: "f",
                              build: "fit",
                              eyeColor: "blue",
                              hairColor: "black"

                            }],
                            [{
                              userid: "",
                              name: "Danielle",
                              age: "32",
                              height: "65",
                              gender: "f",
                              build: "athletic",
                              eyeColor: "brown",
                              hairColor: "black",
                              image: " ",
                              likes: [{
                                age: "21",
                                height: "73",
                                gender: "m",
                                build: "athletic",
                                eyeColor: "blue",
                                hairColor: "black"

                              }],
                              [{
                                userid: "",
                                name: "Mary Jane",
                                age: "32",
                                height: "65",
                                gender: "f",
                                build: "slim",
                                eyeColor: "brown",
                                hairColor: "brown",
                                image: " ",
                                likes: [{
                                  age: "31",
                                  height: "75",
                                  gender: "m",
                                  build: "husky",
                                  eyeColor: "brown",
                                  hairColor: "black"

                                }],
                                [{
                                  userid: "",
                                  name: "Daisey",
                                  age: "23",
                                  height: "65",
                                  gender: "f",
                                  build: "thin",
                                  eyeColor: "blue",
                                  hairColor: "black",
                                  image: " ",
                                  likes: [{
                                    age: "55",
                                    height: "69",
                                    gender: "m",
                                    build: "athletic",
                                    eyeColor: "blue",
                                    hairColor: "gray"

                                  }],
                                  [{
                                    userid: "",
                                    name: "Tina",
                                    age: "45",
                                    height: "63",
                                    gender: "f",
                                    build: "heavy",
                                    eyeColor: "brown",
                                    hairColor: "black",
                                    image: " ",
                                    likes: [{
                                      age: "35",
                                      height: "71",
                                      gender: "m",
                                      build: "athletic",
                                      eyeColor: "blue",
                                      hairColor: "blonde"

                                    }],
                                    [{
                                      userid: "",
                                      name: "Sarah",
                                      age: "23",
                                      height: "60",
                                      gender: "f",
                                      build: "average",
                                      eyeColor: "green",
                                      hairColor: "brown",
                                      image: " ",
                                      likes: [{
                                        age: "69",
                                        height: "73",
                                        gender: "m",
                                        build: "average",
                                        eyeColor: "blue",
                                        hairColor: "white"

                                      }],
                                      [{
                                        userid: "",
                                        name: "Riley",
                                        age: "19",
                                        height: "59",
                                        gender: "f",
                                        build: "thin",
                                        eyeColor: "blonde",
                                        hairColor: "black",
                                        image: " ",
                                        likes: [{
                                          age: "21",
                                          height: "72",
                                          gender: "m",
                                          build: "athletic",
                                          eyeColor: "blue",
                                          hairColor: "black"

                                        }],
                                        [{
                                          userid: "",
                                          name: "Dipsy",
                                          age: "51",
                                          height: "65",
                                          gender: "f",
                                          build: "heavy",
                                          eyeColor: "brown",
                                          hairColor: "brown",
                                          image: " ",
                                          likes: [{
                                            age: "25",
                                            height: "75",
                                            gender: "m",
                                            build: "average",
                                            eyeColor: "brown",
                                            hairColor: "black"

                                          }],
                                          [{
                                            userid: "",
                                            name: "Prissy",
                                            age: "29",
                                            height: "69",
                                            gender: "f",
                                            build: "thin",
                                            eyeColor: "brown",
                                            hairColor: "black",
                                            image: " ",
                                            likes: [{
                                              age: "31",
                                              height: "77",
                                              gender: "m",
                                              build: "heavy",
                                              eyeColor: "green",
                                              hairColor: "black"

                                            }],
                                            [{
                                              userid: "",
                                              name: "Faye",
                                              age: "48",
                                              height: "64",
                                              gender: "f",
                                              build: "curvy",
                                              eyeColor: "brown",
                                              hairColor: "brown",
                                              image: " ",
                                              likes: [{
                                                age: "55",
                                                height: "73",
                                                gender: "m",
                                                build: "average",
                                                eyeColor: "brown",
                                                hairColor: "black"

                                              }],
                                              [{
                                                userid: "",
                                                name: "Violet",
                                                age: "36",
                                                height: "67",
                                                gender: "f",
                                                build: "athletic",
                                                eyeColor: "blue",
                                                hairColor: "brown",
                                                image: " ",
                                                likes: [{
                                                  age: "29",
                                                  height: "78",
                                                  gender: "m",
                                                  build: "thin",
                                                  eyeColor: "brown",
                                                  hairColor: "black"

                                                }],

            }
        ],
        (err, data) => {
            res.send(data);
        }
    )
});

module.exports = user
