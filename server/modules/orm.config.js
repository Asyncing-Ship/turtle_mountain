const Sequelize = require('sequelize');
// Update database name
const DATABASE_NAME = 'turtle_mountain_connect';

// Configure Sequelize instance
let sequelize = null;
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL);
} else {
  let connectionString = `postgres://localhost:5432/${DATABASE_NAME}`;
  sequelize = new Sequelize(connectionString, { operatorsAliases: false });
}

// Optional: Test the connection
sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

module.exports = sequelize;