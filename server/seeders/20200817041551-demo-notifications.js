"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("notifications", [
      // Notifications on question responses
      {
        type: "responded to a question you created",
        preview: "Lucy Good With Kids?",
        user_id: 1,
        first_name: "Robert",
        last_name: "Smith",
        is_admin: false,
      },
      {
        type: "responded to a question you created",
        preview: "Volunteers in California",
        user_id: 1,
        first_name: "Erin",
        last_name: "Swanson",
        is_admin: true,
      },
      {
        type: "responded to a question you created",
        preview: "Any Cats Available Near Sioux Falls",
        user_id: 2,
        first_name: "Erin",
        last_name: "Swanson",
        is_admin: true,
      },
      {
        type: "responded to a question you created",
        preview: "Shift Change",
        user_id: 3,
        first_name: "Robert",
        last_name: "Smith",
        is_admin: false,
      },
      // notificaitons on task responses
      {
        type: "accepted a task you created",
        preview: "Update our Amazon Wishlist",
        user_id: 1,
        first_name: "Erin",
        last_name: "Swanson",
        is_admin: true,
      },
      {
        type: "accepted a task you created",
        preview: "Cleaning Supplies",
        user_id: 2,
        first_name: "Robert",
        last_name: "Smith",
        is_admin: false,
      },
      {
        type: "accepted a task you created",
        preview: "Contact Board Members",
        user_id: 3,
        first_name: "John",
        last_name: "Doe",
        is_admin: false,
      },
      {
        type: "accepted a task you created",
        preview: "Update Policies",
        user_id: 3,
        first_name: "John",
        last_name: "Doe",
        is_admin: false,
      },
      // Task Tags {23} {13} {12} {12}
      // john doe, robert smith, erin swanson
      {
        type: "tagged you in a task",
        preview: "Update our Amazon Wishlist",
        user_id: 1,
        first_name: "Robert",
        last_name: "Smith",
        is_admin: false,
      },
      {
        type: "tagged you in a task",
        preview: "Update our Amazon Wishlist",
        user_id: 1,
        first_name: "Erin",
        last_name: "Swanson",
        is_admin: true,
      },
      {
        type: "tagged you in a task",
        preview: "Cleaning Supplies",
        user_id: 2,
        first_name: "John",
        last_name: "Doe",
        is_admin: false,
      },
      {
        type: "tagged you in a task",
        preview: "Cleaning Supplies",
        user_id: 2,
        first_name: "Erin",
        last_name: "Swanson",
        is_admin: true,
      },
      {
        type: "tagged you in a task",
        preview: "Contact Board Members",
        user_id: 3,
        first_name: "John",
        last_name: "Doe",
        is_admin: false,
      },
      {
        type: "tagged you in a task",
        preview: "Contact Board Members",
        user_id: 3,
        first_name: "Robert",
        last_name: "Smith",
        is_admin: false,
      },
      {
        type: "tagged you in a task",
        preview: "Update Policies",
        user_id: 3,
        first_name: "John",
        last_name: "Doe",
        is_admin: false,
      },
      {
        type: "tagged you in a task",
        preview: "Update Policies",
        user_id: 3,
        first_name: "Robert",
        last_name: "Smith",
        is_admin: false,
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("policies", null, {});
  },
};
