const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");
const userStrategy = require("../strategies/user.strategy");
const { check, validationResult } = require("express-validator");

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get("/", rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post(
  "/register",
  [
    check("email").isEmail().normalizeEmail(),
    check("password").isLength({ mind: 6 }),
  ],
  (req, res, next) => {
    console.log("User is trying to register.");
    // const errors = validationResult(req);
    // if (errors.isEmpty()) {
    //   console.log(errors);
    //   return res.sendStatus(422).json({ errors: errors.array() }); // Commented out for now
    // }
    const email = req.body.email;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const password = encryptLib.encryptPassword(req.body.password);
    console.log(req.body);
    console.log("first name is: ", first_name);
    console.log("last name is: ", last_name);
    const queryText =
      'INSERT INTO "users" (email, password, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING id';
    console.log(`QueryText is: ${queryText}`);
    pool
      .query(queryText, [email, password, first_name, last_name])
      .then(() => res.sendStatus(201))
      .catch((error) => res.send(error).sendStatus(500));
  }
);

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post("/login", userStrategy.authenticate("local"), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post("/logout", (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

// -----------------

// route to get all users
router.get("/all", (req, res) => {
  const queryText = `SELECT id, email, first_name, last_name, is_admin, location, is_approved FROM users`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error making SELECT from users", error);
      res.sendStatus(500);
    });
});

// route to approve a user
router.put("/approve/:id", (req, res) => {
  const userId = req.params.id;
  console.log(`approving user with id ${userId}`);
  const queryText = `UPDATE users SET is_approved = true WHERE id = $1`;
  pool
    .query(queryText[userId])
    .then(() => res.sendStatus(201))
    .catch(() => sendStatus(500));
});

// route to promote a user
router.put("/promote/:id", (req, res) => {
  const userId = req.params.id;
  console.log(`promoting user with id ${userId}`);
  const queryText = `UPDATE users SET is_admin = true WHERE id = $1`;
  pool
    .query(queryText[userId])
    .then(() => res.sendStatus(201))
    .catch(() => sendStatus(500));
});

module.exports = router;
