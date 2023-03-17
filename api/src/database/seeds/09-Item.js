'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('items', [
      {
        id: 1,
        price: 14710,
        quantity: 20,
        product: 1,
        request: 1
      },
      {
        id: 2,
        price: 25216.8,
        quantity: 30,
        product: 2,
        request: 1
      },
      {
        id: 3,
        price: 11555.8,
        quantity: 10,
        product: 3,
        request: 1
      }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('items', null, {});
  }
};
