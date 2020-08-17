"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("notifications", [
      // Notifications on question responses
      {
        type: "Question Response",
        preview: "Lucy Good With Kids?",
        user_id: 1,
        first_name: "Robert",
        last_name: "Smith",
        is_admin: false,
      },
      {
        type: "Question Response",
        preview: "Volunteers in California",
        user_id: 1,
        first_name: "Erin",
        last_name: "Swanson",
        is_admin: true,
      },
      {
        type: "Question Response",
        preview: "Any Cats Available Near Sioux Falls",
        user_id: 2,
        first_name: "Erin",
        last_name: "Swanson",
        is_admin: true,
      },
      {
        type: "Question Response",
        preview: "Shift Change",
        user_id: 3,
        first_name: "Robert",
        last_name: "Smith",
        is_admin: false,
      },
      // notificaitons on task responses
      {
        type: "Task Response",
        preview: "Update our Amazon Wishlist",
        user_id: 1,
        first_name: "Erin",
        last_name: "Swanson",
        is_admin: true,
      },
      {
        type: "Task Response",
        preview: "Cleaning Supplies",
        user_id: 2,
        first_name: "Robert",
        last_name: "Smith",
        is_admin: false,
      },
      {
        type: "Task Response",
        preview: "Contact Board Members",
        user_id: 3,
        first_name: "John",
        last_name: "Doe",
        is_admin: false,
      },
      {
        type: "Task Response",
        preview: "Update Policies",
        user_id: 3,
        first_name: "John",
        last_name: "Doe",
        is_admin: false,
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("policies", null, {});
  },
};
