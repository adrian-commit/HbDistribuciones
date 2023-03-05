'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('models', [
      {
        id: 1,
        name: 'LIBRO HIERRO BRONZEADO',
        category: 1
      }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('models', null, {});
  }
};
