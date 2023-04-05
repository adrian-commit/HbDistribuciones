'use strict';

/** @type {import('sequelize-cli').Migration} */
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
      }
    });
    await queryInterface.addColumn('categories','sub',{
      type: Sequelize.BIGINT,
      allowNull: true,
      references: {
        model: 'categories',
        key:'id'
      },
      onUpdate:'set null',
      onDelete:'set null'
    })
    await queryInterface.addIndex('categories',['id'])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeIndex('categories',['categories_id'])
    await queryInterface.removeColumn('categories', 'sub');
    await queryInterface.dropTable('categories');
  }
};
