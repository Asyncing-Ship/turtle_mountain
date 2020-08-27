"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // up function creates table in db
    await queryInterface.createTable("policies", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      filename: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      handle: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date_posted: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    // down function drops table in db
    await queryInterface.dropTable("policies");
  },
};
