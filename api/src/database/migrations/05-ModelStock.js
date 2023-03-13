'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('models', { 
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true 
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
    });
    await queryInterface.addColumn('models','category',{
        type: Sequelize.BIGINT,
        allowNull: true,
        references:{
          model:'categories',
          key:'id'
        },
        onUpdate:'set null',
        onDelete:'set null'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('models','category');
    await queryInterface.dropTable('models');
  }
};