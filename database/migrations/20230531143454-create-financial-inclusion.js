'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Financial_Inclusions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      FII: {
        type: Sequelize.STRING,
      },
      year2008: {
        type: Sequelize.FLOAT,
      },
      year2012: {
        type: Sequelize.FLOAT,
      },
      year2016: {
        type: Sequelize.FLOAT,
      },
      year2020: {
        type: Sequelize.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Financial_Inclusions');
  }
};