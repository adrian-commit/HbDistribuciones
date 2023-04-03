'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('warehouses', {
       id:{
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true 
       },
       name: {
        type: Sequelize.TEXT,
        allowNull: false
       },
       address:{
        type: Sequelize.TEXT,
        allowNull:false
       },
       phone:{
        type: Sequelize.BIGINT,
        allowNull: false
       } 
      });
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('warehouses');
    
  }
};
