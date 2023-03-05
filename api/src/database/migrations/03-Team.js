'use strict';

<<<<<<< HEAD
/** @type {import('sequelize-cli').Migration} */
=======
>>>>>>> ef973c7c7550e19da7448c52cc8785f1e377aace
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
        allowNull: false
      },
      level: {
        type: Sequelize.INTEGER,
        allowNull: false,
        default: 0
      } 
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('teams');
  }
};