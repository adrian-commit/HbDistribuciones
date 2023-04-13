'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        userName:'admin',
        email: 'usuario@prueba.com',
        password: '$2a$10$q5VAn4Fbw7fBOvoimQIPze.YoOxnfzvCll8EVQ40SNIRn/ywhQOs2'
      },
      {
        id: 2,
        userName:'vendedor',
        email: 'vendedor@prueba.com',
        password: '$2a$10$q5VAn4Fbw7fBOvoimQIPze.YoOxnfzvCll8EVQ40SNIRn/ywhQOs2',
        comission: 20
      }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('users', null, {});
  }
};
