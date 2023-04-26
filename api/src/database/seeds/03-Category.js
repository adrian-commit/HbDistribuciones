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
        name: 'FORJADOS',
        sub: null
      },
      {
        id: 4,
        name: 'FERRETERÍA',
        sub: null
      },
      {
        id: 5,
        name: 'SANITARIOS',
        sub: null
      },
      {
        id: 6,
        name: 'FORJADOS',
        sub: null
      },
      {
        id: 7,
        name: 'FORJADOS',
        sub: null
      },
      {
        id: 8,
        name: 'BISAGRAS',
        sub: 1
      }

      
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('categories', null, {});
  }
};