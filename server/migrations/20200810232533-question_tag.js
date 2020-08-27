"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // up function creates table in db
    await queryInterface.createTable("question_tag", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id",
        },
      },
      question_id: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "questions",
          key: "id",
        },
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    // down function drops table in db
    await queryInterface.dropTable("question_tag");
  },
};
