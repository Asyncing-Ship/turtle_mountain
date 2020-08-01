const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");

const sessionMiddleware = require("./modules/session-middleware");

const app = express();
const passport = require("./strategies/user.strategy");
require("./strategies/google.strategy");
require("./strategies/facebook.strategy");

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

const port = process.env.PORT || 5432;
app.listen(port, () => {
  console.log("listening on port", port);
});
