const Sequelize = require("sequelize");
const sequelize = require("../modules/orm.config");

const config = {
  freezeTableName: true, // Don't use plural for table names
  underscored: true, // Use snake_case not camelCase for attributes
};

// Model for an Response - assumes table name is plural or 'responses'
const Question_Response = sequelize.define(
  "question_response",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    verified: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    date_posted: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn("now"),
    },
    asked_by: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  },
  config
);

const User = require("./user.model");
Quesiton_Response.belongsTo(User, {
  foreignKey: {
    allowNull: false,
  },
  onDelete: "CASCADE",
});

const Question = require("./question.model");
Question_Response.belongsTo(Question, {
  foreignKey: {
    allowNull: false,
  },
  onDelete: "CASCADE",
});


module.exports = Question_Response;