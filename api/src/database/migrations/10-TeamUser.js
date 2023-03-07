'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('teamsUsers', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      teamId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: 'teams'
          },
          key: 'id'
        },
        onDelete: 'set null',
        onUpdate: 'set null'
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: 'users'
          },
          key: 'id'
        },
        onDelete: 'set null',
        onUpdate: 'set null'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('teamsUsers');
  }
};
