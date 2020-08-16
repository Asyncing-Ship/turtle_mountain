"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("task_response", [
      {
        content:
          "I'll get our Amazon wishlist updated by the end of the week, thanks for the reminder.",
        user_id: 3,
        task_id: 1,
      },
      {
        content: "I can order more supplies.",
        user_id: 2,
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
