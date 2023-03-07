'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('requests', { 
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true 
      },
      seller: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      client: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      track: {
        type: Sequelize.DATE,
        allowNull: false
      },
      comission: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      discount: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      total: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      send: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      status:{
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('requests');
  }
};
