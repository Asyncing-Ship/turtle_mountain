"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("tasks", [
      {
        title: "This is an example",
        content: "of a task",
        user_id: 1,
      },
      {
        title: "This is another example",
        content: "of a task",
        user_id: 1,
      },
      {
        title: "And another example",
        content: "of a task",
        user_id: 1,
      },
      {
        title: "Last example",
        content: "of a task",
        user_id: 1,
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("tasks", null, {});
  },
};
