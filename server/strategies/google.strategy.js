const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { findOrCreateUser } = require('../modules/oauth-utils');

// Do the actual logging in
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: `/api/auth/google/callback` // doesnt seem to require server hostname
  }, async (accessToken, refreshToken, profile, done) => {
    console.log(profile);

    // extract the email out of the object we got from Google
    // By using the 'email' scope in the authentication request,
    // we will receive the email address tucked away inside the object.
    // _json is a friendly key that has all properties nested cleanly.

    const username = profile._json.email;
    if (!username) {
        // if for some reason the username is empty, null, etc. 
        // let passport know that it didnt work
        console.log('invalid username, login failed');
        done(null, null);
    } else {
        try {
            const user = await findOrCreateUser(username, '');
            // console.log(user);
            done(null, user);
        } catch (error) {
            done(error, null);
        }
    }
  }
));

module.exports = passport;