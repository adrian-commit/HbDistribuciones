'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('modelss', { 
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true 
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
    await queryInterface.addColumn('modelss','categoryId',{
        type: Sequelize.BIGINT,
        allowNull: true,
        references:{
          model:'categories',
          key:'id'
        },
        onUpdate:'set null',
        onDelete:'set null'
    })
    await queryInterface.addIndex('modelss',['id'],{length:255})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeIndex('modelss',['modelss_id'])
    await queryInterface.removeColumn('modelss','categoryId');
    await queryInterface.dropTable('modelss');
  }
};