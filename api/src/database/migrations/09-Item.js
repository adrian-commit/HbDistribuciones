'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('items', { 
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true 
      },
      price: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      quantity: {
        type: Sequelize.BIGINT,
        allowNull: false
      }
    });
    await queryInterface.addColumn('items','product',{
      type: Sequelize.BIGINT,
      allowNull: true,
      references: {
        model:'products',
        key:'id'
      },
      onUpdate:'set null',
      onDelete:'set null'
    });
    await queryInterface.addColumn('items','request',{
      type: Sequelize.BIGINT,
      allowNull: true,
      references: {
        model:'requests',
        key:'id'
      },
      onUpdate:'set null',
      onDelete:'set null'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('requests','product');
    await queryInterface.removeColumn('requests','request');
    await queryInterface.dropTable('items');
  }
};