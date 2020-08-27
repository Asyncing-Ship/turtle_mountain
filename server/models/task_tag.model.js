const Sequelize = require("sequelize");
const sequelize = require("../modules/orm.config");

const config = {
  freezeTableName: true, // Don't use plural for table names
  underscored: true, // Use snake_case not camelCase for attributes
  timestamps: false,
};

// Model for task tag
const Task_Tag = sequelize.define(
  "task_tag",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tagged_users: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
      allowNull: true,
    },
  },
  config
);

const User = require("./user.model");
Task_Tag.belongsTo(User, {
  foreignKey: {
    allowNull: false,
  },
  onDelete: "CASCADE",
});

const Task = require("./task.model");
Task_Tag.belongsTo(Task, {
  foreignKey: {
    allowNull: false,
  },
  onDelete: "CASCADE",
});

module.exports = Task_Tag;
