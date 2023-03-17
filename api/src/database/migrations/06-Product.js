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
      price: {
        type: Sequelize.BIGINT,
        allowNull: false
      }
    });
    await queryInterface.addColumn('products','model',{
      type: Sequelize.BIGINT,
      allowNull: true,
      references: {
        model:'modelss',
        key:'id'
      },
      onUpdate:'set null',
      onDelete:'set null'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('products','model')
    await queryInterface.dropTable('products');
  }
};
