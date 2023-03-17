'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('modelss', [
      {
        id: 1,
        name: 'LIBRO HIERRO BRONZEADO',
        categoryId: 1
      }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('modelss', null, {});
  }
};
