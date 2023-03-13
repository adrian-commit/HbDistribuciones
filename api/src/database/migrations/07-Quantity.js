'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('quantities', { 
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true 
      },
      stock: {
        type: Sequelize.BIGINT,
        defaultValue: 0
      }
    });
    await queryInterface.addColumn('quantities','product',{
      type: Sequelize.BIGINT,
      allowNull: true,
      references: {
        model:'products',
        key:'id'
      },
      onUpdate:'set null',
      onDelete:'set null'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('quantities','product');
    await queryInterface.dropTable('quantities');
  }
};
