'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('items', { 
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true 
      },
      product: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      request: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      price: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      quntity: {
        type: Sequelize.BIGINT,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('items');
  }
};