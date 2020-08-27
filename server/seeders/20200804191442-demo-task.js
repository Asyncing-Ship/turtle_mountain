"use strict";
// all seeders are a feature of sequelize so you can input test data in the database

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("tasks", [
      {
        title: "Update our Amazon Wishlist",
        content:
          "Can we get one of our team members to update our Amazon Wishlist, it is quite outdated!",
        user_id: 1,
      },
      {
        title: "Cleaning Supplies",
        content:
          "Can somebody order more cleaning supplies we are getting low.",
        user_id: 2,
      },
      {
        title: "Contact Board Members",
        content:
          "Can somebody contact our board members and update them on the status of this app?",
        user_id: 3,
      },
      {
        title: "Update Policies",
        content:
          "Erin it looks like the policies page is missing our new code of conduct, can you add it?",
        user_id: 3,
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("tasks", null, {});
  },
};
