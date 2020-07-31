const express = require('express');
require("dotenv").config();
const bodyParser = require('body-parser');

const sessionMiddleware = require("./modules/session-middleware");

const app = express();
const passport = require("./strategies/user.strategy");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('server/public'));


// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || 5432;
app.listen(port, () => {
  console.log('listening on port', port);
});
