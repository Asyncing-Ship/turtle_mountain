const express = require("express");
const Question = require("../models/question.model");
const User = require("../models/user.model");
const QuestionResponse = require("../models/question_response.model");
// const User_Question = require("../models/user.question.model");
const {
  rejectUnauthenticated,
  rejectUnapproved,
} = require("../modules/authentication-middleware");

const router = express.Router();

// This route *should* return the logged in users questions
router.get("/", rejectUnapproved, (req, res) => {
  // console.log("GET questions");
  Question.findAll({
    include: [{ model: User }],
    order: [
      ["is_verified", "ASC"],
      ["date_posted", "DESC"],
      ["is_answered", "ASC"],
    ],
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

router.get("/responses/:id", rejectUnapproved, (req, res) => {
  // console.log("GET question responses");
  let questionId = req.params.id;
  QuestionResponse.findAll({
    where: { question_id: questionId },
    include: [{ model: User }, { model: Question }],
    order: [
      ["verified", "DESC"],
      ["date_posted", "DESC"],
    ],
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

// This route will get a single question based on the id passed
router.get("/:id", rejectUnapproved, (req, res) => {
  let questionId = req.params.id;
  // console.log(`GET request for question ${questionId}`);
  Question.findAll({
    where: { id: questionId },
    include: [{ model: User }],
  })
    .then((questions) => {
      // console.log("Found question", questions);
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

// This route will post a question based on the req body provided
router.post("/", rejectUnapproved, (req, res) => {
  const questionTitle = req.body.title;
  const questionContent = req.body.content;
  const userId = req.user.id;

  // console.log(`POST request add question`, req.body);

  let newQuestion = Question.build({
    title: questionTitle,
    content: questionContent,
    userId: userId,
  });
  // Save to database
  newQuestion
    .save()
    .then((question) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("Error adding question ", error);
      res.sendStatus(500);
    });
});

// This is a route for editing the content of a question
router.put("/:id", rejectUnapproved, (req, res) => {
  let questionId = req.params.id;
  let questionContent = req.body.content;
  // console.log(`PUT request update question ${questionId}`, req.body);
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

// This is a route for marking a quesiton as frequent
router.put("/frequent/:id", rejectUnapproved, (req, res) => {
  let questionId = req.params.id;
  // console.log(`PUT request update question ${questionId}`, req.body);
  let updates = {
    is_frequent: true,
  };
  Question.update(updates, { where: { id: questionId } })
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(
        `Error updating question(frequent) with id ${questionId}`,
        error
      );
      res.sendStatus(500);
    });
});

router.put("/infrequent/:id", rejectUnapproved, (req, res) => {
  let questionId = req.params.id;
  // console.log(`PUT request update question ${questionId}`, req.body);
  let updates = {
    is_frequent: false,
  };
  Question.update(updates, { where: { id: questionId } })
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(
        `Error updating question(infrequent) with id ${questionId}`,
        error
      );
      res.sendStatus(500);
    });
});
// This is a route for marking a question as answered
router.put("/answer/:id", rejectUnapproved, (req, res) => {
  // console.log("updating question at id", req.params.id);
  let questionId = req.params.id;
  // console.log(`PUT request update question ${questionId}`, req.body);
  let updates = {
    is_answered: true,
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

router.put("/verify/:id", rejectUnapproved, (req, res) => {
  // console.log("verifying question at id", req.params.id);
  let questionId = req.params.id;
  // console.log(`PUT request update question ${questionId}`, req.body);
  let updates = {
    is_verified: true,
  };
  Question.update(updates, { where: { id: questionId } })
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error verifying question with id ${questionId}`, error);
      res.sendStatus(500);
    });
});

// This route will delete a question based on id provided
router.delete("/:id", rejectUnapproved, (req, res) => {
  let questionId = req.params.id;
  // console.log(`DELETE request for question ${questionId}`, req.body);
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
