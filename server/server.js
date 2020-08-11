const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");

const sessionMiddleware = require("./modules/session-middleware");

// model imports
// const User = require("./models/user.model");
// const Question = require("./models/question.model");
// const Task = require("./models/task.model");
// const Policy = require("./models/policy.model");
// const Question_Response = require("./models/question.response.model");
// const Task_Response = require("./models/task.response.model");

const app = express();
const passport = require("./strategies/user.strategy");
require("./strategies/facebook.strategy");

// router imports
const questionRouter = require("./routes/question.router");
const taskRouter = require("./routes/tasks.router");
const taskResponseRouter = require("./routes/task.response.router");
const questionResponseRouter = require("./routes/question.response.router");
const userRouter = require("./routes/user.router");
const oauthRouter = require("./routes/oauth.router");
const policyRouter = require("./routes/policy.router");
const questionTagRouter = require("./routes/question.tag.router");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("server/public"));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/user", userRouter);
app.use("/api/auth", oauthRouter);
app.use("/api/question", questionRouter);
app.use("/api/task", taskRouter);
app.use("/api/question_response", questionResponseRouter);
app.use("/api/task_response", taskResponseRouter);
app.use("/api/policy", policyRouter);
app.use("/api/question_tag", questionTagRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
  console.log(Date());
});
