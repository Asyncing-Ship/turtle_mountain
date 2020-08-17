const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
//const userStrategy = require("../strategies/user.strategy");

const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

// JOIN task_comments ON task_comments.task_id = tasks.id
router.put("/complete/:id", rejectUnauthenticated, (req, res) => {
  let id = req.params.id;
  const queryText = `
    UPDATE tasks SET status='Complete'
    WHERE id = $1`;
  pool
    .query(queryText, [id])
    .then(() => res.sendStatus(204))
    .catch((error) => console.log(error));
});
/**
 * Get all of the tasks on the table
 */
router.get("/", rejectUnauthenticated, (req, res) => {
  console.log("getting tasks");
  const queryText = `SELECT first_name, last_name, tasks.id, tasks.title, tasks.status, tasks.content,tasks.assigned_to, tasks.user_id, tasks.date_posted FROM users
  JOIN tasks ON tasks.user_id = users.id
  ORDER BY status DESC, date_posted DESC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error making SELECT from tasks", error);
      res.sendStatus(500);
    });
});

/**
 * Add an tasks for the logged in user to the table
 */
router.post("/", rejectUnauthenticated, (req, res) => {
  console.log("Adding task to the database");
  console.log(req.body);

  const title = req.body.title;
  const body = req.body.content;
  const user = req.user.id;
  const queryText = `
    INSERT INTO tasks (title, content, user_id)
    VALUES ($1, $2, $3) returning id`;
  pool
    .query(queryText, [title, body, user])
    .then((result) => res.send(result))
    .catch(() => res.sendStatus(500));
});

/**
 * Delete an tasks if it's something the logged in user added
 */
router.delete("/:id", rejectUnauthenticated, (req, res) => {
  let id = req.params.id;
  let user_id = req.user.id;
  console.log(`ID from params: ${id}`);
  console.log(`user_id from req.user.id: ${user_id}`);

  let queryText = `
    DELETE FROM tasks WHERE id = $1 AND user_id = $2`;
  pool
    .query(queryText, [id, user_id])
    .then(() => res.sendStatus(203))
    .catch((error) => res.send(error));
});

/**
 * Update an tasks if it's something the logged in user added
 */
router.put("/accept/:id", rejectUnauthenticated, (req, res) => {
  let assigned_to = req.user.id;
  let id = req.params.id;
  const queryText = `
    UPDATE tasks SET status='In Progress', assigned_to = $1 
    WHERE id = $2`;
  pool
    .query(queryText, [assigned_to, id])
    .then(() => res.sendStatus(204))
    .catch((error) => console.log(error));
});

/**
 * Add an tasks for the logged in user to the table
 */
router.post("/comments", rejectUnauthenticated, (req, res) => {
  console.log("Adding task comment to the database");
  console.log(req);

  const task = req.body.id;
  const body = req.body.bodytask;
  const user = req.user.id;
  const queryText = `
    INSERT INTO task_comments (user_id, body, task_id)
    VALUES ($1, $2, $3)`;
  pool
    .query(queryText, [user, body, task])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

router.get("/comments/:id", rejectUnauthenticated, (req, res) => {
  console.log("getting task comments", req.params);
  const taskID = req.params.id;
  const queryText = `SELECT task_comments.id, task_comments.user_id, task_comments.body, task_comments.task_id, users.id, users.first_name FROM task_comments
  JOIN users ON users.id = task_comments.user_id
  WHERE task_id = $1 ORDER BY task_comments.id`;
  pool
    .query(queryText, [taskID])
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.log("Error making SELECT in tasks router 102", error);
      res.sendStatus(500);
    });
});

router.put("/likes", rejectUnauthenticated, (req, res) => {
  console.log("adding task like to the database", req.params);
  const taskID = req.params.id;
  const queryText = `UPDATE tasks SET likes = likes + 1 WHERE id = $1`;
  pool
    .query(queryText[taskID])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

/**
 * Return all users along with the total number of tasks
 * they have added to the table
 */
// router.get("/count", (req, res) => {});

/**
 * Return a specific tasks by id
 */
// router.get("/:id", (req, res) => {});

module.exports = router;
