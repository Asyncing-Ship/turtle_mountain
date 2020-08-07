const express = require("express");
const Task = require("../models/task.model");
const Task_Response = require("../models/task_response.model");
const User = require("../models/user.model");

const router = express.Router();

// This route *should* return the logged in users pets
router.get("/", (req, res) => {
  console.log("GET all task responses");
  Task_Response.findAll({
    include: [{ model: User }],
    include: [{ model: Task }],
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

router.get("/:id", (req, res) => {
  let responseId = req.params.id;
  console.log(`GET request for task response with id  ${responseId}`);
  Task_Response.findAll({
    where: { id: responseId },
    include: [{ model: User }],
    include: [{ model: Task }],
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

router.post("/", (req, res) => {
  const responseContent = req.body.content;
  const responseVerified = false; // req.body.verified; TODO FIX THIS
  const userId = req.user.id;

  console.log(`POST task response adding response`, req.body);

  let newTaskResponse = Task_Response.build({
    content: responseContent,
    verified: responseVerified,
    userId: userId,
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
router.put("/:id", (req, res) => {
  let responseId = req.params.id;
  let responseContent = req.body.content;
  console.log(
    `PUT request update content for task response with id ${responseId}`,
    req.body
  );
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
router.put("/verify/:id", (req, res) => {
  let responseId = req.params.id;
  console.log(
    `PUT request verify task response for id ${responseId}`,
    req.body
  );
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

router.delete("/:id", (req, res) => {
  let responseId = req.params.id;
  console.log(`DELETE request for response with id ${responseId}`, req.body);
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
