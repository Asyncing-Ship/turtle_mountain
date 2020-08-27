"use strict";
// These are migrations that will setup our database
// They will be automatically called by the CLI with Sequelize
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // the up function will create a table
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
        defaultValue: false, // Will default a user to a non-admin
      },
      location: {
        type: Sequelize.STRING,
        allowNull: true, // future feature to add locations
      },
      is_approved: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false, // a new registration will start as unapproved
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    // down function drops table in db
    await queryInterface.dropTable("users");
  },
};
