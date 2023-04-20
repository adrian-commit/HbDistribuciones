'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('quantities', [
      {
        id: 1,
        productId: 1,
        stock: 2000,
        placeId: 1
      },
      {
        id: 2,
        productId: 1,
        stock: 2200,
        placeId: 2
      },
      {
        id: 3,
        productId: 1,
        stock: 600,
        placeId: 3
      },
      {
        id: 4,
        productId: 2,
        stock: 1000,
        placeId: 1
      },
      {
        id: 5,
        productId: 2,
        stock: 2200,
        placeId: 2
      },
      {
        id: 6,
        productId: 2,
        stock: 800,
        placeId: 3
      },
      {
        id: 7,
        productId: 3,
        stock: 1500,
        placeId: 1
      },
      {
        id: 8,
        productId: 3,
        stock: 200,
        placeId: 2
      },
      {
        id: 9,
        productId: 3,
        stock: 600,
        placeId: 3
      },
      {
        id: 10,
        productId: 4,
        stock: 800,
        placeId: 1
      },
      {
        id: 11,
        productId: 4,
        stock: 2600,
        placeId: 2
      },
      {
        id: 12,
        productId: 4,
        stock: 1500,
        placeId: 3
      },
      {
        id: 13,
        productId: 5,
        stock: 0,
        placeId: 1
      },
      {
        id: 14,
        productId: 5,
        stock: 0,
        placeId: 2
      },
      {
        id: 15,
        productId: 5,
        stock: 0,
        placeId: 3
      },
      {
        id: 16,
        productId: 6,
        stock: 800,
        placeId: 1
      },
      {
        id: 17,
        productId: 6,
        stock: 2200,
        placeId: 2
      },
      {
        id: 18,
        productId: 6,
        stock: 500,
        placeId: 3
      },

    ], {});
  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('quantities', null, {});
  }
};
