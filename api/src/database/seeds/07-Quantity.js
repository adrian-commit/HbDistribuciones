'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('quantities', [
      {
        id: 1,
        productId: 1,
        stock: 2000
      },
      {
        id: 2,
        productId: 2,
        stock: 2200
      }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('quantities', null, {});
  }
};
