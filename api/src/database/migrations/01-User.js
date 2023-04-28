'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', { 
      id:{
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
      },
      userName:{
        type: Sequelize.TEXT,
        allowNull: false
      },
      email:{
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
      },
      password:{
        type: Sequelize.TEXT,
        allowNull: false
      },
      phone: {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      avatar: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      comission:{
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      }, 
    });
    await queryInterface.addIndex('users',['id'],{
      length: 255
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeIndex('users',['users_id'])
    await queryInterface.dropTable('users');
  }
};
