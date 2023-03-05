'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', { 
      id:{
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
      },
      email:{
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
      },
      password:{
        type: Sequelize.TEXT,
        allowNull: false
      } 
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
