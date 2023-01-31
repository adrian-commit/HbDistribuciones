'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('categories', [
      {
        id: 1,
        name: 'BISAGRAS',
        sub: 0
      },
      {
        id: 2,
        name: 'BISAGRAS PARABOLICAS',
        sub: 1
      }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('categories', null, {});
  }
};