'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usersTeams', { 
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true 
      },
      userId: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model:'users',
          field:'id'
        },
        onUpdate:'set null',
        onDelete:'set null'
      },
      teamId: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model:'teams',
          field:'id'
        },
        onUpdate:'set null',
        onDelete:'set null'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('usersTeams');
  }
};