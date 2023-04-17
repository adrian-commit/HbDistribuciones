'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('modelsImage', { 
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true 
      },
      img: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: 'null'
      } 
    });
    await queryInterface.addColumn('modelsImage','modelId',{
      type: Sequelize.BIGINT,
      allowNull: true,
      references: {
        model:'modelss',
        key:'id'
      },
      onUpdate:'set null',
      onDelete:'set null'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('modelsImage','modelId');
    await queryInterface.dropTable('modelsImage');
  }
};
