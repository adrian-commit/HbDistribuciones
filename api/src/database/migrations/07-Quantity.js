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
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model:'products',
          field:'id'
        },
        onUpdate:'set null',
        onDelete:'set null'
      },
      stock: {
        type: Sequelize.BIGINT,
        allowNull: true,
        default: 0
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('quantities');
  }
};
