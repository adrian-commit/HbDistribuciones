'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        userName:'admin',
        email: 'usuario@prueba.com',
        password: '$2a$10$q5VAn4Fbw7fBOvoimQIPze.YoOxnfzvCll8EVQ40SNIRn/ywhQOs2',
        avatar: 'http://localhost:3000/resources/img/avatar-female.svg',
      },
      {
        id: 2,
        userName:'vendedor',
        email: 'vendedor@prueba.com',
        password: '$2a$10$q5VAn4Fbw7fBOvoimQIPze.YoOxnfzvCll8EVQ40SNIRn/ywhQOs2',
        phone: 362412345678,
        avatar: 'http://localhost:3000/resources/img/avatar-seller-male.svg',
        comission: 20
      }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('users', null, {});
  }
};
