const express = require("express");
const Question = require("../models/question.model");
const Question_Response = require("../models/question_response.model");
const User = require("../models/user.model");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

const router = express.Router();

router.get("/", rejectUnauthenticated, (req, res) => {
  // console.log("GET all question responses");
  Question_Response.findAll({
    include: [{ model: User }, { model: Question }],
  })
    .then((responses) => {
      // responses will be an array of all Question_Responses instances
      // console.log('Found all responses', responses);
      res.send(responses);
    })
    .catch((error) => {
      console.log("Error getting all question responses", error);
      res.sendStatus(500);
    });
});

router.get("/:id", rejectUnauthenticated, (req, res) => {
  let responseId = req.params.id;
  // console.log(`GET request for question response with id  ${responseId}`);
  Question_Response.findAll({
    where: { id: responseId },
    include: [{ model: User }, { model: Question }],
  })
    .then((responses) => {
      // console.log("Found question response", responses);
      res.send(responses[0] || []);
    })
    .catch((error) => {
      console.log(
        `Error getting question response with id ${responseId}`,
        error
      );
      res.sendStatus(500);
    });
});

router.post("/", rejectUnauthenticated, (req, res) => {
  const responseContent = req.body.content;
  const responseVerified = false; // req.body.verified; TODO FIX THIS
  const userId = req.user.id;
  const questionId = req.body.question_id;

  // console.log(`POST question response adding response`, req.body);

  let newQuestionResponse = Question_Response.build({
    content: responseContent,
    verified: responseVerified,
    userId: userId,
    questionId: questionId,
  });
  // Save to database
  newQuestionResponse
    .save()
    .then((responses) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("Error adding question response ", error);
      res.sendStatus(500);
    });
});

// Route to update the content of the response
router.put("/:id", rejectUnauthenticated, (req, res) => {
  let responseId = req.params.id;
  let responseContent = req.body.content;
  // console.log(`PUT request update content for ${responseId}`, req.body);
  let updates = {
    content: responseContent,
  };
  Question_Response.update(updates, { where: { id: responseId } })
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(
        `Error updating question response with id ${responseId}`,
        error
      );
      res.sendStatus(500);
    });
});

// Route to verify a response
router.put("/verify/:id", rejectUnauthenticated, (req, res) => {
  let responseId = req.params.id;
  // console.log(
  //   `PUT request verify question response for id ${responseId}`,
  //   req.body
  // );
  let updates = {
    verified: true,
  };
  Question_Response.update(updates, { where: { id: responseId } })
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error verifying response with id ${responseId}`, error);
      res.sendStatus(500);
    });
});

router.delete("/:id", rejectUnauthenticated, (req, res) => {
  let responseId = req.params.id;
  // console.log(
  //   `DELETE request for question response with id ${responseId}`,
  //   req.body
  // );
  Question_Response.destroy({ where: { id: responseId } })
    .then((responses) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(
        `Error deleting question response with id ${responseId}`,
        error
      );
      res.sendStatus(500);
    });
});

module.exports = router;
