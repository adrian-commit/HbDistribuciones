'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('requests', [
      {
        id: 1,
        sellerId: 2,
        clientId: 1,
        track: '2022-05-16',
        comission: 5000,
        discount: 8000,
        total: 43482.6,
        send: false,
        status: 0
      }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('requests', null, {});
  }
};