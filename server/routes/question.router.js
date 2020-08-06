const express = require("express");
const Question = require("../models/question.model");
const User = require("../models/user.model");
// const User_Question = require("../models/user.question.model");

const router = express.Router();

// This route *should* return the logged in users pets
router.get("/", (req, res) => {
  console.log("GET questions");
  Question.findAll({
    include: [{ model: User }],
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

router.get("/:id", (req, res) => {
  let questionId = req.params.id;
  console.log(`GET request for question ${questionId}`);
  Question.findAll({
    where: { id: questionId },
    include: [{ model: User }],
  })
    .then((questions) => {
      console.log("Found question", questions);
      res.send(questions[0] || []);
    })
    .catch((error) => {
      console.log(
        `Error getting question with id ${questionId} questions`,
        error
      );
      res.sendStatus(500);
    });
});

router.post("/", (req, res) => {
  const questionTitle = req.body.title;
  const questionContent = req.body.content;
  const askedBy = req.body.askedBy;

  console.log(`POST request add question`, req.body);

  let newQuestion = Question.build({
    title: questionTitle,
    content: questionContent,
    asked_by: askedBy,
  });
  // Save to database
  newQuestion
    .save()
    .then((question) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("Error adding question ", error);
      res.sendStatus(500);
    });
});

router.put("/:id", (req, res) => {
  let questionId = req.params.id;
  let questionContent = req.body.content;
  console.log(`PUT request update question ${questionId}`, req.body);
  let updates = {
    content: questionContent,
  };
  Question.update(updates, { where: { id: questionId } })
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error updating question with id ${questionId}`, error);
      res.sendStatus(500);
    });
});

router.delete("/:id", (req, res) => {
  let questionId = req.params.id;
  console.log(`DELETE request for question ${questionId}`, req.body);
  Question.destroy({ where: { id: questionId } })
    .then((questions) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error deleting question with id ${questionId}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
