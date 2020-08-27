const express = require("express");
const passport = require("passport");
const router = express.Router();

// This route would be used for google auth
// Currently not implemented
router.get("/google/", passport.authenticate("google", { scope: ["email"] }));
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${process.env.WEBAPP_ROOT_URL}/#/home`,
  }),
  (req, res) => res.redirect(process.env.WEBAPP_ROOT_URL) // successful redirect
);

// this is necessary for oauth login with facebook
router.get(
  "/facebook/",
  passport.authenticate("facebook", { scope: ["email"] })
);
router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    failureRedirect: `${process.env.WEBAPP_ROOT_URL}/login`,
  }),
  (req, res) => {
    // FB adds _=_ to the callback url, gross. Force it to be gone by appending /#/ to the end
    // so that React Router doesn't choke on it.
    res.redirect(`${process.env.WEBAPP_ROOT_URL}/home#/`); // successful redirect
  }
);
module.exports = router;
