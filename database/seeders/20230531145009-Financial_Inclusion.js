module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Financial_Inclusions",
      [
        {
          FII: "Formally served",
          year2008: 21,
          year2012: 42,
          year2016: 68,
          year2020: 77,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          FII: "Banked",
          year2008: 14,
          year2012: 23,
          year2016: 26,
          year2020: 36,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Financial_Inclusions", null, {}),
};
