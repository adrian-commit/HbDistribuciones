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
        allowNull: true,
        references: {
          model:'products',
          field:'id'
        },
        onUpdate:'set null',
        onDelete:'set null'
      },
      request: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model:'requests',
          field:'id'
        },
        onUpdate:'set null',
        onDelete:'set null'
      },
      price: {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      quantity: {
        type: Sequelize.BIGINT,
        allowNull: true
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('items');
  }
};