const express = require("express");
const Person = require("../models/Person");
const router = express.Router();

//gets all posts
router.get("/", async (req, res) => {
  try {
    const people = await Person.find();
    res.json(people);
  } catch (err) {
    res.json({ message: err });
  }
});

//submits a post
router.post("/", async (req, res) => {
  const person = new Person({
    name: req.body.name,
    surname: req.body.surname,
    age: req.body.age,
  });

  try {
    const savedPerson = await person.save();
    res.json(savedPerson);
  } catch (err) {
    res.json({ message: err });
  }
});
//get specific person
router.get("/:postId", async (req, res) => {
  try {
    const person = await Person.findById(req.params.postId);
    res.json(person);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete person
router.delete("/:postId", async (req, res) => {
  try {
    const removedPerson = await Person.deleteOne({ _id: req.params.postId });
    res.json(removedPerson);
  } catch (err) {
    res.json({ message: err });
  }
});

//update person details
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPerson = await Person.updateOne(
      { _id: req.params.postId },
      {
        $set: {
          name: req.body.name,
          surname: req.body.surname,
          age: req.body.age,
        },
      }
    );
    res.json(updatedPerson);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
