'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('items', [
      {
        id: 1,
        product: 1,
        request: 1,
        price: 14710,
        quantity: 20
      },
      {
        id: 2,
        product: 2,
        request: 1,
        price: 25216.8,
        quantity: 30
      },
      {
        id: 3,
        product: 3,
        request: 1,
        price: 11555.8,
        quantity: 10
      }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('items', null, {});
  }
};
