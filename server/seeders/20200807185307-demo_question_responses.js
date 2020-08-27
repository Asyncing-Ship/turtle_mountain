"use strict";
// all seeders are a feature of sequelize so you can input test data in the database

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("question_response", [
      {
        content: "Yes Lucy is great around kids!",
        user_id: 2,
        question_id: 1,
      },
      {
        content:
          "No we currently do not have any volunteers in California. We are talking with some of our partners to get more advertising to get some volunteers in that area.",
        user_id: 3,
        question_id: 2,
      },
      {
        content:
          "We currently have 2 cats available there, with another one waiting for shots who will be ready for adoption soon.",
        user_id: 3,
        question_id: 3,
      },
      {
        content:
          "I have no plans that day so I can take your shift no problem.",
        user_id: 2,
        question_id: 4,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("question_response", null, {});
  },
};
