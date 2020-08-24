// Express
const express = require("express");

// Dotenv
require("dotenv").config();

// Body Parser
const bodyParser = require("body-parser");

// Session Middleware
const sessionMiddleware = require("./modules/session-middleware");

//  ----- These are test requires -----
// Uncomment code for testing
// model imports
// const User = require("./models/user.model");
// const Question = require("./models/question.model");
// const Task = require("./models/task.model");
// const Policy = require("./models/policy.model");
// const Question_Response = require("./models/question.response.model");
// const Task_Response = require("./models/task.response.model");

// Variables
const app = express();
const passport = require("./strategies/user.strategy");
require("./strategies/facebook.strategy");

// Router imports
const questionRouter = require("./routes/question.router");
const taskRouter = require("./routes/tasks.router");
const taskResponseRouter = require("./routes/task.response.router");
const questionResponseRouter = require("./routes/question.response.router");
const userRouter = require("./routes/user.router");
const oauthRouter = require("./routes/oauth.router");
const policyRouter = require("./routes/policy.router");
const questionTagRouter = require("./routes/question.tag.router");
const taskTagRouter = require("./routes/task.tag.router");
const notificationRouter = require("./routes/notification.router");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("build/"));

// Passport Session Configuration
app.use(sessionMiddleware);

// Start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

// API Paths to routers
app.use("/api/user", userRouter);
app.use("/api/auth", oauthRouter);
app.use("/api/question", questionRouter);
app.use("/api/task", taskRouter);
app.use("/api/question_response", questionResponseRouter);
app.use("/api/task_response", taskResponseRouter);
app.use("/api/policy", policyRouter);
app.use("/api/question_tag", questionTagRouter);
app.use("/api/task_tag", taskTagRouter);
app.use("/api/notification", notificationRouter);

// Server port is listening on:
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
  console.log(Date());
});
