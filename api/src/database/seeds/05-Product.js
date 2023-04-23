'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('products', [
      {
        id: 1,
        name: '1" CAJA 24 UNID',
        sku: 'Z0038',
        model: 1,
        price: 735,
        total: 5000
      },
      {
        id: 2,
        name: '1,5" CAJA 24 UNID',
        sku: 'Z0039',
        model: 1,
        price: 840,
        total: 5000
      },
      {
        id: 3,
        name: '2" CAJA 24 UNID',
        sku: 'Z0040',
        model: 1,
        price: 1155,
        total: 5000
      },
      {
        id: 4,
        name: '2,5" CAJA 24 UNID',
        sku: 'Z0041',
        model: 1,
        price: 1449,
        total: 5000
      },
      {
        id: 5,
        name: '3" CAJA 24 UNID',
        sku: 'Z0042',
        model: 1,
        price: 1910,
        total: 5000
      },
      {
        id: 6,
        name: '4" CAJA 12 UNID',
        sku: 'Z0043',
        model: 1,
        price: 1889,
        total: 5000
      },
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('products', null, {});
  }
};
