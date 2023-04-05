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
      track: {
        type: Sequelize.DATE,
        allowNull: false
      },
      comission: {
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
    await queryInterface.addColumn('requests','clientId',{
      type: Sequelize.BIGINT,
      allowNull: true,
      references: {
        model:'clients',
        key:'id'
      },
      onUpdate:'set null',
      onDelete:'set null'
    });
    await queryInterface.addColumn('requests','UserId',{
      type: Sequelize.BIGINT,
      allowNull: true,
      references: {
        model:'users',
        key:'id'
      },
      onUpdate:'set null',
      onDelete:'set null'
    });
    await queryInterface.addIndex('requests',['id'])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeIndex('requests',['requests_id'])
    await queryInterface.removeColumn('requests','sellerId');
    await queryInterface.removeColumn('requests','clientId');
    await queryInterface.dropTable('requests');
  }
};
