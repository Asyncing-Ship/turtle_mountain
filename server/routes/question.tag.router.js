const express = require("express");
const Question = require("../models/question.model");
const Question_Tag = require("../models/question_tag.model");
const User = require("../models/user.model");

const router = express.Router();

// route for getting all the question_tags for a certain question
router.get("/:id", (req, res) => {
  console.log("GET question tags");
  let questionId = req.params.id;
  Question_Tag.findAll({
    where: { question_id: questionId },
    include: [{ model: User }, { model: Question }],
  })
    .then((questions) => {
      // question will be an array of all Question instances
      // console.log('Found all questions', questions);
      res.send(questions);
    })
    .catch((error) => {
      console.log("Error getting all questions", error);
      res.sendStatus(500);
    });
});

// route to post a new question, will require you to have a userid and question id
router.post("/", (req, res) => {
  const userId = req.body.user_id;
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
