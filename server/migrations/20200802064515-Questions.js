"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // up function creates table in db
    await queryInterface.createTable("questions", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      content: {
        type: Sequelize.STRING(1000),
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
        defaultValue: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id",
        },
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    // down function drops table in db
    await queryInterface.dropTable("questions");
  },
};
