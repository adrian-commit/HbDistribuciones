'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('categories', [
      {
        id: 1,
        name: 'HERRAJES',
        sub: null
      },
      {
        id: 2,
        name: 'BULONERÍA Y TORNILLERÍA',
        sub: null
      },
      {
        id: 3,
        name: 'BISAGRAS',
        sub: 1
      },
      {
        id: 4,
        name: 'BISAGRAS2',
        sub: 1
      },

      
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('categories', null, {});
  }
};