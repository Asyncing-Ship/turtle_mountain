const express = require('express');
const router = express.Router();
const Policy = require("../models/policy.model");

router.get("/", (req, res) => {
  console.log("GET policies");
  Policy
    .findAll()
    .then(result => res.send(result))
    .catch(error => console.log(error));
});

router.post("/new", (req, res) => {
  let NewPolicy = Policy.build({
    filename: req.body.filename,
    handle: req.body.handle,
  });

  NewPolicy
    .save()
    .then(result => res.sendStatus(200))
    .catch(error => res.sendStatus(500));
});

module.exports = router;