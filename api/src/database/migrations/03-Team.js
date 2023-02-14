'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('teams', { 
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true 
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      level: {
        type: Sequelize.INTEGER,
        allowNull: true,
        default: 0
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('teams');
  }
};