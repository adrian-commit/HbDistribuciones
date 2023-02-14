'use strict';

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
        allowNull: true,
        unique: true
      },
      sub: {
        type: Sequelize.BIGINT,
        allowNull: true
        // references: {
        //   model:'categories',
        //   field:'id'
        // },
        // onUpdate:'set null',
        // onDelete:'set null'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('categories');
  }
};
