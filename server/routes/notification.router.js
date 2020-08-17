const express = require("express");
const Notification = require("../models/notification.model");
const User = require("../models/user.model");

// potential imports
const Task = require("../models/task.model");
const Question = require("../models/question.model");
const Question_Response = require("../models/question_response.model");
const Task_Response = require("../models/task_response.model");

const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

const router = express.Router();

// route for getting all the notifications for a certain id
rrouter.get("/:id", rejectUnauthenticated, (req, res) => {
  let notiId = req.params.id;
  Notificaiton.findAll({
    where: { id: notiId },
    include: [
      { model: User },
      { model: Question },
      { model: Task },
      { model: Question_Response },
      { model: Task_Response },
    ],
    order: [["date_posted", "DESC"]],
  })
    .then((noti) => {
      res.send(noti);
    })
    .catch((error) => {
      console.log("Error getting all notifications", error);
      res.sendStatus(500);
    });
});

router.post("/", rejectUnauthenticated, (req, res) => {
  const userId = req.user.id;
  const preview = req.body.preview;
  let newNotification = Notification.build({
    userId: userId,
    preview: preview,
  });
  // Save to database
  newNotification
    .save()
    .then((responses) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("Error adding notification ", error);
      res.sendStatus(500);
    });
});

// Route to delete a tag
router.delete("/:id", rejectUnauthenticated, (req, res) => {
  let notiId = req.params.id;
  console.log(`DELETE request for notification with id ${notiId}`, req.body);
  Notification.destroy({ where: { id: notiId } })
    .then((responses) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error deleting notification with id ${notiId}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
