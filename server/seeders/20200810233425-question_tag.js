"use strict";
// all seeders are a feature of sequelize so you can input test data in the database

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("question_tag", [
      {
        user_id: 1,
        question_id: 1,
      },
      {
        user_id: 2,
        question_id: 1,
      },
      {
        user_id: 1,
        question_id: 2,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("question_tag", null, {});
  },
};
