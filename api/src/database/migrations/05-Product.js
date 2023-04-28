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
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      price: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      discount: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      total: {
        type: Sequelize.BIGINT,
        allowNull: false,
        defaultValue: 0
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
    await queryInterface.addIndex('products',['id'],{length:255})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeIndex('products',['products_id'])
    await queryInterface.removeColumn('products','model')
    await queryInterface.dropTable('products');
  }
};
