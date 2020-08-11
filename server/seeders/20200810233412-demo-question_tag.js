"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("task_tag", [
      {
        user_id: 1,
        task_id: 1,
      },
      {
        user_id: 2,
        task_id: 1,
      },
      {
        user_id: 1,
        task_id: 2,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("task_tag", null, {});
  },
};
