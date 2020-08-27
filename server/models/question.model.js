const Sequelize = require("sequelize");
const sequelize = require("../modules/orm.config");

const config = {
  freezeTableName: true, // Don't use plural for table names
  underscored: true, // Use snake_case not camelCase for attributes
  timestamps: false,
};

// Model for a question - assumes table name is plural or 'questions'
const Question = sequelize.define(
  "questions",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING(50), // limits title to 50 characters
      allowNull: false,
    },
    content: {
      type: Sequelize.STRING(1000), // limits content to 1000 characters
      allowNull: false,
    },
    is_answered: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    is_verified: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    times_asked: {
      // future feature that will need to be implemented
      // with keeping track of how many times a question is asked
      // we could automatically set it as 'frequent' at a certain amount
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    date_posted: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn("now"),
    },
    is_frequent: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
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
