'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        email: 'usuario@prueba.com',
        password: '1234'
      },
      {
        id: 2,
        email: 'vendedor@prueba.com',
        password: '1234'
      }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('users', null, {});
  }
};
