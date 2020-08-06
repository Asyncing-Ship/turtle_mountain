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

module.exports = router;