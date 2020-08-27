"use strict";
// all seeders are a feature of sequelize so you can input test data in the database

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("questions", [
      {
        title: "Lucy Good With Kids?",
        content:
          "I was wondering if anyone knew whether Lucy the golden retriever in Belcourt, ND is good with kids?",
        is_frequent: false,
        user_id: 1,
      },
      {
        title: "Volunteers in California",
        content: "Do we currently have any volunteers working in California?",
        is_frequent: false,
        user_id: 1,
      },
      {
        title: "Any Cats Available Near Sioux Falls",
        content:
          "Do we have any cats in or near Sioux Falls at all? We have a client who's looking for one in that area!",
        is_frequent: false,
        user_id: 2,
      },
      {
        title: "Shift Change",
        content:
          "Can somebody take John's shift on August 27th? He has an event to attend and will not be able to work that day, thanks!",
        is_frequent: false,
        user_id: 3,
      },
      {
        title: "Background Checks",
        content:
          "Do we do background checks on anyone who adopts a pet through us?",
        is_frequent: true,
        user_id: 3,
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("questions", null, {});
  },
};
