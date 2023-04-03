'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('warehouses', [
      {
        id: 1,
        name: "ZONA 1",
        address: "CALLE 1",
        phone: 3624123456
      },
      {
        id: 2,
        name: "ZONA 2",
        address: "CALLE 2",
        phone: 3624789123
      },
      {
        id: 3,
        name: "ZONA 3",
        address: "CALLE 3",
        phone: 3624456789
      },
      
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('warehouses', null, {});
  }
};
