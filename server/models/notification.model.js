const Sequelize = require("sequelize");
const sequelize = require("../modules/orm.config");

const config = {
  freezeTableName: true, // Don't use plural for table names
  underscored: true, // Use snake_case not camelCase for attributes
  timestamps: false,
};

// Model for an Response - assumes table name is plural or 'responses'
const Notification = sequelize.define(
  "notifications",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    preview: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    date_posted: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn("now"),
    },
  },
  config
);

// These are probably gonna need to be updated!
const User = require("./user.model");
Notification.belongsTo(User, {
  foreignKey: {
    allowNull: false,
  },
  onDelete: "CASCADE",
});

const Question = require("./question.model");
Notification.belongsTo(Question, {
  foreignKey: {
    allowNull: true, // doing this for now because doesnt HAVE to belong to question
  },
  onDelete: "CASCADE",
});

const Task = require("./task.model");
Notification.belongsTo(Task, {
  foreignKey: {
    allowNull: true, // doing this for now because doesnt HAVE to belong to task
  },
  onDelete: "CASCADE",
});

const Question_Response = require("./question_response.model");
Notification.belongsTo(Question_Response, {
  foreignKey: {
    allowNull: true, // doing this for now because doesnt HAVE to belong to question_response
  },
  onDelete: "CASCADE",
});

const Task_Response = require("./Task_response.model");
Notification.belongsTo(Task_Response, {
  foreignKey: {
    allowNull: true, // doing this for now because doesnt HAVE to belong to task_response
  },
  onDelete: "CASCADE",
});

module.exports = Notification;
