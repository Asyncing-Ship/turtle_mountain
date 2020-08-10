const express = require("express");
const Question = require("../models/question.model");
const Question_tag = require("../models/question_tag.model");
const User = require("../models/user.model");

const router = express.Router();

// This route *should* return the logged in users pets
router.get("/", (req, res) => {
  console.log("GET all question tag");
  Question_Tag.findAll({
    include: [{ model: User }],
    include: [{ model: Question }],
  })
    .then((responses) => {
      // responses will be an array of all Question_Tag instances
      // console.log('Found all tags', responses);
      res.send(responses);
    })
    .catch((error) => {
      console.log("Error getting all question tags", error);
      res.sendStatus(500);
    });
});

router.get("/:id", (req, res) => {
  let tagId = req.params.id;
  console.log(`GET request for question tags with id  ${tagId}`);
  Question_Tag.findAll({
    where: { id: tagId },
    include: [{ model: User }],
    include: [{ model: Question }],
  })
    .then((responses) => {
      console.log("Found question tags", responses);
      res.send(responses[0] || []);
    })
    .catch((error) => {
      console.log(`Error getting question tags with id ${tagId}`, error);
      res.sendStatus(500);
    });
});

router.post("/", (req, res) => {
  const userId = req.body.user.id;
  const questionId = req.body.question_id;
  console.log(`POST question tags, adding tags`, req.body);

  let newQuestionTag = Question_Tag.build({
    userId: userId,
    questionId: questionId,
  });
  // Save to database
  newQuestionTag
    .save()
    .then((responses) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("Error adding question tags ", error);
      res.sendStatus(500);
    });
});

// Route to delete a tag
router.delete("/:id", (req, res) => {
  let tagId = req.params.id;
  console.log(`DELETE request for question tag with id ${tagId}`, req.body);
  Question_Tag.destroy({ where: { id: tagId } })
    .then((responses) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error deleting question tags with id ${tagId}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
