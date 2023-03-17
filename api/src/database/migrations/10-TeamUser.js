'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('teamsUsers', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
      },
      teamId: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: 'teams',
          key: 'id'
        },
        onDelete: 'set null',
        onUpdate: 'set null'
      },
      userId: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model:'users',
          key: 'id'
        },
        onDelete: 'set null',
        onUpdate: 'set null'
      }
    });
    await queryInterface.addConstraint('teamsUsers', {
      fields: ['userId','teamId'],
      type:'unique',
      name:'user_team_unique_constrait'
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('teamsUsers','user_team_unique_constrait');
    await queryInterface.dropTable('teamsUsers');
  }
};
