"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("task_tag", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      tagged_users: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: true,
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
    await queryInterface.dropTable("task_tag");
  },
};
