'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('productsImage', { 
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true 
      },
      img: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: 'defaultImage.png'
      } 
    });
    await queryInterface.addColumn('productsImage','productId',{
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
    await queryInterface.removeColumn('productsImage','productId');
    await queryInterface.dropTable('productsImage');
  }
};
