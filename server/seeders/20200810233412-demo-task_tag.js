"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("task_tag", [
      {
        user_id: 1,
        task_id: 1,
        tagged_users: [2, 3],
      },
      {
        user_id: 2,
        task_id: 2,
        tagged_users: [1, 3],
      },
      {
        user_id: 1,
        task_id: 3,
        tagged_users: [1, 2],
      },
      {
        user_id: 1,
        task_id: 4,
        tagged_users: [1, 2],
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("task_tag", null, {});
  },
};
