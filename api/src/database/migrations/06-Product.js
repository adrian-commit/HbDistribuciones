'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', { 
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true 
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sku: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true
      },
      model: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      price: {
        type: Sequelize.BIGINT,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};
