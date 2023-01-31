'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('quantities', [
      {
        id: 1,
        product: 1,
        stock: 2000
      },
      {
        id: 2,
        product: 2,
        stock: 2200
      }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('quantities', null, {});
  }
};
