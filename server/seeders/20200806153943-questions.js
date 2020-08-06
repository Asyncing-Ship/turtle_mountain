"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("questions", [
      {
        title: "This is an example",
        content: "of a question",
        added_by: 1,
      },
      {
        title: "This is another example",
        content: "of a question",
        added_by: 1,
      },
      {
        title: "And another example",
        content: "of a question",
        added_by: 1,
      },
      {
        title: "Last example",
        content: "of a question",
        added_by: 1,
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("questions", null, {});
  },
};
