'use strict';

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
        allowNull: true,
        references: {
          model:'users',
          field:'id'
        },
        onUpdate:'set null',
        onDelete:'set null'
      },
      client: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model:'clients',
          field:'id'
        },
        onUpdate:'set null',
        onDelete:'set null'
      },
      track: {
        type: Sequelize.DATE,
        allowNull: true
      },
      comission: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      discount: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      total: {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      send: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        default: true
      },
      status:{
        type: Sequelize.INTEGER,
        allowNull: true,
        default: 0
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('requests');
  }
};
