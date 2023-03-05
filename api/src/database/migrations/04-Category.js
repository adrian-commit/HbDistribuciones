'use strict';

<<<<<<< HEAD
/** @type {import('sequelize-cli').Migration} */
=======
>>>>>>> ef973c7c7550e19da7448c52cc8785f1e377aace
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('categories', { 
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true 
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      sub: {
        type: Sequelize.BIGINT,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('categories');
  }
};
