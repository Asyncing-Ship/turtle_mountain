/*
    Just a few utility functions to help with OAuth user functionality
*/
const pool = require("./pool");

/*
  Find a user with the given username, and if the user does not
  exist, create the user. The password is assumed to have already
  been hashed, processec, etc. before being passed in.
*/
async function findOrCreateUser(username, first_name, last_name, password) {
  async function findUser(username) {
    try {
      const result = await pool.query(
        'SELECT * from "users" where email = $1;',
        [username]
      );
      const user = result && result.rows && result.rows[0];
      return user || null;
    } catch (error) {
      console.log("Error executing query", error);
      return null;
    }
  }

  async function createUser(username, first_name, last_name, password) {
    console.log(username, first_name, last_name);
    // assumes that password has already been encrypted
    try {
      await pool.query(
        'INSERT INTO "users" (email, first_name, last_name, password) values ($1, $2, $3, $4) RETURNING id',
        [username, first_name, last_name, password]
      );
      const user = await findUser(username);
      return user;
    } catch (error) {
      console.log("Error executing query", error);
      return null;
    }
  }

  // Look for a user that matches, return the user if found
  let user = await findUser(username);
  if (user) return user;

  // User doesn't exist, so let's create one
  console.log("user doesnt exist... creating");
  user = await createUser(username, first_name, last_name, password);
  return user;
}

exports.findOrCreateUser = findOrCreateUser;
