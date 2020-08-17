const express = require("express");
const Notification = require("../models/notification.model");
const User = require("../models/user.model");

// potential imports

const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

const router = express.Router();

router.get("/", rejectUnauthenticated, (req, res) => {
  // console.log("GET notifications");
  Notification.findAll({
    where: { user_id: req.user.id },
    include: [{ model: User }],
    order: [["date_posted", "DESC"]],
  })
    .then((notis) => {
      res.send(notis);
    })
    .catch((error) => {
      console.log("Error getting all notifications", error);
      res.sendStatus(500);
    });
});

router.get("/:id", rejectUnauthenticated, (req, res) => {
  const toId = req.user.id;
  const fromId = req.params.id;
  Notification.findAll({
    where: { user_id: toId },
    include: [{ model: User }],
  })
    .then((notis) => {
      // console.log("notifications are: ", notis);
      User.findAll({
        where: { id: fromId },
        attributes: ["first_name", "last_name", "is_admin"],
      }).then((results) => {
        // console.log("results is: ", results);
        // console.log("notis are: ", notis);
        const newArray = [notis, results];
        console.log("Combined array: ", newArray);
        res.send(newArray);
      });
    })
    .catch((error) => {
      console.log("Error getting all task tags", error);
      res.sendStatus(500);
    });
});

router.post("/", rejectUnauthenticated, (req, res) => {
  const userId = req.user.id;
  const type = req.body.type;
  const preview = req.body.preview;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const is_admin = req.body.is_admin;
  let newNotification = Notification.build({
    type: type,
    userId: userId,
    preview: preview,
    first_name: first_name,
    last_name: last_name,
    is_admin: is_admin

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
