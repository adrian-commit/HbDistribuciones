'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('categories', [
      {
        id: 1,
        name: 'BISAGRAS',
        sub: null
      },
      {
        id: 2,
        name: 'BISAGRAS CURVAS PLATEADAS',
        sub: 1
      },
      
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('categories', null, {});
  }
};