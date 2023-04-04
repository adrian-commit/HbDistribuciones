'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('productsImage', [
      {
        id: 1,
        img:'defaultImage.png',
        productId: 1
      },
      {
        id: 2,
        img:'defaultImage.png',
        productId: 2
      },
      {
        id: 3,
        img:'defaultImage.png',
        productId: 3
      },
      {
        id: 4,
        img:'defaultImage.png',
        productId: 4
      },
      {
        id: 5,
        img:'defaultImage.png',
        productId: 5
      },
      {
        id: 6,
        img:'defaultImage.png',
        productId: 6
      }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('productsImage', null, {});
  }
};
