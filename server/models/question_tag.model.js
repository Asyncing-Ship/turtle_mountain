const Sequelize = require("sequelize");
const sequelize = require("../modules/orm.config");

const config = {
  freezeTableName: true, // Don't use plural for table names
  underscored: true, // Use snake_case not camelCase for attributes
  timestamps: false,
};

// Model for an Response - assumes table name is plural or 'responses'
const Question_Tag = sequelize.define(
  "question_tag",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  config
);

const User = require("./user.model");
Question_Tag.belongsTo(User, {
  foreignKey: {
    allowNull: false,
  },
  onDelete: "CASCADE",
});

const Task = require("./task.model");
Question_Tag.belongsTo(Task, {
  foreignKey: {
    allowNull: false,
  },
  onDelete: "CASCADE",
});

module.exports = Question_Tag;
