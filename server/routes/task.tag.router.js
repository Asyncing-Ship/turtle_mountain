const express = require("express");
const Task = require("../models/task.model");
const Task_Tag = require("../models/task_tag.model");
const User = require("../models/user.model");

const router = express.Router();

// This route *should* return the logged in users pets
router.get("/", (req, res) => {
  console.log("GET all task tags");
  Task_Tag.findAll({
    include: [{ model: User }],
    include: [{ model: Task }],
  })
    .then((responses) => {
      // responses will be an array of all Task_Tag instances
      // console.log('Found all tags', responses);
      res.send(responses);
    })
    .catch((error) => {
      console.log("Error getting all tasks tags", error);
      res.sendStatus(500);
    });
});

router.get("/:id", (req, res) => {
  let tagId = req.params.id;
  console.log(`GET request for tasks tags with id  ${tagId}`);
  Task_Tag.findAll({
    where: { id: tagId },
    include: [{ model: User }],
    include: [{ model: Task }],
  })
    .then((responses) => {
      console.log("Found task tags", responses);
      res.send(responses[0] || []);
    })
    .catch((error) => {
      console.log(`Error getting task tags with id ${tagId}`, error);
      res.sendStatus(500);
    });
});

router.post("/", (req, res) => {
  const userId = req.body.user.id;
  const taskId = req.body.task_id;
  console.log(`POST task tags, adding tags`, req.body);

  let newTaskTag = Task_Tag.build({
    userId: userId,
    taskId: taskId,
  });
  // Save to database
  newTaskTag
    .save()
    .then((responses) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("Error adding task tags ", error);
      res.sendStatus(500);
    });
});

// Route to delete a tag
router.delete("/:id", (req, res) => {
  let tagId = req.params.id;
  console.log(`DELETE request for task tag with id ${tagId}`, req.body);
  Task_Tag.destroy({ where: { id: tagId } })
    .then((responses) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error deleting task tags with id ${tagId}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
