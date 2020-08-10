"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true, // SERIAL
        primaryKey: true, // Primary Key
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false, // NOT NULL
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: true, // Allowing null for those who register and sign in through Facebook.
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false, // NOT NULL
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false, // NOT NULL
      },
      is_admin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: true, // NOT NULL
      },
      is_approved: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users");
  },
};
