const express = require("express");
const Task = require("../models/task.model");
const Task_Response = require("../models/task_response.model");
const User = require("../models/user.model");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

const router = express.Router();

// This route *should* return the logged in users pets
router.get("/", rejectUnauthenticated, (req, res) => {
  // console.log("GET all task responses");
  Task_Response.findAll({
    include: [{ model: User }, { model: Task }],
    order: [["date_posted", "DESC"]],
  })
    .then((responses) => {
      // responses will be an array of all Task_Response instances
      // console.log('Found all responses', responses);
      res.send(responses);
    })
    .catch((error) => {
      console.log("Error getting all task responses", error);
      res.sendStatus(500);
    });
});

router.get("/:id", rejectUnauthenticated, (req, res) => {
  let responseId = req.params.id;
  console.log(`GET request for task response with id  ${responseId}`);
  Task_Response.findAll({
    where: { id: responseId },
    include: [{ model: User }, { model: Task }],
  })
    .then((responses) => {
      console.log("Found Task Response", responses);
      res.send(responses[0] || []);
    })
    .catch((error) => {
      console.log(`Error getting task response with id ${responseId}`, error);
      res.sendStatus(500);
    });
});

router.post("/", rejectUnauthenticated, (req, res) => {
  const responseContent = req.body.content;
  const responseVerified = false; // req.body.verified; TODO FIX THIS
  const userId = req.user.id;
  const taskId = req.body.task_id;

  // console.log(`POST task response adding response`, req.body);

  let newTaskResponse = Task_Response.build({
    content: responseContent,
    verified: responseVerified,
    userId: userId,
    taskId: taskId,
  });
  // Save to database
  newTaskResponse
    .save()
    .then((responses) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("Error adding task response ", error);
      res.sendStatus(500);
    });
});

// Route to update the content of the response
router.put("/:id", rejectUnauthenticated, (req, res) => {
  let responseId = req.params.id;
  let responseContent = req.body.content;
  // console.log(
  //   `PUT request update content for task response with id ${responseId}`,
  //   req.body
  // );
  let updates = {
    content: responseContent,
  };
  Task_Response.update(updates, { where: { id: responseId } })
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error updating task response with id ${responseId}`, error);
      res.sendStatus(500);
    });
});

// Route to verify a response
router.put("/verify/:id", rejectUnauthenticated, (req, res) => {
  let responseId = req.params.id;
  // console.log(
  //   `PUT request verify task response for id ${responseId}`,
  //   req.body
  // );
  let updates = {
    verified: true,
  };
  Task_Response.update(updates, { where: { id: responseId } })
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error verifying task response with id ${responseId}`, error);
      res.sendStatus(500);
    });
});

router.delete("/:id", rejectUnauthenticated, (req, res) => {
  let responseId = req.params.id;
  // console.log(`DELETE request for response with id ${responseId}`, req.body);
  Task_Response.destroy({ where: { id: responseId } })
    .then((responses) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error deleting task response with id ${responseId}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
