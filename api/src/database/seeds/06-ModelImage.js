'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('modelsImage', [
      {
        id: 1,
        img:'http://localhost:3000/resources/img/sinfoto.jpeg',
        modelId: 1
      }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('modelsImage', null, {});
  }
};
