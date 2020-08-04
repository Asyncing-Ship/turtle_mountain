const Sequelize = require("sequelize");
const sequelize = require("../modules/orm.config");

// Model configuration to adjust defaults
const config = {
  freezeTableName: true, // Don't use plural for table names
  underscored: true, // Use snake_case not camelCase for attributes
};

// Model for user table
// see: https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html#instance-method-define
const User = sequelize.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true, // SERIAL
      primaryKey: true, // Primary Key
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false, // NOT NULL
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: true, // Allowing null for those who register and sign in through Facebook.
    },
    first_name: {
      type: Sequelize.STRING,
      allowNull: false, // NOT NULL
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: false, // NOT NULL
    },
    isAdmin: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    location: {
      type: Sequelize.STRING,
      allowNull: true, // NOT NULL
    },
  },
  config
);

module.exports = User;
