const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");

const sessionMiddleware = require("./modules/session-middleware");
// model imports
const User = require("./models/user.model");
const Question = require("./models/question.model");
const Task = require("./models/task.model");

const app = express();
const passport = require("./strategies/user.strategy");
require("./strategies/facebook.strategy");

// router imports
const questionRouter = require("./routes/question.router");
const taskRouter = require("./routes/task.router");
const userRouter = require("./routes/user.router");
const oauthRouter = require("./routes/oauth.router");

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


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
  console.log(Date());
});
