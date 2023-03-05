'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('categories', [
      {
        id: 1,
        name: 'BISAGRAS',
        sub: 0
<<<<<<< HEAD
=======
      },
      {
        id: 2,
        name: 'BISAGRAS PARABOLICAS',
        sub: 1
>>>>>>> ef973c7c7550e19da7448c52cc8785f1e377aace
      }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('categories', null, {});
  }
};