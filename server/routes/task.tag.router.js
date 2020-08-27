const express = require("express");
const Task = require("../models/task.model");
const Task_Tag = require("../models/task_tag.model");
const User = require("../models/user.model");
const { rejectUnapproved } = require("../modules/authentication-middleware");

const router = express.Router();

// route for getting all the task_tags for a certain task
router.get("/:id", rejectUnapproved, (req, res) => {
  let taskId = req.params.id;
  // console.log("Task id is: ", taskId);
  Task_Tag.findAll({
    where: { task_id: taskId },
    include: [{ model: User }, { model: Task }],
  })
    .then((tasks) => {
      // console.log("tasks is: ", tasks);
      const list = tasks[0].tagged_users;
      // we will then find all users that are tagged
      User.findAll({
        where: { id: list },
        attributes: ["id", "first_name", "last_name", "is_admin"],
        order: [
          ["is_admin", "DESC"],
          ["first_name", "ASC"],
        ],
      }).then((results) => {
        // console.log("results is: ", results);
        res.send(results);
      });
    })
    .catch((error) => {
      console.log("Error getting all task tags", error);
      res.sendStatus(500);
    });
});

// route to post a task tag
router.post("/", rejectUnapproved, (req, res) => {
  const userId = req.user.id;
  const taskId = req.body.task_id;
  const userIds = req.body.user_ids;
  let newTaskTag = Task_Tag.build({
    tagged_users: userIds,
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
router.delete("/:id", rejectUnapproved, (req, res) => {
  let tagId = req.params.id;
  // console.log(`DELETE request for task tag with id ${tagId}`, req.body);
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
