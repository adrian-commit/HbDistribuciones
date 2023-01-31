'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('quantities', { 
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true 
      },
      product: {
        type: Sequelize.STRING,
        allowNull: false
      },
      stock: {
        type: Sequelize.BIGINT,
        default: 0
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('quantities');
  }
};
