const Sequelize = require("sequelize");
const sequelize = require("../modules/orm.config");

const config = {
  freezeTableName: true, // Don't use plural for table names
  underscored: true, // Use snake_case not camelCase for attributes
  timestamps: false, // Disable timestamps
};

// Model for a policy - assumes table name is plural or 'policies'
const Policy = sequelize.define(
  "policies",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    filename: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    handle: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    date_posted: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn("now"),
    },
  },
  config
);

module.exports = Policy;
