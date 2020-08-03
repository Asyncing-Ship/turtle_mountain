const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const { findOrCreateUser } = require("../modules/oauth-utils");

// Do the actual logging in
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: `/api/auth/facebook/callback`, // doesnt seem to require server hostname
      profileFields: ["id", "email", "name"], // need this to get email
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile);

      // extract the email out of the object we got from the provider
      // By using the 'email' scope in the authentication request,
      // we will receive the email address tucked away inside the object.
      // _json is a friendly key that has all properties nested cleanly.

      // _json.email is the same for github too
      const username = profile._json.email;
      if (!username) {
        // if for some reason the username is empty, null, etc.
        // let passport know that it didnt work
        console.log("invalid username, login failed");
        done(null, null);
      } else {
        try {
          const user = await findOrCreateUser(username, "");
          // console.log(user);
          done(null, user);
        } catch (error) {
          done(error, null);
        }
      }
    }
  )
);

module.exports = passport;
