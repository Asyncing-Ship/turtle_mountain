const Sequelize = require("sequelize");
const sequelize = require("../modules/orm.config");

const config = {
  freezeTableName: true, // Don't use plural for table names
  underscored: true, // Use snake_case not camelCase for attributes
  timestamps: false,
};

// Model for an album - assumes table name is plural or 'albums'
const Question = sequelize.define(
  "questions",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    content: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    is_answered: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    times_asked: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    date_posted: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn("now"),
    },
    asked_by: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  config
);

const User = require("./user.model");
Question.belongsTo(User, {
  foreignKey: {
    allowNull: false,
  },
  onDelete: "CASCADE",
});

module.exports = Question;
