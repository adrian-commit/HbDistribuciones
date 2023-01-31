'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('teams', [
      {
        id: 1,
        name: 'Administrativos',
        level: 1
      },
      {
        id: 2,
        name: 'Vendedores',
        level: 2
      }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('teams', null, {});
  }
};
