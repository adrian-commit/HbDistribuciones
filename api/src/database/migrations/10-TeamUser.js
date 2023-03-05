'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('teamsusers', { 
      id: {
        type: Sequelize.INTEGER ,
        autoIncrement: true,
        primaryKey: true 
      },
      teamId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        /* references: {
          model:Team,
          key: 'id',
        },
        onDelete: 'set null',
        onUpdate: 'set null', */
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: true,
       /*  references: {
          model:User,
          key: 'id',
        },
        onDelete: 'set null',
        onUpdate: 'set null',
      */}
    });

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('teamsusers');

  }
};