'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clients', [
      {
        id: 1,
        name: 'Cliente',
        email: 'pruebaCliente@prueba.com',
        address: '1234',
        phone: 3624123456,
        zoneId: 1
      }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('clients', null, {});
  }
};
