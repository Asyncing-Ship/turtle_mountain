"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        email: "example@example.com",
        password: "password",
        first_name: "First",
        last_name: "Last",
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("tests", null, {});
  },
};
