"use strict";
// all seeders are a feature of sequelize so you can input test data in the database

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("policies", [
      {
        filename: "Spay Clinic Application Form.pdf",
        handle: "Hytph0vtRwSU4GhwJ6dJ",
      },
      {
        filename: "Fundraising_Event_Request.pdf",
        handle: "NwyEWprpT3CR9EnruDOp",
      },
      {
        filename: "TMAR_Amazon_Wishlist.pdf",
        handle: "2hSHBYf2TfyasMnXCIUP",
      },
      {
        filename: "TMAR_Disaster_Application.pdf",
        handle: "UI0nfBd7SkepLUC0LDGA",
      },
      {
        filename: "TMAR_Adoption_Application_Cat.pdf",
        handle: "Zhx0W7UtTgigE12jxQjw",
      },
      {
        filename: "TMAR_Foster_Volunteer_Application.pdf",
        handle: "6kwpKD24TV6Bnr709YLG",
      },
      {
        filename: "TMAR_Adoption_Application_Dog.pdf",
        handle: "T3NoWffoT1SW4xLa3J5B",
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("policies", null, {});
  },
};
