"use strict";
const Financial_Inclusions = require("../models/financial_inclusion");
const xlsx = require("xlsx");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const workbook = xlsx.readFile("data.xlsx");
    const sheetName = workbook.SheetNames[0]; 

    const worksheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

    console.log(jsonData);

    const dataRows = jsonData.slice(1); // Exclude the header row

    try {
      await queryInterface.bulkInsert(
        "Financial_Inclusions",
        dataRows.map((row) => ({
          FII: row[0],
          year2008: row[1],
          year2012: row[2],
          year2016: row[3],
          year2020: row[4],
          createdAt: new Date(),
          updatedAt: new Date(),
          // Map the remaining columns accordingly
        }))
      );

      console.log("Data imported successfully!");
    } catch (error) {
      console.error("Error importing data:", error);
    }
  },

  down: async (queryInterface, Sequelize) => {
  
  },
};
