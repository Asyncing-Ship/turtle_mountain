"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        email: "example@example.com",
        password:
          "$2a$10$DWc6kfBkeNAj3vJYoIC0I.uCJPWw1CprC0Y4d35Fja0ULGMaGPVPu",
        first_name: "John",
        last_name: "Doe",
        is_approved: true,
        is_admin: false,
      },
      {
        email: "testing@testing.com",
        password:
          "$2a$10$BH7wdd7jFHiJKR4SAkUWUuo9jtwpXXZtVGi1kbXUKbGTETt4ftMwq",
        first_name: "Robert",
        last_name: "Smith",
        is_approved: false,
        is_admin: false,
      },
      {
        email: "admin@admin.com",
        password:
          "$2a$10$XzFN2wQn0ZZxORT7.M0c/.wND.K.AOEU5UrCj0nhYNTE/E9ojMMqC",
        first_name: "Erin",
        last_name: "Swanson",
        is_approved: true,
        is_admin: true,
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("tests", null, {});
  },
};
