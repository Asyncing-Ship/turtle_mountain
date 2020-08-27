"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // up function creates table in db
    await queryInterface.createTable("task_response", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      content: {
        type: Sequelize.STRING(160),
        allowNull: false,
      },
      date_posted: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
      },
      user_id: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id",
        },
      },
      task_id: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "tasks",
          key: "id",
        },
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    // down function drops table in db
    await queryInterface.dropTable("task_response");
  },
};
