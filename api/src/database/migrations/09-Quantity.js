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
    await queryInterface.addColumn('quantities','productId',{
      type: Sequelize.BIGINT,
      allowNull: true,
      references: {
        model:'products',
        key:'id'
      },
      onUpdate:'set null',
      onDelete:'set null'
    }),
    await queryInterface.addColumn('quantities','placeId',{
      type: Sequelize.BIGINT,
      allowNull: true,
      references: {
        model:'warehouses',
        key:'id'
      },
      onUpdate:'set null',
      onDelete:'set null'
    })
    await queryInterface.addIndex('quantities',['id'],{length:255})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeIndex('quantities',['quantities_id'])
    await queryInterface.removeColumn('quantities','placeId');
    await queryInterface.removeColumn('quantities','productId');
    await queryInterface.dropTable('quantities');
  }
};
