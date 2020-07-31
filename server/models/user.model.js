

const Sequelize = require("sequelize");
const sequelize = require("../modules/orm.config");

// Model configuration to adjust defaults
const config = {
  freezeTableName: true, // Don't use plural for table names
  underscored: true, // Use snake_case not camelCase for attributes
};

// Model for artist table
// see: https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html#instance-method-define
const User = sequelize.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true, // SERIAL
      primaryKey: true, // Primary Key
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false, // NOT NULL
    },
  },
  config
);

module.exports = User;
