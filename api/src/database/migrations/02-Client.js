'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('clients', { 
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true 
      },
      email: {
        type: Sequelize.TEXT,
        allowNull: true,
        unique: true
      },
      address: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      phone: {
        type: Sequelize.BIGINT,
        allowNull: true,
        unique: true
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('clients');
  }
};
