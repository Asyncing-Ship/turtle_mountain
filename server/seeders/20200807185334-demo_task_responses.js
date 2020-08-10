"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("task_response", [
      {
        content: "Task Response Demo",
        user_id: 1,
        task_id: 1,
      },
      {
        content: "Task Response Demo",
        user_id: 1,
        task_id: 2,
      },
      {
        content: "Task Response Demo",
        user_id: 1,
        task_id: 3,
      },
      {
        content: "Task Response Demo",
        user_id: 1,
        task_id: 4,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("task_responses", null, {});
  },
};
