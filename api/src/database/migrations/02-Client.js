'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('clients', { 
      id:{
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true 
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      email:{
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
      },
      address:{
        type: Sequelize.TEXT,
        allowNull: false
      },
      phone:{
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true
      }
    });
    await queryInterface.addIndex('clients',['id'])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeIndex('clients',['clients_id'])
    await queryInterface.dropTable('clients');
  }
};
