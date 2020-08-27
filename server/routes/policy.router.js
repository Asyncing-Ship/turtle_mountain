const express = require("express");
const router = express.Router();
const Policy = require("../models/policy.model");
const { rejectUnapproved } = require("../modules/authentication-middleware");

// route to get all policies
router.get("/", rejectUnapproved, (req, res) => {
  console.log("GET policies");
  Policy.findAll()
    .then((result) => res.send(result))
    .catch((error) => console.log(error));
});

// route to post a new policy
router.post("/new", rejectUnapproved, (req, res) => {
  let NewPolicy = Policy.build({
    filename: req.body.filename,
    handle: req.body.handle,
  });

  NewPolicy.save()
    .then((result) => res.sendStatus(200))
    .catch((error) => res.sendStatus(500));
});

// route to delete a policy based on id
router.delete("/delete/:id", rejectUnapproved, (req, res) => {
  Policy.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((result) => res.sendStatus(200))
    .catch((error) => res.sendStatus(500));
});

module.exports = router;
