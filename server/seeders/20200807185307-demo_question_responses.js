"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("question_response", [
      {
        content: "Question Answer Demo",
        user_id: 1,
        question_id: 1,
      },
      {
        content: "Question Answer Demo",
        user_id: 1,
        question_id: 2,
      },
      {
        content: "Question Answer Demo",
        user_id: 1,
        question_id: 3,
      },
      {
        content: "Question Answer Demo",
        user_id: 1,
        question_id: 4,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("question_response", null, {});
  },
};
